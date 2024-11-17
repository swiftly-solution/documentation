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
--- @param ptr string
CFlexOp(ptr)
```
# Properties
## OpCode 
```lua
--- @type number
Read: cflexop.OpCode
Write: cflexop.OpCode = value
```
## Data 
```lua
--- @type number
Read: cflexop.Data
Write: cflexop.Data = value
```
# Functions
## ToPtr
```lua
--- @return string
cflexop:ToPtr()
```
## IsValid
```lua
--- @return bool
cflexop:IsValid()
```

:::