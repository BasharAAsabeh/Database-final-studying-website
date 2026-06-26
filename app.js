const STUDY_ORDER = [
  "Ch01",
  "Ch02",
  "Ch03",
  "Ch09",
  "Lab1",
  "Lab2",
  "Lab3",
  "Ch05",
  "Lab4",
  "Lab5",
  "Lab6",
  "Ch14",
  "Lab7",
  "Lab8",
  "Lab9"
];
const CHAPTER_ORDER = ["Ch01", "Ch02", "Ch03", "Ch05", "Ch09", "Ch14"];
const LAB_ORDER = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5", "Lab6", "Lab7", "Lab8", "Lab9"];
const QUIZ_SHORT_TITLES = {
  Ch03: "ER Model",
  Ch05: "Relational Data Model and Constraints",
  Ch09: "ER to Relational Mapping",
  Ch14: "Functional Dependencies and Normalization",
  Lab7: "Aggregating Data"
};
const QUESTION_TYPES = [
  "Multiple Choice",
  "True / False",
  "Fill in the Blank",
  "SQL Output / Interpretation",
  "Normalization",
  "ER Mapping"
];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const state = {
  activePage: "roadmap",
  done: new Set(),
  sections: [],
  byId: new Map(),
  quizQuestions: [],
  wrongQuestionIds: new Set(),
  quiz: {
    active: false,
    finished: false,
    mode: "Full Review",
    topic: "All",
    difficulty: "All",
    type: "All",
    count: "10",
    currentIndex: 0,
    selectedAnswer: "",
    submitted: false,
    lastCorrect: false,
    questions: [],
    correct: 0,
    wrong: 0,
    wrongItems: []
  }
};

const view = document.querySelector("#view");
const summary = document.querySelector("#page-summary");
const tabs = Array.from(document.querySelectorAll(".page-tab"));

init();

async function init() {
  bindTabs();

  try {
    if (!Array.isArray(window.STUDY_SECTIONS) || !window.STUDY_SECTIONS.length) {
      throw new Error("Could not load studyData.js");
    }
    state.sections = window.STUDY_SECTIONS;
    state.byId = new Map(state.sections.map((section) => [section.id, section]));
    state.quizQuestions = buildQuizQuestions(state.sections);
    const initial = parseRoute();
    renderPage(initial.page, initial.target);
  } catch (error) {
    renderError(error);
  }
}

function bindTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      history.replaceState(null, "", `#${tab.dataset.page}`);
      renderPage(tab.dataset.page);
    });
  });
}

window.addEventListener("hashchange", () => {
  if (!state.sections.length) {
    return;
  }
  const route = parseRoute();
  renderPage(route.page, route.target);
});

function parseRoute() {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (hash === "labs" || hash === "chapters" || hash === "roadmap" || hash === "quiz") {
    return { page: hash, target: "" };
  }
  if (/^Lab\d+$/.test(hash)) {
    return { page: "labs", target: hash };
  }
  if (/^Ch\d+$/.test(hash)) {
    return { page: "chapters", target: hash };
  }
  return { page: "roadmap", target: "" };
}

function parseSource(markdown) {
  const sourceStart = markdown.indexOf("## Source Material");
  const source = sourceStart >= 0 ? markdown.slice(sourceStart) : markdown;
  const sections = [];
  const sectionRegex = /(?:^|\n)### ((?:Lab|Ch)\d+)\s+—\s+(.+?)\n([\s\S]*?)(?=\n### (?:Lab|Ch)\d+\s+—\s+|$)/g;
  let match;

  while ((match = sectionRegex.exec(source))) {
    const [, id, title, rawBody] = match;
    const sourceFile = rawBody.match(/_Source file:\s*`([^`]+)`_/);
    const item = {
      id,
      title: title.trim(),
      sourceFile: sourceFile ? sourceFile[1] : "",
      type: id.startsWith("Lab") ? "lab" : "chapter",
      blocks: []
    };

    const blockRegex = /(?:^|\n)#### (.+?)\n([\s\S]*?)(?=\n#### |$)/g;
    let blockMatch;
    while ((blockMatch = blockRegex.exec(rawBody))) {
      const blockTitle = blockMatch[1].trim();
      const blockBody = blockMatch[2].trim();
      item.blocks.push(item.type === "lab" ? parseLabBlock(blockTitle, blockBody) : parseChapterSlide(blockTitle, blockBody));
    }

    sections.push(item);
  }

  return sections;
}

function parseLabBlock(title, body) {
  const codeMatch = body.match(/\*\*Query\/Code\*\*\s*```([a-z]*)\n([\s\S]*?)```/i)
    || body.match(/\*\*Query\/Code\*\*\s*\n+```([a-z]*)\n([\s\S]*?)```/i);
  const whatMatch = body.match(/\*\*What it does:\*\*\s*([^\n]+)/i);
  const notesMatch = body.match(/\*\*Additional notes:\*\*\s*([\s\S]+)$/i);

  return {
    title,
    language: codeMatch ? codeMatch[1] : "",
    code: codeMatch ? codeMatch[2].replace(/\n$/, "") : "",
    what: whatMatch ? whatMatch[1].trim() : "",
    notes: notesMatch ? notesMatch[1].trim() : ""
  };
}

function parseChapterSlide(title, body) {
  return {
    title,
    lines: body.split(/\n/).map((line) => line.replace(/\s+$/, "")).filter(Boolean)
  };
}

function renderPage(page, targetId = "") {
  state.activePage = page;
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.page === page));
  view.classList.add("is-leaving");

  window.setTimeout(() => {
    view.innerHTML = "";
    view.append(page === "roadmap"
      ? renderRoadmap()
      : page === "labs"
        ? renderStudyPage("lab", targetId)
        : page === "chapters"
          ? renderStudyPage("chapter", targetId)
          : renderQuizPage());
    view.classList.remove("is-leaving");
    view.classList.add("is-entering");
    updateSummary(page);
    window.setTimeout(() => view.classList.remove("is-entering"), 280);

    if (targetId) {
      openAndScrollTo(targetId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 180);
}

function updateSummary(page) {
  const text = {
    roadmap: "Click each checkpoint to jump into its related lab or chapter.",
    labs: "Lab manuals are grouped by lab with preserved query/code blocks.",
    chapters: "Theory chapters are grouped by slide as source-preserving cram notes.",
    quiz: "Active recall quiz with filters, scoring, explanations, and weak-area review."
  };
  summary.textContent = text[page];
}

function renderRoadmap() {
  const fragment = document.createDocumentFragment();
  const head = element("div", "page-head");
  const copy = element("div");
  copy.append(element("p", "eyebrow", "Page 1"));
  copy.append(element("h2", "", "Roadmap"));
  copy.append(element("p", "", "Study in this order. Checklist progress stays in memory while this page is open."));
  head.append(copy, renderProgress());
  fragment.append(head);

  const grid = element("div", "roadmap-grid");
  STUDY_ORDER.forEach((id, index) => {
    const section = state.byId.get(id);
    const item = element("button", `roadmap-item ${state.done.has(id) ? "is-done" : ""}`);
    item.type = "button";
    item.dataset.id = id;
    item.append(element("span", "check-dot", "✓"));
    const label = element("span");
    label.append(element("span", "roadmap-title", `${index + 1}. ${id}`));
    label.append(element("span", "roadmap-target", section ? section.title : ""));
    item.append(label, element("span", "arrow", "›"));
    item.addEventListener("click", () => {
      state.done.add(id);
      const page = id.startsWith("Lab") ? "labs" : "chapters";
      history.replaceState(null, "", `#${id}`);
      renderPage(page, id);
    });
    grid.append(item);
  });
  fragment.append(grid);
  return fragment;
}

function renderProgress() {
  const progress = element("aside", "progress-meter");
  const done = state.done.size;
  const percent = Math.round((done / STUDY_ORDER.length) * 100);
  const track = element("div", "meter-track");
  const fill = element("div", "meter-fill");
  fill.style.width = `${percent}%`;
  track.append(fill);
  progress.append(track, element("p", "meter-text", `${done}/${STUDY_ORDER.length} checked`));
  return progress;
}

