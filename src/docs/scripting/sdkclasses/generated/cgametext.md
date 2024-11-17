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
--- @param ptr string
CGameText(ptr)
```
# Properties
## Message 
```lua
--- @type string
Read: cgametext.Message
Write: cgametext.Message = value
```
## TextParms (Read-Only)
```lua
--- @type hudtextparms_t
Read: cgametext.TextParms
```
## Parent (Read-Only)
```lua
--- @type CRulePointEntity
Read: cgametext.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cgametext:ToPtr()
```
## IsValid
```lua
--- @return bool
cgametext:IsValid()
```

:::