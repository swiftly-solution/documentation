---
title: RnPlane_t
index: true
order: 2
category:
  - Guide
---

# RnPlane_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RnPlane_t(ptr)
```
# Properties
## Normal 
```lua
--- @type Vector
Read: rnplane_t.Normal
Write: rnplane_t.Normal = value
```
## Offset 
```lua
--- @type number
Read: rnplane_t.Offset
Write: rnplane_t.Offset = value
```
# Functions
## ToPtr
```lua
--- @return string
rnplane_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnplane_t:IsValid()
```

:::