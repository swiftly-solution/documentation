---
title: CScriptItem
index: true
order: 2
category:
  - Guide
---

# CScriptItem

::: tabs
@tab Lua
# Constructor
```lua
CScriptItem(ptr --[[ string ]])
```
# Properties
## MoveTypeOverride 
```lua
@type number
Read: cscriptitem.MoveTypeOverride
Write: cscriptitem.MoveTypeOverride = value
```
## Parent 
```lua
@type CItem
Read: cscriptitem.Parent
Write: cscriptitem.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cscriptitem:ToPtr()
```
## IsValid
```lua
@returns bool
cscriptitem:IsValid()
```

:::