function renderStudyPage(type, targetId = "") {
  const isLab = type === "lab";
  const order = isLab ? LAB_ORDER : CHAPTER_ORDER;
  const pageSections = order.map((id) => state.byId.get(id)).filter(Boolean);
  const fragment = document.createDocumentFragment();
  const head = element("div", "page-head");
  const copy = element("div");
  copy.append(element("p", "eyebrow", isLab ? "Page 2" : "Page 3"));
  copy.append(element("h2", "", isLab ? "Lab Manuals" : "Theoretical Chapters"));
  copy.append(element("p", "", isLab
    ? "Queries and code are preserved exactly from the embedded material, with the included explanations and notes."
    : "Chapter material is presented as compact slide-by-slide exam notes from the embedded material."));
  head.append(copy);
  fragment.append(head);

  const layout = element("div", "study-layout");
  layout.append(renderSubnav(pageSections), renderSections(pageSections, isLab, targetId));
  fragment.append(layout);
  return fragment;
}

function renderSubnav(sections) {
  const nav = element("nav", "subnav");
  nav.setAttribute("aria-label", "Section navigation");
  nav.append(element("h3", "", "Sections"));
  sections.forEach((section) => {
    const link = element("a", "", `${section.id} · ${section.title}`);
    link.href = `#${section.id}`;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openAndScrollTo(section.id);
    });
    nav.append(link);
  });
  return nav;
}

function renderSections(sections, isLab, targetId = "") {
  const stack = element("div", "section-stack");
  sections.forEach((section, index) => {
    const details = element("details", "study-section");
    details.id = section.id;
    if ((!targetId && index === 0) || section.id === targetId) {
      details.open = true;
    }
    const summaryLine = element("summary");
    const titleWrap = element("span");
    titleWrap.append(element("span", "summary-title", `${section.id} — ${section.title}`));
    titleWrap.append(element("span", "summary-meta", `${section.blocks.length} ${isLab ? "query/code blocks" : "slides"}`));
    summaryLine.append(titleWrap, element("span", "chevron", "›"));

    const body = element("div", "section-body");
    if (section.sourceFile) {
      body.append(element("p", "source-note", `Source file: ${section.sourceFile}`));
    }
    section.blocks.forEach((block) => body.append(isLab ? renderLabBlock(block) : renderChapterSlide(block)));
    details.append(summaryLine, body);
    stack.append(details);
  });
  return stack;
}

function renderLabBlock(block) {
  const card = element("article", "content-card");
  card.append(element("h4", "", block.title), element("p", "code-label", "Query/Code"));
  const pre = element("pre");
  const code = element("code");
  code.textContent = block.code;
  pre.append(code);
  card.append(pre);
  if (block.what) {
    card.append(markedLine("p", "what-line", "What it does:", block.what));
  }
  if (block.notes) {
    card.append(markedLine("p", "notes-line", "Additional notes:", block.notes));
  }
  return card;
}

function renderChapterSlide(slide) {
  const card = element("article", "chapter-slide");
  card.append(element("h4", "", slide.title));
  slide.lines.forEach((line) => {
    const isBullet = line.trimStart().startsWith("- ");
    const clean = isBullet ? line.trimStart().slice(2).trim() : line.trim();
    const depth = isBullet ? Math.min(Math.floor((line.length - line.trimStart().length) / 2), 2) : 0;
    const isCallout = /^(?:\*\*)?(definition|guideline|rule|note|bottom line)\b/i.test(clean);
    const row = element("p", isCallout ? "note-callout" : isBullet ? `note-line depth-${depth}` : "plain-line");
    row.innerHTML = inlineMarkdown(clean);
    card.append(row);
  });
  return card;
}

function buildQuizQuestions(sections) {
  const categoryMap = new Map(sections.map((section) => [
    section.id,
    `${section.id} — ${QUIZ_SHORT_TITLES[section.id] || section.title}`
  ]));
  return buildCuratedQuizBank(categoryMap);
}

