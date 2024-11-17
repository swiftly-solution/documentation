---
title: CSeqAutoLayer
index: true
order: 2
category:
  - Guide
---

# CSeqAutoLayer

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSeqAutoLayer(ptr)
```
# Properties
## LocalReference 
```lua
--- @type number
Read: cseqautolayer.LocalReference
Write: cseqautolayer.LocalReference = value
```
## LocalPose 
```lua
--- @type number
Read: cseqautolayer.LocalPose
Write: cseqautolayer.LocalPose = value
```
## Flags (Read-Only)
```lua
--- @type CSeqAutoLayerFlag
Read: cseqautolayer.Flags
```
## Start 
```lua
--- @type number
Read: cseqautolayer.Start
Write: cseqautolayer.Start = value
```
## Peak 
```lua
--- @type number
Read: cseqautolayer.Peak
Write: cseqautolayer.Peak = value
```
## Tail 
```lua
--- @type number
Read: cseqautolayer.Tail
Write: cseqautolayer.Tail = value
```
## End 
```lua
--- @type number
Read: cseqautolayer.End
Write: cseqautolayer.End = value
```
# Functions
## ToPtr
```lua
--- @return string
cseqautolayer:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqautolayer:IsValid()
```

:::