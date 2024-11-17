---
title: CFuseProgram
index: true
order: 2
category:
  - Guide
---

# CFuseProgram

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFuseProgram(ptr)
```
# Properties
## ProgramBuffer (Read-Only)
```lua
--- @type table
Read: cfuseprogram.ProgramBuffer
```
## VariablesRead (Read-Only)
```lua
--- @type table
Read: cfuseprogram.VariablesRead
```
## VariablesWritten (Read-Only)
```lua
--- @type table
Read: cfuseprogram.VariablesWritten
```
## MaxTempVarsUsed 
```lua
--- @type number
Read: cfuseprogram.MaxTempVarsUsed
Write: cfuseprogram.MaxTempVarsUsed = value
```
# Functions
## ToPtr
```lua
--- @return string
cfuseprogram:ToPtr()
```
## IsValid
```lua
--- @return bool
cfuseprogram:IsValid()
```

:::