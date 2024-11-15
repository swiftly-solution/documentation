---
title: VMixDelayDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixDelayDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixDelayDesc_t(ptr)
```
# Properties
## FeedbackFilter (Read-Only)
```lua
--- @type VMixFilterDesc_t
Read: vmixdelaydesc_t.FeedbackFilter
```
## EnableFilter 
```lua
--- @type boolean
Read: vmixdelaydesc_t.EnableFilter
Write: vmixdelaydesc_t.EnableFilter = value
```
## Delay 
```lua
--- @type number
Read: vmixdelaydesc_t.Delay
Write: vmixdelaydesc_t.Delay = value
```
## DirectGain 
```lua
--- @type number
Read: vmixdelaydesc_t.DirectGain
Write: vmixdelaydesc_t.DirectGain = value
```
## DelayGain 
```lua
--- @type number
Read: vmixdelaydesc_t.DelayGain
Write: vmixdelaydesc_t.DelayGain = value
```
## FeedbackGain 
```lua
--- @type number
Read: vmixdelaydesc_t.FeedbackGain
Write: vmixdelaydesc_t.FeedbackGain = value
```
## Width 
```lua
--- @type number
Read: vmixdelaydesc_t.Width
Write: vmixdelaydesc_t.Width = value
```
# Functions
## ToPtr
```lua
@returns string
vmixdelaydesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixdelaydesc_t:IsValid()
```

:::