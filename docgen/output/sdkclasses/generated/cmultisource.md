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
## RgEntities (Read-Only)
```lua
@type table
Read: cmultisource.RgEntities
```
## RgTriggered 
```lua
@type table
Read: cmultisource.RgTriggered
Write: cmultisource.RgTriggered = value
```
## OnTrigger (Read-Only)
```lua
@type CEntityIOOutput
Read: cmultisource.OnTrigger
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
## Parent (Read-Only)
```lua
@type CLogicalEntity
Read: cmultisource.Parent
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