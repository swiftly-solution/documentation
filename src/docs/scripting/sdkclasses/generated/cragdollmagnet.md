---
title: CRagdollMagnet
index: true
order: 2
category:
  - Guide
---

# CRagdollMagnet

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollMagnet(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cragdollmagnet.Disabled
Write: cragdollmagnet.Disabled = value
```
## Radius 
```lua
--- @type number
Read: cragdollmagnet.Radius
Write: cragdollmagnet.Radius = value
```
## Force 
```lua
--- @type number
Read: cragdollmagnet.Force
Write: cragdollmagnet.Force = value
```
## Axis 
```lua
--- @type Vector
Read: cragdollmagnet.Axis
Write: cragdollmagnet.Axis = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cragdollmagnet.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollmagnet:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollmagnet:IsValid()
```

:::