---
title: CRenderBufferBinding
index: true
order: 2
category:
  - Guide
---

# CRenderBufferBinding

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRenderBufferBinding(ptr)
```
# Properties
## Buffer 
```lua
--- @type number
Read: crenderbufferbinding.Buffer
Write: crenderbufferbinding.Buffer = value
```
## BindOffsetBytes 
```lua
--- @type number
Read: crenderbufferbinding.BindOffsetBytes
Write: crenderbufferbinding.BindOffsetBytes = value
```
# Functions
## ToPtr
```lua
--- @return string
crenderbufferbinding:ToPtr()
```
## IsValid
```lua
--- @return bool
crenderbufferbinding:IsValid()
```

:::