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
--- @param ptr string
CScriptNavBlocker(ptr)
```
# Properties
## Extent 
```lua
--- @type Vector
Read: cscriptnavblocker.Extent
Write: cscriptnavblocker.Extent = value
```
## Parent (Read-Only)
```lua
--- @type CFuncNavBlocker
Read: cscriptnavblocker.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cscriptnavblocker:ToPtr()
```
## IsValid
```lua
--- @return bool
cscriptnavblocker:IsValid()
```

:::