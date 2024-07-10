---
title: CPlatTrigger
index: true
order: 2
category:
  - Guide
---

# CPlatTrigger

::: tabs
@tab Lua
# Constructor
```lua
CPlatTrigger(ptr --[[ string ]])
```
# Properties
## Platform (Read-Only)
```lua
@type CFuncPlat
Read: cplattrigger.Platform
```
## Parent 
```lua
@type CBaseModelEntity
Read: cplattrigger.Parent
Write: cplattrigger.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cplattrigger:ToPtr()
```
## IsValid
```lua
@returns bool
cplattrigger:IsValid()
```

:::