---
title: CIntAnimParameter
index: true
order: 2
category:
  - Guide
---

# CIntAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CIntAnimParameter(ptr)
```
# Properties
## DefaultValue 
```lua
--- @type number
Read: cintanimparameter.DefaultValue
Write: cintanimparameter.DefaultValue = value
```
## MinValue 
```lua
--- @type number
Read: cintanimparameter.MinValue
Write: cintanimparameter.MinValue = value
```
## MaxValue 
```lua
--- @type number
Read: cintanimparameter.MaxValue
Write: cintanimparameter.MaxValue = value
```
## Parent (Read-Only)
```lua
--- @type CConcreteAnimParameter
Read: cintanimparameter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cintanimparameter:ToPtr()
```
## IsValid
```lua
--- @return bool
cintanimparameter:IsValid()
```

:::