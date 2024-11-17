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
--- @param ptr string
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
--- @return string
cscriptcomponent:ToPtr()
```
## IsValid
```lua
--- @return bool
cscriptcomponent:IsValid()
```

:::