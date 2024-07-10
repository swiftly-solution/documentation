---
title: CFuseSymbolTable
index: true
order: 2
category:
  - Guide
---

# CFuseSymbolTable

::: tabs
@tab Lua
# Constructor
```lua
CFuseSymbolTable(ptr --[[ string ]])
```
# Properties
## Constants 
```lua
@type table
Read: cfusesymboltable.Constants
Write: cfusesymboltable.Constants = value
```
## Variables 
```lua
@type table
Read: cfusesymboltable.Variables
Write: cfusesymboltable.Variables = value
```
## Functions 
```lua
@type table
Read: cfusesymboltable.Functions
Write: cfusesymboltable.Functions = value
```
# Functions
## ToPtr
```lua
@returns string
cfusesymboltable:ToPtr()
```
## IsValid
```lua
@returns bool
cfusesymboltable:IsValid()
```

:::