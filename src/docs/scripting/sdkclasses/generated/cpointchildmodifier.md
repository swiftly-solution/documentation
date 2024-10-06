---
title: CPointChildModifier
index: true
order: 2
category:
  - Guide
---

# CPointChildModifier

::: tabs
@tab Lua
# Constructor
```lua
CPointChildModifier(ptr --[[ string ]])
```
# Properties
## OrphanInsteadOfDeletingChildrenOnRemove 
```lua
@type boolean
Read: cpointchildmodifier.OrphanInsteadOfDeletingChildrenOnRemove
Write: cpointchildmodifier.OrphanInsteadOfDeletingChildrenOnRemove = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cpointchildmodifier.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointchildmodifier:ToPtr()
```
## IsValid
```lua
@returns bool
cpointchildmodifier:IsValid()
```

:::