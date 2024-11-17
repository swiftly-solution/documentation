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
--- @param ptr string
CSoundStackSave(ptr)
```
# Properties
## StackName 
```lua
--- @type string
Read: csoundstacksave.StackName
Write: csoundstacksave.StackName = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: csoundstacksave.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csoundstacksave:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundstacksave:IsValid()
```

:::