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
--- @param ptr string
CFootStepTriggerUpdateNode(ptr)
```
# Properties
## Triggers (Read-Only)
```lua
--- @type table
Read: cfootsteptriggerupdatenode.Triggers
```
## Tolerance 
```lua
--- @type number
Read: cfootsteptriggerupdatenode.Tolerance
Write: cfootsteptriggerupdatenode.Tolerance = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cfootsteptriggerupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfootsteptriggerupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootsteptriggerupdatenode:IsValid()
```

:::