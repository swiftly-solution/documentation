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
Extent(ptr --[[ string ]])
```
# Properties
## Lo 
```lua
@type Vector
Read: extent.Lo
Write: extent.Lo = value
```
## Hi 
```lua
@type Vector
Read: extent.Hi
Write: extent.Hi = value
```
# Functions
## ToPtr
```lua
@returns string
extent:ToPtr()
```
## IsValid
```lua
@returns bool
extent:IsValid()
```

:::