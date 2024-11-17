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
--- @param ptr string
thinkfunc_t(ptr)
```
# Properties
## Context 
```lua
--- @type number
Read: thinkfunc_t.Context
Write: thinkfunc_t.Context = value
```
## NextThinkTick 
```lua
--- @type number
Read: thinkfunc_t.NextThinkTick
Write: thinkfunc_t.NextThinkTick = value
```
## LastThinkTick 
```lua
--- @type number
Read: thinkfunc_t.LastThinkTick
Write: thinkfunc_t.LastThinkTick = value
```
# Functions
## ToPtr
```lua
--- @return string
thinkfunc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
thinkfunc_t:IsValid()
```

:::