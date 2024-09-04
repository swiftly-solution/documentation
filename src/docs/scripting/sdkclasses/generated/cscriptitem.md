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
## Parent (Read-Only)
```lua
@type CItem
Read: cscriptitem.Parent
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