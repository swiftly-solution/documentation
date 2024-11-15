---
title: VMixDynamics3BandDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixDynamics3BandDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixDynamics3BandDesc_t(ptr)
```
# Properties
## FldbGainOutput 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.FldbGainOutput
Write: vmixdynamics3banddesc_t.FldbGainOutput = value
```
## RMSTimeMS 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.RMSTimeMS
Write: vmixdynamics3banddesc_t.RMSTimeMS = value
```
## FldbKneeWidth 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.FldbKneeWidth
Write: vmixdynamics3banddesc_t.FldbKneeWidth = value
```
## Depth 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.Depth
Write: vmixdynamics3banddesc_t.Depth = value
```
## WetMix 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.WetMix
Write: vmixdynamics3banddesc_t.WetMix = value
```
## TimeScale 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.TimeScale
Write: vmixdynamics3banddesc_t.TimeScale = value
```
## LowCutoffFreq 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.LowCutoffFreq
Write: vmixdynamics3banddesc_t.LowCutoffFreq = value
```
## HighCutoffFreq 
```lua
--- @type number
Read: vmixdynamics3banddesc_t.HighCutoffFreq
Write: vmixdynamics3banddesc_t.HighCutoffFreq = value
```
## PeakMode 
```lua
--- @type boolean
Read: vmixdynamics3banddesc_t.PeakMode
Write: vmixdynamics3banddesc_t.PeakMode = value
```
## BandDesc (Read-Only)
```lua
--- @type table
Read: vmixdynamics3banddesc_t.BandDesc
```
# Functions
## ToPtr
```lua
@returns string
vmixdynamics3banddesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixdynamics3banddesc_t:IsValid()
```

:::