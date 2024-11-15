---
title: CMathRemap
index: true
order: 2
category:
  - Guide
---

# CMathRemap

::: tabs
@tab Lua
# Constructor
```lua
CMathRemap(ptr)
```
# Properties
## InMin 
```lua
--- @type number
Read: cmathremap.InMin
Write: cmathremap.InMin = value
```
## InMax 
```lua
--- @type number
Read: cmathremap.InMax
Write: cmathremap.InMax = value
```
## Out1 
```lua
--- @type number
Read: cmathremap.Out1
Write: cmathremap.Out1 = value
```
## Out2 
```lua
--- @type number
Read: cmathremap.Out2
Write: cmathremap.Out2 = value
```
## OldInValue 
```lua
--- @type number
Read: cmathremap.OldInValue
Write: cmathremap.OldInValue = value
```
## Enabled 
```lua
--- @type boolean
Read: cmathremap.Enabled
Write: cmathremap.Enabled = value
```
## OnRoseAboveMin (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathremap.OnRoseAboveMin
```
## OnRoseAboveMax (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathremap.OnRoseAboveMax
```
## OnFellBelowMin (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathremap.OnFellBelowMin
```
## OnFellBelowMax (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmathremap.OnFellBelowMax
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cmathremap.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmathremap:ToPtr()
```
## IsValid
```lua
@returns bool
cmathremap:IsValid()
```

:::