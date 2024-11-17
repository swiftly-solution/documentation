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
--- @param ptr string
CMorphBundleData(ptr)
```
# Properties
## ULeftSrc 
```lua
--- @type number
Read: cmorphbundledata.ULeftSrc
Write: cmorphbundledata.ULeftSrc = value
```
## VTopSrc 
```lua
--- @type number
Read: cmorphbundledata.VTopSrc
Write: cmorphbundledata.VTopSrc = value
```
## Offsets (Read-Only)
```lua
--- @type table
Read: cmorphbundledata.Offsets
```
## Ranges (Read-Only)
```lua
--- @type table
Read: cmorphbundledata.Ranges
```
# Functions
## ToPtr
```lua
--- @return string
cmorphbundledata:ToPtr()
```
## IsValid
```lua
--- @return bool
cmorphbundledata:IsValid()
```

:::