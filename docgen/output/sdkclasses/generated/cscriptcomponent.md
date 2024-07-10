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
CScriptComponent(ptr --[[ string ]])
```
# Properties
## ScriptClassName 
```lua
@type string
Read: cscriptcomponent.ScriptClassName
Write: cscriptcomponent.ScriptClassName = value
```
## Parent 
```lua
@type CEntityComponent
Read: cscriptcomponent.Parent
Write: cscriptcomponent.Parent = value
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