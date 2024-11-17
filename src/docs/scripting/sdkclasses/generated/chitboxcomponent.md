---
title: CHitboxComponent
index: true
order: 2
category:
  - Guide
---

# CHitboxComponent

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CHitboxComponent(ptr)
```
# Properties
## DisabledHitGroups 
```lua
--- @type table
Read: chitboxcomponent.DisabledHitGroups
Write: chitboxcomponent.DisabledHitGroups = value
```
## Parent (Read-Only)
```lua
--- @type CEntityComponent
Read: chitboxcomponent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
chitboxcomponent:ToPtr()
```
## IsValid
```lua
--- @return bool
chitboxcomponent:IsValid()
```

:::