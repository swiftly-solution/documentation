---
title: CFootStepTriggerUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFootStepTriggerUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFootStepTriggerUpdateNode(ptr --[[ string ]])
```
# Properties
## Triggers 
```lua
@type table
Read: cfootsteptriggerupdatenode.Triggers
Write: cfootsteptriggerupdatenode.Triggers = value
```
## Tolerance 
```lua
@type number
Read: cfootsteptriggerupdatenode.Tolerance
Write: cfootsteptriggerupdatenode.Tolerance = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cfootsteptriggerupdatenode.Parent
Write: cfootsteptriggerupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfootsteptriggerupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfootsteptriggerupdatenode:IsValid()
```

:::