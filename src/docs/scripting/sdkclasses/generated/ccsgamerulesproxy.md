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
--- @param ptr string
CCSGameRulesProxy(ptr)
```
# Properties
## GameRules (Read-Only)
```lua
--- @type CCSGameRules
Read: ccsgamerulesproxy.GameRules
```
## Parent (Read-Only)
```lua
--- @type CGameRulesProxy
Read: ccsgamerulesproxy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsgamerulesproxy:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsgamerulesproxy:IsValid()
```

:::