---
title: CGeneralSpin
index: true
order: 2
category:
  - Guide
---

# CGeneralSpin

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGeneralSpin(ptr)
```
# Properties
## SpinRateDegrees 
```lua
--- @type number
Read: cgeneralspin.SpinRateDegrees
Write: cgeneralspin.SpinRateDegrees = value
```
## SpinRateMinDegrees 
```lua
--- @type number
Read: cgeneralspin.SpinRateMinDegrees
Write: cgeneralspin.SpinRateMinDegrees = value
```
## SpinRateStopTime 
```lua
--- @type number
Read: cgeneralspin.SpinRateStopTime
Write: cgeneralspin.SpinRateStopTime = value
```
## Parent (Read-Only)
```lua
--- @type CParticleFunctionOperator
Read: cgeneralspin.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cgeneralspin:ToPtr()
```
## IsValid
```lua
--- @return bool
cgeneralspin:IsValid()
```

:::