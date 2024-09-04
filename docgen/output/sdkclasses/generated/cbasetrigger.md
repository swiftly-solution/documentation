---
title: CBaseTrigger
index: true
order: 2
category:
  - Guide
---

# CBaseTrigger

::: tabs
@tab Lua
# Constructor
```lua
CBaseTrigger(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cbasetrigger.Disabled
Write: cbasetrigger.Disabled = value
```
## FilterName 
```lua
@type string
Read: cbasetrigger.FilterName
Write: cbasetrigger.FilterName = value
```
## Filter (Read-Only)
```lua
@type CBaseFilter
Read: cbasetrigger.Filter
```
## OnStartTouch (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnStartTouch
```
## OnStartTouchAll (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnStartTouchAll
```
## OnEndTouch (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnEndTouch
```
## OnEndTouchAll (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnEndTouchAll
```
## OnTouching (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnTouching
```
## OnTouchingEachEntity (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnTouchingEachEntity
```
## OnNotTouching (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnNotTouching
```
## ClientSidePredicted 
```lua
@type boolean
Read: cbasetrigger.ClientSidePredicted
Write: cbasetrigger.ClientSidePredicted = value
```
## Parent (Read-Only)
```lua
@type CBaseToggle
Read: cbasetrigger.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbasetrigger:ToPtr()
```
## IsValid
```lua
@returns bool
cbasetrigger:IsValid()
```

:::