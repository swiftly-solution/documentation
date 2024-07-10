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
MaterialResourceData_t(ptr --[[ string ]])
```
# Properties
## MaterialName 
```lua
@type string
Read: materialresourcedata_t.MaterialName
Write: materialresourcedata_t.MaterialName = value
```
## ShaderName 
```lua
@type string
Read: materialresourcedata_t.ShaderName
Write: materialresourcedata_t.ShaderName = value
```
## IntParams 
```lua
@type table
Read: materialresourcedata_t.IntParams
Write: materialresourcedata_t.IntParams = value
```
## FloatParams 
```lua
@type table
Read: materialresourcedata_t.FloatParams
Write: materialresourcedata_t.FloatParams = value
```
## VectorParams 
```lua
@type table
Read: materialresourcedata_t.VectorParams
Write: materialresourcedata_t.VectorParams = value
```
## TextureParams 
```lua
@type table
Read: materialresourcedata_t.TextureParams
Write: materialresourcedata_t.TextureParams = value
```
## DynamicParams 
```lua
@type table
Read: materialresourcedata_t.DynamicParams
Write: materialresourcedata_t.DynamicParams = value
```
## DynamicTextureParams 
```lua
@type table
Read: materialresourcedata_t.DynamicTextureParams
Write: materialresourcedata_t.DynamicTextureParams = value
```
## IntAttributes 
```lua
@type table
Read: materialresourcedata_t.IntAttributes
Write: materialresourcedata_t.IntAttributes = value
```
## FloatAttributes 
```lua
@type table
Read: materialresourcedata_t.FloatAttributes
Write: materialresourcedata_t.FloatAttributes = value
```
## VectorAttributes 
```lua
@type table
Read: materialresourcedata_t.VectorAttributes
Write: materialresourcedata_t.VectorAttributes = value
```
## TextureAttributes 
```lua
@type table
Read: materialresourcedata_t.TextureAttributes
Write: materialresourcedata_t.TextureAttributes = value
```
## StringAttributes 
```lua
@type table
Read: materialresourcedata_t.StringAttributes
Write: materialresourcedata_t.StringAttributes = value
```
## RenderAttributesUsed 
```lua
@type table
Read: materialresourcedata_t.RenderAttributesUsed
Write: materialresourcedata_t.RenderAttributesUsed = value
```
# Functions
## ToPtr
```lua
@returns string
materialresourcedata_t:ToPtr()
```
## IsValid
```lua
@returns bool
materialresourcedata_t:IsValid()
```

:::