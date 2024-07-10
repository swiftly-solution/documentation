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
## ProgramBuffer 
```lua
@type table
Read: cfuseprogram.ProgramBuffer
Write: cfuseprogram.ProgramBuffer = value
```
## VariablesRead 
```lua
@type table
Read: cfuseprogram.VariablesRead
Write: cfuseprogram.VariablesRead = value
```
## VariablesWritten 
```lua
@type table
Read: cfuseprogram.VariablesWritten
Write: cfuseprogram.VariablesWritten = value
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