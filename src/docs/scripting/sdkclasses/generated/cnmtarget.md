---
title: CNmTarget
index: true
order: 2
category:
  - Guide
---

# CNmTarget

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNmTarget(ptr)
```
# Properties
## IsBoneTarget 
```lua
--- @type boolean
Read: cnmtarget.IsBoneTarget
Write: cnmtarget.IsBoneTarget = value
```
## IsUsingBoneSpaceOffsets 
```lua
--- @type boolean
Read: cnmtarget.IsUsingBoneSpaceOffsets
Write: cnmtarget.IsUsingBoneSpaceOffsets = value
```
## HasOffsets 
```lua
--- @type boolean
Read: cnmtarget.HasOffsets
Write: cnmtarget.HasOffsets = value
```
## IsSet 
```lua
--- @type boolean
Read: cnmtarget.IsSet
Write: cnmtarget.IsSet = value
```
# Functions
## ToPtr
```lua
--- @return string
cnmtarget:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmtarget:IsValid()
```

:::