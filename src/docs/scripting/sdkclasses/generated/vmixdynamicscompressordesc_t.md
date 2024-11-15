---
title: VMixDynamicsCompressorDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixDynamicsCompressorDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixDynamicsCompressorDesc_t(ptr)
```
# Properties
## FldbOutputGain 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.FldbOutputGain
Write: vmixdynamicscompressordesc_t.FldbOutputGain = value
```
## FldbCompressionThreshold 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.FldbCompressionThreshold
Write: vmixdynamicscompressordesc_t.FldbCompressionThreshold = value
```
## FldbKneeWidth 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.FldbKneeWidth
Write: vmixdynamicscompressordesc_t.FldbKneeWidth = value
```
## CompressionRatio 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.CompressionRatio
Write: vmixdynamicscompressordesc_t.CompressionRatio = value
```
## AttackTimeMS 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.AttackTimeMS
Write: vmixdynamicscompressordesc_t.AttackTimeMS = value
```
## ReleaseTimeMS 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.ReleaseTimeMS
Write: vmixdynamicscompressordesc_t.ReleaseTimeMS = value
```
## RMSTimeMS 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.RMSTimeMS
Write: vmixdynamicscompressordesc_t.RMSTimeMS = value
```
## WetMix 
```lua
--- @type number
Read: vmixdynamicscompressordesc_t.WetMix
Write: vmixdynamicscompressordesc_t.WetMix = value
```
## PeakMode 
```lua
--- @type boolean
Read: vmixdynamicscompressordesc_t.PeakMode
Write: vmixdynamicscompressordesc_t.PeakMode = value
```
# Functions
## ToPtr
```lua
@returns string
vmixdynamicscompressordesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixdynamicscompressordesc_t:IsValid()
```

:::