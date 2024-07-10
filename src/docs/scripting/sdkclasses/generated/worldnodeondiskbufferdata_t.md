---
title: WorldNodeOnDiskBufferData_t
index: true
order: 2
category:
  - Guide
---

# WorldNodeOnDiskBufferData_t

::: tabs
@tab Lua
# Constructor
```lua
WorldNodeOnDiskBufferData_t(ptr --[[ string ]])
```
# Properties
## ElementCount 
```lua
@type number
Read: worldnodeondiskbufferdata_t.ElementCount
Write: worldnodeondiskbufferdata_t.ElementCount = value
```
## ElementSizeInBytes 
```lua
@type number
Read: worldnodeondiskbufferdata_t.ElementSizeInBytes
Write: worldnodeondiskbufferdata_t.ElementSizeInBytes = value
```
## InputLayoutFields 
```lua
@type table
Read: worldnodeondiskbufferdata_t.InputLayoutFields
Write: worldnodeondiskbufferdata_t.InputLayoutFields = value
```
## Data 
```lua
@type table
Read: worldnodeondiskbufferdata_t.Data
Write: worldnodeondiskbufferdata_t.Data = value
```
# Functions
## ToPtr
```lua
@returns string
worldnodeondiskbufferdata_t:ToPtr()
```
## IsValid
```lua
@returns bool
worldnodeondiskbufferdata_t:IsValid()
```

:::