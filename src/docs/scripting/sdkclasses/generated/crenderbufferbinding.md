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
@returns string
crenderbufferbinding:ToPtr()
```
## IsValid
```lua
@returns bool
crenderbufferbinding:IsValid()
```

:::