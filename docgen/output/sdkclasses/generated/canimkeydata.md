---
title: CAnimKeyData
index: true
order: 2
category:
  - Guide
---

# CAnimKeyData

::: tabs
@tab Lua
# Constructor
```lua
CAnimKeyData(ptr --[[ string ]])
```
# Properties
## BoneArray 
```lua
@type table
Read: canimkeydata.BoneArray
Write: canimkeydata.BoneArray = value
```
## UserArray 
```lua
@type table
Read: canimkeydata.UserArray
Write: canimkeydata.UserArray = value
```
## ChannelElements 
```lua
@type number
Read: canimkeydata.ChannelElements
Write: canimkeydata.ChannelElements = value
```
## DataChannelArray 
```lua
@type table
Read: canimkeydata.DataChannelArray
Write: canimkeydata.DataChannelArray = value
```
# Functions
## ToPtr
```lua
@returns string
canimkeydata:ToPtr()
```
## IsValid
```lua
@returns bool
canimkeydata:IsValid()
```

:::