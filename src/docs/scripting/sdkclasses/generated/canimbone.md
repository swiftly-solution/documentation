---
title: CAnimBone
index: true
order: 2
category:
  - Guide
---

# CAnimBone

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimBone(ptr)
```
# Properties
## Parent 
```lua
--- @type number
Read: canimbone.Parent
Write: canimbone.Parent = value
```
## Pos 
```lua
--- @type Vector
Read: canimbone.Pos
Write: canimbone.Pos = value
```
## Scale 
```lua
--- @type number
Read: canimbone.Scale
Write: canimbone.Scale = value
```
## Flags 
```lua
--- @type number
Read: canimbone.Flags
Write: canimbone.Flags = value
```
# Functions
## ToPtr
```lua
--- @return string
canimbone:ToPtr()
```
## IsValid
```lua
--- @return bool
canimbone:IsValid()
```

:::