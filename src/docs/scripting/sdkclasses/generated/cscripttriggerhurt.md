---
title: CScriptTriggerHurt
index: true
order: 2
category:
  - Guide
---

# CScriptTriggerHurt

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CScriptTriggerHurt(ptr)
```
# Properties
## Extent 
```lua
--- @type Vector
Read: cscripttriggerhurt.Extent
Write: cscripttriggerhurt.Extent = value
```
## Parent (Read-Only)
```lua
--- @type CTriggerHurt
Read: cscripttriggerhurt.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cscripttriggerhurt:ToPtr()
```
## IsValid
```lua
--- @return bool
cscripttriggerhurt:IsValid()
```

:::