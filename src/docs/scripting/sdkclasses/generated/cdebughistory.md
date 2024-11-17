---
title: CDebugHistory
index: true
order: 2
category:
  - Guide
---

# CDebugHistory

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CDebugHistory(ptr)
```
# Properties
## NpcEvents 
```lua
--- @type number
Read: cdebughistory.NpcEvents
Write: cdebughistory.NpcEvents = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cdebughistory.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cdebughistory:ToPtr()
```
## IsValid
```lua
--- @return bool
cdebughistory:IsValid()
```

:::