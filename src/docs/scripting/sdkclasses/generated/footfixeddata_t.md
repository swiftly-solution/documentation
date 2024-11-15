---
title: FootFixedData_t
index: true
order: 2
category:
  - Guide
---

# FootFixedData_t

::: tabs
@tab Lua
# Constructor
```lua
FootFixedData_t(ptr)
```
# Properties
## ToeOffset 
```lua
--- @type Vector
Read: footfixeddata_t.ToeOffset
Write: footfixeddata_t.ToeOffset = value
```
## HeelOffset 
```lua
--- @type Vector
Read: footfixeddata_t.HeelOffset
Write: footfixeddata_t.HeelOffset = value
```
## TargetBoneIndex 
```lua
--- @type number
Read: footfixeddata_t.TargetBoneIndex
Write: footfixeddata_t.TargetBoneIndex = value
```
## AnkleBoneIndex 
```lua
--- @type number
Read: footfixeddata_t.AnkleBoneIndex
Write: footfixeddata_t.AnkleBoneIndex = value
```
## IKAnchorBoneIndex 
```lua
--- @type number
Read: footfixeddata_t.IKAnchorBoneIndex
Write: footfixeddata_t.IKAnchorBoneIndex = value
```
## IkChainIndex 
```lua
--- @type number
Read: footfixeddata_t.IkChainIndex
Write: footfixeddata_t.IkChainIndex = value
```
## MaxIKLength 
```lua
--- @type number
Read: footfixeddata_t.MaxIKLength
Write: footfixeddata_t.MaxIKLength = value
```
## FootIndex 
```lua
--- @type number
Read: footfixeddata_t.FootIndex
Write: footfixeddata_t.FootIndex = value
```
## TagIndex 
```lua
--- @type number
Read: footfixeddata_t.TagIndex
Write: footfixeddata_t.TagIndex = value
```
## MaxRotationLeft 
```lua
--- @type number
Read: footfixeddata_t.MaxRotationLeft
Write: footfixeddata_t.MaxRotationLeft = value
```
## MaxRotationRight 
```lua
--- @type number
Read: footfixeddata_t.MaxRotationRight
Write: footfixeddata_t.MaxRotationRight = value
```
# Functions
## ToPtr
```lua
@returns string
footfixeddata_t:ToPtr()
```
## IsValid
```lua
@returns bool
footfixeddata_t:IsValid()
```

:::