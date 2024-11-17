---
title: CPlatTrigger
index: true
order: 2
category:
  - Guide
---

# CPlatTrigger

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPlatTrigger(ptr)
```
# Properties
## Platform (Read-Only)
```lua
--- @type CFuncPlat
Read: cplattrigger.Platform
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cplattrigger.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cplattrigger:ToPtr()
```
## IsValid
```lua
--- @return bool
cplattrigger:IsValid()
```

:::