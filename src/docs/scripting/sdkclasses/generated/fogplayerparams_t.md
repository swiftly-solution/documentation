---
title: fogplayerparams_t
index: true
order: 2
category:
  - Guide
---

# fogplayerparams_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
fogplayerparams_t(ptr)
```
# Properties
## Ctrl (Read-Only)
```lua
--- @type CFogController
Read: fogplayerparams_t.Ctrl
```
## TransitionTime 
```lua
--- @type number
Read: fogplayerparams_t.TransitionTime
Write: fogplayerparams_t.TransitionTime = value
```
## OldColor 
```lua
--- @type Color
Read: fogplayerparams_t.OldColor
Write: fogplayerparams_t.OldColor = value
```
## OldStart 
```lua
--- @type number
Read: fogplayerparams_t.OldStart
Write: fogplayerparams_t.OldStart = value
```
## OldEnd 
```lua
--- @type number
Read: fogplayerparams_t.OldEnd
Write: fogplayerparams_t.OldEnd = value
```
## OldMaxDensity 
```lua
--- @type number
Read: fogplayerparams_t.OldMaxDensity
Write: fogplayerparams_t.OldMaxDensity = value
```
## OldHDRColorScale 
```lua
--- @type number
Read: fogplayerparams_t.OldHDRColorScale
Write: fogplayerparams_t.OldHDRColorScale = value
```
## OldFarZ 
```lua
--- @type number
Read: fogplayerparams_t.OldFarZ
Write: fogplayerparams_t.OldFarZ = value
```
## NewColor 
```lua
--- @type Color
Read: fogplayerparams_t.NewColor
Write: fogplayerparams_t.NewColor = value
```
## NewStart 
```lua
--- @type number
Read: fogplayerparams_t.NewStart
Write: fogplayerparams_t.NewStart = value
```
## NewEnd 
```lua
--- @type number
Read: fogplayerparams_t.NewEnd
Write: fogplayerparams_t.NewEnd = value
```
## NewMaxDensity 
```lua
--- @type number
Read: fogplayerparams_t.NewMaxDensity
Write: fogplayerparams_t.NewMaxDensity = value
```
## NewHDRColorScale 
```lua
--- @type number
Read: fogplayerparams_t.NewHDRColorScale
Write: fogplayerparams_t.NewHDRColorScale = value
```
## NewFarZ 
```lua
--- @type number
Read: fogplayerparams_t.NewFarZ
Write: fogplayerparams_t.NewFarZ = value
```
# Functions
## ToPtr
```lua
--- @return string
fogplayerparams_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fogplayerparams_t:IsValid()
```

:::