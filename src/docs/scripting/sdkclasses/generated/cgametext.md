---
title: CGameText
index: true
order: 2
category:
  - Guide
---

# CGameText

::: tabs
@tab Lua
# Constructor
```lua
CGameText(ptr --[[ string ]])
```
# Properties
## Message 
```lua
@type string
Read: cgametext.Message
Write: cgametext.Message = value
```
## TextParms 
```lua
@type hudtextparms_t
Read: cgametext.TextParms
Write: cgametext.TextParms = value
```
## Parent 
```lua
@type CRulePointEntity
Read: cgametext.Parent
Write: cgametext.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cgametext:ToPtr()
```
## IsValid
```lua
@returns bool
cgametext:IsValid()
```

:::