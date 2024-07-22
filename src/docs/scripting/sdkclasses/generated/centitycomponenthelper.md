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
CEntityComponentHelper(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: centitycomponenthelper.Flags
Write: centitycomponenthelper.Flags = value
```
## Info 
```lua
@type EntComponentInfo_t
Read: centitycomponenthelper.Info
Write: centitycomponenthelper.Info = value
```
## Priority 
```lua
@type number
Read: centitycomponenthelper.Priority
Write: centitycomponenthelper.Priority = value
```
## Next 
```lua
@type CEntityComponentHelper
Read: centitycomponenthelper.Next
Write: centitycomponenthelper.Next = value
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