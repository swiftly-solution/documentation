---
title: CCredits
index: true
order: 2
category:
  - Guide
---

# CCredits

::: tabs
@tab Lua
# Constructor
```lua
CCredits(ptr --[[ string ]])
```
# Properties
## OnCreditsDone 
```lua
@type CEntityIOOutput
Read: ccredits.OnCreditsDone
Write: ccredits.OnCreditsDone = value
```
## RolledOutroCredits 
```lua
@type boolean
Read: ccredits.RolledOutroCredits
Write: ccredits.RolledOutroCredits = value
```
## LogoLength 
```lua
@type number
Read: ccredits.LogoLength
Write: ccredits.LogoLength = value
```
## Parent 
```lua
@type CPointEntity
Read: ccredits.Parent
Write: ccredits.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccredits:ToPtr()
```
## IsValid
```lua
@returns bool
ccredits:IsValid()
```

:::