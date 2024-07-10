---
title: CMathCounter
index: true
order: 2
category:
  - Guide
---

# CMathCounter

::: tabs
@tab Lua
# Constructor
```lua
CMathCounter(ptr --[[ string ]])
```
# Properties
## Min 
```lua
@type number
Read: cmathcounter.Min
Write: cmathcounter.Min = value
```
## Max 
```lua
@type number
Read: cmathcounter.Max
Write: cmathcounter.Max = value
```
## HitMin 
```lua
@type boolean
Read: cmathcounter.HitMin
Write: cmathcounter.HitMin = value
```
## HitMax 
```lua
@type boolean
Read: cmathcounter.HitMax
Write: cmathcounter.HitMax = value
```
## Disabled 
```lua
@type boolean
Read: cmathcounter.Disabled
Write: cmathcounter.Disabled = value
```
## OnHitMin 
```lua
@type CEntityIOOutput
Read: cmathcounter.OnHitMin
Write: cmathcounter.OnHitMin = value
```
## OnHitMax 
```lua
@type CEntityIOOutput
Read: cmathcounter.OnHitMax
Write: cmathcounter.OnHitMax = value
```
## OnChangedFromMin 
```lua
@type CEntityIOOutput
Read: cmathcounter.OnChangedFromMin
Write: cmathcounter.OnChangedFromMin = value
```
## OnChangedFromMax 
```lua
@type CEntityIOOutput
Read: cmathcounter.OnChangedFromMax
Write: cmathcounter.OnChangedFromMax = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cmathcounter.Parent
Write: cmathcounter.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cmathcounter:ToPtr()
```
## IsValid
```lua
@returns bool
cmathcounter:IsValid()
```

:::