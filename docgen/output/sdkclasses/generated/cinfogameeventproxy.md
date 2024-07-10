---
title: CInfoGameEventProxy
index: true
order: 2
category:
  - Guide
---

# CInfoGameEventProxy

::: tabs
@tab Lua
# Constructor
```lua
CInfoGameEventProxy(ptr --[[ string ]])
```
# Properties
## EventName 
```lua
@type string
Read: cinfogameeventproxy.EventName
Write: cinfogameeventproxy.EventName = value
```
## Range 
```lua
@type number
Read: cinfogameeventproxy.Range
Write: cinfogameeventproxy.Range = value
```
## Parent 
```lua
@type CPointEntity
Read: cinfogameeventproxy.Parent
Write: cinfogameeventproxy.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cinfogameeventproxy:ToPtr()
```
## IsValid
```lua
@returns bool
cinfogameeventproxy:IsValid()
```

:::