---
title: TraceSettings_t
index: true
order: 2
category:
  - Guide
---

# TraceSettings_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
TraceSettings_t(ptr)
```
# Properties
## TraceHeight 
```lua
--- @type number
Read: tracesettings_t.TraceHeight
Write: tracesettings_t.TraceHeight = value
```
## TraceRadius 
```lua
--- @type number
Read: tracesettings_t.TraceRadius
Write: tracesettings_t.TraceRadius = value
```
# Functions
## ToPtr
```lua
--- @return string
tracesettings_t:ToPtr()
```
## IsValid
```lua
--- @return bool
tracesettings_t:IsValid()
```

:::