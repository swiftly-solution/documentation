---
title: FeCtrlOffset_t
index: true
order: 2
category:
  - Guide
---

# FeCtrlOffset_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeCtrlOffset_t(ptr)
```
# Properties
## Offset 
```lua
--- @type Vector
Read: fectrloffset_t.Offset
Write: fectrloffset_t.Offset = value
```
## CtrlParent 
```lua
--- @type number
Read: fectrloffset_t.CtrlParent
Write: fectrloffset_t.CtrlParent = value
```
## CtrlChild 
```lua
--- @type number
Read: fectrloffset_t.CtrlChild
Write: fectrloffset_t.CtrlChild = value
```
# Functions
## ToPtr
```lua
--- @return string
fectrloffset_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fectrloffset_t:IsValid()
```

:::