function buildCuratedQuizBank(categoryMap) {
  const category = (sourceId) => categoryMap.get(sourceId) || sourceId;
  const q = (sourceId, slug, difficulty, type, question, answer, explanation, extras = {}) => ({
    id: `${sourceId.toLowerCase()}-${slug}`,
    sourceId,
    category: category(sourceId),
    difficulty,
    type,
    question,
    answer,
    explanation,
    ...extras
  });

  return [
    q("Lab1", "create-table-purpose", "Easy", "Multiple Choice", "What is the purpose of CREATE TABLE?", "To create a table with listed columns and constraints.", "The lab uses CREATE TABLE to define new tables such as emp_tbl, dept, and Student.", {
      choices: ["To create a table with listed columns and constraints.", "To permanently save a transaction.", "To sort query output.", "To remove duplicate rows."]
    }),
    q("Lab1", "desc-purpose", "Easy", "Fill in the Blank", "The SQL*Plus command used to display a table structure is ____.", "DESC", "The lab shows DESC(RIBE) table_name and DESCRIBE dept for table structure.", {
      acceptableAnswers: ["DESC", "DESCRIBE", "desc", "describe"]
    }),
    q("Lab1", "alter-add", "Medium", "SQL Output / Interpretation", "What does this command do?", "It adds the Collage column to Student.", "ALTER TABLE with ADD adds a new column or constraint.", {
      sql: "ALTER TABLE Student ADD Collage VARCHAR2(20);",
      choices: ["It adds the Collage column to Student.", "It drops the Student table.", "It inserts one Student row.", "It displays the Student table structure."]
    }),
    q("Lab1", "drop-table", "Medium", "True / False", "DROP TABLE deletes both the table data and structure, and the statement cannot be rolled back.", true, "The lab notes state that all data and structure are deleted and you cannot roll back this statement."),
    q("Lab1", "rename", "Easy", "Multiple Choice", "Which command changes the name of a table, view, sequence, or synonym?", "RENAME", "The lab uses RENAME dept TO department and notes that the owner can rename database objects.", {
      choices: ["RENAME", "ROLLBACK", "HAVING", "DISTINCT"]
    }),

    q("Lab2", "not-null", "Easy", "Multiple Choice", "What does a NOT NULL constraint require?", "A column value must be supplied.", "The lab defines NOT NULL on columns such as ename and deptno.", {
      choices: ["A column value must be supplied.", "A value must be unique across rows.", "A row must reference another table.", "A table must be dropped before insert."]
    }),
    q("Lab2", "primary-key", "Medium", "Multiple Choice", "What is the role of a PRIMARY KEY constraint in the lab examples?", "It identifies rows using the key column.", "The dept table uses PRIMARY KEY(deptno), and emp_tbl uses PRIMARY KEY(emp_no).", {
      choices: ["It identifies rows using the key column.", "It permits duplicate null key values.", "It formats date output.", "It filters grouped rows."]
    }),
    q("Lab2", "foreign-key", "Medium", "Multiple Choice", "What does the FOREIGN KEY constraint on emp.deptno require?", "The referenced department number must exist in dept.", "The lab creates emp_deptno_fk referencing dept(deptno).", {
      choices: ["The referenced department number must exist in dept.", "The employee name must be uppercase.", "The salary must be greater than commission.", "The row must be committed immediately."]
    }),
    q("Lab2", "check-range", "Easy", "SQL Output / Interpretation", "What condition is enforced by this CHECK constraint?", "deptno must be between 10 and 99.", "The lab shows CHECK (deptno BETWEEN 10 AND 99).", {
      sql: "CHECK (deptno BETWEEN 10 AND 99)",
      choices: ["deptno must be between 10 and 99.", "deptno must be null.", "deptno must reference empno.", "deptno must be sorted descending."]
    }),
    q("Lab2", "alter-add-constraint", "Medium", "Fill in the Blank", "ALTER TABLE can add or drop a constraint, but not ____ a constraint.", "MODIFY", "The lab notes say constraints can be added or dropped, but not modified.", {
      acceptableAnswers: ["MODIFY", "modify"]
    }),
    q("Lab2", "disable-cascade", "Hard", "Multiple Choice", "Why is CASCADE used when disabling a constraint?", "To disable dependent integrity constraints as well.", "The lab notes apply CASCADE to disable dependent integrity constraints.", {
      choices: ["To disable dependent integrity constraints as well.", "To sort rows in descending order.", "To force all rows to be deleted.", "To convert character data to dates."]
    }),
    q("Lab2", "user-constraints", "Easy", "Multiple Choice", "Which data dictionary view is used to view constraint definitions and names?", "USER_CONSTRAINTS", "The lab queries USER_CONSTRAINTS for constraint_name, constraint_type, and search_condition.", {
      choices: ["USER_CONSTRAINTS", "USER_TABLES", "USER_CATALOG", "SALGRADE"]
    }),

    q("Lab3", "insert-row", "Easy", "Multiple Choice", "What does INSERT INTO do?", "It adds new rows to a table.", "The lab states that INSERT adds new rows, one row at a time with the shown syntax.", {
      choices: ["It adds new rows to a table.", "It changes existing rows.", "It deletes all rows.", "It creates a primary key."]
    }),
    q("Lab3", "implicit-null", "Medium", "Multiple Choice", "How can an INSERT statement insert a null value implicitly?", "By omitting the column from the column list.", "The lab distinguishes implicit null insertion by omitting the column and explicit insertion with NULL.", {
      choices: ["By omitting the column from the column list.", "By using ORDER BY.", "By using DISTINCT.", "By adding a CHECK constraint."]
    }),
    q("Lab3", "sysdate", "Easy", "Fill in the Blank", "The function used in the lab to record the current date and time is ____.", "SYSDATE", "The lab notes that SYSDATE records the current date and time.", {
      acceptableAnswers: ["SYSDATE", "sysdate"]
    }),
    q("Lab3", "update-where", "Hard", "True / False", "If an UPDATE statement omits the WHERE clause, all rows in the table are modified.", true, "The lab states that all rows are modified if WHERE is omitted."),
    q("Lab3", "delete-where", "Medium", "True / False", "If a DELETE statement omits the WHERE clause, all rows in the table are deleted.", true, "The lab notes that specific rows are deleted with WHERE; all rows are deleted if WHERE is omitted."),
    q("Lab3", "commit", "Easy", "Fill in the Blank", "The command used to permanently save pending transaction changes is ____.", "COMMIT", "The lab shows COMMIT and describes it as permanently saving pending transaction changes.", {
      acceptableAnswers: ["COMMIT", "commit"]
    }),
    q("Lab3", "rollback", "Medium", "Multiple Choice", "Which command discards pending changes and restores the previous state of the data?", "ROLLBACK", "The lab says ROLLBACK undoes pending changes, restores the previous state, and releases locks.", {
      choices: ["ROLLBACK", "COMMIT", "RENAME", "DESC"]
    }),

    q("Lab4", "select-all", "Easy", "SQL Output / Interpretation", "What does this query retrieve?", "All columns from dept.", "SELECT * retrieves all columns from the listed table.", {
      sql: "SELECT *\nFROM dept;",
      choices: ["All columns from dept.", "Only distinct department numbers.", "The structure of dept.", "Grouped salary totals."]
    }),
    q("Lab4", "distinct", "Easy", "Fill in the Blank", "The keyword used to eliminate duplicate rows in a SELECT result is ____.", "DISTINCT", "The lab uses SELECT DISTINCT deptno to eliminate duplicate rows.", {
      acceptableAnswers: ["DISTINCT", "distinct"]
    }),
    q("Lab4", "null-arithmetic", "Hard", "True / False", "An arithmetic expression that contains a null value evaluates to null.", true, "The lab states that arithmetic expressions containing a null value evaluate to null."),
    q("Lab4", "alias-quotes", "Medium", "Multiple Choice", "Why are double quotes used around an alias such as \"Annual Salary\"?", "To preserve the alias as a multiword heading.", "The lab shows sal*12 \"Annual Salary\" as a column alias.", {
      choices: ["To preserve the alias as a multiword heading.", "To force a group function.", "To make the column NOT NULL.", "To create a foreign key."]
    }),
    q("Lab4", "concatenation", "Easy", "Fill in the Blank", "The operator used in the lab to concatenate character strings is ____.", "||", "The lab uses ename||job and ename ||' is a '||job for concatenation.", {
      acceptableAnswers: ["||"]
    }),

    q("Lab5", "where-clause", "Easy", "Multiple Choice", "Which clause restricts the rows returned by a SELECT statement?", "WHERE", "The lab states that rows are restricted by using the WHERE clause after FROM.", {
      choices: ["WHERE", "GROUP BY", "HAVING", "DESC"]
    }),
    q("Lab5", "strings-dates", "Medium", "True / False", "Character strings and date values are enclosed in single quotation marks.", true, "The lab states that character strings and date values are enclosed in single quotation marks."),
    q("Lab5", "between", "Easy", "Multiple Choice", "What does BETWEEN test?", "Whether a value is within a range.", "The lab uses BETWEEN 1000 AND 1500 to display rows based on a range.", {
      choices: ["Whether a value is within a range.", "Whether a value is null.", "Whether a value is in uppercase.", "Whether duplicate rows should be removed."]
    }),
    q("Lab5", "in-list", "Easy", "Multiple Choice", "What does the IN operator test?", "Whether a value is found in a list.", "The lab uses mgr IN (7902, 7566, 7788).", {
      choices: ["Whether a value is found in a list.", "Whether a pattern has one character.", "Whether a group should be filtered.", "Whether a table should be renamed."]
    }),
    q("Lab5", "like-percent", "Medium", "Fill in the Blank", "In a LIKE pattern, ____ denotes zero or many characters.", "%", "The lab states that % denotes zero or many characters and _ denotes one character.", {
      acceptableAnswers: ["%"]
    }),
    q("Lab5", "is-null", "Medium", "Multiple Choice", "Which operator tests for null values?", "IS NULL", "The lab uses WHERE mgr IS NULL to find rows with null manager values.", {
      choices: ["IS NULL", "IN", "BETWEEN", "DISTINCT"]
    }),
    q("Lab5", "precedence-parentheses", "Hard", "True / False", "Parentheses can be used to force priority in logical conditions.", true, "The lab contrasts conditions with and without parentheses and notes that parentheses force priority."),

    q("Lab6", "equijoin", "Medium", "SQL Output / Interpretation", "What is the join condition in this query?", "emp.deptno=dept.deptno", "The lab retrieves records with equijoins by matching department numbers from emp and dept.", {
      sql: "SELECT emp.empno, emp.ename, emp.deptno,\n       dept.deptno, dept.loc\nFROM emp, dept\nWHERE emp.deptno=dept.deptno;",
      choices: ["emp.deptno=dept.deptno", "emp.empno=dept.deptno", "dept.loc=emp.ename", "emp.sal BETWEEN deptno AND loc"]
    }),
    q("Lab6", "table-alias", "Easy", "Multiple Choice", "Why does the lab use table aliases such as e and d?", "To simplify queries.", "The lab notes that table aliases simplify queries.", {
      choices: ["To simplify queries.", "To create new tables.", "To disable constraints.", "To force null values."]
    }),
    q("Lab6", "nonequijoin", "Hard", "SQL Output / Interpretation", "What kind of join is shown by matching salary between low and high salary limits?", "A non-equijoin.", "The lab retrieves records with non-equijoins by using BETWEEN s.losal AND s.hisal.", {
      sql: "SELECT e.ename, e.sal, s.grade\nFROM emp e, salgrade s\nWHERE e.sal\nBETWEEN s.losal AND s.hisal;",
      choices: ["A non-equijoin.", "A self join.", "A primary key constraint.", "A rollback operation."]
    }),
    q("Lab6", "outer-join-purpose", "Medium", "Multiple Choice", "Why use an outer join?", "To also see rows that do not usually meet the join condition.", "The lab states that an outer join shows rows that do not usually meet the join condition.", {
      choices: ["To also see rows that do not usually meet the join condition.", "To remove duplicate rows.", "To make a column NOT NULL.", "To save a transaction."]
    }),
    q("Lab6", "outer-join-symbol", "Easy", "Fill in the Blank", "The Oracle outer join operator shown in the lab is ____.", "(+)", "The lab states that the outer join operator is the plus sign (+).", {
      acceptableAnswers: ["(+)", "+"]
    }),
    q("Lab6", "self-join", "Medium", "Multiple Choice", "What does a self join do in the lab example?", "It joins emp to itself to show worker-manager relationships.", "The lab uses emp worker and emp manager with worker.mgr = manager.empno.", {
      choices: ["It joins emp to itself to show worker-manager relationships.", "It joins emp to dept using loc.", "It disables dependent constraints.", "It displays table structure."]
    }),
    q("Lab6", "join-syntax", "Easy", "Fill in the Blank", "In the lab join syntax, the join condition belongs in the ____ clause.", "WHERE", "The lab shows joins with WHERE table1.column1 = table2.column2.", {
      acceptableAnswers: ["WHERE", "where"]
    }),
    q("Lab6", "outer-join-trap", "Hard", "True / False", "The lab's outer join operator is written in the WHERE clause, not as a separate JOIN keyword.", true, "The lab uses the Oracle (+) outer join syntax in WHERE conditions."),

    q("Lab7", "avg-sum", "Easy", "Multiple Choice", "Which group functions does the lab say are used for numeric data?", "AVG and SUM", "The lab notes that AVG and SUM can be used for numeric data.", {
      choices: ["AVG and SUM", "CONCAT and INSTR", "DESC and RENAME", "COMMIT and ROLLBACK"]
    }),
    q("Lab7", "min-max", "Easy", "True / False", "MIN and MAX can be used for any datatype.", true, "The lab states that MIN and MAX can be used for any datatype."),
    q("Lab7", "count-star", "Medium", "Multiple Choice", "What does COUNT(*) return?", "The number of rows in a table.", "The lab states that COUNT(*) returns the number of rows in a table.", {
      choices: ["The number of rows in a table.", "The number of nonnull values in one expression only.", "The maximum salary.", "The current date and time."]
    }),
    q("Lab7", "count-expr", "Medium", "Multiple Choice", "What does COUNT(expr) return?", "The number of nonnull rows for that expression.", "The lab states that COUNT(expr) returns the number of nonnull rows.", {
      choices: ["The number of nonnull rows for that expression.", "All rows including null values.", "The average including every null automatically.", "The number of tables owned by the user."]
    }),
    q("Lab7", "group-null", "Hard", "True / False", "Group functions ignore null values in the column.", true, "The lab states that group functions ignore null values."),
    q("Lab7", "nvl-aggregate", "Hard", "Multiple Choice", "Why use NVL with a group function?", "To force the group function to include null values as a replacement value.", "The lab says NVL forces group functions to include null values.", {
      choices: ["To force the group function to include null values as a replacement value.", "To create a table alias.", "To filter groups after GROUP BY.", "To disable a constraint."]
    }),
    q("Lab7", "group-by-rule", "Hard", "True / False", "Every selected column that is not inside a group function must appear in the GROUP BY clause.", true, "The lab warns that non-aggregate SELECT expressions must be in GROUP BY."),
    q("Lab7", "having", "Medium", "Fill in the Blank", "The ____ clause restricts groups after GROUP BY.", "HAVING", "The lab says WHERE cannot restrict groups; HAVING restricts groups.", {
      acceptableAnswers: ["HAVING", "having"]
    }),
    q("Lab7", "where-aggregate", "Hard", "True / False", "The WHERE clause can be used to restrict groups with AVG(sal) > 2000.", false, "The lab shows this as illegal and says HAVING is used to restrict groups."),

    q("Lab8", "subquery-parentheses", "Easy", "True / False", "The lab syntax encloses a subquery in parentheses.", true, "The lab shows the inner SELECT inside parentheses."),
    q("Lab8", "inner-first", "Medium", "Multiple Choice", "When a query uses a subquery in the WHERE clause, which query executes first according to the lab?", "The subquery executes first.", "The lab states that the inner query executes once before the main query.", {
      choices: ["The subquery executes first.", "The outer query executes first.", "Both queries are ignored.", "The HAVING clause always executes last."]
    }),
    q("Lab8", "single-row-error", "Hard", "Multiple Choice", "What error condition is shown when a single-row operator receives multiple rows from a subquery?", "Single-row subquery returns more than one row.", "The lab shows ORA-01427 for a single-row operator with a multiple-row subquery.", {
      choices: ["Single-row subquery returns more than one row.", "Primary key already exists.", "Column missing in GROUP BY.", "Child record found."]
    }),
    q("Lab8", "any-meaning", "Hard", "Multiple Choice", "For the ANY operator, what does > ANY mean in the lab notes?", "More than the MIN.", "The lab notes say > ANY is more than the MIN and < ANY is less than the MAX.", {
      choices: ["More than the MIN.", "More than the MAX.", "Less than the MIN.", "Equivalent to NOT IN."]
    }),
    q("Lab8", "all-meaning", "Hard", "Multiple Choice", "For the ALL operator, what does > ALL mean in the lab notes?", "More than the MAX.", "The lab notes say > ALL is more than the MAX and < ALL is less than the MIN.", {
      choices: ["More than the MAX.", "More than the MIN.", "Less than the MAX.", "Equivalent to IN."]
    }),
    q("Lab8", "eq-any", "Medium", "Fill in the Blank", "According to the lab notes, = ANY is equivalent to ____.", "IN", "The lab notes say = ANY is equivalent to IN.", {
      acceptableAnswers: ["IN", "in"]
    }),
    q("Lab8", "insert-subquery", "Medium", "SQL Output / Interpretation", "Why does this INSERT statement not use VALUES?", "It copies rows returned by a subquery.", "The lab says INSERT with a subquery copies rows from another table and does not use VALUES.", {
      sql: "INSERT INTO managers(id, name, salary, hiredate)\nSELECT empno, ename, sal, hiredate\nFROM emp\nWHERE job = 'MANAGER';",
      choices: ["It copies rows returned by a subquery.", "It creates a CHECK constraint.", "It disables dependent constraints.", "It filters grouped results."]
    }),
    q("Lab8", "delete-subquery", "Medium", "Multiple Choice", "What can a subquery do in a DELETE statement?", "Remove rows based on values from another table.", "The lab deletes employee rows where deptno is returned by a subquery against dept.", {
      choices: ["Remove rows based on values from another table.", "Create a table with a primary key.", "Display table structure.", "Sort rows by hiredate."]
    }),
    q("Lab8", "subquery-no-values", "Easy", "True / False", "Subqueries are useful when a query is based on unknown values.", true, "The lab summary states that subqueries are useful when a query is based on unknown values."),

    q("Lab9", "case-conversion", "Medium", "SQL Output / Interpretation", "Why does this condition find BLAKE when the literal is lowercase?", "UPPER converts the literal to uppercase for comparison.", "The lab uses UPPER('blake') to match ename values stored as uppercase.", {
      sql: "SELECT empno, ename, deptno\nFROM emp\nWHERE ename = UPPER('blake');",
      choices: ["UPPER converts the literal to uppercase for comparison.", "LOWER converts ename to lowercase.", "NVL replaces null names.", "COUNT ignores null values."]
    }),
    q("Lab9", "case-sensitive", "Hard", "True / False", "The lab shows that comparing ename to 'blake' directly returns no rows.", true, "The lab first queries ename = 'blake' and shows no rows selected."),
    q("Lab9", "concat", "Easy", "Multiple Choice", "What does CONCAT(ename, job) do in the lab's character function query?", "Combines employee name and job into one value.", "The lab output shows values such as MARTINSALESMAN.", {
      choices: ["Combines employee name and job into one value.", "Counts employee rows.", "Finds the minimum hiredate.", "Changes null commission to zero."]
    }),
    q("Lab9", "length", "Easy", "Fill in the Blank", "The character function that returns the length of ename in the lab query is ____.", "LENGTH", "The lab selects LENGTH(ename) with character manipulation functions.", {
      acceptableAnswers: ["LENGTH", "length"]
    }),
    q("Lab9", "instr", "Medium", "Multiple Choice", "What does INSTR(ename, 'A') report in the lab output?", "The position of A in the employee name.", "The lab lists INSTR(ENAME,'A') values such as 2 for MARTIN and 0 for TURNER.", {
      choices: ["The position of A in the employee name.", "The number of employee rows.", "The department location.", "The average commission."]
    }),
    q("Lab9", "nvl", "Medium", "SQL Output / Interpretation", "Why is NVL(comm,0) used in this annual compensation expression?", "It replaces null commission with 0 before arithmetic.", "The lab uses NVL so null commission does not make the arithmetic result null.", {
      sql: "SELECT ename, sal, comm, (sal*12)+NVL(comm,0)\nFROM emp;",
      choices: ["It replaces null commission with 0 before arithmetic.", "It groups rows by commission.", "It removes duplicate commissions.", "It converts salaries to dates."]
    }),
    q("Lab9", "substr-filter", "Medium", "Multiple Choice", "What kind of rows does SUBSTR(job,1,5) = 'SALES' select in the lab note?", "Rows where the first five job characters are SALES.", "The lab note uses SUBSTR(job,1,5) = 'SALES' with SALESMAN rows.", {
      choices: ["Rows where the first five job characters are SALES.", "Rows with null jobs.", "Rows grouped by job.", "Rows sorted by job length."]
    }),
    q("Lab9", "nvl-arithmetic", "Hard", "True / False", "Using NVL(comm,0) prevents a null commission from making the salary arithmetic expression null.", true, "The lab demonstrates NVL in (sal*12)+NVL(comm,0)."),

    q("Ch01", "database", "Easy", "Multiple Choice", "What is a database?", "A collection of related data.", "The chapter defines a database as a collection of related data.", {
      choices: ["A collection of related data.", "Only a software package.", "A single SQL query.", "A report generated by an application."]
    }),
    q("Ch01", "data", "Easy", "Multiple Choice", "What are data?", "Known facts that can be recorded and have an implicit meaning.", "The chapter defines data as known facts that can be recorded and have implicit meaning.", {
      choices: ["Known facts that can be recorded and have an implicit meaning.", "Only encrypted passwords.", "Only numeric values.", "A database catalog only."]
    }),
    q("Ch01", "mini-world", "Easy", "Fill in the Blank", "The part of the real world about which data is stored is called the ____.", "mini-world", "The chapter uses mini-world for the real-world part represented by the database.", {
      acceptableAnswers: ["mini-world", "Mini-world", "mini world", "Mini world"]
    }),
    q("Ch01", "dbms", "Easy", "Multiple Choice", "What is a DBMS?", "A software package/system that facilitates creation and maintenance of a computerized database.", "The chapter defines DBMS as software for creating and maintaining a computerized database.", {
      choices: ["A software package/system that facilitates creation and maintenance of a computerized database.", "The current state of all tuples only.", "A single end-user report.", "A relationship attribute."]
    }),
    q("Ch01", "metadata", "Medium", "Multiple Choice", "What does the DBMS catalog store in the database approach?", "Metadata describing structures, types, and constraints.", "The chapter says the catalog stores the database description, called metadata.", {
      choices: ["Metadata describing structures, types, and constraints.", "Only user passwords.", "Only query result rows.", "Only application screenshots."]
    }),

    q("Ch02", "data-model", "Easy", "Multiple Choice", "What does a data model provide?", "Concepts for describing the structure of a database.", "The chapter presents data models as concepts used to describe database structure.", {
      choices: ["Concepts for describing the structure of a database.", "A command for committing transactions.", "A way to concatenate strings.", "A SQL*Plus display command only."]
    }),
    q("Ch02", "schema-state", "Medium", "Multiple Choice", "What is the difference between a database schema and a database state?", "A schema is the database description; a state is the actual data at a particular time.", "The chapter distinguishes schema as the description and state/instance as the data at a moment.", {
      choices: ["A schema is the database description; a state is the actual data at a particular time.", "A schema is always temporary; a state never changes.", "A schema is a group function; a state is a join.", "They mean the same thing."]
    }),
    q("Ch02", "three-schema", "Medium", "Multiple Choice", "Which level of the three-schema architecture describes the whole database for a community of users?", "Conceptual schema.", "The chapter describes external, conceptual, and internal schemas; conceptual is the community-level database description.", {
      choices: ["Conceptual schema.", "External view only.", "Internal storage only.", "SQL output only."]
    }),
    q("Ch02", "external-schema", "Easy", "Multiple Choice", "What does an external schema describe?", "A user view of the database.", "The three-schema architecture supports multiple external views.", {
      choices: ["A user view of the database.", "Physical storage details only.", "All possible SQL errors.", "A primary key constraint only."]
    }),
    q("Ch02", "data-independence", "Medium", "True / False", "Data independence means lower-level schema changes should require only mapping changes, not application rewrites.", true, "The chapter says mappings between levels are changed in a DBMS that supports data independence."),
    q("Ch02", "ddl", "Easy", "Fill in the Blank", "The DBMS language used by the DBA and designers to specify a conceptual schema is ____.", "DDL", "The chapter identifies DDL as the data definition language.", {
      acceptableAnswers: ["DDL", "ddl"]
    }),
    q("Ch02", "classification", "Medium", "True / False", "DBMSs can be classified by data model, number of users, number of sites, cost, and types of access paths.", true, "The chapter lists these classification criteria."),

    q("Ch03", "entity", "Easy", "Multiple Choice", "What is an entity in ER modeling?", "A thing or object in the mini-world that is represented in the database.", "The ER chapter treats entities as mini-world objects represented in the database.", {
      choices: ["A thing or object in the mini-world that is represented in the database.", "Only a SQL WHERE condition.", "Only a group function.", "A rollback command."]
    }),
    q("Ch03", "attribute", "Easy", "Multiple Choice", "What does an attribute describe?", "A property of an entity or relationship.", "The chapter discusses attributes of entities and relationship types.", {
      choices: ["A property of an entity or relationship.", "A command that creates tables.", "A transaction lock.", "A query result order."]
    }),
    q("Ch03", "composite-attribute", "Medium", "Multiple Choice", "What is a composite attribute?", "An attribute that can be divided into smaller components.", "The chapter shows composite attributes such as Name with components.", {
      choices: ["An attribute that can be divided into smaller components.", "An attribute with exactly one atomic value.", "A primary key in every relation.", "A SQL group function."]
    }),
    q("Ch03", "multivalued", "Medium", "Multiple Choice", "What does a multivalued attribute allow?", "A set of values for one entity.", "The chapter defines multivalued attributes using power sets of possible values.", {
      choices: ["A set of values for one entity.", "Only one atomic value.", "No values at all.", "Only foreign key values."]
    }),
    q("Ch03", "key-attribute", "Easy", "Fill in the Blank", "An attribute whose values are distinct for each entity is a ____ attribute.", "key", "The ER material discusses key attributes as identifiers for entity types.", {
      acceptableAnswers: ["key", "Key"]
    }),
    q("Ch03", "weak-entity", "Medium", "Multiple Choice", "What makes a weak entity type weak?", "It depends on an owner entity and an identifying relationship for identification.", "The chapter states that a weak entity must participate in an identifying relationship with an owner entity.", {
      choices: ["It depends on an owner entity and an identifying relationship for identification.", "It has no attributes.", "It cannot participate in relationships.", "It is always a SQL view."]
    }),
    q("Ch03", "partial-key", "Medium", "Fill in the Blank", "A weak entity type can have a ____ key that helps distinguish weak entities related to the same owner.", "partial", "The weak entity material names a partial key of the weak entity type.", {
      acceptableAnswers: ["partial", "Partial"]
    }),
    q("Ch03", "recursive", "Hard", "Multiple Choice", "What is a recursive relationship type?", "A relationship type where the same entity type participates more than once in different roles.", "The chapter gives SUPERVISION as a recursive relationship type with supervisor and supervisee roles.", {
      choices: ["A relationship type where the same entity type participates more than once in different roles.", "A relationship with no attributes.", "A relation that violates 1NF.", "A command that rolls back itself."]
    }),
    q("Ch03", "nary", "Hard", "True / False", "In general, an n-ary relationship is not equivalent to n binary relationships.", true, "The chapter explicitly states that an n-ary relationship is not generally equivalent to n binary relationships."),
    q("Ch03", "relationship-attribute", "Medium", "Multiple Choice", "Where should an attribute such as Hours worked on WORKS_ON be modeled?", "As an attribute of the relationship type.", "The ER material includes attributes of relationship types for facts about the relationship instance.", {
      choices: ["As an attribute of the relationship type.", "As a DBMS catalog entry only.", "As a CHECK constraint only.", "As a SQL alias only."]
    }),

    q("Ch05", "relation", "Easy", "Multiple Choice", "In the relational model, what is a relation informally viewed as?", "A table.", "The chapter's informal definitions present a relation as a table.", {
      choices: ["A table.", "A transaction.", "A transaction command.", "A SQL prompt."]
    }),
    q("Ch05", "tuple", "Easy", "Fill in the Blank", "A row in a relation is called a ____.", "tuple", "The relational model chapter defines rows as tuples.", {
      acceptableAnswers: ["tuple", "Tuple"]
    }),
    q("Ch05", "domain", "Easy", "Multiple Choice", "What is a domain?", "A set of atomic values from which attribute values are drawn.", "The chapter defines domains as sets of atomic values.", {
      choices: ["A set of atomic values from which attribute values are drawn.", "A set of SQL commands.", "A user interface screen.", "A group of pending locks."]
    }),
    q("Ch05", "tuple-order", "Medium", "True / False", "The order of tuples in a relation is significant.", false, "The chapter shows the same relation state with a different tuple order, indicating order is not significant."),
    q("Ch05", "entity-integrity", "Medium", "Multiple Choice", "What does entity integrity require?", "No primary key value can be null.", "The relational constraints chapter states entity integrity on primary keys.", {
      choices: ["No primary key value can be null.", "Every SELECT must use DISTINCT.", "Every relation must have nested relations.", "Every update must be rolled back."]
    }),
    q("Ch05", "referential-integrity", "Hard", "Multiple Choice", "What does referential integrity require for a foreign key?", "The foreign key value must match an existing referenced key value or be null when allowed.", "The chapter describes foreign keys and referential integrity constraints between relations.", {
      choices: ["The foreign key value must match an existing referenced key value or be null when allowed.", "The foreign key must always be a character string.", "The foreign key must sort rows.", "The foreign key must contain duplicate nulls only."]
    }),
    q("Ch05", "superkey", "Medium", "Multiple Choice", "What is a superkey?", "A set of attributes that uniquely identifies tuples.", "The chapter defines superkeys through uniqueness of tuple values.", {
      choices: ["A set of attributes that uniquely identifies tuples.", "A group function that ignores nulls.", "A table alias.", "A command that drops columns."]
    }),

    q("Ch09", "strong-entity", "Medium", "ER Mapping", "How is a regular strong entity type mapped to a relation?", "Create a relation with its simple attributes and choose a key as the primary key.", "The mapping algorithm creates a relation for each regular entity type with simple attributes and a primary key.", {
      choices: ["Create a relation with its simple attributes and choose a key as the primary key.", "Create no relation unless it has a weak owner.", "Store it only as a multivalued attribute.", "Map it using HAVING."]
    }),
    q("Ch09", "weak-entity", "Hard", "ER Mapping", "When mapping a weak entity type, what is included from the owner entity?", "The owner primary key is included as a foreign key and part of the weak entity relation primary key.", "The mapping step includes the owner's primary key attributes; the primary key combines owner key and partial key.", {
      choices: ["The owner primary key is included as a foreign key and part of the weak entity relation primary key.", "Only the owner name as a literal string.", "No owner attributes.", "Only a CHECK constraint."]
    }),
    q("Ch09", "binary-1n", "Hard", "ER Mapping", "How is a binary 1:N relationship commonly mapped?", "Add the primary key of the 1-side as a foreign key on the N-side relation.", "The mapping algorithm maps 1:N by placing a foreign key in the relation on the N-side.", {
      choices: ["Add the primary key of the 1-side as a foreign key on the N-side relation.", "Always merge both entity types.", "Create a new relation with no keys.", "Ignore the relationship attributes."]
    }),
    q("Ch09", "binary-mn", "Hard", "ER Mapping", "How is a binary M:N relationship mapped?", "Create a new relation containing the participating primary keys as foreign keys.", "The algorithm creates a new relationship relation for M:N relationships.", {
      choices: ["Create a new relation containing the participating primary keys as foreign keys.", "Put a single foreign key on either side at random.", "Merge both entity types into one relation.", "Represent it only with ORDER BY."]
    }),
    q("Ch09", "multivalued", "Hard", "ER Mapping", "How is a multivalued attribute mapped?", "Create a new relation whose primary key combines the owner key and the multivalued attribute.", "The mapping step creates a new relation for each multivalued attribute and combines A and K as primary key.", {
      choices: ["Create a new relation whose primary key combines the owner key and the multivalued attribute.", "Store all values in one atomic column.", "Drop the attribute.", "Make it a HAVING clause."]
    }),
    q("Ch09", "nary", "Hard", "ER Mapping", "How is an n-ary relationship type mapped?", "Create a new relationship relation and include participating primary keys as foreign keys.", "The algorithm creates a new relation for n-ary relationships and includes participating entity keys.", {
      choices: ["Create a new relationship relation and include participating primary keys as foreign keys.", "Replace it with a single binary relationship every time.", "Use only the first entity key.", "Use a SQL alias."]
    }),
    q("Ch09", "relationship-attrs", "Medium", "ER Mapping", "What happens to simple attributes of a relationship during mapping?", "They are included in the relation that represents that relationship.", "The mapping steps include simple relationship attributes in the relationship relation.", {
      choices: ["They are included in the relation that represents that relationship.", "They are always discarded.", "They become DBMS languages.", "They become aggregate functions."]
    }),
    q("Ch09", "merged-11", "Medium", "ER Mapping", "When can merging two entity types and a 1:1 relationship into one relation be appropriate?", "When both participations are total.", "The mapping notes say the merged relation option may be appropriate when both participations are total.", {
      choices: ["When both participations are total.", "When the relationship is M:N.", "When the attribute is multivalued.", "When the query uses COUNT(*)."]
    }),
    q("Ch09", "foreign-key-purpose", "Medium", "ER Mapping", "In ER-to-relational mapping, what role do foreign keys usually play?", "They represent relationships between mapped relations.", "The mapping algorithm repeatedly includes primary keys of participating relations as foreign keys.", {
      choices: ["They represent relationships between mapped relations.", "They sort output rows.", "They calculate averages.", "They replace all primary keys."]
    }),

    q("Ch14", "redundancy", "Medium", "Normalization", "Why is redundant information a design problem?", "It wastes storage and can cause insertion, deletion, and update anomalies.", "The chapter lists storage waste and update anomalies as problems caused by redundancy.", {
      choices: ["It wastes storage and can cause insertion, deletion, and update anomalies.", "It guarantees every relation is in BCNF.", "It prevents all null values.", "It removes the need for keys."]
    }),
    q("Ch14", "update-anomaly", "Medium", "Normalization", "Which anomaly occurs when changing one fact requires changing the same value in many tuples?", "Update anomaly.", "The chapter's project-name example shows an update anomaly caused by redundant project data.", {
      choices: ["Update anomaly.", "Insertion anomaly.", "Deletion anomaly.", "Entity integrity constraint."]
    }),
    q("Ch14", "insert-anomaly", "Medium", "Normalization", "Which anomaly occurs when a project cannot be inserted unless an employee is assigned to it?", "Insert anomaly.", "The chapter gives this as an insert anomaly in EMP_PROJ.", {
      choices: ["Insert anomaly.", "Delete anomaly.", "Transitive rule.", "Foreign key cascade."]
    }),
    q("Ch14", "delete-anomaly", "Medium", "Normalization", "Which anomaly occurs when deleting the sole employee on a project also deletes the project information?", "Delete anomaly.", "The chapter describes project information disappearing when related employee rows are deleted.", {
      choices: ["Delete anomaly.", "Update anomaly.", "Augmentation rule.", "COUNT anomaly."]
    }),
    q("Ch14", "fd-definition", "Medium", "Normalization", "What does X -> Y mean in a functional dependency?", "If two tuples have the same X value, they must have the same Y value.", "The chapter defines X -> Y using equality of X implying equality of Y.", {
      choices: ["If two tuples have the same X value, they must have the same Y value.", "Y must be a foreign key to X.", "X and Y must be null.", "X must be a group function."]
    }),
    q("Ch14", "key-fd", "Medium", "True / False", "If K is a key of R, then K functionally determines all attributes in R.", true, "The chapter states that a key functionally determines all attributes because no distinct tuples share the same key value."),
    q("Ch14", "closure", "Hard", "Normalization", "For R(A,B,C) with F={A->B, B->C}, what is A+?", "{A, B, C}", "From A->B add B, then from B->C add C; A+ contains all attributes.", {
      choices: ["{A, B, C}", "{A}", "{B, C}", "{A, C}"]
    }),
    q("Ch14", "normalization", "Easy", "Multiple Choice", "What is normalization?", "The process of decomposing unsatisfactory relations into smaller relations.", "The chapter defines normalization as breaking bad relations into smaller ones.", {
      choices: ["The process of decomposing unsatisfactory relations into smaller relations.", "A command for saving transactions.", "A method for sorting rows.", "A character conversion function."]
    }),
    q("Ch14", "superkey-key", "Medium", "Normalization", "What is the difference between a superkey and a key?", "A key is a minimal superkey; removing any attribute means it is no longer a superkey.", "The chapter defines key as a superkey with no removable attribute.", {
      choices: ["A key is a minimal superkey; removing any attribute means it is no longer a superkey.", "A superkey is always smaller than a key.", "They are both group functions.", "A key can never identify tuples."]
    }),
    q("Ch14", "prime-attribute", "Easy", "Fill in the Blank", "An attribute involved in a candidate key is called a ____ attribute.", "prime", "The chapter defines prime attributes as attributes involved in candidate keys.", {
      acceptableAnswers: ["prime", "Prime"]
    }),
    q("Ch14", "one-nf", "Medium", "Normalization", "What does 1NF disallow?", "Composite attributes, multivalued attributes, and nested relations.", "The chapter states that 1NF disallows non-atomic values, composite attributes, multivalued attributes, and nested relations.", {
      choices: ["Composite attributes, multivalued attributes, and nested relations.", "Primary keys.", "Foreign keys.", "Atomic domains."]
    }),
    q("Ch14", "two-nf", "Hard", "Normalization", "What must be removed to reach 2NF according to the normalization steps?", "Partial dependency.", "The chapter's normalization steps say remove partial dependency to be in 2NF.", {
      choices: ["Partial dependency.", "All foreign keys.", "Every candidate key.", "All simple attributes."]
    }),
    q("Ch14", "three-nf", "Hard", "Normalization", "What must be removed to reach 3NF according to the normalization steps?", "Transitive dependency.", "The chapter says remove transitive dependency to be in 3NF.", {
      choices: ["Transitive dependency.", "All primary keys.", "All atomic values.", "The DBMS catalog."]
    }),
    q("Ch14", "bcnf", "Hard", "Normalization", "When is a relation schema in BCNF?", "Whenever a nontrivial FD X -> A holds, X is a superkey.", "The chapter defines BCNF with X as a superkey for every nontrivial functional dependency.", {
      choices: ["Whenever a nontrivial FD X -> A holds, X is a superkey.", "Whenever every attribute is multivalued.", "Whenever nulls are frequent.", "Whenever COUNT(*) is used."]
    }),
    q("Ch14", "normal-form-strength", "Medium", "True / False", "Every BCNF relation is in 3NF.", true, "The chapter states that every BCNF relation is in 3NF and BCNF is stronger than 3NF."),
    q("Ch14", "when-not-bcnf", "Hard", "Normalization", "Why might a design return to 3NF instead of decomposing to BCNF?", "A BCNF decomposition may lose a functional dependency.", "The chapter example notes returning to 3NF when BCNF decomposition would lose an FD.", {
      choices: ["A BCNF decomposition may lose a functional dependency.", "3NF is always stronger than BCNF.", "BCNF requires null values.", "BCNF removes all candidate keys."]
    })
  ];
}

