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
--- @param ptr string
CMarkupVolume(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cmarkupvolume.Disabled
Write: cmarkupvolume.Disabled = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cmarkupvolume.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmarkupvolume:ToPtr()
```
## IsValid
```lua
--- @return bool
cmarkupvolume:IsValid()
```

:::