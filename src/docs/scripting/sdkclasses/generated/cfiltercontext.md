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
CFilterContext(ptr --[[ string ]])
```
# Properties
## FilterContext 
```lua
@type string
Read: cfiltercontext.FilterContext
Write: cfiltercontext.FilterContext = value
```
## Parent (Read-Only)
```lua
@type CBaseFilter
Read: cfiltercontext.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfiltercontext:ToPtr()
```
## IsValid
```lua
@returns bool
cfiltercontext:IsValid()
```

:::