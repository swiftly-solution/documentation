---
title: CCycleControlClipUpdateNode
index: true
order: 2
category:
  - Guide
---

# CCycleControlClipUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CCycleControlClipUpdateNode(ptr --[[ string ]])
```
# Properties
## Tags (Read-Only)
```lua
@type table
Read: ccyclecontrolclipupdatenode.Tags
```
## Sequence 
```lua
@type number
Read: ccyclecontrolclipupdatenode.Sequence
Write: ccyclecontrolclipupdatenode.Sequence = value
```
## Duration 
```lua
@type number
Read: ccyclecontrolclipupdatenode.Duration
Write: ccyclecontrolclipupdatenode.Duration = value
```
## ValueSource 
```lua
@type number
Read: ccyclecontrolclipupdatenode.ValueSource
Write: ccyclecontrolclipupdatenode.ValueSource = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: ccyclecontrolclipupdatenode.ParamIndex
```
## Parent (Read-Only)
```lua
@type CLeafUpdateNode
Read: ccyclecontrolclipupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccyclecontrolclipupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
ccyclecontrolclipupdatenode:IsValid()
```

:::