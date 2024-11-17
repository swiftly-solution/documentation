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
--- @param ptr string
WorldNodeOnDiskBufferData_t(ptr)
```
# Properties
## ElementCount 
```lua
--- @type number
Read: worldnodeondiskbufferdata_t.ElementCount
Write: worldnodeondiskbufferdata_t.ElementCount = value
```
## ElementSizeInBytes 
```lua
--- @type number
Read: worldnodeondiskbufferdata_t.ElementSizeInBytes
Write: worldnodeondiskbufferdata_t.ElementSizeInBytes = value
```
## InputLayoutFields (Read-Only)
```lua
--- @type table
Read: worldnodeondiskbufferdata_t.InputLayoutFields
```
## Data (Read-Only)
```lua
--- @type table
Read: worldnodeondiskbufferdata_t.Data
```
# Functions
## ToPtr
```lua
--- @return string
worldnodeondiskbufferdata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
worldnodeondiskbufferdata_t:IsValid()
```

:::