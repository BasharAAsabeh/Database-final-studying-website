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
  "write-code",
  "SQL Output / Interpretation",
  "Normalization",
  "ER Mapping"
];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const SQL_STATEMENT_LABS = [
  ["Lab1", "Creating and Managing Tables"],
  ["Lab2", "Constraints"],
  ["Lab3", "Manipulating Data"],
  ["Lab4", "Basic SQL Statements"],
  ["Lab5", "Restricting and Sorting Data"],
  ["Lab6", "Displaying Data from Multiple Tables"],
  ["Lab7", "Aggregating Data"],
  ["Lab8", "Subqueries"],
  ["Lab9", "Single-Row Functions"]
];
const SQL_LAB_STATEMENTS = [
  {
    lab: "Lab1",
    topic: "Create Tables",
    title: "CREATE TABLE With Column Definitions",
    use: "Create a new table by listing each column name and datatype.",
    syntax: "CREATE TABLE table_name\n(column_name datatype [DEFAULT expr] [NULL | NOT NULL],\n column_name datatype [NULL | NOT NULL]);",
    example: "CREATE TABLE emp_tbl (\n  emp_no NUMBER(4),\n  name VARCHAR(40),\n  address VARCHAR(40),\n  deptno NUMBER(3),\n  mgrno NUMBER(4),\n  startdate DATE\n);",
    does: "Defines a table structure before rows are inserted.",
    advice: "Start with CREATE TABLE, then put every column definition inside parentheses separated by commas.",
    mistake: "Do not put a comma after the final column definition.",
    practice: "Create a Student table with St_No NUMBER(2), FName VARCHAR2(40), LName VARCHAR2(40), Dept_no NUMBER(3), and StartDate DATE."
  },
  {
    lab: "Lab1",
    topic: "Create Tables",
    title: "CREATE TABLE With a Primary Key",
    use: "Create a table and define the column that uniquely identifies each row.",
    syntax: "CREATE TABLE table_name\n(column_name datatype,\n ...,\n PRIMARY KEY (column_name));",
    example: "CREATE TABLE emp_tbl (\n  emp_no NUMBER(4),\n  name VARCHAR(40),\n  address VARCHAR(40),\n  deptno NUMBER(3),\n  mgrno NUMBER(4),\n  startdate DATE,\n  PRIMARY KEY (emp_no)\n);",
    does: "Creates the table and marks emp_no as the row identifier.",
    advice: "Use PRIMARY KEY after the column list when the lab writes the key as a table-level constraint.",
    mistake: "A primary key column should not be treated like an optional nullable value.",
    practice: "Write a CREATE TABLE statement for emp_tbl with emp_no as the primary key."
  },
  {
    lab: "Lab1",
    topic: "Create Tables",
    title: "CREATE TABLE With a Foreign Key",
    use: "Create a table whose column references another table.",
    syntax: "CREATE TABLE table_name\n(column_name datatype,\n ...,\n FOREIGN KEY (column_name) REFERENCES parent_table);",
    example: "CREATE TABLE emp_tbl (\n  emp_no NUMBER(4),\n  name VARCHAR(40),\n  address VARCHAR(40),\n  deptno NUMBER(3),\n  mgrno NUMBER(4),\n  startdate DATE,\n  PRIMARY KEY (emp_no),\n  FOREIGN KEY (deptno) REFERENCES DEPT\n);",
    does: "Requires deptno values in emp_tbl to match rows in DEPT.",
    advice: "Write the child column in FOREIGN KEY parentheses and the parent table after REFERENCES.",
    mistake: "Do not reference a department table if the relationship is not represented in the lab question.",
    practice: "Add a FOREIGN KEY on deptno while creating emp_tbl."
  },
  {
    lab: "Lab1",
    topic: "Inspect Objects",
    title: "DESCRIBE / DESC Table Structure",
    use: "Display a table's columns, nullability, and datatypes.",
    syntax: "DESC table_name;\nDESCRIBE table_name;",
    example: "DESCRIBE dept;",
    does: "Shows the structure of dept, including DEPTNO NUMBER(2), DNAME VARCHAR2(14), and LOC VARCHAR2(13).",
    advice: "Use DESC or DESCRIBE when the task asks for the table structure, not the table rows.",
    mistake: "Do not use SELECT * when the question asks for column definitions.",
    practice: "Write the command to display the structure of Student."
  },
  {
    lab: "Lab1",
    topic: "Data Dictionary",
    title: "View Tables in USER_TABLES",
    use: "List tables owned by the current user.",
    syntax: "SELECT *\nFROM user_tables;",
    example: "SELECT *\nFROM user_tables;",
    does: "Retrieves data dictionary rows for user-owned tables.",
    advice: "Use USER_TABLES when the question is about tables owned by the user.",
    mistake: "Do not confuse USER_TABLES with USER_CONSTRAINTS, which is for constraints.",
    practice: "Write the query that displays all rows from USER_TABLES."
  },
  {
    lab: "Lab1",
    topic: "Data Dictionary",
    title: "View Object Types in USER_OBJECTS",
    use: "See distinct database object types owned by the user.",
    syntax: "SELECT DISTINCT object_type\nFROM user_objects;",
    example: "SELECT DISTINCT object_type\nFROM user_objects;",
    does: "Returns each object type once, such as tables, views, synonyms, or sequences.",
    advice: "Use DISTINCT when the lab asks for unique object types.",
    mistake: "Without DISTINCT, repeated object types can appear many times.",
    practice: "Write the query that lists distinct object types from USER_OBJECTS."
  },
  {
    lab: "Lab1",
    topic: "Alter Tables",
    title: "ALTER TABLE ADD Column",
    use: "Add a new column to an existing table.",
    syntax: "ALTER TABLE table_name\nADD (column_name datatype [DEFAULT expr]);",
    example: "ALTER TABLE Student ADD Collage VARCHAR2(20);",
    does: "Adds Collage as a new column in Student.",
    advice: "Use ADD for a new column; write the table name before ADD.",
    mistake: "Do not use MODIFY when the column does not already exist.",
    practice: "Add a job VARCHAR2(9) column to dept30."
  },
  {
    lab: "Lab1",
    topic: "Alter Tables",
    title: "ALTER TABLE MODIFY Column",
    use: "Change an existing column definition.",
    syntax: "ALTER TABLE table_name\nMODIFY (column_name datatype [NULL | NOT NULL]);",
    example: "ALTER TABLE Student MODIFY (St_no NUMBER(3) NULL);",
    does: "Changes the definition of St_no in Student.",
    advice: "Use MODIFY only for columns that already exist.",
    mistake: "Do not write ADD when the task says to change a column's datatype or null setting.",
    practice: "Modify St_no so it uses NUMBER(3)."
  },
  {
    lab: "Lab1",
    topic: "Alter Tables",
    title: "ALTER TABLE DROP COLUMN",
    use: "Remove a column from an existing table.",
    syntax: "ALTER TABLE table_name DROP COLUMN column_name;",
    example: "ALTER TABLE Student DROP COLUMN Collage;",
    does: "Removes the Collage column from Student.",
    advice: "Use DROP COLUMN for one column, not DROP TABLE.",
    mistake: "DROP TABLE removes the whole table; DROP COLUMN removes only the column.",
    practice: "Write the command to drop Collage from Student."
  },
  {
    lab: "Lab1",
    topic: "Manage Objects",
    title: "DROP TABLE",
    use: "Remove a table and its data/structure.",
    syntax: "DROP TABLE table_name;",
    example: "DROP TABLE dept30;",
    does: "Drops dept30. The lab notes that the data and structure are deleted and the statement cannot be rolled back.",
    advice: "Use DROP TABLE only when the whole table should disappear.",
    mistake: "Do not use DROP TABLE when the task only asks to delete rows.",
    practice: "Write the command to drop dept30."
  },
  {
    lab: "Lab1",
    topic: "Manage Objects",
    title: "RENAME Object",
    use: "Change the name of a table, view, sequence, or synonym owned by the user.",
    syntax: "RENAME old_name TO new_name;",
    example: "RENAME dept TO department;",
    does: "Changes the table name from dept to department.",
    advice: "Use RENAME when the object remains but its name changes.",
    mistake: "Do not write ALTER TABLE for the lab's RENAME example.",
    practice: "Rename dept to department."
  },
  {
    lab: "Lab1",
    topic: "Insert And Read",
    title: "INSERT With Selected Columns",
    use: "Insert a row while providing values for selected columns only.",
    syntax: "INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);",
    example: "INSERT INTO Student (St_No, Fname, LName)\nVALUES (10, 'Ali', 'Ahmad');",
    does: "Adds a Student row and leaves omitted columns unspecified.",
    advice: "Make sure the VALUES order matches the column list order.",
    mistake: "Do not provide five values if the INSERT names only three columns.",
    practice: "Insert St_No, Fname, and LName for one Student row."
  },
  {
    lab: "Lab1",
    topic: "Insert And Read",
    title: "INSERT Full Row",
    use: "Insert values for every table column in table order.",
    syntax: "INSERT INTO table_name\nVALUES (value1, value2, value3);",
    example: "INSERT INTO Student VALUES\n(30, 'Issa', 'Kamal', NULL, NULL);",
    does: "Adds a full Student row, explicitly storing NULL in the last two columns.",
    advice: "Use this form only when you know the table column order.",
    mistake: "A missing or extra value breaks the full-row INSERT.",
    practice: "Insert a full Student row with NULL department and NULL start date."
  },
  {
    lab: "Lab2",
    topic: "Constraint Basics",
    title: "Column-Level NOT NULL",
    use: "Require a value in a column.",
    syntax: "column_name datatype NOT NULL",
    example: "CREATE TABLE emp (\n  empno NUMBER(4),\n  ename VARCHAR2(10) NOT NULL,\n  deptno NUMBER(7,2) NOT NULL\n);",
    does: "Prevents ename and deptno from being left null.",
    advice: "Write NOT NULL directly beside the column definition.",
    mistake: "Do not write NOT NULL as a separate table-level constraint in these lab examples.",
    practice: "Create an emp column ename VARCHAR2(10) that cannot be null."
  },
  {
    lab: "Lab2",
    topic: "Constraint Basics",
    title: "Named UNIQUE Constraint",
    use: "Prevent duplicate values in a column.",
    syntax: "CONSTRAINT constraint_name UNIQUE (column_name)",
    example: "CONSTRAINT dept_dname_uk UNIQUE (dname)",
    does: "Requires each department name to be unique.",
    advice: "Use a meaningful constraint name before UNIQUE.",
    mistake: "UNIQUE is not the same as PRIMARY KEY; the lab uses both on dept.",
    practice: "Write a named UNIQUE constraint for dname."
  },
  {
    lab: "Lab2",
    topic: "Constraint Basics",
    title: "Table-Level PRIMARY KEY",
    use: "Identify each row with a key column.",
    syntax: "CONSTRAINT constraint_name PRIMARY KEY (column_name)",
    example: "CONSTRAINT dept_deptno_pk PRIMARY KEY(deptno)",
    does: "Makes deptno the primary key of dept.",
    advice: "Use table-level syntax when the constraint is listed after the columns.",
    mistake: "Do not put the column outside the parentheses.",
    practice: "Write a named primary key constraint for deptno."
  },
  {
    lab: "Lab2",
    topic: "Constraint Basics",
    title: "Inline PRIMARY KEY",
    use: "Define the primary key directly in the column definition.",
    syntax: "column_name datatype PRIMARY KEY",
    example: "deptno NUMBER(2) PRIMARY KEY",
    does: "Marks deptno as the primary key while defining the column.",
    advice: "Use inline syntax when the key is attached directly to one column.",
    mistake: "Do not also repeat a second primary key for the same table.",
    practice: "Write deptno NUMBER(2) as an inline primary key."
  },
  {
    lab: "Lab2",
    topic: "Referential Integrity",
    title: "FOREIGN KEY References",
    use: "Require a child row to reference an existing parent row.",
    syntax: "CONSTRAINT constraint_name FOREIGN KEY (child_column)\nREFERENCES parent_table (parent_column)",
    example: "CONSTRAINT emp_deptno_fk FOREIGN KEY (deptno)\nREFERENCES dept (deptno)",
    does: "Requires emp.deptno to match an existing dept.deptno.",
    advice: "Write the child column after FOREIGN KEY and the parent table/column after REFERENCES.",
    mistake: "Do not reference emp(empno) when the relationship is department membership.",
    practice: "Write a foreign key from emp.deptno to dept.deptno."
  },
  {
    lab: "Lab2",
    topic: "Check Constraints",
    title: "CHECK Constraint",
    use: "Allow only values that satisfy a condition.",
    syntax: "CONSTRAINT constraint_name CHECK (condition)",
    example: "CONSTRAINT emp_deptno_ck\nCHECK (deptno BETWEEN 10 AND 99)",
    does: "Allows deptno values only in the range 10 through 99.",
    advice: "Put the condition inside CHECK parentheses.",
    mistake: "Do not use CHECK to reference another table; use FOREIGN KEY for that.",
    practice: "Write a CHECK constraint that keeps deptno between 10 and 99."
  },
  {
    lab: "Lab2",
    topic: "Alter Constraints",
    title: "ALTER TABLE ADD Constraint",
    use: "Add a constraint after the table already exists.",
    syntax: "ALTER TABLE table_name\nADD CONSTRAINT constraint_name constraint_type (column_name);",
    example: "ALTER TABLE emp\nADD CONSTRAINT emp_mgr_fk\nFOREIGN KEY(mgr) REFERENCES emp(empno);",
    does: "Adds a manager foreign key to emp.",
    advice: "Use ALTER TABLE ADD CONSTRAINT for constraints added later.",
    mistake: "The lab notes say constraints can be added or dropped, not modified.",
    practice: "Add emp_mgr_fk on mgr referencing emp(empno)."
  },
  {
    lab: "Lab2",
    topic: "Alter Constraints",
    title: "DROP Constraint",
    use: "Remove a named constraint.",
    syntax: "ALTER TABLE table_name\nDROP CONSTRAINT constraint_name;",
    example: "ALTER TABLE emp\nDROP CONSTRAINT emp_mgr_fk;",
    does: "Removes the manager foreign key constraint from emp.",
    advice: "Use the exact constraint name when dropping a named constraint.",
    mistake: "Do not write DROP COLUMN unless the column itself should be removed.",
    practice: "Drop emp_mgr_fk from emp."
  },
  {
    lab: "Lab2",
    topic: "Alter Constraints",
    title: "DROP PRIMARY KEY CASCADE",
    use: "Remove a primary key and dependent foreign keys.",
    syntax: "ALTER TABLE table_name\nDROP PRIMARY KEY CASCADE;",
    example: "ALTER TABLE dept\nDROP PRIMARY KEY CASCADE;",
    does: "Drops the DEPT primary key and dependent foreign key constraints.",
    advice: "Use CASCADE when dependent integrity constraints must be handled too.",
    mistake: "Dropping a primary key can affect child tables.",
    practice: "Write the command to drop DEPT primary key with CASCADE."
  },
  {
    lab: "Lab2",
    topic: "Constraint Status",
    title: "DISABLE and ENABLE Constraint",
    use: "Temporarily deactivate or reactivate an integrity constraint.",
    syntax: "ALTER TABLE table_name DISABLE CONSTRAINT constraint_name CASCADE;\nALTER TABLE table_name ENABLE CONSTRAINT constraint_name;",
    example: "ALTER TABLE emp\nDISABLE CONSTRAINT emp_empno_pk CASCADE;\n\nALTER TABLE emp\nENABLE CONSTRAINT emp_empno_pk;",
    does: "Turns the emp primary key off and then back on.",
    advice: "Use DISABLE for deactivation and ENABLE for activation.",
    mistake: "CASCADE disables dependent constraints too.",
    practice: "Write the command to enable emp_empno_pk."
  },
  {
    lab: "Lab2",
    topic: "Constraint Dictionary",
    title: "View Constraint Definitions",
    use: "Inspect constraint names, types, and conditions.",
    syntax: "SELECT constraint_name, constraint_type, search_condition\nFROM user_constraints\nWHERE table_name = 'TABLE_NAME';",
    example: "SELECT constraint_name, constraint_type, search_condition\nFROM user_constraints\nWHERE table_name = 'EMP';",
    does: "Shows constraint definitions for EMP.",
    advice: "Use uppercase table names in the data dictionary condition as shown in the lab.",
    mistake: "USER_CONSTRAINTS gives definitions; USER_CONS_COLUMNS gives related columns.",
    practice: "Query USER_CONSTRAINTS for EMP."
  },
  {
    lab: "Lab2",
    topic: "Constraint Dictionary",
    title: "View Constraint Columns",
    use: "See which columns belong to each constraint.",
    syntax: "SELECT constraint_name, column_name\nFROM user_cons_columns\nWHERE table_name = 'TABLE_NAME';",
    example: "SELECT constraint_name, column_name\nFROM user_cons_columns\nWHERE table_name = 'EMP';",
    does: "Lists constraint names with their EMP columns.",
    advice: "Use USER_CONS_COLUMNS when the question asks for associated columns.",
    mistake: "Do not expect SEARCH_CONDITION in USER_CONS_COLUMNS.",
    practice: "Query USER_CONS_COLUMNS for EMP."
  },
  {
    lab: "Lab3",
    topic: "Insert Rows",
    title: "INSERT Basic Syntax",
    use: "Add one row to a table.",
    syntax: "INSERT INTO table_name [(column1, column2)]\nVALUES (value1, value2);",
    example: "INSERT INTO dept (deptno, dname, loc)\nVALUES (50, 'DEVELOPMENT', 'DETROIT');",
    does: "Adds one department row.",
    advice: "Match every column in the column list to one value in VALUES.",
    mistake: "Character values need single quotation marks.",
    practice: "Insert department 50 named DEVELOPMENT in DETROIT."
  },
  {
    lab: "Lab3",
    topic: "Insert Rows",
    title: "Implicit NULL by Omitting a Column",
    use: "Leave an omitted nullable column as null.",
    syntax: "INSERT INTO table_name (required_column1, required_column2)\nVALUES (value1, value2);",
    example: "INSERT INTO dept (deptno, dname)\nVALUES (60, 'MIS');",
    does: "Adds a department row without a loc value.",
    advice: "Omit the column only if the table allows it to be null or has a default.",
    mistake: "Do not omit NOT NULL columns.",
    practice: "Insert deptno and dname only for a department row."
  },
  {
    lab: "Lab3",
    topic: "Insert Rows",
    title: "Explicit NULL in INSERT",
    use: "Put NULL directly in the values list.",
    syntax: "INSERT INTO table_name\nVALUES (value1, value2, NULL);",
    example: "INSERT INTO dept\nVALUES (70, 'FINANCE', NULL);",
    does: "Adds FINANCE with a null location.",
    advice: "Use NULL without quotation marks.",
    mistake: "'NULL' is text; NULL is the database null value.",
    practice: "Insert a department row with NULL loc."
  },
  {
    lab: "Lab3",
    topic: "Insert Rows",
    title: "INSERT With SYSDATE",
    use: "Insert the current date and time.",
    syntax: "INSERT INTO table_name (date_column)\nVALUES (SYSDATE);",
    example: "INSERT INTO emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)\nVALUES (7196, 'GREEN', 'SALESMAN', 7782, SYSDATE, 2000, NULL, 10);",
    does: "Stores the current system date in hiredate.",
    advice: "Use SYSDATE directly, not in quotes.",
    mistake: "Do not type a literal date when the task asks for the current date.",
    practice: "Insert an emp row using SYSDATE for hiredate."
  },
  {
    lab: "Lab3",
    topic: "Insert Rows",
    title: "INSERT With TO_DATE",
    use: "Convert a date string to a date value while inserting.",
    syntax: "TO_DATE('date text', 'format mask')",
    example: "INSERT INTO emp\nVALUES (2296, 'AROMANO', 'SALESMAN', 7782,\n  TO_DATE('FEB 3, 1997', 'MON DD, YYYY'),\n  1300, NULL, 10);",
    does: "Inserts a specific hiredate using the given date format.",
    advice: "Make the date text match the format mask.",
    mistake: "A mismatch between text and mask can fail conversion.",
    practice: "Write an INSERT that uses TO_DATE for FEB 3, 1997."
  },
  {
    lab: "Lab3",
    topic: "Update Rows",
    title: "UPDATE With WHERE",
    use: "Change values for specific rows.",
    syntax: "UPDATE table_name\nSET column_name = value\nWHERE condition;",
    example: "UPDATE emp\nSET deptno = 20\nWHERE empno = 7782;",
    does: "Changes only employee 7782 to department 20.",
    advice: "Always add WHERE when only certain rows should change.",
    mistake: "Without WHERE, every row in the table is updated.",
    practice: "Update empno 7782 so deptno becomes 20."
  },
  {
    lab: "Lab3",
    topic: "Update Rows",
    title: "UPDATE Without WHERE",
    use: "Change a column value for every row.",
    syntax: "UPDATE table_name\nSET column_name = value;",
    example: "UPDATE employee\nSET deptno = 20;",
    does: "Sets deptno to 20 for every employee row.",
    advice: "Use this only when the question clearly wants all rows changed.",
    mistake: "Accidentally omitting WHERE is one of the biggest lab mistakes.",
    practice: "Explain what rows change if WHERE is omitted."
  },
  {
    lab: "Lab3",
    topic: "Delete Rows",
    title: "DELETE With WHERE",
    use: "Remove specific rows from a table.",
    syntax: "DELETE FROM table_name\nWHERE condition;",
    example: "DELETE FROM department\nWHERE dname = 'DEVELOPMENT';",
    does: "Deletes only the department named DEVELOPMENT.",
    advice: "Use WHERE for targeted deletes.",
    mistake: "Do not use DROP TABLE when the task asks to remove rows.",
    practice: "Delete rows from department where dname is DEVELOPMENT."
  },
  {
    lab: "Lab3",
    topic: "Delete Rows",
    title: "DELETE All Rows",
    use: "Remove every row while keeping the table structure.",
    syntax: "DELETE FROM table_name;",
    example: "DELETE FROM department;",
    does: "Deletes all rows from department.",
    advice: "Use only when all rows should be removed.",
    mistake: "This is not the same as DROP TABLE; the table remains.",
    practice: "Write the statement that deletes all rows from department."
  },
  {
    lab: "Lab3",
    topic: "Transactions",
    title: "COMMIT",
    use: "Permanently save pending changes.",
    syntax: "COMMIT;",
    example: "COMMIT;",
    does: "Makes pending INSERT, UPDATE, or DELETE changes permanent.",
    advice: "Use COMMIT after changes you want to keep.",
    mistake: "After COMMIT, ordinary rollback will not undo the committed work.",
    practice: "Write the command that saves pending changes."
  },
  {
    lab: "Lab3",
    topic: "Transactions",
    title: "ROLLBACK",
    use: "Undo pending transaction changes.",
    syntax: "ROLLBACK;",
    example: "ROLLBACK;",
    does: "Restores the previous data state for uncommitted changes.",
    advice: "Use ROLLBACK when the lab asks to discard pending changes.",
    mistake: "ROLLBACK is not used to save work.",
    practice: "Write the command that discards uncommitted deletes."
  },
  {
    lab: "Lab4",
    topic: "Basic SELECT",
    title: "SELECT All Columns",
    use: "Display every column from a table.",
    syntax: "SELECT *\nFROM table_name;",
    example: "SELECT *\nFROM dept;",
    does: "Shows every column and row from dept.",
    advice: "Use * only when the task asks for all columns.",
    mistake: "Do not use * when the task asks for specific columns.",
    practice: "Write a query to display all columns from dept."
  },
  {
    lab: "Lab4",
    topic: "Basic SELECT",
    title: "SELECT Specific Columns",
    use: "Display only named columns.",
    syntax: "SELECT column1, column2\nFROM table_name;",
    example: "SELECT deptno, loc\nFROM dept;",
    does: "Displays only department number and location.",
    advice: "Separate selected columns with commas.",
    mistake: "Do not put a comma before FROM.",
    practice: "Select deptno and loc from dept."
  },
  {
    lab: "Lab4",
    topic: "Expressions",
    title: "Arithmetic Expressions",
    use: "Calculate values in the SELECT list.",
    syntax: "SELECT column_name, expression\nFROM table_name;",
    example: "SELECT ename, sal, sal + 300\nFROM emp;",
    does: "Displays each salary plus 300.",
    advice: "Write arithmetic expressions in the SELECT list when the output is calculated.",
    mistake: "The expression affects the displayed result, not the stored salary.",
    practice: "Display ename, sal, and sal + 300 from emp."
  },
  {
    lab: "Lab4",
    topic: "Expressions",
    title: "Operator Precedence and Parentheses",
    use: "Control arithmetic order in expressions.",
    syntax: "SELECT expression\nFROM table_name;",
    example: "SELECT ename, sal, 12 * (sal + 100)\nFROM emp;",
    does: "Adds 100 to sal before multiplying by 12.",
    advice: "Use parentheses when the intended calculation should happen first.",
    mistake: "12 * sal + 100 is different from 12 * (sal + 100).",
    practice: "Write the expression for annual salary after adding 100 to monthly salary."
  },
  {
    lab: "Lab4",
    topic: "Expressions",
    title: "NULL in Arithmetic",
    use: "Recognize that arithmetic with NULL returns NULL.",
    syntax: "SELECT arithmetic_expression_with_nullable_column\nFROM table_name;",
    example: "SELECT ename, 12 * sal + comm\nFROM emp\nWHERE ename = 'KING';",
    does: "Returns a null arithmetic result when comm is null.",
    advice: "Expect null output if any arithmetic part is null unless NVL is used later.",
    mistake: "Do not treat null as zero in arithmetic.",
    practice: "Explain why KING's 12 * sal + comm can be blank."
  },
  {
    lab: "Lab4",
    topic: "Aliases And Text",
    title: "Column Alias With AS",
    use: "Rename an output column heading.",
    syntax: "SELECT column_name AS alias\nFROM table_name;",
    example: "SELECT ename AS name, sal salary\nFROM emp;",
    does: "Displays ename under name and sal under salary.",
    advice: "AS is optional in the lab examples, but useful for clarity.",
    mistake: "Aliases change output headings, not table column names.",
    practice: "Display ename as name and sal as salary."
  },
  {
    lab: "Lab4",
    topic: "Aliases And Text",
    title: "Quoted Alias",
    use: "Preserve capitalization or spaces in a heading.",
    syntax: "SELECT expression \"Multi Word Alias\"\nFROM table_name;",
    example: "SELECT ename \"Name\",\n       sal * 12 \"Annual Salary\"\nFROM emp;",
    does: "Displays a heading with the exact text Annual Salary.",
    advice: "Use double quotes for aliases with spaces.",
    mistake: "Single quotes create string literals, not quoted aliases.",
    practice: "Display sal * 12 with the heading Annual Salary."
  },
  {
    lab: "Lab4",
    topic: "Aliases And Text",
    title: "Concatenation Operator",
    use: "Join character values into one output string.",
    syntax: "SELECT value1 || value2\nFROM table_name;",
    example: "SELECT ename || job AS \"Employees\"\nFROM emp;",
    does: "Combines employee name and job in one displayed value.",
    advice: "Use || between every piece you want to join.",
    mistake: "Concatenation does not automatically add spaces.",
    practice: "Concatenate ename and job from emp."
  },
  {
    lab: "Lab4",
    topic: "Aliases And Text",
    title: "Literal Character Strings",
    use: "Add fixed text to query output.",
    syntax: "SELECT column_name || ' literal text ' || column_name\nFROM table_name;",
    example: "SELECT ename || ' is a ' || job AS \"Employee Details\"\nFROM emp;",
    does: "Displays phrases such as KING is a PRESIDENT.",
    advice: "Put literal text in single quotes.",
    mistake: "Do not use double quotes for literal text in this lab pattern.",
    practice: "Write a query that displays ename is a job."
  },
  {
    lab: "Lab4",
    topic: "Distinct And Structure",
    title: "DISTINCT",
    use: "Remove duplicate rows from a result.",
    syntax: "SELECT DISTINCT column_name\nFROM table_name;",
    example: "SELECT DISTINCT deptno\nFROM emp;",
    does: "Shows each department number once.",
    advice: "Place DISTINCT immediately after SELECT.",
    mistake: "DISTINCT applies to the selected row combination, not just one visual column in every case.",
    practice: "Display distinct deptno values from emp."
  },
  {
    lab: "Lab4",
    topic: "Distinct And Structure",
    title: "DESCRIBE Table",
    use: "Show the table structure from SQL*Plus.",
    syntax: "DESCRIBE table_name;",
    example: "DESCRIBE dept;",
    does: "Shows DEPT column names, nullability, and datatypes.",
    advice: "Use DESCRIBE when the question asks for structure.",
    mistake: "DESCRIBE is not a SELECT query.",
    practice: "Describe the dept table."
  },
  {
    lab: "Lab5",
    topic: "WHERE Filters",
    title: "WHERE Clause",
    use: "Restrict rows returned by SELECT.",
    syntax: "SELECT column1, column2\nFROM table_name\nWHERE condition;",
    example: "SELECT ename, job, deptno\nFROM emp\nWHERE job = 'CLERK';",
    does: "Displays only employees whose job is CLERK.",
    advice: "WHERE comes after FROM.",
    mistake: "Character comparisons need single quotes.",
    practice: "Display ename and job where job is CLERK."
  },
  {
    lab: "Lab5",
    topic: "WHERE Filters",
    title: "Comparison Operators",
    use: "Compare column values to constants or expressions.",
    syntax: "WHERE column_name operator value",
    example: "SELECT ename, sal, comm\nFROM emp\nWHERE sal <= comm;",
    does: "Finds rows where salary is less than or equal to commission.",
    advice: "Choose the comparison operator that matches the wording: =, >, >=, <, <=, or <>.",
    mistake: "Use = for equality, not ==.",
    practice: "Write a WHERE condition for salary greater than 2000."
  },
  {
    lab: "Lab5",
    topic: "WHERE Filters",
    title: "BETWEEN Range",
    use: "Test whether a value is inside an inclusive range.",
    syntax: "WHERE column_name BETWEEN low_value AND high_value",
    example: "SELECT ename, sal\nFROM emp\nWHERE sal BETWEEN 1000 AND 1500;",
    does: "Finds salaries from 1000 through 1500.",
    advice: "Write the lower value first, then AND, then the upper value.",
    mistake: "BETWEEN includes the endpoints.",
    practice: "Select employees with sal between 1000 and 1500."
  },
  {
    lab: "Lab5",
    topic: "WHERE Filters",
    title: "IN List",
    use: "Match any value in a list.",
    syntax: "WHERE column_name IN (value1, value2, value3)",
    example: "SELECT empno, ename, sal, mgr\nFROM emp\nWHERE mgr IN (7902, 7566, 7788);",
    does: "Finds employees whose manager is one of the listed employee numbers.",
    advice: "Use IN instead of many OR comparisons on the same column.",
    mistake: "Remember parentheses around the list.",
    practice: "Find rows where mgr is 7902, 7566, or 7788."
  },
  {
    lab: "Lab5",
    topic: "Pattern Matching",
    title: "LIKE With Percent Wildcard",
    use: "Match a text pattern where % means zero or many characters.",
    syntax: "WHERE column_name LIKE 'pattern%'",
    example: "SELECT ename\nFROM emp\nWHERE ename LIKE 'S%';",
    does: "Finds names that start with S.",
    advice: "Use % for any number of characters.",
    mistake: "LIKE patterns must be in quotes.",
    practice: "Find employee names that start with S."
  },
  {
    lab: "Lab5",
    topic: "Pattern Matching",
    title: "LIKE With Underscore Wildcard",
    use: "Match exactly one unknown character.",
    syntax: "WHERE column_name LIKE '_A%'",
    example: "SELECT ename\nFROM emp\nWHERE ename LIKE '_A%';",
    does: "Finds names with A as the second character.",
    advice: "Use _ when exactly one character can vary.",
    mistake: "Do not use _ when any number of characters should match; use % for that.",
    practice: "Find names whose second character is A."
  },
  {
    lab: "Lab5",
    topic: "Pattern Matching",
    title: "LIKE With ESCAPE",
    use: "Search for a literal wildcard character.",
    syntax: "WHERE column_name LIKE '%\\_%' ESCAPE '\\'",
    example: "SELECT ename\nFROM emp\nWHERE ename LIKE '%\\_%' ESCAPE '\\';",
    does: "Treats underscore as a real underscore instead of a wildcard.",
    advice: "Use ESCAPE when the pattern itself contains % or _ as data.",
    mistake: "Without ESCAPE, _ means any one character.",
    practice: "Write a LIKE pattern that searches for a literal underscore."
  },
  {
    lab: "Lab5",
    topic: "NULL And Logic",
    title: "IS NULL",
    use: "Find rows where a column has no value.",
    syntax: "WHERE column_name IS NULL",
    example: "SELECT ename, mgr\nFROM emp\nWHERE mgr IS NULL;",
    does: "Finds employees with no manager value.",
    advice: "Use IS NULL, not = NULL.",
    mistake: "NULL cannot be compared with = in this lab pattern.",
    practice: "Find employees whose mgr is null."
  },
  {
    lab: "Lab5",
    topic: "NULL And Logic",
    title: "AND",
    use: "Require two conditions to both be true.",
    syntax: "WHERE condition1 AND condition2",
    example: "SELECT empno, ename, job, sal\nFROM emp\nWHERE sal >= 1100\nAND job = 'CLERK';",
    does: "Finds clerks whose salary is at least 1100.",
    advice: "Use AND when every condition must match.",
    mistake: "AND narrows the result; it does not broaden it.",
    practice: "Find CLERK employees with sal >= 1100."
  },
  {
    lab: "Lab5",
    topic: "NULL And Logic",
    title: "OR",
    use: "Return rows that match either condition.",
    syntax: "WHERE condition1 OR condition2",
    example: "SELECT empno, ename, job, sal\nFROM emp\nWHERE sal >= 1100\nOR job = 'CLERK';",
    does: "Finds rows that have salary at least 1100 or job CLERK.",
    advice: "Use OR when either condition is enough.",
    mistake: "OR usually returns more rows than AND.",
    practice: "Find employees whose salary is at least 1100 or job is CLERK."
  },
  {
    lab: "Lab5",
    topic: "NULL And Logic",
    title: "NOT",
    use: "Negate a condition.",
    syntax: "WHERE column_name NOT IN (value1, value2)",
    example: "SELECT ename, job\nFROM emp\nWHERE job NOT IN ('CLERK', 'MANAGER');",
    does: "Excludes rows whose job is CLERK or MANAGER.",
    advice: "Put NOT before the operator being negated.",
    mistake: "Be careful with NOT and parentheses in longer conditions.",
    practice: "Find employees whose job is not CLERK or MANAGER."
  },
  {
    lab: "Lab5",
    topic: "Sorting",
    title: "ORDER BY Ascending or Descending",
    use: "Sort query output.",
    syntax: "ORDER BY column_name [ASC | DESC]",
    example: "SELECT ename, job, deptno, hiredate\nFROM emp\nORDER BY hiredate DESC;",
    does: "Displays newest hire dates first.",
    advice: "ORDER BY is written after WHERE.",
    mistake: "ASC is default; DESC must be written when descending order is required.",
    practice: "Sort employees by hiredate descending."
  },
  {
    lab: "Lab5",
    topic: "Sorting",
    title: "ORDER BY Multiple Columns",
    use: "Sort by one column, then break ties with another.",
    syntax: "ORDER BY column1 ASC, column2 DESC",
    example: "SELECT ename, deptno, sal\nFROM emp\nORDER BY deptno, sal DESC;",
    does: "Sorts by department, and within each department by salary from high to low.",
    advice: "Separate sort columns with commas.",
    mistake: "DESC applies only to the column it follows.",
    practice: "Sort by deptno ascending and sal descending."
  },
  {
    lab: "Lab5",
    topic: "Sorting",
    title: "ORDER BY Alias",
    use: "Sort by a column alias from the SELECT list.",
    syntax: "SELECT expression alias\nFROM table_name\nORDER BY alias;",
    example: "SELECT ename, sal * 12 annsal\nFROM emp\nORDER BY annsal;",
    does: "Sorts by the calculated annual salary alias.",
    advice: "Use the alias exactly as it appears in the SELECT list.",
    mistake: "Do not sort by an alias that was never defined.",
    practice: "Display annual salary as annsal and sort by annsal."
  },
  {
    lab: "Lab6",
    topic: "Joins",
    title: "Basic Join Syntax",
    use: "Retrieve related data from two tables.",
    syntax: "SELECT table1.column, table2.column\nFROM table1, table2\nWHERE table1.column1 = table2.column2;",
    example: "SELECT emp.empno, emp.ename, emp.deptno, dept.deptno, dept.loc\nFROM emp, dept\nWHERE emp.deptno = dept.deptno;",
    does: "Matches employee rows to department rows by department number.",
    advice: "Always write the join condition in WHERE for the lab's join syntax.",
    mistake: "Missing the join condition creates a Cartesian product.",
    practice: "Join emp and dept using deptno."
  },
  {
    lab: "Lab6",
    topic: "Joins",
    title: "Table Aliases",
    use: "Shorten table names in join queries.",
    syntax: "SELECT alias.column\nFROM table_name alias\nWHERE alias.column = other_alias.column;",
    example: "SELECT e.empno, e.ename, e.deptno, d.deptno, d.loc\nFROM emp e, dept d\nWHERE e.deptno = d.deptno;",
    does: "Uses e for emp and d for dept.",
    advice: "After assigning an alias, use the alias instead of the full table name.",
    mistake: "Do not mix emp.deptno after defining emp e in the same query.",
    practice: "Rewrite the emp/dept join using aliases e and d."
  },
  {
    lab: "Lab6",
    topic: "Joins",
    title: "Non-Equijoin With BETWEEN",
    use: "Join when a value falls between two values instead of being equal.",
    syntax: "WHERE table1.value BETWEEN table2.low_value AND table2.high_value",
    example: "SELECT e.ename, e.sal, s.grade\nFROM emp e, salgrade s\nWHERE e.sal BETWEEN s.losal AND s.hisal;",
    does: "Finds the salary grade for each employee salary.",
    advice: "Use BETWEEN for the low/high range table.",
    mistake: "This is not an equality join because salary is matched to a range.",
    practice: "Join emp to salgrade using salary between losal and hisal."
  },
  {
    lab: "Lab6",
    topic: "Outer Joins",
    title: "Oracle Outer Join Operator (+)",
    use: "Include rows that do not normally meet the join condition.",
    syntax: "WHERE table1.column = table2.column(+)\nWHERE table1.column(+) = table2.column",
    example: "SELECT e.ename, d.deptno, d.dname\nFROM emp e, dept d\nWHERE e.deptno(+) = d.deptno\nORDER BY e.deptno;",
    does: "Shows department rows even when no employee row matches in the ordinary join.",
    advice: "Place (+) on the optional side in the lab's Oracle syntax.",
    mistake: "Do not write (+) in the SELECT list; it belongs in the WHERE join condition.",
    practice: "Write an outer join between emp and dept using (+)."
  },
  {
    lab: "Lab6",
    topic: "Self Joins",
    title: "Self Join",
    use: "Join a table to itself using two aliases.",
    syntax: "SELECT worker.column, manager.column\nFROM emp worker, emp manager\nWHERE worker.mgr = manager.empno;",
    example: "SELECT worker.ename || ' works for ' || manager.ename\nFROM emp worker, emp manager\nWHERE worker.mgr = manager.empno;",
    does: "Displays worker-manager relationships from emp.",
    advice: "Use two aliases so the same table can play two roles.",
    mistake: "Without aliases, the column references become ambiguous.",
    practice: "Write a self join that matches worker.mgr to manager.empno."
  },
  {
    lab: "Lab7",
    topic: "Group Functions",
    title: "AVG, SUM, MIN, MAX",
    use: "Summarize numeric or comparable data.",
    syntax: "SELECT AVG(column), MAX(column), MIN(column), SUM(column)\nFROM table_name\nWHERE condition;",
    example: "SELECT AVG(sal), MAX(sal), MIN(sal), SUM(sal)\nFROM emp\nWHERE job LIKE 'SALES%';",
    does: "Calculates salary summary values for sales jobs.",
    advice: "Use AVG and SUM for numeric data; MIN and MAX can work with other datatypes too in the lab.",
    mistake: "Do not select a regular column beside group functions unless it is grouped.",
    practice: "Find AVG, MAX, MIN, and SUM of sal for SALES jobs."
  },
  {
    lab: "Lab7",
    topic: "Group Functions",
    title: "COUNT(*)",
    use: "Count rows.",
    syntax: "SELECT COUNT(*)\nFROM table_name\nWHERE condition;",
    example: "SELECT COUNT(*)\nFROM emp\nWHERE deptno = 30;",
    does: "Counts all rows in department 30.",
    advice: "Use COUNT(*) when every row should count.",
    mistake: "COUNT(*) is not the same as COUNT(nullable_column).",
    practice: "Count employees in deptno 30."
  },
  {
    lab: "Lab7",
    topic: "Group Functions",
    title: "COUNT(column)",
    use: "Count nonnull values in a column.",
    syntax: "SELECT COUNT(column_name)\nFROM table_name\nWHERE condition;",
    example: "SELECT COUNT(comm)\nFROM emp\nWHERE deptno = 30;",
    does: "Counts nonnull commission values in department 30.",
    advice: "Use COUNT(column) when null values should not be counted.",
    mistake: "Null values are ignored by COUNT(column).",
    practice: "Count nonnull comm values for deptno 30."
  },
  {
    lab: "Lab7",
    topic: "Nulls In Aggregates",
    title: "Group Functions Ignore NULL",
    use: "Understand aggregate results when columns contain nulls.",
    syntax: "SELECT AVG(nullable_column)\nFROM table_name;",
    example: "SELECT AVG(comm)\nFROM emp;",
    does: "Averages only nonnull commission values.",
    advice: "Remember that group functions ignore null values unless you replace them.",
    mistake: "Do not assume AVG(comm) treats null commission as 0.",
    practice: "Explain why AVG(comm) ignores employees with null comm."
  },
  {
    lab: "Lab7",
    topic: "Nulls In Aggregates",
    title: "NVL With Group Functions",
    use: "Force nulls to count as a replacement value.",
    syntax: "SELECT AVG(NVL(column_name, replacement_value))\nFROM table_name;",
    example: "SELECT AVG(NVL(comm, 0))\nFROM emp;",
    does: "Averages commission while treating null commission as 0.",
    advice: "Wrap the nullable column in NVL before applying the group function.",
    mistake: "NVL changes the aggregate result because nulls are no longer ignored.",
    practice: "Average comm while treating nulls as zero."
  },
  {
    lab: "Lab7",
    topic: "GROUP BY",
    title: "GROUP BY One Column",
    use: "Calculate one aggregate result per group.",
    syntax: "SELECT group_column, group_function(column)\nFROM table_name\nGROUP BY group_column;",
    example: "SELECT deptno, AVG(sal)\nFROM emp\nGROUP BY deptno;",
    does: "Calculates average salary per department.",
    advice: "Every selected non-aggregate column must appear in GROUP BY.",
    mistake: "Leaving deptno out of GROUP BY while selecting it causes an error.",
    practice: "Find average salary by deptno."
  },
  {
    lab: "Lab7",
    topic: "GROUP BY",
    title: "GROUP BY Multiple Columns",
    use: "Group by combinations of column values.",
    syntax: "SELECT column1, column2, SUM(column3)\nFROM table_name\nGROUP BY column1, column2;",
    example: "SELECT deptno, job, SUM(sal)\nFROM emp\nGROUP BY deptno, job;",
    does: "Calculates salary totals for each department/job combination.",
    advice: "List every non-aggregate selected column in GROUP BY.",
    mistake: "Grouping only by deptno is not enough if job is also selected.",
    practice: "Sum salary by deptno and job."
  },
  {
    lab: "Lab7",
    topic: "GROUP BY",
    title: "Illegal Select List With Group Functions",
    use: "Recognize why a grouped query fails.",
    syntax: "SELECT non_grouped_column, COUNT(column_name)\nFROM table_name;",
    example: "SELECT deptno, COUNT(ename)\nFROM emp;",
    does: "The lab marks this as illegal because deptno is not grouped.",
    advice: "Add GROUP BY deptno when selecting deptno with COUNT(ename).",
    mistake: "Do not mix plain columns and group functions without GROUP BY.",
    practice: "Fix the query by adding the correct GROUP BY clause."
  },
  {
    lab: "Lab7",
    topic: "HAVING",
    title: "HAVING Filters Groups",
    use: "Restrict grouped results after grouping.",
    syntax: "SELECT group_column, group_function(column)\nFROM table_name\nGROUP BY group_column\nHAVING group_condition;",
    example: "SELECT deptno, MAX(sal)\nFROM emp\nGROUP BY deptno\nHAVING MAX(sal) > 2900;",
    does: "Shows departments whose maximum salary is greater than 2900.",
    advice: "Use HAVING for aggregate conditions on groups.",
    mistake: "WHERE cannot restrict groups with AVG(sal) or MAX(sal).",
    practice: "Display departments with AVG(sal) greater than 2000."
  },
  {
    lab: "Lab7",
    topic: "HAVING",
    title: "WHERE Before GROUP BY, HAVING After",
    use: "Filter rows first, then filter groups.",
    syntax: "SELECT group_column, SUM(column_name)\nFROM table_name\nWHERE row_condition\nGROUP BY group_column\nHAVING group_condition\nORDER BY SUM(column_name);",
    example: "SELECT job, SUM(sal) PAYROLL\nFROM emp\nWHERE job NOT LIKE 'SALES%'\nGROUP BY job\nHAVING SUM(sal) > 5000\nORDER BY SUM(sal);",
    does: "Excludes sales jobs, groups the rest by job, then keeps groups with payroll above 5000.",
    advice: "Use WHERE for row filters and HAVING for aggregate group filters.",
    mistake: "Do not put SUM(sal) > 5000 in WHERE.",
    practice: "Write a grouped query that excludes SALES jobs and keeps SUM(sal) > 5000."
  },
  {
    lab: "Lab7",
    topic: "Nested Aggregates",
    title: "Nested Group Functions",
    use: "Apply one group function to grouped aggregate results.",
    syntax: "SELECT MAX(AVG(column_name))\nFROM table_name\nGROUP BY group_column;",
    example: "SELECT MAX(AVG(sal))\nFROM emp\nGROUP BY deptno;",
    does: "Displays the maximum average salary among departments.",
    advice: "Use GROUP BY because AVG(sal) is calculated per group first.",
    mistake: "Do not omit GROUP BY when the inner aggregate must be per department.",
    practice: "Find the highest department average salary."
  },
  {
    lab: "Lab8",
    topic: "Subquery Basics",
    title: "Subquery in WHERE",
    use: "Use one query's result as another query's condition.",
    syntax: "SELECT select_list\nFROM table_name\nWHERE expression operator\n  (SELECT select_list FROM table_name);",
    example: "SELECT ename\nFROM emp\nWHERE sal >\n  (SELECT sal\n   FROM emp\n   WHERE empno = 7566);",
    does: "Finds employees earning more than employee 7566.",
    advice: "Put the inner SELECT in parentheses.",
    mistake: "The subquery executes first and must return a value that fits the operator.",
    practice: "Find employees earning more than employee 7566."
  },
  {
    lab: "Lab8",
    topic: "Single-Row Subqueries",
    title: "Multiple Single-Row Subqueries",
    use: "Compare against more than one single value from inner queries.",
    syntax: "WHERE column1 = (SELECT ...)\nAND column2 > (SELECT ...)",
    example: "SELECT ename, job\nFROM emp\nWHERE job = (SELECT job FROM emp WHERE empno = 7369)\nAND sal > (SELECT sal FROM emp WHERE empno = 7876);",
    does: "Finds employees with the same job as employee 7369 and salary greater than employee 7876.",
    advice: "Use AND when both subquery conditions must be true.",
    mistake: "Each subquery must return one value for = and >.",
    practice: "Write a query using two single-row subqueries."
  },
  {
    lab: "Lab8",
    topic: "Single-Row Subqueries",
    title: "Aggregate Function in a Subquery",
    use: "Compare a row value to an aggregate value.",
    syntax: "WHERE column_name = (SELECT MIN(column_name) FROM table_name)",
    example: "SELECT ename, job, sal\nFROM emp\nWHERE sal = (SELECT MIN(sal) FROM emp);",
    does: "Finds the employee with the minimum salary.",
    advice: "Aggregate subqueries are useful when the comparison value is not known.",
    mistake: "Do not calculate MIN(sal) manually if the query should find it.",
    practice: "Find employees whose salary equals the minimum salary."
  },
  {
    lab: "Lab8",
    topic: "Subqueries With Groups",
    title: "HAVING With a Subquery",
    use: "Filter groups using a value returned by a subquery.",
    syntax: "GROUP BY group_column\nHAVING aggregate_function(column) > (SELECT aggregate_function(column) FROM table_name WHERE condition)",
    example: "SELECT deptno, MIN(sal)\nFROM emp\nGROUP BY deptno\nHAVING MIN(sal) >\n  (SELECT MIN(sal)\n   FROM emp\n   WHERE deptno = 20);",
    does: "Keeps departments whose minimum salary is greater than department 20's minimum salary.",
    advice: "The subquery result is returned into HAVING.",
    mistake: "Do not place this aggregate group condition in WHERE.",
    practice: "Write a HAVING query that compares group MIN(sal) to dept 20's MIN(sal)."
  },
  {
    lab: "Lab8",
    topic: "Subquery Mistakes",
    title: "Single-Row Operator With Multi-Row Subquery",
    use: "Recognize an error caused by too many subquery rows.",
    syntax: "WHERE column_name = (SELECT column_name FROM table_name GROUP BY group_column)",
    example: "SELECT empno, ename\nFROM emp\nWHERE sal =\n  (SELECT MIN(sal)\n   FROM emp\n   GROUP BY deptno);",
    does: "The lab shows this as an error because = expects one value but the subquery returns multiple rows.",
    advice: "Use a multiple-row operator when the subquery returns multiple values.",
    mistake: "Do not use = with a multi-row subquery.",
    practice: "Explain why the grouped MIN(sal) subquery cannot be used with =."
  },
  {
    lab: "Lab8",
    topic: "Multiple-Row Subqueries",
    title: "ANY Operator",
    use: "Compare a value with any value returned by a subquery.",
    syntax: "WHERE column_name < ANY (SELECT column_name FROM table_name WHERE condition)",
    example: "SELECT empno, ename, job\nFROM emp\nWHERE sal < ANY\n  (SELECT sal FROM emp WHERE job = 'CLERK')\nAND job <> 'CLERK';",
    does: "Finds non-clerks with salary less than at least one clerk salary.",
    advice: "Remember the lab note: > ANY means more than the minimum; < ANY means less than the maximum.",
    mistake: "= ANY is equivalent to IN.",
    practice: "Write a query using < ANY with clerk salaries."
  },
  {
    lab: "Lab8",
    topic: "Multiple-Row Subqueries",
    title: "ALL Operator",
    use: "Compare a value with every value returned by a subquery.",
    syntax: "WHERE column_name > ALL (SELECT column_name FROM table_name)",
    example: "SELECT empno, ename, job\nFROM emp\nWHERE sal > ALL\n  (SELECT AVG(sal)\n   FROM emp\n   GROUP BY deptno);",
    does: "Finds employees whose salary is greater than every department average.",
    advice: "Remember the lab note: > ALL means more than the maximum; < ALL means less than the minimum.",
    mistake: "Do not confuse ANY and ALL; ALL is stricter.",
    practice: "Write a query using > ALL with department average salaries."
  },
  {
    lab: "Lab8",
    topic: "Subqueries In DML",
    title: "INSERT Rows From a Subquery",
    use: "Copy rows from one table into another.",
    syntax: "INSERT INTO target_table (column1, column2)\nSELECT source_column1, source_column2\nFROM source_table\nWHERE condition;",
    example: "INSERT INTO managers(id, name, salary, hiredate)\nSELECT empno, ename, sal, hiredate\nFROM emp\nWHERE job = 'MANAGER';",
    does: "Copies manager rows from emp into managers.",
    advice: "Do not use VALUES with INSERT ... SELECT.",
    mistake: "The number of INSERT columns must match the SELECT columns.",
    practice: "Copy manager empno, ename, sal, and hiredate into managers."
  },
  {
    lab: "Lab8",
    topic: "Subqueries In DML",
    title: "UPDATE With a Multiple-Column Subquery",
    use: "Set multiple columns from one subquery result.",
    syntax: "UPDATE table_name\nSET (column1, column2) = (SELECT column1, column2 FROM table_name WHERE condition)\nWHERE condition;",
    example: "UPDATE emp\nSET (job, deptno) =\n  (SELECT job, deptno FROM emp WHERE empno = 7499)\nWHERE empno = 7698;",
    does: "Copies job and deptno from employee 7499 to employee 7698.",
    advice: "Match the SET column list to the subquery select list.",
    mistake: "The subquery must return one row for this update.",
    practice: "Update employee 7698 using job and deptno from employee 7499."
  },
  {
    lab: "Lab8",
    topic: "Subqueries In DML",
    title: "UPDATE Rows Based on Another Table",
    use: "Update rows using subquery values and subquery conditions.",
    syntax: "UPDATE table_name\nSET column_name = (SELECT value FROM other_table WHERE condition)\nWHERE column_name = (SELECT value FROM other_table WHERE condition);",
    example: "UPDATE employee\nSET deptno = (SELECT deptno FROM emp WHERE empno = 7788)\nWHERE job = (SELECT job FROM emp WHERE empno = 7788);",
    does: "Updates employees with the same job as 7788 to department 7788's department.",
    advice: "Use subqueries when the needed values come from another table or row.",
    mistake: "Check that each SET subquery returns one value.",
    practice: "Write an UPDATE that copies deptno from employee 7788 based on job."
  },
  {
    lab: "Lab8",
    topic: "Subqueries In DML",
    title: "DELETE Rows Based on a Subquery",
    use: "Delete rows whose condition depends on another table.",
    syntax: "DELETE FROM table_name\nWHERE column_name = (SELECT column_name FROM other_table WHERE condition);",
    example: "DELETE FROM employee\nWHERE deptno =\n  (SELECT deptno\n   FROM dept\n   WHERE dname = 'SALES');",
    does: "Deletes employee rows for the SALES department.",
    advice: "Use the subquery to find the unknown deptno first.",
    mistake: "Be sure the DELETE target is the intended table.",
    practice: "Delete employees whose department name is SALES."
  },
  {
    lab: "Lab9",
    topic: "Case Functions",
    title: "Case-Sensitive Comparison",
    use: "Recognize that direct text comparison can fail when case differs.",
    syntax: "WHERE column_name = 'text'",
    example: "SELECT empno, ename, deptno\nFROM emp\nWHERE ename = 'blake';",
    does: "The lab shows no rows selected because stored names are uppercase.",
    advice: "Use the same case as the data or apply a case function.",
    mistake: "Do not expect lowercase 'blake' to match uppercase BLAKE.",
    practice: "Explain why ename = 'blake' returns no rows."
  },
  {
    lab: "Lab9",
    topic: "Case Functions",
    title: "UPPER",
    use: "Convert text to uppercase before comparison.",
    syntax: "UPPER(character_value)",
    example: "SELECT empno, ename, deptno\nFROM emp\nWHERE ename = UPPER('blake');",
    does: "Converts 'blake' to BLAKE so the row can match.",
    advice: "Use UPPER when the stored lab data is uppercase but the input text is lowercase.",
    mistake: "Do not put UPPER around a number column.",
    practice: "Find BLAKE using UPPER('blake')."
  },
  {
    lab: "Lab9",
    topic: "Character Functions",
    title: "CONCAT, LENGTH, INSTR, SUBSTR",
    use: "Manipulate and inspect character values.",
    syntax: "CONCAT(value1, value2)\nLENGTH(value)\nINSTR(value, search_text)\nSUBSTR(value, start_position, length)",
    example: "SELECT ename, CONCAT(ename, job), LENGTH(ename), INSTR(ename, 'A')\nFROM emp\nWHERE SUBSTR(job, 1, 5) = 'SALES';",
    does: "Shows combined name/job, name length, A position, and filters jobs whose first five characters are SALES.",
    advice: "Use SUBSTR for part of a string, LENGTH for size, INSTR for position, and CONCAT for joining two values.",
    mistake: "INSTR returns 0 when the character is not found.",
    practice: "Display ename, LENGTH(ename), and INSTR(ename, 'A') for SALESMAN rows."
  },
  {
    lab: "Lab9",
    topic: "Null Functions",
    title: "NVL in Arithmetic",
    use: "Replace null values before calculating.",
    syntax: "NVL(column_name, replacement_value)",
    example: "SELECT ename, sal, comm, (sal * 12) + NVL(comm, 0)\nFROM emp;",
    does: "Calculates annual compensation while treating null commission as 0.",
    advice: "Use NVL on nullable numeric columns before arithmetic.",
    mistake: "Without NVL, null commission makes the whole arithmetic result null.",
    practice: "Write annual compensation as (sal * 12) + NVL(comm, 0)."
  }
];

