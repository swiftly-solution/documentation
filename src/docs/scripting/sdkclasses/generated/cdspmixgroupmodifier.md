---
title: CDSPMixgroupModifier
index: true
order: 2
category:
  - Guide
---

# CDSPMixgroupModifier

::: tabs
@tab Lua
# Constructor
```lua
CDSPMixgroupModifier(ptr)
```
# Properties
## Mixgroup 
```lua
--- @type string
Read: cdspmixgroupmodifier.Mixgroup
Write: cdspmixgroupmodifier.Mixgroup = value
```
## Modifier 
```lua
--- @type number
Read: cdspmixgroupmodifier.Modifier
Write: cdspmixgroupmodifier.Modifier = value
```
## ModifierMin 
```lua
--- @type number
Read: cdspmixgroupmodifier.ModifierMin
Write: cdspmixgroupmodifier.ModifierMin = value
```
## SourceModifier 
```lua
--- @type number
Read: cdspmixgroupmodifier.SourceModifier
Write: cdspmixgroupmodifier.SourceModifier = value
```
## SourceModifierMin 
```lua
--- @type number
Read: cdspmixgroupmodifier.SourceModifierMin
Write: cdspmixgroupmodifier.SourceModifierMin = value
```
## ListenerReverbModifierWhenSourceReverbIsActive 
```lua
--- @type number
Read: cdspmixgroupmodifier.ListenerReverbModifierWhenSourceReverbIsActive
Write: cdspmixgroupmodifier.ListenerReverbModifierWhenSourceReverbIsActive = value
```
# Functions
## ToPtr
```lua
@returns string
cdspmixgroupmodifier:ToPtr()
```
## IsValid
```lua
@returns bool
cdspmixgroupmodifier:IsValid()
```

:::