function renderQuizPage() {
  const fragment = document.createDocumentFragment();
  const head = element("div", "page-head");
  const copy = element("div");
  copy.append(element("p", "eyebrow", "Page 4"));
  copy.append(element("h2", "", "Exam Quiz"));
  copy.append(element("p", "", `${state.quizQuestions.length} exam-style questions across labs, theory, ER mapping, SQL, and normalization.`));
  head.append(copy);
  fragment.append(head);

  const layout = element("div", "quiz-layout");
  layout.append(renderQuizControls(), renderQuizMain(), renderQuizStats());
  fragment.append(layout);
  return fragment;
}

function renderQuizControls() {
  const panel = element("aside", "quiz-panel quiz-controls");
  panel.append(element("h3", "", "Quiz Setup"));
  panel.append(selectControl("Mode", "mode", ["Full Review", "SQL Labs", "Theory", "Emergency Exam", "Weak Areas"], state.quiz.mode));
  panel.append(selectControl("Topic", "topic", ["All", ...quizCategories()], state.quiz.topic));
  panel.append(selectControl("Difficulty", "difficulty", ["All", ...DIFFICULTIES], state.quiz.difficulty));
  panel.append(selectControl("Question Type", "type", ["All", ...QUESTION_TYPES], state.quiz.type));
  panel.append(selectControl("Questions", "count", ["10", "20", "30", "All"], state.quiz.count));

  const actions = element("div", "quiz-actions");
  const start = element("button", "quiz-button primary", state.quiz.active ? "Restart Quiz" : "Start Quiz");
  start.type = "button";
  start.addEventListener("click", startQuiz);
  const emergency = element("button", "quiz-button", "Emergency 60-Min Quiz");
  emergency.type = "button";
  emergency.addEventListener("click", startEmergencyQuiz);
  const reset = element("button", "quiz-button", "Reset Quiz");
  reset.type = "button";
  reset.addEventListener("click", resetQuiz);
  actions.append(start, emergency, reset);
  panel.append(actions);

  const coverage = element("p", "quiz-help", `Quality bank target: 80-120. Available now: ${state.quizQuestions.length}.`);
  panel.append(coverage);
  return panel;
}