const state = {
  activePage: "roadmap",
  done: new Set(),
  sections: [],
  byId: new Map(),
  quizQuestions: [],
  wrongQuestionIds: new Set(),
  sqlSearch: "",
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
    codeGraded: false,
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
  if (hash === "labs" || hash === "chapters" || hash === "roadmap" || hash === "quiz" || hash === "sql-statements") {
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
        : page === "sql-statements"
          ? renderSqlStatementsPage()
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
    "sql-statements": "Deduplicated SQL patterns from Lab1-Lab9 with examples and practice prompts.",
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

function renderSqlStatementsPage() {
  const fragment = document.createDocumentFragment();
  const head = element("div", "page-head");
  const copy = element("div");
  copy.append(element("p", "eyebrow", "Practical SQL"));
  copy.append(element("h2", "", "SQL Lab Statements"));
  copy.append(element("p", "", `${SQL_LAB_STATEMENTS.length} deduplicated statement patterns from Lab1-Lab9, organized as a practical command notebook.`));
  head.append(copy);
  fragment.append(head);

  const emergency = element("section", "sql-emergency");
  emergency.append(element("p", "eyebrow", "Emergency Path"));
  emergency.append(element("h3", "", "Write These By Hand First"));
  const emergencyList = element("ol", "emergency-list");
  ["CREATE TABLE", "ALTER TABLE", "INSERT", "UPDATE", "DELETE", "SELECT with WHERE", "ORDER BY", "JOIN", "GROUP BY", "HAVING", "SUBQUERY", "Single-row functions"].forEach((item) => {
    emergencyList.append(element("li", "", item));
  });
  emergency.append(emergencyList);
  fragment.append(emergency);

  const toolbar = element("div", "sql-toolbar");
  const searchLabel = element("label", "sql-search");
  searchLabel.append(element("span", "", "Search SQL commands"));
  const search = element("input");
  search.type = "search";
  search.placeholder = "Try: join, insert, having, NVL, primary key";
  search.value = state.sqlSearch;
  search.addEventListener("input", () => {
    state.sqlSearch = search.value;
    filterSqlStatementCards(search.value);
  });
  searchLabel.append(search);
  toolbar.append(searchLabel, element("p", "sql-count", `${SQL_LAB_STATEMENTS.length} entries`));
  fragment.append(toolbar);

  const layout = element("div", "sql-statements-layout");
  layout.append(renderSqlStatementsToc(), renderSqlStatementsSections());
  fragment.append(layout, renderFinalSqlChecklist());
  window.setTimeout(() => filterSqlStatementCards(state.sqlSearch), 0);
  return fragment;
}

function renderSqlStatementsToc() {
  const nav = element("nav", "sql-toc");
  nav.setAttribute("aria-label", "SQL lab statements table of contents");
  nav.append(element("h3", "", "Labs"));
  SQL_STATEMENT_LABS.forEach(([lab, title]) => {
    const count = SQL_LAB_STATEMENTS.filter((entry) => entry.lab === lab).length;
    const link = element("a", "", `${lab} · ${title} (${count})`);
    link.href = `#sql-${lab.toLowerCase()}`;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openAndScrollTo(`sql-${lab.toLowerCase()}`);
    });
    nav.append(link);
  });
  return nav;
}

