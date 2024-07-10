---
title: FeEdgeDesc_t
index: true
order: 2
category:
  - Guide
---

# FeEdgeDesc_t

::: tabs
@tab Lua
# Constructor
```lua
FeEdgeDesc_t(ptr --[[ string ]])
```
# Properties
## Edge 
```lua
@type table
Read: feedgedesc_t.Edge
Write: feedgedesc_t.Edge = value
```
## VirtElem 
```lua
@type table
Read: feedgedesc_t.VirtElem
Write: feedgedesc_t.VirtElem = value
```
# Functions
## ToPtr
```lua
@returns string
feedgedesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
feedgedesc_t:IsValid()
```

:::