function selectControl(label, key, options, selected) {
  const wrap = element("label", "quiz-field");
  wrap.append(element("span", "", label));
  const select = element("select");
  select.dataset.key = key;
  options.forEach((option) => {
    const item = element("option", "", option);
    item.value = option;
    item.selected = option === selected;
    select.append(item);
  });
  select.addEventListener("change", () => {
    state.quiz[key] = select.value;
    refreshQuiz();
  });
  wrap.append(select);
  return wrap;
}

function renderQuizMain() {
  const panel = element("section", "quiz-main quiz-panel");
  if (state.quiz.mode === "Weak Areas" && !state.wrongQuestionIds.size && !state.quiz.active) {
    panel.append(element("p", "eyebrow", "Weak Areas Mode"));
    panel.append(element("h3", "", "No weak areas yet."));
    panel.append(element("p", "quiz-help", "Take a quiz first, then this mode will use the questions you missed."));
    return panel;
  }

  if (!state.quiz.active) {
    panel.append(element("p", "eyebrow", "Ready"));
    panel.append(element("h3", "", "Choose filters, then start."));
    panel.append(element("p", "quiz-help", "Questions are randomized when the quiz starts. Wrong answers stay in memory for Weak Areas Mode."));
    return panel;
  }

  if (state.quiz.finished) {
    panel.append(renderQuizEnd());
    return panel;
  }

  const question = currentQuestion();
  panel.append(element("p", "eyebrow", `${question.category} · ${question.difficulty} · ${question.type}`));
  panel.append(element("h3", "", question.question));
  if (question.sql) {
    panel.append(renderCode(question.sql));
  }
  panel.append(renderAnswerInput(question));
  panel.append(renderFeedback(question));
  return panel;
}

