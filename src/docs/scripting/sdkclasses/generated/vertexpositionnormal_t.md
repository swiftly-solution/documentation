---
title: VertexPositionNormal_t
index: true
order: 2
category:
  - Guide
---

# VertexPositionNormal_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VertexPositionNormal_t(ptr)
```
# Properties
## Position 
```lua
--- @type Vector
Read: vertexpositionnormal_t.Position
Write: vertexpositionnormal_t.Position = value
```
## Normal 
```lua
--- @type Vector
Read: vertexpositionnormal_t.Normal
Write: vertexpositionnormal_t.Normal = value
```
# Functions
## ToPtr
```lua
--- @return string
vertexpositionnormal_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vertexpositionnormal_t:IsValid()
```

:::