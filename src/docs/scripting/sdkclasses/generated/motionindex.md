---
title: MotionIndex
index: true
order: 2
category:
  - Guide
---

# MotionIndex

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
MotionIndex(ptr)
```
# Properties
## Group 
```lua
--- @type number
Read: motionindex.Group
Write: motionindex.Group = value
```
## Motion 
```lua
--- @type number
Read: motionindex.Motion
Write: motionindex.Motion = value
```
# Functions
## ToPtr
```lua
--- @return string
motionindex:ToPtr()
```
## IsValid
```lua
--- @return bool
motionindex:IsValid()
```

:::