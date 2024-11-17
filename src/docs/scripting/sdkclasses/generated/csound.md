---
title: CSound
index: true
order: 2
category:
  - Guide
---

# CSound

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSound(ptr)
```
# Properties
## Owner (Read-Only)
```lua
--- @type CBaseEntity
Read: csound.Owner
```
## Target (Read-Only)
```lua
--- @type CBaseEntity
Read: csound.Target
```
## Volume 
```lua
--- @type number
Read: csound.Volume
Write: csound.Volume = value
```
## OcclusionScale 
```lua
--- @type number
Read: csound.OcclusionScale
Write: csound.OcclusionScale = value
```
## NextAudible 
```lua
--- @type number
Read: csound.NextAudible
Write: csound.NextAudible = value
```
## ExpireTime 
```lua
--- @type number
Read: csound.ExpireTime
Write: csound.ExpireTime = value
```
## Next 
```lua
--- @type number
Read: csound.Next
Write: csound.Next = value
```
## NoExpirationTime 
```lua
--- @type boolean
Read: csound.NoExpirationTime
Write: csound.NoExpirationTime = value
```
## OwnerChannelIndex 
```lua
--- @type number
Read: csound.OwnerChannelIndex
Write: csound.OwnerChannelIndex = value
```
## Origin 
```lua
--- @type Vector
Read: csound.Origin
Write: csound.Origin = value
```
## HasOwner 
```lua
--- @type boolean
Read: csound.HasOwner
Write: csound.HasOwner = value
```
# Functions
## ToPtr
```lua
--- @return string
csound:ToPtr()
```
## IsValid
```lua
--- @return bool
csound:IsValid()
```

:::