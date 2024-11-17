---
title: CModelConfig
index: true
order: 2
category:
  - Guide
---

# CModelConfig

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CModelConfig(ptr)
```
# Properties
## ConfigName 
```lua
--- @type string
Read: cmodelconfig.ConfigName
Write: cmodelconfig.ConfigName = value
```
## Elements (Read-Only)
```lua
--- @type table
Read: cmodelconfig.Elements
```
## TopLevel 
```lua
--- @type boolean
Read: cmodelconfig.TopLevel
Write: cmodelconfig.TopLevel = value
```
# Functions
## ToPtr
```lua
--- @return string
cmodelconfig:ToPtr()
```
## IsValid
```lua
--- @return bool
cmodelconfig:IsValid()
```

:::