---
title: VMixPitchShiftDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixPitchShiftDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixPitchShiftDesc_t(ptr)
```
# Properties
## GrainSampleCount 
```lua
--- @type number
Read: vmixpitchshiftdesc_t.GrainSampleCount
Write: vmixpitchshiftdesc_t.GrainSampleCount = value
```
## PitchShift 
```lua
--- @type number
Read: vmixpitchshiftdesc_t.PitchShift
Write: vmixpitchshiftdesc_t.PitchShift = value
```
## Quality 
```lua
--- @type number
Read: vmixpitchshiftdesc_t.Quality
Write: vmixpitchshiftdesc_t.Quality = value
```
## ProcType 
```lua
--- @type number
Read: vmixpitchshiftdesc_t.ProcType
Write: vmixpitchshiftdesc_t.ProcType = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixpitchshiftdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixpitchshiftdesc_t:IsValid()
```

:::