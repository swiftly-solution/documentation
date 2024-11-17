---
title: CAnimFrameBlockAnim
index: true
order: 2
category:
  - Guide
---

# CAnimFrameBlockAnim

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimFrameBlockAnim(ptr)
```
# Properties
## StartFrame 
```lua
--- @type number
Read: canimframeblockanim.StartFrame
Write: canimframeblockanim.StartFrame = value
```
## EndFrame 
```lua
--- @type number
Read: canimframeblockanim.EndFrame
Write: canimframeblockanim.EndFrame = value
```
## SegmentIndexArray (Read-Only)
```lua
--- @type table
Read: canimframeblockanim.SegmentIndexArray
```
# Functions
## ToPtr
```lua
--- @return string
canimframeblockanim:ToPtr()
```
## IsValid
```lua
--- @return bool
canimframeblockanim:IsValid()
```

:::