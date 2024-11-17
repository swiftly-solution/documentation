---
title: CTransitionUpdateData
index: true
order: 2
category:
  - Guide
---

# CTransitionUpdateData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTransitionUpdateData(ptr)
```
# Properties
## SrcStateIndex 
```lua
--- @type number
Read: ctransitionupdatedata.SrcStateIndex
Write: ctransitionupdatedata.SrcStateIndex = value
```
## DestStateIndex 
```lua
--- @type number
Read: ctransitionupdatedata.DestStateIndex
Write: ctransitionupdatedata.DestStateIndex = value
```
## HandshakeMaskToDisableFirst 
```lua
--- @type bitfield:7
Read: ctransitionupdatedata.HandshakeMaskToDisableFirst
Write: ctransitionupdatedata.HandshakeMaskToDisableFirst = value
```
## Disabled 
```lua
--- @type bitfield:1
Read: ctransitionupdatedata.Disabled
Write: ctransitionupdatedata.Disabled = value
```
# Functions
## ToPtr
```lua
--- @return string
ctransitionupdatedata:ToPtr()
```
## IsValid
```lua
--- @return bool
ctransitionupdatedata:IsValid()
```

:::