---
title: CFuncNavBlocker
index: true
order: 2
category:
  - Guide
---

# CFuncNavBlocker

::: tabs
@tab Lua
# Constructor
```lua
CFuncNavBlocker(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cfuncnavblocker.Disabled
Write: cfuncnavblocker.Disabled = value
```
## BlockedTeamNumber 
```lua
--- @type number
Read: cfuncnavblocker.BlockedTeamNumber
Write: cfuncnavblocker.BlockedTeamNumber = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cfuncnavblocker.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncnavblocker:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncnavblocker:IsValid()
```

:::