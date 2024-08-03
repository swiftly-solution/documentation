---
title: QueryParams
index: true
order: 2
category:
  - Guide
---

# QueryParams
Returns a Database Query Result inside the callback which can be used to iterate through the return values. Formats the query string using params
::: tabs
@tab Lua
```lua
@returns void
db:QueryParams(query --[[ string ]], params --[[ table ]], callback --[[ function ]])
```
> [!info]
> If database is not connected it will never execute.

### Params
The parameters can be used by the following format inside the query string:
```
@key
[key]
{key}```
Inside the parameters value it needs to be the following format
```lua
{
    ["key"] = value,
    ["key2"] = value,
    -- ...
}```
The values can be a string, a number or a boolean. It will automatically convert to string form and perform EscapeString to it so that there would be no chance for SQL Injection.

### Callback
The callback has the following arguments:
```lua
cb(err --[[ string ]], result --[[ table ]])
```
:::