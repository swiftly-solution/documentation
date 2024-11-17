---
title: CNmBitFlags
index: true
order: 2
category:
  - Guide
---

# CNmBitFlags

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNmBitFlags(ptr)
```
# Properties
## Flags 
```lua
--- @type number
Read: cnmbitflags.Flags
Write: cnmbitflags.Flags = value
```
# Functions
## ToPtr
```lua
--- @return string
cnmbitflags:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmbitflags:IsValid()
```

:::