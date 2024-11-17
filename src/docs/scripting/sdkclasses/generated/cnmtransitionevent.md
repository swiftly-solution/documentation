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
--- @param ptr string
CNmTransitionEvent(ptr)
```
# Properties
## Rule 
```lua
--- @type number
Read: cnmtransitionevent.Rule
Write: cnmtransitionevent.Rule = value
```
## Parent (Read-Only)
```lua
--- @type CNmEvent
Read: cnmtransitionevent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnmtransitionevent:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmtransitionevent:IsValid()
```

:::