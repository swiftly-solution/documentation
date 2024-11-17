---
title: CVectorQuantizer
index: true
order: 2
category:
  - Guide
---

# CVectorQuantizer

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVectorQuantizer(ptr)
```
# Properties
## CentroidVectors (Read-Only)
```lua
--- @type table
Read: cvectorquantizer.CentroidVectors
```
## Centroids 
```lua
--- @type number
Read: cvectorquantizer.Centroids
Write: cvectorquantizer.Centroids = value
```
## Dimensions 
```lua
--- @type number
Read: cvectorquantizer.Dimensions
Write: cvectorquantizer.Dimensions = value
```
# Functions
## ToPtr
```lua
--- @return string
cvectorquantizer:ToPtr()
```
## IsValid
```lua
--- @return bool
cvectorquantizer:IsValid()
```

:::