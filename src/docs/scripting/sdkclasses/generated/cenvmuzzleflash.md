---
title: CEnvMuzzleFlash
index: true
order: 2
category:
  - Guide
---

# CEnvMuzzleFlash

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvMuzzleFlash(ptr)
```
# Properties
## Scale 
```lua
--- @type number
Read: cenvmuzzleflash.Scale
Write: cenvmuzzleflash.Scale = value
```
## ParentAttachment 
```lua
--- @type string
Read: cenvmuzzleflash.ParentAttachment
Write: cenvmuzzleflash.ParentAttachment = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvmuzzleflash.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvmuzzleflash:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvmuzzleflash:IsValid()
```

:::