function renderSqlStatementsSections() {
  const stack = element("div", "sql-section-stack");
  SQL_STATEMENT_LABS.forEach(([lab, title], index) => {
    const entries = SQL_LAB_STATEMENTS.filter((entry) => entry.lab === lab);
    const details = element("details", "sql-lab-section");
    details.id = `sql-${lab.toLowerCase()}`;
    details.open = index < 2;
    const summaryLine = element("summary");
    const titleWrap = element("span");
    titleWrap.append(element("span", "summary-title", `${lab} — ${title}`));
    titleWrap.append(element("span", "summary-meta", `${entries.length} unique statement patterns`));
    summaryLine.append(titleWrap, element("span", "chevron", "›"));
    const body = element("div", "sql-lab-body");
    entries.forEach((entry) => body.append(renderSqlStatementEntry(entry)));
    details.append(summaryLine, body);
    stack.append(details);
  });
  return stack;
}

function renderSqlStatementEntry(entry) {
  const card = element("article", "sql-entry-card");
  card.dataset.search = [
    entry.lab,
    entry.topic,
    entry.title,
    entry.use,
    entry.syntax,
    entry.example,
    entry.does,
    entry.advice,
    entry.mistake,
    entry.practice
  ].join(" ").toLowerCase();
  card.append(element("p", "sql-topic", entry.topic), element("h4", "", entry.title));
  card.append(markedLine("p", "sql-line", "Use it for:", entry.use));
  card.append(statementCodeBlock("Syntax pattern", entry.syntax));
  card.append(statementCodeBlock("Lab example", entry.example));
  card.append(markedLine("p", "sql-line", "What it does:", entry.does));
  card.append(markedLine("p", "sql-line", "How to write it in the exam/lab quiz:", entry.advice));
  if (entry.mistake) {
    card.append(markedLine("p", "sql-line", "Common mistake:", entry.mistake));
  }
  card.append(markedLine("p", "sql-line", "Practice:", entry.practice));
  return card;
}

