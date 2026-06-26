# Lab Quiz Coverage Report

The lab quiz bank was audited against the embedded Lab1-Lab9 material in `studyData.js`. Lab questions are generated only from that local material plus curated questions already tied to the same topics.

| Lab | Concepts Covered | Question Count | Missing / Skipped Items |
|---|---|---:|---|
| Lab1 — Creating and Managing Tables | CREATE TABLE, column definitions, NUMBER/VARCHAR/VARCHAR2/DATE datatypes, PRIMARY KEY, FOREIGN KEY, DESCRIBE/DESC, data dictionary queries, ALTER TABLE ADD/MODIFY/DROP COLUMN, DROP TABLE, RENAME, INSERT forms, SELECT all rows | 47 | TRUNCATE and CREATE TABLE AS SELECT were not present in the embedded Lab1 material. |
| Lab2 — Constraints | NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, column-level constraints, table-level constraints, constraint naming, ALTER TABLE ADD/DROP, DROP PRIMARY KEY CASCADE, DISABLE/ENABLE, USER_CONSTRAINTS, USER_CONS_COLUMNS, referential integrity examples | 28 | None based on embedded material. |
| Lab3 — Manipulating Data | INSERT syntax, inserting full rows, inserting selected columns, implicit NULL, explicit NULL, SYSDATE, TO_DATE, UPDATE with and without WHERE, DELETE with and without WHERE, integrity constraint errors, COMMIT, ROLLBACK | 38 | SAVEPOINT / ROLLBACK TO SAVEPOINT were not present in the embedded Lab3 material. |
| Lab4 — Basic SQL Statements | SELECT syntax, SELECT *, selecting specific columns, arithmetic expressions, operator precedence, parentheses, null arithmetic, aliases, AS aliases, quoted aliases, concatenation, literal strings, duplicate rows, DISTINCT, DESCRIBE | 37 | None based on embedded material. |
| Lab5 — Restricting and Sorting Data | WHERE, comparison operators, character/date literals, BETWEEN, IN, LIKE, % wildcard, _ wildcard, ESCAPE, IS NULL, AND, OR, NOT, logical precedence, parentheses, ORDER BY, ASC, DESC, sorting by multiple columns, sorting by alias, SELECT summary syntax | 47 | None based on embedded material. |
| Lab6 — Displaying Data from Multiple Tables | Join syntax, equijoin, EMP/DEPT joins, table aliases, non-equijoin with SALGRADE, BETWEEN join condition, outer join operator (+), both outer join placements, ordered outer join example, self join, worker-manager aliases | 30 | Cartesian product was not directly shown in the embedded Lab6 blocks. |
| Lab7 — Aggregating Data | Group function syntax, AVG, SUM, MIN, MAX, COUNT(*), COUNT(expr), null behavior, NVL with group functions, GROUP BY, GROUP BY without selecting the grouped column, grouping by multiple columns, illegal aggregate SELECT list, WHERE vs HAVING, HAVING, nested group functions, clause evaluation order | 47 | COUNT(DISTINCT column) was not present in the embedded Lab7 material. |
| Lab8 — Subqueries | Subquery syntax, inner query execution first, WHERE subqueries, single-row subqueries, multiple conditions with subqueries, aggregate subqueries, HAVING with subqueries, single-row operator error with multi-row subquery, no-row subquery behavior, ANY, ALL, = ANY / IN, INSERT with subquery, UPDATE with subquery, DELETE with subquery | 37 | None based on embedded material. |
| Lab9 — Single-Row Functions | Case-sensitive comparison, UPPER, CONCAT, SUBSTR, LENGTH, INSTR, NVL, character function output behavior, null replacement in arithmetic, SALESMAN filtering with SUBSTR | 23 | LOWER, INITCAP, LPAD, RPAD, TRIM, REPLACE, ROUND, TRUNC, MOD, SYSDATE, MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY, LAST_DAY, TO_CHAR, TO_DATE, and TO_NUMBER were not present in the embedded Lab9 material. |

## Summary

| Metric | Count |
|---|---:|
| Total Lab Questions | 334 |
| Multiple Choice Lab Questions | 215 |
| Write-Code Lab Questions | 119 |
| Invalid Lab Question Types | 0 |

Runtime MCQ shuffling remains enabled in `app.js`, so the correct answer is not tied to option A.
