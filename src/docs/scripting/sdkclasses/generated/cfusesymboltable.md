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
--- @param ptr string
CFuseSymbolTable(ptr)
```
# Properties
## Constants (Read-Only)
```lua
--- @type table
Read: cfusesymboltable.Constants
```
## Variables (Read-Only)
```lua
--- @type table
Read: cfusesymboltable.Variables
```
## Functions (Read-Only)
```lua
--- @type table
Read: cfusesymboltable.Functions
```
# Functions
## ToPtr
```lua
--- @return string
cfusesymboltable:ToPtr()
```
## IsValid
```lua
--- @return bool
cfusesymboltable:IsValid()
```

:::