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
CFuseProgram(ptr --[[ string ]])
```
# Properties
## ProgramBuffer (Read-Only)
```lua
@type table
Read: cfuseprogram.ProgramBuffer
```
## VariablesRead (Read-Only)
```lua
@type table
Read: cfuseprogram.VariablesRead
```
## VariablesWritten (Read-Only)
```lua
@type table
Read: cfuseprogram.VariablesWritten
```
## MaxTempVarsUsed 
```lua
@type number
Read: cfuseprogram.MaxTempVarsUsed
Write: cfuseprogram.MaxTempVarsUsed = value
```
# Functions
## ToPtr
```lua
@returns string
cfuseprogram:ToPtr()
```
## IsValid
```lua
@returns bool
cfuseprogram:IsValid()
```

:::