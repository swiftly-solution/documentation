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
CEntityIdentity(ptr --[[ string ]])
```
# Properties
## NameStringableIndex 
```lua
@type number
Read: centityidentity.NameStringableIndex
Write: centityidentity.NameStringableIndex = value
```
## Name 
```lua
@type string
Read: centityidentity.Name
Write: centityidentity.Name = value
```
## DesignerName 
```lua
@type string
Read: centityidentity.DesignerName
Write: centityidentity.DesignerName = value
```
## Flags 
```lua
@type number
Read: centityidentity.Flags
Write: centityidentity.Flags = value
```
## WorldGroupId 
```lua
@type number
Read: centityidentity.WorldGroupId
Write: centityidentity.WorldGroupId = value
```
## DataObjectTypes 
```lua
@type number
Read: centityidentity.DataObjectTypes
Write: centityidentity.DataObjectTypes = value
```
## PathIndex (Read-Only)
```lua
@type ChangeAccessorFieldPathIndex_t
Read: centityidentity.PathIndex
```
## Prev 
```lua
@type CEntityIdentity
Read: centityidentity.Prev
Write: centityidentity.Prev = value
```
## Next 
```lua
@type CEntityIdentity
Read: centityidentity.Next
Write: centityidentity.Next = value
```
## PrevByClass 
```lua
@type CEntityIdentity
Read: centityidentity.PrevByClass
Write: centityidentity.PrevByClass = value
```
## NextByClass 
```lua
@type CEntityIdentity
Read: centityidentity.NextByClass
Write: centityidentity.NextByClass = value
```
# Functions
## ToPtr
```lua
@returns string
centityidentity:ToPtr()
```
## IsValid
```lua
@returns bool
centityidentity:IsValid()
```

:::