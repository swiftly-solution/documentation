---
title: CMorphConstraint
index: true
order: 2
category:
  - Guide
---

# CMorphConstraint

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMorphConstraint(ptr)
```
# Properties
## TargetMorph 
```lua
--- @type string
Read: cmorphconstraint.TargetMorph
Write: cmorphconstraint.TargetMorph = value
```
## SlaveChannel 
```lua
--- @type number
Read: cmorphconstraint.SlaveChannel
Write: cmorphconstraint.SlaveChannel = value
```
## Min 
```lua
--- @type number
Read: cmorphconstraint.Min
Write: cmorphconstraint.Min = value
```
## Max 
```lua
--- @type number
Read: cmorphconstraint.Max
Write: cmorphconstraint.Max = value
```
## Parent (Read-Only)
```lua
--- @type CBaseConstraint
Read: cmorphconstraint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmorphconstraint:ToPtr()
```
## IsValid
```lua
--- @return bool
cmorphconstraint:IsValid()
```

:::