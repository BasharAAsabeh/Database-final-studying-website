# Codex Prompt: Build a Complete SQL Lab Statements Page

You are modifying an existing database study website/project that already contains the lab manual material for Lab1-Lab9.

The quiz approach did not work well. The student does not want a quiz now.

The student wants a **single practical webpage** that contains all important SQL statements from the lab manuals, with simple summaries of what they do, without duplication.

The goal is:

> If the student reads this page and writes/practices these statements, they should be able to get full marks on the lab quiz.

Do not rebuild the whole site unless necessary. Add or replace a page in the existing website.

---

## New Page

Create a page called:

**SQL Lab Statements**

Add it to the main navigation.

This page should focus only on the lab/manual SQL material, not theory chapters.

---

## Source Rules

Use only the SQL/lab material already embedded in the project.

Do not use external sources.

Do not invent new SQL that is not represented by the lab manuals.

Do not include chapter theory unless it directly explains a lab SQL statement.

---

## Main Task

Extract the SQL statements, commands, and query patterns from:

1. Lab1 — Creating and Managing Tables
2. Lab2 — Constraints
3. Lab3 — Manipulating Data
4. Lab4 — Basic SQL Statements
5. Lab5 — Restricting and Sorting Data
6. Lab6 — Displaying Data from Multiple Tables
7. Lab7 — Aggregating Data
8. Lab8 — Subqueries
9. Lab9 — Single-Row Functions

Then create a clean webpage that explains each unique statement/pattern once.

---

## Important: No Duplication

Do not copy every repeated slide/example blindly.

Deduplicate by SQL pattern.

For example, if the labs contain many queries like:

```sql
SELECT ename FROM emp;
SELECT job FROM emp;
SELECT sal FROM emp;
```

Do not create three separate full sections for the same idea.

Instead create one section:

```sql
SELECT column1, column2
FROM table_name;
```

Then include one or two lab-based examples.

If a repeated query has a new idea, keep the new idea.

Example:

- `SELECT ename FROM emp;` = basic column selection
- `SELECT DISTINCT deptno FROM emp;` = DISTINCT, so it deserves its own entry
- `SELECT ename AS "Name" FROM emp;` = aliasing, so it deserves its own entry

---

## Required Entry Format

Each SQL entry should use this format:

### Statement Title

**Use it for:** one simple sentence.

**Syntax pattern:**

```sql
...
```

**Lab example:**

```sql
...
```

**What it does:** simple explanation in plain English.

**How to write it in the exam/lab quiz:** direct practical advice.

**Common mistake:** only include if there is a real likely mistake from the material.

**Practice:** one short task the student should write by hand.

---

## Page Structure

The page should be organized by lab first, then by topic.

Use this structure:

1. Lab1 — Creating and Managing Tables
2. Lab2 — Constraints
3. Lab3 — Manipulating Data
4. Lab4 — Basic SQL Statements
5. Lab5 — Restricting and Sorting Data
6. Lab6 — Displaying Data from Multiple Tables
7. Lab7 — Aggregating Data
8. Lab8 — Subqueries
9. Lab9 — Single-Row Functions
10. Final Exam Practice Checklist

At the top of the page, add a small “Emergency Path” section:

> If you have little time, write these statements by hand first:
>
> 1. CREATE TABLE
> 2. ALTER TABLE
> 3. INSERT
> 4. UPDATE
> 5. DELETE
> 6. SELECT with WHERE
> 7. ORDER BY
> 8. JOIN
> 9. GROUP BY
> 10. HAVING
> 11. SUBQUERY
> 12. Single-row functions

---

## Required Coverage

Make sure the page covers every important SQL statement/pattern from the labs.

### Lab1 — Creating and Managing Tables

Cover all lab-taught patterns for:

- `CREATE TABLE`
- column definitions
- lab-used data types
- creating a table from another table/query if present
- `ALTER TABLE`
- adding columns
- modifying columns
- dropping columns if present
- `DROP TABLE`
- `RENAME`
- `TRUNCATE`
- describing table structure if present

### Lab2 — Constraints

Cover all lab-taught patterns for:

- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- `FOREIGN KEY`
- `CHECK`
- inline constraints
- table-level constraints
- named constraints
- adding constraints with `ALTER TABLE`
- dropping constraints if present
- referential integrity using `dept` and `emp` examples if present

### Lab3 — Manipulating Data

Cover all lab-taught patterns for:

- `INSERT`
- inserting a full row
- inserting selected columns
- inserting date values if present
- `UPDATE`
- `UPDATE` with `WHERE`
- `DELETE`
- `DELETE` with `WHERE`
- `COMMIT`
- `SAVEPOINT`
- `ROLLBACK`
- rollback to savepoint if present

