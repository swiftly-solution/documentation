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
--- @param ptr string
CInfoGameEventProxy(ptr)
```
# Properties
## EventName 
```lua
--- @type string
Read: cinfogameeventproxy.EventName
Write: cinfogameeventproxy.EventName = value
```
## Range 
```lua
--- @type number
Read: cinfogameeventproxy.Range
Write: cinfogameeventproxy.Range = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cinfogameeventproxy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cinfogameeventproxy:ToPtr()
```
## IsValid
```lua
--- @return bool
cinfogameeventproxy:IsValid()
```

:::