---
title: Vector4D
index: true
order: 2
category:
  - Guide
---

# Vector4D
A vector is an object which stores coordinates.
::: tabs
@tab Lua
# Constructor
```lua
--- @param x number
--- @param y number
--- @param z number
--- @param w number
Vector4D(x, y, z, w)
```
# Properties
## x 
```lua
--- @type number
Read: vector4d.x
Write: vector4d.x = value
```
## y 
```lua
--- @type number
Read: vector4d.y
Write: vector4d.y = value
```
## z 
```lua
--- @type number
Read: vector4d.z
Write: vector4d.z = value
```
## w 
```lua
--- @type number
Read: vector4d.w
Write: vector4d.w = value
```
# Functions
## GetPtr
```lua
--- @return string
vector4d:GetPtr()
```
This class supports doing operations on them: addition, division, multiplication, substraction.
:::