### Lab4 — Basic SQL Statements

Cover all lab-taught patterns for:

- `SELECT *`
- selecting specific columns
- arithmetic expressions
- operator precedence if taught
- aliases
- `AS`
- quoted aliases
- concatenation
- literal strings
- `DISTINCT`
- `DESCRIBE` if present

### Lab5 — Restricting and Sorting Data

Cover all lab-taught patterns for:

- `WHERE`
- comparison operators
- `BETWEEN`
- `IN`
- `LIKE`
- `%` wildcard
- `_` wildcard
- `IS NULL`
- `AND`
- `OR`
- `NOT`
- logical operator precedence if taught
- `ORDER BY`
- `ASC`
- `DESC`
- sorting by multiple columns
- sorting by alias if taught

### Lab6 — Displaying Data from Multiple Tables

Cover all lab-taught patterns for:

- joins
- equijoin
- joining `emp` and `dept`
- table aliases
- ambiguous column names
- join condition
- Cartesian product
- outer joins using the lab syntax
- self join
- non-equijoin if present

### Lab7 — Aggregating Data

Cover all lab-taught patterns for:

- `AVG`
- `SUM`
- `MIN`
- `MAX`
- `COUNT(*)`
- `COUNT(column)`
- `COUNT(DISTINCT column)` if present
- NULL behavior in group functions
- `GROUP BY`
- grouping by one column
- grouping by multiple columns
- invalid select lists with group functions
- `HAVING`
- difference between `WHERE` and `HAVING`
- nested group functions if present

### Lab8 — Subqueries

Cover all lab-taught patterns for:

- subquery syntax
- subquery in `WHERE`
- single-row subqueries
- multiple-row subqueries
- comparison operators with subqueries
- `IN`
- `ANY` if present
- `ALL` if present
- aggregate functions inside subqueries if present
- common subquery mistakes taught by the lab

### Lab9 — Single-Row Functions

Cover only the functions actually taught in the lab material.

Potential functions to include only if present:

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
- `SYSDATE`
- date arithmetic
- `MONTHS_BETWEEN`
- `ADD_MONTHS`
- `NEXT_DAY`
- `LAST_DAY`
- `TO_CHAR`
- `TO_DATE`
- `TO_NUMBER`
- any other function explicitly in the lab

For each function, include:

- syntax pattern
- one lab-style example
- what it returns/does
- one practice task

---

## Final Exam Practice Checklist

At the bottom, add a compact checklist called:

**Can You Write These Without Looking?**

It should list practical tasks such as:

- Create a table with a primary key.
- Add a foreign key constraint.
- Insert a row into `emp`.
- Update salaries for a condition.
- Delete rows using `WHERE`.
- Select employees with `sal > 2000`.
- Sort employees by department and salary descending.
- Join `emp` and `dept`.
- Find average salary by department.
- Use `HAVING AVG(sal) > 2000`.
- Write a single-row subquery.
- Write a multiple-row subquery with `IN`.
- Use character functions.
- Use number functions.
- Use date functions.
- Use conversion functions.

Only include tasks supported by the lab material.

---

## UI Requirements

The page should be fast to study from.

Use:

- sticky table of contents
- lab filters or collapsible lab sections
- search box for SQL commands
- copy button on code blocks if the site already supports it or if simple to add
- readable code highlighting
- compact cards/sections
- clear headings

Keep the style consistent with the existing website.

Avoid huge walls of text.

This should feel like a practical SQL command notebook.

---

## Coverage Report

Create a file:

```text
SQL_LAB_STATEMENTS_COVERAGE.md
```

The report must include:

| Lab | Statements/Patterns Covered | Duplicates Removed | Missing/Skipped |
|---|---|---:|---|

For `Missing/Skipped`, write `None` only if every important lab statement/pattern was represented.

Also include:

- total number of unique statement entries
- total number of lab examples included
- list of duplicate/repeated patterns that were intentionally merged

---

## Validation Checklist

Before finishing:

- Confirm the page includes Lab1-Lab9.
- Confirm every important lab SQL statement/pattern is represented.
- Confirm duplicates were merged.
- Confirm no slide-number/source-location content appears.
- Confirm no theory-only content is included.
- Confirm each entry has syntax, example, explanation, exam advice, and practice.
- Confirm the coverage report exists.
- Confirm the page is usable without reading the original lab manuals.

---

## Final Response Expected From Codex

After making the page, report:

1. Files changed.
2. The page/location added.
3. Total number of unique SQL statement entries.
4. Confirmation that duplicates were removed.
5. Confirmation that Lab1-Lab9 were audited.
6. Link/path to `SQL_LAB_STATEMENTS_COVERAGE.md`.
7. Local run instructions.
