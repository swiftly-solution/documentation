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
CDampedValueUpdateItem(ptr --[[ string ]])
```
# Properties
## Damping 
```lua
@type CAnimInputDamping
Read: cdampedvalueupdateitem.Damping
Write: cdampedvalueupdateitem.Damping = value
```
## ParamIn 
```lua
@type CAnimParamHandle
Read: cdampedvalueupdateitem.ParamIn
Write: cdampedvalueupdateitem.ParamIn = value
```
## ParamOut 
```lua
@type CAnimParamHandle
Read: cdampedvalueupdateitem.ParamOut
Write: cdampedvalueupdateitem.ParamOut = value
```
# Functions
## ToPtr
```lua
@returns string
cdampedvalueupdateitem:ToPtr()
```
## IsValid
```lua
@returns bool
cdampedvalueupdateitem:IsValid()
```

:::