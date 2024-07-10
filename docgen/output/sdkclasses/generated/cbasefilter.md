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
## OnPass 
```lua
@type CEntityIOOutput
Read: cbasefilter.OnPass
Write: cbasefilter.OnPass = value
```
## OnFail 
```lua
@type CEntityIOOutput
Read: cbasefilter.OnFail
Write: cbasefilter.OnFail = value
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