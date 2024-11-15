---
title: CMarkupVolumeWithRef
index: true
order: 2
category:
  - Guide
---

# CMarkupVolumeWithRef

::: tabs
@tab Lua
# Constructor
```lua
CMarkupVolumeWithRef(ptr)
```
# Properties
## UseRef 
```lua
--- @type boolean
Read: cmarkupvolumewithref.UseRef
Write: cmarkupvolumewithref.UseRef = value
```
## RefPos 
```lua
--- @type Vector
Read: cmarkupvolumewithref.RefPos
Write: cmarkupvolumewithref.RefPos = value
```
## RefDot 
```lua
--- @type number
Read: cmarkupvolumewithref.RefDot
Write: cmarkupvolumewithref.RefDot = value
```
## Parent (Read-Only)
```lua
--- @type CMarkupVolumeTagged
Read: cmarkupvolumewithref.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmarkupvolumewithref:ToPtr()
```
## IsValid
```lua
@returns bool
cmarkupvolumewithref:IsValid()
```

:::