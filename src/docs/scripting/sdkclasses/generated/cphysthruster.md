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
--- @param ptr string
CPhysThruster(ptr)
```
# Properties
## LocalOrigin 
```lua
--- @type Vector
Read: cphysthruster.LocalOrigin
Write: cphysthruster.LocalOrigin = value
```
## Parent (Read-Only)
```lua
--- @type CPhysForce
Read: cphysthruster.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cphysthruster:ToPtr()
```
## IsValid
```lua
--- @return bool
cphysthruster:IsValid()
```

:::