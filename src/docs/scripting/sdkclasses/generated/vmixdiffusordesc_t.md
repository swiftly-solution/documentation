---
title: VMixDiffusorDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixDiffusorDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixDiffusorDesc_t(ptr --[[ string ]])
```
# Properties
## Size 
```lua
@type number
Read: vmixdiffusordesc_t.Size
Write: vmixdiffusordesc_t.Size = value
```
## Complexity 
```lua
@type number
Read: vmixdiffusordesc_t.Complexity
Write: vmixdiffusordesc_t.Complexity = value
```
## Feedback 
```lua
@type number
Read: vmixdiffusordesc_t.Feedback
Write: vmixdiffusordesc_t.Feedback = value
```
## OutputGain 
```lua
@type number
Read: vmixdiffusordesc_t.OutputGain
Write: vmixdiffusordesc_t.OutputGain = value
```
# Functions
## ToPtr
```lua
@returns string
vmixdiffusordesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixdiffusordesc_t:IsValid()
```

:::