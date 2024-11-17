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
--- @param ptr string
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
--- @return string
ccyclecontrolupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
ccyclecontrolupdatenode:IsValid()
```

:::