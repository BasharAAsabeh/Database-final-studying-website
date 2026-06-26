# Codex Prompt: Make Lab Manual Quizzes Cover All Lab Material

You are modifying an existing database study website that already has study pages and a quiz page.

The student does **not** have time to study the lab manuals by reading them normally. They will read the theory chapters, but they want to study **Lab1-Lab9 mainly through quizzes**.

Your task is to upgrade the quiz system so the **lab manual quizzes cover the full lab manual material as completely as possible**.

Do not rebuild the whole website unless necessary. Keep the existing style and navigation.

---

## Main Goal

The lab quiz system must cover almost everything important from:

1. Lab1 — Creating and Managing Tables
2. Lab2 — Constraints
3. Lab3 — Manipulating Data
4. Lab4 — Basic SQL Statements
5. Lab5 — Restricting and Sorting Data
6. Lab6 — Displaying Data from Multiple Tables
7. Lab7 — Aggregating Data
8. Lab8 — Subqueries
9. Lab9 — Single-Row Functions

The goal is not to create a small sample quiz. The goal is to make the lab quizzes usable as the student's main way to study the lab manuals.

---

## Critical Rules

- Use only the existing embedded lab manual material.
- Do not use external sources.
- Do not add questions about slide numbers, slide titles, file names, page numbers, source locations, or chapter outlines.
- Do not add filler questions.
- Do not use fill-in-the-blank questions for lab manuals.
- Lab manual questions must be either:
  - `write-code`
  - `multiple-choice`
- The correct MCQ answer must not always be option A.
- MCQ choices must be shuffled at quiz runtime.
- Code questions should allow capitalization, whitespace, and optional semicolon differences.

---

## Required Lab Quiz Question Types

### 1. Write SQL / Code Questions

Use this for practical SQL skills.

Examples:

```js
{
  id: "lab5-code-where-001",
  category: "Lab5 — Restricting and Sorting Data",
  difficulty: "Medium",
  type: "write-code",
  question: "Write a SQL query to display employee names and jobs from the EMP table where the job is CLERK.",
  expectedAnswer: "SELECT ename, job FROM emp WHERE job = 'CLERK';",
  acceptableAnswers: [
    "SELECT ename, job FROM emp WHERE job = 'CLERK'",
    "select ename, job from emp where job = 'CLERK'"
  ],
  explanation: "The WHERE clause restricts rows to employees whose job value is CLERK."
}
```

For code questions:

- Show a textarea.
- Let the user submit an answer.
- At minimum, reveal the expected answer and explanation.
- If automatic checking exists, normalize:
  - case
  - extra spaces
  - line breaks
  - trailing semicolon
- Do not mark a reasonable answer wrong only because of formatting.

### 2. Multiple Choice Questions

Use this for:

- choosing the correct SQL statement
- identifying what a query does
- identifying correct clause usage
- recognizing errors
- understanding command behavior
- choosing the correct constraint
- choosing the correct function
- recognizing output behavior

Example:

```js
{
  id: "lab7-mcq-having-001",
  category: "Lab7 — Aggregating Data",
  difficulty: "Medium",
  type: "multiple-choice",
  question: "Which clause is used to restrict groups after GROUP BY?",
  choices: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
  answer: "HAVING",
  explanation: "WHERE filters rows before grouping; HAVING filters grouped results."
}
```

---

## Coverage Requirement

Before generating questions, inspect the existing lab material and make a coverage checklist.

For every lab:

1. List the commands, concepts, rules, examples, and query patterns in that lab.
2. Create at least one quiz question for each important item.
3. For SQL examples, create either:
   - a question asking the user to write a similar query, or
   - an MCQ asking what the query does, what is wrong, or which query is correct.

The final lab quiz bank should feel like a compressed interactive version of the lab manuals.

---

## Target Question Counts

Use these as minimum targets, but coverage matters more than the exact number:

| Lab | Minimum Questions |
|---|---:|
| Lab1 — Creating and Managing Tables | 12 |
| Lab2 — Constraints | 15 |
| Lab3 — Manipulating Data | 15 |
| Lab4 — Basic SQL Statements | 12 |
| Lab5 — Restricting and Sorting Data | 18 |
| Lab6 — Displaying Data from Multiple Tables | 18 |
| Lab7 — Aggregating Data | 18 |
| Lab8 — Subqueries | 18 |
| Lab9 — Single-Row Functions | 20 |

Total minimum for labs: **146 questions**

It is okay to exceed this if the lab manuals contain more important examples.

Do not reduce quality just to hit a number, but do not leave important lab material uncovered.

---

## Required Coverage by Lab

### Lab1 — Creating and Managing Tables

Cover:

- `CREATE TABLE`
- column definitions
- data types used in the labs
- creating a table using a subquery if present in the material
- `ALTER TABLE`
- adding columns
- modifying columns
- dropping columns if present
- `DROP TABLE`
- `RENAME`
- `TRUNCATE`
- table structure inspection commands if present
- differences between table-management commands taught in the lab

Create practical code questions where the user writes DDL.

### Lab2 — Constraints

Cover:

- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- `FOREIGN KEY`
- `CHECK`
- inline constraints
- out-of-line/table-level constraints
- adding constraints with `ALTER TABLE`
- dropping constraints if present
- constraint naming
- referential integrity
- examples involving `dept` and `emp`

Include both writing constraints and choosing the correct constraint behavior.

### Lab3 — Manipulating Data

Cover:

