---
title: CSeqPoseParamDesc
index: true
order: 2
category:
  - Guide
---

# CSeqPoseParamDesc

::: tabs
@tab Lua
# Constructor
```lua
CSeqPoseParamDesc(ptr)
```
# Properties
## Start 
```lua
--- @type number
Read: cseqposeparamdesc.Start
Write: cseqposeparamdesc.Start = value
```
## End 
```lua
--- @type number
Read: cseqposeparamdesc.End
Write: cseqposeparamdesc.End = value
```
## Loop 
```lua
--- @type number
Read: cseqposeparamdesc.Loop
Write: cseqposeparamdesc.Loop = value
```
## Looping 
```lua
--- @type boolean
Read: cseqposeparamdesc.Looping
Write: cseqposeparamdesc.Looping = value
```
# Functions
## ToPtr
```lua
@returns string
cseqposeparamdesc:ToPtr()
```
## IsValid
```lua
@returns bool
cseqposeparamdesc:IsValid()
```

:::