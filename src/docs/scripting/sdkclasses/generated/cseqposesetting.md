---
title: CSeqPoseSetting
index: true
order: 2
category:
  - Guide
---

# CSeqPoseSetting

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSeqPoseSetting(ptr)
```
# Properties
## Value 
```lua
--- @type number
Read: cseqposesetting.Value
Write: cseqposesetting.Value = value
```
## X 
```lua
--- @type boolean
Read: cseqposesetting.X
Write: cseqposesetting.X = value
```
## Y 
```lua
--- @type boolean
Read: cseqposesetting.Y
Write: cseqposesetting.Y = value
```
## Z 
```lua
--- @type boolean
Read: cseqposesetting.Z
Write: cseqposesetting.Z = value
```
## Type 
```lua
--- @type number
Read: cseqposesetting.Type
Write: cseqposesetting.Type = value
```
# Functions
## ToPtr
```lua
--- @return string
cseqposesetting:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqposesetting:IsValid()
```

:::