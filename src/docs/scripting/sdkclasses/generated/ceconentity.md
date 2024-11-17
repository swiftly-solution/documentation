---
title: CEconEntity
index: true
order: 2
category:
  - Guide
---

# CEconEntity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEconEntity(ptr)
```
# Properties
## AttributeManager (Read-Only)
```lua
--- @type CAttributeContainer
Read: ceconentity.AttributeManager
```
## OriginalOwnerXuidLow 
```lua
--- @type number
Read: ceconentity.OriginalOwnerXuidLow
Write: ceconentity.OriginalOwnerXuidLow = value
```
## OriginalOwnerXuidHigh 
```lua
--- @type number
Read: ceconentity.OriginalOwnerXuidHigh
Write: ceconentity.OriginalOwnerXuidHigh = value
```
## FallbackPaintKit 
```lua
--- @type number
Read: ceconentity.FallbackPaintKit
Write: ceconentity.FallbackPaintKit = value
```
## FallbackSeed 
```lua
--- @type number
Read: ceconentity.FallbackSeed
Write: ceconentity.FallbackSeed = value
```
## FallbackWear 
```lua
--- @type number
Read: ceconentity.FallbackWear
Write: ceconentity.FallbackWear = value
```
## FallbackStatTrak 
```lua
--- @type number
Read: ceconentity.FallbackStatTrak
Write: ceconentity.FallbackStatTrak = value
```
## OldProvidee (Read-Only)
```lua
--- @type CBaseEntity
Read: ceconentity.OldProvidee
```
## OldOwnerClass 
```lua
--- @type number
Read: ceconentity.OldOwnerClass
Write: ceconentity.OldOwnerClass = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFlex
Read: ceconentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ceconentity:ToPtr()
```
## IsValid
```lua
--- @return bool
ceconentity:IsValid()
```

:::