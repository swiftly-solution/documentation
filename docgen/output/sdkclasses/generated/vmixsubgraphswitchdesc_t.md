---
title: VMixSubgraphSwitchDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixSubgraphSwitchDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixSubgraphSwitchDesc_t(ptr --[[ string ]])
```
# Properties
## InterpolationMode 
```lua
@type number
Read: vmixsubgraphswitchdesc_t.InterpolationMode
Write: vmixsubgraphswitchdesc_t.InterpolationMode = value
```
## OnlyTailsOnFadeOut 
```lua
@type boolean
Read: vmixsubgraphswitchdesc_t.OnlyTailsOnFadeOut
Write: vmixsubgraphswitchdesc_t.OnlyTailsOnFadeOut = value
```
## InterpolationTime 
```lua
@type number
Read: vmixsubgraphswitchdesc_t.InterpolationTime
Write: vmixsubgraphswitchdesc_t.InterpolationTime = value
```
# Functions
## ToPtr
```lua
@returns string
vmixsubgraphswitchdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixsubgraphswitchdesc_t:IsValid()
```

:::