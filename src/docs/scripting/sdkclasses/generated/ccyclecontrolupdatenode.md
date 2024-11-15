---
title: CCycleControlUpdateNode
index: true
order: 2
category:
  - Guide
---

# CCycleControlUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CCycleControlUpdateNode(ptr)
```
# Properties
## ValueSource 
```lua
--- @type number
Read: ccyclecontrolupdatenode.ValueSource
Write: ccyclecontrolupdatenode.ValueSource = value
```
## ParamIndex (Read-Only)
```lua
--- @type CAnimParamHandle
Read: ccyclecontrolupdatenode.ParamIndex
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: ccyclecontrolupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccyclecontrolupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
ccyclecontrolupdatenode:IsValid()
```

:::