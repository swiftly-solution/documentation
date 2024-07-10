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
CAnimTagBase(ptr --[[ string ]])
```
# Properties
## Comment 
```lua
@type string
Read: canimtagbase.Comment
Write: canimtagbase.Comment = value
```
## TagID 
```lua
@type AnimTagID
Read: canimtagbase.TagID
Write: canimtagbase.TagID = value
```
## IsReferenced 
```lua
@type boolean
Read: canimtagbase.IsReferenced
Write: canimtagbase.IsReferenced = value
```
# Functions
## ToPtr
```lua
@returns string
canimtagbase:ToPtr()
```
## IsValid
```lua
@returns bool
canimtagbase:IsValid()
```

:::