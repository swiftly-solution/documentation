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
CCycleControlUpdateNode(ptr --[[ string ]])
```
# Properties
## ValueSource 
```lua
@type number
Read: ccyclecontrolupdatenode.ValueSource
Write: ccyclecontrolupdatenode.ValueSource = value
```
## ParamIndex 
```lua
@type CAnimParamHandle
Read: ccyclecontrolupdatenode.ParamIndex
Write: ccyclecontrolupdatenode.ParamIndex = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: ccyclecontrolupdatenode.Parent
Write: ccyclecontrolupdatenode.Parent = value
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