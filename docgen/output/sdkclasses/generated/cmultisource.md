---
title: CMultiSource
index: true
order: 2
category:
  - Guide
---

# CMultiSource

::: tabs
@tab Lua
# Constructor
```lua
CMultiSource(ptr --[[ string ]])
```
# Properties
## RgEntities 
```lua
@type table
Read: cmultisource.RgEntities
Write: cmultisource.RgEntities = value
```
## RgTriggered 
```lua
@type table
Read: cmultisource.RgTriggered
Write: cmultisource.RgTriggered = value
```
## OnTrigger 
```lua
@type CEntityIOOutput
Read: cmultisource.OnTrigger
Write: cmultisource.OnTrigger = value
```
## Total 
```lua
@type number
Read: cmultisource.Total
Write: cmultisource.Total = value
```
## Globalstate 
```lua
@type string
Read: cmultisource.Globalstate
Write: cmultisource.Globalstate = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cmultisource.Parent
Write: cmultisource.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cmultisource:ToPtr()
```
## IsValid
```lua
@returns bool
cmultisource:IsValid()
```

:::