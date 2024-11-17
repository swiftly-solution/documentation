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
--- @param ptr string
CBaseFilter(ptr)
```
# Properties
## Negated 
```lua
--- @type boolean
Read: cbasefilter.Negated
Write: cbasefilter.Negated = value
```
## OnPass (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbasefilter.OnPass
```
## OnFail (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbasefilter.OnFail
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cbasefilter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbasefilter:ToPtr()
```
## IsValid
```lua
--- @return bool
cbasefilter:IsValid()
```

:::