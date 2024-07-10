---
title: AggregateMeshInfo_t
index: true
order: 2
category:
  - Guide
---

# AggregateMeshInfo_t

::: tabs
@tab Lua
# Constructor
```lua
AggregateMeshInfo_t(ptr --[[ string ]])
```
# Properties
## VisClusterMemberOffset 
```lua
@type number
Read: aggregatemeshinfo_t.VisClusterMemberOffset
Write: aggregatemeshinfo_t.VisClusterMemberOffset = value
```
## VisClusterMemberCount 
```lua
@type number
Read: aggregatemeshinfo_t.VisClusterMemberCount
Write: aggregatemeshinfo_t.VisClusterMemberCount = value
```
## HasTransform 
```lua
@type boolean
Read: aggregatemeshinfo_t.HasTransform
Write: aggregatemeshinfo_t.HasTransform = value
```
## DrawCallIndex 
```lua
@type number
Read: aggregatemeshinfo_t.DrawCallIndex
Write: aggregatemeshinfo_t.DrawCallIndex = value
```
## LODSetupIndex 
```lua
@type number
Read: aggregatemeshinfo_t.LODSetupIndex
Write: aggregatemeshinfo_t.LODSetupIndex = value
```
## LODGroupMask 
```lua
@type number
Read: aggregatemeshinfo_t.LODGroupMask
Write: aggregatemeshinfo_t.LODGroupMask = value
```
## TintColor 
```lua
@type Color
Read: aggregatemeshinfo_t.TintColor
Write: aggregatemeshinfo_t.TintColor = value
```
## ObjectFlags 
```lua
@type number
Read: aggregatemeshinfo_t.ObjectFlags
Write: aggregatemeshinfo_t.ObjectFlags = value
```
## LightProbeVolumePrecomputedHandshake 
```lua
@type number
Read: aggregatemeshinfo_t.LightProbeVolumePrecomputedHandshake
Write: aggregatemeshinfo_t.LightProbeVolumePrecomputedHandshake = value
```
# Functions
## ToPtr
```lua
@returns string
aggregatemeshinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
aggregatemeshinfo_t:IsValid()
```

:::