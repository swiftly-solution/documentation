---
title: QAngle
index: true
order: 2
category:
  - Guide
---

# QAngle
A QAngle is an object which stores coordinates regarding the angle.
::: tabs
@tab Lua
# Constructor
```lua
--- @param x number
--- @param y number
--- @param z number
QAngle(x, y, z)
```
# Properties
## x 
```lua
--- @type number
Read: qangle.x
Write: qangle.x = value
```
## y 
```lua
--- @type number
Read: qangle.y
Write: qangle.y = value
```
## z 
```lua
--- @type number
Read: qangle.z
Write: qangle.z = value
```
# Functions
## GetPtr
```lua
--- @return string
qangle:GetPtr()
```
This class supports doing operations on them: addition, division, multiplication, substraction.
:::