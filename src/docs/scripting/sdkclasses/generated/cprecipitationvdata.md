---
title: CPrecipitationVData
index: true
order: 2
category:
  - Guide
---

# CPrecipitationVData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPrecipitationVData(ptr)
```
# Properties
## InnerDistance 
```lua
--- @type number
Read: cprecipitationvdata.InnerDistance
Write: cprecipitationvdata.InnerDistance = value
```
## AttachType 
```lua
--- @type number
Read: cprecipitationvdata.AttachType
Write: cprecipitationvdata.AttachType = value
```
## BatchSameVolumeType 
```lua
--- @type boolean
Read: cprecipitationvdata.BatchSameVolumeType
Write: cprecipitationvdata.BatchSameVolumeType = value
```
## RTEnvCP 
```lua
--- @type number
Read: cprecipitationvdata.RTEnvCP
Write: cprecipitationvdata.RTEnvCP = value
```
## RTEnvCPComponent 
```lua
--- @type number
Read: cprecipitationvdata.RTEnvCPComponent
Write: cprecipitationvdata.RTEnvCPComponent = value
```
## Modifier 
```lua
--- @type string
Read: cprecipitationvdata.Modifier
Write: cprecipitationvdata.Modifier = value
```
## Parent (Read-Only)
```lua
--- @type CEntitySubclassVDataBase
Read: cprecipitationvdata.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cprecipitationvdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cprecipitationvdata:IsValid()
```

:::