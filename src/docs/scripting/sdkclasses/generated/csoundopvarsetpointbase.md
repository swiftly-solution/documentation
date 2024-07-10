---
title: CSoundOpvarSetPointBase
index: true
order: 2
category:
  - Guide
---

# CSoundOpvarSetPointBase

::: tabs
@tab Lua
# Constructor
```lua
CSoundOpvarSetPointBase(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: csoundopvarsetpointbase.Disabled
Write: csoundopvarsetpointbase.Disabled = value
```
## Source (Read-Only)
```lua
@type CEntityInstance
Read: csoundopvarsetpointbase.Source
```
## SourceEntityName 
```lua
@type string
Read: csoundopvarsetpointbase.SourceEntityName
Write: csoundopvarsetpointbase.SourceEntityName = value
```
## LastPosition 
```lua
@type Vector
Read: csoundopvarsetpointbase.LastPosition
Write: csoundopvarsetpointbase.LastPosition = value
```
## StackName 
```lua
@type string
Read: csoundopvarsetpointbase.StackName
Write: csoundopvarsetpointbase.StackName = value
```
## OperatorName 
```lua
@type string
Read: csoundopvarsetpointbase.OperatorName
Write: csoundopvarsetpointbase.OperatorName = value
```
## OpvarName 
```lua
@type string
Read: csoundopvarsetpointbase.OpvarName
Write: csoundopvarsetpointbase.OpvarName = value
```
## OpvarIndex 
```lua
@type number
Read: csoundopvarsetpointbase.OpvarIndex
Write: csoundopvarsetpointbase.OpvarIndex = value
```
## UseAutoCompare 
```lua
@type boolean
Read: csoundopvarsetpointbase.UseAutoCompare
Write: csoundopvarsetpointbase.UseAutoCompare = value
```
## Parent 
```lua
@type CBaseEntity
Read: csoundopvarsetpointbase.Parent
Write: csoundopvarsetpointbase.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csoundopvarsetpointbase:ToPtr()
```
## IsValid
```lua
@returns bool
csoundopvarsetpointbase:IsValid()
```

:::