function statementCodeBlock(label, value) {
  const wrap = element("div", "statement-code");
  const top = element("div", "statement-code-top");
  top.append(element("strong", "", label));
  const copy = element("button", "copy-code", "Copy");
  copy.type = "button";
  copy.addEventListener("click", () => copyStatementCode(copy, value));
  top.append(copy);
  const pre = element("pre");
  const code = element("code");
  code.textContent = value;
  pre.append(code);
  wrap.append(top, pre);
  return wrap;
}

function copyStatementCode(button, value) {
  if (!navigator.clipboard) {
    button.textContent = "Select";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1100);
    return;
  }
  navigator.clipboard.writeText(value).then(() => {
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1100);
  }).catch(() => {
    button.textContent = "Select";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1100);
  });
}

function filterSqlStatementCards(value) {
  const query = value.trim().toLowerCase();
  const cards = Array.from(document.querySelectorAll(".sql-entry-card"));
  let visible = 0;
  cards.forEach((card) => {
    const show = !query || card.dataset.search.includes(query);
    card.hidden = !show;
    if (show) {
      visible += 1;
    }
  });
  document.querySelectorAll(".sql-lab-section").forEach((section) => {
    const hasVisible = Array.from(section.querySelectorAll(".sql-entry-card")).some((card) => !card.hidden);
    section.hidden = !hasVisible;
    if (hasVisible && query) {
      section.open = true;
    }
  });
  const count = document.querySelector(".sql-count");
  if (count) {
    count.textContent = query ? `${visible} matching entries` : `${SQL_LAB_STATEMENTS.length} entries`;
  }
}

