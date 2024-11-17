---
title: CDspPresetModifierList
index: true
order: 2
category:
  - Guide
---

# CDspPresetModifierList

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CDspPresetModifierList(ptr)
```
# Properties
## DspName 
```lua
--- @type string
Read: cdsppresetmodifierlist.DspName
Write: cdsppresetmodifierlist.DspName = value
```
## Modifiers (Read-Only)
```lua
--- @type table
Read: cdsppresetmodifierlist.Modifiers
```
# Functions
## ToPtr
```lua
--- @return string
cdsppresetmodifierlist:ToPtr()
```
## IsValid
```lua
--- @return bool
cdsppresetmodifierlist:IsValid()
```

:::