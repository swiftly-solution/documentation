---
title: CAimConstraint
index: true
order: 2
category:
  - Guide
---

# CAimConstraint

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAimConstraint(ptr)
```
# Properties
## UpType 
```lua
--- @type number
Read: caimconstraint.UpType
Write: caimconstraint.UpType = value
```
## Parent (Read-Only)
```lua
--- @type CBaseConstraint
Read: caimconstraint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
caimconstraint:ToPtr()
```
## IsValid
```lua
--- @return bool
caimconstraint:IsValid()
```

:::