function renderAnswerInput(question) {
  const wrap = element("div", "answer-area");
  if (question.type === "True / False") {
    [true, false].forEach((value) => wrap.append(answerButton(String(value), value ? "True" : "False")));
  } else if (question.type === "Fill in the Blank") {
    const input = element("input", "blank-input");
    input.type = "text";
    input.value = state.quiz.selectedAnswer;
    input.placeholder = "Type your answer";
    input.disabled = state.quiz.submitted;
    input.addEventListener("input", () => {
      state.quiz.selectedAnswer = input.value;
    });
    wrap.append(input);
  } else {
    question.choices.forEach((choice) => wrap.append(answerButton(choice, choice)));
  }

  const submit = element("button", "quiz-button primary", "Submit Answer");
  submit.type = "button";
  submit.disabled = state.quiz.submitted || (question.type !== "Fill in the Blank" && !hasSelectedAnswer());
  submit.addEventListener("click", submitAnswer);
  const next = element("button", "quiz-button", isLastQuestion() ? "Finish Quiz" : "Next Question");
  next.type = "button";
  next.disabled = !state.quiz.submitted;
  next.addEventListener("click", nextQuestion);
  const actions = element("div", "quiz-actions inline");
  actions.append(submit, next);
  wrap.append(actions);
  return wrap;
}

