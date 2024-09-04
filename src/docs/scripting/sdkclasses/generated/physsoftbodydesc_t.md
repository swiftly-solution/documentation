---
title: PhysSoftbodyDesc_t
index: true
order: 2
category:
  - Guide
---

# PhysSoftbodyDesc_t

::: tabs
@tab Lua
# Constructor
```lua
PhysSoftbodyDesc_t(ptr --[[ string ]])
```
# Properties
## ParticleBoneHash (Read-Only)
```lua
@type table
Read: physsoftbodydesc_t.ParticleBoneHash
```
## Particles (Read-Only)
```lua
@type table
Read: physsoftbodydesc_t.Particles
```
## Springs (Read-Only)
```lua
@type table
Read: physsoftbodydesc_t.Springs
```
## Capsules (Read-Only)
```lua
@type table
Read: physsoftbodydesc_t.Capsules
```
## ParticleBoneName (Read-Only)
```lua
@type table
Read: physsoftbodydesc_t.ParticleBoneName
```
# Functions
## ToPtr
```lua
@returns string
physsoftbodydesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
physsoftbodydesc_t:IsValid()
```

:::