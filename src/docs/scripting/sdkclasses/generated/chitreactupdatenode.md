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
## OpFixedSettings (Read-Only)
```lua
@type HitReactFixedSettings_t
Read: chitreactupdatenode.OpFixedSettings
```
## TriggerParam (Read-Only)
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.TriggerParam
```
## HitBoneParam (Read-Only)
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitBoneParam
```
## HitOffsetParam (Read-Only)
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitOffsetParam
```
## HitDirectionParam (Read-Only)
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitDirectionParam
```
## HitStrengthParam (Read-Only)
```lua
@type CAnimParamHandle
Read: chitreactupdatenode.HitStrengthParam
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
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: chitreactupdatenode.Parent
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