---
title: VMixOscDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixOscDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixOscDesc_t(ptr)
```
# Properties
## OscType 
```lua
--- @type number
Read: vmixoscdesc_t.OscType
Write: vmixoscdesc_t.OscType = value
```
## Freq 
```lua
--- @type number
Read: vmixoscdesc_t.Freq
Write: vmixoscdesc_t.Freq = value
```
## Phase 
```lua
--- @type number
Read: vmixoscdesc_t.Phase
Write: vmixoscdesc_t.Phase = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixoscdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixoscdesc_t:IsValid()
```

:::