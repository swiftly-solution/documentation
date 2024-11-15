---
title: CPhysBallSocket
index: true
order: 2
category:
  - Guide
---

# CPhysBallSocket

::: tabs
@tab Lua
# Constructor
```lua
CPhysBallSocket(ptr)
```
# Properties
## JointFriction 
```lua
--- @type number
Read: cphysballsocket.JointFriction
Write: cphysballsocket.JointFriction = value
```
## EnableSwingLimit 
```lua
--- @type boolean
Read: cphysballsocket.EnableSwingLimit
Write: cphysballsocket.EnableSwingLimit = value
```
## SwingLimit 
```lua
--- @type number
Read: cphysballsocket.SwingLimit
Write: cphysballsocket.SwingLimit = value
```
## EnableTwistLimit 
```lua
--- @type boolean
Read: cphysballsocket.EnableTwistLimit
Write: cphysballsocket.EnableTwistLimit = value
```
## MinTwistAngle 
```lua
--- @type number
Read: cphysballsocket.MinTwistAngle
Write: cphysballsocket.MinTwistAngle = value
```
## MaxTwistAngle 
```lua
--- @type number
Read: cphysballsocket.MaxTwistAngle
Write: cphysballsocket.MaxTwistAngle = value
```
## Parent (Read-Only)
```lua
--- @type CPhysConstraint
Read: cphysballsocket.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysballsocket:ToPtr()
```
## IsValid
```lua
@returns bool
cphysballsocket:IsValid()
```

:::