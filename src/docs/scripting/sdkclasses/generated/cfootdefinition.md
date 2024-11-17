---
title: CFootDefinition
index: true
order: 2
category:
  - Guide
---

# CFootDefinition

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFootDefinition(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: cfootdefinition.Name
Write: cfootdefinition.Name = value
```
## AnkleBoneName 
```lua
--- @type string
Read: cfootdefinition.AnkleBoneName
Write: cfootdefinition.AnkleBoneName = value
```
## ToeBoneName 
```lua
--- @type string
Read: cfootdefinition.ToeBoneName
Write: cfootdefinition.ToeBoneName = value
```
## BallOffset 
```lua
--- @type Vector
Read: cfootdefinition.BallOffset
Write: cfootdefinition.BallOffset = value
```
## HeelOffset 
```lua
--- @type Vector
Read: cfootdefinition.HeelOffset
Write: cfootdefinition.HeelOffset = value
```
## FootLength 
```lua
--- @type number
Read: cfootdefinition.FootLength
Write: cfootdefinition.FootLength = value
```
## BindPoseDirectionMS 
```lua
--- @type number
Read: cfootdefinition.BindPoseDirectionMS
Write: cfootdefinition.BindPoseDirectionMS = value
```
## TraceHeight 
```lua
--- @type number
Read: cfootdefinition.TraceHeight
Write: cfootdefinition.TraceHeight = value
```
## TraceRadius 
```lua
--- @type number
Read: cfootdefinition.TraceRadius
Write: cfootdefinition.TraceRadius = value
```
# Functions
## ToPtr
```lua
--- @return string
cfootdefinition:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootdefinition:IsValid()
```

:::