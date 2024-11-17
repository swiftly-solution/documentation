---
title: Color
index: true
order: 2
category:
  - Guide
---

# Color
A color is an object which stores informations such as: red, green, blue and alpha.
::: tabs
@tab Lua
# Constructor
```lua
--- @param r number
--- @param g number
--- @param b number
--- @param a number
Color(r, g, b, a)
```
# Properties
## r 
```lua
--- @type number
Read: color.r
Write: color.r = value
```
## g 
```lua
--- @type number
Read: color.g
Write: color.g = value
```
## b 
```lua
--- @type number
Read: color.b
Write: color.b = value
```
## a 
```lua
--- @type number
Read: color.a
Write: color.a = value
```
# Functions
## GetPtr
```lua
--- @return string
color:GetPtr()
```

:::