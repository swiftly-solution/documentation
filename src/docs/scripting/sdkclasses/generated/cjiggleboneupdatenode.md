---
title: CJiggleBoneUpdateNode
index: true
order: 2
category:
  - Guide
---

# CJiggleBoneUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CJiggleBoneUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedData (Read-Only)
```lua
@type JiggleBoneSettingsList_t
Read: cjiggleboneupdatenode.OpFixedData
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cjiggleboneupdatenode.Parent
Write: cjiggleboneupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cjiggleboneupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cjiggleboneupdatenode:IsValid()
```

:::