---
title: CTriggerImpact
index: true
order: 2
category:
  - Guide
---

# CTriggerImpact

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTriggerImpact(ptr)
```
# Properties
## Magnitude 
```lua
--- @type number
Read: ctriggerimpact.Magnitude
Write: ctriggerimpact.Magnitude = value
```
## Noise 
```lua
--- @type number
Read: ctriggerimpact.Noise
Write: ctriggerimpact.Noise = value
```
## Viewkick 
```lua
--- @type number
Read: ctriggerimpact.Viewkick
Write: ctriggerimpact.Viewkick = value
```
## Parent (Read-Only)
```lua
--- @type CTriggerMultiple
Read: ctriggerimpact.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerimpact:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerimpact:IsValid()
```

:::