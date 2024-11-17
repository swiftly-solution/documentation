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
--- @param ptr string
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
--- @return string
cfuncnavblocker:ToPtr()
```
## IsValid
```lua
--- @return bool
cfuncnavblocker:IsValid()
```

:::