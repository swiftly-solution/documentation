---
title: CRevertSaved
index: true
order: 2
category:
  - Guide
---

# CRevertSaved

::: tabs
@tab Lua
# Constructor
```lua
CRevertSaved(ptr --[[ string ]])
```
# Properties
## LoadTime 
```lua
@type number
Read: crevertsaved.LoadTime
Write: crevertsaved.LoadTime = value
```
## Duration 
```lua
@type number
Read: crevertsaved.Duration
Write: crevertsaved.Duration = value
```
## HoldTime 
```lua
@type number
Read: crevertsaved.HoldTime
Write: crevertsaved.HoldTime = value
```
## Parent 
```lua
@type CModelPointEntity
Read: crevertsaved.Parent
Write: crevertsaved.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
crevertsaved:ToPtr()
```
## IsValid
```lua
@returns bool
crevertsaved:IsValid()
```

:::