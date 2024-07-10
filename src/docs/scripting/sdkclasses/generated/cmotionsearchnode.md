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
## Children 
```lua
@type table
Read: cmotionsearchnode.Children
Write: cmotionsearchnode.Children = value
```
## Quantizer 
```lua
@type CVectorQuantizer
Read: cmotionsearchnode.Quantizer
Write: cmotionsearchnode.Quantizer = value
```
## SelectableSamples 
```lua
@type table
Read: cmotionsearchnode.SelectableSamples
Write: cmotionsearchnode.SelectableSamples = value
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