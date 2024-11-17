---
title: sndopvarlatchdata_t
index: true
order: 2
category:
  - Guide
---

# sndopvarlatchdata_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
sndopvarlatchdata_t(ptr)
```
# Properties
## Stack 
```lua
--- @type string
Read: sndopvarlatchdata_t.Stack
Write: sndopvarlatchdata_t.Stack = value
```
## Operator 
```lua
--- @type string
Read: sndopvarlatchdata_t.Operator
Write: sndopvarlatchdata_t.Operator = value
```
## Opvar 
```lua
--- @type string
Read: sndopvarlatchdata_t.Opvar
Write: sndopvarlatchdata_t.Opvar = value
```
## Val 
```lua
--- @type number
Read: sndopvarlatchdata_t.Val
Write: sndopvarlatchdata_t.Val = value
```
## Pos 
```lua
--- @type Vector
Read: sndopvarlatchdata_t.Pos
Write: sndopvarlatchdata_t.Pos = value
```
# Functions
## ToPtr
```lua
--- @return string
sndopvarlatchdata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
sndopvarlatchdata_t:IsValid()
```

:::