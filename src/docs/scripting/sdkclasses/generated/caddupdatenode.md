---
title: CAddUpdateNode
index: true
order: 2
category:
  - Guide
---

# CAddUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAddUpdateNode(ptr)
```
# Properties
## FootMotionTiming 
```lua
--- @type number
Read: caddupdatenode.FootMotionTiming
Write: caddupdatenode.FootMotionTiming = value
```
## ApplyToFootMotion 
```lua
--- @type boolean
Read: caddupdatenode.ApplyToFootMotion
Write: caddupdatenode.ApplyToFootMotion = value
```
## ApplyChannelsSeparately 
```lua
--- @type boolean
Read: caddupdatenode.ApplyChannelsSeparately
Write: caddupdatenode.ApplyChannelsSeparately = value
```
## UseModelSpace 
```lua
--- @type boolean
Read: caddupdatenode.UseModelSpace
Write: caddupdatenode.UseModelSpace = value
```
## ApplyScale 
```lua
--- @type boolean
Read: caddupdatenode.ApplyScale
Write: caddupdatenode.ApplyScale = value
```
## Parent (Read-Only)
```lua
--- @type CBinaryUpdateNode
Read: caddupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
caddupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
caddupdatenode:IsValid()
```

:::