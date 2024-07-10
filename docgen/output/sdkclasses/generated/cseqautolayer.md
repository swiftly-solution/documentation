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
CSeqAutoLayer(ptr --[[ string ]])
```
# Properties
## LocalReference 
```lua
@type number
Read: cseqautolayer.LocalReference
Write: cseqautolayer.LocalReference = value
```
## LocalPose 
```lua
@type number
Read: cseqautolayer.LocalPose
Write: cseqautolayer.LocalPose = value
```
## Flags 
```lua
@type CSeqAutoLayerFlag
Read: cseqautolayer.Flags
Write: cseqautolayer.Flags = value
```
## Start 
```lua
@type number
Read: cseqautolayer.Start
Write: cseqautolayer.Start = value
```
## Peak 
```lua
@type number
Read: cseqautolayer.Peak
Write: cseqautolayer.Peak = value
```
## Tail 
```lua
@type number
Read: cseqautolayer.Tail
Write: cseqautolayer.Tail = value
```
## End 
```lua
@type number
Read: cseqautolayer.End
Write: cseqautolayer.End = value
```
# Functions
## ToPtr
```lua
@returns string
cseqautolayer:ToPtr()
```
## IsValid
```lua
@returns bool
cseqautolayer:IsValid()
```

:::