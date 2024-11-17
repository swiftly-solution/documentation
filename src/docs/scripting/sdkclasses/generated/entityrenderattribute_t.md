---
title: EntityRenderAttribute_t
index: true
order: 2
category:
  - Guide
---

# EntityRenderAttribute_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EntityRenderAttribute_t(ptr)
```
# Properties
## ID 
```lua
--- @type number
Read: entityrenderattribute_t.ID
Write: entityrenderattribute_t.ID = value
```
## Values 
```lua
--- @type Vector4D
Read: entityrenderattribute_t.Values
Write: entityrenderattribute_t.Values = value
```
# Functions
## ToPtr
```lua
--- @return string
entityrenderattribute_t:ToPtr()
```
## IsValid
```lua
--- @return bool
entityrenderattribute_t:IsValid()
```

:::