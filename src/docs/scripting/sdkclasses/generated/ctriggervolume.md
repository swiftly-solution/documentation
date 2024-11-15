---
title: CTriggerVolume
index: true
order: 2
category:
  - Guide
---

# CTriggerVolume

::: tabs
@tab Lua
# Constructor
```lua
CTriggerVolume(ptr)
```
# Properties
## FilterName 
```lua
--- @type string
Read: ctriggervolume.FilterName
Write: ctriggervolume.FilterName = value
```
## Filter (Read-Only)
```lua
--- @type CBaseFilter
Read: ctriggervolume.Filter
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: ctriggervolume.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggervolume:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggervolume:IsValid()
```

:::