function answerButton(value, text) {
  const button = element("button", `answer-choice ${state.quiz.selectedAnswer === value ? "is-selected" : ""}`, text);
  button.type = "button";
  button.disabled = state.quiz.submitted;
  button.addEventListener("click", () => {
    state.quiz.selectedAnswer = value;
    refreshQuiz();
  });
  return button;
}

function renderFeedback(question) {
  const area = element("div", "feedback-area");
  if (!state.quiz.submitted) {
    return area;
  }
  area.classList.add(state.quiz.lastCorrect ? "is-correct" : "is-wrong");
  area.append(element("h4", "", state.quiz.lastCorrect ? "Correct" : "Not quite"));
  if (!state.quiz.lastCorrect) {
    area.append(element("p", "", `Correct answer: ${formatAnswer(question.answer)}`));
  }
  area.append(element("p", "", question.explanation));
  return area;
}

function renderQuizEnd() {
  const wrap = element("div", "quiz-end");
  const total = state.quiz.questions.length;
  const accuracy = total ? Math.round((state.quiz.correct / total) * 100) : 0;
  wrap.append(element("p", "eyebrow", "Finished"));
  wrap.append(element("h3", "", `Final score: ${state.quiz.correct}/${total} (${accuracy}%)`));
  const weakTopics = [...new Set(state.quiz.wrongItems.map((item) => item.category))];
  wrap.append(element("p", "quiz-help", weakTopics.length ? `Weak topics: ${weakTopics.join(", ")}` : "No wrong answers in this quiz."));
  wrap.append(renderWrongReview());
  return wrap;
}

