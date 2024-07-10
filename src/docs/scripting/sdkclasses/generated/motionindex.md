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
MotionIndex(ptr --[[ string ]])
```
# Properties
## Group 
```lua
@type number
Read: motionindex.Group
Write: motionindex.Group = value
```
## Motion 
```lua
@type number
Read: motionindex.Motion
Write: motionindex.Motion = value
```
# Functions
## ToPtr
```lua
@returns string
motionindex:ToPtr()
```
## IsValid
```lua
@returns bool
motionindex:IsValid()
```

:::