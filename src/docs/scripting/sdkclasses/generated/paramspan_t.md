---
title: ParamSpan_t
index: true
order: 2
category:
  - Guide
---

# ParamSpan_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ParamSpan_t(ptr)
```
# Properties
## Samples (Read-Only)
```lua
--- @type table
Read: paramspan_t.Samples
```
## Param (Read-Only)
```lua
--- @type CAnimParamHandle
Read: paramspan_t.Param
```
## ParamType 
```lua
--- @type number
Read: paramspan_t.ParamType
Write: paramspan_t.ParamType = value
```
## StartCycle 
```lua
--- @type number
Read: paramspan_t.StartCycle
Write: paramspan_t.StartCycle = value
```
## EndCycle 
```lua
--- @type number
Read: paramspan_t.EndCycle
Write: paramspan_t.EndCycle = value
```
# Functions
## ToPtr
```lua
--- @return string
paramspan_t:ToPtr()
```
## IsValid
```lua
--- @return bool
paramspan_t:IsValid()
```

:::