---
title: CHitReactUpdateNode
index: true
order: 2
category:
  - Guide
---

# CHitReactUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CHitReactUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedSettings 
```lua
@type HitReactFixedSettings_t
Read: chitreactupdatenode.OpFixedSettings
Write: chitreactupdatenode.OpFixedSettings = value
```
## TriggerParam 
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.TriggerParam
Write: chitreactupdatenode.TriggerParam = value
```
## HitBoneParam 
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitBoneParam
Write: chitreactupdatenode.HitBoneParam = value
```
## HitOffsetParam 
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitOffsetParam
Write: chitreactupdatenode.HitOffsetParam = value
```
## HitDirectionParam 
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitDirectionParam
Write: chitreactupdatenode.HitDirectionParam = value
```
## HitStrengthParam 
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitStrengthParam
Write: chitreactupdatenode.HitStrengthParam = value
```
## MinDelayBetweenHits 
```lua
@type number
Read: chitreactupdatenode.MinDelayBetweenHits
Write: chitreactupdatenode.MinDelayBetweenHits = value
```
## ResetChild 
```lua
@type boolean
Read: chitreactupdatenode.ResetChild
Write: chitreactupdatenode.ResetChild = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: chitreactupdatenode.Parent
Write: chitreactupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
chitreactupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
chitreactupdatenode:IsValid()
```

:::