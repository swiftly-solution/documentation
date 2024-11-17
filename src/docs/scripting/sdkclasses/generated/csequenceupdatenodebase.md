---
title: CSequenceUpdateNodeBase
index: true
order: 2
category:
  - Guide
---

# CSequenceUpdateNodeBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSequenceUpdateNodeBase(ptr)
```
# Properties
## PlaybackSpeed 
```lua
--- @type number
Read: csequenceupdatenodebase.PlaybackSpeed
Write: csequenceupdatenodebase.PlaybackSpeed = value
```
## Loop 
```lua
--- @type boolean
Read: csequenceupdatenodebase.Loop
Write: csequenceupdatenodebase.Loop = value
```
## Parent (Read-Only)
```lua
--- @type CLeafUpdateNode
Read: csequenceupdatenodebase.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csequenceupdatenodebase:ToPtr()
```
## IsValid
```lua
--- @return bool
csequenceupdatenodebase:IsValid()
```

:::