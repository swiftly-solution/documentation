---
title: CMarkupVolume
index: true
order: 2
category:
  - Guide
---

# CMarkupVolume

::: tabs
@tab Lua
# Constructor
```lua
CMarkupVolume(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cmarkupvolume.Disabled
Write: cmarkupvolume.Disabled = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cmarkupvolume.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmarkupvolume:ToPtr()
```
## IsValid
```lua
@returns bool
cmarkupvolume:IsValid()
```

:::