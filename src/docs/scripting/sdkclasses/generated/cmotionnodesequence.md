---
title: CMotionNodeSequence
index: true
order: 2
category:
  - Guide
---

# CMotionNodeSequence

::: tabs
@tab Lua
# Constructor
```lua
CMotionNodeSequence(ptr)
```
# Properties
## Tags (Read-Only)
```lua
--- @type table
Read: cmotionnodesequence.Tags
```
## Sequence 
```lua
--- @type number
Read: cmotionnodesequence.Sequence
Write: cmotionnodesequence.Sequence = value
```
## PlaybackSpeed 
```lua
--- @type number
Read: cmotionnodesequence.PlaybackSpeed
Write: cmotionnodesequence.PlaybackSpeed = value
```
## Parent (Read-Only)
```lua
--- @type CMotionNode
Read: cmotionnodesequence.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmotionnodesequence:ToPtr()
```
## IsValid
```lua
@returns bool
cmotionnodesequence:IsValid()
```

:::