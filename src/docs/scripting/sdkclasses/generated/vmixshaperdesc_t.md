---
title: VMixShaperDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixShaperDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixShaperDesc_t(ptr)
```
# Properties
## Shape 
```lua
--- @type number
Read: vmixshaperdesc_t.Shape
Write: vmixshaperdesc_t.Shape = value
```
## FldbDrive 
```lua
--- @type number
Read: vmixshaperdesc_t.FldbDrive
Write: vmixshaperdesc_t.FldbDrive = value
```
## FldbOutputGain 
```lua
--- @type number
Read: vmixshaperdesc_t.FldbOutputGain
Write: vmixshaperdesc_t.FldbOutputGain = value
```
## WetMix 
```lua
--- @type number
Read: vmixshaperdesc_t.WetMix
Write: vmixshaperdesc_t.WetMix = value
```
## OversampleFactor 
```lua
--- @type number
Read: vmixshaperdesc_t.OversampleFactor
Write: vmixshaperdesc_t.OversampleFactor = value
```
# Functions
## ToPtr
```lua
@returns string
vmixshaperdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixshaperdesc_t:IsValid()
```

:::