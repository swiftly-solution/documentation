---
title: CTimerEntity
index: true
order: 2
category:
  - Guide
---

# CTimerEntity

::: tabs
@tab Lua
# Constructor
```lua
CTimerEntity(ptr --[[ string ]])
```
# Properties
## OnTimer 
```lua
@type CEntityIOOutput
Read: ctimerentity.OnTimer
Write: ctimerentity.OnTimer = value
```
## OnTimerHigh 
```lua
@type CEntityIOOutput
Read: ctimerentity.OnTimerHigh
Write: ctimerentity.OnTimerHigh = value
```
## OnTimerLow 
```lua
@type CEntityIOOutput
Read: ctimerentity.OnTimerLow
Write: ctimerentity.OnTimerLow = value
```
## Disabled 
```lua
@type number
Read: ctimerentity.Disabled
Write: ctimerentity.Disabled = value
```
## InitialDelay 
```lua
@type number
Read: ctimerentity.InitialDelay
Write: ctimerentity.InitialDelay = value
```
## RefireTime 
```lua
@type number
Read: ctimerentity.RefireTime
Write: ctimerentity.RefireTime = value
```
## UpDownState 
```lua
@type boolean
Read: ctimerentity.UpDownState
Write: ctimerentity.UpDownState = value
```
## UseRandomTime 
```lua
@type number
Read: ctimerentity.UseRandomTime
Write: ctimerentity.UseRandomTime = value
```
## PauseAfterFiring 
```lua
@type boolean
Read: ctimerentity.PauseAfterFiring
Write: ctimerentity.PauseAfterFiring = value
```
## LowerRandomBound 
```lua
@type number
Read: ctimerentity.LowerRandomBound
Write: ctimerentity.LowerRandomBound = value
```
## UpperRandomBound 
```lua
@type number
Read: ctimerentity.UpperRandomBound
Write: ctimerentity.UpperRandomBound = value
```
## RemainingTime 
```lua
@type number
Read: ctimerentity.RemainingTime
Write: ctimerentity.RemainingTime = value
```
## Paused 
```lua
@type boolean
Read: ctimerentity.Paused
Write: ctimerentity.Paused = value
```
## Parent 
```lua
@type CLogicalEntity
Read: ctimerentity.Parent
Write: ctimerentity.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ctimerentity:ToPtr()
```
## IsValid
```lua
@returns bool
ctimerentity:IsValid()
```

:::