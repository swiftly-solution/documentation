---
title: Relationship_t
index: true
order: 2
category:
  - Guide
---

# Relationship_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
Relationship_t(ptr)
```
# Properties
## Disposition 
```lua
--- @type number
Read: relationship_t.Disposition
Write: relationship_t.Disposition = value
```
## Priority 
```lua
--- @type number
Read: relationship_t.Priority
Write: relationship_t.Priority = value
```
# Functions
## ToPtr
```lua
--- @return string
relationship_t:ToPtr()
```
## IsValid
```lua
--- @return bool
relationship_t:IsValid()
```

:::