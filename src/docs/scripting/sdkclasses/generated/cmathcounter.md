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
--- @param ptr string
CMathCounter(ptr)
```
# Properties
## Min 
```lua
--- @type number
Read: cmathcounter.Min
Write: cmathcounter.Min = value
```
## Max 
```lua
--- @type number
Read: cmathcounter.Max
Write: cmathcounter.Max = value
```
## HitMin 
```lua
--- @type boolean
Read: cmathcounter.HitMin
Write: cmathcounter.HitMin = value
```
## HitMax 
```lua
--- @type boolean
Read: cmathcounter.HitMax
Write: cmathcounter.HitMax = value
```
## Disabled 
```lua
--- @type boolean
Read: cmathcounter.Disabled
Write: cmathcounter.Disabled = value
```
## OnHitMin (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathcounter.OnHitMin
```
## OnHitMax (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathcounter.OnHitMax
```
## OnChangedFromMin (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathcounter.OnChangedFromMin
```
## OnChangedFromMax (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathcounter.OnChangedFromMax
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cmathcounter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmathcounter:ToPtr()
```
## IsValid
```lua
--- @return bool
cmathcounter:IsValid()
```

:::