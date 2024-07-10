---
title: CDynamicProp
index: true
order: 2
category:
  - Guide
---

# CDynamicProp

::: tabs
@tab Lua
# Constructor
```lua
CDynamicProp(ptr --[[ string ]])
```
# Properties
## CreateNavObstacle 
```lua
@type boolean
Read: cdynamicprop.CreateNavObstacle
Write: cdynamicprop.CreateNavObstacle = value
```
## UseHitboxesForRenderBox 
```lua
@type boolean
Read: cdynamicprop.UseHitboxesForRenderBox
Write: cdynamicprop.UseHitboxesForRenderBox = value
```
## UseAnimGraph 
```lua
@type boolean
Read: cdynamicprop.UseAnimGraph
Write: cdynamicprop.UseAnimGraph = value
```
## OutputAnimBegun 
```lua
@type CEntityIOOutput
Read: cdynamicprop.OutputAnimBegun
Write: cdynamicprop.OutputAnimBegun = value
```
## OutputAnimOver 
```lua
@type CEntityIOOutput
Read: cdynamicprop.OutputAnimOver
Write: cdynamicprop.OutputAnimOver = value
```
## OutputAnimLoopCycleOver 
```lua
@type CEntityIOOutput
Read: cdynamicprop.OutputAnimLoopCycleOver
Write: cdynamicprop.OutputAnimLoopCycleOver = value
```
## OnAnimReachedStart 
```lua
@type CEntityIOOutput
Read: cdynamicprop.OnAnimReachedStart
Write: cdynamicprop.OnAnimReachedStart = value
```
## OnAnimReachedEnd 
```lua
@type CEntityIOOutput
Read: cdynamicprop.OnAnimReachedEnd
Write: cdynamicprop.OnAnimReachedEnd = value
```
## IdleAnim 
```lua
@type string
Read: cdynamicprop.IdleAnim
Write: cdynamicprop.IdleAnim = value
```
## IdleAnimLoopMode 
```lua
@type number
Read: cdynamicprop.IdleAnimLoopMode
Write: cdynamicprop.IdleAnimLoopMode = value
```
## RandomizeCycle 
```lua
@type boolean
Read: cdynamicprop.RandomizeCycle
Write: cdynamicprop.RandomizeCycle = value
```
## StartDisabled 
```lua
@type boolean
Read: cdynamicprop.StartDisabled
Write: cdynamicprop.StartDisabled = value
```
## FiredStartEndOutput 
```lua
@type boolean
Read: cdynamicprop.FiredStartEndOutput
Write: cdynamicprop.FiredStartEndOutput = value
```
## ForceNpcExclude 
```lua
@type boolean
Read: cdynamicprop.ForceNpcExclude
Write: cdynamicprop.ForceNpcExclude = value
```
## CreateNonSolid 
```lua
@type boolean
Read: cdynamicprop.CreateNonSolid
Write: cdynamicprop.CreateNonSolid = value
```
## IsOverrideProp 
```lua
@type boolean
Read: cdynamicprop.IsOverrideProp
Write: cdynamicprop.IsOverrideProp = value
```
## InitialGlowState 
```lua
@type number
Read: cdynamicprop.InitialGlowState
Write: cdynamicprop.InitialGlowState = value
```
## GlowRange 
```lua
@type number
Read: cdynamicprop.GlowRange
Write: cdynamicprop.GlowRange = value
```
## GlowRangeMin 
```lua
@type number
Read: cdynamicprop.GlowRangeMin
Write: cdynamicprop.GlowRangeMin = value
```
## GlowColor 
```lua
@type Color
Read: cdynamicprop.GlowColor
Write: cdynamicprop.GlowColor = value
```
## GlowTeam 
```lua
@type number
Read: cdynamicprop.GlowTeam
Write: cdynamicprop.GlowTeam = value
```
## Parent 
```lua
@type CBreakableProp
Read: cdynamicprop.Parent
Write: cdynamicprop.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cdynamicprop:ToPtr()
```
## IsValid
```lua
@returns bool
cdynamicprop:IsValid()
```

:::