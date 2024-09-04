---
title: CScriptNavBlocker
index: true
order: 2
category:
  - Guide
---

# CScriptNavBlocker

::: tabs
@tab Lua
# Constructor
```lua
CScriptNavBlocker(ptr --[[ string ]])
```
# Properties
## Extent 
```lua
@type Vector
Read: cscriptnavblocker.Extent
Write: cscriptnavblocker.Extent = value
```
## Parent (Read-Only)
```lua
@type CFuncNavBlocker
Read: cscriptnavblocker.Parent
```
# Functions
## ToPtr
```lua
@returns string
cscriptnavblocker:ToPtr()
```
## IsValid
```lua
@returns bool
cscriptnavblocker:IsValid()
```

:::