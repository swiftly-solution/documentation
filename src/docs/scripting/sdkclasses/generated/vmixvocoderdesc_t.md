---
title: VMixVocoderDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixVocoderDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixVocoderDesc_t(ptr)
```
# Properties
## BandCount 
```lua
--- @type number
Read: vmixvocoderdesc_t.BandCount
Write: vmixvocoderdesc_t.BandCount = value
```
## Bandwidth 
```lua
--- @type number
Read: vmixvocoderdesc_t.Bandwidth
Write: vmixvocoderdesc_t.Bandwidth = value
```
## FldBModGain 
```lua
--- @type number
Read: vmixvocoderdesc_t.FldBModGain
Write: vmixvocoderdesc_t.FldBModGain = value
```
## FreqRangeStart 
```lua
--- @type number
Read: vmixvocoderdesc_t.FreqRangeStart
Write: vmixvocoderdesc_t.FreqRangeStart = value
```
## FreqRangeEnd 
```lua
--- @type number
Read: vmixvocoderdesc_t.FreqRangeEnd
Write: vmixvocoderdesc_t.FreqRangeEnd = value
```
## FldBUnvoicedGain 
```lua
--- @type number
Read: vmixvocoderdesc_t.FldBUnvoicedGain
Write: vmixvocoderdesc_t.FldBUnvoicedGain = value
```
## AttackTimeMS 
```lua
--- @type number
Read: vmixvocoderdesc_t.AttackTimeMS
Write: vmixvocoderdesc_t.AttackTimeMS = value
```
## ReleaseTimeMS 
```lua
--- @type number
Read: vmixvocoderdesc_t.ReleaseTimeMS
Write: vmixvocoderdesc_t.ReleaseTimeMS = value
```
## DebugBand 
```lua
--- @type number
Read: vmixvocoderdesc_t.DebugBand
Write: vmixvocoderdesc_t.DebugBand = value
```
## PeakMode 
```lua
--- @type boolean
Read: vmixvocoderdesc_t.PeakMode
Write: vmixvocoderdesc_t.PeakMode = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixvocoderdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixvocoderdesc_t:IsValid()
```

:::