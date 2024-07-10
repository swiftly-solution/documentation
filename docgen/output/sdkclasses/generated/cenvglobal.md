---
title: CEnvGlobal
index: true
order: 2
category:
  - Guide
---

# CEnvGlobal

::: tabs
@tab Lua
# Constructor
```lua
CEnvGlobal(ptr --[[ string ]])
```
# Properties
## Globalstate 
```lua
@type string
Read: cenvglobal.Globalstate
Write: cenvglobal.Globalstate = value
```
## Triggermode 
```lua
@type number
Read: cenvglobal.Triggermode
Write: cenvglobal.Triggermode = value
```
## Initialstate 
```lua
@type number
Read: cenvglobal.Initialstate
Write: cenvglobal.Initialstate = value
```
## Counter 
```lua
@type number
Read: cenvglobal.Counter
Write: cenvglobal.Counter = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cenvglobal.Parent
Write: cenvglobal.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvglobal:ToPtr()
```
## IsValid
```lua
@returns bool
cenvglobal:IsValid()
```

:::