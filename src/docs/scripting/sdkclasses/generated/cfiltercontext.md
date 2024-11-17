---
title: CFilterContext
index: true
order: 2
category:
  - Guide
---

# CFilterContext

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFilterContext(ptr)
```
# Properties
## FilterContext 
```lua
--- @type string
Read: cfiltercontext.FilterContext
Write: cfiltercontext.FilterContext = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfiltercontext.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfiltercontext:ToPtr()
```
## IsValid
```lua
--- @return bool
cfiltercontext:IsValid()
```

:::