---
title: CSoundAreaEntityBase
index: true
order: 2
category:
  - Guide
---

# CSoundAreaEntityBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSoundAreaEntityBase(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: csoundareaentitybase.Disabled
Write: csoundareaentitybase.Disabled = value
```
## SoundAreaType 
```lua
--- @type string
Read: csoundareaentitybase.SoundAreaType
Write: csoundareaentitybase.SoundAreaType = value
```
## Pos 
```lua
--- @type Vector
Read: csoundareaentitybase.Pos
Write: csoundareaentitybase.Pos = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: csoundareaentitybase.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csoundareaentitybase:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundareaentitybase:IsValid()
```

:::