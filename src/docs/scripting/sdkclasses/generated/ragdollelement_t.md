---
title: ragdollelement_t
index: true
order: 2
category:
  - Guide
---

# ragdollelement_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ragdollelement_t(ptr)
```
# Properties
## OriginParentSpace 
```lua
--- @type Vector
Read: ragdollelement_t.OriginParentSpace
Write: ragdollelement_t.OriginParentSpace = value
```
## ParentIndex 
```lua
--- @type number
Read: ragdollelement_t.ParentIndex
Write: ragdollelement_t.ParentIndex = value
```
## Radius 
```lua
--- @type number
Read: ragdollelement_t.Radius
Write: ragdollelement_t.Radius = value
```
# Functions
## ToPtr
```lua
--- @return string
ragdollelement_t:ToPtr()
```
## IsValid
```lua
--- @return bool
ragdollelement_t:IsValid()
```

:::