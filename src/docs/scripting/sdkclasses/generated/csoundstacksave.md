---
title: CSoundStackSave
index: true
order: 2
category:
  - Guide
---

# CSoundStackSave

::: tabs
@tab Lua
# Constructor
```lua
CSoundStackSave(ptr --[[ string ]])
```
# Properties
## StackName 
```lua
@type string
Read: csoundstacksave.StackName
Write: csoundstacksave.StackName = value
```
## Parent (Read-Only)
```lua
@type CLogicalEntity
Read: csoundstacksave.Parent
```
# Functions
## ToPtr
```lua
@returns string
csoundstacksave:ToPtr()
```
## IsValid
```lua
@returns bool
csoundstacksave:IsValid()
```

:::