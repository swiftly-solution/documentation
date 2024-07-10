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
## ParticleBoneHash 
```lua
@type table
Read: physsoftbodydesc_t.ParticleBoneHash
Write: physsoftbodydesc_t.ParticleBoneHash = value
```
## Particles 
```lua
@type table
Read: physsoftbodydesc_t.Particles
Write: physsoftbodydesc_t.Particles = value
```
## Springs 
```lua
@type table
Read: physsoftbodydesc_t.Springs
Write: physsoftbodydesc_t.Springs = value
```
## Capsules 
```lua
@type table
Read: physsoftbodydesc_t.Capsules
Write: physsoftbodydesc_t.Capsules = value
```
## ParticleBoneName 
```lua
@type table
Read: physsoftbodydesc_t.ParticleBoneName
Write: physsoftbodydesc_t.ParticleBoneName = value
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