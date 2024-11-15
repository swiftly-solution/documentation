---
title: CSceneEventInfo
index: true
order: 2
category:
  - Guide
---

# CSceneEventInfo

::: tabs
@tab Lua
# Constructor
```lua
CSceneEventInfo(ptr)
```
# Properties
## Layer 
```lua
--- @type number
Read: csceneeventinfo.Layer
Write: csceneeventinfo.Layer = value
```
## Priority 
```lua
--- @type number
Read: csceneeventinfo.Priority
Write: csceneeventinfo.Priority = value
```
## Sequence 
```lua
--- @type number
Read: csceneeventinfo.Sequence
Write: csceneeventinfo.Sequence = value
```
## Weight 
```lua
--- @type number
Read: csceneeventinfo.Weight
Write: csceneeventinfo.Weight = value
```
## HasArrived 
```lua
--- @type boolean
Read: csceneeventinfo.HasArrived
Write: csceneeventinfo.HasArrived = value
```
## Type 
```lua
--- @type number
Read: csceneeventinfo.Type
Write: csceneeventinfo.Type = value
```
## Next 
```lua
--- @type number
Read: csceneeventinfo.Next
Write: csceneeventinfo.Next = value
```
## IsGesture 
```lua
--- @type boolean
Read: csceneeventinfo.IsGesture
Write: csceneeventinfo.IsGesture = value
```
## ShouldRemove 
```lua
--- @type boolean
Read: csceneeventinfo.ShouldRemove
Write: csceneeventinfo.ShouldRemove = value
```
## SceneEventId (Read-Only)
```lua
--- @type SceneEventId_t
Read: csceneeventinfo.SceneEventId
```
## ClientSide 
```lua
--- @type boolean
Read: csceneeventinfo.ClientSide
Write: csceneeventinfo.ClientSide = value
```
## Started 
```lua
--- @type boolean
Read: csceneeventinfo.Started
Write: csceneeventinfo.Started = value
```
# Functions
## ToPtr
```lua
@returns string
csceneeventinfo:ToPtr()
```
## IsValid
```lua
@returns bool
csceneeventinfo:IsValid()
```

:::