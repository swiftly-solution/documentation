---
title: vphysics_save_cphysicsbody_t
index: true
order: 2
category:
  - Guide
---

# vphysics_save_cphysicsbody_t

::: tabs
@tab Lua
# Constructor
```lua
vphysics_save_cphysicsbody_t(ptr --[[ string ]])
```
# Properties
## OldPointer 
```lua
@type number
Read: vphysics_save_cphysicsbody_t.OldPointer
Write: vphysics_save_cphysicsbody_t.OldPointer = value
```
## Parent (Read-Only)
```lua
@type RnBodyDesc_t
Read: vphysics_save_cphysicsbody_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
vphysics_save_cphysicsbody_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysics_save_cphysicsbody_t:IsValid()
```

:::