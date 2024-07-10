---
title: locksound_t
index: true
order: 2
category:
  - Guide
---

# locksound_t

::: tabs
@tab Lua
# Constructor
```lua
locksound_t(ptr --[[ string ]])
```
# Properties
## LockedSound 
```lua
@type string
Read: locksound_t.LockedSound
Write: locksound_t.LockedSound = value
```
## UnlockedSound 
```lua
@type string
Read: locksound_t.UnlockedSound
Write: locksound_t.UnlockedSound = value
```
## FlwaitSound 
```lua
@type number
Read: locksound_t.FlwaitSound
Write: locksound_t.FlwaitSound = value
```
# Functions
## ToPtr
```lua
@returns string
locksound_t:ToPtr()
```
## IsValid
```lua
@returns bool
locksound_t:IsValid()
```

:::