function renderFinalSqlChecklist() {
  const section = element("section", "final-sql-checklist");
  section.append(element("p", "eyebrow", "Final Exam Practice Checklist"));
  section.append(element("h3", "", "Can You Write These Without Looking?"));
  const tasks = [
    "Create a table with a primary key.",
    "Add a foreign key constraint.",
    "Insert a row into emp.",
    "Insert a row with a specific date using TO_DATE.",
    "Update rows using WHERE.",
    "Delete rows using WHERE.",
    "Commit changes and roll back pending changes.",
    "Select employees with sal > 2000.",
    "Sort employees by department and salary descending.",
    "Join emp and dept.",
    "Join emp to salgrade with BETWEEN.",
    "Write a self join for worker-manager relationships.",
    "Find average salary by department.",
    "Use HAVING AVG(sal) > 2000.",
    "Write a single-row subquery.",
    "Write a multiple-row subquery with ANY or ALL.",
    "Insert rows using a subquery.",
    "Update rows using a subquery.",
    "Delete rows using a subquery.",
    "Use UPPER, CONCAT, SUBSTR, LENGTH, INSTR, and NVL."
  ];
  const grid = element("div", "checklist-grid");
  tasks.forEach((task) => {
    const label = element("label", "checklist-item");
    const input = element("input");
    input.type = "checkbox";
    label.append(input, element("span", "", task));
    grid.append(label);
  });
  section.append(grid);
  return section;
}

