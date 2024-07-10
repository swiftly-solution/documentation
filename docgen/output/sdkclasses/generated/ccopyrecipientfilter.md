---
title: CCopyRecipientFilter
index: true
order: 2
category:
  - Guide
---

# CCopyRecipientFilter

::: tabs
@tab Lua
# Constructor
```lua
CCopyRecipientFilter(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: ccopyrecipientfilter.Flags
Write: ccopyrecipientfilter.Flags = value
```
## Recipients 
```lua
@type table
Read: ccopyrecipientfilter.Recipients
Write: ccopyrecipientfilter.Recipients = value
```
# Functions
## ToPtr
```lua
@returns string
ccopyrecipientfilter:ToPtr()
```
## IsValid
```lua
@returns bool
ccopyrecipientfilter:IsValid()
```

:::