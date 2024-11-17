---
title: VMixBoxverbDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixBoxverbDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixBoxverbDesc_t(ptr)
```
# Properties
## SizeMax 
```lua
--- @type number
Read: vmixboxverbdesc_t.SizeMax
Write: vmixboxverbdesc_t.SizeMax = value
```
## SizeMin 
```lua
--- @type number
Read: vmixboxverbdesc_t.SizeMin
Write: vmixboxverbdesc_t.SizeMin = value
```
## Complexity 
```lua
--- @type number
Read: vmixboxverbdesc_t.Complexity
Write: vmixboxverbdesc_t.Complexity = value
```
## Diffusion 
```lua
--- @type number
Read: vmixboxverbdesc_t.Diffusion
Write: vmixboxverbdesc_t.Diffusion = value
```
## ModDepth 
```lua
--- @type number
Read: vmixboxverbdesc_t.ModDepth
Write: vmixboxverbdesc_t.ModDepth = value
```
## ModRate 
```lua
--- @type number
Read: vmixboxverbdesc_t.ModRate
Write: vmixboxverbdesc_t.ModRate = value
```
## Parallel 
```lua
--- @type boolean
Read: vmixboxverbdesc_t.Parallel
Write: vmixboxverbdesc_t.Parallel = value
```
## FilterType (Read-Only)
```lua
--- @type VMixFilterDesc_t
Read: vmixboxverbdesc_t.FilterType
```
## Width 
```lua
--- @type number
Read: vmixboxverbdesc_t.Width
Write: vmixboxverbdesc_t.Width = value
```
## Height 
```lua
--- @type number
Read: vmixboxverbdesc_t.Height
Write: vmixboxverbdesc_t.Height = value
```
## Depth 
```lua
--- @type number
Read: vmixboxverbdesc_t.Depth
Write: vmixboxverbdesc_t.Depth = value
```
## FeedbackScale 
```lua
--- @type number
Read: vmixboxverbdesc_t.FeedbackScale
Write: vmixboxverbdesc_t.FeedbackScale = value
```
## FeedbackWidth 
```lua
--- @type number
Read: vmixboxverbdesc_t.FeedbackWidth
Write: vmixboxverbdesc_t.FeedbackWidth = value
```
## FeedbackHeight 
```lua
--- @type number
Read: vmixboxverbdesc_t.FeedbackHeight
Write: vmixboxverbdesc_t.FeedbackHeight = value
```
## FeedbackDepth 
```lua
--- @type number
Read: vmixboxverbdesc_t.FeedbackDepth
Write: vmixboxverbdesc_t.FeedbackDepth = value
```
## OutputGain 
```lua
--- @type number
Read: vmixboxverbdesc_t.OutputGain
Write: vmixboxverbdesc_t.OutputGain = value
```
## Taps 
```lua
--- @type number
Read: vmixboxverbdesc_t.Taps
Write: vmixboxverbdesc_t.Taps = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixboxverbdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixboxverbdesc_t:IsValid()
```

:::