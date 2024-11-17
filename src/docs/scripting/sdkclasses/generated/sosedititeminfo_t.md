---
title: SosEditItemInfo_t
index: true
order: 2
category:
  - Guide
---

# SosEditItemInfo_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
SosEditItemInfo_t(ptr)
```
# Properties
## ItemType 
```lua
--- @type number
Read: sosedititeminfo_t.ItemType
Write: sosedititeminfo_t.ItemType = value
```
## ItemName 
```lua
--- @type string
Read: sosedititeminfo_t.ItemName
Write: sosedititeminfo_t.ItemName = value
```
## ItemTypeName 
```lua
--- @type string
Read: sosedititeminfo_t.ItemTypeName
Write: sosedititeminfo_t.ItemTypeName = value
```
## ItemKVString 
```lua
--- @type string
Read: sosedititeminfo_t.ItemKVString
Write: sosedititeminfo_t.ItemKVString = value
```
## ItemPos 
```lua
--- @type Vector2D
Read: sosedititeminfo_t.ItemPos
Write: sosedititeminfo_t.ItemPos = value
```
# Functions
## ToPtr
```lua
--- @return string
sosedititeminfo_t:ToPtr()
```
## IsValid
```lua
--- @return bool
sosedititeminfo_t:IsValid()
```

:::