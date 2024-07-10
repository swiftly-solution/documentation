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
CBtNodeCondition(ptr --[[ string ]])
```
# Properties
## Negated 
```lua
@type boolean
Read: cbtnodecondition.Negated
Write: cbtnodecondition.Negated = value
```
## Parent 
```lua
@type CBtNodeDecorator
Read: cbtnodecondition.Parent
Write: cbtnodecondition.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbtnodecondition:ToPtr()
```
## IsValid
```lua
@returns bool
cbtnodecondition:IsValid()
```

:::