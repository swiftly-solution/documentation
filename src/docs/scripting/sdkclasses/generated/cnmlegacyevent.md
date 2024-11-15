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
@returns string
cnmlegacyevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmlegacyevent:IsValid()
```

:::