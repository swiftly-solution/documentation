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
--- @param ptr string
CCSPlayer_ItemServices(ptr)
```
# Properties
## HasDefuser 
```lua
--- @type boolean
Read: ccsplayer_itemservices.HasDefuser
Write: ccsplayer_itemservices.HasDefuser = value
```
## HasHelmet 
```lua
--- @type boolean
Read: ccsplayer_itemservices.HasHelmet
Write: ccsplayer_itemservices.HasHelmet = value
```
## HasHeavyArmor 
```lua
--- @type boolean
Read: ccsplayer_itemservices.HasHeavyArmor
Write: ccsplayer_itemservices.HasHeavyArmor = value
```
## Parent (Read-Only)
```lua
--- @type CPlayer_ItemServices
Read: ccsplayer_itemservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayer_itemservices:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayer_itemservices:IsValid()
```

:::