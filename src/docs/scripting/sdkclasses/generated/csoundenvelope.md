---
title: CSoundEnvelope
index: true
order: 2
category:
  - Guide
---

# CSoundEnvelope

::: tabs
@tab Lua
# Constructor
```lua
CSoundEnvelope(ptr)
```
# Properties
## Current 
```lua
--- @type number
Read: csoundenvelope.Current
Write: csoundenvelope.Current = value
```
## Target 
```lua
--- @type number
Read: csoundenvelope.Target
Write: csoundenvelope.Target = value
```
## Rate 
```lua
--- @type number
Read: csoundenvelope.Rate
Write: csoundenvelope.Rate = value
```
## Forceupdate 
```lua
--- @type boolean
Read: csoundenvelope.Forceupdate
Write: csoundenvelope.Forceupdate = value
```
# Functions
## ToPtr
```lua
@returns string
csoundenvelope:ToPtr()
```
## IsValid
```lua
@returns bool
csoundenvelope:IsValid()
```

:::