---
title: RagdollCreationParams_t
index: true
order: 2
category:
  - Guide
---

# RagdollCreationParams_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RagdollCreationParams_t(ptr)
```
# Properties
## Force 
```lua
--- @type Vector
Read: ragdollcreationparams_t.Force
Write: ragdollcreationparams_t.Force = value
```
## ForceBone 
```lua
--- @type number
Read: ragdollcreationparams_t.ForceBone
Write: ragdollcreationparams_t.ForceBone = value
```
## ForceCurrentWorldTransform 
```lua
--- @type boolean
Read: ragdollcreationparams_t.ForceCurrentWorldTransform
Write: ragdollcreationparams_t.ForceCurrentWorldTransform = value
```
## HealthToGrant 
```lua
--- @type number
Read: ragdollcreationparams_t.HealthToGrant
Write: ragdollcreationparams_t.HealthToGrant = value
```
# Functions
## ToPtr
```lua
--- @return string
ragdollcreationparams_t:ToPtr()
```
## IsValid
```lua
--- @return bool
ragdollcreationparams_t:IsValid()
```

:::