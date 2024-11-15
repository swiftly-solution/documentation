---
title: FeHingeLimit_t
index: true
order: 2
category:
  - Guide
---

# FeHingeLimit_t

::: tabs
@tab Lua
# Constructor
```lua
FeHingeLimit_t(ptr)
```
# Properties
## Node 
```lua
--- @type table
Read: fehingelimit_t.Node
Write: fehingelimit_t.Node = value
```
## Flags 
```lua
--- @type number
Read: fehingelimit_t.Flags
Write: fehingelimit_t.Flags = value
```
## Weight4 
```lua
--- @type number
Read: fehingelimit_t.Weight4
Write: fehingelimit_t.Weight4 = value
```
## Weight5 
```lua
--- @type number
Read: fehingelimit_t.Weight5
Write: fehingelimit_t.Weight5 = value
```
## AngleCenter 
```lua
--- @type number
Read: fehingelimit_t.AngleCenter
Write: fehingelimit_t.AngleCenter = value
```
## AngleExtents 
```lua
--- @type number
Read: fehingelimit_t.AngleExtents
Write: fehingelimit_t.AngleExtents = value
```
# Functions
## ToPtr
```lua
@returns string
fehingelimit_t:ToPtr()
```
## IsValid
```lua
@returns bool
fehingelimit_t:IsValid()
```

:::