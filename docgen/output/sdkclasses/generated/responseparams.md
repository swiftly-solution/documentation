---
title: ResponseParams
index: true
order: 2
category:
  - Guide
---

# ResponseParams

::: tabs
@tab Lua
# Constructor
```lua
ResponseParams(ptr --[[ string ]])
```
# Properties
## Odds 
```lua
@type number
Read: responseparams.Odds
Write: responseparams.Odds = value
```
## Flags 
```lua
@type number
Read: responseparams.Flags
Write: responseparams.Flags = value
```
## Followup (Read-Only)
```lua
@type ResponseFollowup
Read: responseparams.Followup
```
# Functions
## ToPtr
```lua
@returns string
responseparams:ToPtr()
```
## IsValid
```lua
@returns bool
responseparams:IsValid()
```

:::