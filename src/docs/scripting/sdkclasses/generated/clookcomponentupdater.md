---
title: CLookComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CLookComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
CLookComponentUpdater(ptr --[[ string ]])
```
# Properties
## LookHeading (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookHeading
```
## LookHeadingVelocity (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookHeadingVelocity
```
## LookPitch (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookPitch
```
## LookDistance (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookDistance
```
## LookDirection (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookDirection
```
## LookTarget (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookTarget
```
## LookTargetWorldSpace (Read-Only)
```lua
@type CAnimParamHandle
Read: clookcomponentupdater.LookTargetWorldSpace
```
## NetworkLookTarget 
```lua
@type boolean
Read: clookcomponentupdater.NetworkLookTarget
Write: clookcomponentupdater.NetworkLookTarget = value
```
## Parent (Read-Only)
```lua
@type CAnimComponentUpdater
Read: clookcomponentupdater.Parent
```
# Functions
## ToPtr
```lua
@returns string
clookcomponentupdater:ToPtr()
```
## IsValid
```lua
@returns bool
clookcomponentupdater:IsValid()
```

:::