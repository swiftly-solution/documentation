---
title: CEnvSpark
index: true
order: 2
category:
  - Guide
---

# CEnvSpark

::: tabs
@tab Lua
# Constructor
```lua
CEnvSpark(ptr --[[ string ]])
```
# Properties
## Delay 
```lua
@type number
Read: cenvspark.Delay
Write: cenvspark.Delay = value
```
## Magnitude 
```lua
@type number
Read: cenvspark.Magnitude
Write: cenvspark.Magnitude = value
```
## TrailLength 
```lua
@type number
Read: cenvspark.TrailLength
Write: cenvspark.TrailLength = value
```
## Type 
```lua
@type number
Read: cenvspark.Type
Write: cenvspark.Type = value
```
## OnSpark (Read-Only)
```lua
@type CEntityIOOutput
Read: cenvspark.OnSpark
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cenvspark.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvspark:ToPtr()
```
## IsValid
```lua
@returns bool
cenvspark:IsValid()
```

:::