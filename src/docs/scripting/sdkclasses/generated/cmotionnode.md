---
title: CMotionNode
index: true
order: 2
category:
  - Guide
---

# CMotionNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMotionNode(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: cmotionnode.Name
Write: cmotionnode.Name = value
```
## Id (Read-Only)
```lua
--- @type AnimNodeID
Read: cmotionnode.Id
```
# Functions
## ToPtr
```lua
--- @return string
cmotionnode:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotionnode:IsValid()
```

:::