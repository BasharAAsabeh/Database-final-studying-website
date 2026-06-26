# SQL Lab Statements Coverage Report

This report covers the new **SQL Lab Statements** page. Entries were built only from the embedded Lab1-Lab9 material in `studyData.js`, with repeated examples merged into reusable SQL patterns.

| Lab | Statements/Patterns Covered | Duplicates Removed | Missing/Skipped |
|---|---|---:|---|
| Lab1 — Creating and Managing Tables | CREATE TABLE, column definitions, lab datatypes, PRIMARY KEY, FOREIGN KEY, DESC/DESCRIBE, USER_TABLES, USER_OBJECTS with DISTINCT, ALTER TABLE ADD, ALTER TABLE MODIFY, ALTER TABLE DROP COLUMN, DROP TABLE, RENAME, INSERT with selected columns, INSERT full row | 16 | TRUNCATE and CREATE TABLE AS SELECT were not present in the embedded Lab1 material. |
| Lab2 — Constraints | NOT NULL, UNIQUE, PRIMARY KEY table-level, PRIMARY KEY inline, FOREIGN KEY, CHECK, named constraints, column-level/table-level constraints, ALTER TABLE ADD CONSTRAINT, DROP CONSTRAINT, DROP PRIMARY KEY CASCADE, DISABLE/ENABLE, USER_CONSTRAINTS, USER_CONS_COLUMNS | 7 | None based on embedded material. |
| Lab3 — Manipulating Data | INSERT, selected-column INSERT, implicit NULL, explicit NULL, SYSDATE, TO_DATE, UPDATE with WHERE, UPDATE without WHERE, DELETE with WHERE, DELETE all rows, COMMIT, ROLLBACK | 8 | SAVEPOINT and ROLLBACK TO SAVEPOINT were not present in the embedded Lab3 material. |
| Lab4 — Basic SQL Statements | SELECT *, selecting specific columns, arithmetic expressions, precedence, parentheses, NULL arithmetic, aliases, AS, quoted aliases, concatenation, literal strings, DISTINCT, DESCRIBE | 5 | None based on embedded material. |
| Lab5 — Restricting and Sorting Data | WHERE, comparison operators, single-quoted character/date literals, BETWEEN, IN, LIKE with %, LIKE with _, ESCAPE, IS NULL, AND, OR, NOT, logical precedence through parentheses, ORDER BY, ASC/DESC, multi-column sort, alias sort | 5 | None based on embedded material. |
| Lab6 — Displaying Data from Multiple Tables | Join syntax, equijoin, EMP/DEPT joins, table aliases, ambiguous column prevention, Cartesian product warning through missing join condition, non-equijoin with BETWEEN, outer join (+), self join | 5 | Cartesian product was covered as the mistake caused by missing a join condition; no standalone Cartesian product example was present. |
| Lab7 — Aggregating Data | AVG, SUM, MIN, MAX, COUNT(*), COUNT(column), NULL behavior, NVL with group functions, GROUP BY one column, GROUP BY multiple columns, illegal select lists with group functions, WHERE vs HAVING, HAVING, nested group functions | 7 | COUNT(DISTINCT column) was not present in the embedded Lab7 material. |
| Lab8 — Subqueries | Subquery syntax, WHERE subquery, single-row subqueries, multiple single-row subqueries, aggregate subqueries, HAVING subquery, single-row operator error with multi-row subquery, ANY, ALL, INSERT with subquery, UPDATE with subquery, DELETE with subquery | 3 | IN was represented in Lab5 and = ANY was noted in Lab8 material; no separate Lab8 IN example block was present. |
| Lab9 — Single-Row Functions | Case-sensitive comparison, UPPER, CONCAT, SUBSTR, LENGTH, INSTR, NVL in arithmetic | 1 | LOWER, INITCAP, LPAD, RPAD, TRIM, REPLACE, ROUND, TRUNC, MOD, SYSDATE, date arithmetic, MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY, LAST_DAY, TO_CHAR, TO_DATE, and TO_NUMBER were not present in the embedded Lab9 material. |

## Totals

| Metric | Count |
|---|---:|
| Unique statement entries | 92 |
| Lab examples included | 92 |
| Labs audited | 9 |

## Duplicate / Repeated Patterns Merged

- Multiple `CREATE TABLE` examples were merged into reusable entries for basic columns, primary keys, and foreign keys.
- Repeated `DESC` / `DESCRIBE` table-structure examples were merged.
- Data dictionary examples were separated only where the pattern changed: `USER_TABLES`, `USER_OBJECTS`, `USER_CONSTRAINTS`, and `USER_CONS_COLUMNS`.
- Repeated `INSERT` examples were merged into selected-column insert, full-row insert, implicit NULL, explicit NULL, SYSDATE, and TO_DATE patterns.
- Repeated `SELECT` examples were merged into SELECT all columns, specific columns, expressions, aliases, literal strings, concatenation, and DISTINCT.
- Repeated `WHERE` examples were merged by operator or idea: comparison, BETWEEN, IN, LIKE %, LIKE _, ESCAPE, IS NULL, AND, OR, NOT.
- Repeated `ORDER BY` examples were merged into descending sort, multi-column sort, and alias sort.
- Join examples were merged into equijoin, aliases, non-equijoin, outer join, and self join.
- Aggregate examples were merged by function family and grouping rule.
- Subquery examples were merged by single-row, aggregate, HAVING, ANY, ALL, and DML use.
- Lab9 function examples were merged into case conversion, character manipulation, and NVL arithmetic entries.
