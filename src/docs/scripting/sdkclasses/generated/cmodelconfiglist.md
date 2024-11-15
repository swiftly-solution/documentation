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
CModelConfigList(ptr)
```
# Properties
## HideMaterialGroupInTools 
```lua
--- @type boolean
Read: cmodelconfiglist.HideMaterialGroupInTools
Write: cmodelconfiglist.HideMaterialGroupInTools = value
```
## HideRenderColorInTools 
```lua
--- @type boolean
Read: cmodelconfiglist.HideRenderColorInTools
Write: cmodelconfiglist.HideRenderColorInTools = value
```
## Configs (Read-Only)
```lua
--- @type table
Read: cmodelconfiglist.Configs
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