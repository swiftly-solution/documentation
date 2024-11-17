---
title: CSequenceUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSequenceUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSequenceUpdateNode(ptr)
```
# Properties
## Sequence 
```lua
--- @type number
Read: csequenceupdatenode.Sequence
Write: csequenceupdatenode.Sequence = value
```
## Duration 
```lua
--- @type number
Read: csequenceupdatenode.Duration
Write: csequenceupdatenode.Duration = value
```
## ParamSpans (Read-Only)
```lua
--- @type CParamSpanUpdater
Read: csequenceupdatenode.ParamSpans
```
## Tags (Read-Only)
```lua
--- @type table
Read: csequenceupdatenode.Tags
```
## Parent (Read-Only)
```lua
--- @type CSequenceUpdateNodeBase
Read: csequenceupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csequenceupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
csequenceupdatenode:IsValid()
```

:::