---
title: SoundOpvarTraceResult_t
index: true
order: 2
category:
  - Guide
---

# SoundOpvarTraceResult_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
SoundOpvarTraceResult_t(ptr)
```
# Properties
## Pos 
```lua
--- @type Vector
Read: soundopvartraceresult_t.Pos
Write: soundopvartraceresult_t.Pos = value
```
## DidHit 
```lua
--- @type boolean
Read: soundopvartraceresult_t.DidHit
Write: soundopvartraceresult_t.DidHit = value
```
## DistSqrToCenter 
```lua
--- @type number
Read: soundopvartraceresult_t.DistSqrToCenter
Write: soundopvartraceresult_t.DistSqrToCenter = value
```
# Functions
## ToPtr
```lua
--- @return string
soundopvartraceresult_t:ToPtr()
```
## IsValid
```lua
--- @return bool
soundopvartraceresult_t:IsValid()
```

:::