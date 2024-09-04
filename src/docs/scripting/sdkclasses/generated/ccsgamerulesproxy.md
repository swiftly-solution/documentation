---
title: CCSGameRulesProxy
index: true
order: 2
category:
  - Guide
---

# CCSGameRulesProxy

::: tabs
@tab Lua
# Constructor
```lua
CCSGameRulesProxy(ptr --[[ string ]])
```
# Properties
## GameRules 
```lua
@type CCSGameRules
Read: ccsgamerulesproxy.GameRules
Write: ccsgamerulesproxy.GameRules = value
```
## Parent (Read-Only)
```lua
@type CGameRulesProxy
Read: ccsgamerulesproxy.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsgamerulesproxy:ToPtr()
```
## IsValid
```lua
@returns bool
ccsgamerulesproxy:IsValid()
```

:::