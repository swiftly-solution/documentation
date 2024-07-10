---
title: ConstantInfo_t
index: true
order: 2
category:
  - Guide
---

# ConstantInfo_t

::: tabs
@tab Lua
# Constructor
```lua
ConstantInfo_t(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: constantinfo_t.Name
Write: constantinfo_t.Name = value
```
## NameToken 
```lua
@type string
Read: constantinfo_t.NameToken
Write: constantinfo_t.NameToken = value
```
## Value 
```lua
@type number
Read: constantinfo_t.Value
Write: constantinfo_t.Value = value
```
# Functions
## ToPtr
```lua
@returns string
constantinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
constantinfo_t:IsValid()
```

:::