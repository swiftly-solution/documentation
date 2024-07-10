---
title: CMorphBundleData
index: true
order: 2
category:
  - Guide
---

# CMorphBundleData

::: tabs
@tab Lua
# Constructor
```lua
CMorphBundleData(ptr --[[ string ]])
```
# Properties
## ULeftSrc 
```lua
@type number
Read: cmorphbundledata.ULeftSrc
Write: cmorphbundledata.ULeftSrc = value
```
## VTopSrc 
```lua
@type number
Read: cmorphbundledata.VTopSrc
Write: cmorphbundledata.VTopSrc = value
```
## Offsets 
```lua
@type table
Read: cmorphbundledata.Offsets
Write: cmorphbundledata.Offsets = value
```
## Ranges 
```lua
@type table
Read: cmorphbundledata.Ranges
Write: cmorphbundledata.Ranges = value
```
# Functions
## ToPtr
```lua
@returns string
cmorphbundledata:ToPtr()
```
## IsValid
```lua
@returns bool
cmorphbundledata:IsValid()
```

:::