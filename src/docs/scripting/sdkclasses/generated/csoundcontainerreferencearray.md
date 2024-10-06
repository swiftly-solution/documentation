---
title: CSoundContainerReferenceArray
index: true
order: 2
category:
  - Guide
---

# CSoundContainerReferenceArray

::: tabs
@tab Lua
# Constructor
```lua
CSoundContainerReferenceArray(ptr --[[ string ]])
```
# Properties
## UseReference 
```lua
@type boolean
Read: csoundcontainerreferencearray.UseReference
Write: csoundcontainerreferencearray.UseReference = value
```
## Sounds (Read-Only)
```lua
@type table
Read: csoundcontainerreferencearray.Sounds
```
# Functions
## ToPtr
```lua
@returns string
csoundcontainerreferencearray:ToPtr()
```
## IsValid
```lua
@returns bool
csoundcontainerreferencearray:IsValid()
```

:::