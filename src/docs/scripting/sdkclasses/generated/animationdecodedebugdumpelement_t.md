---
title: AnimationDecodeDebugDumpElement_t
index: true
order: 2
category:
  - Guide
---

# AnimationDecodeDebugDumpElement_t

::: tabs
@tab Lua
# Constructor
```lua
AnimationDecodeDebugDumpElement_t(ptr --[[ string ]])
```
# Properties
## EntityIndex 
```lua
@type number
Read: animationdecodedebugdumpelement_t.EntityIndex
Write: animationdecodedebugdumpelement_t.EntityIndex = value
```
## ModelName 
```lua
@type string
Read: animationdecodedebugdumpelement_t.ModelName
Write: animationdecodedebugdumpelement_t.ModelName = value
```
## PoseParams (Read-Only)
```lua
@type table
Read: animationdecodedebugdumpelement_t.PoseParams
```
## DecodeOps (Read-Only)
```lua
@type table
Read: animationdecodedebugdumpelement_t.DecodeOps
```
## InternalOps (Read-Only)
```lua
@type table
Read: animationdecodedebugdumpelement_t.InternalOps
```
## DecodedAnims (Read-Only)
```lua
@type table
Read: animationdecodedebugdumpelement_t.DecodedAnims
```
# Functions
## ToPtr
```lua
@returns string
animationdecodedebugdumpelement_t:ToPtr()
```
## IsValid
```lua
@returns bool
animationdecodedebugdumpelement_t:IsValid()
```

:::