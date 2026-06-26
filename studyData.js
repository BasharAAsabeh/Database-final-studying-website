window.STUDY_SECTIONS = [
  {
    "id": "Lab1",
    "title": "Creating and Managing Tables",
    "sourceFile": "Lab Manual 1 (Creating and Managing Tables) (1)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab1 Block 1 — Slide 5: The CREATE TABLE Statement",
        "language": "sql",
        "code": "CREATE [GLOBAL TEMPORARY] TABLE [schema.]table\n(column datatype [DEFAULT expr][, ...]);",
        "what": "Code/query block from the slide titled 'The CREATE TABLE Statement'.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 2 — Slide 6: The CREATE TABLE Statement Cont.",
        "language": "sql",
        "code": "CREATE TABLE Table_Name\n(Column_Name1 Data type (Size) NULL | NOT NULL,\nColumn_Name2 Data type (Size) NULL | NOT NULL,\nColumn_Namen Data type (Size) NULL | NOT NULL);",
        "what": "Creates the table_name table with the listed columns and constraints.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 3 — Slide 8: Example (1)",
        "language": "sql",
        "code": "CREATE TABLE\nemp_tbl (emp_no NUMBER(4),\nname VARCHAR(40), address VARCHAR(40), deptno NUMBER(3),\nmgrno NUMBER(4),\nstartdate DATE );",
        "what": "Creates the emp_tbl table with the listed columns and constraints.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 4 — Slide 9: Example (2)",
        "language": "sql",
        "code": "CREATE TABLE\nemp_tbl (emp_no NUMBER(4),\nname VARCHAR(40), address VARCHAR(40), deptno NUMBER(3),\nmgrno NUMBER(4),\nstartdate DATE,\nPRIMARY KEY (emp_no) );",
        "what": "Creates the emp_tbl table with the listed columns and constraints.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 5 — Slide 10: Example (3)",
        "language": "sql",
        "code": "CREATE TABLE\nemp_tbl ( emp_no NUMBER(4),\nname VARCHAR(40), address VARCHAR(40), deptno NUMBER(3),\nmgrno NUMBER(4),\nstartdate DATE,\nPRIMARY KEY (emp_no),\nFOREIGN KEY (deptno) REFERENCES DEPT );",
        "what": "Creates the emp_tbl table with the listed columns and constraints.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 6 — Slide 11: Example (4)",
        "language": "sql",
        "code": "SQL> CREATE TABLE dept\n2 (deptno NUMBER(2),\n3 dname VARCHAR2(14),\n4 loc VARCHAR2(13));\nTable created.",
        "what": "Creates the dept table with the listed columns and constraints.",
        "notes": "Confirm table creation. Name Null? Type --------------------------- -------- --------- DEPTNO NUMBER(2) DNAME VARCHAR2(14) LOC VARCHAR2(13)"
      },
      {
        "title": "Lab1 Block 7 — Slide 11: Example (4)",
        "language": "sql",
        "code": "SQL> DESCRIBE dept",
        "what": "Displays the structure of the specified table.",
        "notes": "Confirm table creation. Name Null? Type --------------------------- -------- --------- DEPTNO NUMBER(2) DNAME VARCHAR2(14) LOC VARCHAR2(13)"
      },
      {
        "title": "Lab1 Block 8 — Slide 13: Answer:",
        "language": "sql",
        "code": "SQL> CREATE TABLE Student(\nSt_No Number(2) Not Null,\nFName Varchar2(40) Not Null,\nLName Varchar2 (40),\nDept_no Number(3),\nStartDate Date);",
        "what": "Creates the student table with the listed columns and constraints.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 9 — Slide 14: 2- Description Command",
        "language": "sql",
        "code": "SQL> DESC(RIBE) table_name;",
        "what": "Displays the structure of the specified table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 10 — Slide 14: 2- Description Command",
        "language": "sql",
        "code": "SQL> Desc student\nName Null? Type\n--------------------- ---------------- -------------\nST_NO NOT NULL NUMBER(2)\nFNAME NOT NULL CHAR(40)\nLNAME CHAR(40)\nDEPT_NO NUMBER(3)\nSTARTDATE DATE",
        "what": "Displays the structure of the specified table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 11 — Slide 15: Querying the Data Dictionary",
        "language": "sql",
        "code": "SQL> SELECT *\n2 FROM user_tables;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "View distinct object types owned by the user. View tables, views, synonyms, and sequences owned by the user."
      },
      {
        "title": "Lab1 Block 12 — Slide 15: Querying the Data Dictionary",
        "language": "sql",
        "code": "SQL> SELECT DISTINCT object_type\n2 FROM user_objects;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "View distinct object types owned by the user. View tables, views, synonyms, and sequences owned by the user."
      },
      {
        "title": "Lab1 Block 13 — Slide 15: Querying the Data Dictionary",
        "language": "sql",
        "code": "SQL> SELECT *\n2 FROM user_catalog;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "View distinct object types owned by the user. View tables, views, synonyms, and sequences owned by the user."
      },
      {
        "title": "Lab1 Block 14 — Slide 16: The ALTER TABLE Statement",
        "language": "sql",
        "code": "ALTER TABLE table\nADD (column datatype [DEFAULT expr]\n[, column datatype]...);",
        "what": "Alters table by adding the listed column or constraint.",
        "notes": "Use the ALTER TABLE statement to: Add a new column Modify an existing column Define a default value for the new column"
      },
      {
        "title": "Lab1 Block 15 — Slide 16: The ALTER TABLE Statement",
        "language": "sql",
        "code": "ALTER TABLE table\nMODIFY (column datatype [DEFAULT expr]\n[, column datatype]...);",
        "what": "Alters the structure or constraints of table.",
        "notes": "Use the ALTER TABLE statement to: Add a new column Modify an existing column Define a default value for the new column"
      },
      {
        "title": "Lab1 Block 16 — Slide 17: 3- ALTERING TABLE (ADD)",
        "language": "sql",
        "code": "ALTER TABLE Student ADD Collage VARCHAR2(20);",
        "what": "Alters student by adding the listed column or constraint.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 17 — Slide 19: Adding a Column",
        "language": "sql",
        "code": "SQL> ALTER TABLE dept30\n2 ADD (job VARCHAR2(9));\nTable altered.",
        "what": "Alters dept30 by adding the listed column or constraint.",
        "notes": "You use the ADD clause to add columns. EMPNO ENAME ANNSAL HIREDATE JOB --------- ---------- --------- --------- ---- 7698 BLAKE 34200 01-MAY-81 7654 MARTIN 15000 28-SEP-81 7499 ALLEN 19200 20-FEB-81 7844 TURNER 18000 08-SEP-81 ... 6 rows selected. The new column becomes the last column."
      },
      {
        "title": "Lab1 Block 18 — Slide 20: 3- ALTERING TABLE (Modify)",
        "language": "sql",
        "code": "ALTER TABLE Student MODIFY (St_no NUMBER(3)\nNull);",
        "what": "Alters student by modifying the listed column definition.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 19 — Slide 22: 3- ALTERING TABLE (DROP COLUMN)",
        "language": "sql",
        "code": "ALTER TABLE table-name DROP COLUMN column-name;",
        "what": "Drops a column from table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 20 — Slide 22: 3- ALTERING TABLE (DROP COLUMN)",
        "language": "sql",
        "code": "ALTER TABLE Student DROP COLUMN Collage;",
        "what": "Drops a column from student.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 21 — Slide 24: Dropping a Table",
        "language": "sql",
        "code": "SQL> DROP TABLE dept30;\nTable dropped.",
        "what": "Drops the dept30 table.",
        "notes": "All data and structure in the table is deleted. Any pending transactions are committed. All indexes are dropped. You cannot roll back this statement."
      },
      {
        "title": "Lab1 Block 22 — Slide 25: Changing the Name of an Object",
        "language": "sql",
        "code": "SQL> RENAME dept TO department;\nTable renamed.",
        "what": "Renames the specified database object.",
        "notes": "To change the name of a table, view, sequence, or synonym, you execute the RENAME statement. You must be the owner of the object."
      },
      {
        "title": "Lab1 Block 23 — Slide 26: 5- INSERT INTO",
        "language": "sql",
        "code": "SQL> INSERT INTO Table_Name (Column_Name1,\nColumn_Name2, …, Column_NameN)\nVALUES\n(Value1, Value2, … , ValueN);",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 24 — Slide 26: 5- INSERT INTO",
        "language": "sql",
        "code": "SQL> INSERT INTO Student (St_No, Fname, LName)\nVALUES (10,’Ali’,’Ahmad’);",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 25 — Slide 27: INSERT INTO cont…",
        "language": "sql",
        "code": "SQL> INSERT INTO Table_Name\nVALUES (Value1, Value2, … , ValueN);",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 26 — Slide 27: INSERT INTO cont…",
        "language": "sql",
        "code": "SQL> INSERT INTO Student VALUES\n(20,’Ahmad’,’Mahmoud’,10,’08/FEB/2015’);",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 27 — Slide 27: INSERT INTO cont…",
        "language": "sql",
        "code": "SQL> INSERT INTO Student VALUES\n(30,’Issa’,’Kamal’,Null,Null);",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 28 — Slide 28: Reading the data",
        "language": "sql",
        "code": "SQL> SELECT * FROM tablename;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": ""
      },
      {
        "title": "Lab1 Block 29 — Slide 28: Reading the data",
        "language": "sql",
        "code": "SQL> SELECT * FROM student;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": ""
      }
    ]
  },
  {
    "id": "Lab2",
    "title": "Constraints",
    "sourceFile": "Lab Manual 2 (Constraints)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab2 Block 1 — Slide 6: Defining Constraints",
        "language": "sql",
        "code": "column [CONSTRAINT constraint_name] constraint_type,",
        "what": "Shows constraint syntax for table definition or constraint management.",
        "notes": ""
      },
      {
        "title": "Lab2 Block 2 — Slide 8: The NOT NULL Constraint",
        "language": "sql",
        "code": "SQL> CREATE TABLE emp(\n2 empno NUMBER(4),\n3 ename VARCHAR2(10) NOT NULL,\n4 job VARCHAR2(9),\n5 mgr NUMBER(4),\n6 hiredate DATE,\n7 sal NUMBER(7,2),\n8 comm NUMBER(7,2),\n9 deptno NUMBER(7,2) NOT NULL);",
        "what": "Creates the emp table with the listed columns and constraints.",
        "notes": "Defined at the column level"
      },
      {
        "title": "Lab2 Block 3 — Slide 12: The PRIMARY KEY Constraint",
        "language": "sql",
        "code": "SQL> CREATE TABLE dept(\n2 deptno NUMBER(2),\n3 dname VARCHAR2(14),\n4 loc VARCHAR2(13),\n5 CONSTRAINT dept_dname_uk UNIQUE (dname),\n6 CONSTRAINT dept_deptno_pk PRIMARY KEY(deptno));",
        "what": "Creates the dept table with the listed columns and constraints.",
        "notes": "Defined at either the table level or the column level OR:"
      },
      {
        "title": "Lab2 Block 4 — Slide 12: The PRIMARY KEY Constraint",
        "language": "sql",
        "code": "SQL> CREATE TABLE dept(\n2 deptno NUMBER(2) Primary key,\n3 dname VARCHAR2(14),\n4 loc VARCHAR2(13),\n5 CONSTRAINT dept_dname_uk UNIQUE (dname));",
        "what": "Creates the dept table with the listed columns and constraints.",
        "notes": "Defined at either the table level or the column level OR:"
      },
      {
        "title": "Lab2 Block 5 — Slide 14: The FOREIGN KEY Constraint",
        "language": "sql",
        "code": "SQL> CREATE TABLE emp(\n2 empno NUMBER(4),\n3 ename VARCHAR2(10) NOT NULL,\n4 job VARCHAR2(9),\n5 mgr NUMBER(4),\n6 hiredate DATE,\n7 sal NUMBER(7,2),\n8 comm NUMBER(7,2),\n9 deptno NUMBER(7,2) NOT NULL,\n10 CONSTRAINT emp_deptno_fk FOREIGN KEY (deptno)\n11 REFERENCES dept (deptno));",
        "what": "Creates the emp table with the listed columns and constraints.",
        "notes": "Defined at either the table level or the column level"
      },
      {
        "title": "Lab2 Block 6 — Slide 16: The CHECK Constraint",
        "language": "sql",
        "code": "..., deptno NUMBER(2),\nCONSTRAINT emp_deptno_ck\nCHECK (deptno BETWEEN 10 AND 99),...",
        "what": "Shows constraint syntax for table definition or constraint management.",
        "notes": "Defines a condition that each row must satisfy OR:"
      },
      {
        "title": "Lab2 Block 7 — Slide 16: The CHECK Constraint",
        "language": "sql",
        "code": ".., deptno NUMBER(2) CHECK (deptno BETWEEN 10 AND 99),...,",
        "what": "Code/query block from the slide titled 'The CHECK Constraint'.",
        "notes": "Defines a condition that each row must satisfy OR:"
      },
      {
        "title": "Lab2 Block 8 — Slide 16: The CHECK Constraint",
        "language": "sql",
        "code": "..., deptno NUMBER(2),\n...,\nCHECK (deptno BETWEEN 10 AND 99),...",
        "what": "Code/query block from the slide titled 'The CHECK Constraint'.",
        "notes": "Defines a condition that each row must satisfy OR:"
      },
      {
        "title": "Lab2 Block 9 — Slide 17: Managing Constraints Using ALTER TABLE",
        "language": "sql",
        "code": "ALTER TABLE table\nADD [CONSTRAINT constraint] type (column);",
        "what": "Alters table by adding the listed column or constraint.",
        "notes": "Add or drop, but not modify, a constraint Enable or disable constraints Add a NOT NULL constraint by using the MODIFY clause"
      },
      {
        "title": "Lab2 Block 10 — Slide 18: Adding a Constraint",
        "language": "sql",
        "code": "SQL> ALTER TABLE emp\n2 ADD CONSTRAINT emp_mgr_fk\n3 FOREIGN KEY(mgr) REFERENCES emp(empno);\nTable altered.",
        "what": "Alters emp by adding the listed column or constraint.",
        "notes": "Add a FOREIGN KEY constraint to the EMP table indicating that a manager must already exist as a valid employee in the EMP table."
      },
      {
        "title": "Lab2 Block 11 — Slide 19: Dropping a Constraint",
        "language": "sql",
        "code": "SQL> ALTER TABLE emp\n2 DROP CONSTRAINT emp_mgr_fk;\nTable altered.",
        "what": "Drops a constraint from emp.",
        "notes": "Remove the manager constraint from the EMP table. Remove the PRIMARY KEY constraint on the DEPT table and drop the associated FOREIGN KEY constraint on the EMP.DEPTNO column."
      },
      {
        "title": "Lab2 Block 12 — Slide 19: Dropping a Constraint",
        "language": "sql",
        "code": "SQL> ALTER TABLE dept\n2 DROP PRIMARY KEY CASCADE;\nTable altered.",
        "what": "Alters the structure or constraints of dept.",
        "notes": "Remove the manager constraint from the EMP table. Remove the PRIMARY KEY constraint on the DEPT table and drop the associated FOREIGN KEY constraint on the EMP.DEPTNO column."
      },
      {
        "title": "Lab2 Block 13 — Slide 20: Disabling Constraints",
        "language": "sql",
        "code": "SQL> ALTER TABLE emp\n2 DISABLE CONSTRAINT emp_empno_pk CASCADE;\nTable altered.",
        "what": "Disables a constraint on emp.",
        "notes": "Execute the DISABLE clause of the ALTER TABLE statement to deactivate an integrity constraint. Apply the CASCADE option to disable dependent integrity constraints."
      },
      {
        "title": "Lab2 Block 14 — Slide 21: Enabling Constraints",
        "language": "sql",
        "code": "SQL> ALTER TABLE emp\n2 ENABLE CONSTRAINT emp_empno_pk;\nTable altered.",
        "what": "Enables a constraint on emp.",
        "notes": "Activate an integrity constraint currently disabled in the table definition by using the ENABLE clause. A UNIQUE or PRIMARY KEY index is automatically created if you enable a UNIQUE key or PRIMARY KEY constraint."
      },
      {
        "title": "Lab2 Block 15 — Slide 22: Viewing Constraints",
        "language": "sql",
        "code": "SQL> SELECT constraint_name, constraint_type,\n2 search_condition\n3 FROM user_constraints\n4 WHERE table_name = 'EMP';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Query the USER_CONSTRAINTS table to view all constraint definitions and names. CONSTRAINT_NAME C SEARCH_CONDITION ------------------------ - ------------------------- SYS_C00674 C EMPNO IS NOT NULL SYS_C00675 C DEPTNO IS NOT NULL EMP_EMPNO_PK P ..."
      },
      {
        "title": "Lab2 Block 16 — Slide 23: Viewing the Columns Associated with Constraints",
        "language": "sql",
        "code": "SQL> SELECT constraint_name, column_name\n2 FROM user_cons_columns\n3 WHERE table_name = 'EMP';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "CONSTRAINT_NAME COLUMN_NAME ------------------------- ---------------------- EMP_DEPTNO_FK DEPTNO EMP_EMPNO_PK EMPNO EMP_MGR_FK MGR SYS_C00674 EMPNO SYS_C00675 DEPTNO View the columns associated with the constraint names in the USER_CONS_COLUMNS view."
      }
    ]
  },
  {
    "id": "Lab3",
    "title": "Manipulating Data",
    "sourceFile": "Lab Manual 3 (Manipulating Data)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab3 Block 1 — Slide 5: The INSERT Statement",
        "language": "sql",
        "code": "INSERT INTO table [(column [, column...])]\nVALUES (value [, value...]);",
        "what": "Inserts a new row into the target table.",
        "notes": "Add new rows to a table by using the INSERT statement. Only one row is inserted at a time with this syntax."
      },
      {
        "title": "Lab3 Block 2 — Slide 6: Inserting New Rows",
        "language": "sql",
        "code": "SQL> INSERT INTO dept (deptno, dname, loc)\n2 VALUES (50, 'DEVELOPMENT', 'DETROIT');\n1 row created.",
        "what": "Inserts a new row into the target table.",
        "notes": ""
      },
      {
        "title": "Lab3 Block 3 — Slide 7: Inserting Rows with Null Values",
        "language": "sql",
        "code": "SQL> INSERT INTO dept (deptno, dname )\n2 VALUES (60, 'MIS');\n1 row created.",
        "what": "Inserts a new row into the target table.",
        "notes": "Implicit method: Omit the column from the column list. Explicit method: Specify the NULL keyword."
      },
      {
        "title": "Lab3 Block 4 — Slide 7: Inserting Rows with Null Values",
        "language": "sql",
        "code": "SQL> INSERT INTO dept\n2 VALUES (70, 'FINANCE', NULL);\n1 row created.",
        "what": "Inserts a new row into the target table.",
        "notes": "Implicit method: Omit the column from the column list. Explicit method: Specify the NULL keyword."
      },
      {
        "title": "Lab3 Block 5 — Slide 8: Inserting Special Values",
        "language": "sql",
        "code": "SQL> INSERT INTO emp (empno, ename, job,\n2 mgr, hiredate, sal, comm,\n3 deptno)\n4 VALUES (7196, 'GREEN', 'SALESMAN',\n5 7782, SYSDATE, 2000, NULL,\n6 10);\n1 row created.",
        "what": "Inserts a new row into the target table.",
        "notes": "The SYSDATE function records the current date and time."
      },
      {
        "title": "Lab3 Block 6 — Slide 9: Inserting Specific Date Values",
        "language": "sql",
        "code": "SQL> INSERT INTO emp\n2 VALUES (2296,'AROMANO','SALESMAN',7782,\n3 TO_DATE('FEB 3, 1997', 'MON DD, YYYY'),\n4 1300, NULL, 10);\n1 row created.",
        "what": "Inserts a new row into the target table.",
        "notes": "Add a new employee. Verify your addition. EMPNO ENAME JOB MGR HIREDATE SAL COMM DEPTNO ----- ------- -------- ---- --------- ---- ---- ------ 2296 AROMANO SALESMAN 7782 03-FEB-97 1300 10"
      },
      {
        "title": "Lab3 Block 7 — Slide 11: The UPDATE Statement",
        "language": "sql",
        "code": "UPDATE table\nSET column = value [, column = value, ...]\n[WHERE condition];",
        "what": "Updates existing rows in the target table.",
        "notes": ""
      },
      {
        "title": "Lab3 Block 8 — Slide 12: Updating Rows in a Table",
        "language": "sql",
        "code": "SQL> UPDATE emp\n2 SET deptno = 20\n3 WHERE empno = 7782;\n1 row updated.",
        "what": "Updates existing rows in the target table.",
        "notes": "Specific row or rows are modified when you specify the WHERE clause. All rows in the table are modified if you omit the WHERE clause."
      },
      {
        "title": "Lab3 Block 9 — Slide 12: Updating Rows in a Table",
        "language": "sql",
        "code": "SQL> UPDATE employee\n2 SET deptno = 20;\n14 rows updated.",
        "what": "Updates existing rows in the target table.",
        "notes": "Specific row or rows are modified when you specify the WHERE clause. All rows in the table are modified if you omit the WHERE clause."
      },
      {
        "title": "Lab3 Block 10 — Slide 13: UPDATE emp",
        "language": "sql",
        "code": "UPDATE emp\n*\nERROR at line 1:\nORA-02291: integrity constraint (USR.EMP_DEPTNO_FK) violated - parent key not found",
        "what": "Updates existing rows in the target table.",
        "notes": "Updating Rows: Integrity Constraint Error Department number 55 does not exist"
      },
      {
        "title": "Lab3 Block 11 — Slide 13: UPDATE emp",
        "language": "sql",
        "code": "SQL> UPDATE emp\n2 SET deptno = 55\n3 WHERE deptno = 10;",
        "what": "Updates existing rows in the target table.",
        "notes": "Updating Rows: Integrity Constraint Error Department number 55 does not exist"
      },
      {
        "title": "Lab3 Block 12 — Slide 15: The DELETE Statement",
        "language": "sql",
        "code": "DELETE [FROM] table\n[WHERE condition];",
        "what": "Deletes rows from the target table.",
        "notes": "You can remove existing rows from a table by using the DELETE statement."
      },
      {
        "title": "Lab3 Block 13 — Slide 16: Specific rows are deleted when you specify the WHERE clause.",
        "language": "sql",
        "code": "SQL> DELETE FROM department\n2 WHERE dname = 'DEVELOPMENT';\n1 row deleted.",
        "what": "Deletes rows from the target table.",
        "notes": "Specific rows are deleted when you specify the WHERE clause. All rows in the table are deleted if you omit the WHERE clause. Deleting Rows from a Table"
      },
      {
        "title": "Lab3 Block 14 — Slide 16: Specific rows are deleted when you specify the WHERE clause.",
        "language": "sql",
        "code": "SQL> DELETE FROM department;\n4 rows deleted.",
        "what": "Deletes rows from the target table.",
        "notes": "Specific rows are deleted when you specify the WHERE clause. All rows in the table are deleted if you omit the WHERE clause. Deleting Rows from a Table"
      },
      {
        "title": "Lab3 Block 15 — Slide 17: Deleting Rows:",
        "language": "sql",
        "code": "SQL> DELETE FROM dept\n2 WHERE deptno = 10;",
        "what": "Deletes rows from the target table.",
        "notes": "Deleting Rows: Integrity Constraint Error You cannot delete a row that contains a primary key that is used as a foreign key in another table."
      },
      {
        "title": "Lab3 Block 16 — Slide 17: Deleting Rows:",
        "language": "sql",
        "code": "DELETE FROM dept\n*\nERROR at line 1:\nORA-02292: integrity constraint (USR.EMP_DEPTNO_FK) violated - child record found",
        "what": "Deletes rows from the target table.",
        "notes": "Deleting Rows: Integrity Constraint Error You cannot delete a row that contains a primary key that is used as a foreign key in another table."
      },
      {
        "title": "Lab3 Block 17 — Slide 18: Committing Data",
        "language": "sql",
        "code": "SQL> UPDATE emp\n2 SET deptno = 10\n3 WHERE empno = 7782;\n1 row updated.",
        "what": "Updates existing rows in the target table.",
        "notes": "Make the changes."
      },
      {
        "title": "Lab3 Block 18 — Slide 18: Committing Data",
        "language": "sql",
        "code": "SQL> COMMIT;\nCommit complete.",
        "what": "Permanently saves pending transaction changes.",
        "notes": "Make the changes."
      },
      {
        "title": "Lab3 Block 19 — Slide 19: State of the Data After ROLLBACK",
        "language": "sql",
        "code": "SQL> DELETE FROM employee;\n14 rows deleted.",
        "what": "Deletes rows from the target table.",
        "notes": "Discard all pending changes by using the ROLLBACK statement. Data changes are undone. Previous state of the data is restored. Locks on the affected rows are released."
      },
      {
        "title": "Lab3 Block 20 — Slide 19: State of the Data After ROLLBACK",
        "language": "sql",
        "code": "SQL> ROLLBACK;\nRollback complete.",
        "what": "Undoes pending transaction changes.",
        "notes": "Discard all pending changes by using the ROLLBACK statement. Data changes are undone. Previous state of the data is restored. Locks on the affected rows are released."
      }
    ]
  },
  {
    "id": "Lab4",
    "title": "Basic SQL Statements",
    "sourceFile": "Lab Manual 4 (Basic SQL Statements)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab4 Block 1 — Slide 4: Basic SELECT Statement",
        "language": "sql",
        "code": "SELECT [DISTINCT] {*, column [alias],...}\nFROM table;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": ""
      },
      {
        "title": "Lab4 Block 2 — Slide 6: Selecting All Columns",
        "language": "sql",
        "code": "SQL> SELECT *\n2 FROM dept;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "DEPTNO DNAME LOC --------- -------------- ------------- 10 ACCOUNTING NEW YORK 20 RESEARCH DALLAS 30 SALES CHICAGO 40 OPERATIONS BOSTON"
      },
      {
        "title": "Lab4 Block 3 — Slide 7: Selecting Specific Columns",
        "language": "sql",
        "code": "SQL> SELECT deptno, loc\n2 FROM dept;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "DEPTNO LOC --------- ------------- 10 NEW YORK 20 DALLAS 30 CHICAGO 40 BOSTON"
      },
      {
        "title": "Lab4 Block 4 — Slide 10: Using Arithmetic Operators",
        "language": "sql",
        "code": "SQL> SELECT ename, sal, sal+300\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "ENAME SAL SAL+300 ---------- --------- --------- KING 5000 5300 BLAKE 2850 3150 CLARK 2450 2750 JONES 2975 3275 MARTIN 1250 1550 ALLEN 1600 1900 ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 5 — Slide 12: Operator Precedence",
        "language": "sql",
        "code": "SQL> SELECT ename, sal, 12*sal+100\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "ENAME SAL 12*SAL+100 ---------- --------- ---------- KING 5000 60100 BLAKE 2850 34300 CLARK 2450 29500 JONES 2975 35800 MARTIN 1250 15100 ALLEN 1600 19300 ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 6 — Slide 13: Using Parentheses",
        "language": "sql",
        "code": "SQL> SELECT ename, sal, 12*(sal+100)\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "ENAME SAL 12*(SAL+100) ---------- --------- ----------- KING 5000 61200 BLAKE 2850 35400 CLARK 2450 30600 JONES 2975 36900 MARTIN 1250 16200 ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 7 — Slide 14: Defining a Null Value",
        "language": "sql",
        "code": "SQL> SELECT ename, job, sal, comm\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "A null is a value that is unavailable, unassigned, unknown, or inapplicable. A null is not the same as zero or a blank space. ENAME JOB SAL COMM ---------- --------- --------- --------- KING PRESIDENT 5000 BLAKE MANAGER 2850 ... TURNER SALESMAN 1500 0 ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 8 — Slide 15: Null Values",
        "language": "sql",
        "code": "SQL> select ename, 12*sal+comm\n2 from emp\n3 WHERE ename='KING';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Null Values in Arithmetic Expressions Arithmetic expressions containing a null value evaluate to null. ENAME 12*SAL+COMM ---------- ----------- KING"
      },
      {
        "title": "Lab4 Block 9 — Slide 17: Using Column Aliases",
        "language": "sql",
        "code": "SQL> SELECT ename AS name, sal salary\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "NAME SALARY ------------- --------- ..."
      },
      {
        "title": "Lab4 Block 10 — Slide 17: Using Column Aliases",
        "language": "sql",
        "code": "SQL> SELECT ename \"Name\",\n2 sal*12 \"Annual Salary\"\n3 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "NAME SALARY ------------- --------- ..."
      },
      {
        "title": "Lab4 Block 11 — Slide 19: Using the Concatenation Operator",
        "language": "sql",
        "code": "SQL> SELECT ename||job AS \"Employees\"\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "Employees ------------------- KINGPRESIDENT BLAKEMANAGER CLARKMANAGER JONESMANAGER MARTINSALESMAN ALLENSALESMAN ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 12 — Slide 21: Using Literal Character Strings",
        "language": "sql",
        "code": "SQL> SELECT ename ||' is a '||job\n2 AS \"Employee Details\"\n3 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "Employee Details ------------------------- KING is a PRESIDENT BLAKE is a MANAGER CLARK is a MANAGER JONES is a MANAGER MARTIN is a SALESMAN ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 13 — Slide 22: Duplicate Rows",
        "language": "sql",
        "code": "SQL> SELECT deptno\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "The default display of queries is all rows, including duplicate rows. DEPTNO --------- ... 14 rows selected."
      },
      {
        "title": "Lab4 Block 14 — Slide 23: Eliminating Duplicate Rows",
        "language": "sql",
        "code": "SQL> SELECT DISTINCT deptno\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "Eliminate duplicate rows by using the DISTINCT keyword in the SELECT clause. DEPTNO ---------"
      },
      {
        "title": "Lab4 Block 15 — Slide 24: Displaying Table Structure",
        "language": "sql",
        "code": "DESC[RIBE] tablename",
        "what": "Displays the structure of the specified table.",
        "notes": "Use the SQL*Plus DESCRIBE command to display the structure of a table."
      },
      {
        "title": "Lab4 Block 16 — Slide 25: Displaying Table Structure",
        "language": "sql",
        "code": "SQL> DESCRIBE dept",
        "what": "Displays the structure of the specified table.",
        "notes": "Name Null? Type ----------------- -------- ------------ DEPTNO NOT NULL NUMBER(2) DNAME VARCHAR2(14) LOC VARCHAR2(13)"
      }
    ]
  },
  {
    "id": "Lab5",
    "title": "Restricting and Sorting Data",
    "sourceFile": "Lab Manual 5 (Restricting and Sorting Data)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab5 Block 1 — Slide 4: Limiting Rows Selected",
        "language": "sql",
        "code": "SELECT [DISTINCT] {*| column [alias], ...}\nFROM table\n[WHERE condition(s)];",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Restrict the rows returned by using the WHERE clause. The WHERE clause follows the FROM clause."
      },
      {
        "title": "Lab5 Block 2 — Slide 5: Using the WHERE Clause",
        "language": "sql",
        "code": "SQL> SELECT ename, job, deptno\n2 FROM emp\n3 WHERE job='CLERK';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME JOB DEPTNO ---------- --------- --------- JAMES CLERK 30 SMITH CLERK 20 ADAMS CLERK 20 MILLER CLERK 10"
      },
      {
        "title": "Lab5 Block 3 — Slide 6: Character Strings and Dates",
        "language": "sql",
        "code": "SQL> SELECT ename, job, deptno\n2 FROM emp\n3 WHERE ename = ;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Character strings and date values are enclosed in single quotation marks. Character values are case sensitive and date values are format sensitive. The default date format is DD-MON-YY. 'JAMES'"
      },
      {
        "title": "Lab5 Block 4 — Slide 8: Using the Comparison Operators",
        "language": "sql",
        "code": "SQL> SELECT ename, sal, comm\n2 FROM emp\n3 WHERE sal<=comm;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME SAL COMM ---------- --------- --------- MARTIN 1250 1400"
      },
      {
        "title": "Lab5 Block 5 — Slide 10: Using the BETWEEN Operator",
        "language": "sql",
        "code": "SQL> SELECT ename, sal\n2 FROM emp\n3 WHERE sal BETWEEN 1000 AND 1500;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME SAL ---------- --------- MARTIN 1250 TURNER 1500 WARD 1250 ADAMS 1100 MILLER 1300 Use the BETWEEN operator to display rows based on a range of values."
      },
      {
        "title": "Lab5 Block 6 — Slide 11: Using the IN Operator",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, sal, mgr\n2 FROM emp\n3 WHERE mgr IN (7902, 7566, 7788);",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Use the IN operator to test for values in a list. EMPNO ENAME SAL MGR --------- ---------- --------- --------- 7902 FORD 3000 7566 7369 SMITH 800 7902 7788 SCOTT 3000 7566 7876 ADAMS 1100 7788"
      },
      {
        "title": "Lab5 Block 7 — Slide 12: Using the LIKE Operator",
        "language": "sql",
        "code": "SQL> SELECT ename\n2 FROM emp\n3 WHERE ename LIKE 'S%';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Use the LIKE operator to perform wildcard searches of valid search string values. Search conditions can contain either literal characters or numbers. % denotes zero or many characters. _ denotes one character."
      },
      {
        "title": "Lab5 Block 8 — Slide 13: Using the LIKE Operator",
        "language": "sql",
        "code": "SQL> SELECT ename\n2 FROM emp\n3 WHERE ename LIKE '_A%';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "You can combine pattern-matching characters. You can use the ESCAPE identifier to search for \"%\" or \"_\". ENAME ---------- MARTIN JAMES WARD"
      },
      {
        "title": "Lab5 Block 9 — Slide 14: Using the IS NULL Operator",
        "language": "sql",
        "code": "SQL> SELECT ename, mgr\n2 FROM emp\n3 WHERE mgr IS NULL;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Test for null values with the IS NULL operator. ENAME MGR ---------- --------- KING"
      },
      {
        "title": "Lab5 Block 10 — Slide 16: Using the AND Operator",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, job, sal\n2 FROM emp\n3 WHERE sal>=1100\n4 AND job='CLERK';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "AND requires both conditions to be TRUE. EMPNO ENAME JOB SAL --------- ---------- --------- --------- 7876 ADAMS CLERK 1100 7934 MILLER CLERK 1300"
      },
      {
        "title": "Lab5 Block 11 — Slide 17: Using the OR Operator",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, job, sal\n2 FROM emp\n3 WHERE sal>=1100\n4 OR job='CLERK';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "OR requires either condition to be TRUE. EMPNO ENAME JOB SAL --------- ---------- --------- --------- 7839 KING PRESIDENT 5000 7698 BLAKE MANAGER 2850 7782 CLARK MANAGER 2450 7566 JONES MANAGER 2975 7654 MARTIN SALESMAN 1250 ... 7900 JAMES CLERK 950 ... 14 rows selected."
      },
      {
        "title": "Lab5 Block 12 — Slide 18: Using the NOT Operator",
        "language": "sql",
        "code": "SQL> SELECT ename, job\n2 FROM emp\n3 WHERE job NOT IN ('CLERK','MANAGER','ANALYST');",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME JOB ---------- --------- KING PRESIDENT MARTIN SALESMAN ALLEN SALESMAN TURNER SALESMAN WARD SALESMAN"
      },
      {
        "title": "Lab5 Block 13 — Slide 20: Rules of Precedence",
        "language": "sql",
        "code": "SQL> SELECT ename, job, sal\n2 FROM emp\n3 WHERE job='SALESMAN'\n4 OR job='PRESIDENT'\n5 AND sal>1500;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME JOB SAL ---------- --------- --------- KING PRESIDENT 5000 MARTIN SALESMAN 1250 ALLEN SALESMAN 1600 TURNER SALESMAN 1500 WARD SALESMAN 1250"
      },
      {
        "title": "Lab5 Block 14 — Slide 21: Rules of Precedence",
        "language": "sql",
        "code": "SQL> SELECT ename, job, sal\n2 FROM emp\n3 WHERE (job='SALESMAN'\n4 OR job='PRESIDENT')\n5 AND sal>1500;",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME JOB SAL ---------- --------- --------- KING PRESIDENT 5000 ALLEN SALESMAN 1600 Use parentheses to force priority."
      },
      {
        "title": "Lab5 Block 15 — Slide 22: ORDER BY Clause",
        "language": "sql",
        "code": "SQL> SELECT ename, job, deptno, hiredate\n2 FROM emp\n3 ORDER BY hiredate;",
        "what": "Retrieves rows and sorts the output using ORDER BY.",
        "notes": "ENAME JOB DEPTNO HIREDATE ---------- --------- --------- --------- SMITH CLERK 20 17-DEC-80 ALLEN SALESMAN 30 20-FEB-81 ... 14 rows selected."
      },
      {
        "title": "Lab5 Block 16 — Slide 23: Sorting in Descending Order",
        "language": "sql",
        "code": "SQL> SELECT ename, job, deptno, hiredate\n2 FROM emp\n3 ORDER BY hiredate DESC;",
        "what": "Displays the structure of the specified table.",
        "notes": "ENAME JOB DEPTNO HIREDATE ---------- --------- --------- --------- ADAMS CLERK 20 12-JAN-83 SCOTT ANALYST 20 09-DEC-82 MILLER CLERK 10 23-JAN-82 JAMES CLERK 30 03-DEC-81 FORD ANALYST 20 03-DEC-81 KING PRESIDENT 10 17-NOV-81 MARTIN SALESMAN 30 28-SEP-81 ... 14 rows selected."
      },
      {
        "title": "Lab5 Block 17 — Slide 24: Sorting by Column Alias",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, sal*12 annsal\n2 FROM emp\n3 ORDER BY annsal;",
        "what": "Retrieves rows and sorts the output using ORDER BY.",
        "notes": "EMPNO ENAME ANNSAL --------- ---------- --------- 7369 SMITH 9600 7900 JAMES 11400 7876 ADAMS 13200 7654 MARTIN 15000 7521 WARD 15000 7934 MILLER 15600 7844 TURNER 18000 ... 14 rows selected."
      },
      {
        "title": "Lab5 Block 18 — Slide 25: Sorting by Multiple Columns",
        "language": "sql",
        "code": "SQL> SELECT ename, deptno, sal\n2 FROM emp\n3 ORDER BY deptno, sal DESC;",
        "what": "Displays the structure of the specified table.",
        "notes": "The order of ORDER BY list is the order of sort. You can sort by a column that is not in the SELECT list. ENAME DEPTNO SAL ---------- --------- --------- KING 10 5000 CLARK 10 2450 MILLER 10 1300 FORD 20 3000 ... 14 rows selected."
      },
      {
        "title": "Lab5 Block 19 — Slide 26: Summary",
        "language": "sql",
        "code": "SELECT [DISTINCT] {*| column [alias], ...}\nFROM table\n[WHERE condition(s)]\n[ORDER BY {column, expr, alias} [ASC|DESC]];",
        "what": "Displays the structure of the specified table.",
        "notes": ""
      }
    ]
  },
  {
    "id": "Lab6",
    "title": "Displaying Data from Multiple Tables",
    "sourceFile": "Lab Manual 6 (Displaying Data from Multiple Tables)(3).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab6 Block 1 — Slide 4: What Is a Join?",
        "language": "sql",
        "code": "SELECT table1.column, table2.column\nFROM table1, table2\nWHERE table1.column1 = table2.column2;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": ""
      },
      {
        "title": "Lab6 Block 2 — Slide 9: Retrieving Records",
        "language": "sql",
        "code": "SQL> SELECT emp.empno, emp.ename, emp.deptno,\n2 dept.deptno, dept.loc\n3 FROM emp, dept\n4 WHERE emp.deptno=dept.deptno;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "Retrieving Records with Equijoins EMPNO ENAME DEPTNO DEPTNO LOC ----- ------ ------ ------ --------- 7839 KING 10 10 NEW YORK 7698 BLAKE 30 30 CHICAGO 7782 CLARK 10 10 NEW YORK 7566 JONES 20 20 DALLAS ... 14 rows selected."
      },
      {
        "title": "Lab6 Block 3 — Slide 12: Using Table Aliases",
        "language": "sql",
        "code": "SQL> SELECT emp.empno, emp.ename, emp.deptno,\n2 dept.deptno, dept.loc\n3 FROM emp, dept\n4 WHERE emp.deptno=dept.deptno;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "Simplify queries by using table aliases."
      },
      {
        "title": "Lab6 Block 4 — Slide 12: Using Table Aliases",
        "language": "sql",
        "code": "SQL> SELECT e.empno, e.ename, e.deptno,\n2 d.deptno, d.loc\n3 FROM emp e, dept d\n4 WHERE e.deptno= d.deptno;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "Simplify queries by using table aliases."
      },
      {
        "title": "Lab6 Block 5 — Slide 15: Retrieving Records",
        "language": "sql",
        "code": "SQL> SELECT e.ename, e.sal, s.grade\n2 FROM emp e, salgrade s\n3 WHERE e.sal\n4 BETWEEN s.losal AND s.hisal;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "Retrieving Records with Non-Equijoins ENAME SAL GRADE ---------- --------- --------- JAMES 950 1 SMITH 800 1 ADAMS 1100 1 ... 14 rows selected."
      },
      {
        "title": "Lab6 Block 6 — Slide 17: Outer Joins",
        "language": "sql",
        "code": "SELECT table1.column, table2.column\nFROM table1, table2\nWHERE table1.column(+) = table2.column;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "You use an outer join to also see rows that do not usually meet the join condition. Outer join operator is the plus sign (+)."
      },
      {
        "title": "Lab6 Block 7 — Slide 17: Outer Joins",
        "language": "sql",
        "code": "SELECT table1.column, table2.column\nFROM table1, table2\nWHERE table1.column = table2.column(+);",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "You use an outer join to also see rows that do not usually meet the join condition. Outer join operator is the plus sign (+)."
      },
      {
        "title": "Lab6 Block 8 — Slide 18: Using Outer Joins",
        "language": "sql",
        "code": "SQL> SELECT e.ename, d.deptno, d.dname\n2 FROM emp e, dept d\n3 WHERE e.deptno(+) = d.deptno\n4 ORDER BY e.deptno;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "ENAME DEPTNO DNAME ---------- --------- ------------- KING 10 ACCOUNTING CLARK 10 ACCOUNTING ... 40 OPERATIONS 15 rows selected."
      },
      {
        "title": "Lab6 Block 9 — Slide 20: Joining a Table to Itself",
        "language": "sql",
        "code": "SQL> SELECT worker.ename||' works for '||manager.ename\n2 FROM emp worker, emp manager\n3 WHERE worker.mgr = manager.empno;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "WORKER.ENAME||'WORKSFOR'||MANAG ------------------------------- BLAKE works for KING CLARK works for KING JONES works for KING MARTIN works for BLAKE ... 13 rows selected."
      },
      {
        "title": "Lab6 Block 10 — Slide 21: Summary",
        "language": "sql",
        "code": "SELECT table1.column, table2.column\nFROM table1, table2\nWHERE table1.column1 = table2.column2;",
        "what": "Retrieves data from one or more tables according to the listed SELECT clauses.",
        "notes": "Equijoin Non-equijoin Outer join Self join"
      }
    ]
  },
  {
    "id": "Lab7",
    "title": "Aggregating Data Using Group Functions",
    "sourceFile": "Lab Manual 7 (Aggregating Data)(4).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab7 Block 1 — Slide 5: Using Group Functions",
        "language": "sql",
        "code": "SELECT [column,] group_function(column)\nFROM table\n[WHERE condition]\n[GROUP BY column]\n[ORDER BY column];",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": ""
      },
      {
        "title": "Lab7 Block 2 — Slide 6: Using AVG and SUM Functions",
        "language": "sql",
        "code": "SQL> SELECT AVG(sal), MAX(sal),\n2 MIN(sal), SUM(sal)\n3 FROM emp\n4 WHERE job LIKE 'SALES%';",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "AVG(SAL) MAX(SAL) MIN(SAL) SUM(SAL) -------- --------- --------- --------- 1400 1600 1250 5600 You can use AVG and SUM for numeric data."
      },
      {
        "title": "Lab7 Block 3 — Slide 7: Using MIN and MAX Functions",
        "language": "sql",
        "code": "SQL> SELECT MIN(hiredate), MAX(hiredate)\n2 FROM emp;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "You can use MIN and MAX for any datatype. MIN(HIRED MAX(HIRED --------- --------- 17-DEC-80 12-JAN-83"
      },
      {
        "title": "Lab7 Block 4 — Slide 8: Using the COUNT Function",
        "language": "sql",
        "code": "SQL> SELECT COUNT(*)\n2 FROM emp\n3 WHERE deptno = 30;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "COUNT(*) --------- COUNT(*) returns the number of rows in a table."
      },
      {
        "title": "Lab7 Block 5 — Slide 9: Using the COUNT Function",
        "language": "sql",
        "code": "SQL> SELECT COUNT(comm)\n2 FROM emp\n3 WHERE deptno = 30;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "COUNT(expr) returns the number of nonnull rows. COUNT(COMM) -----------"
      },
      {
        "title": "Lab7 Block 6 — Slide 10: Group Functions and Null Values",
        "language": "sql",
        "code": "SQL> SELECT AVG(comm)\n2 FROM emp;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Group functions ignore null values in the column. AVG(COMM) ---------"
      },
      {
        "title": "Lab7 Block 7 — Slide 11: Using the NVL Function",
        "language": "sql",
        "code": "SQL> SELECT AVG(NVL(comm,0))\n2 FROM emp;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Using the NVL Function with Group Functions The NVL function forces group functions to include null values. AVG(NVL(COMM,0)) ---------------- 157.14286"
      },
      {
        "title": "Lab7 Block 8 — Slide 13: Creating Groups of Data:",
        "language": "sql",
        "code": "SELECT column, group_function(column)\nFROM table\n[WHERE condition]\n[GROUP BY group_by_expression]\n[ORDER BY column];",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Creating Groups of Data: GROUP BY Clause Divide rows in a table into smaller groups by using the GROUP BY clause."
      },
      {
        "title": "Lab7 Block 9 — Slide 14: Using the GROUP BY Clause",
        "language": "sql",
        "code": "SQL> SELECT deptno, AVG(sal)\n2 FROM emp\n3 GROUP BY deptno;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "All columns in the SELECT list that are not in group functions must be in the GROUP BY clause. DEPTNO AVG(SAL) --------- --------- 10 2916.6667 20 2175 30 1566.6667"
      },
      {
        "title": "Lab7 Block 10 — Slide 15: Using the GROUP BY Clause",
        "language": "sql",
        "code": "SQL> SELECT AVG(sal)\n2 FROM emp\n3 GROUP BY deptno;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "The GROUP BY column does not have to be in the SELECT list. AVG(SAL) --------- 2916.6667 1566.6667"
      },
      {
        "title": "Lab7 Block 11 — Slide 17: Using the GROUP BY Clause",
        "language": "sql",
        "code": "SQL> SELECT deptno, job, sum(sal)\n2 FROM emp\n3 GROUP BY deptno, job;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Using the GROUP BY Clause on Multiple Columns DEPTNO JOB SUM(SAL) --------- --------- --------- 10 CLERK 1300 10 MANAGER 2450 10 PRESIDENT 5000 20 ANALYST 6000 20 CLERK 1900 ... 9 rows selected."
      },
      {
        "title": "Lab7 Block 12 — Slide 18: Illegal Queries",
        "language": "sql",
        "code": "SQL> SELECT deptno, COUNT(ename)\n2 FROM emp;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Illegal Queries Using Group Functions Any column or expression in the SELECT list that is not an aggregate function must be in the GROUP BY clause. Column missing in the GROUP BY clause"
      },
      {
        "title": "Lab7 Block 13 — Slide 19: Illegal Queries",
        "language": "sql",
        "code": "SQL> SELECT deptno, AVG(sal)\n2 FROM emp\n3 WHERE AVG(sal) > 2000\n4 GROUP BY deptno;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Illegal Queries Using Group Functions You cannot use the WHERE clause to restrict groups. You use the HAVING clause to restrict groups. WHERE AVG(sal) > 2000 * ERROR at line 3: ORA-00934: group function is not allowed here Cannot use the WHERE clause to restrict groups"
      },
      {
        "title": "Lab7 Block 14 — Slide 21: Excluding Group Results: HAVING Clause",
        "language": "sql",
        "code": "SELECT column, group_function\nFROM table\n[WHERE condition]\n[GROUP BY group_by_expression]\n[HAVING group_condition]\n[ORDER BY column];",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Use the HAVING clause to restrict groups Rows are grouped. The group function is applied. Groups matching the HAVING clause are displayed."
      },
      {
        "title": "Lab7 Block 15 — Slide 22: Using the HAVING Clause",
        "language": "sql",
        "code": "SQL> SELECT deptno, max(sal)\n2 FROM emp\n3 GROUP BY deptno\n4 HAVING max(sal)>2900;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "DEPTNO MAX(SAL) --------- --------- 10 5000 20 3000"
      },
      {
        "title": "Lab7 Block 16 — Slide 23: Using the HAVING Clause",
        "language": "sql",
        "code": "SQL> SELECT job, SUM(sal) PAYROLL\n2 FROM emp\n3 WHERE job NOT LIKE 'SALES%'\n4 GROUP BY job\n6 ORDER BY SUM(sal);",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "JOB PAYROLL --------- --------- ANALYST 6000 MANAGER 8275 5 HAVING SUM(sal)>5000"
      },
      {
        "title": "Lab7 Block 17 — Slide 24: Nesting Group Functions",
        "language": "sql",
        "code": "SQL> SELECT max(avg(sal))\n2 FROM emp\n3 GROUP BY deptno;",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "MAX(AVG(SAL)) ------------- 2916.6667 Display the maximum average salary."
      },
      {
        "title": "Lab7 Block 18 — Slide 25: Summary",
        "language": "sql",
        "code": "SELECT column, group_function(column)\nFROM table\n[WHERE condition]\n[GROUP BY group_by_expression]\n[HAVING group_condition]\n[ORDER BY column];",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Order of evaluation of the clauses: WHERE clause GROUP BY clause HAVING clause"
      }
    ]
  },
  {
    "id": "Lab8",
    "title": "Subqueries",
    "sourceFile": "Lab Manual 8 (Subqueries)(1).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab8 Block 1 — Slide 3: Subqueries",
        "language": "sql",
        "code": "SELECT select_list\nFROM table\nWHERE expr operator\n(SELECT select_list\nFROM table);",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "The subquery (inner query) executes once before the main query. The result of the subquery is used by the main query (outer query)."
      },
      {
        "title": "Lab8 Block 2 — Slide 4: SQL> SELECT ename",
        "language": "sql",
        "code": "SQL> SELECT ename\n2 FROM emp\n3 WHERE sal >\n4 (SELECT sal\n5 FROM emp\n6 WHERE empno=7566);",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Using a Subquery ENAME ---------- KING FORD SCOTT"
      },
      {
        "title": "Lab8 Block 3 — Slide 8: Executing Single-Row Subqueries",
        "language": "sql",
        "code": "SQL> SELECT ename, job\n2 FROM emp\n3 WHERE job =\n4 (SELECT job\n5 FROM emp\n6 WHERE empno = 7369)\n7 AND sal >\n8 (SELECT sal\n9 FROM emp\n10 WHERE empno = 7876);",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "ENAME JOB ---------- --------- MILLER CLERK"
      },
      {
        "title": "Lab8 Block 4 — Slide 9: Using Group Functions",
        "language": "sql",
        "code": "SQL> SELECT ename, job, sal\n2 FROM emp\n3 WHERE sal =\n4 (SELECT MIN(sal)\n5 FROM emp);",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Using Group Functions in a Subquery ENAME JOB SAL ---------- --------- --------- SMITH CLERK 800"
      },
      {
        "title": "Lab8 Block 5 — Slide 10: HAVING Clause with Subqueries",
        "language": "sql",
        "code": "SQL> SELECT deptno, MIN(sal)\n2 FROM emp\n3 GROUP BY deptno\n4 HAVING MIN(sal) >\n5 (SELECT MIN(sal)\n6 FROM emp\n7 WHERE deptno = 20);",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "The Oracle Server executes subqueries first. The Oracle Server returns results into the HAVING clause of the main query."
      },
      {
        "title": "Lab8 Block 6 — Slide 11: What Is Wrong",
        "language": "sql",
        "code": "SQL> SELECT empno, ename\n2 FROM emp\n3 WHERE sal =\n4 (SELECT MIN(sal)\n5 FROM emp\n6 GROUP BY deptno);",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "What Is Wrong with This Statement? ERROR: ORA-01427: single-row subquery returns more than one row no rows selected Single-row operator with multiple-row subquery"
      },
      {
        "title": "Lab8 Block 7 — Slide 12: Will This Statement Work?",
        "language": "sql",
        "code": "SQL> SELECT ename, job\n2 FROM emp\n3 WHERE job =\n4 (SELECT job\n5 FROM emp\n6 WHERE ename='SMYTHE');",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "no rows selected Subquery returns no values"
      },
      {
        "title": "Lab8 Block 8 — Slide 14: Using ANY Operator",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, job\n2 FROM emp\n3 WHERE sal < ANY\n4 (SELECT sal\n5 FROM emp\n6 WHERE job = 'CLERK')\n7 AND job <> 'CLERK';",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Using ANY Operator in Multiple-Row Subqueries EMPNO ENAME JOB --------- ---------- --------- 7654 MARTIN SALESMAN 7521 WARD SALESMAN > ANY: more than the MIN, < ANY: Less than the MAX = ANY is equivalent to IN"
      },
      {
        "title": "Lab8 Block 9 — Slide 15: Using ALL Operator",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, job\n2 FROM emp\n3 WHERE sal > ALL\n4 (SELECT avg(sal)\n5 FROM emp\n6 GROUP BY deptno);",
        "what": "Retrieves grouped or aggregate results using group functions.",
        "notes": "Using ALL Operator in Multiple-Row Subqueries EMPNO ENAME JOB --------- ---------- --------- 7839 KING PRESIDENT 7566 JONES MANAGER 7902 FORD ANALYST 7788 SCOTT ANALYST > ALL: more than the MAX, < ALL: Less than the MIN"
      },
      {
        "title": "Lab8 Block 10 — Slide 16: Copying Rows",
        "language": "sql",
        "code": "SQL> INSERT INTO managers(id, name, salary, hiredate)\n2 SELECT empno, ename, sal, hiredate\n3 FROM emp\n4 WHERE job = 'MANAGER';\n3 rows created.",
        "what": "Inserts rows into the target table using values returned by a subquery.",
        "notes": "Copying Rows from Another Table Write your INSERT statement with a subquery. Do not use the VALUES clause. Match the number of columns in the INSERT clause to those in the subquery."
      },
      {
        "title": "Lab8 Block 11 — Slide 17: Updating with",
        "language": "sql",
        "code": "SQL> UPDATE emp\n2 SET (job, deptno) =\n3 (SELECT job, deptno\n4 FROM emp\n5 WHERE empno = 7499)\n6 WHERE empno = 7698;\n1 row updated.",
        "what": "Updates rows using values or conditions produced by a subquery.",
        "notes": "Updating with Multiple-Column Subquery"
      },
      {
        "title": "Lab8 Block 12 — Slide 18: Updating Rows Based",
        "language": "sql",
        "code": "SQL> UPDATE employee\n2 SET deptno = (SELECT deptno\n3 FROM emp\n4 WHERE empno = 7788)\n5 WHERE job = (SELECT job\n6 FROM emp\n7 WHERE empno = 7788);\n2 rows updated.",
        "what": "Updates rows using values or conditions produced by a subquery.",
        "notes": "Updating Rows Based on Another Table Use subqueries in UPDATE statements to update rows in a table based on values from another table."
      },
      {
        "title": "Lab8 Block 13 — Slide 19: Deleting Rows Based",
        "language": "sql",
        "code": "SQL> DELETE FROM employee\n2 WHERE deptno =\n3 (SELECT deptno\n4 FROM dept\n5 WHERE dname ='SALES');\n6 rows deleted.",
        "what": "Deletes rows based on a subquery condition.",
        "notes": "Deleting Rows Based on Another Table Use subqueries in DELETE statements to remove rows from a table based on values from another table."
      },
      {
        "title": "Lab8 Block 14 — Slide 20: Summary",
        "language": "sql",
        "code": "SELECT select_list\nFROM table\nWHERE expr operator\n(SELECT select_list\nFROM table);",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Subqueries are useful when a query is based on unknown values."
      }
    ]
  },
  {
    "id": "Lab9",
    "title": "Single-Row Functions",
    "sourceFile": "Lab Manual 9 (Single-Row Functions)(1).pptx",
    "type": "lab",
    "blocks": [
      {
        "title": "Lab9 Block 1 — Slide 9: Using Case Conversion Functions",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, deptno\n2 FROM emp\n3 WHERE ename = 'blake';\nno rows selected",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Display the employee number, name, and department number for employee Blake. EMPNO ENAME DEPTNO --------- ---------- --------- 7698 BLAKE 30"
      },
      {
        "title": "Lab9 Block 2 — Slide 9: Using Case Conversion Functions",
        "language": "sql",
        "code": "SQL> SELECT empno, ename, deptno\n2 FROM emp\n3 WHERE ename = UPPER('blake');",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "Display the employee number, name, and department number for employee Blake. EMPNO ENAME DEPTNO --------- ---------- --------- 7698 BLAKE 30"
      },
      {
        "title": "Lab9 Block 3 — Slide 11: Using the Character Manipulation Functions",
        "language": "sql",
        "code": "SQL> SELECT ename, CONCAT (ename, job), LENGTH(ename),\n2 INSTR(ename, 'A')\n3 FROM emp\n4 WHERE",
        "what": "Retrieves rows that satisfy the WHERE condition.",
        "notes": "SUBSTR(job,1,5) = 'SALES'; ENAME CONCAT(ENAME,JOB) LENGTH(ENAME) INSTR(ENAME,'A') ---------- ------------------- ------------- ---------------- MARTIN MARTINSALESMAN 6 2 ALLEN ALLENSALESMAN 5 1 TURNER TURNERSALESMAN 6 0 WARD WARDSALESMAN 4 2"
      },
      {
        "title": "Lab9 Block 4 — Slide 13: SQL> SELECT ename, sal, comm, (sal*12)+NVL(comm,0)",
        "language": "sql",
        "code": "SQL> SELECT ename, sal, comm, (sal*12)+NVL(comm,0)\n2 FROM emp;",
        "what": "Retrieves the selected column values from the listed table.",
        "notes": "Using the NVL Function ENAME SAL COMM (SAL*12)+NVL(COMM,0) ---------- --------- --------- -------------------- KING 5000 60000 BLAKE 2850 34200 CLARK 2450 29400 JONES 2975 35700 MARTIN 1250 1400 16400 ALLEN 1600 300 19500 ... 14 rows selected."
      }
    ]
  },
  {
    "id": "Ch01",
    "title": "Databases and Database Users",
    "sourceFile": "CH01 Databases and Database Users(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — Databases and Database Users",
        "lines": [
          "- Databases and Database Users"
        ]
      },
      {
        "title": "Slide 3 — OUTLINE",
        "lines": [
          "- **Types of Databases and Database Applications**",
          "  - Basic Definitions",
          "  - Typical DBMS Functionality",
          "  - Example of a Database (UNIVERSITY)",
          "  - Main Characteristics of the Database Approach",
          "  - Types of Database Users",
          "  - Advantages of Using the Database Approach",
          "  - When Not to Use Databases"
        ]
      },
      {
        "title": "Slide 4 — Types of Databases and Database Applications",
        "lines": [
          "- **Traditional Applications:**",
          "  - Numeric and Textual Databases",
          "  - More Recent Applications:",
          "  - Multimedia Databases",
          "  - Geographic Information Systems (GIS)",
          "  - Recent Developments",
          "  - Social Networks started capturing a lot of information about communications among people-posts such as: Facebook, Twitter, Linked-In",
          "  - A large amount of data now resides on the “cloud” which means it is in huge data centers using thousands of machines."
        ]
      },
      {
        "title": "Slide 5 — Basic Definitions",
        "lines": [
          "- **Database:**",
          "  - A collection of related data.",
          "  - Data:",
          "  - Known facts that can be recorded and have an implicit meaning.",
          "  - Mini-world:",
          "  - Some part of the real world about which data is stored in a database. For example, student grades and transcripts at a university.",
          "  - Database Management System (DBMS):",
          "  - A software package/ system to facilitate the creation and maintenance of a computerized database.",
          "  - Database System:",
          "  - The DBMS software together with the data itself. Sometimes, the applications are also included."
        ]
      },
      {
        "title": "Slide 6 — Simplified database system environment",
        "lines": [
          "- Simplified database system environment"
        ]
      },
      {
        "title": "Slide 7 — Typical DBMS Functionality",
        "lines": [
          "- **Define a particular database in terms of its data types, structures, and constraints**",
          "  - Construct or Load the initial database contents on a secondary storage medium",
          "  - Manipulating the database:",
          "  - Retrieval: Querying, generating reports",
          "  - Modification: Insertions, deletions and updates to its content",
          "  - Accessing the database through Web applications",
          "  - Processing and Sharing by a set of concurrent users and application programs – yet, keeping all data valid and consistent"
        ]
      },
      {
        "title": "Slide 8 — Application Activities Against a Database",
        "lines": [
          "- **Applications interact with a database by generating**",
          "  - - Queries: that access different parts of data and formulate the result of a request",
          "  - - Transactions: that may read some data and “update” certain values or generate new data and store that in the database",
          "  - Applications must not allow unauthorized users to access data and must keep up with changing user requirements against the database"
        ]
      },
      {
        "title": "Slide 9 — Additional DBMS Functionality",
        "lines": [
          "- **DBMS may additionally provide:**",
          "  - Protection or Security measures to prevent unauthorized access",
          "  - Presentation and Visualization of data",
          "  - Maintenance of the database and associated programs over the lifetime of the database application",
          "  - Called database, software, and system maintenance"
        ]
      },
      {
        "title": "Slide 10 — Example of a Database",
        "lines": [
          "- Example of a Database",
          "- (with a Conceptual Data Model)",
          "- **Mini-world for the example:**",
          "  - Part of a UNIVERSITY environment.",
          "  - Some mini-world entities:",
          "  - STUDENTs",
          "  - COURSEs",
          "  - SECTIONs (of COURSEs)",
          "  - (academic) DEPARTMENTs",
          "  - INSTRUCTORs"
        ]
      },
      {
        "title": "Slide 11 — Example of a Database",
        "lines": [
          "- Example of a Database",
          "- (with a Conceptual Data Model)",
          "- **Some mini-world relationships:**",
          "  - SECTIONs are of specific COURSEs",
          "  - STUDENTs take SECTIONs",
          "  - COURSEs have prerequisite COURSEs",
          "  - INSTRUCTORs teach SECTIONs",
          "  - COURSEs are offered by DEPARTMENTs",
          "  - STUDENTs major in DEPARTMENTs",
          "  - Note: The above entities and relationships are typically expressed in a conceptual data model, such as the ENTITY-RELATIONSHIP data model (see Chapters 3, 4)"
        ]
      },
      {
        "title": "Slide 12 — Example of a simple database",
        "lines": [
          "- Example of a simple database"
        ]
      },
      {
        "title": "Slide 13 — Main Characteristics of the Database Approach",
        "lines": [
          "- **Self-describing nature of a database system:**",
          "  - A DBMS catalog stores the description of a particular database (e.g. data structures, types, and constraints)",
          "  - The description is called meta-data.",
          "  - This allows the DBMS software to work with different database applications.",
          "  - Insulation between programs and data:",
          "  - The structure of data files is stored in the DBMS catalog",
          "  - separately from the access programs. (i.e. separating programs from data details)",
          "  - Insulation properties:",
          "  - Program-data independence and",
          "  - Program-operation independence"
        ]
      },
      {
        "title": "Slide 14 — Main Characteristics of the Database Approach",
        "lines": [
          "- Program-data independence: allows changing data structures and storage organization without having to change the DBMS access programs.",
          "- Program-operation independence",
          "- Application programs can operate on the data by invoking the operations through their names and arguments, regardless of how the operations are implemented.",
          "- An operation (function) is specified in two parts.",
          "- The operation name and Its arguments (or parameters)",
          "- The characteristic that allows program-data independence and program-operation independence is called data abstraction"
        ]
      },
      {
        "title": "Slide 15 — Example of a simplified database catalog",
        "lines": [
          "- A data abstraction used to hide storage details and present the users with a conceptual view of the database.",
          "- DB catalog example:"
        ]
      },
      {
        "title": "Slide 16 — Main Characteristics of the Database Approach (continued)",
        "lines": [
          "- **Support of multiple views of the data:**",
          "  - Each user may see a different view of the database, which describes only the data of interest to that user.",
          "  - Sharing of data and multi-user transaction processing:",
          "  - Allowing a set of concurrent users to retrieve from and to update the database.",
          "  - Concurrency control within the DBMS guarantees that each transaction is correctly executed or aborted",
          "  - Recovery subsystem ensures each completed transaction has its effect permanently recorded in the database"
        ]
      },
      {
        "title": "Slide 17 — Database Users",
        "lines": [
          "- **Users may be divided into:**",
          "  - Actors on the Scene",
          "  - Those who actually use and control the database content, and those who design, develop and maintain database applications and",
          "  - Actors Behind the Scene",
          "  - Those who design and develop the DBMS software and related tools, and the computer systems operators."
        ]
      },
      {
        "title": "Slide 18 — Database Users – Actors on the Scene",
        "lines": [
          "- **Database administrators:**",
          "  - Responsible for authorizing access to the database, for coordinating and monitoring its use, acquiring software and hardware resources, controlling its use and monitoring efficiency of operations.",
          "  - Database Designers:",
          "  - Responsible to define the content, the structure, the constraints, and functions or transactions against the database. They must communicate with the end-users and understand their needs."
        ]
      },
      {
        "title": "Slide 19 — Database Users – Actors on the Scene Cont.",
        "lines": [
          "- **System Analysts:**",
          "  - They understand the user requirements of naïve and sophisticated users and design applications including canned transactions to meet those requirements.",
          "  - Application Programmers:",
          "  - Implement the specifications developed by analysts and test and debug them before deployment.",
          "  - Business Analysts:",
          "  - Analyze vast amounts of business data and real-time data (“Big Data”) for better decision making related to planning, advertising, marketing etc.",
          "  - End-users: They use the data for queries, reports and some of them update the database content."
        ]
      },
      {
        "title": "Slide 20 — Database Users – Actors behind the Scene",
        "lines": [
          "- System Designers and Implementors: Design and implement DBMS packages in the form of modules and interfaces and test and debug them. The DBMS must interface with applications, language compilers, operating system components, etc.",
          "- Tool Developers: Design and implement software systems called tools for modeling and designing databases, performance monitoring, prototyping, test data generation, user interface creation, simulation etc. that facilitate building of applications and allow using database effectively.",
          "- Operators and Maintenance Personnel: They manage the actual running and maintenance of the database system hardware and software environment."
        ]
      },
      {
        "title": "Slide 21 — Advantages of Using the Database Approach",
        "lines": [
          "- **Controlling redundancy**",
          "  - Redundancy (Storing the same data multiple times) leads to several problems:",
          "  - The need to perform a single logical update multiple times",
          "  - Storage space is wasted",
          "  - Files that represent the same data may become inconsistent.",
          "  - Sharing of data among multiple users.",
          "  - Restricting unauthorized access to data. Only the DBA staff uses privileged commands and facilities.",
          "  - Providing Storage Structures (e.g. indexes) for efficient Query Processing – see Chapter 17."
        ]
      },
      {
        "title": "Slide 22 — Advantages of Using the Database Approach (continued)",
        "lines": [
          "- **Providing optimization of queries for efficient processing.**",
          "  - Providing backup and recovery services.",
          "  - Enforcing integrity constraints on the database.",
          "  - Potential for enforcing standards:",
          "  - This is very crucial for the success of database applications in large organizations. Standards refer to data item names, display formats, screens, report structures, meta-data (description of data), Web page layouts, etc.",
          "  - Reduced application development time:",
          "  - Incremental time to add each new application is reduced."
        ]
      },
      {
        "title": "Slide 23 — When not to use a DBMS",
        "lines": [
          "- **Initial costs of using a DBMS:**",
          "  - High initial investment and possible need for additional hardware.",
          "  - Overhead for providing generality, security, concurrency control, recovery, and integrity functions.",
          "  - The overheads of a DBMS refer to additional resources or operations required by the system, which are not directly related to storing and retrieving data.",
          "  - When a DBMS may be unnecessary:",
          "  - If the database and applications are simple, well defined, and not expected to change.",
          "  - If access to data by multiple users is not required.",
          "  - When a DBMS is not used:",
          "  - If there are strict requirements for real-time that may not be met because of DBMS overhead",
          "  - If the database users need special operations not supported by the DBMS (e.g., GIS and location based services)."
        ]
      },
      {
        "title": "Slide 24 — Chapter Summary",
        "lines": [
          "- **Types of Databases and Database Applications**",
          "  - Basic Definitions",
          "  - Typical DBMS Functionality",
          "  - Example of a Database (UNIVERSITY)",
          "  - Main Characteristics of the Database Approach",
          "  - Types of Database Users",
          "  - Advantages of Using the Database Approach",
          "  - When Not to Use Databases"
        ]
      }
    ]
  },
  {
    "id": "Ch02",
    "title": "Database System Concepts and Architecture",
    "sourceFile": "CH02 Database System Concepts and Architecture(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — Database System Concepts",
        "lines": [
          "- Database System Concepts",
          "- and Architecture"
        ]
      },
      {
        "title": "Slide 3 — Outline",
        "lines": [
          "- **Data Models and Their Categories**",
          "  - Schemas, Instances, and States",
          "  - Three-Schema Architecture",
          "  - Data Independence",
          "  - DBMS Languages and Interfaces",
          "  - Database System Utilities and Tools",
          "  - Centralized and Client-Server Architectures",
          "  - Classification of DBMSs"
        ]
      },
      {
        "title": "Slide 4 — Data Models",
        "lines": [
          "- **Data Model:**",
          "  - A set of concepts to describe the structure of a database, the operations for manipulating these structures, and certain constraints that the database should obey.",
          "  - Data Model Structure and Constraints:",
          "  - Constructs are used to define the database structure",
          "  - Constructs typically include groups of elements (e.g. entity, record, table), and relationships among such groups",
          "  - Constraints specify some restrictions on valid data; these constraints must be enforced at all times.",
          "  - A data model is the main tool for providing some level of data abstraction by hiding details of data storage that are not needed by most database users"
        ]
      },
      {
        "title": "Slide 5 — Categories of Data Models",
        "lines": [
          "- **Conceptual (high-level, semantic) data models:**",
          "  - Provide concepts that are close to the way many users perceive data. (Also called entity-based (ER) or object-based data models.)",
          "  - Physical (low-level, internal) data models:",
          "  - Provide concepts that describe details of how data is stored in the computer.",
          "  - Implementation (representational) data models:",
          "  - Provide concepts that fall between the above two, used by many commercial DBMS implementations (e.g. relational data models used in many commercial systems, network model and hierarchical model)."
        ]
      },
      {
        "title": "Slide 6 — Schemas versus Instances",
        "lines": [
          "- **Database Schema:**",
          "  - The description of a database.",
          "  - Includes descriptions of the database structure, data types, and the constraints on the database.",
          "  - Schema Diagram:",
          "  - An illustrative display of (most aspects of) a database schema.",
          "  - Schema Construct:",
          "  - A component of the schema or an object within the schema, e.g., STUDENT, COURSE."
        ]
      },
      {
        "title": "Slide 7 — Schemas versus Instances",
        "lines": [
          "- **Database State:**",
          "  - The actual data stored in a database at a particular moment in time. This includes the collection of all the data in the database.",
          "  - Also called database instance (or occurrence or snapshot).",
          "  - The term instance is also applied to individual database components, e.g. record instance, table instance, entity instance"
        ]
      },
      {
        "title": "Slide 8 — Database Schema",
        "lines": [
          "- Database Schema",
          "- vs. Database State",
          "- **Database State:**",
          "  - Refers to the content of a database at a moment in time.",
          "  - Initial Database State:",
          "  - Refers to the database state when it is initially loaded into the system.",
          "  - Valid State:",
          "  - A state that satisfies the structure and constraints of the database."
        ]
      },
      {
        "title": "Slide 9 — Database Schema",
        "lines": [
          "- Database Schema",
          "- vs. Database State (continued)",
          "- **Distinction**",
          "  - The database schema changes very infrequently.",
          "  - The database state changes every time the database is updated.",
          "  - Schema is also called intension.",
          "  - State is also called extension."
        ]
      },
      {
        "title": "Slide 10 — Example of a Database Schema",
        "lines": [
          "- Example of a Database Schema"
        ]
      },
      {
        "title": "Slide 11 — Example of a database state",
        "lines": [
          "- Example of a database state"
        ]
      },
      {
        "title": "Slide 12 — The three-schema architecture",
        "lines": [
          "- The three-schema architecture"
        ]
      },
      {
        "title": "Slide 13 — Three-Schema Architecture",
        "lines": [
          "- **Proposed to support DBMS characteristics of:**",
          "  - Program-data independence.",
          "  - Support of multiple views of the data.",
          "  - Not explicitly used in commercial DBMS products, but has been useful in explaining database system organization"
        ]
      },
      {
        "title": "Slide 14 — Three-Schema Architecture",
        "lines": [
          "- **Defines DBMS schemas at three levels:**",
          "  - Internal schema at the internal level to describe physical storage structures and access paths (e.g. indexes).",
          "  - Typically uses a physical data model.",
          "  - Conceptual schema at the conceptual level to describe the structure and constraints for the whole database for a community of users.",
          "  - Uses a conceptual or an implementation data model.",
          "  - This level describes what data is stored in the database, the relationships among the data, and the constraints on the data",
          "  - External schemas at the external level to describe the various user views.",
          "  - This level describes the part of the database that is relevant to each user."
        ]
      },
      {
        "title": "Slide 15 — Three-Schema Architecture",
        "lines": [
          "- **Mapping: is the processes of transforming requests and results between levels.**",
          "  - Programs refer to an external schema, and are mapped by the DBMS to the internal schema for execution.",
          "  - Data extracted from the internal DBMS level is reformatted to match the user’s external view (e.g. formatting the results of an SQL query for display in a Web page)"
        ]
      },
      {
        "title": "Slide 16 — Data Independence",
        "lines": [
          "- Data Independence: The capacity to change the schema at one level of a database system without having to change the schema at the next higher level.",
          "- Logical Data Independence:",
          "- The capacity to change the conceptual schema without having to change the external schemas and their associated application programs.",
          "- Physical Data Independence:",
          "- The capacity to change the internal schema without having to change the conceptual schema.",
          "- For example, the internal schema may be changed when certain file structures are reorganized or new indexes are created to improve database performance."
        ]
      },
      {
        "title": "Slide 17 — Data Independence (continued)",
        "lines": [
          "- When a schema at a lower level is changed, only the mappings between this schema and higher-level schemas need to be changed in a DBMS that fully supports data independence.",
          "- The higher-level schemas themselves are unchanged.",
          "- Hence, the application programs need not be changed since they refer to the external schemas."
        ]
      },
      {
        "title": "Slide 18 — DBMS Languages",
        "lines": [
          "- **Data Definition Language (DDL):**",
          "  - Used by the DBA and database designers to specify the conceptual schema of a database.",
          "  - In many DBMSs, the DDL is also used to define internal and external schemas (views).",
          "  - It refers to SQL commands used to create, modify, and delete database structures such as tables, indexes, and views."
        ]
      },
      {
        "title": "Slide 19 — DBMS Languages",
        "lines": [
          "- **Data Manipulation Language (DML):**",
          "  - Used to specify database retrievals and updates",
          "  - DML commands (data sublanguage) can be embedded in a general-purpose programming language (host language), such as COBOL, C,",
          "  - C++, or Java.",
          "  - A library of functions can also be provided to access the DBMS from a programming language",
          "  - Alternatively, stand-alone DML commands can be applied directly (called a query language)."
        ]
      },
      {
        "title": "Slide 20 — Centralized and Client-Server DBMS Architectures",
        "lines": [
          "- **Centralized DBMS:**",
          "  - Combines everything into single system including- DBMS software, hardware, application programs, and user interface processing software.",
          "  - All processing is done at centralized site.",
          "  - Client-Server DBMS:",
          "  - Data is stored on a central server, but clients connect to that server in order to access and manipulate the data"
        ]
      },
      {
        "title": "Slide 21 — Classification of DBMSs",
        "lines": [
          "- **Based on the data model used:**",
          "  - Hierarchical Model",
          "  - It organizes records in the form of tree structure",
          "  - Network Model",
          "  - It organizes records in the form of directed graphs",
          "  - Relational Model",
          "  - It organizes records in the form of tables.",
          "  - Proposed in 1970 by E.F. Codd (IBM), first commercial system in 1981-82.",
          "  - Now in several commercial products (e.g. DB2, ORACLE, MS SQL Server, SYBASE, INFORMIX)."
        ]
      },
      {
        "title": "Slide 22 — Database Models",
        "lines": [
          "- Database Models"
        ]
      },
      {
        "title": "Slide 23 — Classification of DBMSs",
        "lines": [
          "- **Based on the number of users:**",
          "  - Single-user:",
          "  - Support only one user at a time and are mostly used with PCs.",
          "  - Multi-user:",
          "  - Support concurrent multiple users.",
          "  - Include the majority of DBMSs,",
          "  - Based on the number of sites:",
          "  - Centralized (uses a single computer with one database)",
          "  - Distributed (multiple computers, multiple DBs)"
        ]
      },
      {
        "title": "Slide 24 — Chapter Summary",
        "lines": [
          "- **Data Models and Their Categories**",
          "  - Schemas, Instances, and States",
          "  - Three-Schema Architecture",
          "  - Data Independence",
          "  - DBMS Languages and Interfaces",
          "  - Database System Utilities and Tools",
          "  - Centralized and Client-Server Architectures",
          "  - Classification of DBMSs"
        ]
      }
    ]
  },
  {
    "id": "Ch03",
    "title": "Data Modeling Using the Entity-Relationship (ER) Model",
    "sourceFile": "CH03 Data Modeling Using the Entity-Relationship (ER) Model(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — Data Modeling Using the",
        "lines": [
          "- Data Modeling Using the",
          "- Entity-Relationship (ER) Model"
        ]
      },
      {
        "title": "Slide 3 — Chapter Outline",
        "lines": [
          "- **Overview of Database Design Process**",
          "  - Example Database Application (COMPANY)",
          "  - ER Model Concepts",
          "  - Entities and Attributes",
          "  - Entity Types, Value Sets, and Key Attributes",
          "  - Relationships and Relationship Types",
          "  - Weak Entity Types",
          "  - Roles and Attributes in Relationship Types",
          "  - ER Diagrams - Notation",
          "  - ER Diagram for COMPANY Schema",
          "  - Alternative Notations – UML class diagrams, others",
          "  - Relationships of Higher Degree"
        ]
      },
      {
        "title": "Slide 4 — Overview of Database Design Process",
        "lines": [
          "- **Two main activities:**",
          "  - Database design",
          "  - Applications design",
          "  - The database design process is the step-by-step method used to design the structure of a database from user requirements to actual implementation.",
          "  - Applications design focuses on the programs and interfaces that access the database (Generally considered part of software engineering)."
        ]
      },
      {
        "title": "Slide 5 — Example COMPANY Database",
        "lines": [
          "- We need to create a database schema design based on the following (simplified) requirements of the COMPANY Database:",
          "- The company is organized into DEPARTMENTs. Each department has a name, unique number and an employee who manages the department. We keep track of the start date of the department manager. A department may have several locations.",
          "- Each department controls a number of PROJECTs. Each project has a name, unique number and is located at a single location."
        ]
      },
      {
        "title": "Slide 6 — Example COMPANY Database (Continued)",
        "lines": [
          "- The database will store each EMPLOYEE’s social security number, address, salary, sex, and birthdate.",
          "- Each employee works for one department but may work on several projects.",
          "- The DB will keep track of the number of hours per week that an employee currently works on each project.",
          "- It is required to keep track of the direct supervisor of each employee.",
          "- Each employee may have a number of DEPENDENTs.",
          "- For each dependent, the DB keeps a record of name, sex, birthdate, and relationship to the employee."
        ]
      },
      {
        "title": "Slide 7 — ER Model Concepts",
        "lines": [
          "- **Entities and Attributes**",
          "  - Entity is a basic concept for the ER model. Entities are specific things or objects in the mini-world that are represented in the database.",
          "  - For example the EMPLOYEE John Smith, the Research DEPARTMENT, the ProductX PROJECT",
          "  - Attributes are properties used to describe an entity.",
          "  - For example an EMPLOYEE entity may have the attributes Name, SSN, Address, Sex, BirthDate",
          "  - A specific entity will have a value for each of its attributes.",
          "  - For example a specific employee entity may have Name='John Smith', SSN='123456789', Address ='731, Fondren, Houston, TX', Sex='M', BirthDate='09-JAN-55‘",
          "  - Each attribute has a value set (or data type) associated with it – e.g. integer, string, date, enumerated type, …"
        ]
      },
      {
        "title": "Slide 8 — Types of Attributes (1)",
        "lines": [
          "- **Simple**",
          "  - Each entity has a single atomic value for the attribute. For example, SSN or Sex.",
          "  - Composite",
          "  - The attribute may be composed of several components. For example:",
          "  - Address(Apt#, House#, Street, City, State, ZipCode, Country), or",
          "  - Name(FirstName, MiddleName, LastName).",
          "  - Composition may form a hierarchy where some components are themselves composite.",
          "  - Multi-valued",
          "  - An entity may have multiple values for that attribute. For example, Color of a CAR or Telephone no.",
          "  - Denoted as {Color} or {Telephone no}.",
          "  - Derived attribute",
          "  - a piece of data that is calculated from other attributes in a database, rather than being stored directly"
        ]
      },
      {
        "title": "Slide 9 — Types of Attributes (2)",
        "lines": [
          "- In general, composite and multi-valued attributes may be nested arbitrarily to any number of levels, although this is rare.",
          "- For example, Address could be composite and multi-valued attribute denoted by",
          "- {Address (City, Street)}"
        ]
      },
      {
        "title": "Slide 10 — Example of a composite attribute",
        "lines": [
          "- Example of a composite attribute"
        ]
      },
      {
        "title": "Slide 11 — Entity Types and Key Attributes (1)",
        "lines": [
          "- **Entities with the same basic attributes are grouped or typed into an entity type.**",
          "  - For example, the entity type EMPLOYEE and PROJECT.",
          "  - An attribute of an entity type for which each entity must have a unique value is called a key attribute of the entity type.",
          "  - For example, SSN of EMPLOYEE."
        ]
      },
      {
        "title": "Slide 12 — Entity Types and Key Attributes (2)",
        "lines": [
          "- **A key attribute may be composite.**",
          "  - VehicleTagNumber is a key of the CAR entity type with components (Number, State).",
          "  - An entity type may have more than one key.",
          "  - The CAR entity type may have two keys:",
          "  - VehicleIdentificationNumber (popularly called VIN)",
          "  - VehicleTagNumber (Number, State), aka license plate number.",
          "  - Each key is underlined (Note: this is different from the relational schema where only one “primary key is underlined)."
        ]
      },
      {
        "title": "Slide 13 — Entity Set",
        "lines": [
          "- **Each entity type will have a collection of entities stored in the database**",
          "  - Called the entity set or sometimes entity collection",
          "  - Previous slide shows three CAR entity instances in the entity set for CAR",
          "  - Same name (CAR) used to refer to both the entity type and the entity set",
          "  - However, entity type and entity set may be given different names",
          "  - Entity set is the current state of the entities of that type that are stored in the database"
        ]
      },
      {
        "title": "Slide 14 — Value Sets (Domains) of Attributes",
        "lines": [
          "- **Each simple attribute is associated with a value set**",
          "  - E.g., Lastname has a value which is a character string of upto 15 characters, say",
          "  - Date has a value consisting of MM-DD-YYYY where each letter is an integer",
          "  - A value set specifies the set of values associated with an attribute"
        ]
      },
      {
        "title": "Slide 15 — Attributes and Value Sets",
        "lines": [
          "- Value sets are similar to data types in most programming languages – e.g., integer, character (n), real, bit",
          "- Mathematically, an attribute A for an entity type E whose value set is V is defined as a function",
          "- A : E -> P(V)",
          "- Where P(V) indicates a power set (which means all possible subsets) of V. The above definition covers simple and multivalued attributes.",
          "- We refer to the value of attribute A for entity e as A(e)."
        ]
      },
      {
        "title": "Slide 16 — Displaying an Entity type",
        "lines": [
          "- **In ER diagrams, an entity type is displayed in a rectangular box**",
          "  - Attributes are displayed in ovals",
          "  - Each attribute is connected to its entity type",
          "  - Components of a composite attribute are connected to the oval representing the composite attribute",
          "  - Each key attribute is underlined",
          "  - Multivalued attributes displayed in double ovals",
          "  - See the full ER notation in advance on the next slide"
        ]
      },
      {
        "title": "Slide 17 — NOTATION for ER diagrams",
        "lines": [
          "- NOTATION for ER diagrams"
        ]
      },
      {
        "title": "Slide 18 — Entity Type CAR with two keys and a corresponding Entity Set",
        "lines": [
          "- Entity Type CAR with two keys and a corresponding Entity Set"
        ]
      },
      {
        "title": "Slide 19 — Initial Conceptual Design of Entity Types for the COMPANY Database Schema",
        "lines": [
          "- **Based on the requirements, we can identify four initial entity types in the COMPANY database:**",
          "  - DEPARTMENT",
          "  - PROJECT",
          "  - EMPLOYEE",
          "  - DEPENDENT",
          "  - Their initial conceptual design is shown on the following slide",
          "  - The initial attributes shown are derived from the requirements description"
        ]
      },
      {
        "title": "Slide 20 — Initial Design of Entity Types:",
        "lines": [
          "- Initial Design of Entity Types:",
          "- EMPLOYEE, DEPARTMENT, PROJECT, DEPENDENT"
        ]
      },
      {
        "title": "Slide 21 — Refining the initial design by introducing relationships",
        "lines": [
          "- **The initial design is typically not complete**",
          "  - Some aspects in the requirements will be represented as relationships",
          "  - ER model has three main concepts:",
          "  - Entities (and their entity types and entity sets)",
          "  - Attributes (simple, composite, multivalued)",
          "  - Relationships (and their relationship types and relationship sets)",
          "  - We introduce relationship concepts next"
        ]
      },
      {
        "title": "Slide 22 — Relationships and Relationship Types (1)",
        "lines": [
          "- **A relationship relates two or more distinct entities with a specific meaning.**",
          "  - For example, EMPLOYEE John Smith works on the ProductX PROJECT, or EMPLOYEE Franklin Wong manages the Research DEPARTMENT.",
          "  - Relationships of the same type are grouped or typed into a relationship type.",
          "  - For example, the WORKS_ON relationship type in which EMPLOYEEs and PROJECTs participate, or the MANAGES relationship type in which EMPLOYEEs and DEPARTMENTs participate.",
          "  - The degree of a relationship type is the number of participating entity types.",
          "  - Both MANAGES and WORKS_ON are binary relationships."
        ]
      },
      {
        "title": "Slide 23 — Relationship instances of the WORKS_FOR N:1 relationship between EMPLOYEE and DEPARTMENT",
        "lines": [
          "- Relationship instances of the WORKS_FOR N:1 relationship between EMPLOYEE and DEPARTMENT"
        ]
      },
      {
        "title": "Slide 24 — Relationship instances of the M:N WORKS_ON relationship between EMPLOYEE and PROJECT",
        "lines": [
          "- Relationship instances of the M:N WORKS_ON relationship between EMPLOYEE and PROJECT"
        ]
      },
      {
        "title": "Slide 25 — Relationship type vs. relationship set (1)",
        "lines": [
          "- **Relationship Type:**",
          "  - Is the schema description of a relationship",
          "  - Identifies the relationship name and the participating entity types",
          "  - Also identifies certain relationship constraints",
          "  - Relationship Set:",
          "  - The current set of relationship instances represented in the database",
          "  - The current state of a relationship type"
        ]
      },
      {
        "title": "Slide 26 — Relationship type vs. relationship set (2)",
        "lines": [
          "- **Previous figures displayed the relationship sets**",
          "  - Each instance in the set relates individual participating entities – one from each participating entity type",
          "  - In ER diagrams, we represent the relationship type as follows:",
          "  - Diamond-shaped box is used to display a relationship type",
          "  - Connected to the participating entity types via straight lines",
          "  - Note that the relationship type is not shown with an arrow. The name should be typically be readable from left to right and top to bottom."
        ]
      },
      {
        "title": "Slide 27 — Refining the COMPANY database schema by introducing relationships",
        "lines": [
          "- **By examining the requirements, six relationship types are identified**",
          "  - All are binary relationships( degree 2)",
          "  - Listed below with their participating entity types:",
          "  - WORKS_FOR (between EMPLOYEE, DEPARTMENT)",
          "  - MANAGES (also between EMPLOYEE, DEPARTMENT)",
          "  - CONTROLS (between DEPARTMENT, PROJECT)",
          "  - WORKS_ON (between EMPLOYEE, PROJECT)",
          "  - SUPERVISION (between EMPLOYEE (as subordinate), EMPLOYEE (as supervisor))",
          "  - DEPENDENTS_OF (between EMPLOYEE, DEPENDENT)"
        ]
      },
      {
        "title": "Slide 28 — ER DIAGRAM – Relationship Types are:",
        "lines": [
          "- ER DIAGRAM – Relationship Types are:",
          "- WORKS_FOR, MANAGES, WORKS_ON, CONTROLS, SUPERVISION, DEPENDENTS_OF"
        ]
      },
      {
        "title": "Slide 29 — Discussion on Relationship Types",
        "lines": [
          "- In the refined design, some attributes from the initial entity types are refined into relationships:",
          "- Manager of DEPARTMENT -> MANAGES",
          "- Works_on of EMPLOYEE -> WORKS_ON",
          "- Department of EMPLOYEE -> WORKS_FOR",
          "- etc",
          "- In general, more than one relationship type can exist between the same participating entity types",
          "- MANAGES and WORKS_FOR are distinct relationship types between EMPLOYEE and DEPARTMENT",
          "- Different meanings and different relationship instances."
        ]
      },
      {
        "title": "Slide 30 — Constraints on Relationships",
        "lines": [
          "- **Constraints on Relationship Types**",
          "  - (Also known as ratio constraints)",
          "  - The cardinality ratio is express the number of entities to which another entity can be associated via a relationship set",
          "  - Cardinality Ratio (specifies maximum participation):",
          "  - One-to-one (1:1)",
          "  - One-to-many (1:N) or Many-to-one (N:1)",
          "  - Many-to-many (M:N)",
          "  - Existence Dependency Constraint (specifies minimum participation) (also called participation constraint)",
          "  - zero (optional participation, not existence-dependent)",
          "  - one or more (mandatory participation, existence-dependent)"
        ]
      },
      {
        "title": "Slide 31 — Many-to-one (N:1) Relationship",
        "lines": [
          "- Many-to-one (N:1) Relationship"
        ]
      },
      {
        "title": "Slide 32 — Many-to-many (M:N) Relationship",
        "lines": [
          "- Many-to-many (M:N) Relationship"
        ]
      },
      {
        "title": "Slide 33 — Recursive Relationship Type",
        "lines": [
          "- **A relationship type between the same participating entity type in distinct roles**",
          "  - Also called a self-referencing relationship type.",
          "  - Example: the SUPERVISION relationship",
          "  - EMPLOYEE participates twice in two distinct roles:",
          "  - supervisor (or boss) role",
          "  - supervisee (or subordinate) role",
          "  - Each relationship instance relates two distinct EMPLOYEE entities:",
          "  - One employee in supervisor role",
          "  - One employee in supervisee role"
        ]
      },
      {
        "title": "Slide 34 — Displaying a recursive relationship",
        "lines": [
          "- **In a recursive relationship type.**",
          "  - Both participations are same entity type in different roles.",
          "  - For example, SUPERVISION relationships between EMPLOYEE (in role of supervisor or boss) and (another) EMPLOYEE (in role of subordinate or worker).",
          "  - In following figure, first role participation labeled with 1 and second role participation labeled with 2.",
          "  - In ER diagram, need to display role names to distinguish participations."
        ]
      },
      {
        "title": "Slide 35 — A Recursive Relationship Supervision`",
        "lines": [
          "- A Recursive Relationship Supervision`"
        ]
      },
      {
        "title": "Slide 36 — Recursive Relationship Type is: SUPERVISION",
        "lines": [
          "- Recursive Relationship Type is: SUPERVISION",
          "- (participation role names are shown)"
        ]
      },
      {
        "title": "Slide 37 — Weak Entity Types",
        "lines": [
          "- An entity that does not have a key attribute and that is identification-dependent on another entity type.",
          "- A weak entity must participate in an identifying relationship type with an owner or identifying entity type",
          "- Entities are identified by the combination of:",
          "- A partial key of the weak entity type",
          "- The particular entity they are related to in the identifying relationship type",
          "- Example:",
          "- A DEPENDENT entity is identified by the dependent’s first name, and the specific EMPLOYEE with whom the dependent is related",
          "- Name of DEPENDENT is the partial key",
          "- DEPENDENT is a weak entity type",
          "- EMPLOYEE is its identifying entity type via the identifying relationship type DEPENDENT_OF"
        ]
      },
      {
        "title": "Slide 38 — Attributes of Relationship types",
        "lines": [
          "- **A relationship type can have attributes:**",
          "  - For example, HoursPerWeek of WORKS_ON",
          "  - Its value for each relationship instance describes the number of hours per week that an EMPLOYEE works on a PROJECT.",
          "  - A value of HoursPerWeek depends on a particular (employee, project) combination",
          "  - Most relationship attributes are used with M:N relationships",
          "  - In 1:N relationships, they can be transferred to the entity type on the N-side of the relationship"
        ]
      },
      {
        "title": "Slide 39 — Example Attribute of a Relationship Type:",
        "lines": [
          "- Example Attribute of a Relationship Type:",
          "- Hours of WORKS_ON"
        ]
      },
      {
        "title": "Slide 40 — Notation for Constraints on Relationships",
        "lines": [
          "- **Cardinality ratio (of a binary relationship): 1:1, 1:N, N:1, or M:N**",
          "  - Shown by placing appropriate numbers on the relationship edges.",
          "  - Participation constraint (on each participating entity type): total (called existence dependency) or partial.",
          "  - Total shown by double line, partial by single line.",
          "  - NOTE: These are easy to specify for Binary Relationship Types."
        ]
      },
      {
        "title": "Slide 41 — Alternative diagrammatic notation",
        "lines": [
          "- **ER diagrams is one popular example for displaying database schemas**",
          "  - Many other notations exist in the literature and in various database design and modeling tools",
          "  - Appendix A illustrates some of the alternative notations that have been used",
          "  - UML class diagrams is representative of another way of displaying ER concepts that is used in several commercial design tools"
        ]
      },
      {
        "title": "Slide 42 — Summary of notation for ER diagrams",
        "lines": [
          "- Summary of notation for ER diagrams"
        ]
      },
      {
        "title": "Slide 43 — UML class diagrams",
        "lines": [
          "- **Represent classes (similar to entity types) as large rounded boxes with three sections:**",
          "  - Top section includes entity type (class) name",
          "  - Second section includes attributes",
          "  - Third section includes class operations (operations are not in basic ER model)",
          "  - Relationships (called associations) represented as lines connecting the classes",
          "  - Other UML terminology also differs from ER terminology",
          "  - Used in database design and object-oriented software design",
          "  - UML has many other types of diagrams for software design"
        ]
      },
      {
        "title": "Slide 44 — UML class diagram for COMPANY database schema",
        "lines": [
          "- UML class diagram for COMPANY database schema"
        ]
      },
      {
        "title": "Slide 45 — Relationships of Higher Degree",
        "lines": [
          "- **Relationship types of degree 2 are called binary**",
          "  - Relationship types of degree 3 are called ternary and of degree n are called n-ary",
          "  - In general, an n-ary relationship is not equivalent to n binary relationships",
          "  - Constraints are harder to specify for higher-degree relationships (n > 2) than for binary relationships"
        ]
      },
      {
        "title": "Slide 46 — Discussion of n-ary relationships (n > 2)",
        "lines": [
          "- In general, 3 binary relationships can represent different information than a single ternary relationship (see Figure 3.17a and b on next slide)",
          "- If needed, the binary and n-ary relationships can all be included in the schema design (see Figure 3.17a and b, where all relationships convey different meanings)",
          "- In some cases, a ternary relationship can be represented as a weak entity if the data model allows a weak entity type to have multiple identifying relationships (and hence multiple owner entity types) (see Figure 3.17c)"
        ]
      },
      {
        "title": "Slide 47 — Example of a ternary relationship",
        "lines": [
          "- Example of a ternary relationship"
        ]
      },
      {
        "title": "Slide 48 — Discussion of n-ary relationships (n > 2)",
        "lines": [
          "- If a particular binary relationship can be derived from a higher-degree relationship at all times, then it is redundant",
          "- For example, the TAUGHT_DURING binary relationship in Figure 3.18 (see next slide) can be derived from the ternary relationship OFFERS (based on the meaning of the relationships)"
        ]
      },
      {
        "title": "Slide 49 — Another example of a ternary relationship",
        "lines": [
          "- Another example of a ternary relationship"
        ]
      },
      {
        "title": "Slide 50 — Chapter Summary",
        "lines": [
          "- **ER Model Concepts: Entities, attributes, relationships**",
          "  - Constraints in the ER model",
          "  - Using ER in step-by-step mode conceptual schema design for the COMPANY database",
          "  - ER Diagrams - Notation",
          "  - Alternative Notations – UML class diagrams, others",
          "  - Binary Relationship types and those of higher degree."
        ]
      }
    ]
  },
  {
    "id": "Ch05",
    "title": "The Relational Data Model and Relational Database Constraints",
    "sourceFile": "CH05 The Relational Data Model and Relational Database Constraints(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — The Relational Data Model and Relational Database Constraints",
        "lines": [
          "- The Relational Data Model and Relational Database Constraints"
        ]
      },
      {
        "title": "Slide 3 — Chapter Outline",
        "lines": [
          "- **Relational Model Concepts**",
          "  - Relational Model Constraints and Relational Database Schemas",
          "  - Update Operations and Dealing with Constraint Violations"
        ]
      },
      {
        "title": "Slide 4 — Relational Model Concepts",
        "lines": [
          "- **The relational Model of Data is based on the concept of a Relation**",
          "  - The strength of the relational approach to data management comes from the formal foundation provided by the theory of relations",
          "  - A Relation is a mathematical concept based on the ideas of sets"
        ]
      },
      {
        "title": "Slide 5 — Informal Definitions",
        "lines": [
          "- **Informally, a relation looks like a table of values.**",
          "  - A relation typically contains a set of rows.",
          "  - The data elements in each row represent certain facts",
          "  - that correspond to a real-world entity or relationship",
          "  - In the formal model, rows are called tuples",
          "  - Each column has a column header that gives an indication of the meaning of the data items in that column",
          "  - In the formal model, the column header is called an",
          "  - attribute name (or just attribute)"
        ]
      },
      {
        "title": "Slide 6 — Example of a Relation",
        "lines": [
          "- Example of a Relation"
        ]
      },
      {
        "title": "Slide 7 — Informal Definitions",
        "lines": [
          "- **Key of a Relation:**",
          "  - A key is an attribute (or a set of attributes) used to uniquely identify a record (row) in a table",
          "  - In the STUDENT table (Figure 5.1), SSN is the key",
          "  - Sometimes row-ids or sequential numbers are assigned as keys to identify the rows in a table",
          "  - Called artificial key or surrogate key"
        ]
      },
      {
        "title": "Slide 8 — Formal Definitions - Schema",
        "lines": [
          "- **The Schema (or description) of a Relation:**",
          "  - Denoted by R(A1, A2, .....An)",
          "  - R is the name of the relation",
          "  - The attributes of the relation are A1, A2, ..., An",
          "  - Example:",
          "  - CUSTOMER (Cust-id, Cust-name, Address, Phone)",
          "  - CUSTOMER is the relation name",
          "  - Defined over the four attributes: Cust-id, Cust-name, Address, Phone",
          "  - Each attribute has a domain or a set of valid values.",
          "  - For example, the domain of Cust-id is 6 digit numbers."
        ]
      },
      {
        "title": "Slide 9 — Formal Definitions - Tuple",
        "lines": [
          "- **A tuple is an ordered set of values (enclosed in angled brackets ‘< … >’)**",
          "  - Each value is derived from an appropriate domain.",
          "  - A row in the CUSTOMER relation is a 4-tuple and would consist of four values, for example:",
          "  - <632895, \"John Smith\", \"101 Main St. Atlanta, GA 30332\", \"(404) 894-2000\">",
          "  - This is called a 4-tuple as it has 4 values",
          "  - A tuple (row) in the CUSTOMER relation.",
          "  - A relation is a set of such tuples (rows)"
        ]
      },
      {
        "title": "Slide 10 — Formal Definitions - Domain",
        "lines": [
          "- **A domain is the set of allowed values that an attribute (column) can have in a database table.**",
          "  - It defines what type of data, range, and format are acceptable",
          "  - Examples",
          "  - Age",
          "  - Domain: integers from 0 to 120",
          "  - Valid values: 18, 25, 60",
          "  - Invalid values: -5, 200, “twenty”",
          "  - Gender",
          "  - Domain: {Male, Female}",
          "  - Valid values: Male",
          "  - Invalid values: Unknown, 1"
        ]
      },
      {
        "title": "Slide 11 — Formal Definitions - State",
        "lines": [
          "- **The relation state is a subset of the Cartesian product of the domains of its attributes**",
          "  - each domain contains the set of all possible values the attribute can take.",
          "  - Example: attribute Cust-name is defined over the domain of character strings of maximum length 25",
          "  - dom(Cust-name) is varchar(25)",
          "  - The role these strings play in the CUSTOMER relation is that of the name of a customer."
        ]
      },
      {
        "title": "Slide 12 — Formal Definitions - Summary",
        "lines": [
          "- **Formally,**",
          "  - Given R(A1, A2, .........., An)",
          "  - r(R)  dom (A1) X dom (A2) X ....X dom(An)",
          "  - R(A1, A2, …, An) is the schema of the relation",
          "  - R is the name of the relation",
          "  - A1, A2, …, An are the attributes of the relation",
          "  - r(R): a specific state (or \"value\" or “population”) of relation R – this is a set of tuples (rows)",
          "  - r(R) = {t1, t2, …, tn} where each ti is an n-tuple",
          "  - ti = <v1, v2, …, vn> where each vj element-of dom(Aj)"
        ]
      },
      {
        "title": "Slide 13 — Formal Definitions - Example",
        "lines": [
          "- **Let R(A1, A2) be a relation schema:**",
          "  - Let dom(A1) = {0,1}",
          "  - Let dom(A2) = {a,b,c}",
          "  - Then: dom(A1) X dom(A2) is all possible combinations:",
          "  - {<0,a> , <0,b> , <0,c>, <1,a>, <1,b>, <1,c> }",
          "  - The relation state r(R)  dom(A1) X dom(A2)",
          "  - For example: r(R) could be {<0,a> , <0,b> , <1,c> }",
          "  - this is one possible state (or “population” or “extension”) r of the relation R, defined over A1 and A2.",
          "  - It has three 2-tuples: <0,a> , <0,b> , <1,c>"
        ]
      },
      {
        "title": "Slide 14 — Definition Summary",
        "lines": [
          "- Definition Summary"
        ]
      },
      {
        "title": "Slide 15 — Example – A relation STUDENT",
        "lines": [
          "- Example – A relation STUDENT"
        ]
      },
      {
        "title": "Slide 16 — Characteristics Of Relations",
        "lines": [
          "- **Ordering of tuples in a relation r(R):**",
          "  - The tuples are not considered to be ordered, even though they appear to be in the tabular form.",
          "  - Ordering of attributes in a relation schema R (and of values within each tuple):",
          "  - We will consider the attributes in R(A1, A2, ..., An) and the values in t=<v1, v2, ..., vn> to be ordered .",
          "  - (However, a more general alternative definition of relation does not require this ordering. It includes both the name and the value for each of the attributes ).",
          "  - Example: t= { <name, “John” >, <SSN, 123456789> }",
          "  - This representation may be called as “self-describing”."
        ]
      },
      {
        "title": "Slide 17 — Same state as previous Figure (but with different order of tuples)",
        "lines": [
          "- Same state as previous Figure (but with different order of tuples)"
        ]
      },
      {
        "title": "Slide 18 — Characteristics Of Relations",
        "lines": [
          "- **Values in a tuple:**",
          "  - All values are considered atomic (indivisible).",
          "  - Each value in a tuple must be from the domain of the attribute for that column",
          "  - If tuple t = <v1, v2, …, vn> is a tuple (row) in the relation state r of R(A1, A2, …, An)",
          "  - Then each vi must be a value from dom(Ai)",
          "  - A special null value is used to represent values that are:",
          "  - unknown or",
          "  - not available or",
          "  - inapplicable in certain tuples."
        ]
      },
      {
        "title": "Slide 19 — Characteristics Of Relations",
        "lines": [
          "- **Notation:**",
          "  - We refer to component values of a tuple t by:",
          "  - t[Ai] or t.Ai",
          "  - This is the value vi of attribute Ai for tuple t",
          "  - Similarly, t[Au, Av, ..., Aw] refers to the subtuple of t containing the values of attributes Au, Av, ..., Aw, respectively in t"
        ]
      },
      {
        "title": "Slide 20 — CONSTRAINTS",
        "lines": [
          "- **Constraints determine which values are allowed and which are not in the database.**",
          "  - They are of three main types:",
          "  - 1. Inherent or Implicit Constraints: These are based on the data model itself. (E.g., relational model does not allow a list as a value for any attribute)",
          "  - 2. Schema-based or Explicit Constraints: They are expressed in the schema by using the facilities provided by the model. (E.g., max. cardinality ratio constraint in the ER model)",
          "  - 3. Application based or semantic constraints: These are beyond the expressive power of the model and must be specified and enforced by the application programs."
        ]
      },
      {
        "title": "Slide 21 — Relational Integrity Constraints",
        "lines": [
          "- **Constraints are conditions that must hold on all valid relation states.**",
          "  - There are three main types of (explicit schema-based) constraints that can be expressed in the relational model:",
          "  - Key constraints",
          "  - Entity integrity constraints",
          "  - Referential integrity constraints",
          "  - Another schema-based constraint is the domain constraint",
          "  - Every value in a tuple must be from the domain of its attribute (or it could be null, if allowed for that attribute)"
        ]
      },
      {
        "title": "Slide 22 — Key Constraints",
        "lines": [
          "- **Superkey of R:**",
          "  - Is a set of attributes SK of R with the following condition:",
          "  - No two tuples in any valid relation state r(R) will have the same value for SK",
          "  - That is, for any distinct tuples t1 and t2 in r(R), t1[SK]  t2[SK]",
          "  - This condition must hold in any valid state r(R)",
          "  - Key of R:",
          "  - A \"minimal\" superkey",
          "  - That is, a key is a superkey K such that removal of any attribute from K results in a set of attributes that is not a superkey (does not possess the superkey uniqueness property)",
          "  - A Key is a Superkey but not vice versa"
        ]
      },
      {
        "title": "Slide 23 — Key Constraints (continued)",
        "lines": [
          "- **Example: Consider the CAR relation schema:**",
          "  - CAR(State, RegNo, SerialNo, Make, Model, Year)",
          "  - CAR has two keys:",
          "  - Key1 = {State, RegNo}",
          "  - Key2 = {SerialNo}",
          "  - Both are also superkeys of CAR",
          "  - {SerialNo, Make} is a superkey but not a key.",
          "  - In general:",
          "  - Any key is a superkey (but not vice versa)",
          "  - Any set of attributes that includes a key is a superkey",
          "  - A minimal superkey is also a key (Does not have redundant attributes)"
        ]
      },
      {
        "title": "Slide 24 — Key Constraints (continued)",
        "lines": [
          "- **If a relation has several candidate keys, one is chosen arbitrarily to be the primary key.**",
          "  - The primary key attributes are underlined.",
          "  - Example: Consider the CAR relation schema:",
          "  - CAR(State, Reg#, SerialNo, Make, Model, Year)",
          "  - We chose SerialNo as the primary key",
          "  - The primary key value is used to uniquely identify each tuple in a relation",
          "  - Provides the tuple identity",
          "  - Also used to reference the tuple from another tuple",
          "  - General rule: Choose as primary key the smallest of the candidate keys (in terms of size)"
        ]
      },
      {
        "title": "Slide 25 — CAR table with two candidate keys – LicenseNumber chosen as Primary Key",
        "lines": [
          "- CAR table with two candidate keys – LicenseNumber chosen as Primary Key"
        ]
      },
      {
        "title": "Slide 26 — Relational Database Schema",
        "lines": [
          "- **Relational Database Schema:**",
          "  - A set S of relation schemas that belong to the same database.",
          "  - S is the name of the whole database schema",
          "  - S = {R1, R2, ..., Rn} and a set IC of integrity constraints.",
          "  - R1, R2, …, Rn are the names of the individual relation schemas within the database S",
          "  - Following slide shows a COMPANY database schema with 6 relation schemas"
        ]
      },
      {
        "title": "Slide 27 — COMPANY Database Schema",
        "lines": [
          "- COMPANY Database Schema"
        ]
      },
      {
        "title": "Slide 28 — Relational Database State",
        "lines": [
          "- A relational database state DB of S is a set of relation states DB = {r1, r2, ..., rm} such that each ri is a state of Ri and such that the ri relation states satisfy the integrity constraints specified in IC.",
          "- A relational database state is sometimes called a relational database snapshot or instance.",
          "- We will not use the term instance since it also applies to single tuples.",
          "- A database state that does not meet the constraints is an invalid state"
        ]
      },
      {
        "title": "Slide 29 — Populated database state",
        "lines": [
          "- **Each relation will have many tuples in its current relation state**",
          "  - The relational database state is a union of all the individual relation states",
          "  - Whenever the database is changed, a new state arises",
          "  - Basic operations for changing the database:",
          "  - INSERT a new tuple in a relation",
          "  - DELETE an existing tuple from a relation",
          "  - MODIFY an attribute of an existing tuple",
          "  - Next slide (Fig. 5.6) shows an example state for the COMPANY database schema shown in Fig. 5.5."
        ]
      },
      {
        "title": "Slide 30 — Populated database state for COMPANY",
        "lines": [
          "- Populated database state for COMPANY"
        ]
      },
      {
        "title": "Slide 31 — Entity Integrity",
        "lines": [
          "- **Entity Integrity:**",
          "  - The primary key attributes PK of each relation schema R in S cannot have null values in any tuple of r(R).",
          "  - This is because primary key values are used to identify the individual tuples.",
          "  - t[PK]  null for any tuple t in r(R)",
          "  - If PK has several attributes, null is not allowed in any of these attributes",
          "  - Note: Other attributes of R may be constrained to disallow null values, even though they are not members of the primary key."
        ]
      },
      {
        "title": "Slide 32 — Referential Integrity",
        "lines": [
          "- **A constraint involving two relations**",
          "  - The previous constraints involve a single relation.",
          "  - Used to specify a relationship among tuples in two relations:",
          "  - The referencing relation and the referenced relation."
        ]
      },
      {
        "title": "Slide 33 — Referential Integrity",
        "lines": [
          "- Tuples in the referencing relation R1 have attributes FK (called foreign key attributes) that reference the primary key attributes PK of the referenced relation R2.",
          "- A tuple t1 in R1 is said to reference a tuple t2 in R2 if t1[FK] = t2[PK].",
          "- A referential integrity constraint can be displayed in a relational database schema as a directed arc from R1.FK to R2."
        ]
      },
      {
        "title": "Slide 34 — Referential Integrity (or foreign key)",
        "lines": [
          "- Referential Integrity (or foreign key)",
          "- Constraint",
          "- **Statement of the constraint**",
          "  - The value in the foreign key column (or columns) FK of the the referencing relation R1 can be either:",
          "  - (1) a value of an existing primary key value of a corresponding primary key PK in the referenced relation R2, or",
          "  - (2) a null.",
          "  - In case (2), the FK in R1 should not be a part of its own primary key."
        ]
      },
      {
        "title": "Slide 35 — Displaying a relational database schema and its constraints",
        "lines": [
          "- **Each relation schema can be displayed as a row of attribute names**",
          "  - The name of the relation is written above the attribute names",
          "  - The primary key attribute (or attributes) will be underlined",
          "  - A foreign key (referential integrity) constraints is displayed as a directed arc (arrow) from the foreign key attributes to the referenced table",
          "  - Can also point the the primary key of the referenced relation for clarity",
          "  - Next slide shows the COMPANY relational schema diagram with referential integrity constraints"
        ]
      },
      {
        "title": "Slide 36 — Referential Integrity Constraints for COMPANY database",
        "lines": [
          "- Referential Integrity Constraints for COMPANY database"
        ]
      },
      {
        "title": "Slide 37 — Other Types of Constraints",
        "lines": [
          "- **Semantic Integrity Constraints:**",
          "  - based on application semantics and cannot be expressed by the model per se",
          "  - Example: “the max. no. of hours per employee for all projects he or she works on is 56 hrs per week”",
          "  - A constraint specification language may have to be used to express these",
          "  - Keys, Permissibility of Null values, Candidate Keys (Unique in SQL), Foreign Keys, Referential Integrity etc. are expressed by the CREATE TABLE statement in SQL."
        ]
      },
      {
        "title": "Slide 38 — Update Operations on Relations",
        "lines": [
          "- **INSERT a tuple.**",
          "  - DELETE a tuple.",
          "  - MODIFY a tuple.",
          "  - Integrity constraints should not be violated by the update operations.",
          "  - Several update operations may have to be grouped together.",
          "  - Updates may propagate to cause other updates automatically. This may be necessary to maintain integrity constraints."
        ]
      },
      {
        "title": "Slide 39 — Update Operations on Relations",
        "lines": [
          "- **In case of integrity violation, several actions can be taken:**",
          "  - Cancel the operation that causes the violation (RESTRICT or REJECT option)",
          "  - Perform the operation but inform the user of the violation",
          "  - Trigger additional updates so the violation is corrected (CASCADE option, SET NULL option)",
          "  - Execute a user-specified error-correction routine"
        ]
      },
      {
        "title": "Slide 40 — Possible violations for each operation",
        "lines": [
          "- **INSERT may violate any of the constraints:**",
          "  - Domain constraint:",
          "  - if one of the attribute values provided for the new tuple is not of the specified attribute domain",
          "  - Key constraint:",
          "  - if the value of a key attribute in the new tuple already exists in another tuple in the relation",
          "  - Referential integrity:",
          "  - if a foreign key value in the new tuple references a primary key value that does not exist in the referenced relation",
          "  - Entity integrity:",
          "  - if the primary key value is null in the new tuple"
        ]
      },
      {
        "title": "Slide 41 — Possible violations for each operation",
        "lines": [
          "- **DELETE may violate only referential integrity:**",
          "  - If the primary key value of the tuple being deleted is referenced from other tuples in the database",
          "  - Can be remedied by several actions: RESTRICT, CASCADE, SET NULL (see Chapter 6 for more details)",
          "  - RESTRICT option: reject the deletion",
          "  - CASCADE option: propagate the new primary key value into the foreign keys of the referencing tuples",
          "  - SET NULL option: set the foreign keys of the referencing tuples to NULL",
          "  - One of the above options must be specified during database design for each foreign key constraint"
        ]
      },
      {
        "title": "Slide 42 — Possible violations for each operation",
        "lines": [
          "- **UPDATE may violate domain constraint and NOT NULL constraint on an attribute being modified**",
          "  - Any of the other constraints may also be violated, depending on the attribute being updated:",
          "  - Updating the primary key (PK):",
          "  - Similar to a DELETE followed by an INSERT",
          "  - Need to specify similar options to DELETE",
          "  - Updating a foreign key (FK):",
          "  - May violate referential integrity",
          "  - Updating an ordinary attribute (neither PK nor FK):",
          "  - Can only violate domain constraints"
        ]
      },
      {
        "title": "Slide 43 — Insert Operation Example",
        "lines": [
          "- **Example (DEPTCODE is the key):**",
          "  - INSERT INTO DEPARTMENT",
          "  - Values (‘SWE’, ‘Software Eng.’);"
        ]
      },
      {
        "title": "Slide 44 — Possible INSERT Operation Violations",
        "lines": [
          "- **Domain constraint violation:**",
          "  - Example: INSERT <1234, ‘Software Eng.’> INTO DEPARTMENT",
          "  - Key constraint violation:",
          "  - Example: INSERT <‘COE’, ‘Software Eng.’> INTO DEPARTMENT",
          "  - Entity Integrity constraint violation:",
          "  - Example: INSERT <null, ‘Software Eng.’> INTO DEPARTMENT"
        ]
      },
      {
        "title": "Slide 45 — Delete Operation Example (1)",
        "lines": [
          "- DELETE FROM department WHERE deptcode = ‘SWE’;"
        ]
      },
      {
        "title": "Slide 46 — Delete Operation Example (2)",
        "lines": [
          "- **DELETE FROM lecturer WHERE LID = 111;**",
          "  - Can't delete because of F.K. Const."
        ]
      },
      {
        "title": "Slide 47 — Delete Operation Example (2)",
        "lines": [
          "- UPDATE lecturer set lname = ‘Adam’ WHERE LID = 111;"
        ]
      },
      {
        "title": "Slide 48 — Delete Operation Example (2)",
        "lines": [
          "- **UPDATE lecturer SET lid = 111 WHERE LID = 222;**",
          "  - Violates primary key constraint because the new value 111 already exists in the lecturer table . It also violates referential integrity constraint because there are foreign keys which refer to 222."
        ]
      },
      {
        "title": "Slide 49 — Summary",
        "lines": [
          "- **Presented Relational Model Concepts**",
          "  - Definitions",
          "  - Characteristics of relations",
          "  - Discussed Relational Model Constraints and Relational Database Schemas",
          "  - Domain constraints",
          "  - Key constraints",
          "  - Entity integrity",
          "  - Referential integrity",
          "  - Described the Relational Update Operations and Dealing with Constraint Violations"
        ]
      }
    ]
  },
  {
    "id": "Ch09",
    "title": "Relational Database Design by ER to Relational Mapping",
    "sourceFile": "CH09 Relational Database Design by ER to Relational Mapping(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — Relational Database Design by ER to Relational Mapping",
        "lines": [
          "- Relational Database Design by ER to Relational Mapping"
        ]
      },
      {
        "title": "Slide 3 — Chapter Outline",
        "lines": [
          "- **ER-to-Relational Mapping Algorithm**",
          "  - Step 1: Mapping of Regular Entity Types",
          "  - Step 2: Mapping of Weak Entity Types",
          "  - Step 3: Mapping of Binary 1:1 Relation Types",
          "  - Step 4: Mapping of Binary 1:N Relationship Types.",
          "  - Step 5: Mapping of Binary M:N Relationship Types.",
          "  - Step 6: Mapping of Multivalued attributes.",
          "  - Step 7: Mapping of N-ary Relationship Types."
        ]
      },
      {
        "title": "Slide 4 — GOALS during Mapping",
        "lines": [
          "- **Preserve all information (that includes all attributes)**",
          "  - Maintain the constraints to the extent possible (Relational Model cannot preserve all constraints- e.g., max cardinality ratio such as 1:10 in ER; exhaustive classification into subtypes, e.g., STUDENTS are specialized into Domestic and Foreign)",
          "  - Minimize null values"
        ]
      },
      {
        "title": "Slide 5 — ER-to-Relational Mapping Algorithm",
        "lines": [
          "- **Step 1: Mapping of Regular Entity Types.**",
          "  - For each regular (strong) entity type E in the ER schema, create a relation R that includes all the simple attributes of E.",
          "  - Choose one of the key attributes of E as the primary key for R.",
          "  - If the chosen key of E is composite, the set of simple attributes that form it will together form the primary key of R.",
          "  - Example: We create the relations EMPLOYEE, DEPARTMENT, and PROJECT in the relational schema corresponding to the regular entities in the ER diagram.",
          "  - SSN, DNUMBER, and PNUMBER are the primary keys for the relations EMPLOYEE, DEPARTMENT, and PROJECT as shown."
        ]
      },
      {
        "title": "Slide 6 — Figure 9.1 The ER conceptual schema diagram for the COMPANY database.",
        "lines": [
          "- Figure 9.1 The ER conceptual schema diagram for the COMPANY database."
        ]
      },
      {
        "title": "Slide 7 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 2: Mapping of Weak Entity Types**",
          "  - For each weak entity type W in the ER schema with owner entity type E, create a relation R & include all simple attributes (or simple components of composite attributes) of W as attributes of R.",
          "  - Also, include as foreign key attributes of R the primary key attribute(s) of the relation(s) that correspond to the owner entity type(s).",
          "  - The primary key of R is the combination of the primary key(s) of the owner(s) and the partial key of the weak entity type W, if any.",
          "  - Example: Create the relation DEPENDENT in this step to correspond to the weak entity type DEPENDENT.",
          "  - Include the primary key SSN of the EMPLOYEE relation as a foreign key attribute of DEPENDENT (renamed to ESSN).",
          "  - The primary key of the DEPENDENT relation is the combination {ESSN, DEPENDENT_NAME} because DEPENDENT_NAME is the partial key of DEPENDENT."
        ]
      },
      {
        "title": "Slide 8 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 3: Mapping of Binary 1:1 Relation Types**",
          "  - For each binary 1:1 relationship type R in the ER schema, identify the relations S and T that correspond to the entity types participating in R.",
          "  - There are three possible approaches:",
          "  - Foreign Key ( 2 relations) approach: Choose one of the relations-say S-and include a foreign key in S the primary key of T. It is better to choose an entity type with total participation in R in the role of S.",
          "  - Example: 1:1 relation MANAGES is mapped by choosing the participating entity type DEPARTMENT to serve in the role of S, because its participation in the MANAGES relationship type is total.",
          "  - Merged relation (1 relation) option: An alternate mapping of a 1:1 relationship type is possible by merging the two entity types and the relationship into a single relation. This may be appropriate when both participations are total.",
          "  - Cross-reference or relationship relation ( 3 relations) option: The third alternative is to set up a third relation R for the purpose of cross-referencing the primary keys of the two relations S and T representing the entity types."
        ]
      },
      {
        "title": "Slide 9 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 4: Mapping of Binary 1:N Relationship Types.**",
          "  - For each regular binary 1:N relationship type R, identify the relation S that represent the participating entity type at the N-side of the relationship type.",
          "  - Include as foreign key in S the primary key of the relation T that represents the other entity type participating in R.",
          "  - Include any simple attributes of the 1:N relation type as attributes of S.",
          "  - Example: 1:N relationship types WORKS_FOR, CONTROLS, and SUPERVISION in the figure.",
          "  - For WORKS_FOR we include the primary key DNUMBER of the DEPARTMENT relation as foreign key in the EMPLOYEE relation and call it DNO."
        ]
      },
      {
        "title": "Slide 10 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 5: Mapping of Binary M:N Relationship Types.**",
          "  - For each regular binary M:N relationship type R, create a new relation S to represent R. This is a relationship relation.",
          "  - Include as foreign key attributes in S the primary keys of the relations that represent the participating entity types; their combination will form the primary key of S.",
          "  - Also include any simple attributes of the M:N relationship type (or simple components of composite attributes) as attributes of S.",
          "  - Example: The M:N relationship type WORKS_ON from the ER diagram is mapped by creating a relation WORKS_ON in the relational database schema.",
          "  - The primary keys of the PROJECT and EMPLOYEE relations are included as foreign keys in WORKS_ON and renamed PNO and ESSN, respectively.",
          "  - Attribute HOURS in WORKS_ON represents the HOURS attribute of the relation type. The primary key of the WORKS_ON relation is the combination of the foreign key attributes {ESSN, PNO}."
        ]
      },
      {
        "title": "Slide 11 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 6: Mapping of Multivalued attributes.**",
          "  - For each multivalued attribute A, create a new relation R.",
          "  - This relation R will include an attribute corresponding to A, plus the primary key attribute K-as a foreign key in R-of the relation that represents the entity type of relationship type that has A as an attribute.",
          "  - The primary key of R is the combination of A and K. If the multivalued attribute is composite, we include its simple components.",
          "  - Example: The relation DEPT_LOCATIONS is created.",
          "  - The attribute DLOCATION represents the multivalued attribute LOCATIONS of DEPARTMENT, while DNUMBER-as foreign key-represents the primary key of the DEPARTMENT relation.",
          "  - The primary key of R is the combination of {DNUMBER, DLOCATION}."
        ]
      },
      {
        "title": "Slide 12 — ER-to-Relational Mapping Algorithm (contd.)",
        "lines": [
          "- **Step 7: Mapping of N-ary Relationship Types.**",
          "  - For each n-ary relationship type R, where n>2, create a new relationship S to represent R.",
          "  - Include as foreign key attributes in S the primary keys of the relations that represent the participating entity types.",
          "  - Also include any simple attributes of the n-ary relationship type (or simple components of composite attributes) as attributes of S.",
          "  - Example: The relationship type SUPPY in the ER on the next slide.",
          "  - This can be mapped to the relation SUPPLY shown in the relational schema, whose primary key is the combination of the three foreign keys {SNAME, PARTNO, PROJNAME}"
        ]
      },
      {
        "title": "Slide 13 — Figure 9.2 Result of mapping the COMPANY ER schema into a relational database schema.",
        "lines": [
          "- Figure 9.2 Result of mapping the COMPANY ER schema into a relational database schema."
        ]
      },
      {
        "title": "Slide 14 — FIGURE 3.17",
        "lines": [
          "- FIGURE 3.17",
          "- TERNARY RELATIONSHIP: SUPPLY"
        ]
      },
      {
        "title": "Slide 15 — Mapping the n-ary relationship type SUPPLY",
        "lines": [
          "- Mapping the n-ary relationship type SUPPLY"
        ]
      },
      {
        "title": "Slide 16 — Summary of Mapping constructs and constraints",
        "lines": [
          "- Summary of Mapping constructs and constraints"
        ]
      },
      {
        "title": "Slide 17 — Chapter Summary",
        "lines": [
          "- **ER-to-Relational Mapping Algorithm**",
          "  - Step 1: Mapping of Regular Entity Types",
          "  - Step 2: Mapping of Weak Entity Types",
          "  - Step 3: Mapping of Binary 1:1 Relation Types",
          "  - Step 4: Mapping of Binary 1:N Relationship Types.",
          "  - Step 5: Mapping of Binary M:N Relationship Types.",
          "  - Step 6: Mapping of Multivalued attributes.",
          "  - Step 7: Mapping of N-ary Relationship Types."
        ]
      }
    ]
  },
  {
    "id": "Ch14",
    "title": "Basics of Functional Dependencies and Normalization for Relational Databases",
    "sourceFile": "CH14 Basics of Functional Dependencies and Normalization for Relational Databases(1).pptx",
    "type": "chapter",
    "blocks": [
      {
        "title": "Slide 2 — Basics of Functional Dependencies and Normalization for Relational Databases",
        "lines": [
          "- Basics of Functional Dependencies and Normalization for Relational Databases"
        ]
      },
      {
        "title": "Slide 3 — Chapter Outline",
        "lines": [
          "- **1 Informal Design Guidelines for Relational Databases**",
          "  - 1.1 Semantics of the Relation Attributes",
          "  - 1.2 Redundant Information in Tuples and Update Anomalies",
          "  - 1.3 Null Values in Tuples",
          "  - 2 Functional Dependencies (FDs)",
          "  - 2.1 Definition of Functional Dependency",
          "  - 2.2 Inferencing Rules"
        ]
      },
      {
        "title": "Slide 4 — Chapter Outline",
        "lines": [
          "- **3 Normal Forms Based on Primary Keys**",
          "  - 3.1 Normalization of Relations",
          "  - 3.2 Practical Use of Normal Forms",
          "  - 3.3 Definitions of Keys and Attributes Participating in Keys",
          "  - 3.4 First Normal Form",
          "  - 3.5 Second Normal Form",
          "  - 3.6 Third Normal Form",
          "  - 4 General Normal Form Definitions for 2NF and 3NF (For Multiple Candidate Keys)",
          "  - 5 BCNF (Boyce-Codd Normal Form)"
        ]
      },
      {
        "title": "Slide 5 — 1. Informal Design Guidelines for Relational Databases (1)",
        "lines": [
          "- **What is relational database design?**",
          "  - The grouping of attributes to form \"good\" relation schemas",
          "  - Two levels of relation schemas",
          "  - The logical \"user view\" level",
          "  - The storage \"base relation\" level",
          "  - Design is concerned mainly with base relations",
          "  - What are the criteria for \"good\" base relations?"
        ]
      },
      {
        "title": "Slide 6 — Informal Design Guidelines for Relational Databases (2)",
        "lines": [
          "- **We first discuss informal guidelines for good relational design**",
          "  - Then we discuss formal concepts of functional dependencies and normal forms",
          "  - - 1NF (First Normal Form)",
          "  - - 2NF (Second Normal Form)",
          "  - - 3NF (Third Normal Form)",
          "  - - BCNF (Boyce-Codd Normal Form)"
        ]
      },
      {
        "title": "Slide 7 — 1.1 Semantics of the Relational Attributes must be clear",
        "lines": [
          "- GUIDELINE 1: Informally, each tuple in a relation should represent one entity or relationship instance. (Applies to individual relations and their attributes).",
          "- Attributes of different entities (EMPLOYEEs, DEPARTMENTs, PROJECTs) should not be mixed in the same relation",
          "- Only foreign keys should be used to refer to other entities",
          "- Entity and relationship attributes should be kept apart as much as possible.",
          "- Bottom Line: Design a schema that can be explained easily relation by relation. The semantics of attributes should be easy to interpret."
        ]
      },
      {
        "title": "Slide 8 — Figure 14.1 A simplified COMPANY relational database schema",
        "lines": [
          "- Figure 14.1 A simplified COMPANY relational database schema."
        ]
      },
      {
        "title": "Slide 9 — 1.2 Redundant Information in Tuples and Update Anomalies",
        "lines": [
          "- **Information is stored redundantly**",
          "  - Wastes storage",
          "  - Causes problems with update anomalies",
          "  - Insertion anomalies",
          "  - Deletion anomalies",
          "  - Modification anomalies",
          "  - Example of bad DB design:"
        ]
      },
      {
        "title": "Slide 10 — EXAMPLE OF AN UPDATE ANOMALY",
        "lines": [
          "- **Consider the relation:**",
          "  - EMP_PROJ(Emp#, Proj#, Ename, Pname, No_hours)",
          "  - Update Anomaly:",
          "  - Changing the name of project number P1 from “Billing” to “Customer-Accounting” may cause this update to be made for all 100 employees working on project P1."
        ]
      },
      {
        "title": "Slide 11 — EXAMPLE OF AN INSERT ANOMALY",
        "lines": [
          "- **Consider the relation:**",
          "  - EMP_PROJ(Emp#, Proj#, Ename, Pname, No_hours)",
          "  - Insert Anomaly:",
          "  - Cannot insert a project unless an employee is assigned to it.",
          "  - Conversely",
          "  - Cannot insert an employee unless an he/she is assigned to a project."
        ]
      },
      {
        "title": "Slide 12 — EXAMPLE OF A DELETE ANOMALY",
        "lines": [
          "- **Consider the relation:**",
          "  - EMP_PROJ(Emp#, Proj#, Ename, Pname, No_hours)",
          "  - Delete Anomaly:",
          "  - When a project is deleted, it will result in deleting all the employees who work on that project.",
          "  - Alternately, if an employee is the sole employee on a project, deleting that employee would result in deleting the corresponding project."
        ]
      },
      {
        "title": "Slide 13 — Figure 14.3 Two relation schemas suffering from update anomalies",
        "lines": [
          "- **Figure 14.3**",
          "  - Two relation schemas suffering from update anomalies. (a) EMP_DEPT and (b) EMP_PROJ."
        ]
      },
      {
        "title": "Slide 14 — Figure 14.4 Sample states for EMP_DEPT and EMP_PROJ",
        "lines": [
          "- **Figure 14.4**",
          "  - Sample states for EMP_DEPT and EMP_PROJ resulting from applying NATURAL JOIN to the relations in Figure 14.2. These may be stored as base relations for performance reasons."
        ]
      },
      {
        "title": "Slide 15 — Guideline for Redundant Information in Tuples and Update Anomalies",
        "lines": [
          "- **GUIDELINE 2:**",
          "  - Design a schema that does not suffer from the insertion, deletion and update anomalies.",
          "  - If there are any anomalies present, then note them so that applications can be made to take them into account.",
          "  - Relations should be designed such that their tuples will have as few NULL values as possible",
          "  - Attributes that are NULL frequently could be placed in separate relations (with the primary key)"
        ]
      },
      {
        "title": "Slide 16 — 1.3 Null Values in Tuples",
        "lines": [
          "- A null is neither an empty string (for character or datetime data types) nor a zero value (for numeric data types)",
          "- Reasons for nulls:",
          "- Attribute not applicable (e.g. student average)",
          "- Attribute value unknown (may exist e.g. Address)",
          "- Value known to exist, but unavailable (e.g. student mark)"
        ]
      },
      {
        "title": "Slide 17 — 2. Functional Dependencies",
        "lines": [
          "- **Functional dependencies (FDs)**",
          "  - Are used to specify formal measures of the \"goodness\" of relational designs",
          "  - And keys are used to define normal forms for relations",
          "  - Are constraints that are derived from the meaning and interrelationships of the data attributes",
          "  - A set of attributes X functionally determines a set of attributes Y if the value of X determines a unique value for Y"
        ]
      },
      {
        "title": "Slide 18 — 2.1 Defining Functional Dependencies",
        "lines": [
          "- X  Y holds if whenever two tuples have the same value for X, they must have the same value for Y",
          "- For any two tuples t1 and t2 in any relation instance r(R): If t1[X]=t2[X], then t1[Y]=t2[Y]",
          "- X  Y in R specifies a constraint on all relation instances r(R)",
          "- Written as X  Y; can be displayed graphically on a relation schema as in Figures. ( denoted by the arrow: ).",
          "- FDs are derived from the real-world constraints on the attributes"
        ]
      },
      {
        "title": "Slide 19 — Examples of FD constraints (1)",
        "lines": [
          "- **Social security number determines employee name**",
          "  - SSN  ENAME",
          "  - Project number determines project name and location",
          "  - PNUMBER  {PNAME, PLOCATION}",
          "  - Employee ssn and project number determines the hours per week that the employee works on the project",
          "  - {SSN, PNUMBER}  HOURS"
        ]
      },
      {
        "title": "Slide 20 — Examples of FD constraints (2)",
        "lines": [
          "- **An FD is a property of the attributes in the schema R**",
          "  - The constraint must hold on every relation instance r(R)",
          "  - If K is a key of R, then K functionally determines all attributes in R",
          "  - (since we never have two distinct tuples with t1[K]=t2[K])"
        ]
      },
      {
        "title": "Slide 21 — Defining FDs from instances",
        "lines": [
          "- Note that in order to define the FDs, we need to understand the meaning of the attributes involved and the relationship between them.",
          "- An FD is a property of the attributes in the schema R",
          "- Given the instance (population) of a relation, all we can conclude is that an FD may exist between certain attributes.",
          "- What we can definitely conclude is – that certain FDs do not exist because there are tuples that show a violation of those dependencies."
        ]
      },
      {
        "title": "Slide 22 — Figure 14.7 Ruling Out FDs",
        "lines": [
          "- Note that given the state of the TEACH relation, we can say that the FD: Text → Course may exist. However, the FDs Teacher → Course, Teacher → Text and",
          "- Couse → Text are ruled out."
        ]
      },
      {
        "title": "Slide 23 — Inference Rules (Cont.)",
        "lines": [
          "- An Inference Rules in logic is a procedure which combines known facts to produce (\"infer\") new facts",
          "- Example: If A is true, and A implies B Then B is true",
          "- There are 6 inference rules: IR1 - IR6",
          "- IR1: Reflexive Rule",
          "- If Y X then X  Y",
          "- A set of attributes always determines itself or any of its subsets",
          "- Example:",
          "- ESSN {ESSN, Dependent_Name} then",
          "- {ESSN, Dependent_Name}  ESSN holds."
        ]
      },
      {
        "title": "Slide 24 — Inference Rules (Cont.)",
        "lines": [
          "- **IR2: Augmentation Rule**",
          "  - If X  Y Then XZ  YZ",
          "  - Example:",
          "  - If SSN  Ename then {SSN, Address}  {Ename, Address}",
          "  - IR3: Transitive Rule",
          "  - If X  Y, Y  Z Then X  Z",
          "  - FDs are transitive",
          "  - Example:",
          "  - If SSN  Dno and Dno  Dlocation Then SSN  Dlocation"
        ]
      },
      {
        "title": "Slide 25 — Inference Rules (Cont.)",
        "lines": [
          "- **IR4: Decomposition Rule**",
          "  - If X  YZ Then X  Y, X  Z",
          "  - Example:",
          "  - If SSN  {Ename, Dno} then SSN  Ename and SSN  Dno",
          "  - IR5: Additive (Union) Rule",
          "  - If X  Y, X  Z Then X  YZ",
          "  - Example:",
          "  - If SSN  Ename and SSN  Dno then SSN  {Ename, Dno}",
          "  - IR6: Pseudo transitive Rule",
          "  - If X  Y, WY  Z Then WX  Z",
          "  - SSN  MgrSSN and {MgrSSN, Dependent_Name}  Relationship Then",
          "  - {SSN, Dependent_Name} -> Relationship"
        ]
      },
      {
        "title": "Slide 26 — Closure of Attribute Set",
        "lines": [
          "- Given a relation schema R and a set of FD’s that hold on R. Let S be a set of attributes in R. Then",
          "- S+= S plus all attributes that can be implied directly or indirectly from S."
        ]
      },
      {
        "title": "Slide 27 — Example (1)",
        "lines": [
          "- **Given R(A, B, C) with functional dependencies**",
          "  - F={AB and BC}. Calculate A+",
          "  - Initially, A+ ={A}.",
          "  - And then use the given FD’s",
          "  - From AB we get A+ = {A, B}.",
          "  - From BC we get A+ = {A, B, C}.",
          "  - Therefore,",
          "  - A+ = {A, B, C} which is all attributes of R",
          "  - so A is a candidate key."
        ]
      },
      {
        "title": "Slide 28 — Example (2)",
        "lines": [
          "- **Given R ( A, B, C, D, E, F ) with a set of FDs**",
          "  - F = {A  BC, E  CF, B  E, CD  EF}",
          "  - Find the candidate key for R.",
          "  - A+={ABCEF} (By using the algorithm)",
          "  - B+={BECF}",
          "  - ……",
          "  - AB+={ABCEF}",
          "  - AD+={ADBCEF} which is a candidate key"
        ]
      },
      {
        "title": "Slide 29 — 3.1 Normalization of Relations",
        "lines": [
          "- **Normalization:**",
          "  - The process of decomposing unsatisfactory \"bad\" relations by breaking up their attributes into smaller relations",
          "  - Normal form:",
          "  - Condition using keys and FDs of a relation to certify whether a relation schema is in a particular normal form",
          "  - 2NF, 3NF, BCNF",
          "  - based on keys and FDs of a relation schema"
        ]
      },
      {
        "title": "Slide 30 — 3.2 Practical Use of Normal Forms",
        "lines": [
          "- Normalization is carried out in practice so that the resulting designs are of high quality and meet the desirable properties",
          "- The practical utility of these normal forms becomes questionable when the constraints on which they are based are hard to understand or to detect",
          "- The database designers need not normalize to the highest possible normal form",
          "- (usually up to 3NF and BCNF. 4NF rarely used in practice.)",
          "- Denormalization:",
          "- The process of storing the join of higher normal form relations as a base relation—which is in a lower normal form"
        ]
      },
      {
        "title": "Slide 31 — 3.3 Definitions of Keys and Attributes Participating in Keys (1)",
        "lines": [
          "- A superkey of a relation schema R = {A1, A2, ...., An} is a set of attributes S subset-of R with the property that no two tuples t1 and t2 in any legal relation state r of R will have t1[S] = t2[S]",
          "- A key K is a superkey with the additional property that removal of any attribute from K will cause K not to be a superkey any more.",
          "- Any attribute involved in a candidate key is a prime attribute",
          "- All other attributes are called non-prime attributes."
        ]
      },
      {
        "title": "Slide 32 — Normalization",
        "lines": [
          "- Normalization is a method for organizing data elements in a database into tables to minimize duplication",
          "- Why Normalization?",
          "- Reduce Redundant data",
          "- Remove Inconsistent data",
          "- Reduce anomalies",
          "- Increase data integrity",
          "- Simplify data maintenance",
          "- Take less disk space",
          "- Goal of Normalization",
          "- In each table all non-key attributes should be dependent on the primary key"
        ]
      },
      {
        "title": "Slide 33 — Normalization",
        "lines": [
          "- **Normal forms:**",
          "  - First Normal Form (1NF)",
          "  - Second Normal Form (2NF)",
          "  - Third Normal Form (3NF)",
          "  - Boyce-Codd Normal Form (BCNF)",
          "  - Each normal form is strictly stronger than the previous one",
          "  - Every 2NF relation is in 1NF",
          "  - Every 3NF relation is in 2NF",
          "  - Every BCNF relation is in 3NF",
          "  - There exist relations that are in 3NF but not in BCNF",
          "  - Hence BCNF is considered a stronger form of 3NF",
          "  - The goal is to have each relation in BCNF (or 3NF)"
        ]
      },
      {
        "title": "Slide 34 — First Normal Form (1NF)",
        "lines": [
          "- **Relations on 1NF should have no multivalued attributes or nested relations.**",
          "  - A relation schema is in 1NF if:",
          "  - domains of attributes include only atomic (simple, indivisible) values",
          "  - and the value of an attribute is a single value from the domain of that attribute",
          "  - Example of un-normalized relation",
          "  - Let R(SSN, Name (Fname, Lname),{telephone})",
          "  - Note: R has a composite attribute (Name) and has a multivalued attribute (Telephone). Then R is not in 1NF (i.e. un-normalized relation)"
        ]
      },
      {
        "title": "Slide 35 — 3.4 First Normal Form",
        "lines": [
          "- **R(SSN,Name(Fname,Lname),{telephone}) →**",
          "  - R1(SSN, Name) or R(SSN, Fname, Lname)",
          "  - R2(SSN, telephone)",
          "  - First Normal Form Disallows",
          "  - composite attributes",
          "  - multivalued attributes",
          "  - nested relations; attributes whose values for an individual tuple are non-atomic."
        ]
      },
      {
        "title": "Slide 36 — Figure 14.9 Normalization into 1NF",
        "lines": [
          "- **Figure 14.9**",
          "  - Normalization into 1NF. (a) A relation schema that is not in 1NF. (b) Sample state of relation DEPARTMENT. (c) 1NF version of the same relation with redundancy."
        ]
      },
      {
        "title": "Slide 37 — Figure 14.10 Normalizing nested relations into 1NF",
        "lines": [
          "- **Figure 14.10**",
          "  - Normalizing nested relations into 1NF. (a) Schema of the EMP_PROJ relation with a nested relation attribute PROJS. (b) Sample extension of the EMP_PROJ relation showing nested relations within each tuple. (c) Decomposition of EMP_PROJ into relations EMP_PROJ1 and EMP_PROJ2 by propagating the primary key."
        ]
      },
      {
        "title": "Slide 38 — Let us start with",
        "lines": [
          "- Let us start with",
          "- BCNF",
          "- 3NF and then",
          "- 2NF"
        ]
      },
      {
        "title": "Slide 39 — BCNF Form",
        "lines": [
          "- **Definition. A relation schema R is in BCNF if whenever a nontrivial functional dependency**",
          "  - X → A holds in R, then:",
          "  - 1) X is a superkey of R."
        ]
      },
      {
        "title": "Slide 40 — BCNF Example",
        "lines": [
          "- **Lending(Branch-name,Branch-city,Branch-assets,Loan-no,Amount,Customer)**",
          "  - FD’s:",
          "  - Branch-name  Branch-city, Branch-assets",
          "  - Loan-no  Branch-name, Amount",
          "  - Lending(Branch-name,Branch-city,Branch-assets,Loan-no,Amount,Customer)",
          "- FD1",
          "- FD2"
        ]
      },
      {
        "title": "Slide 41 — BCNF Example",
        "lines": [
          "- **Lending(Branch-name,Branch-city,Branch-assets,Loan-no,Amount,Customer)**",
          "  - FD1: X is not S.K",
          "  - Then Lending must be decomposed into:",
          "  - R1 which includes X and A",
          "  - R2 which includes R – A",
          "  - R1(Branch-name,Branch-city,Branch-assets)",
          "  - R2(Branch-name, Loan-no, Amount, Customer)",
          "- FD1",
          "- FD2"
        ]
      },
      {
        "title": "Slide 42 — BCNF Example",
        "lines": [
          "- **Lending(Branch-name,Branch-city,Branch-assets,Loan-no,Amount,Customer)**",
          "  - FD1: X is not S.K",
          "  - Then Lending must be decomposed into:",
          "  - R1 which includes X and A",
          "  - R2 which includes R – A",
          "  - R1(Branch-name,Branch-city,Branch-assets)",
          "  - R2(Branch-name, Loan-no, Amount, Customer)",
          "- FD1",
          "- FD2"
        ]
      },
      {
        "title": "Slide 43 — BCNF Example",
        "lines": [
          "- **Lending(Branch-name,Branch-city,Branch-assets,Loan-no,Amount,Customer)**",
          "  - FD1: X is not S.K",
          "  - Then Lending must be decomposed into:",
          "  - R1 which includes X and A",
          "  - R2 which includes R – A",
          "  - R1(Branch-name,Branch-city,Branch-assets)",
          "  - R2(Branch-name, Loan-no, Amount, Customer)",
          "- FD1",
          "- FD2"
        ]
      },
      {
        "title": "Slide 44 — BCNF Example Cont.",
        "lines": [
          "- **Repeat the procedure for R1 and R2 again:**",
          "  - R1(Branch-name,Branch-city,Branch-assets)",
          "  - R1 has only one FD (X is S.K). So, R1 is in BCNF",
          "  - R2(Branch-name, Loan-no, Amount, Customer)",
          "  - R2 has one FD which does not satisfied the conditions. So decompose R2 into R21 and R22",
          "  - R21(Loan-no, Amount, Branch-name) which satisfies the S.K condition"
        ]
      },
      {
        "title": "Slide 45 — BCNF Example Cont.",
        "lines": [
          "- **Repeat the procedure for R1 and R2 again:**",
          "  - R1(Branch-name,Branch-city,Branch-assets)",
          "  - R1 has only one FD (X is S.K). So, R1 is in BCNF",
          "  - R2(Branch-name, Loan-no, Amount, Customer)",
          "  - R2 has one FD which does not satisfied the conditions. So decompose R2 into R21 and R22",
          "  - R21(Loan-no, Amount, Branch-name) which satisfies the S.K condition"
        ]
      },
      {
        "title": "Slide 46 — BCNF Example Cont.",
        "lines": [
          "- **R22(Loan-no, Customer) (R – A)**",
          "  - Rule: Any attribute which does not determined by FD must be part of a key.",
          "  - Lending will be as follows:",
          "  - Lending (R)",
          "  - R1 R2",
          "  - R21 R22"
        ]
      },
      {
        "title": "Slide 47 — BCNF Example Cont.",
        "lines": [
          "- **R22(Loan-no, Customer) (R – A)**",
          "  - Rule: Any attribute which does not determined by FD must be part of a key.",
          "  - Lending will be as follows:",
          "  - Lending (R)",
          "  - R1 R2",
          "  - R21 R22",
          "- Only R1, R21 and R22 will be in the DB"
        ]
      },
      {
        "title": "Slide 48 — Exercise",
        "lines": [
          "- **Let R(A, B, C, D, E) be a relation schema**",
          "  - and let F={A  B, AC DE) be a set of functional dependencies hold on R.",
          "  - Check if R is in BCNF or not?"
        ]
      },
      {
        "title": "Slide 49 — Figure 14.13 Boyce-Codd normal form",
        "lines": [
          "- **Figure 14.13**",
          "  - Boyce-Codd normal form. (a) BCNF normalization of LOTS1A with the functional dependency FD2 being lost in the decomposition. (b) A schematic relation with FDs; it is in 3NF, but not in BCNF due to the f.d. C → B."
        ]
      },
      {
        "title": "Slide 50 — 3.6 Third Normal Form (1)",
        "lines": [
          "- **Definition:**",
          "  - Transitive functional dependency: a FD X -> Z that can be derived from two FDs X -> Y and Y -> Z",
          "  - Examples:",
          "  - SSN -> DMGRSSN is a transitive FD",
          "  - Since SSN -> DNUMBER and DNUMBER -> DMGRSSN hold",
          "  - SSN -> ENAME is non-transitive",
          "  - Since there is no set of attributes X where SSN -> X and X -> ENAME"
        ]
      },
      {
        "title": "Slide 51 — Third Normal Form (2)",
        "lines": [
          "- A relation schema R is in third normal form (3NF) if it is in 2NF and no non-prime attribute A in R is transitively dependent on the primary key",
          "- R can be decomposed into 3NF relations via the process of 3NF normalization",
          "- NOTE:",
          "- In X -> Y and Y -> Z, with X as the primary key, we consider this a problem only if Y is not a candidate key.",
          "- When Y is a candidate key, there is no problem with the transitive dependency .",
          "- E.g., Consider EMP (SSN, Emp#, Salary ).",
          "- Here, SSN -> Emp# -> Salary and Emp# is a candidate key."
        ]
      },
      {
        "title": "Slide 52 — 3NF Rule",
        "lines": [
          "- Rule: Given a relation schema R and a set of FD’s of the form (XA) that hold on R. Then R is in 3NF if for all FD’s in F, one of the following conditions is satisfied:",
          "- 1) X is super key or",
          "- 2) Each attribute in A is prime",
          "- Prime attribute: An attribute that is a member of any candidate key",
          "- Nonprime attribute: An attribute that is not a member of",
          "- any candidate key (any attributes that is not a member of any candidate key)"
        ]
      },
      {
        "title": "Slide 53 — 3NF Example",
        "lines": [
          "- **R(Branch-name,Customer-name,Banker-name,Office-no)**",
          "  - FD1: X is S.K",
          "  - FD2:",
          "  - X is not S.K",
          "  - A1 is prime but A2 is not",
          "  - Then, R is not in 3NF",
          "  - R must be decomposed into:",
          "  - R1 which includes X and all nonprime of A",
          "  - R2 which includes R – all nonprime of A"
        ]
      },
      {
        "title": "Slide 54 — 3NF Example",
        "lines": [
          "- **R(Branch-name,Customer-name,Banker-name,Office-no)**",
          "  - FD2:",
          "  - X is not S.K",
          "  - A1 is prime but A2 is not",
          "  - Then, R is not in 3NF",
          "  - R must be decomposed into:",
          "  - R1 which includes X and all nonprime of A",
          "  - R2 which includes R – all nonprime of A"
        ]
      },
      {
        "title": "Slide 55 — 3NF Example",
        "lines": [
          "- **R(Branch-name,Customer-name,Banker-name,Office-no)**",
          "  - FD2:",
          "  - X is not S.K",
          "  - A1 is prime but A2 is not",
          "  - Then, R is not in 3NF",
          "  - R must be decomposed into:",
          "  - R1 which includes X and all nonprime of A",
          "  - R2 which includes R – all nonprime of A",
          "  - R1(Banker-name,Office-no)",
          "  - R2(Branch-name, Customer-name, Banker-name)"
        ]
      },
      {
        "title": "Slide 56 — 3NF Example",
        "lines": [
          "- **R(Branch-name,Customer-name,Banker-name,Office-no)**",
          "  - FD2:",
          "  - X is not S.K",
          "  - A1 is prime but A2 is not",
          "  - Then, R is not in 3NF",
          "  - R must be decomposed into:",
          "  - R1 which includes X and all nonprime of A",
          "  - R2 which includes R – all nonprime of A",
          "  - R1(Banker-name,Office-no)",
          "  - R2(Branch-name, Customer-name, Banker-name)"
        ]
      },
      {
        "title": "Slide 57 — 3NF Example",
        "lines": [
          "- **R1(Banker-name, Office-no)**",
          "  - R2(Branch-name, Customer-name, Banker-name)",
          "  - R1:",
          "  - X is S.K So, R1 is in 3NF",
          "  - R2: A (Branch-name) is prime attribute.",
          "  - So, R2 is in 3NF"
        ]
      },
      {
        "title": "Slide 58 — 3.5 Second Normal Form (1)",
        "lines": [
          "- **Uses the concepts of FDs, primary key**",
          "  - Definitions",
          "  - Prime attribute: An attribute that is member of the primary key K",
          "  - Full functional dependency: a FD Y -> Z where removal of any attribute from Y means the FD does not hold any more",
          "  - Examples:",
          "  - {SSN, PNUMBER} -> HOURS is a full FD since neither SSN -> HOURS nor PNUMBER -> HOURS hold",
          "  - {SSN, PNUMBER} -> ENAME is not a full FD (it is called a partial dependency ) since SSN -> ENAME also holds"
        ]
      },
      {
        "title": "Slide 59 — Second Normal Form (2)",
        "lines": [
          "- Definition. A relation schema R is in second normal form (2NF) if every nonprime attribute A in R is not partially dependent on any key of R",
          "- Every non-prime attribute A in R is fully functionally dependent on the primary key",
          "- R can be decomposed into 2NF relations via the process of 2NF normalization or “second normalization”"
        ]
      },
      {
        "title": "Slide 60 — 2NF Rule",
        "lines": [
          "- Rule: Given a relation schema R and a set of FD’s of the form (XA) that hold on R. Then R is in 2NF if for all FD’s in F, one of the following conditions is satisfied:",
          "- 1) X is super key or",
          "- 2) Each attribute in A is prime or",
          "- 3) X is not proper subset of a key"
        ]
      },
      {
        "title": "Slide 61 — 2NF Example",
        "lines": [
          "- **R(Branch-name,Customer-name,Banker-name,Office-no)**",
          "  - FD1:",
          "  - X is S.K",
          "  - FD2:",
          "  - X is not subset of a key",
          "  - So, R is in 2NF"
        ]
      },
      {
        "title": "Slide 62 — Figure 14.11 Normalizing into 2NF and 3NF",
        "lines": [
          "- **Figure 14.11**",
          "  - Normalizing into 2NF and 3NF. (a) Normalizing EMP_PROJ into 2NF relations. (b) Normalizing EMP_DEPT into 3NF relations."
        ]
      },
      {
        "title": "Slide 63 — Figure 14.12 Normalization into 2NF and 3NF",
        "lines": [
          "- Figure 14.12 Normalization into 2NF and 3NF. (a) The LOTS relation with its functional dependencies FD1 through FD4.",
          "- (b) Decomposing into the 2NF relations LOTS1 and LOTS2. (c) Decomposing LOTS1 into the 3NF relations LOTS1A and LOTS1B. (d) Progressive normalization of LOTS into a 3NF design."
        ]
      },
      {
        "title": "Slide 64 — Example (Full, Partial and Transitive FD’s)",
        "lines": [
          "- Full Dependency",
          "- **Transitive**",
          "  - Dependency",
          "- **Partial**",
          "  - Dependency"
        ]
      },
      {
        "title": "Slide 65 — Normalization Steps",
        "lines": [
          "- If a relation has repeating groups or multivalued Then remove the repeating group and split the multivalued into a new relation to be in 1NF",
          "- Remove partial dependency to be in 2NF",
          "- Remove transitive dependency to be in 3NF",
          "- When a relation schema is satisfied 3NF:",
          "- Partial dependencies are removed",
          "- Transitive dependencies are removed",
          "- All attributes are dependent on P.K",
          "- Tables are small and well-formed"
        ]
      },
      {
        "title": "Slide 66 — Example (When R must not be in BCNF)",
        "lines": [
          "- **Let R(A, B, C, D, E) be a relation schema and**",
          "  - F={A  B, AC DE, DC) be a set of functional dependencies hold on R. Check if R is in BCNF or not?",
          "  - Solution: R(A, B, C, D, E)",
          "  - FD1: X is not super key. So, decompose R into R1 and R2",
          "  - R1(A, B)",
          "  - R2(A, C, D, E)",
          "- FD1",
          "- FD2",
          "- FD3"
        ]
      },
      {
        "title": "Slide 67 — Example (When R must not be in BCNF)",
        "lines": [
          "- **R2(A, C, D, E)**",
          "  - FD1: X is S.K",
          "  - FD2: X is not S.K. But if we decompose R2 according to FD2 we will loss FD",
          "  - R21 (D, C) R22(A, D, E)",
          "- FD1 is lost"
        ]
      },
      {
        "title": "Slide 68 — Example (When R must not be in BCNF)",
        "lines": [
          "- **R2(A, C, D, E)**",
          "  - FD1: X is S.K",
          "  - FD2: X is not S.K. But if we decompose R2 according to FD2 we will loss FD",
          "  - R21 (D, C) R22(A, D, E)",
          "- FD1 is lost"
        ]
      },
      {
        "title": "Slide 69 — Example (When R must not be in BCNF)",
        "lines": [
          "- **R2(A, C, D, E)**",
          "  - FD1: X is S.K",
          "  - FD2: X is not S.K. But if we decompose R2 according to FD2 we will loss FD",
          "  - R21 (D, C) R22(A, D, E)",
          "- FD1 is lost",
          "- **So, we return to previous normal form which is 3NF**",
          "  - Then, R1 is in BCNF and",
          "  - R2 is in 3NF because A is prime"
        ]
      },
      {
        "title": "Slide 70 — Example (What is the highest normal form that the following relation R satisfies?",
        "lines": [
          "- **R(SSN, Pno, Hours, Ename, Pname, Plocation)**",
          "  - 1NF: R is in 1NF because there is no repeating group (composite) and no multivalued attributes.",
          "  - 2NF:",
          "  - FD1: X (SSN, Pno) is super key",
          "  - FD2: X (SSN) is not super key",
          "  - A (Ename) is not prime attribute",
          "  - X (SSN) is a part of a key. So, R is not in 2NF. Then decompose R into:",
          "  - R1=(X, A)=(SSN, Ename)",
          "  - R2=(R- A) = (SSN, Pno, Hours,Pname, Plocation)"
        ]
      },
      {
        "title": "Slide 71 — Example",
        "lines": [
          "- **R1=(X, A)=(SSN, Ename) R1 is in 2NF**",
          "  - R2=(R- A) = (SSN, Pno, Hours, Pname, Plocation)",
          "  - R2:",
          "  - FD1: X (ssn,pno )is super key",
          "  - FD2: X (pno) is not super key",
          "  - A (pname, plocation) is not prime attribute",
          "  - X (pno) is a part of a key. So, R is not in 2NF. Then decompose R2 into:",
          "  - R21=(X , A) = (SSN, Pno, Hours)",
          "  - R22=(R- A) = (Pno, Pname, Plocation)",
          "  - R21 and R22 are in 2NF and also in 3NF and in BCNF"
        ]
      },
      {
        "title": "Slide 72 — Chapter Summary",
        "lines": [
          "- **Informal Design Guidelines for Relational Databases**",
          "  - Functional Dependencies (FDs)",
          "  - Normal Forms (1NF, 2NF, 3NF)Based on Primary Keys",
          "  - General Normal Form Definitions of 2NF and 3NF (For Multiple Keys)",
          "  - BCNF (Boyce-Codd Normal Form)"
        ]
      }
    ]
  }
];
