---
title: FootStepTrigger
index: true
order: 2
category:
  - Guide
---

# FootStepTrigger

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FootStepTrigger(ptr)
```
# Properties
## Tags (Read-Only)
```lua
--- @type table
Read: footsteptrigger.Tags
```
## FootIndex 
```lua
--- @type number
Read: footsteptrigger.FootIndex
Write: footsteptrigger.FootIndex = value
```
## TriggerPhase 
```lua
--- @type number
Read: footsteptrigger.TriggerPhase
Write: footsteptrigger.TriggerPhase = value
```
# Functions
## ToPtr
```lua
--- @return string
footsteptrigger:ToPtr()
```
## IsValid
```lua
--- @return bool
footsteptrigger:IsValid()
```

:::