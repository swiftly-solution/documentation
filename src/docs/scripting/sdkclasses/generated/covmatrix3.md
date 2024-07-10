---
title: CovMatrix3
index: true
order: 2
category:
  - Guide
---

# CovMatrix3

::: tabs
@tab Lua
# Constructor
```lua
CovMatrix3(ptr --[[ string ]])
```
# Properties
## Diag 
```lua
@type Vector
Read: covmatrix3.Diag
Write: covmatrix3.Diag = value
```
## XY 
```lua
@type number
Read: covmatrix3.XY
Write: covmatrix3.XY = value
```
## XZ 
```lua
@type number
Read: covmatrix3.XZ
Write: covmatrix3.XZ = value
```
## YZ 
```lua
@type number
Read: covmatrix3.YZ
Write: covmatrix3.YZ = value
```
# Functions
## ToPtr
```lua
@returns string
covmatrix3:ToPtr()
```
## IsValid
```lua
@returns bool
covmatrix3:IsValid()
```

:::