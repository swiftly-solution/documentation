---
title: CPoseHandle
index: true
order: 2
category:
  - Guide
---

# CPoseHandle

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPoseHandle(ptr)
```
# Properties
## Index 
```lua
--- @type number
Read: cposehandle.Index
Write: cposehandle.Index = value
```
## Type 
```lua
--- @type number
Read: cposehandle.Type
Write: cposehandle.Type = value
```
# Functions
## ToPtr
```lua
--- @return string
cposehandle:ToPtr()
```
## IsValid
```lua
--- @return bool
cposehandle:IsValid()
```

:::