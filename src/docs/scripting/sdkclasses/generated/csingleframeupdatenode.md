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
--- @param ptr string
CSingleFrameUpdateNode(ptr)
```
# Properties
## PoseCacheHandle (Read-Only)
```lua
--- @type CPoseHandle
Read: csingleframeupdatenode.PoseCacheHandle
```
## Sequence 
```lua
--- @type number
Read: csingleframeupdatenode.Sequence
Write: csingleframeupdatenode.Sequence = value
```
## Cycle 
```lua
--- @type number
Read: csingleframeupdatenode.Cycle
Write: csingleframeupdatenode.Cycle = value
```
## Parent (Read-Only)
```lua
--- @type CLeafUpdateNode
Read: csingleframeupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csingleframeupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
csingleframeupdatenode:IsValid()
```

:::