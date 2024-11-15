---
title: CEntityComponentHelper
index: true
order: 2
category:
  - Guide
---

# CEntityComponentHelper

::: tabs
@tab Lua
# Constructor
```lua
CEntityComponentHelper(ptr)
```
# Properties
## Flags 
```lua
--- @type number
Read: centitycomponenthelper.Flags
Write: centitycomponenthelper.Flags = value
```
## Info (Read-Only)
```lua
--- @type EntComponentInfo_t
Read: centitycomponenthelper.Info
```
## Priority 
```lua
--- @type number
Read: centitycomponenthelper.Priority
Write: centitycomponenthelper.Priority = value
```
## Next (Read-Only)
```lua
--- @type CEntityComponentHelper
Read: centitycomponenthelper.Next
```
# Functions
## ToPtr
```lua
@returns string
centitycomponenthelper:ToPtr()
```
## IsValid
```lua
@returns bool
centitycomponenthelper:IsValid()
```

:::