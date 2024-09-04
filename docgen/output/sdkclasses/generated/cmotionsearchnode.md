---
title: CMotionSearchNode
index: true
order: 2
category:
  - Guide
---

# CMotionSearchNode

::: tabs
@tab Lua
# Constructor
```lua
CMotionSearchNode(ptr --[[ string ]])
```
# Properties
## Children (Read-Only)
```lua
@type table
Read: cmotionsearchnode.Children
```
## Quantizer (Read-Only)
```lua
@type CVectorQuantizer
Read: cmotionsearchnode.Quantizer
```
## SelectableSamples (Read-Only)
```lua
@type table
Read: cmotionsearchnode.SelectableSamples
```
# Functions
## ToPtr
```lua
@returns string
cmotionsearchnode:ToPtr()
```
## IsValid
```lua
@returns bool
cmotionsearchnode:IsValid()
```

:::