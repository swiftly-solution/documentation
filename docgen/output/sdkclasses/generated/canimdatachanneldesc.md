---
title: CAnimDataChannelDesc
index: true
order: 2
category:
  - Guide
---

# CAnimDataChannelDesc

::: tabs
@tab Lua
# Constructor
```lua
CAnimDataChannelDesc(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: canimdatachanneldesc.Flags
Write: canimdatachanneldesc.Flags = value
```
## Type 
```lua
@type number
Read: canimdatachanneldesc.Type
Write: canimdatachanneldesc.Type = value
```
## ElementIndexArray (Read-Only)
```lua
@type table
Read: canimdatachanneldesc.ElementIndexArray
```
## ElementMaskArray (Read-Only)
```lua
@type table
Read: canimdatachanneldesc.ElementMaskArray
```
# Functions
## ToPtr
```lua
@returns string
canimdatachanneldesc:ToPtr()
```
## IsValid
```lua
@returns bool
canimdatachanneldesc:IsValid()
```

:::