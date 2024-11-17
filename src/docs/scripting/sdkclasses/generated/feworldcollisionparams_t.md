---
title: FeWorldCollisionParams_t
index: true
order: 2
category:
  - Guide
---

# FeWorldCollisionParams_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeWorldCollisionParams_t(ptr)
```
# Properties
## WorldFriction 
```lua
--- @type number
Read: feworldcollisionparams_t.WorldFriction
Write: feworldcollisionparams_t.WorldFriction = value
```
## GroundFriction 
```lua
--- @type number
Read: feworldcollisionparams_t.GroundFriction
Write: feworldcollisionparams_t.GroundFriction = value
```
## ListBegin 
```lua
--- @type number
Read: feworldcollisionparams_t.ListBegin
Write: feworldcollisionparams_t.ListBegin = value
```
## ListEnd 
```lua
--- @type number
Read: feworldcollisionparams_t.ListEnd
Write: feworldcollisionparams_t.ListEnd = value
```
# Functions
## ToPtr
```lua
--- @return string
feworldcollisionparams_t:ToPtr()
```
## IsValid
```lua
--- @return bool
feworldcollisionparams_t:IsValid()
```

:::