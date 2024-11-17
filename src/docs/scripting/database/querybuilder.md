---
title: QueryBuilder
index: true
order: 2
category:
  - Guide
---

# QueryBuilder
This is a class to build an SQL query.
::: tabs
@tab Lua
# Constructor
```lua
QueryBuilder()
```
# Properties
There are no properties available for this class.
# Functions
## Table
```lua
--- @param table_name string
--- @return QueryBuilder
querybuilder:Table(table_name)
```
## Select
```lua
--- @param columns table
--- @return QueryBuilder
querybuilder:Select(columns)
```
## Insert
```lua
--- @param insert_values table
--- @return QueryBuilder
querybuilder:Insert(insert_values)
```
## Update
```lua
--- @param update_values table
--- @return QueryBuilder
querybuilder:Update(update_values)
```
## Delete
```lua
--- @return QueryBuilder
querybuilder:Delete()
```
## Where
```lua
--- @param column string
--- @param operator string
--- @param value string|number|boolean
--- @return QueryBuilder
querybuilder:Where(column, operator, value)
```
## OrWhere
```lua
--- @param column string
--- @param operator string
--- @param value string|number|boolean
--- @return QueryBuilder
querybuilder:OrWhere(column, operator, value)
```
## Join
```lua
--- @param table_name string
--- @param condition string
--- @param join_type string
--- @return QueryBuilder
querybuilder:Join(table_name, condition, join_type)
```
## OrderBy
```lua
--- @param column string
--- @param direction string
--- @return QueryBuilder
querybuilder:OrderBy(column, direction)
```
## Limit
```lua
--- @param count number
--- @return QueryBuilder
querybuilder:Limit(count)
```
## GroupBy
```lua
--- @param columns table
--- @return QueryBuilder
querybuilder:GroupBy(columns)
```
## ToString
```lua
--- @return string
querybuilder:ToString()
```
## Execute
```lua
--- @param callback function
--- @return void
querybuilder:Execute(callback)
```
### Callback
The callback has the following arguments:
```lua
--- @param err string
--- @param result table
--- @return nil
cb(err, result)
```
:::