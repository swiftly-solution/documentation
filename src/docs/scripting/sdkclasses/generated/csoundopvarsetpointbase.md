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
--- @param ptr string
CSoundOpvarSetPointBase(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: csoundopvarsetpointbase.Disabled
Write: csoundopvarsetpointbase.Disabled = value
```
## Source (Read-Only)
```lua
--- @type CEntityInstance
Read: csoundopvarsetpointbase.Source
```
## SourceEntityName 
```lua
--- @type string
Read: csoundopvarsetpointbase.SourceEntityName
Write: csoundopvarsetpointbase.SourceEntityName = value
```
## LastPosition 
```lua
--- @type Vector
Read: csoundopvarsetpointbase.LastPosition
Write: csoundopvarsetpointbase.LastPosition = value
```
## StackName 
```lua
--- @type string
Read: csoundopvarsetpointbase.StackName
Write: csoundopvarsetpointbase.StackName = value
```
## OperatorName 
```lua
--- @type string
Read: csoundopvarsetpointbase.OperatorName
Write: csoundopvarsetpointbase.OperatorName = value
```
## OpvarName 
```lua
--- @type string
Read: csoundopvarsetpointbase.OpvarName
Write: csoundopvarsetpointbase.OpvarName = value
```
## OpvarIndex 
```lua
--- @type number
Read: csoundopvarsetpointbase.OpvarIndex
Write: csoundopvarsetpointbase.OpvarIndex = value
```
## UseAutoCompare 
```lua
--- @type boolean
Read: csoundopvarsetpointbase.UseAutoCompare
Write: csoundopvarsetpointbase.UseAutoCompare = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: csoundopvarsetpointbase.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csoundopvarsetpointbase:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundopvarsetpointbase:IsValid()
```

:::