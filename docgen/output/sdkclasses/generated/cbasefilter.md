---
title: CBaseFilter
index: true
order: 2
category:
  - Guide
---

# CBaseFilter

::: tabs
@tab Lua
# Constructor
```lua
CBaseFilter(ptr --[[ string ]])
```
# Properties
## Negated 
```lua
@type boolean
Read: cbasefilter.Negated
Write: cbasefilter.Negated = value
```
## OnPass (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasefilter.OnPass
```
## OnFail (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasefilter.OnFail
```
## Parent 
```lua
@type CLogicalEntity
Read: cbasefilter.Parent
Write: cbasefilter.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasefilter:ToPtr()
```
## IsValid
```lua
@returns bool
cbasefilter:IsValid()
```

:::