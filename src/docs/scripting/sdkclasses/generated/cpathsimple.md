---
title: CPathSimple
index: true
order: 2
category:
  - Guide
---

# CPathSimple

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPathSimple(ptr)
```
# Properties
## PathString 
```lua
--- @type string
Read: cpathsimple.PathString
Write: cpathsimple.PathString = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cpathsimple.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpathsimple:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathsimple:IsValid()
```

:::