function buildQuizQuestions(sections) {
  const categoryMap = new Map(sections.map((section) => [
    section.id,
    `${section.id} — ${QUIZ_SHORT_TITLES[section.id] || section.title}`
  ]));
  return mergeQuizBanks(
    buildCuratedQuizBank(categoryMap),
    buildLabCoverageQuestions(sections, categoryMap)
  );
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

  return normalizeLabQuizBank([
    q("Lab1", "create-table-purpose", "Easy", "Multiple Choice", "What is the purpose of CREATE TABLE?", "To create a table with listed columns and constraints.", "The lab uses CREATE TABLE to define new tables such as emp_tbl, dept, and Student.", {
      choices: ["To create a table with listed columns and constraints.", "To permanently save a transaction.", "To sort query output.", "To remove duplicate rows."]
    }),
    q("Lab1", "desc-purpose", "Easy", "Multiple Choice", "Which SQL*Plus command displays a table structure?", "DESC", "The lab shows DESC(RIBE) table_name and DESCRIBE dept for table structure.", {
      choices: ["DESC", "COMMIT", "RENAME", "ROLLBACK"]
    }),
    q("Lab1", "alter-add", "Medium", "Multiple Choice", "What does this command do?", "It adds the Collage column to Student.", "ALTER TABLE with ADD adds a new column or constraint.", {
      sql: "ALTER TABLE Student ADD Collage VARCHAR2(20);",
      choices: ["It adds the Collage column to Student.", "It drops the Student table.", "It inserts one Student row.", "It displays the Student table structure."]
    }),
    q("Lab1", "drop-table", "Medium", "Multiple Choice", "Which statement about DROP TABLE matches the lab notes?", "It deletes both table data and structure and cannot be rolled back.", "The lab notes state that all data and structure are deleted and you cannot roll back this statement.", {
      choices: ["It deletes both table data and structure and cannot be rolled back.", "It deletes rows but keeps the table structure.", "It only displays a table structure.", "It always waits for a COMMIT before taking effect."]
    }),
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
    q("Lab2", "check-range", "Easy", "Multiple Choice", "What condition is enforced by this CHECK constraint?", "deptno must be between 10 and 99.", "The lab shows CHECK (deptno BETWEEN 10 AND 99).", {
      sql: "CHECK (deptno BETWEEN 10 AND 99)",
      choices: ["deptno must be between 10 and 99.", "deptno must be null.", "deptno must reference empno.", "deptno must be sorted descending."]
    }),
    q("Lab2", "alter-add-constraint", "Medium", "Multiple Choice", "ALTER TABLE can add or drop a constraint, but cannot do which operation to a constraint?", "MODIFY", "The lab notes say constraints can be added or dropped, but not modified.", {
      choices: ["MODIFY", "ADD", "DROP", "ENABLE"]
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
    q("Lab3", "sysdate", "Easy", "Multiple Choice", "Which function records the current date and time in the lab INSERT example?", "SYSDATE", "The lab notes that SYSDATE records the current date and time.", {
      choices: ["SYSDATE", "TO_DATE", "NVL", "LOWER"]
    }),
    q("Lab3", "update-where", "Hard", "Multiple Choice", "What happens if an UPDATE statement omits the WHERE clause?", "All rows in the table are modified.", "The lab states that all rows are modified if WHERE is omitted.", {
      choices: ["All rows in the table are modified.", "No rows can be modified.", "Only one row is modified.", "The command becomes a SELECT statement."]
    }),
    q("Lab3", "delete-where", "Medium", "Multiple Choice", "What happens if a DELETE statement omits the WHERE clause?", "All rows in the table are deleted.", "The lab notes that specific rows are deleted with WHERE; all rows are deleted if WHERE is omitted.", {
      choices: ["All rows in the table are deleted.", "Only null rows are deleted.", "The table structure is dropped.", "The command is rolled back automatically."]
    }),
    q("Lab3", "commit", "Easy", "Multiple Choice", "Which command permanently saves pending transaction changes?", "COMMIT", "The lab shows COMMIT and describes it as permanently saving pending transaction changes.", {
      choices: ["COMMIT", "ROLLBACK", "DELETE", "UPDATE"]
    }),
    q("Lab3", "rollback", "Medium", "Multiple Choice", "Which command discards pending changes and restores the previous state of the data?", "ROLLBACK", "The lab says ROLLBACK undoes pending changes, restores the previous state, and releases locks.", {
      choices: ["ROLLBACK", "COMMIT", "RENAME", "DESC"]
    }),

    q("Lab4", "select-all", "Easy", "Multiple Choice", "What does this query retrieve?", "All columns from dept.", "SELECT * retrieves all columns from the listed table.", {
      sql: "SELECT *\nFROM dept;",
      choices: ["All columns from dept.", "Only distinct department numbers.", "The structure of dept.", "Grouped salary totals."]
    }),
    q("Lab4", "distinct", "Easy", "Multiple Choice", "Which keyword eliminates duplicate rows in a SELECT result?", "DISTINCT", "The lab uses SELECT DISTINCT deptno to eliminate duplicate rows.", {
      choices: ["DISTINCT", "WHERE", "ORDER BY", "GROUP BY"]
    }),
    q("Lab4", "null-arithmetic", "Hard", "Multiple Choice", "What happens to an arithmetic expression that contains a null value?", "It evaluates to null.", "The lab states that arithmetic expressions containing a null value evaluate to null.", {
      choices: ["It evaluates to null.", "It evaluates to zero.", "It ignores the null value.", "It always raises a primary key error."]
    }),
    q("Lab4", "alias-quotes", "Medium", "Multiple Choice", "Why are double quotes used around an alias such as \"Annual Salary\"?", "To preserve the alias as a multiword heading.", "The lab shows sal*12 \"Annual Salary\" as a column alias.", {
      choices: ["To preserve the alias as a multiword heading.", "To force a group function.", "To make the column NOT NULL.", "To create a foreign key."]
    }),
    q("Lab4", "concatenation", "Easy", "Multiple Choice", "Which operator concatenates character strings in the lab examples?", "||", "The lab uses ename||job and ename ||' is a '||job for concatenation.", {
      choices: ["||", "+", "%", "_"]
    }),

    q("Lab5", "where-clause", "Easy", "Multiple Choice", "Which clause restricts the rows returned by a SELECT statement?", "WHERE", "The lab states that rows are restricted by using the WHERE clause after FROM.", {
      choices: ["WHERE", "GROUP BY", "HAVING", "DESC"]
    }),
    q("Lab5", "strings-dates", "Medium", "Multiple Choice", "How are character strings and date values written in WHERE conditions?", "Inside single quotation marks.", "The lab states that character strings and date values are enclosed in single quotation marks.", {
      choices: ["Inside single quotation marks.", "Inside square brackets.", "Without any punctuation.", "Only inside double quotation marks."]
    }),
    q("Lab5", "between", "Easy", "Multiple Choice", "What does BETWEEN test?", "Whether a value is within a range.", "The lab uses BETWEEN 1000 AND 1500 to display rows based on a range.", {
      choices: ["Whether a value is within a range.", "Whether a value is null.", "Whether a value is in uppercase.", "Whether duplicate rows should be removed."]
    }),
    q("Lab5", "in-list", "Easy", "Multiple Choice", "What does the IN operator test?", "Whether a value is found in a list.", "The lab uses mgr IN (7902, 7566, 7788).", {
      choices: ["Whether a value is found in a list.", "Whether a pattern has one character.", "Whether a group should be filtered.", "Whether a table should be renamed."]
    }),
    q("Lab5", "like-percent", "Medium", "Multiple Choice", "In a LIKE pattern, which symbol denotes zero or many characters?", "%", "The lab states that % denotes zero or many characters and _ denotes one character.", {
      choices: ["%", "_", "||", "(+)"]
    }),
    q("Lab5", "is-null", "Medium", "Multiple Choice", "Which operator tests for null values?", "IS NULL", "The lab uses WHERE mgr IS NULL to find rows with null manager values.", {
      choices: ["IS NULL", "IN", "BETWEEN", "DISTINCT"]
    }),
    q("Lab5", "precedence-parentheses", "Hard", "Multiple Choice", "What do parentheses do in logical WHERE conditions?", "They force priority.", "The lab contrasts conditions with and without parentheses and notes that parentheses force priority.", {
      choices: ["They force priority.", "They remove duplicate rows.", "They create a table alias.", "They commit the transaction."]
    }),

    q("Lab6", "equijoin", "Medium", "Multiple Choice", "What is the join condition in this query?", "emp.deptno=dept.deptno", "The lab retrieves records with equijoins by matching department numbers from emp and dept.", {
      sql: "SELECT emp.empno, emp.ename, emp.deptno,\n       dept.deptno, dept.loc\nFROM emp, dept\nWHERE emp.deptno=dept.deptno;",
      choices: ["emp.deptno=dept.deptno", "emp.empno=dept.deptno", "dept.loc=emp.ename", "emp.sal BETWEEN deptno AND loc"]
    }),
    q("Lab6", "table-alias", "Easy", "Multiple Choice", "Why does the lab use table aliases such as e and d?", "To simplify queries.", "The lab notes that table aliases simplify queries.", {
      choices: ["To simplify queries.", "To create new tables.", "To disable constraints.", "To force null values."]
    }),
    q("Lab6", "nonequijoin", "Hard", "Multiple Choice", "What kind of join is shown by matching salary between low and high salary limits?", "A non-equijoin.", "The lab retrieves records with non-equijoins by using BETWEEN s.losal AND s.hisal.", {
      sql: "SELECT e.ename, e.sal, s.grade\nFROM emp e, salgrade s\nWHERE e.sal\nBETWEEN s.losal AND s.hisal;",
      choices: ["A non-equijoin.", "A self join.", "A primary key constraint.", "A rollback operation."]
    }),
    q("Lab6", "outer-join-purpose", "Medium", "Multiple Choice", "Why use an outer join?", "To also see rows that do not usually meet the join condition.", "The lab states that an outer join shows rows that do not usually meet the join condition.", {
      choices: ["To also see rows that do not usually meet the join condition.", "To remove duplicate rows.", "To make a column NOT NULL.", "To save a transaction."]
    }),
    q("Lab6", "outer-join-symbol", "Easy", "Multiple Choice", "Which Oracle outer join operator is shown in the lab?", "(+)", "The lab states that the outer join operator is the plus sign (+).", {
      choices: ["(+)", "%", "_", "||"]
    }),
    q("Lab6", "self-join", "Medium", "Multiple Choice", "What does a self join do in the lab example?", "It joins emp to itself to show worker-manager relationships.", "The lab uses emp worker and emp manager with worker.mgr = manager.empno.", {
      choices: ["It joins emp to itself to show worker-manager relationships.", "It joins emp to dept using loc.", "It disables dependent constraints.", "It displays table structure."]
    }),
    q("Lab6", "join-syntax", "Easy", "Multiple Choice", "In the lab join syntax, where does the join condition belong?", "WHERE", "The lab shows joins with WHERE table1.column1 = table2.column2.", {
      choices: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"]
    }),
    q("Lab6", "outer-join-trap", "Hard", "Multiple Choice", "Where is the lab's Oracle outer join operator written?", "In the WHERE clause.", "The lab uses the Oracle (+) outer join syntax in WHERE conditions.", {
      choices: ["In the WHERE clause.", "In a COMMIT statement.", "Inside GROUP BY only.", "Only after ORDER BY."]
    }),

    q("Lab7", "avg-sum", "Easy", "Multiple Choice", "Which group functions does the lab say are used for numeric data?", "AVG and SUM", "The lab notes that AVG and SUM can be used for numeric data.", {
      choices: ["AVG and SUM", "CONCAT and INSTR", "DESC and RENAME", "COMMIT and ROLLBACK"]
    }),
    q("Lab7", "min-max", "Easy", "Multiple Choice", "Which statement about MIN and MAX matches the lab?", "MIN and MAX can be used for any datatype.", "The lab states that MIN and MAX can be used for any datatype.", {
      choices: ["MIN and MAX can be used for any datatype.", "MIN and MAX only work with dates.", "MIN and MAX require a WHERE clause.", "MIN and MAX cannot ignore nulls."]
    }),
    q("Lab7", "count-star", "Medium", "Multiple Choice", "What does COUNT(*) return?", "The number of rows in a table.", "The lab states that COUNT(*) returns the number of rows in a table.", {
      choices: ["The number of rows in a table.", "The number of nonnull values in one expression only.", "The maximum salary.", "The current date and time."]
    }),
    q("Lab7", "count-expr", "Medium", "Multiple Choice", "What does COUNT(expr) return?", "The number of nonnull rows for that expression.", "The lab states that COUNT(expr) returns the number of nonnull rows.", {
      choices: ["The number of nonnull rows for that expression.", "All rows including null values.", "The average including every null automatically.", "The number of tables owned by the user."]
    }),
    q("Lab7", "group-null", "Hard", "Multiple Choice", "How do group functions treat null values in a column?", "They ignore null values.", "The lab states that group functions ignore null values.", {
      choices: ["They ignore null values.", "They convert every null to 1.", "They always return null.", "They raise a foreign key error."]
    }),
    q("Lab7", "nvl-aggregate", "Hard", "Multiple Choice", "Why use NVL with a group function?", "To force the group function to include null values as a replacement value.", "The lab says NVL forces group functions to include null values.", {
      choices: ["To force the group function to include null values as a replacement value.", "To create a table alias.", "To filter groups after GROUP BY.", "To disable a constraint."]
    }),
    q("Lab7", "group-by-rule", "Hard", "Multiple Choice", "Which GROUP BY rule matches the lab?", "Every selected column that is not inside a group function must appear in GROUP BY.", "The lab warns that non-aggregate SELECT expressions must be in GROUP BY.", {
      choices: ["Every selected column that is not inside a group function must appear in GROUP BY.", "Every selected column must be inside COUNT(*).", "GROUP BY must always come before WHERE.", "GROUP BY cannot use department numbers."]
    }),
    q("Lab7", "having", "Medium", "Multiple Choice", "Which clause restricts groups after GROUP BY?", "HAVING", "The lab says WHERE cannot restrict groups; HAVING restricts groups.", {
      choices: ["HAVING", "WHERE", "ORDER BY", "SELECT"]
    }),
    q("Lab7", "where-aggregate", "Hard", "Multiple Choice", "Which clause should restrict groups with AVG(sal) > 2000?", "HAVING", "The lab shows WHERE with AVG(sal) > 2000 as illegal and says HAVING is used to restrict groups.", {
      choices: ["HAVING", "WHERE", "DISTINCT", "DESC"]
    }),

    q("Lab8", "subquery-parentheses", "Easy", "Multiple Choice", "How is a subquery enclosed in the lab syntax?", "In parentheses.", "The lab shows the inner SELECT inside parentheses.", {
      choices: ["In parentheses.", "In square brackets.", "After COMMIT.", "Only inside double quotes."]
    }),
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
    q("Lab8", "eq-any", "Medium", "Multiple Choice", "According to the lab notes, = ANY is equivalent to which operator?", "IN", "The lab notes say = ANY is equivalent to IN.", {
      choices: ["IN", "LIKE", "BETWEEN", "IS NULL"]
    }),
    q("Lab8", "insert-subquery", "Medium", "Multiple Choice", "Why does this INSERT statement not use VALUES?", "It copies rows returned by a subquery.", "The lab says INSERT with a subquery copies rows from another table and does not use VALUES.", {
      sql: "INSERT INTO managers(id, name, salary, hiredate)\nSELECT empno, ename, sal, hiredate\nFROM emp\nWHERE job = 'MANAGER';",
      choices: ["It copies rows returned by a subquery.", "It creates a CHECK constraint.", "It disables dependent constraints.", "It filters grouped results."]
    }),
    q("Lab8", "delete-subquery", "Medium", "Multiple Choice", "What can a subquery do in a DELETE statement?", "Remove rows based on values from another table.", "The lab deletes employee rows where deptno is returned by a subquery against dept.", {
      choices: ["Remove rows based on values from another table.", "Create a table with a primary key.", "Display table structure.", "Sort rows by hiredate."]
    }),
    q("Lab8", "subquery-no-values", "Easy", "Multiple Choice", "When are subqueries useful according to the lab summary?", "When a query is based on unknown values.", "The lab summary states that subqueries are useful when a query is based on unknown values.", {
      choices: ["When a query is based on unknown values.", "Only when creating a CHECK constraint.", "Only after every COMMIT.", "When displaying table structure only."]
    }),

    q("Lab9", "case-conversion", "Medium", "Multiple Choice", "Why does this condition find BLAKE when the literal is lowercase?", "UPPER converts the literal to uppercase for comparison.", "The lab uses UPPER('blake') to match ename values stored as uppercase.", {
      sql: "SELECT empno, ename, deptno\nFROM emp\nWHERE ename = UPPER('blake');",
      choices: ["UPPER converts the literal to uppercase for comparison.", "LOWER converts ename to lowercase.", "NVL replaces null names.", "COUNT ignores null values."]
    }),
    q("Lab9", "case-sensitive", "Hard", "Multiple Choice", "What happens when the lab compares ename directly to lowercase 'blake'?", "No rows are selected.", "The lab first queries ename = 'blake' and shows no rows selected.", {
      choices: ["No rows are selected.", "Every employee is selected.", "The row is inserted.", "The table is dropped."]
    }),
    q("Lab9", "concat", "Easy", "Multiple Choice", "What does CONCAT(ename, job) do in the lab's character function query?", "Combines employee name and job into one value.", "The lab output shows values such as MARTINSALESMAN.", {
      choices: ["Combines employee name and job into one value.", "Counts employee rows.", "Finds the minimum hiredate.", "Changes null commission to zero."]
    }),
    q("Lab9", "length", "Easy", "Multiple Choice", "Which character function returns the length of ename in the lab query?", "LENGTH", "The lab selects LENGTH(ename) with character manipulation functions.", {
      choices: ["LENGTH", "INSTR", "CONCAT", "SUBSTR"]
    }),
    q("Lab9", "instr", "Medium", "Multiple Choice", "What does INSTR(ename, 'A') report in the lab output?", "The position of A in the employee name.", "The lab lists INSTR(ENAME,'A') values such as 2 for MARTIN and 0 for TURNER.", {
      choices: ["The position of A in the employee name.", "The number of employee rows.", "The department location.", "The average commission."]
    }),
    q("Lab9", "nvl", "Medium", "Multiple Choice", "Why is NVL(comm,0) used in this annual compensation expression?", "It replaces null commission with 0 before arithmetic.", "The lab uses NVL so null commission does not make the arithmetic result null.", {
      sql: "SELECT ename, sal, comm, (sal*12)+NVL(comm,0)\nFROM emp;",
      choices: ["It replaces null commission with 0 before arithmetic.", "It groups rows by commission.", "It removes duplicate commissions.", "It converts salaries to dates."]
    }),
    q("Lab9", "substr-filter", "Medium", "Multiple Choice", "What kind of rows does SUBSTR(job,1,5) = 'SALES' select in the lab note?", "Rows where the first five job characters are SALES.", "The lab note uses SUBSTR(job,1,5) = 'SALES' with SALESMAN rows.", {
      choices: ["Rows where the first five job characters are SALES.", "Rows with null jobs.", "Rows grouped by job.", "Rows sorted by job length."]
    }),
    q("Lab9", "nvl-arithmetic", "Hard", "Multiple Choice", "What does NVL(comm,0) prevent in salary arithmetic?", "A null commission making the whole expression null.", "The lab demonstrates NVL in (sal*12)+NVL(comm,0).", {
      choices: ["A null commission making the whole expression null.", "A salary being sorted descending.", "A row being inserted into emp.", "A group being filtered by HAVING."]
    }),

    q("Lab1", "code-create-dept", "Medium", "write-code", "Write a CREATE TABLE statement for dept with deptno NUMBER(2), dname VARCHAR2(14), and loc VARCHAR2(13).", "CREATE TABLE dept (deptno NUMBER(2), dname VARCHAR2(14), loc VARCHAR2(13));", "CREATE TABLE defines the table name followed by column names and datatypes.", {
      expectedAnswer: "CREATE TABLE dept (deptno NUMBER(2), dname VARCHAR2(14), loc VARCHAR2(13));"
    }),
    q("Lab1", "code-alter-add", "Medium", "write-code", "Write the SQL statement to add a Collage VARCHAR2(20) column to the Student table.", "ALTER TABLE Student ADD Collage VARCHAR2(20);", "ALTER TABLE with ADD adds a new column to an existing table.", {
      expectedAnswer: "ALTER TABLE Student ADD Collage VARCHAR2(20);"
    }),
    q("Lab2", "code-foreign-key", "Hard", "write-code", "Write the constraint clause that makes emp.deptno reference dept(deptno).", "CONSTRAINT emp_deptno_fk FOREIGN KEY (deptno) REFERENCES dept (deptno);", "A FOREIGN KEY constraint points a column in the child table to the referenced key in the parent table.", {
      expectedAnswer: "CONSTRAINT emp_deptno_fk FOREIGN KEY (deptno) REFERENCES dept (deptno);"
    }),
    q("Lab2", "code-check-range", "Medium", "write-code", "Write a CHECK constraint named emp_deptno_ck that only allows deptno values between 10 and 99.", "CONSTRAINT emp_deptno_ck CHECK (deptno BETWEEN 10 AND 99);", "CHECK enforces a condition that each row must satisfy.", {
      expectedAnswer: "CONSTRAINT emp_deptno_ck CHECK (deptno BETWEEN 10 AND 99);"
    }),
    q("Lab3", "code-insert-dept", "Medium", "write-code", "Write an INSERT statement that adds department 50 named DEVELOPMENT in DETROIT to dept.", "INSERT INTO dept (deptno, dname, loc) VALUES (50, 'DEVELOPMENT', 'DETROIT');", "INSERT INTO names the target table, optional columns, and the VALUES to store in the new row.", {
      expectedAnswer: "INSERT INTO dept (deptno, dname, loc) VALUES (50, 'DEVELOPMENT', 'DETROIT');"
    }),
    q("Lab3", "code-update-emp", "Medium", "write-code", "Write an UPDATE statement that changes employee 7782 to department 20.", "UPDATE emp SET deptno = 20 WHERE empno = 7782;", "The WHERE clause limits the UPDATE to the specific employee row.", {
      expectedAnswer: "UPDATE emp SET deptno = 20 WHERE empno = 7782;"
    }),
    q("Lab4", "code-select-dept", "Easy", "write-code", "Write a SELECT statement to display all columns from dept.", "SELECT * FROM dept;", "SELECT * retrieves all columns from the specified table.", {
      expectedAnswer: "SELECT * FROM dept;"
    }),
    q("Lab4", "code-alias-annual", "Medium", "write-code", "Write a query that displays ename as Name and sal*12 as \"Annual Salary\" from emp.", "SELECT ename AS Name, sal*12 \"Annual Salary\" FROM emp;", "Column aliases rename output headings; double quotes preserve the multiword alias.", {
      expectedAnswer: "SELECT ename AS Name, sal*12 \"Annual Salary\" FROM emp;"
    }),
    q("Lab5", "code-clerk-filter", "Medium", "write-code", "Write a SQL query to display employee names and jobs from emp where the job is CLERK.", "SELECT ename, job FROM emp WHERE job = 'CLERK';", "The WHERE clause restricts rows to employees whose job value is CLERK.", {
      expectedAnswer: "SELECT ename, job FROM emp WHERE job = 'CLERK';"
    }),
    q("Lab5", "code-order-salary", "Medium", "write-code", "Write a query that displays ename and sal from emp ordered by salary descending.", "SELECT ename, sal FROM emp ORDER BY sal DESC;", "ORDER BY sal DESC sorts the result from highest salary to lowest salary.", {
      expectedAnswer: "SELECT ename, sal FROM emp ORDER BY sal DESC;"
    }),
    q("Lab6", "code-equijoin", "Hard", "write-code", "Write a join query that displays employee name and department location by matching emp.deptno to dept.deptno.", "SELECT emp.ename, dept.loc FROM emp, dept WHERE emp.deptno = dept.deptno;", "The equijoin condition matches rows where the department numbers are equal.", {
      expectedAnswer: "SELECT emp.ename, dept.loc FROM emp, dept WHERE emp.deptno = dept.deptno;"
    }),
    q("Lab6", "code-self-join", "Hard", "write-code", "Write a self join that displays each worker name and their manager name from emp.", "SELECT worker.ename, manager.ename FROM emp worker, emp manager WHERE worker.mgr = manager.empno;", "A self join uses two aliases for the same table, then matches worker.mgr to manager.empno.", {
      expectedAnswer: "SELECT worker.ename, manager.ename FROM emp worker, emp manager WHERE worker.mgr = manager.empno;"
    }),
    q("Lab7", "code-group-by", "Medium", "write-code", "Write a query that displays deptno and average salary from emp for each department.", "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno;", "GROUP BY creates one salary average per department number.", {
      expectedAnswer: "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno;"
    }),
    q("Lab7", "code-having", "Hard", "write-code", "Write a query that displays deptno and average salary for departments whose average salary is greater than 2000.", "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING AVG(sal) > 2000;", "HAVING filters groups after GROUP BY has calculated each average.", {
      expectedAnswer: "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING AVG(sal) > 2000;"
    }),
    q("Lab8", "code-subquery-salary", "Hard", "write-code", "Write a subquery to find employees who earn more than employee 7566.", "SELECT ename, sal FROM emp WHERE sal > (SELECT sal FROM emp WHERE empno = 7566);", "The inner query finds employee 7566's salary; the outer query compares other salaries to it.", {
      expectedAnswer: "SELECT ename, sal FROM emp WHERE sal > (SELECT sal FROM emp WHERE empno = 7566);"
    }),
    q("Lab8", "code-in-subquery", "Hard", "write-code", "Write a DELETE statement that removes employees whose deptno belongs to departments located in DALLAS.", "DELETE FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc = 'DALLAS');", "The subquery finds department numbers for DALLAS, and DELETE removes matching employee rows.", {
      expectedAnswer: "DELETE FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc = 'DALLAS');"
    }),
    q("Lab9", "code-upper-filter", "Medium", "write-code", "Write a query that finds BLAKE by comparing ename to UPPER('blake').", "SELECT empno, ename, deptno FROM emp WHERE ename = UPPER('blake');", "UPPER converts the literal to uppercase so it can match uppercase stored names.", {
      expectedAnswer: "SELECT empno, ename, deptno FROM emp WHERE ename = UPPER('blake');"
    }),
    q("Lab9", "code-nvl-comp", "Medium", "write-code", "Write a query that displays ename, sal, comm, and annual compensation using NVL(comm,0).", "SELECT ename, sal, comm, (sal*12)+NVL(comm,0) FROM emp;", "NVL(comm,0) prevents null commission from making the arithmetic result null.", {
      expectedAnswer: "SELECT ename, sal, comm, (sal*12)+NVL(comm,0) FROM emp;"
    }),

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
  ]);
}

function normalizeLabQuizBank(questions) {
  return questions.map((question) => {
    if (!/^Lab[1-9]$/.test(question.sourceId) || question.type === "write-code" || question.type === "Multiple Choice") {
      return question;
    }

    if (Array.isArray(question.choices)) {
      return {
        ...question,
        type: "Multiple Choice"
      };
    }

    if (typeof question.answer === "boolean") {
      const answer = question.answer ? "True" : "False";
      return {
        ...question,
        type: "Multiple Choice",
        answer,
        choices: ["True", "False"]
      };
    }

    return {
      ...question,
      type: "Multiple Choice",
      choices: labDistractorChoices(question.answer),
      acceptableAnswers: undefined
    };
  });
}

function labDistractorChoices(answer) {
  const specificDistractors = {
    DESC: ["COMMIT", "RENAME", "ROLLBACK"],
    MODIFY: ["ADD", "DROP", "ENABLE"],
    SYSDATE: ["TO_DATE", "NVL", "LOWER"],
    COMMIT: ["ROLLBACK", "DELETE", "UPDATE"],
    DISTINCT: ["WHERE", "ORDER BY", "GROUP BY"],
    "||": ["+", "%", "_"],
    "%": ["_", "||", "(+)"],
    "(+)": ["%", "_", "||"],
    WHERE: ["HAVING", "GROUP BY", "ORDER BY"],
    HAVING: ["WHERE", "ORDER BY", "SELECT"],
    IN: ["LIKE", "BETWEEN", "IS NULL"],
    LENGTH: ["INSTR", "CONCAT", "SUBSTR"]
  };
  const correct = formatAnswer(answer);
  const distractors = specificDistractors[correct] || ["WHERE", "GROUP BY", "ORDER BY"];
  return [correct, ...distractors].filter((choice, index, choices) => choices.indexOf(choice) === index).slice(0, 4);
}

function buildLabCoverageQuestions(sections, categoryMap) {
  const questions = [];
  sections.filter((section) => section.type === "lab").forEach((section) => {
    section.blocks.forEach((block, index) => {
      const baseId = `${section.id.toLowerCase()}-coverage-${String(index + 1).padStart(3, "0")}`;
      const purpose = inferLabPurpose(block);
      const executable = extractExecutableSql(block.code);
      questions.push({
        id: `${baseId}-mcq`,
        sourceId: section.id,
        category: categoryMap.get(section.id) || `${section.id} — ${section.title}`,
        difficulty: labBlockDifficulty(block, index),
        type: "Multiple Choice",
        question: "What is the main purpose of this lab SQL/code example?",
        sql: block.code,
        answer: purpose,
        choices: labPurposeChoices(purpose),
        explanation: labBlockExplanation(block, purpose)
      });

      if (executable) {
        questions.push({
          id: `${baseId}-code`,
          sourceId: section.id,
          category: categoryMap.get(section.id) || `${section.id} — ${section.title}`,
          difficulty: labBlockDifficulty(block, index, true),
          type: "write-code",
          question: writeCodePromptForBlock(block, purpose),
          answer: executable,
          expectedAnswer: executable,
          explanation: labBlockExplanation(block, purpose)
        });
      }
    });
  });
  return [...questions, ...buildLab9FunctionCoverage(categoryMap)];
}

function mergeQuizBanks(...banks) {
  const seen = new Set();
  return banks.flat().filter((question) => {
    if (seen.has(question.id)) {
      return false;
    }
    seen.add(question.id);
    return true;
  });
}

function inferLabPurpose(block) {
  const code = block.code.toLowerCase();
  const text = `${block.what} ${block.notes}`.toLowerCase();
  if (/create\s+table/.test(code)) return "Create a table with defined columns and constraints.";
  if (/alter\s+table[\s\S]*\badd\b/.test(code)) return "Add a column or constraint to an existing table.";
  if (/alter\s+table[\s\S]*\bmodify\b/.test(code)) return "Modify an existing column definition.";
  if (/drop\s+column/.test(code)) return "Drop a column from an existing table.";
  if (/drop\s+table/.test(code)) return "Drop a table and remove its data and structure.";
  if (/\brename\b/.test(code)) return "Rename a database object.";
  if (/\bdesc(?:ribe)?\b/.test(code)) return "Display the structure of a table.";
  if (/user_constraints/.test(code)) return "View constraint definitions in the data dictionary.";
  if (/user_cons_columns/.test(code)) return "View columns associated with constraints.";
  if (/user_tables|user_objects|user_catalog/.test(code)) return "Query the data dictionary for database objects.";
  if (/insert\s+into[\s\S]*select/i.test(code)) return "Insert rows returned by a subquery.";
  if (/insert\s+into/.test(code)) return "Insert a new row into a table.";
  if (/update/.test(code) && /select/.test(code)) return "Update rows using values returned by a subquery.";
  if (/update/.test(code)) return "Update existing rows in a table.";
  if (/delete/.test(code) && /select/.test(code)) return "Delete rows based on values returned by a subquery.";
  if (/delete/.test(code)) return "Delete rows from a table.";
  if (/commit/.test(code)) return "Permanently save pending transaction changes.";
  if (/rollback/.test(code)) return "Undo pending transaction changes.";
  if (/foreign\s+key/.test(code)) return "Define referential integrity with a foreign key.";
  if (/primary\s+key/.test(code)) return "Define a primary key to identify rows.";
  if (/\bunique\b/.test(code)) return "Require column values to be unique.";
  if (/\bnot\s+null\b/.test(code)) return "Require a column value to be supplied.";
  if (/\bcheck\b/.test(code)) return "Require rows to satisfy a CHECK condition.";
  if (/\(\+\)/.test(code)) return "Use Oracle outer join syntax to include unmatched rows.";
  if (/worker\.mgr\s*=\s*manager\.empno/.test(code)) return "Join EMP to itself to show worker-manager relationships.";
  if (/between\s+s\.losal\s+and\s+s\.hisal/.test(code)) return "Use a non-equijoin with a BETWEEN range.";
  if (/where[\s\S]*\w+\.\w+\s*=\s*\w+\.\w+/.test(code)) return "Join tables by matching related column values.";
  if (/group\s+by[\s\S]*having/.test(code)) return "Group rows and filter grouped results with HAVING.";
  if (/group\s+by/.test(code)) return "Group rows before applying aggregate functions.";
  if (/avg|sum|min|max|count/.test(code) && /select/.test(code)) return "Use aggregate functions to summarize rows.";
  if (/any/.test(code)) return "Compare a value to any value returned by a multiple-row subquery.";
  if (/all/.test(code)) return "Compare a value to all values returned by a multiple-row subquery.";
  if (/select[\s\S]*\(\s*select/.test(code) || /where[\s\S]*\(\s*select/.test(code)) return "Use a subquery result inside another SQL statement.";
  if (/upper|lower|initcap/.test(code)) return "Use a case conversion function in a query.";
  if (/concat|substr|length|instr|lpad|rpad|trim|replace/.test(code)) return "Use character manipulation functions in a query.";
  if (/nvl/.test(code)) return "Replace null values before using them in an expression.";
  if (/order\s+by/.test(code)) return "Sort query results with ORDER BY.";
  if (/where/.test(code)) return "Restrict rows with a WHERE condition.";
  if (/distinct/.test(code)) return "Remove duplicate rows from the query result.";
  if (/select\s+\*/.test(code)) return "Display all columns from a table.";
  if (/select/.test(code)) return "Retrieve selected data from a table.";
  if (text.includes("outer join")) return "Use an outer join to include unmatched rows.";
  if (text.includes("group")) return "Use grouping or aggregate behavior.";
  return "Recognize the SQL pattern shown in the lab example.";
}

function extractExecutableSql(code) {
  const lines = code
    .replace(/[’‘]/g, "'")
    .split(/\n/)
    .map((line) => line
      .replace(/^\s*SQL>\s*/i, "")
      .replace(/^\s*\d+\s+/, "")
      .trim())
    .filter(Boolean);
  const sqlLines = [];
  for (const line of lines) {
    if (/^(table created|table altered|table dropped|table renamed|row created|rows? selected|rows? updated|rows? deleted|commit complete|rollback complete|error\b|ora-|name\s+null|[- ]{5,}|[A-Z0-9_]+\s+[A-Z0-9_]+\s+[A-Z0-9_]+)/i.test(line)) {
      break;
    }
    if (line === "*" || /^[A-Z]+\s+[-\s]+$/i.test(line)) {
      break;
    }
    sqlLines.push(line);
    if (/;\s*$/.test(line)) {
      break;
    }
  }
  const sql = sqlLines.join(" ").replace(/\s+/g, " ").trim();
  if (!sql || /^(error|ora-|name null|[-]+)/i.test(sql)) {
    return "";
  }
  if (/\b(where|and|or|set|values|from)\s*;?$/i.test(sql)) {
    return "";
  }
  if (!/^(select|insert|update|delete|create|alter|drop|rename|desc|describe|commit|rollback|constraint|check|column)\b/i.test(sql)) {
    return "";
  }
  return /;\s*$/.test(sql) ? sql : `${sql};`;
}

function writeCodePromptForBlock(block, purpose) {
  if (/^display/i.test(purpose)) return "Write the SQL or SQL*Plus command from this lab pattern.";
  if (/^create/i.test(purpose)) return "Write a SQL statement that creates the table or definition shown by this lab pattern.";
  if (/^add/i.test(purpose) || /^modify/i.test(purpose) || /^drop a column/i.test(purpose)) return "Write the ALTER TABLE statement represented by this lab pattern.";
  if (/^insert/i.test(purpose)) return "Write the INSERT statement represented by this lab pattern.";
  if (/^update/i.test(purpose)) return "Write the UPDATE statement represented by this lab pattern.";
  if (/^delete/i.test(purpose)) return "Write the DELETE statement represented by this lab pattern.";
  if (/join/i.test(purpose)) return "Write the join query represented by this lab pattern.";
  if (/group|aggregate|having/i.test(purpose)) return "Write the aggregate query represented by this lab pattern.";
  if (/subquery/i.test(purpose)) return "Write the subquery-based SQL statement represented by this lab pattern.";
  return "Write the SQL statement represented by this lab pattern.";
}

function labPurposeChoices(answer) {
  const distractors = [
    "Create a table with defined columns and constraints.",
    "Insert a new row into a table.",
    "Update existing rows in a table.",
    "Delete rows from a table.",
    "Display the structure of a table.",
    "Sort query results with ORDER BY.",
    "Group rows before applying aggregate functions.",
    "Use a subquery result inside another SQL statement.",
    "Use Oracle outer join syntax to include unmatched rows.",
    "Replace null values before using them in an expression."
  ].filter((choice) => choice !== answer);
  return [answer, ...shuffle(distractors).slice(0, 3)];
}

function labBlockExplanation(block, purpose) {
  const source = block.notes && !/^\s*$/.test(block.notes) ? block.notes : block.what;
  const cleanSource = source && !/slide|source file|file name|page number/i.test(source)
    ? source.replace(/\s+/g, " ").trim()
    : "";
  return `${purpose} ${cleanSource || "This follows the SQL pattern shown in the embedded lab material."}`;
}

function labBlockDifficulty(block, index, isCode = false) {
  const text = `${block.code} ${block.notes}`.toLowerCase();
  if (isCode || /subquery|having|outer join|self join|non-equijoin|foreign key|cascade|group by|nvl|any|all|error/.test(text)) {
    return "Hard";
  }
  if (/alter|insert|update|delete|where|between|like|order by|constraint|primary key|check|join|avg|sum|count/.test(text)) {
    return "Medium";
  }
  return index % 3 === 0 ? "Medium" : "Easy";
}

function buildLab9FunctionCoverage(categoryMap) {
  const category = categoryMap.get("Lab9") || "Lab9 — Single-Row Functions";
  const q = (slug, difficulty, type, question, answer, explanation, extras = {}) => ({
    id: `lab9-function-${slug}`,
    sourceId: "Lab9",
    category,
    difficulty,
    type,
    question,
    answer,
    explanation,
    ...extras
  });
  return [
    q("code-substr-sales", "Medium", "write-code", "Write a query that displays employee names from emp where the first five characters of job are SALES.", "SELECT ename FROM emp WHERE SUBSTR(job,1,5) = 'SALES';", "The lab uses SUBSTR(job,1,5) = 'SALES' to find SALESMAN rows.", {
      expectedAnswer: "SELECT ename FROM emp WHERE SUBSTR(job,1,5) = 'SALES';"
    }),
    q("code-concat-length-instr", "Hard", "write-code", "Write a query that displays ename, CONCAT(ename, job), LENGTH(ename), and INSTR(ename, 'A') from emp for SALESMAN rows.", "SELECT ename, CONCAT(ename, job), LENGTH(ename), INSTR(ename, 'A') FROM emp WHERE SUBSTR(job,1,5) = 'SALES';", "This practices the character manipulation functions shown together in the lab.", {
      expectedAnswer: "SELECT ename, CONCAT(ename, job), LENGTH(ename), INSTR(ename, 'A') FROM emp WHERE SUBSTR(job,1,5) = 'SALES';"
    }),
    q("mcq-substr", "Medium", "Multiple Choice", "What does SUBSTR(job,1,5) return for a SALESMAN job value?", "The first five characters of the job value.", "SUBSTR(job,1,5) starts at character 1 and returns five characters.", {
      choices: ["The first five characters of the job value.", "The length of the job value.", "The position of S in the job value.", "The job value joined to ename."]
    }),
    q("mcq-instr-zero", "Medium", "Multiple Choice", "In the lab output, what does INSTR(ename, 'A') returning 0 mean?", "The letter A was not found in the name.", "INSTR returns the position of the searched character, and 0 when it is not found.", {
      choices: ["The letter A was not found in the name.", "The name starts with A.", "The name has zero characters.", "The job is not SALESMAN."]
    }),
    q("mcq-length", "Easy", "Multiple Choice", "Which function returns the number of characters in ename?", "LENGTH(ename)", "The lab selects LENGTH(ename) with other character functions.", {
      choices: ["LENGTH(ename)", "CONCAT(ename, job)", "INSTR(ename, 'A')", "NVL(comm,0)"]
    }),
    q("mcq-nvl-result", "Medium", "Multiple Choice", "Why does KING's annual compensation still calculate when comm is null?", "NVL(comm,0) replaces null commission with 0.", "The lab uses (sal*12)+NVL(comm,0) so null commission does not null out the expression.", {
      choices: ["NVL(comm,0) replaces null commission with 0.", "CONCAT joins commission to salary.", "UPPER converts commission to uppercase.", "SUBSTR removes the null row."]
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
  panel.append(selectControl("Mode", "mode", ["Full Review", "All Labs", "Single Lab", "Practical SQL", "SQL MCQ", "Theory", "Emergency Lab Review", "Emergency Exam", "Weak Areas"], state.quiz.mode));
  panel.append(selectControl("Topic", "topic", ["All", ...quizCategories()], state.quiz.topic));
  panel.append(selectControl("Difficulty", "difficulty", ["All", ...DIFFICULTIES], state.quiz.difficulty));
  panel.append(selectControl("Question Type", "type", ["All", ...QUESTION_TYPES], state.quiz.type));
  panel.append(selectControl("Questions", "count", ["10", "20", "30", "50", "All"], state.quiz.count));

  const actions = element("div", "quiz-actions");
  const start = element("button", "quiz-button primary", state.quiz.active ? "Restart Quiz" : "Start Quiz");
  start.type = "button";
  start.addEventListener("click", startQuiz);
  const emergency = element("button", "quiz-button", "Emergency Lab Review");
  emergency.type = "button";
  emergency.addEventListener("click", startEmergencyQuiz);
  const reset = element("button", "quiz-button", "Reset Quiz");
  reset.type = "button";
  reset.addEventListener("click", resetQuiz);
  actions.append(start, emergency, reset);
  panel.append(actions);

  const coverage = element("p", "quiz-help", `Lab coverage target: 146+. Available now: ${labQuizQuestions().length} lab questions.`);
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
  } else if (question.type === "write-code") {
    const textarea = element("textarea", "code-answer-input");
    textarea.rows = 8;
    textarea.value = state.quiz.selectedAnswer;
    textarea.placeholder = "Write your SQL here";
    textarea.disabled = state.quiz.submitted;
    textarea.addEventListener("input", () => {
      state.quiz.selectedAnswer = textarea.value;
    });
    wrap.append(textarea);
  } else {
    question.choices.forEach((choice, index) => wrap.append(answerButton(choice, choice, index)));
  }

  const submit = element("button", "quiz-button primary", question.type === "write-code" ? "Show / Check Answer" : "Submit Answer");
  submit.type = "button";
  submit.disabled = state.quiz.submitted || (question.type !== "Fill in the Blank" && question.type !== "write-code" && !hasSelectedAnswer());
  submit.addEventListener("click", submitAnswer);
  const next = element("button", "quiz-button", isLastQuestion() ? "Finish Quiz" : "Next Question");
  next.type = "button";
  next.disabled = !state.quiz.submitted || isAwaitingCodeSelfGrade(question);
  next.addEventListener("click", nextQuestion);
  const actions = element("div", "quiz-actions inline");
  actions.append(submit, next);
  wrap.append(actions);
  return wrap;
}

function answerButton(value, text, optionIndex = null) {
  const button = element("button", `answer-choice ${state.quiz.selectedAnswer === value ? "is-selected" : ""}`);
  button.type = "button";
  button.disabled = state.quiz.submitted;
  if (optionIndex === null) {
    button.textContent = text;
  } else {
    button.append(element("span", "answer-letter", `${String.fromCharCode(65 + optionIndex)}.`));
    button.append(element("span", "answer-text", text));
  }
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
  if (question.type === "write-code") {
    area.classList.add(state.quiz.lastCorrect ? "is-correct" : "is-review");
    area.append(element("h4", "", state.quiz.lastCorrect ? "Matches expected answer" : "Compare your answer"));
    area.append(element("p", "", "Expected answer:"));
    area.append(renderCode(expectedAnswerFor(question)));
    area.append(element("p", "", question.explanation));
    if (!state.quiz.codeGraded) {
      const actions = element("div", "quiz-actions inline");
      const markCorrect = element("button", "quiz-button primary", "Mark Correct");
      markCorrect.type = "button";
      markCorrect.addEventListener("click", () => gradeCodeAnswer(true));
      const markIncorrect = element("button", "quiz-button", "Mark Incorrect");
      markIncorrect.type = "button";
      markIncorrect.addEventListener("click", () => gradeCodeAnswer(false));
      actions.append(markCorrect, markIncorrect);
      area.append(actions);
    }
    return area;
  }

  area.classList.add(state.quiz.lastCorrect ? "is-correct" : "is-wrong");
  area.append(element("h4", "", state.quiz.lastCorrect ? "Correct" : "Not quite"));
  if (!state.quiz.lastCorrect) {
    area.append(element("p", "", `Correct answer: ${formatCorrectAnswer(question)}`));
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
    card.append(element("p", "", `Answer: ${formatAnswer(expectedAnswerFor(item))}`));
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
  state.quiz.mode = "Emergency Lab Review";
  state.quiz.topic = "All";
  state.quiz.difficulty = "All";
  state.quiz.type = "All";
  state.quiz.count = "50";
  beginQuiz(buildEmergencyQuestions());
}

function beginQuiz(questions) {
  state.quiz.active = true;
  state.quiz.finished = false;
  state.quiz.currentIndex = 0;
  state.quiz.selectedAnswer = "";
  state.quiz.submitted = false;
  state.quiz.lastCorrect = false;
  state.quiz.codeGraded = false;
  state.quiz.questions = questions.map(prepareQuizQuestion);
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
  state.quiz.codeGraded = false;
  state.quiz.questions = [];
  state.quiz.correct = 0;
  state.quiz.wrong = 0;
  state.quiz.wrongItems = [];
  refreshQuiz();
}

function submitAnswer() {
  const question = currentQuestion();
  if (state.quiz.submitted || (question.type !== "write-code" && !hasSelectedAnswer())) {
    return;
  }
  const correct = isAnswerCorrect(question, state.quiz.selectedAnswer);
  state.quiz.submitted = true;
  state.quiz.lastCorrect = correct;
  if (question.type === "write-code") {
    if (correct) {
      state.quiz.codeGraded = true;
      state.quiz.correct += 1;
    }
    refreshQuiz();
    return;
  }
  if (correct) {
    state.quiz.correct += 1;
  } else {
    state.quiz.wrong += 1;
    state.wrongQuestionIds.add(question.id);
    state.quiz.wrongItems.push(question);
  }
  refreshQuiz();
}

function gradeCodeAnswer(correct) {
  if (!state.quiz.submitted || state.quiz.codeGraded) {
    return;
  }
  const question = currentQuestion();
  state.quiz.codeGraded = true;
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
    state.quiz.codeGraded = false;
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
      || (state.quiz.mode === "All Labs" && question.sourceId.startsWith("Lab"))
      || (state.quiz.mode === "Single Lab" && question.sourceId.startsWith("Lab"))
      || (state.quiz.mode === "Practical SQL" && question.sourceId.startsWith("Lab") && question.type === "write-code")
      || (state.quiz.mode === "SQL MCQ" && question.sourceId.startsWith("Lab") && question.type === "Multiple Choice")
      || (state.quiz.mode === "Theory" && question.sourceId.startsWith("Ch"))
      || state.quiz.mode === "Emergency Exam"
      || state.quiz.mode === "Emergency Lab Review";
    const topicOk = state.quiz.topic === "All" || question.category === state.quiz.topic;
    const difficultyOk = state.quiz.difficulty === "All" || question.difficulty === state.quiz.difficulty;
    const modeControlsType = state.quiz.mode === "Practical SQL" || state.quiz.mode === "SQL MCQ";
    const typeOk = modeControlsType || state.quiz.type === "All" || question.type === state.quiz.type;
    return modeOk && topicOk && difficultyOk && typeOk;
  });
  if (state.quiz.mode === "Emergency Exam" || state.quiz.mode === "Emergency Lab Review") {
    const emergencyIds = new Set(buildEmergencyQuestions().map((question) => question.id));
    questions = questions.filter((question) => emergencyIds.has(question.id));
  }
  return questions;
}

function buildEmergencyQuestions() {
  const plan = state.quiz.mode === "Emergency Exam"
    ? { Ch14: 10, Ch03: 8, Ch09: 8, Lab6: 5, Lab7: 5, Lab8: 4 }
    : { Lab5: 10, Lab6: 10, Lab7: 10, Lab8: 10, Lab9: 10 };
  return Object.entries(plan).flatMap(([sourceId, count]) => {
    const pool = state.quizQuestions.filter((question) => question.sourceId === sourceId);
    const sorted = [...pool].sort((a, b) => difficultyWeight(b.difficulty) - difficultyWeight(a.difficulty));
    return shuffle(sorted.slice(0, count));
  });
}

function labQuizQuestions() {
  return state.quizQuestions.filter((question) => question.sourceId.startsWith("Lab"));
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

function isAwaitingCodeSelfGrade(question) {
  return question.type === "write-code" && state.quiz.submitted && !state.quiz.codeGraded;
}

function hasSelectedAnswer() {
  return String(state.quiz.selectedAnswer).trim().length > 0;
}

function isAnswerCorrect(question, answer) {
  if (question.type === "write-code") {
    return normalizeCodeAnswer(answer) === normalizeCodeAnswer(expectedAnswerFor(question));
  }
  if (typeof question.answer === "boolean") {
    return String(question.answer) === String(answer);
  }
  const accepted = question.acceptableAnswers || [question.answer];
  return accepted.some((item) => normalizeAnswer(item) === normalizeAnswer(answer));
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase();
}

function normalizeCodeAnswer(value) {
  return String(value)
    .trim()
    .replace(/;+\s*$/, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function formatAnswer(answer) {
  return typeof answer === "boolean" ? (answer ? "True" : "False") : answer;
}

function expectedAnswerFor(question) {
  return question.expectedAnswer || question.answer;
}

function formatCorrectAnswer(question) {
  if (question.type === "write-code") {
    return expectedAnswerFor(question);
  }
  if (!Array.isArray(question.choices)) {
    return formatAnswer(question.answer);
  }
  const correctIndex = question.choices.findIndex((choice) => normalizeAnswer(choice) === normalizeAnswer(question.answer));
  if (correctIndex < 0) {
    return formatAnswer(question.answer);
  }
  return `${String.fromCharCode(65 + correctIndex)}. ${formatAnswer(question.answer)}`;
}

function prepareQuizQuestion(question) {
  if (!Array.isArray(question.choices)) {
    return { ...question };
  }
  return {
    ...question,
    choices: shuffle(question.choices)
  };
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
