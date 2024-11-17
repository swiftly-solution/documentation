---
title: ResponseContext_t
index: true
order: 2
category:
  - Guide
---

# ResponseContext_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ResponseContext_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: responsecontext_t.Name
Write: responsecontext_t.Name = value
```
## Value 
```lua
--- @type string
Read: responsecontext_t.Value
Write: responsecontext_t.Value = value
```
## ExpirationTime 
```lua
--- @type number
Read: responsecontext_t.ExpirationTime
Write: responsecontext_t.ExpirationTime = value
```
# Functions
## ToPtr
```lua
--- @return string
responsecontext_t:ToPtr()
```
## IsValid
```lua
--- @return bool
responsecontext_t:IsValid()
```

:::