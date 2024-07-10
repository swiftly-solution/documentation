---
title: VMixFreeverbDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixFreeverbDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixFreeverbDesc_t(ptr --[[ string ]])
```
# Properties
## RoomSize 
```lua
@type number
Read: vmixfreeverbdesc_t.RoomSize
Write: vmixfreeverbdesc_t.RoomSize = value
```
## Damp 
```lua
@type number
Read: vmixfreeverbdesc_t.Damp
Write: vmixfreeverbdesc_t.Damp = value
```
## Width 
```lua
@type number
Read: vmixfreeverbdesc_t.Width
Write: vmixfreeverbdesc_t.Width = value
```
## LateReflections 
```lua
@type number
Read: vmixfreeverbdesc_t.LateReflections
Write: vmixfreeverbdesc_t.LateReflections = value
```
# Functions
## ToPtr
```lua
@returns string
vmixfreeverbdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixfreeverbdesc_t:IsValid()
```

:::