---
title: Vector
index: true
order: 2
category:
  - Guide
---

# Vector
A vector is an object which stores coordinates.
::: tabs
@tab Lua
# Constructor
```lua
Vector(x, y, z)
```
# Properties
## x 
```lua
--- @type number
Read: vector.x
Write: vector.x = value
```
## y 
```lua
--- @type number
Read: vector.y
Write: vector.y = value
```
## z 
```lua
--- @type number
Read: vector.z
Write: vector.z = value
```
# Functions
## GetPtr
```lua
@returns string
vector:GetPtr()
```
This class supports doing operations on them: addition, division, multiplication, substraction.
:::