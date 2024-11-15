---
title: CScriptComponent
index: true
order: 2
category:
  - Guide
---

# CScriptComponent

::: tabs
@tab Lua
# Constructor
```lua
CScriptComponent(ptr)
```
# Properties
## ScriptClassName 
```lua
--- @type string
Read: cscriptcomponent.ScriptClassName
Write: cscriptcomponent.ScriptClassName = value
```
## Parent (Read-Only)
```lua
--- @type CEntityComponent
Read: cscriptcomponent.Parent
```
# Functions
## ToPtr
```lua
@returns string
cscriptcomponent:ToPtr()
```
## IsValid
```lua
@returns bool
cscriptcomponent:IsValid()
```

:::