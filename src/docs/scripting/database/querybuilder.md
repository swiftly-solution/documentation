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
--- @param columns table|nil
--- @return QueryBuilder
querybuilder:Select(columns)
```
## Insert
```lua
--- @param insert_values table Key-Value Map (Key: Column, Value: Data)
--- @return QueryBuilder
querybuilder:Insert(insert_values)
```
## Update
```lua
--- @param update_values table Key-Value Map (Key: Column, Value: Data)
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
--- @param columns table Key-Value map (Key: Column, Value: Direction)
--- @return QueryBuilder
querybuilder:OrderBy(columns)
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
## Create
```lua
--- @param columns table Key-Value map (Key: Column, Value: Data Type)
--- @return QueryBuilder
querybuilder:Create(columns)
```
## Alter
```lua
--- @param command string
--- @return QueryBuilder
querybuilder:Alter(command)
```
## Drop
```lua
--- @return QueryBuilder
querybuilder:Drop()
```
## OnDuplicate
```lua
--- @param update_value table Key-Value map (Key: Column, Value: Data)
--- @return QueryBuilder
querybuilder:OnDuplicate(update_value)
```
## Having
```lua
--- @param condition string
--- @return QueryBuilder
querybuilder:Having(condition)
```
## Distinct
```lua
--- @return QueryBuilder
querybuilder:Distinct()
```
## Offset
```lua
--- @param offset number
--- @return QueryBuilder
querybuilder:Offset(offset)
```
## Union
```lua
--- @param query string
--- @param all boolean
--- @return QueryBuilder
querybuilder:Union(query, all)
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