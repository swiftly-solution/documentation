---
title: CPointGamestatsCounter
index: true
order: 2
category:
  - Guide
---

# CPointGamestatsCounter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPointGamestatsCounter(ptr)
```
# Properties
## StrStatisticName 
```lua
--- @type string
Read: cpointgamestatscounter.StrStatisticName
Write: cpointgamestatscounter.StrStatisticName = value
```
## Disabled 
```lua
--- @type boolean
Read: cpointgamestatscounter.Disabled
Write: cpointgamestatscounter.Disabled = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointgamestatscounter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointgamestatscounter:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointgamestatscounter:IsValid()
```

:::