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
CTriggerBrush(ptr --[[ string ]])
```
# Properties
## OnStartTouch 
```lua
@type CEntityIOOutput
Read: ctriggerbrush.OnStartTouch
Write: ctriggerbrush.OnStartTouch = value
```
## OnEndTouch 
```lua
@type CEntityIOOutput
Read: ctriggerbrush.OnEndTouch
Write: ctriggerbrush.OnEndTouch = value
```
## OnUse 
```lua
@type CEntityIOOutput
Read: ctriggerbrush.OnUse
Write: ctriggerbrush.OnUse = value
```
## InputFilter 
```lua
@type number
Read: ctriggerbrush.InputFilter
Write: ctriggerbrush.InputFilter = value
```
## DontMessageParent 
```lua
@type number
Read: ctriggerbrush.DontMessageParent
Write: ctriggerbrush.DontMessageParent = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: ctriggerbrush.Parent
Write: ctriggerbrush.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ctriggerbrush:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerbrush:IsValid()
```

:::