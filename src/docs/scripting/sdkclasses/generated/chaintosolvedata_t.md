---
title: ChainToSolveData_t
index: true
order: 2
category:
  - Guide
---

# ChainToSolveData_t

::: tabs
@tab Lua
# Constructor
```lua
ChainToSolveData_t(ptr)
```
# Properties
## ChainIndex 
```lua
--- @type number
Read: chaintosolvedata_t.ChainIndex
Write: chaintosolvedata_t.ChainIndex = value
```
## SolverSettings (Read-Only)
```lua
--- @type IKSolverSettings_t
Read: chaintosolvedata_t.SolverSettings
```
## TargetSettings (Read-Only)
```lua
--- @type IKTargetSettings_t
Read: chaintosolvedata_t.TargetSettings
```
## DebugSetting 
```lua
--- @type number
Read: chaintosolvedata_t.DebugSetting
Write: chaintosolvedata_t.DebugSetting = value
```
## DebugNormalizedValue 
```lua
--- @type number
Read: chaintosolvedata_t.DebugNormalizedValue
Write: chaintosolvedata_t.DebugNormalizedValue = value
```
## DebugOffset 
```lua
--- @type Vector
Read: chaintosolvedata_t.DebugOffset
Write: chaintosolvedata_t.DebugOffset = value
```
# Functions
## ToPtr
```lua
@returns string
chaintosolvedata_t:ToPtr()
```
## IsValid
```lua
@returns bool
chaintosolvedata_t:IsValid()
```

:::