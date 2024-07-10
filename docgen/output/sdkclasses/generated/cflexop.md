---
title: CFlexOp
index: true
order: 2
category:
  - Guide
---

# CFlexOp

::: tabs
@tab Lua
# Constructor
```lua
CFlexOp(ptr --[[ string ]])
```
# Properties
## OpCode 
```lua
@type number
Read: cflexop.OpCode
Write: cflexop.OpCode = value
```
## Data 
```lua
@type number
Read: cflexop.Data
Write: cflexop.Data = value
```
# Functions
## ToPtr
```lua
@returns string
cflexop:ToPtr()
```
## IsValid
```lua
@returns bool
cflexop:IsValid()
```

:::