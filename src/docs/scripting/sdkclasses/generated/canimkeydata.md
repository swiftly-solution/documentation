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
CAnimKeyData(ptr)
```
# Properties
## BoneArray (Read-Only)
```lua
--- @type table
Read: canimkeydata.BoneArray
```
## UserArray (Read-Only)
```lua
--- @type table
Read: canimkeydata.UserArray
```
## ChannelElements 
```lua
--- @type number
Read: canimkeydata.ChannelElements
Write: canimkeydata.ChannelElements = value
```
## DataChannelArray (Read-Only)
```lua
--- @type table
Read: canimkeydata.DataChannelArray
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