---
title: CSSDSMsg_LayerBase
index: true
order: 2
category:
  - Guide
---

# CSSDSMsg_LayerBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSSDSMsg_LayerBase(ptr)
```
# Properties
## ViewId (Read-Only)
```lua
--- @type SceneViewId_t
Read: cssdsmsg_layerbase.ViewId
```
## ViewName 
```lua
--- @type string
Read: cssdsmsg_layerbase.ViewName
Write: cssdsmsg_layerbase.ViewName = value
```
## LayerIndex 
```lua
--- @type number
Read: cssdsmsg_layerbase.LayerIndex
Write: cssdsmsg_layerbase.LayerIndex = value
```
## LayerId 
```lua
--- @type number
Read: cssdsmsg_layerbase.LayerId
Write: cssdsmsg_layerbase.LayerId = value
```
## LayerName 
```lua
--- @type string
Read: cssdsmsg_layerbase.LayerName
Write: cssdsmsg_layerbase.LayerName = value
```
## DisplayText 
```lua
--- @type string
Read: cssdsmsg_layerbase.DisplayText
Write: cssdsmsg_layerbase.DisplayText = value
```
# Functions
## ToPtr
```lua
--- @return string
cssdsmsg_layerbase:ToPtr()
```
## IsValid
```lua
--- @return bool
cssdsmsg_layerbase:IsValid()
```

:::