---
title: CPlayer_ObserverServices
index: true
order: 2
category:
  - Guide
---

# CPlayer_ObserverServices

::: tabs
@tab Lua
# Constructor
```lua
CPlayer_ObserverServices(ptr)
```
# Properties
## ObserverMode 
```lua
--- @type number
Read: cplayer_observerservices.ObserverMode
Write: cplayer_observerservices.ObserverMode = value
```
## ObserverTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: cplayer_observerservices.ObserverTarget
```
## ObserverLastMode 
```lua
--- @type number
Read: cplayer_observerservices.ObserverLastMode
Write: cplayer_observerservices.ObserverLastMode = value
```
## ForcedObserverMode 
```lua
--- @type boolean
Read: cplayer_observerservices.ForcedObserverMode
Write: cplayer_observerservices.ForcedObserverMode = value
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: cplayer_observerservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
cplayer_observerservices:ToPtr()
```
## IsValid
```lua
@returns bool
cplayer_observerservices:IsValid()
```

:::