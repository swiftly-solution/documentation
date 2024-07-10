---
title: CEconWearable
index: true
order: 2
category:
  - Guide
---

# CEconWearable

::: tabs
@tab Lua
# Constructor
```lua
CEconWearable(ptr --[[ string ]])
```
# Properties
## ForceSkin 
```lua
@type number
Read: ceconwearable.ForceSkin
Write: ceconwearable.ForceSkin = value
```
## AlwaysAllow 
```lua
@type boolean
Read: ceconwearable.AlwaysAllow
Write: ceconwearable.AlwaysAllow = value
```
## Parent 
```lua
@type CEconEntity
Read: ceconwearable.Parent
Write: ceconwearable.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ceconwearable:ToPtr()
```
## IsValid
```lua
@returns bool
ceconwearable:IsValid()
```

:::