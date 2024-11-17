---
title: MaterialResourceData_t
index: true
order: 2
category:
  - Guide
---

# MaterialResourceData_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
MaterialResourceData_t(ptr)
```
# Properties
## MaterialName 
```lua
--- @type string
Read: materialresourcedata_t.MaterialName
Write: materialresourcedata_t.MaterialName = value
```
## ShaderName 
```lua
--- @type string
Read: materialresourcedata_t.ShaderName
Write: materialresourcedata_t.ShaderName = value
```
## IntParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.IntParams
```
## FloatParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.FloatParams
```
## VectorParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.VectorParams
```
## TextureParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.TextureParams
```
## DynamicParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.DynamicParams
```
## DynamicTextureParams (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.DynamicTextureParams
```
## IntAttributes (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.IntAttributes
```
## FloatAttributes (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.FloatAttributes
```
## VectorAttributes (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.VectorAttributes
```
## TextureAttributes (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.TextureAttributes
```
## StringAttributes (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.StringAttributes
```
## RenderAttributesUsed (Read-Only)
```lua
--- @type table
Read: materialresourcedata_t.RenderAttributesUsed
```
# Functions
## ToPtr
```lua
--- @return string
materialresourcedata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
materialresourcedata_t:IsValid()
```

:::