---
title: CMorphRectData
index: true
order: 2
category:
  - Guide
---

# CMorphRectData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMorphRectData(ptr)
```
# Properties
## XLeftDst 
```lua
--- @type number
Read: cmorphrectdata.XLeftDst
Write: cmorphrectdata.XLeftDst = value
```
## YTopDst 
```lua
--- @type number
Read: cmorphrectdata.YTopDst
Write: cmorphrectdata.YTopDst = value
```
## UWidthSrc 
```lua
--- @type number
Read: cmorphrectdata.UWidthSrc
Write: cmorphrectdata.UWidthSrc = value
```
## VHeightSrc 
```lua
--- @type number
Read: cmorphrectdata.VHeightSrc
Write: cmorphrectdata.VHeightSrc = value
```
## BundleDatas (Read-Only)
```lua
--- @type table
Read: cmorphrectdata.BundleDatas
```
# Functions
## ToPtr
```lua
--- @return string
cmorphrectdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cmorphrectdata:IsValid()
```

:::