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
--- @param ptr string
locksound_t(ptr)
```
# Properties
## LockedSound 
```lua
--- @type string
Read: locksound_t.LockedSound
Write: locksound_t.LockedSound = value
```
## UnlockedSound 
```lua
--- @type string
Read: locksound_t.UnlockedSound
Write: locksound_t.UnlockedSound = value
```
## FlwaitSound 
```lua
--- @type number
Read: locksound_t.FlwaitSound
Write: locksound_t.FlwaitSound = value
```
# Functions
## ToPtr
```lua
--- @return string
locksound_t:ToPtr()
```
## IsValid
```lua
--- @return bool
locksound_t:IsValid()
```

:::