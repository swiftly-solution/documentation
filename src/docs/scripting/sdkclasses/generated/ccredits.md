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
--- @param ptr string
CCredits(ptr)
```
# Properties
## OnCreditsDone (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ccredits.OnCreditsDone
```
## RolledOutroCredits 
```lua
--- @type boolean
Read: ccredits.RolledOutroCredits
Write: ccredits.RolledOutroCredits = value
```
## LogoLength 
```lua
--- @type number
Read: ccredits.LogoLength
Write: ccredits.LogoLength = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: ccredits.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccredits:ToPtr()
```
## IsValid
```lua
--- @return bool
ccredits:IsValid()
```

:::