- `INSERT`
- inserting full rows
- inserting selected columns
- inserting date values if present
- `UPDATE`
- updating with conditions
- `DELETE`
- deleting with conditions
- transaction control
- `COMMIT`
- `SAVEPOINT`
- `ROLLBACK`
- rollback to savepoint if present
- difference between saving and undoing changes

Prefer practical write-code questions.

### Lab4 — Basic SQL Statements

Cover:

- basic `SELECT`
- selecting all columns
- selecting specific columns
- arithmetic expressions
- operator precedence if present
- column aliases
- aliases with `AS`
- quoted aliases
- concatenation
- literal character strings
- `DISTINCT`
- `DESCRIBE` if present

Include questions that test query writing and result interpretation.

### Lab5 — Restricting and Sorting Data

Cover:

- `WHERE`
- comparison operators
- `BETWEEN`
- `IN`
- `LIKE`
- wildcard behavior
- `IS NULL`
- logical operators
- `AND`
- `OR`
- `NOT`
- operator precedence if present
- `ORDER BY`
- ascending and descending sort
- sorting by multiple columns
- sorting by alias if present

Include many write-code filtering questions.

### Lab6 — Displaying Data from Multiple Tables

Cover:

- joins
- equijoin
- non-equijoin if present
- table aliases
- joining `emp` and `dept`
- join conditions
- Cartesian product
- outer join syntax taught in the lab
- self join
- joining using aliases
- ambiguity with column names

Include questions that ask the user to write joins and identify Cartesian products.

### Lab7 — Aggregating Data

Cover:

- group functions
- `AVG`
- `SUM`
- `MIN`
- `MAX`
- `COUNT(*)`
- `COUNT(column)`
- `COUNT(DISTINCT column)` if present
- NULL behavior in group functions
- `GROUP BY`
- grouping by one or more columns
- invalid select-list with group functions
- `HAVING`
- difference between `WHERE` and `HAVING`
- nested group functions if present

Include SQL writing, MCQs about errors, and interpretation questions.

### Lab8 — Subqueries

Cover:

- subquery definition
- subquery syntax
- subquery in `WHERE`
- single-row subqueries
- multiple-row subqueries
- comparison operators with subqueries
- `IN`
- `ANY` / `ALL` if present
- subquery returning one row vs many rows
- using subqueries with aggregate functions if present
- common subquery mistakes taught in the material

Include questions where the user writes subqueries.

### Lab9 — Single-Row Functions

Cover:

- character functions taught in the lab
- number functions taught in the lab
- date functions taught in the lab
- conversion functions taught in the lab
- function nesting if present
- `LOWER`
- `UPPER`
- `INITCAP`
- `CONCAT`
- `SUBSTR`
- `LENGTH`
- `INSTR`
- `LPAD`
- `RPAD`
- `TRIM`
- `REPLACE`
- `ROUND`
- `TRUNC`
- `MOD`
- date arithmetic
- `SYSDATE`
- `MONTHS_BETWEEN`
- `ADD_MONTHS`
- `NEXT_DAY`
- `LAST_DAY`
- `TO_CHAR`
- `TO_DATE`
- `TO_NUMBER`
- any other function explicitly taught in the lab material

Only include functions that are actually in the existing lab material.

---

## Quiz Modes to Add or Keep

Add/keep these lab-focused modes:

### All Labs Mode

Uses Lab1-Lab9 questions.

### Single Lab Mode

The user can pick one lab and quiz only that lab.

### Practical SQL Mode

Uses only `write-code` lab questions.

### SQL MCQ Mode

Uses only lab MCQ questions.

### Emergency Lab Review

Uses a balanced set from the most exam-heavy labs:

- Lab5
- Lab6
- Lab7
- Lab8
- Lab9

Prefer Medium and Hard questions.

---

## UI Requirements

The quiz page must allow filtering by:

- lab/category
- question type
- difficulty
- number of questions

Question count options:

- 10
- 20
- 30
- 50
- All

For `write-code` questions:

- show a textarea
- show expected answer after submission
- show explanation
- allow marking self as correct/incorrect if exact grading is not reliable

For MCQs:

- choices must be shuffled
- answer checking must remain correct after shuffling
- show the correct answer after submission
- show explanation

---

## Coverage Report Requirement

After updating the quiz bank, create a visible or developer-readable coverage report.

This can be:

- a section in the final Codex response, and/or
- a `LAB_QUIZ_COVERAGE.md` file

The report must include:

| Lab | Concepts Covered | Question Count | Missing / Skipped Items |
|---|---|---:|---|

For missing/skipped items, write `None` only if the lab is fully covered based on the embedded material.

---

## Final Validation Checklist

Before finishing, check:

- Lab1-Lab9 all have quiz questions.
- Every important lab command/concept/query pattern is covered.
- Lab questions are only `write-code` or `multiple-choice`.
- No lab fill-in-the-blank questions remain.
- No slide-number questions exist.
- No source-location questions exist.
- MCQ answers are not always option A.
- MCQ choices are shuffled at runtime.
- Code questions display expected answers.
- The quiz still tracks score/progress.
- Emergency Lab Review works.
- Weak areas mode still works if it existed before.

---

## Final Response Expected From Codex

After applying the changes, report:

1. Which files changed.
2. Total number of lab quiz questions.
3. Number of lab questions by lab.
4. Number of `write-code` vs `multiple-choice` questions.
5. Confirmation that all lab fill-in-the-blank questions were removed.
6. Confirmation that all lab material was audited for coverage.
7. Any lab material that could not be converted into useful quiz questions.
8. Local run instructions.
