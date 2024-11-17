---
title: CAnimTagBase
index: true
order: 2
category:
  - Guide
---

# CAnimTagBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimTagBase(ptr)
```
# Properties
## Comment 
```lua
--- @type string
Read: canimtagbase.Comment
Write: canimtagbase.Comment = value
```
## TagID (Read-Only)
```lua
--- @type AnimTagID
Read: canimtagbase.TagID
```
## IsReferenced 
```lua
--- @type boolean
Read: canimtagbase.IsReferenced
Write: canimtagbase.IsReferenced = value
```
# Functions
## ToPtr
```lua
--- @return string
canimtagbase:ToPtr()
```
## IsValid
```lua
--- @return bool
canimtagbase:IsValid()
```

:::