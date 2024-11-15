---
title: CMessage
index: true
order: 2
category:
  - Guide
---

# CMessage

::: tabs
@tab Lua
# Constructor
```lua
CMessage(ptr)
```
# Properties
## Message 
```lua
--- @type string
Read: cmessage.Message
Write: cmessage.Message = value
```
## MessageVolume 
```lua
--- @type number
Read: cmessage.MessageVolume
Write: cmessage.MessageVolume = value
```
## MessageAttenuation 
```lua
--- @type number
Read: cmessage.MessageAttenuation
Write: cmessage.MessageAttenuation = value
```
## Radius 
```lua
--- @type number
Read: cmessage.Radius
Write: cmessage.Radius = value
```
## Noise 
```lua
--- @type string
Read: cmessage.Noise
Write: cmessage.Noise = value
```
## OnShowMessage (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmessage.OnShowMessage
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cmessage.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmessage:ToPtr()
```
## IsValid
```lua
@returns bool
cmessage:IsValid()
```

:::