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
MaterialOverride_t(ptr)
```
# Properties
## SubSceneObject 
```lua
--- @type number
Read: materialoverride_t.SubSceneObject
Write: materialoverride_t.SubSceneObject = value
```
## DrawCallIndex 
```lua
--- @type number
Read: materialoverride_t.DrawCallIndex
Write: materialoverride_t.DrawCallIndex = value
```
## Parent (Read-Only)
```lua
--- @type BaseSceneObjectOverride_t
Read: materialoverride_t.Parent
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