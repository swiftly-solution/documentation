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
## GameRules (Read-Only)
```lua
@type CCSGameRules
Read: ccsgamerulesproxy.GameRules
```
## Parent 
```lua
@type CGameRulesProxy
Read: ccsgamerulesproxy.Parent
Write: ccsgamerulesproxy.Parent = value
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