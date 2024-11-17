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
--- @param ptr string
CMotionSearchNode(ptr)
```
# Properties
## Children (Read-Only)
```lua
--- @type table
Read: cmotionsearchnode.Children
```
## Quantizer (Read-Only)
```lua
--- @type CVectorQuantizer
Read: cmotionsearchnode.Quantizer
```
## SelectableSamples (Read-Only)
```lua
--- @type table
Read: cmotionsearchnode.SelectableSamples
```
# Functions
## ToPtr
```lua
--- @return string
cmotionsearchnode:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotionsearchnode:IsValid()
```

:::