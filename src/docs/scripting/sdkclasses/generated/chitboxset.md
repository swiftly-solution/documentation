---
title: CHitBoxSet
index: true
order: 2
category:
  - Guide
---

# CHitBoxSet

::: tabs
@tab Lua
# Constructor
```lua
CHitBoxSet(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: chitboxset.Name
Write: chitboxset.Name = value
```
## NameHash 
```lua
@type number
Read: chitboxset.NameHash
Write: chitboxset.NameHash = value
```
## HitBoxes (Read-Only)
```lua
@type table
Read: chitboxset.HitBoxes
```
## SourceFilename 
```lua
@type string
Read: chitboxset.SourceFilename
Write: chitboxset.SourceFilename = value
```
# Functions
## ToPtr
```lua
@returns string
chitboxset:ToPtr()
```
## IsValid
```lua
@returns bool
chitboxset:IsValid()
```

:::