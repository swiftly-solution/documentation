---
title: CColorCorrection
index: true
order: 2
category:
  - Guide
---

# CColorCorrection

::: tabs
@tab Lua
# Constructor
```lua
CColorCorrection(ptr --[[ string ]])
```
# Properties
## FadeInDuration 
```lua
@type number
Read: ccolorcorrection.FadeInDuration
Write: ccolorcorrection.FadeInDuration = value
```
## FadeOutDuration 
```lua
@type number
Read: ccolorcorrection.FadeOutDuration
Write: ccolorcorrection.FadeOutDuration = value
```
## StartFadeInWeight 
```lua
@type number
Read: ccolorcorrection.StartFadeInWeight
Write: ccolorcorrection.StartFadeInWeight = value
```
## StartFadeOutWeight 
```lua
@type number
Read: ccolorcorrection.StartFadeOutWeight
Write: ccolorcorrection.StartFadeOutWeight = value
```
## TimeStartFadeIn 
```lua
@type number
Read: ccolorcorrection.TimeStartFadeIn
Write: ccolorcorrection.TimeStartFadeIn = value
```
## TimeStartFadeOut 
```lua
@type number
Read: ccolorcorrection.TimeStartFadeOut
Write: ccolorcorrection.TimeStartFadeOut = value
```
## MaxWeight 
```lua
@type number
Read: ccolorcorrection.MaxWeight
Write: ccolorcorrection.MaxWeight = value
```
## StartDisabled 
```lua
@type boolean
Read: ccolorcorrection.StartDisabled
Write: ccolorcorrection.StartDisabled = value
```
## Enabled 
```lua
@type boolean
Read: ccolorcorrection.Enabled
Write: ccolorcorrection.Enabled = value
```
## Master 
```lua
@type boolean
Read: ccolorcorrection.Master
Write: ccolorcorrection.Master = value
```
## ClientSide 
```lua
@type boolean
Read: ccolorcorrection.ClientSide
Write: ccolorcorrection.ClientSide = value
```
## Exclusive 
```lua
@type boolean
Read: ccolorcorrection.Exclusive
Write: ccolorcorrection.Exclusive = value
```
## MinFalloff 
```lua
@type number
Read: ccolorcorrection.MinFalloff
Write: ccolorcorrection.MinFalloff = value
```
## MaxFalloff 
```lua
@type number
Read: ccolorcorrection.MaxFalloff
Write: ccolorcorrection.MaxFalloff = value
```
## CurWeight 
```lua
@type number
Read: ccolorcorrection.CurWeight
Write: ccolorcorrection.CurWeight = value
```
## NetlookupFilename 
```lua
@type string
Read: ccolorcorrection.NetlookupFilename
Write: ccolorcorrection.NetlookupFilename = value
```
## LookupFilename 
```lua
@type string
Read: ccolorcorrection.LookupFilename
Write: ccolorcorrection.LookupFilename = value
```
## Parent 
```lua
@type CBaseEntity
Read: ccolorcorrection.Parent
Write: ccolorcorrection.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccolorcorrection:ToPtr()
```
## IsValid
```lua
@returns bool
ccolorcorrection:IsValid()
```

:::