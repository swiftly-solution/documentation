---
title: VMixConvolutionDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixConvolutionDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixConvolutionDesc_t(ptr)
```
# Properties
## FldbGain 
```lua
--- @type number
Read: vmixconvolutiondesc_t.FldbGain
Write: vmixconvolutiondesc_t.FldbGain = value
```
## PreDelayMS 
```lua
--- @type number
Read: vmixconvolutiondesc_t.PreDelayMS
Write: vmixconvolutiondesc_t.PreDelayMS = value
```
## WetMix 
```lua
--- @type number
Read: vmixconvolutiondesc_t.WetMix
Write: vmixconvolutiondesc_t.WetMix = value
```
## FldbLow 
```lua
--- @type number
Read: vmixconvolutiondesc_t.FldbLow
Write: vmixconvolutiondesc_t.FldbLow = value
```
## FldbMid 
```lua
--- @type number
Read: vmixconvolutiondesc_t.FldbMid
Write: vmixconvolutiondesc_t.FldbMid = value
```
## FldbHigh 
```lua
--- @type number
Read: vmixconvolutiondesc_t.FldbHigh
Write: vmixconvolutiondesc_t.FldbHigh = value
```
## LowCutoffFreq 
```lua
--- @type number
Read: vmixconvolutiondesc_t.LowCutoffFreq
Write: vmixconvolutiondesc_t.LowCutoffFreq = value
```
## HighCutoffFreq 
```lua
--- @type number
Read: vmixconvolutiondesc_t.HighCutoffFreq
Write: vmixconvolutiondesc_t.HighCutoffFreq = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixconvolutiondesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixconvolutiondesc_t:IsValid()
```

:::