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
--- @param ptr string
CRectLight(ptr)
```
# Properties
## ShowLight 
```lua
--- @type boolean
Read: crectlight.ShowLight
Write: crectlight.ShowLight = value
```
## Parent (Read-Only)
```lua
--- @type CBarnLight
Read: crectlight.Parent
```
# Functions
## ToPtr
```lua
--- @return string
crectlight:ToPtr()
```
## IsValid
```lua
--- @return bool
crectlight:IsValid()
```

:::