---
title: CScriptTriggerPush
index: true
order: 2
category:
  - Guide
---

# CScriptTriggerPush

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CScriptTriggerPush(ptr)
```
# Properties
## Extent 
```lua
--- @type Vector
Read: cscripttriggerpush.Extent
Write: cscripttriggerpush.Extent = value
```
## Parent (Read-Only)
```lua
--- @type CTriggerPush
Read: cscripttriggerpush.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cscripttriggerpush:ToPtr()
```
## IsValid
```lua
--- @return bool
cscripttriggerpush:IsValid()
```

:::