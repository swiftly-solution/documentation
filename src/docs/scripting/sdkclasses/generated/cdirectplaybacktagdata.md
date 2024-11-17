---
title: CDirectPlaybackTagData
index: true
order: 2
category:
  - Guide
---

# CDirectPlaybackTagData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CDirectPlaybackTagData(ptr)
```
# Properties
## SequenceName 
```lua
--- @type string
Read: cdirectplaybacktagdata.SequenceName
Write: cdirectplaybacktagdata.SequenceName = value
```
## Tags (Read-Only)
```lua
--- @type table
Read: cdirectplaybacktagdata.Tags
```
# Functions
## ToPtr
```lua
--- @return string
cdirectplaybacktagdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cdirectplaybacktagdata:IsValid()
```

:::