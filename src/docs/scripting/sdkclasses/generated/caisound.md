---
title: CAISound
index: true
order: 2
category:
  - Guide
---

# CAISound

::: tabs
@tab Lua
# Constructor
```lua
CAISound(ptr)
```
# Properties
## SoundType 
```lua
--- @type number
Read: caisound.SoundType
Write: caisound.SoundType = value
```
## SoundFlags 
```lua
--- @type number
Read: caisound.SoundFlags
Write: caisound.SoundFlags = value
```
## Volume 
```lua
--- @type number
Read: caisound.Volume
Write: caisound.Volume = value
```
## SoundIndex 
```lua
--- @type number
Read: caisound.SoundIndex
Write: caisound.SoundIndex = value
```
## Duration 
```lua
--- @type number
Read: caisound.Duration
Write: caisound.Duration = value
```
## ProxyEntityName 
```lua
--- @type string
Read: caisound.ProxyEntityName
Write: caisound.ProxyEntityName = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: caisound.Parent
```
# Functions
## ToPtr
```lua
@returns string
caisound:ToPtr()
```
## IsValid
```lua
@returns bool
caisound:IsValid()
```

:::