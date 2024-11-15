---
title: AnimationSnapshot_t
index: true
order: 2
category:
  - Guide
---

# AnimationSnapshot_t

::: tabs
@tab Lua
# Constructor
```lua
AnimationSnapshot_t(ptr)
```
# Properties
## EntIndex 
```lua
--- @type number
Read: animationsnapshot_t.EntIndex
Write: animationsnapshot_t.EntIndex = value
```
## ModelName 
```lua
--- @type string
Read: animationsnapshot_t.ModelName
Write: animationsnapshot_t.ModelName = value
```
## Parent (Read-Only)
```lua
--- @type AnimationSnapshotBase_t
Read: animationsnapshot_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
animationsnapshot_t:ToPtr()
```
## IsValid
```lua
@returns bool
animationsnapshot_t:IsValid()
```

:::