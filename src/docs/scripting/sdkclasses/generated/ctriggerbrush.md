---
title: CTriggerBrush
index: true
order: 2
category:
  - Guide
---

# CTriggerBrush

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTriggerBrush(ptr)
```
# Properties
## OnStartTouch (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerbrush.OnStartTouch
```
## OnEndTouch (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerbrush.OnEndTouch
```
## OnUse (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerbrush.OnUse
```
## InputFilter 
```lua
--- @type number
Read: ctriggerbrush.InputFilter
Write: ctriggerbrush.InputFilter = value
```
## DontMessageParent 
```lua
--- @type number
Read: ctriggerbrush.DontMessageParent
Write: ctriggerbrush.DontMessageParent = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: ctriggerbrush.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerbrush:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerbrush:IsValid()
```

:::