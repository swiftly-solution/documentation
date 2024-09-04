---
title: CColorCorrectionVolume
index: true
order: 2
category:
  - Guide
---

# CColorCorrectionVolume

::: tabs
@tab Lua
# Constructor
```lua
CColorCorrectionVolume(ptr --[[ string ]])
```
# Properties
## Enabled 
```lua
@type boolean
Read: ccolorcorrectionvolume.Enabled
Write: ccolorcorrectionvolume.Enabled = value
```
## MaxWeight 
```lua
@type number
Read: ccolorcorrectionvolume.MaxWeight
Write: ccolorcorrectionvolume.MaxWeight = value
```
## FadeDuration 
```lua
@type number
Read: ccolorcorrectionvolume.FadeDuration
Write: ccolorcorrectionvolume.FadeDuration = value
```
## StartDisabled 
```lua
@type boolean
Read: ccolorcorrectionvolume.StartDisabled
Write: ccolorcorrectionvolume.StartDisabled = value
```
## Weight 
```lua
@type number
Read: ccolorcorrectionvolume.Weight
Write: ccolorcorrectionvolume.Weight = value
```
## LookupFilename 
```lua
@type string
Read: ccolorcorrectionvolume.LookupFilename
Write: ccolorcorrectionvolume.LookupFilename = value
```
## LastEnterWeight 
```lua
@type number
Read: ccolorcorrectionvolume.LastEnterWeight
Write: ccolorcorrectionvolume.LastEnterWeight = value
```
## LastEnterTime 
```lua
@type number
Read: ccolorcorrectionvolume.LastEnterTime
Write: ccolorcorrectionvolume.LastEnterTime = value
```
## LastExitWeight 
```lua
@type number
Read: ccolorcorrectionvolume.LastExitWeight
Write: ccolorcorrectionvolume.LastExitWeight = value
```
## LastExitTime 
```lua
@type number
Read: ccolorcorrectionvolume.LastExitTime
Write: ccolorcorrectionvolume.LastExitTime = value
```
## Parent (Read-Only)
```lua
@type CBaseTrigger
Read: ccolorcorrectionvolume.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccolorcorrectionvolume:ToPtr()
```
## IsValid
```lua
@returns bool
ccolorcorrectionvolume:IsValid()
```

:::