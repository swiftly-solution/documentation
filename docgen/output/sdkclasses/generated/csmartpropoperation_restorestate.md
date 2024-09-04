---
title: CSmartPropOperation_RestoreState
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_RestoreState

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_RestoreState(ptr --[[ string ]])
```
# Properties
## StateName 
```lua
@type CSmartPropAttributeStateName
Read: csmartpropoperation_restorestate.StateName
Write: csmartpropoperation_restorestate.StateName = value
```
## DiscardIfUknown 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_restorestate.DiscardIfUknown
Write: csmartpropoperation_restorestate.DiscardIfUknown = value
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation
Read: csmartpropoperation_restorestate.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_restorestate:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_restorestate:IsValid()
```

:::