function renderQuizStats() {
  const panel = element("aside", "quiz-panel quiz-stats");
  const total = state.quiz.questions.length;
  const answered = state.quiz.correct + state.quiz.wrong;
  const accuracy = answered ? Math.round((state.quiz.correct / answered) * 100) : 0;
  panel.append(element("h3", "", "Score"));
  panel.append(statLine("Progress", state.quiz.active ? `${Math.min(state.quiz.currentIndex + 1, total)}/${total}` : "0/0"));
  panel.append(statLine("Correct", String(state.quiz.correct)));
  panel.append(statLine("Wrong", String(state.quiz.wrong)));
  panel.append(statLine("Accuracy", `${accuracy}%`));
  panel.append(statLine("Weak Bank", String(state.wrongQuestionIds.size)));
  if (state.quiz.finished) {
    panel.append(renderWrongReview(true));
  }
  return panel;
}

function statLine(label, value) {
  const row = element("div", "stat-line");
  row.append(element("span", "", label), element("strong", "", value));
  return row;
}

function renderWrongReview(compact = false) {
  const list = element("div", compact ? "wrong-review compact" : "wrong-review");
  list.append(element("h4", "", "Review Wrong Answers"));
  if (!state.quiz.wrongItems.length) {
    list.append(element("p", "quiz-help", "No wrong answers to review."));
    return list;
  }
  state.quiz.wrongItems.forEach((item) => {
    const card = element("article", "wrong-card");
    card.append(element("p", "eyebrow", item.category));
    card.append(element("strong", "", item.question));
    card.append(element("p", "", `Answer: ${formatAnswer(item.answer)}`));
    if (!compact) {
      card.append(element("p", "quiz-help", item.explanation));
    }
    list.append(card);
  });
  return list;
}

function startQuiz() {
  const questions = filteredQuestions();
  if (!questions.length) {
    state.quiz.active = false;
    state.quiz.finished = false;
    state.quiz.questions = [];
    refreshQuiz();
    return;
  }
  beginQuiz(limitQuestions(shuffle(questions)));
}

function startEmergencyQuiz() {
  state.quiz.mode = "Emergency Exam";
  state.quiz.topic = "All";
  state.quiz.difficulty = "All";
  state.quiz.type = "All";
  state.quiz.count = "All";
  beginQuiz(buildEmergencyQuestions());
}

function beginQuiz(questions) {
  state.quiz.active = true;
  state.quiz.finished = false;
  state.quiz.currentIndex = 0;
  state.quiz.selectedAnswer = "";
  state.quiz.submitted = false;
  state.quiz.lastCorrect = false;
  state.quiz.questions = questions;
  state.quiz.correct = 0;
  state.quiz.wrong = 0;
  state.quiz.wrongItems = [];
  refreshQuiz();
}

function resetQuiz() {
  state.quiz.active = false;
  state.quiz.finished = false;
  state.quiz.currentIndex = 0;
  state.quiz.selectedAnswer = "";
  state.quiz.submitted = false;
  state.quiz.questions = [];
  state.quiz.correct = 0;
  state.quiz.wrong = 0;
  state.quiz.wrongItems = [];
  refreshQuiz();
}

function submitAnswer() {
  if (state.quiz.submitted || !hasSelectedAnswer()) {
    return;
  }
  const question = currentQuestion();
  const correct = isAnswerCorrect(question, state.quiz.selectedAnswer);
  state.quiz.submitted = true;
  state.quiz.lastCorrect = correct;
  if (correct) {
    state.quiz.correct += 1;
  } else {
    state.quiz.wrong += 1;
    state.wrongQuestionIds.add(question.id);
    state.quiz.wrongItems.push(question);
  }
  refreshQuiz();
}

function nextQuestion() {
  if (isLastQuestion()) {
    state.quiz.finished = true;
  } else {
    state.quiz.currentIndex += 1;
    state.quiz.selectedAnswer = "";
    state.quiz.submitted = false;
    state.quiz.lastCorrect = false;
  }
  refreshQuiz();
}

function filteredQuestions() {
  if (state.quiz.mode === "Weak Areas") {
    return state.quizQuestions.filter((question) => state.wrongQuestionIds.has(question.id));
  }
  let questions = state.quizQuestions.filter((question) => {
    const modeOk = state.quiz.mode === "Full Review"
      || (state.quiz.mode === "SQL Labs" && question.sourceId.startsWith("Lab"))
      || (state.quiz.mode === "Theory" && question.sourceId.startsWith("Ch"))
      || state.quiz.mode === "Emergency Exam";
    const topicOk = state.quiz.topic === "All" || question.category === state.quiz.topic;
    const difficultyOk = state.quiz.difficulty === "All" || question.difficulty === state.quiz.difficulty;
    const typeOk = state.quiz.type === "All" || question.type === state.quiz.type;
    return modeOk && topicOk && difficultyOk && typeOk;
  });
  if (state.quiz.mode === "Emergency Exam") {
    const emergencyIds = new Set(buildEmergencyQuestions().map((question) => question.id));
    questions = questions.filter((question) => emergencyIds.has(question.id));
  }
  return questions;
}

function buildEmergencyQuestions() {
  const plan = { Ch14: 10, Ch03: 8, Ch09: 8, Lab6: 5, Lab7: 5, Lab8: 4 };
  return Object.entries(plan).flatMap(([sourceId, count]) => {
    const pool = state.quizQuestions.filter((question) => question.sourceId === sourceId);
    const sorted = [...pool].sort((a, b) => difficultyWeight(b.difficulty) - difficultyWeight(a.difficulty));
    return shuffle(sorted.slice(0, count));
  });
}

function limitQuestions(questions) {
  if (state.quiz.count === "All") {
    return questions;
  }
  return questions.slice(0, Number(state.quiz.count));
}

function difficultyWeight(difficulty) {
  return difficulty === "Hard" ? 3 : difficulty === "Medium" ? 2 : 1;
}

function currentQuestion() {
  return state.quiz.questions[state.quiz.currentIndex];
}

function isLastQuestion() {
  return state.quiz.currentIndex >= state.quiz.questions.length - 1;
}

function hasSelectedAnswer() {
  return String(state.quiz.selectedAnswer).trim().length > 0;
}

function isAnswerCorrect(question, answer) {
  if (typeof question.answer === "boolean") {
    return String(question.answer) === String(answer);
  }
  const accepted = question.acceptableAnswers || [question.answer];
  return accepted.some((item) => normalizeAnswer(item) === normalizeAnswer(answer));
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase();
}

function formatAnswer(answer) {
  return typeof answer === "boolean" ? (answer ? "True" : "False") : answer;
}

function quizCategories() {
  return [...new Set(state.quizQuestions.map((question) => question.category))];
}

function renderCode(sql) {
  const pre = element("pre");
  const code = element("code");
  code.textContent = sql;
  pre.append(code);
  return pre;
}

function refreshQuiz() {
  view.innerHTML = "";
  view.append(renderQuizPage());
  updateSummary("quiz");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function openAndScrollTo(id) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  target.open = true;
  document.body.offsetHeight;
  const top = target.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

function markedLine(tag, className, label, text) {
  const node = element(tag, className);
  const strong = element("strong", "", label);
  node.append(strong, document.createTextNode(` ${text}`));
  return node;
}

function inlineMarkdown(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function element(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text) {
    node.textContent = text;
  }
  return node;
}

function renderError(error) {
  view.innerHTML = "";
  const card = element("section", "error-card");
  card.append(element("p", "eyebrow", "Could not load source"), element("h2", "", "The study data script is missing."));
  card.append(element("p", "", `${error.message}. Make sure studyData.js is next to index.html and loaded before app.js.`));
  const pre = element("pre");
  const code = element("code");
  code.textContent = "python3 -m http.server 8000\n# then open http://localhost:8000";
  pre.append(code);
  card.append(pre);
  view.append(card);
}
