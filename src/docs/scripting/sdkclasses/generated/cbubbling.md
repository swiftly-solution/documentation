---
title: CBubbling
index: true
order: 2
category:
  - Guide
---

# CBubbling

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBubbling(ptr)
```
# Properties
## Density 
```lua
--- @type number
Read: cbubbling.Density
Write: cbubbling.Density = value
```
## Frequency 
```lua
--- @type number
Read: cbubbling.Frequency
Write: cbubbling.Frequency = value
```
## State 
```lua
--- @type number
Read: cbubbling.State
Write: cbubbling.State = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cbubbling.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbubbling:ToPtr()
```
## IsValid
```lua
--- @return bool
cbubbling:IsValid()
```

:::