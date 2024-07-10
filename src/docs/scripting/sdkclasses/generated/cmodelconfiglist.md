---
title: CModelConfigList
index: true
order: 2
category:
  - Guide
---

# CModelConfigList

::: tabs
@tab Lua
# Constructor
```lua
CModelConfigList(ptr --[[ string ]])
```
# Properties
## HideMaterialGroupInTools 
```lua
@type boolean
Read: cmodelconfiglist.HideMaterialGroupInTools
Write: cmodelconfiglist.HideMaterialGroupInTools = value
```
## HideRenderColorInTools 
```lua
@type boolean
Read: cmodelconfiglist.HideRenderColorInTools
Write: cmodelconfiglist.HideRenderColorInTools = value
```
## Configs 
```lua
@type table
Read: cmodelconfiglist.Configs
Write: cmodelconfiglist.Configs = value
```
# Functions
## ToPtr
```lua
@returns string
cmodelconfiglist:ToPtr()
```
## IsValid
```lua
@returns bool
cmodelconfiglist:IsValid()
```

:::