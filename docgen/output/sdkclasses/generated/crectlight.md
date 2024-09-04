---
title: CRectLight
index: true
order: 2
category:
  - Guide
---

# CRectLight

::: tabs
@tab Lua
# Constructor
```lua
CRectLight(ptr --[[ string ]])
```
# Properties
## ShowLight 
```lua
@type boolean
Read: crectlight.ShowLight
Write: crectlight.ShowLight = value
```
## Parent (Read-Only)
```lua
@type CBarnLight
Read: crectlight.Parent
```
# Functions
## ToPtr
```lua
@returns string
crectlight:ToPtr()
```
## IsValid
```lua
@returns bool
crectlight:IsValid()
```

:::