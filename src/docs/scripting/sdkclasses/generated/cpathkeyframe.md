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
CPathKeyFrame(ptr --[[ string ]])
```
# Properties
## Origin 
```lua
@type Vector
Read: cpathkeyframe.Origin
Write: cpathkeyframe.Origin = value
```
## Angles 
```lua
@type QAngle
Read: cpathkeyframe.Angles
Write: cpathkeyframe.Angles = value
```
## NextKey 
```lua
@type string
Read: cpathkeyframe.NextKey
Write: cpathkeyframe.NextKey = value
```
## NextTime 
```lua
@type number
Read: cpathkeyframe.NextTime
Write: cpathkeyframe.NextTime = value
```
## NextKey1 
```lua
@type CPathKeyFrame
Read: cpathkeyframe.NextKey1
Write: cpathkeyframe.NextKey1 = value
```
## PrevKey 
```lua
@type CPathKeyFrame
Read: cpathkeyframe.PrevKey
Write: cpathkeyframe.PrevKey = value
```
## MoveSpeed 
```lua
@type number
Read: cpathkeyframe.MoveSpeed
Write: cpathkeyframe.MoveSpeed = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cpathkeyframe.Parent
Write: cpathkeyframe.Parent = value
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