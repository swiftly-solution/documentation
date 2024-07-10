---
title: CPhysLength
index: true
order: 2
category:
  - Guide
---

# CPhysLength

::: tabs
@tab Lua
# Constructor
```lua
CPhysLength(ptr --[[ string ]])
```
# Properties
## Offset 
```lua
@type table
Read: cphyslength.Offset
Write: cphyslength.Offset = value
```
## Attach 
```lua
@type Vector
Read: cphyslength.Attach
Write: cphyslength.Attach = value
```
## AddLength 
```lua
@type number
Read: cphyslength.AddLength
Write: cphyslength.AddLength = value
```
## MinLength 
```lua
@type number
Read: cphyslength.MinLength
Write: cphyslength.MinLength = value
```
## TotalLength 
```lua
@type number
Read: cphyslength.TotalLength
Write: cphyslength.TotalLength = value
```
## EnableCollision 
```lua
@type boolean
Read: cphyslength.EnableCollision
Write: cphyslength.EnableCollision = value
```
## Parent 
```lua
@type CPhysConstraint
Read: cphyslength.Parent
Write: cphyslength.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphyslength:ToPtr()
```
## IsValid
```lua
@returns bool
cphyslength:IsValid()
```

:::