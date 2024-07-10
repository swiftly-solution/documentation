---
title: CPhysThruster
index: true
order: 2
category:
  - Guide
---

# CPhysThruster

::: tabs
@tab Lua
# Constructor
```lua
CPhysThruster(ptr --[[ string ]])
```
# Properties
## LocalOrigin 
```lua
@type Vector
Read: cphysthruster.LocalOrigin
Write: cphysthruster.LocalOrigin = value
```
## Parent 
```lua
@type CPhysForce
Read: cphysthruster.Parent
Write: cphysthruster.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysthruster:ToPtr()
```
## IsValid
```lua
@returns bool
cphysthruster:IsValid()
```

:::