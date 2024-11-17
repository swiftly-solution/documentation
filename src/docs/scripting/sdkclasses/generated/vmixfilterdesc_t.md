---
title: VMixFilterDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixFilterDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixFilterDesc_t(ptr)
```
# Properties
## FilterType 
```lua
--- @type number
Read: vmixfilterdesc_t.FilterType
Write: vmixfilterdesc_t.FilterType = value
```
## FilterSlope 
```lua
--- @type number
Read: vmixfilterdesc_t.FilterSlope
Write: vmixfilterdesc_t.FilterSlope = value
```
## Enabled 
```lua
--- @type boolean
Read: vmixfilterdesc_t.Enabled
Write: vmixfilterdesc_t.Enabled = value
```
## FldbGain 
```lua
--- @type number
Read: vmixfilterdesc_t.FldbGain
Write: vmixfilterdesc_t.FldbGain = value
```
## CutoffFreq 
```lua
--- @type number
Read: vmixfilterdesc_t.CutoffFreq
Write: vmixfilterdesc_t.CutoffFreq = value
```
## Q 
```lua
--- @type number
Read: vmixfilterdesc_t.Q
Write: vmixfilterdesc_t.Q = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixfilterdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixfilterdesc_t:IsValid()
```

:::