---
title: CBtNodeCondition
index: true
order: 2
category:
  - Guide
---

# CBtNodeCondition

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBtNodeCondition(ptr)
```
# Properties
## Negated 
```lua
--- @type boolean
Read: cbtnodecondition.Negated
Write: cbtnodecondition.Negated = value
```
## Parent (Read-Only)
```lua
--- @type CBtNodeDecorator
Read: cbtnodecondition.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbtnodecondition:ToPtr()
```
## IsValid
```lua
--- @return bool
cbtnodecondition:IsValid()
```

:::