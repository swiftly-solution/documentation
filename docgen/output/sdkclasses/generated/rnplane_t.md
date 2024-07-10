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
RnPlane_t(ptr --[[ string ]])
```
# Properties
## Normal 
```lua
@type Vector
Read: rnplane_t.Normal
Write: rnplane_t.Normal = value
```
## Offset 
```lua
@type number
Read: rnplane_t.Offset
Write: rnplane_t.Offset = value
```
# Functions
## ToPtr
```lua
@returns string
rnplane_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnplane_t:IsValid()
```

:::