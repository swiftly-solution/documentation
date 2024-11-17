---
title: CSubtractUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSubtractUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSubtractUpdateNode(ptr)
```
# Properties
## FootMotionTiming 
```lua
--- @type number
Read: csubtractupdatenode.FootMotionTiming
Write: csubtractupdatenode.FootMotionTiming = value
```
## ApplyToFootMotion 
```lua
--- @type boolean
Read: csubtractupdatenode.ApplyToFootMotion
Write: csubtractupdatenode.ApplyToFootMotion = value
```
## ApplyChannelsSeparately 
```lua
--- @type boolean
Read: csubtractupdatenode.ApplyChannelsSeparately
Write: csubtractupdatenode.ApplyChannelsSeparately = value
```
## UseModelSpace 
```lua
--- @type boolean
Read: csubtractupdatenode.UseModelSpace
Write: csubtractupdatenode.UseModelSpace = value
```
## Parent (Read-Only)
```lua
--- @type CBinaryUpdateNode
Read: csubtractupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csubtractupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
csubtractupdatenode:IsValid()
```

:::