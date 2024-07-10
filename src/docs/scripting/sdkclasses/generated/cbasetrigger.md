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
## OnStartTouch 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnStartTouch
Write: cbasetrigger.OnStartTouch = value
```
## OnStartTouchAll 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnStartTouchAll
Write: cbasetrigger.OnStartTouchAll = value
```
## OnEndTouch 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnEndTouch
Write: cbasetrigger.OnEndTouch = value
```
## OnEndTouchAll 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnEndTouchAll
Write: cbasetrigger.OnEndTouchAll = value
```
## OnTouching 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnTouching
Write: cbasetrigger.OnTouching = value
```
## OnTouchingEachEntity 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnTouchingEachEntity
Write: cbasetrigger.OnTouchingEachEntity = value
```
## OnNotTouching 
```lua
@type CEntityIOOutput
Read: cbasetrigger.OnNotTouching
Write: cbasetrigger.OnNotTouching = value
```
## ClientSidePredicted 
```lua
@type boolean
Read: cbasetrigger.ClientSidePredicted
Write: cbasetrigger.ClientSidePredicted = value
```
## Parent 
```lua
@type CBaseToggle
Read: cbasetrigger.Parent
Write: cbasetrigger.Parent = value
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