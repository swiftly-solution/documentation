---
title: CInfoPlayerStart
index: true
order: 2
category:
  - Guide
---

# CInfoPlayerStart

::: tabs
@tab Lua
# Constructor
```lua
CInfoPlayerStart(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cinfoplayerstart.Disabled
Write: cinfoplayerstart.Disabled = value
```
## IsMaster 
```lua
@type boolean
Read: cinfoplayerstart.IsMaster
Write: cinfoplayerstart.IsMaster = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cinfoplayerstart.Parent
```
# Functions
## ToPtr
```lua
@returns string
cinfoplayerstart:ToPtr()
```
## IsValid
```lua
@returns bool
cinfoplayerstart:IsValid()
```

:::