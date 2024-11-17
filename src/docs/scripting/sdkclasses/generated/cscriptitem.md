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
--- @param ptr string
CScriptItem(ptr)
```
# Properties
## MoveTypeOverride 
```lua
--- @type number
Read: cscriptitem.MoveTypeOverride
Write: cscriptitem.MoveTypeOverride = value
```
## Parent (Read-Only)
```lua
--- @type CItem
Read: cscriptitem.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cscriptitem:ToPtr()
```
## IsValid
```lua
--- @return bool
cscriptitem:IsValid()
```

:::