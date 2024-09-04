---
title: CEconItemView
index: true
order: 2
category:
  - Guide
---

# CEconItemView

::: tabs
@tab Lua
# Constructor
```lua
CEconItemView(ptr --[[ string ]])
```
# Properties
## ItemDefinitionIndex 
```lua
@type number
Read: ceconitemview.ItemDefinitionIndex
Write: ceconitemview.ItemDefinitionIndex = value
```
## EntityQuality 
```lua
@type number
Read: ceconitemview.EntityQuality
Write: ceconitemview.EntityQuality = value
```
## EntityLevel 
```lua
@type number
Read: ceconitemview.EntityLevel
Write: ceconitemview.EntityLevel = value
```
## ItemID 
```lua
@type number
Read: ceconitemview.ItemID
Write: ceconitemview.ItemID = value
```
## ItemIDHigh 
```lua
@type number
Read: ceconitemview.ItemIDHigh
Write: ceconitemview.ItemIDHigh = value
```
## ItemIDLow 
```lua
@type number
Read: ceconitemview.ItemIDLow
Write: ceconitemview.ItemIDLow = value
```
## AccountID 
```lua
@type number
Read: ceconitemview.AccountID
Write: ceconitemview.AccountID = value
```
## InventoryPosition 
```lua
@type number
Read: ceconitemview.InventoryPosition
Write: ceconitemview.InventoryPosition = value
```
## Initialized 
```lua
@type boolean
Read: ceconitemview.Initialized
Write: ceconitemview.Initialized = value
```
## AttributeList (Read-Only)
```lua
@type CAttributeList
Read: ceconitemview.AttributeList
```
## NetworkedDynamicAttributes (Read-Only)
```lua
@type CAttributeList
Read: ceconitemview.NetworkedDynamicAttributes
```
## CustomName 
```lua
@type string
Read: ceconitemview.CustomName
Write: ceconitemview.CustomName = value
```
## CustomNameOverride 
```lua
@type string
Read: ceconitemview.CustomNameOverride
Write: ceconitemview.CustomNameOverride = value
```
## Parent (Read-Only)
```lua
@type IEconItemInterface
Read: ceconitemview.Parent
```
# Functions
## ToPtr
```lua
@returns string
ceconitemview:ToPtr()
```
## IsValid
```lua
@returns bool
ceconitemview:IsValid()
```

:::