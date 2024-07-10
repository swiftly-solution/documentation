---
title: CAI_ExpresserWithFollowup
index: true
order: 2
category:
  - Guide
---

# CAI_ExpresserWithFollowup

::: tabs
@tab Lua
# Constructor
```lua
CAI_ExpresserWithFollowup(ptr --[[ string ]])
```
# Properties
## PostponedFollowup (Read-Only)
```lua
@type ResponseFollowup
Read: cai_expresserwithfollowup.PostponedFollowup
```
## Parent 
```lua
@type CAI_Expresser
Read: cai_expresserwithfollowup.Parent
Write: cai_expresserwithfollowup.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cai_expresserwithfollowup:ToPtr()
```
## IsValid
```lua
@returns bool
cai_expresserwithfollowup:IsValid()
```

:::