---
title: CLogicRelay
index: true
order: 2
category:
  - Guide
---

# CLogicRelay

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicRelay(ptr)
```
# Properties
## OnTrigger (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicrelay.OnTrigger
```
## OnSpawn (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicrelay.OnSpawn
```
## Disabled 
```lua
--- @type boolean
Read: clogicrelay.Disabled
Write: clogicrelay.Disabled = value
```
## WaitForRefire 
```lua
--- @type boolean
Read: clogicrelay.WaitForRefire
Write: clogicrelay.WaitForRefire = value
```
## TriggerOnce 
```lua
--- @type boolean
Read: clogicrelay.TriggerOnce
Write: clogicrelay.TriggerOnce = value
```
## FastRetrigger 
```lua
--- @type boolean
Read: clogicrelay.FastRetrigger
Write: clogicrelay.FastRetrigger = value
```
## PassthoughCaller 
```lua
--- @type boolean
Read: clogicrelay.PassthoughCaller
Write: clogicrelay.PassthoughCaller = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicrelay.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogicrelay:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicrelay:IsValid()
```

:::