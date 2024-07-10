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
CLogicRelay(ptr --[[ string ]])
```
# Properties
## OnTrigger 
```lua
@type CEntityIOOutput
Read: clogicrelay.OnTrigger
Write: clogicrelay.OnTrigger = value
```
## OnSpawn 
```lua
@type CEntityIOOutput
Read: clogicrelay.OnSpawn
Write: clogicrelay.OnSpawn = value
```
## Disabled 
```lua
@type boolean
Read: clogicrelay.Disabled
Write: clogicrelay.Disabled = value
```
## WaitForRefire 
```lua
@type boolean
Read: clogicrelay.WaitForRefire
Write: clogicrelay.WaitForRefire = value
```
## TriggerOnce 
```lua
@type boolean
Read: clogicrelay.TriggerOnce
Write: clogicrelay.TriggerOnce = value
```
## FastRetrigger 
```lua
@type boolean
Read: clogicrelay.FastRetrigger
Write: clogicrelay.FastRetrigger = value
```
## PassthoughCaller 
```lua
@type boolean
Read: clogicrelay.PassthoughCaller
Write: clogicrelay.PassthoughCaller = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicrelay.Parent
Write: clogicrelay.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicrelay:ToPtr()
```
## IsValid
```lua
@returns bool
clogicrelay:IsValid()
```

:::