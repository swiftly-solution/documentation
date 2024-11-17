---
title: CFeNamedJiggleBone
index: true
order: 2
category:
  - Guide
---

# CFeNamedJiggleBone

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFeNamedJiggleBone(ptr)
```
# Properties
## StrParentBone 
```lua
--- @type string
Read: cfenamedjigglebone.StrParentBone
Write: cfenamedjigglebone.StrParentBone = value
```
## JiggleParent 
```lua
--- @type number
Read: cfenamedjigglebone.JiggleParent
Write: cfenamedjigglebone.JiggleParent = value
```
## JiggleBone (Read-Only)
```lua
--- @type CFeJiggleBone
Read: cfenamedjigglebone.JiggleBone
```
# Functions
## ToPtr
```lua
--- @return string
cfenamedjigglebone:ToPtr()
```
## IsValid
```lua
--- @return bool
cfenamedjigglebone:IsValid()
```

:::