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
## List 
```lua
@type table
Read: ragdoll_t.List
Write: ragdoll_t.List = value
```
## BoneIndex 
```lua
@type table
Read: ragdoll_t.BoneIndex
Write: ragdoll_t.BoneIndex = value
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