---
title: RnSoftbodySpring_t
index: true
order: 2
category:
  - Guide
---

# RnSoftbodySpring_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RnSoftbodySpring_t(ptr)
```
# Properties
## Particle 
```lua
--- @type table
Read: rnsoftbodyspring_t.Particle
Write: rnsoftbodyspring_t.Particle = value
```
## Length 
```lua
--- @type number
Read: rnsoftbodyspring_t.Length
Write: rnsoftbodyspring_t.Length = value
```
# Functions
## ToPtr
```lua
--- @return string
rnsoftbodyspring_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnsoftbodyspring_t:IsValid()
```

:::