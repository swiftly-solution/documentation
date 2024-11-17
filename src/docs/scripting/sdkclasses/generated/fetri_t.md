---
title: FeTri_t
index: true
order: 2
category:
  - Guide
---

# FeTri_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeTri_t(ptr)
```
# Properties
## 2 
```lua
--- @type Vector2D
Read: fetri_t.2
Write: fetri_t.2 = value
```
## Node 
```lua
--- @type table
Read: fetri_t.Node
Write: fetri_t.Node = value
```
## W1 
```lua
--- @type number
Read: fetri_t.W1
Write: fetri_t.W1 = value
```
## W2 
```lua
--- @type number
Read: fetri_t.W2
Write: fetri_t.W2 = value
```
## 1x 
```lua
--- @type number
Read: fetri_t.1x
Write: fetri_t.1x = value
```
# Functions
## ToPtr
```lua
--- @return string
fetri_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fetri_t:IsValid()
```

:::