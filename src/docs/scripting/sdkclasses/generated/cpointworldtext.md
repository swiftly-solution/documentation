---
title: CPointWorldText
index: true
order: 2
category:
  - Guide
---

# CPointWorldText

::: tabs
@tab Lua
# Constructor
```lua
CPointWorldText(ptr --[[ string ]])
```
# Properties
## MessageText 
```lua
@type string
Read: cpointworldtext.MessageText
Write: cpointworldtext.MessageText = value
```
## FontName 
```lua
@type string
Read: cpointworldtext.FontName
Write: cpointworldtext.FontName = value
```
## Enabled 
```lua
@type boolean
Read: cpointworldtext.Enabled
Write: cpointworldtext.Enabled = value
```
## Fullbright 
```lua
@type boolean
Read: cpointworldtext.Fullbright
Write: cpointworldtext.Fullbright = value
```
## WorldUnitsPerPx 
```lua
@type number
Read: cpointworldtext.WorldUnitsPerPx
Write: cpointworldtext.WorldUnitsPerPx = value
```
## FontSize 
```lua
@type number
Read: cpointworldtext.FontSize
Write: cpointworldtext.FontSize = value
```
## DepthOffset 
```lua
@type number
Read: cpointworldtext.DepthOffset
Write: cpointworldtext.DepthOffset = value
```
## Color 
```lua
@type Color
Read: cpointworldtext.Color
Write: cpointworldtext.Color = value
```
## JustifyHorizontal 
```lua
@type number
Read: cpointworldtext.JustifyHorizontal
Write: cpointworldtext.JustifyHorizontal = value
```
## JustifyVertical 
```lua
@type number
Read: cpointworldtext.JustifyVertical
Write: cpointworldtext.JustifyVertical = value
```
## ReorientMode 
```lua
@type number
Read: cpointworldtext.ReorientMode
Write: cpointworldtext.ReorientMode = value
```
## Parent (Read-Only)
```lua
@type CModelPointEntity
Read: cpointworldtext.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointworldtext:ToPtr()
```
## IsValid
```lua
@returns bool
cpointworldtext:IsValid()
```

:::