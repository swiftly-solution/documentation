---
title: CInfoVisibilityBox
index: true
order: 2
category:
  - Guide
---

# CInfoVisibilityBox

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CInfoVisibilityBox(ptr)
```
# Properties
## Mode 
```lua
--- @type number
Read: cinfovisibilitybox.Mode
Write: cinfovisibilitybox.Mode = value
```
## BoxSize 
```lua
--- @type Vector
Read: cinfovisibilitybox.BoxSize
Write: cinfovisibilitybox.BoxSize = value
```
## Enabled 
```lua
--- @type boolean
Read: cinfovisibilitybox.Enabled
Write: cinfovisibilitybox.Enabled = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cinfovisibilitybox.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cinfovisibilitybox:ToPtr()
```
## IsValid
```lua
--- @return bool
cinfovisibilitybox:IsValid()
```

:::