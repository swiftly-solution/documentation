---
title: CScriptTriggerOnce
index: true
order: 2
category:
  - Guide
---

# CScriptTriggerOnce

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CScriptTriggerOnce(ptr)
```
# Properties
## Extent 
```lua
--- @type Vector
Read: cscripttriggeronce.Extent
Write: cscripttriggeronce.Extent = value
```
## Parent (Read-Only)
```lua
--- @type CTriggerOnce
Read: cscripttriggeronce.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cscripttriggeronce:ToPtr()
```
## IsValid
```lua
--- @return bool
cscripttriggeronce:IsValid()
```

:::