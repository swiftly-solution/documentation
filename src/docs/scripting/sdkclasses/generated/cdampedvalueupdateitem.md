---
title: CDampedValueUpdateItem
index: true
order: 2
category:
  - Guide
---

# CDampedValueUpdateItem

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CDampedValueUpdateItem(ptr)
```
# Properties
## Damping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cdampedvalueupdateitem.Damping
```
## ParamIn (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cdampedvalueupdateitem.ParamIn
```
## ParamOut (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cdampedvalueupdateitem.ParamOut
```
# Functions
## ToPtr
```lua
--- @return string
cdampedvalueupdateitem:ToPtr()
```
## IsValid
```lua
--- @return bool
cdampedvalueupdateitem:IsValid()
```

:::