---
title: FeQuad_t
index: true
order: 2
category:
  - Guide
---

# FeQuad_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeQuad_t(ptr)
```
# Properties
## Node 
```lua
--- @type table
Read: fequad_t.Node
Write: fequad_t.Node = value
```
## Slack 
```lua
--- @type number
Read: fequad_t.Slack
Write: fequad_t.Slack = value
```
## Shape 
```lua
--- @type table
Read: fequad_t.Shape
Write: fequad_t.Shape = value
```
# Functions
## ToPtr
```lua
--- @return string
fequad_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fequad_t:IsValid()
```

:::