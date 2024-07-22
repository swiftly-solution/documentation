---
title: thinkfunc_t
index: true
order: 2
category:
  - Guide
---

# thinkfunc_t

::: tabs
@tab Lua
# Constructor
```lua
thinkfunc_t(ptr --[[ string ]])
```
# Properties
## Context 
```lua
@type number
Read: thinkfunc_t.Context
Write: thinkfunc_t.Context = value
```
## NextThinkTick 
```lua
@type number
Read: thinkfunc_t.NextThinkTick
Write: thinkfunc_t.NextThinkTick = value
```
## LastThinkTick 
```lua
@type number
Read: thinkfunc_t.LastThinkTick
Write: thinkfunc_t.LastThinkTick = value
```
# Functions
## ToPtr
```lua
@returns string
thinkfunc_t:ToPtr()
```
## IsValid
```lua
@returns bool
thinkfunc_t:IsValid()
```

:::