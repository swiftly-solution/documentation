---
title: CEntityIdentity
index: true
order: 2
category:
  - Guide
---

# CEntityIdentity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEntityIdentity(ptr)
```
# Properties
## NameStringableIndex 
```lua
--- @type number
Read: centityidentity.NameStringableIndex
Write: centityidentity.NameStringableIndex = value
```
## Name 
```lua
--- @type string
Read: centityidentity.Name
Write: centityidentity.Name = value
```
## DesignerName 
```lua
--- @type string
Read: centityidentity.DesignerName
Write: centityidentity.DesignerName = value
```
## Flags 
```lua
--- @type number
Read: centityidentity.Flags
Write: centityidentity.Flags = value
```
## WorldGroupId 
```lua
--- @type number
Read: centityidentity.WorldGroupId
Write: centityidentity.WorldGroupId = value
```
## DataObjectTypes 
```lua
--- @type number
Read: centityidentity.DataObjectTypes
Write: centityidentity.DataObjectTypes = value
```
## PathIndex (Read-Only)
```lua
--- @type ChangeAccessorFieldPathIndex_t
Read: centityidentity.PathIndex
```
## Prev (Read-Only)
```lua
--- @type CEntityIdentity
Read: centityidentity.Prev
```
## Next (Read-Only)
```lua
--- @type CEntityIdentity
Read: centityidentity.Next
```
## PrevByClass (Read-Only)
```lua
--- @type CEntityIdentity
Read: centityidentity.PrevByClass
```
## NextByClass (Read-Only)
```lua
--- @type CEntityIdentity
Read: centityidentity.NextByClass
```
# Functions
## ToPtr
```lua
--- @return string
centityidentity:ToPtr()
```
## IsValid
```lua
--- @return bool
centityidentity:IsValid()
```

:::