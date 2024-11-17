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
--- @param ptr string
CSoundContainerReferenceArray(ptr)
```
# Properties
## UseReference 
```lua
--- @type boolean
Read: csoundcontainerreferencearray.UseReference
Write: csoundcontainerreferencearray.UseReference = value
```
## Sounds (Read-Only)
```lua
--- @type table
Read: csoundcontainerreferencearray.Sounds
```
# Functions
## ToPtr
```lua
--- @return string
csoundcontainerreferencearray:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundcontainerreferencearray:IsValid()
```

:::