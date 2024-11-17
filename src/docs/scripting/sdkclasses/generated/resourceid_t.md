---
title: ResourceId_t
index: true
order: 2
category:
  - Guide
---

# ResourceId_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ResourceId_t(ptr)
```
# Properties
## Value 
```lua
--- @type number
Read: resourceid_t.Value
Write: resourceid_t.Value = value
```
# Functions
## ToPtr
```lua
--- @return string
resourceid_t:ToPtr()
```
## IsValid
```lua
--- @return bool
resourceid_t:IsValid()
```

:::