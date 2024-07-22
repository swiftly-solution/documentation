---
title: CBodyComponentSkeletonInstance
index: true
order: 2
category:
  - Guide
---

# CBodyComponentSkeletonInstance

::: tabs
@tab Lua
# Constructor
```lua
CBodyComponentSkeletonInstance(ptr --[[ string ]])
```
# Properties
## SkeletonInstance (Read-Only)
```lua
@type CSkeletonInstance
Read: cbodycomponentskeletoninstance.SkeletonInstance
```
## Parent 
```lua
@type CBodyComponent
Read: cbodycomponentskeletoninstance.Parent
Write: cbodycomponentskeletoninstance.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbodycomponentskeletoninstance:ToPtr()
```
## IsValid
```lua
@returns bool
cbodycomponentskeletoninstance:IsValid()
```

:::