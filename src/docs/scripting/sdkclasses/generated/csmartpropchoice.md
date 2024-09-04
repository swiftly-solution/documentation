---
title: CSmartPropChoice
index: true
order: 2
category:
  - Guide
---

# CSmartPropChoice

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropChoice(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: csmartpropchoice.Name
Write: csmartpropchoice.Name = value
```
## DefaultOption 
```lua
@type string
Read: csmartpropchoice.DefaultOption
Write: csmartpropchoice.DefaultOption = value
```
## Options (Read-Only)
```lua
@type table
Read: csmartpropchoice.Options
```
## Parent (Read-Only)
```lua
@type CSmartPropParameter
Read: csmartpropchoice.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropchoice:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropchoice:IsValid()
```

:::