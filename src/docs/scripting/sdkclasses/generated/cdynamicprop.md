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
CDynamicProp(ptr)
```
# Properties
## CreateNavObstacle 
```lua
--- @type boolean
Read: cdynamicprop.CreateNavObstacle
Write: cdynamicprop.CreateNavObstacle = value
```
## NavObstacleUpdatesOverridden 
```lua
--- @type boolean
Read: cdynamicprop.NavObstacleUpdatesOverridden
Write: cdynamicprop.NavObstacleUpdatesOverridden = value
```
## UseHitboxesForRenderBox 
```lua
--- @type boolean
Read: cdynamicprop.UseHitboxesForRenderBox
Write: cdynamicprop.UseHitboxesForRenderBox = value
```
## UseAnimGraph 
```lua
--- @type boolean
Read: cdynamicprop.UseAnimGraph
Write: cdynamicprop.UseAnimGraph = value
```
## OutputAnimBegun (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cdynamicprop.OutputAnimBegun
```
## OutputAnimOver (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cdynamicprop.OutputAnimOver
```
## OutputAnimLoopCycleOver (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cdynamicprop.OutputAnimLoopCycleOver
```
## OnAnimReachedStart (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cdynamicprop.OnAnimReachedStart
```
## OnAnimReachedEnd (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cdynamicprop.OnAnimReachedEnd
```
## IdleAnim 
```lua
--- @type string
Read: cdynamicprop.IdleAnim
Write: cdynamicprop.IdleAnim = value
```
## IdleAnimLoopMode 
```lua
--- @type number
Read: cdynamicprop.IdleAnimLoopMode
Write: cdynamicprop.IdleAnimLoopMode = value
```
## RandomizeCycle 
```lua
--- @type boolean
Read: cdynamicprop.RandomizeCycle
Write: cdynamicprop.RandomizeCycle = value
```
## StartDisabled 
```lua
--- @type boolean
Read: cdynamicprop.StartDisabled
Write: cdynamicprop.StartDisabled = value
```
## FiredStartEndOutput 
```lua
--- @type boolean
Read: cdynamicprop.FiredStartEndOutput
Write: cdynamicprop.FiredStartEndOutput = value
```
## ForceNpcExclude 
```lua
--- @type boolean
Read: cdynamicprop.ForceNpcExclude
Write: cdynamicprop.ForceNpcExclude = value
```
## CreateNonSolid 
```lua
--- @type boolean
Read: cdynamicprop.CreateNonSolid
Write: cdynamicprop.CreateNonSolid = value
```
## IsOverrideProp 
```lua
--- @type boolean
Read: cdynamicprop.IsOverrideProp
Write: cdynamicprop.IsOverrideProp = value
```
## InitialGlowState 
```lua
--- @type number
Read: cdynamicprop.InitialGlowState
Write: cdynamicprop.InitialGlowState = value
```
## GlowRange 
```lua
--- @type number
Read: cdynamicprop.GlowRange
Write: cdynamicprop.GlowRange = value
```
## GlowRangeMin 
```lua
--- @type number
Read: cdynamicprop.GlowRangeMin
Write: cdynamicprop.GlowRangeMin = value
```
## GlowColor 
```lua
--- @type Color
Read: cdynamicprop.GlowColor
Write: cdynamicprop.GlowColor = value
```
## GlowTeam 
```lua
--- @type number
Read: cdynamicprop.GlowTeam
Write: cdynamicprop.GlowTeam = value
```
## Parent (Read-Only)
```lua
--- @type CBreakableProp
Read: cdynamicprop.Parent
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