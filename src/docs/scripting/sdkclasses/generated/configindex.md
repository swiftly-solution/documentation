---
title: ConfigIndex
index: true
order: 2
category:
  - Guide
---

# ConfigIndex

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ConfigIndex(ptr)
```
# Properties
## Group 
```lua
--- @type number
Read: configindex.Group
Write: configindex.Group = value
```
## Config 
```lua
--- @type number
Read: configindex.Config
Write: configindex.Config = value
```
# Functions
## ToPtr
```lua
--- @return string
configindex:ToPtr()
```
## IsValid
```lua
--- @return bool
configindex:IsValid()
```

:::