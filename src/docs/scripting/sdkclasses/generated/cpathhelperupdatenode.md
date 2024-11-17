---
title: CPathHelperUpdateNode
index: true
order: 2
category:
  - Guide
---

# CPathHelperUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPathHelperUpdateNode(ptr)
```
# Properties
## StoppingRadius 
```lua
--- @type number
Read: cpathhelperupdatenode.StoppingRadius
Write: cpathhelperupdatenode.StoppingRadius = value
```
## StoppingSpeedScale 
```lua
--- @type number
Read: cpathhelperupdatenode.StoppingSpeedScale
Write: cpathhelperupdatenode.StoppingSpeedScale = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cpathhelperupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpathhelperupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathhelperupdatenode:IsValid()
```

:::