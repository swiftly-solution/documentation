---
title: CCSPlayer_ItemServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_ItemServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_ItemServices(ptr --[[ string ]])
```
# Properties
## HasDefuser 
```lua
@type boolean
Read: ccsplayer_itemservices.HasDefuser
Write: ccsplayer_itemservices.HasDefuser = value
```
## HasHelmet 
```lua
@type boolean
Read: ccsplayer_itemservices.HasHelmet
Write: ccsplayer_itemservices.HasHelmet = value
```
## HasHeavyArmor 
```lua
@type boolean
Read: ccsplayer_itemservices.HasHeavyArmor
Write: ccsplayer_itemservices.HasHeavyArmor = value
```
## Parent (Read-Only)
```lua
@type CPlayer_ItemServices
Read: ccsplayer_itemservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_itemservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_itemservices:IsValid()
```

:::