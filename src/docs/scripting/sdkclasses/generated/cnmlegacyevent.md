---
title: CNmLegacyEvent
index: true
order: 2
category:
  - Guide
---

# CNmLegacyEvent

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNmLegacyEvent(ptr)
```
# Properties
## AnimEventClassName 
```lua
--- @type string
Read: cnmlegacyevent.AnimEventClassName
Write: cnmlegacyevent.AnimEventClassName = value
```
## Parent (Read-Only)
```lua
--- @type CNmEvent
Read: cnmlegacyevent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnmlegacyevent:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmlegacyevent:IsValid()
```

:::