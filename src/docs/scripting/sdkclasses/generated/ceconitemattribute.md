---
title: CEconItemAttribute
index: true
order: 2
category:
  - Guide
---

# CEconItemAttribute

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEconItemAttribute(ptr)
```
# Properties
## AttributeDefinitionIndex 
```lua
--- @type number
Read: ceconitemattribute.AttributeDefinitionIndex
Write: ceconitemattribute.AttributeDefinitionIndex = value
```
## Value 
```lua
--- @type number
Read: ceconitemattribute.Value
Write: ceconitemattribute.Value = value
```
## InitialValue 
```lua
--- @type number
Read: ceconitemattribute.InitialValue
Write: ceconitemattribute.InitialValue = value
```
## RefundableCurrency 
```lua
--- @type number
Read: ceconitemattribute.RefundableCurrency
Write: ceconitemattribute.RefundableCurrency = value
```
## SetBonus 
```lua
--- @type boolean
Read: ceconitemattribute.SetBonus
Write: ceconitemattribute.SetBonus = value
```
# Functions
## ToPtr
```lua
--- @return string
ceconitemattribute:ToPtr()
```
## IsValid
```lua
--- @return bool
ceconitemattribute:IsValid()
```

:::