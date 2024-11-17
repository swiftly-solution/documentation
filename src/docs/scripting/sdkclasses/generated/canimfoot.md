---
title: CAnimFoot
index: true
order: 2
category:
  - Guide
---

# CAnimFoot

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimFoot(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: canimfoot.Name
Write: canimfoot.Name = value
```
## BallOffset 
```lua
--- @type Vector
Read: canimfoot.BallOffset
Write: canimfoot.BallOffset = value
```
## HeelOffset 
```lua
--- @type Vector
Read: canimfoot.HeelOffset
Write: canimfoot.HeelOffset = value
```
## AnkleBoneIndex 
```lua
--- @type number
Read: canimfoot.AnkleBoneIndex
Write: canimfoot.AnkleBoneIndex = value
```
## ToeBoneIndex 
```lua
--- @type number
Read: canimfoot.ToeBoneIndex
Write: canimfoot.ToeBoneIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
canimfoot:ToPtr()
```
## IsValid
```lua
--- @return bool
canimfoot:IsValid()
```

:::