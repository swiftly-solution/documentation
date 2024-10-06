---
title: CResponseQueue::CDeferredResponse
index: true
order: 2
category:
  - Guide
---

# CResponseQueue::CDeferredResponse

::: tabs
@tab Lua
# Constructor
```lua
CResponseQueue::CDeferredResponse(ptr --[[ string ]])
```
# Properties
## Contexts (Read-Only)
```lua
@type CResponseCriteriaSet
Read: cresponsequeue::cdeferredresponse.Contexts
```
## DispatchTime 
```lua
@type number
Read: cresponsequeue::cdeferredresponse.DispatchTime
Write: cresponsequeue::cdeferredresponse.DispatchTime = value
```
## Issuer (Read-Only)
```lua
@type CBaseEntity
Read: cresponsequeue::cdeferredresponse.Issuer
```
## ResponseValid 
```lua
@type boolean
Read: cresponsequeue::cdeferredresponse.ResponseValid
Write: cresponsequeue::cdeferredresponse.ResponseValid = value
```
# Functions
## ToPtr
```lua
@returns string
cresponsequeue::cdeferredresponse:ToPtr()
```
## IsValid
```lua
@returns bool
cresponsequeue::cdeferredresponse:IsValid()
```

:::