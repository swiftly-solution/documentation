---
title: CSingleFrameUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSingleFrameUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CSingleFrameUpdateNode(ptr --[[ string ]])
```
# Properties
## PoseCacheHandle 
```lua
@type CPoseHandle
Read: csingleframeupdatenode.PoseCacheHandle
Write: csingleframeupdatenode.PoseCacheHandle = value
```
## Cycle 
```lua
@type number
Read: csingleframeupdatenode.Cycle
Write: csingleframeupdatenode.Cycle = value
```
## Parent 
```lua
@type CLeafUpdateNode
Read: csingleframeupdatenode.Parent
Write: csingleframeupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csingleframeupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
csingleframeupdatenode:IsValid()
```

:::