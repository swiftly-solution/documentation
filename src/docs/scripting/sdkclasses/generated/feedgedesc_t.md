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
--- @param ptr string
FeEdgeDesc_t(ptr)
```
# Properties
## Edge 
```lua
--- @type table
Read: feedgedesc_t.Edge
Write: feedgedesc_t.Edge = value
```
## VirtElem 
```lua
--- @type table
Read: feedgedesc_t.VirtElem
Write: feedgedesc_t.VirtElem = value
```
# Functions
## ToPtr
```lua
--- @return string
feedgedesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
feedgedesc_t:IsValid()
```

:::