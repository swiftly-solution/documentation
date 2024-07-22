---
title: VMixModDelayDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixModDelayDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixModDelayDesc_t(ptr --[[ string ]])
```
# Properties
## FeedbackFilter (Read-Only)
```lua
@type VMixFilterDesc_t
Read: vmixmoddelaydesc_t.FeedbackFilter
```
## PhaseInvert 
```lua
@type boolean
Read: vmixmoddelaydesc_t.PhaseInvert
Write: vmixmoddelaydesc_t.PhaseInvert = value
```
## GlideTime 
```lua
@type number
Read: vmixmoddelaydesc_t.GlideTime
Write: vmixmoddelaydesc_t.GlideTime = value
```
## Delay 
```lua
@type number
Read: vmixmoddelaydesc_t.Delay
Write: vmixmoddelaydesc_t.Delay = value
```
## OutputGain 
```lua
@type number
Read: vmixmoddelaydesc_t.OutputGain
Write: vmixmoddelaydesc_t.OutputGain = value
```
## FeedbackGain 
```lua
@type number
Read: vmixmoddelaydesc_t.FeedbackGain
Write: vmixmoddelaydesc_t.FeedbackGain = value
```
## ModRate 
```lua
@type number
Read: vmixmoddelaydesc_t.ModRate
Write: vmixmoddelaydesc_t.ModRate = value
```
## ModDepth 
```lua
@type number
Read: vmixmoddelaydesc_t.ModDepth
Write: vmixmoddelaydesc_t.ModDepth = value
```
## ApplyAntialiasing 
```lua
@type boolean
Read: vmixmoddelaydesc_t.ApplyAntialiasing
Write: vmixmoddelaydesc_t.ApplyAntialiasing = value
```
# Functions
## ToPtr
```lua
@returns string
vmixmoddelaydesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixmoddelaydesc_t:IsValid()
```

:::