---
title: CFuncPlatRot
index: true
order: 2
category:
  - Guide
---

# CFuncPlatRot

::: tabs
@tab Lua
# Constructor
```lua
CFuncPlatRot(ptr --[[ string ]])
```
# Properties
## End 
```lua
@type QAngle
Read: cfuncplatrot.End
Write: cfuncplatrot.End = value
```
## Start 
```lua
@type QAngle
Read: cfuncplatrot.Start
Write: cfuncplatrot.Start = value
```
## Parent (Read-Only)
```lua
@type CFuncPlat
Read: cfuncplatrot.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncplatrot:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncplatrot:IsValid()
```

:::