---
title: CFootstepControl
index: true
order: 2
category:
  - Guide
---

# CFootstepControl

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFootstepControl(ptr)
```
# Properties
## Source 
```lua
--- @type string
Read: cfootstepcontrol.Source
Write: cfootstepcontrol.Source = value
```
## Destination 
```lua
--- @type string
Read: cfootstepcontrol.Destination
Write: cfootstepcontrol.Destination = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: cfootstepcontrol.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfootstepcontrol:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootstepcontrol:IsValid()
```

:::