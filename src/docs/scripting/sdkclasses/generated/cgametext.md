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
## TextParms (Read-Only)
```lua
@type hudtextparms_t
Read: cgametext.TextParms
```
## Parent (Read-Only)
```lua
@type CRulePointEntity
Read: cgametext.Parent
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