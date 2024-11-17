---
title: CConstraintTarget
index: true
order: 2
category:
  - Guide
---

# CConstraintTarget

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CConstraintTarget(ptr)
```
# Properties
## Offset 
```lua
--- @type Vector
Read: cconstrainttarget.Offset
Write: cconstrainttarget.Offset = value
```
## BoneHash 
```lua
--- @type number
Read: cconstrainttarget.BoneHash
Write: cconstrainttarget.BoneHash = value
```
## Name 
```lua
--- @type string
Read: cconstrainttarget.Name
Write: cconstrainttarget.Name = value
```
## Weight 
```lua
--- @type number
Read: cconstrainttarget.Weight
Write: cconstrainttarget.Weight = value
```
## IsAttachment 
```lua
--- @type boolean
Read: cconstrainttarget.IsAttachment
Write: cconstrainttarget.IsAttachment = value
```
# Functions
## ToPtr
```lua
--- @return string
cconstrainttarget:ToPtr()
```
## IsValid
```lua
--- @return bool
cconstrainttarget:IsValid()
```

:::