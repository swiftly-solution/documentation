---
title: Extent
index: true
order: 2
category:
  - Guide
---

# Extent

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
Extent(ptr)
```
# Properties
## Lo 
```lua
--- @type Vector
Read: extent.Lo
Write: extent.Lo = value
```
## Hi 
```lua
--- @type Vector
Read: extent.Hi
Write: extent.Hi = value
```
# Functions
## ToPtr
```lua
--- @return string
extent:ToPtr()
```
## IsValid
```lua
--- @return bool
extent:IsValid()
```

:::