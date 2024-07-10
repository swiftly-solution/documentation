---
title: CNmTransitionEvent
index: true
order: 2
category:
  - Guide
---

# CNmTransitionEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmTransitionEvent(ptr --[[ string ]])
```
# Properties
## Rule 
```lua
@type number
Read: cnmtransitionevent.Rule
Write: cnmtransitionevent.Rule = value
```
## Parent 
```lua
@type CNmEvent
Read: cnmtransitionevent.Parent
Write: cnmtransitionevent.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnmtransitionevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtransitionevent:IsValid()
```

:::