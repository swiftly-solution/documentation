---
title: CBaseIssue
index: true
order: 2
category:
  - Guide
---

# CBaseIssue

::: tabs
@tab Lua
# Constructor
```lua
CBaseIssue(ptr)
```
# Properties
## TypeString 
```lua
--- @type string
Read: cbaseissue.TypeString
Write: cbaseissue.TypeString = value
```
## DetailsString 
```lua
--- @type string
Read: cbaseissue.DetailsString
Write: cbaseissue.DetailsString = value
```
## NumYesVotes 
```lua
--- @type number
Read: cbaseissue.NumYesVotes
Write: cbaseissue.NumYesVotes = value
```
## NumNoVotes 
```lua
--- @type number
Read: cbaseissue.NumNoVotes
Write: cbaseissue.NumNoVotes = value
```
## NumPotentialVotes 
```lua
--- @type number
Read: cbaseissue.NumPotentialVotes
Write: cbaseissue.NumPotentialVotes = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseissue:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseissue:IsValid()
```

:::