---
title: CConstraintSlave
index: true
order: 2
category:
  - Guide
---

# CConstraintSlave

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CConstraintSlave(ptr)
```
# Properties
## BasePosition 
```lua
--- @type Vector
Read: cconstraintslave.BasePosition
Write: cconstraintslave.BasePosition = value
```
## BoneHash 
```lua
--- @type number
Read: cconstraintslave.BoneHash
Write: cconstraintslave.BoneHash = value
```
## Weight 
```lua
--- @type number
Read: cconstraintslave.Weight
Write: cconstraintslave.Weight = value
```
## Name 
```lua
--- @type string
Read: cconstraintslave.Name
Write: cconstraintslave.Name = value
```
# Functions
## ToPtr
```lua
--- @return string
cconstraintslave:ToPtr()
```
## IsValid
```lua
--- @return bool
cconstraintslave:IsValid()
```

:::