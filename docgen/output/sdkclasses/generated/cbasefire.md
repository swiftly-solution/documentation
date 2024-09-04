---
title: CBaseFire
index: true
order: 2
category:
  - Guide
---

# CBaseFire

::: tabs
@tab Lua
# Constructor
```lua
CBaseFire(ptr --[[ string ]])
```
# Properties
## Scale 
```lua
@type number
Read: cbasefire.Scale
Write: cbasefire.Scale = value
```
## StartScale 
```lua
@type number
Read: cbasefire.StartScale
Write: cbasefire.StartScale = value
```
## ScaleTime 
```lua
@type number
Read: cbasefire.ScaleTime
Write: cbasefire.ScaleTime = value
```
## Flags 
```lua
@type number
Read: cbasefire.Flags
Write: cbasefire.Flags = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cbasefire.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbasefire:ToPtr()
```
## IsValid
```lua
@returns bool
cbasefire:IsValid()
```

:::