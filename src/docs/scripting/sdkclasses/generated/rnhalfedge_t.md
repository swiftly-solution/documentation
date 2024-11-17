---
title: RnHalfEdge_t
index: true
order: 2
category:
  - Guide
---

# RnHalfEdge_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RnHalfEdge_t(ptr)
```
# Properties
## Next 
```lua
--- @type number
Read: rnhalfedge_t.Next
Write: rnhalfedge_t.Next = value
```
## Twin 
```lua
--- @type number
Read: rnhalfedge_t.Twin
Write: rnhalfedge_t.Twin = value
```
## Origin 
```lua
--- @type number
Read: rnhalfedge_t.Origin
Write: rnhalfedge_t.Origin = value
```
## Face 
```lua
--- @type number
Read: rnhalfedge_t.Face
Write: rnhalfedge_t.Face = value
```
# Functions
## ToPtr
```lua
--- @return string
rnhalfedge_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnhalfedge_t:IsValid()
```

:::