---
title: CFilterClass
index: true
order: 2
category:
  - Guide
---

# CFilterClass

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFilterClass(ptr)
```
# Properties
## FilterClass 
```lua
--- @type string
Read: cfilterclass.FilterClass
Write: cfilterclass.FilterClass = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfilterclass.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfilterclass:ToPtr()
```
## IsValid
```lua
--- @return bool
cfilterclass:IsValid()
```

:::