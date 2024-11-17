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
--- @param ptr string
ConstantInfo_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: constantinfo_t.Name
Write: constantinfo_t.Name = value
```
## NameToken 
```lua
--- @type number
Read: constantinfo_t.NameToken
Write: constantinfo_t.NameToken = value
```
## Value 
```lua
--- @type number
Read: constantinfo_t.Value
Write: constantinfo_t.Value = value
```
# Functions
## ToPtr
```lua
--- @return string
constantinfo_t:ToPtr()
```
## IsValid
```lua
--- @return bool
constantinfo_t:IsValid()
```

:::