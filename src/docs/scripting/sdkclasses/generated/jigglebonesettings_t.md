---
title: JiggleBoneSettings_t
index: true
order: 2
category:
  - Guide
---

# JiggleBoneSettings_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
JiggleBoneSettings_t(ptr)
```
# Properties
## BoneIndex 
```lua
--- @type number
Read: jigglebonesettings_t.BoneIndex
Write: jigglebonesettings_t.BoneIndex = value
```
## SpringStrength 
```lua
--- @type number
Read: jigglebonesettings_t.SpringStrength
Write: jigglebonesettings_t.SpringStrength = value
```
## MaxTimeStep 
```lua
--- @type number
Read: jigglebonesettings_t.MaxTimeStep
Write: jigglebonesettings_t.MaxTimeStep = value
```
## Damping 
```lua
--- @type number
Read: jigglebonesettings_t.Damping
Write: jigglebonesettings_t.Damping = value
```
## BoundsMaxLS 
```lua
--- @type Vector
Read: jigglebonesettings_t.BoundsMaxLS
Write: jigglebonesettings_t.BoundsMaxLS = value
```
## BoundsMinLS 
```lua
--- @type Vector
Read: jigglebonesettings_t.BoundsMinLS
Write: jigglebonesettings_t.BoundsMinLS = value
```
## SimSpace 
```lua
--- @type number
Read: jigglebonesettings_t.SimSpace
Write: jigglebonesettings_t.SimSpace = value
```
# Functions
## ToPtr
```lua
--- @return string
jigglebonesettings_t:ToPtr()
```
## IsValid
```lua
--- @return bool
jigglebonesettings_t:IsValid()
```

:::