---
title: ragdoll_t
index: true
order: 2
category:
  - Guide
---

# ragdoll_t

::: tabs
@tab Lua
# Constructor
```lua
ragdoll_t(ptr --[[ string ]])
```
# Properties
## List (Read-Only)
```lua
@type table
Read: ragdoll_t.List
```
## BoneIndex (Read-Only)
```lua
@type table
Read: ragdoll_t.BoneIndex
```
## AllowStretch 
```lua
@type boolean
Read: ragdoll_t.AllowStretch
Write: ragdoll_t.AllowStretch = value
```
## Unused 
```lua
@type boolean
Read: ragdoll_t.Unused
Write: ragdoll_t.Unused = value
```
# Functions
## ToPtr
```lua
@returns string
ragdoll_t:ToPtr()
```
## IsValid
```lua
@returns bool
ragdoll_t:IsValid()
```

:::