---
title: CChangeLevel
index: true
order: 2
category:
  - Guide
---

# CChangeLevel

::: tabs
@tab Lua
# Constructor
```lua
CChangeLevel(ptr)
```
# Properties
## MapName 
```lua
--- @type string
Read: cchangelevel.MapName
Write: cchangelevel.MapName = value
```
## LandmarkName 
```lua
--- @type string
Read: cchangelevel.LandmarkName
Write: cchangelevel.LandmarkName = value
```
## OnChangeLevel (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cchangelevel.OnChangeLevel
```
## Touched 
```lua
--- @type boolean
Read: cchangelevel.Touched
Write: cchangelevel.Touched = value
```
## NoTouch 
```lua
--- @type boolean
Read: cchangelevel.NoTouch
Write: cchangelevel.NoTouch = value
```
## NewChapter 
```lua
--- @type boolean
Read: cchangelevel.NewChapter
Write: cchangelevel.NewChapter = value
```
## OnChangeLevelFired 
```lua
--- @type boolean
Read: cchangelevel.OnChangeLevelFired
Write: cchangelevel.OnChangeLevelFired = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: cchangelevel.Parent
```
# Functions
## ToPtr
```lua
@returns string
cchangelevel:ToPtr()
```
## IsValid
```lua
@returns bool
cchangelevel:IsValid()
```

:::