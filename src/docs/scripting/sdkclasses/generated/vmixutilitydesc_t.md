---
title: VMixUtilityDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixUtilityDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixUtilityDesc_t(ptr)
```
# Properties
## Op 
```lua
--- @type number
Read: vmixutilitydesc_t.Op
Write: vmixutilitydesc_t.Op = value
```
## InputPan 
```lua
--- @type number
Read: vmixutilitydesc_t.InputPan
Write: vmixutilitydesc_t.InputPan = value
```
## OutputBalance 
```lua
--- @type number
Read: vmixutilitydesc_t.OutputBalance
Write: vmixutilitydesc_t.OutputBalance = value
```
## FldbOutputGain 
```lua
--- @type number
Read: vmixutilitydesc_t.FldbOutputGain
Write: vmixutilitydesc_t.FldbOutputGain = value
```
## BassMono 
```lua
--- @type boolean
Read: vmixutilitydesc_t.BassMono
Write: vmixutilitydesc_t.BassMono = value
```
## BassFreq 
```lua
--- @type number
Read: vmixutilitydesc_t.BassFreq
Write: vmixutilitydesc_t.BassFreq = value
```
# Functions
## ToPtr
```lua
@returns string
vmixutilitydesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixutilitydesc_t:IsValid()
```

:::