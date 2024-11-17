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
--- @param ptr string
ResponseParams(ptr)
```
# Properties
## Odds 
```lua
--- @type number
Read: responseparams.Odds
Write: responseparams.Odds = value
```
## Flags 
```lua
--- @type number
Read: responseparams.Flags
Write: responseparams.Flags = value
```
## Followup (Read-Only)
```lua
--- @type ResponseFollowup
Read: responseparams.Followup
```
# Functions
## ToPtr
```lua
--- @return string
responseparams:ToPtr()
```
## IsValid
```lua
--- @return bool
responseparams:IsValid()
```

:::