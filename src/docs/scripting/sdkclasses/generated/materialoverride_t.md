---
title: MaterialOverride_t
index: true
order: 2
category:
  - Guide
---

# MaterialOverride_t

::: tabs
@tab Lua
# Constructor
```lua
MaterialOverride_t(ptr --[[ string ]])
```
# Properties
## SubSceneObject 
```lua
@type number
Read: materialoverride_t.SubSceneObject
Write: materialoverride_t.SubSceneObject = value
```
## DrawCallIndex 
```lua
@type number
Read: materialoverride_t.DrawCallIndex
Write: materialoverride_t.DrawCallIndex = value
```
## Parent 
```lua
@type BaseSceneObjectOverride_t
Read: materialoverride_t.Parent
Write: materialoverride_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
materialoverride_t:ToPtr()
```
## IsValid
```lua
@returns bool
materialoverride_t:IsValid()
```

:::