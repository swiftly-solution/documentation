---
title: CPathKeyFrame
index: true
order: 2
category:
  - Guide
---

# CPathKeyFrame

::: tabs
@tab Lua
# Constructor
```lua
CPathKeyFrame(ptr)
```
# Properties
## Origin 
```lua
--- @type Vector
Read: cpathkeyframe.Origin
Write: cpathkeyframe.Origin = value
```
## Angles 
```lua
--- @type QAngle
Read: cpathkeyframe.Angles
Write: cpathkeyframe.Angles = value
```
## NextKey 
```lua
--- @type string
Read: cpathkeyframe.NextKey
Write: cpathkeyframe.NextKey = value
```
## NextTime 
```lua
--- @type number
Read: cpathkeyframe.NextTime
Write: cpathkeyframe.NextTime = value
```
## NextKey1 (Read-Only)
```lua
--- @type CPathKeyFrame
Read: cpathkeyframe.NextKey1
```
## PrevKey (Read-Only)
```lua
--- @type CPathKeyFrame
Read: cpathkeyframe.PrevKey
```
## MoveSpeed 
```lua
--- @type number
Read: cpathkeyframe.MoveSpeed
Write: cpathkeyframe.MoveSpeed = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cpathkeyframe.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpathkeyframe:ToPtr()
```
## IsValid
```lua
@returns bool
cpathkeyframe:IsValid()
```

:::