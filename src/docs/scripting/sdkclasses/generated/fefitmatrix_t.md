---
title: FeFitMatrix_t
index: true
order: 2
category:
  - Guide
---

# FeFitMatrix_t

::: tabs
@tab Lua
# Constructor
```lua
FeFitMatrix_t(ptr)
```
# Properties
## Center 
```lua
--- @type Vector
Read: fefitmatrix_t.Center
Write: fefitmatrix_t.Center = value
```
## End 
```lua
--- @type number
Read: fefitmatrix_t.End
Write: fefitmatrix_t.End = value
```
## Node 
```lua
--- @type number
Read: fefitmatrix_t.Node
Write: fefitmatrix_t.Node = value
```
## BeginDynamic 
```lua
--- @type number
Read: fefitmatrix_t.BeginDynamic
Write: fefitmatrix_t.BeginDynamic = value
```
# Functions
## ToPtr
```lua
@returns string
fefitmatrix_t:ToPtr()
```
## IsValid
```lua
@returns bool
fefitmatrix_t:IsValid()
```

:::