---
title: CAnimationGroup
index: true
order: 2
category:
  - Guide
---

# CAnimationGroup

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimationGroup(ptr)
```
# Properties
## Flags 
```lua
--- @type number
Read: canimationgroup.Flags
Write: canimationgroup.Flags = value
```
## DecodeKey (Read-Only)
```lua
--- @type CAnimKeyData
Read: canimationgroup.DecodeKey
```
# Functions
## ToPtr
```lua
--- @return string
canimationgroup:ToPtr()
```
## IsValid
```lua
--- @return bool
canimationgroup:IsValid()
```

:::