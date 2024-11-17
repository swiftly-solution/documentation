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
--- @param ptr string
CPointChildModifier(ptr)
```
# Properties
## OrphanInsteadOfDeletingChildrenOnRemove 
```lua
--- @type boolean
Read: cpointchildmodifier.OrphanInsteadOfDeletingChildrenOnRemove
Write: cpointchildmodifier.OrphanInsteadOfDeletingChildrenOnRemove = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointchildmodifier.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointchildmodifier:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointchildmodifier:IsValid()
```

:::