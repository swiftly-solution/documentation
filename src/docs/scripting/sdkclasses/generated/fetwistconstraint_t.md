---
title: FeTwistConstraint_t
index: true
order: 2
category:
  - Guide
---

# FeTwistConstraint_t

::: tabs
@tab Lua
# Constructor
```lua
FeTwistConstraint_t(ptr)
```
# Properties
## NodeOrient 
```lua
--- @type number
Read: fetwistconstraint_t.NodeOrient
Write: fetwistconstraint_t.NodeOrient = value
```
## NodeEnd 
```lua
--- @type number
Read: fetwistconstraint_t.NodeEnd
Write: fetwistconstraint_t.NodeEnd = value
```
## TwistRelax 
```lua
--- @type number
Read: fetwistconstraint_t.TwistRelax
Write: fetwistconstraint_t.TwistRelax = value
```
## SwingRelax 
```lua
--- @type number
Read: fetwistconstraint_t.SwingRelax
Write: fetwistconstraint_t.SwingRelax = value
```
# Functions
## ToPtr
```lua
@returns string
fetwistconstraint_t:ToPtr()
```
## IsValid
```lua
@returns bool
fetwistconstraint_t:IsValid()
```

:::