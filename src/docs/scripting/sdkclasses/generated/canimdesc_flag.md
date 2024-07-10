---
title: CAnimDesc_Flag
index: true
order: 2
category:
  - Guide
---

# CAnimDesc_Flag

::: tabs
@tab Lua
# Constructor
```lua
CAnimDesc_Flag(ptr --[[ string ]])
```
# Properties
## Looping 
```lua
@type boolean
Read: canimdesc_flag.Looping
Write: canimdesc_flag.Looping = value
```
## AllZeros 
```lua
@type boolean
Read: canimdesc_flag.AllZeros
Write: canimdesc_flag.AllZeros = value
```
## Hidden 
```lua
@type boolean
Read: canimdesc_flag.Hidden
Write: canimdesc_flag.Hidden = value
```
## Delta 
```lua
@type boolean
Read: canimdesc_flag.Delta
Write: canimdesc_flag.Delta = value
```
## LegacyWorldspace 
```lua
@type boolean
Read: canimdesc_flag.LegacyWorldspace
Write: canimdesc_flag.LegacyWorldspace = value
```
## ModelDoc 
```lua
@type boolean
Read: canimdesc_flag.ModelDoc
Write: canimdesc_flag.ModelDoc = value
```
## ImplicitSeqIgnoreDelta 
```lua
@type boolean
Read: canimdesc_flag.ImplicitSeqIgnoreDelta
Write: canimdesc_flag.ImplicitSeqIgnoreDelta = value
```
## AnimGraphAdditive 
```lua
@type boolean
Read: canimdesc_flag.AnimGraphAdditive
Write: canimdesc_flag.AnimGraphAdditive = value
```
# Functions
## ToPtr
```lua
@returns string
canimdesc_flag:ToPtr()
```
## IsValid
```lua
@returns bool
canimdesc_flag:IsValid()
```

:::