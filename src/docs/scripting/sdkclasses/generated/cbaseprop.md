---
title: CBaseProp
index: true
order: 2
category:
  - Guide
---

# CBaseProp

::: tabs
@tab Lua
# Constructor
```lua
CBaseProp(ptr --[[ string ]])
```
# Properties
## ModelOverrodeBlockLOS 
```lua
@type boolean
Read: cbaseprop.ModelOverrodeBlockLOS
Write: cbaseprop.ModelOverrodeBlockLOS = value
```
## ShapeType 
```lua
@type number
Read: cbaseprop.ShapeType
Write: cbaseprop.ShapeType = value
```
## ConformToCollisionBounds 
```lua
@type boolean
Read: cbaseprop.ConformToCollisionBounds
Write: cbaseprop.ConformToCollisionBounds = value
```
## Parent 
```lua
@type CBaseAnimGraph
Read: cbaseprop.Parent
Write: cbaseprop.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseprop:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseprop:IsValid()
```

:::