---
title: CAnimActivity
index: true
order: 2
category:
  - Guide
---

# CAnimActivity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimActivity(ptr)
```
# Properties
## Activity 
```lua
--- @type number
Read: canimactivity.Activity
Write: canimactivity.Activity = value
```
## Flags 
```lua
--- @type number
Read: canimactivity.Flags
Write: canimactivity.Flags = value
```
## Weight 
```lua
--- @type number
Read: canimactivity.Weight
Write: canimactivity.Weight = value
```
# Functions
## ToPtr
```lua
--- @return string
canimactivity:ToPtr()
```
## IsValid
```lua
--- @return bool
canimactivity:IsValid()
```

:::