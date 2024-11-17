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
--- @param ptr string
CCopyRecipientFilter(ptr)
```
# Properties
## Flags 
```lua
--- @type number
Read: ccopyrecipientfilter.Flags
Write: ccopyrecipientfilter.Flags = value
```
## Recipients (Read-Only)
```lua
--- @type table
Read: ccopyrecipientfilter.Recipients
```
# Functions
## ToPtr
```lua
--- @return string
ccopyrecipientfilter:ToPtr()
```
## IsValid
```lua
--- @return bool
ccopyrecipientfilter:IsValid()
```

:::