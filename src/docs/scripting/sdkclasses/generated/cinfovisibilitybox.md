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
CInfoVisibilityBox(ptr --[[ string ]])
```
# Properties
## Mode 
```lua
@type number
Read: cinfovisibilitybox.Mode
Write: cinfovisibilitybox.Mode = value
```
## BoxSize 
```lua
@type Vector
Read: cinfovisibilitybox.BoxSize
Write: cinfovisibilitybox.BoxSize = value
```
## Enabled 
```lua
@type boolean
Read: cinfovisibilitybox.Enabled
Write: cinfovisibilitybox.Enabled = value
```
## Parent 
```lua
@type CBaseEntity
Read: cinfovisibilitybox.Parent
Write: cinfovisibilitybox.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cinfovisibilitybox:ToPtr()
```
## IsValid
```lua
@returns bool
cinfovisibilitybox:IsValid()
```

:::