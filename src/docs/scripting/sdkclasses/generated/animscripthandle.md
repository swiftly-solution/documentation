---
title: AnimScriptHandle
index: true
order: 2
category:
  - Guide
---

# AnimScriptHandle

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
AnimScriptHandle(ptr)
```
# Properties
## Id 
```lua
--- @type number
Read: animscripthandle.Id
Write: animscripthandle.Id = value
```
# Functions
## ToPtr
```lua
--- @return string
animscripthandle:ToPtr()
```
## IsValid
```lua
--- @return bool
animscripthandle:IsValid()
```

:::