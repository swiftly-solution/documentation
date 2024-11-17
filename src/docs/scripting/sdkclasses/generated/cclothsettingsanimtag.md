---
title: CClothSettingsAnimTag
index: true
order: 2
category:
  - Guide
---

# CClothSettingsAnimTag

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CClothSettingsAnimTag(ptr)
```
# Properties
## Stiffness 
```lua
--- @type number
Read: cclothsettingsanimtag.Stiffness
Write: cclothsettingsanimtag.Stiffness = value
```
## EaseIn 
```lua
--- @type number
Read: cclothsettingsanimtag.EaseIn
Write: cclothsettingsanimtag.EaseIn = value
```
## EaseOut 
```lua
--- @type number
Read: cclothsettingsanimtag.EaseOut
Write: cclothsettingsanimtag.EaseOut = value
```
## VertexSet 
```lua
--- @type string
Read: cclothsettingsanimtag.VertexSet
Write: cclothsettingsanimtag.VertexSet = value
```
## Parent (Read-Only)
```lua
--- @type CAnimTagBase
Read: cclothsettingsanimtag.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cclothsettingsanimtag:ToPtr()
```
## IsValid
```lua
--- @return bool
cclothsettingsanimtag:IsValid()
```

:::