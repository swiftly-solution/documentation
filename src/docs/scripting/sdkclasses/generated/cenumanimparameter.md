---
title: CEnumAnimParameter
index: true
order: 2
category:
  - Guide
---

# CEnumAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnumAnimParameter(ptr)
```
# Properties
## DefaultValue 
```lua
--- @type number
Read: cenumanimparameter.DefaultValue
Write: cenumanimparameter.DefaultValue = value
```
## EnumOptions (Read-Only)
```lua
--- @type table
Read: cenumanimparameter.EnumOptions
```
## EnumReferenced (Read-Only)
```lua
--- @type table
Read: cenumanimparameter.EnumReferenced
```
## Parent (Read-Only)
```lua
--- @type CConcreteAnimParameter
Read: cenumanimparameter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenumanimparameter:ToPtr()
```
## IsValid
```lua
--- @return bool
cenumanimparameter:IsValid()
```

:::