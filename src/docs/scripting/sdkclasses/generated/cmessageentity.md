---
title: CMessageEntity
index: true
order: 2
category:
  - Guide
---

# CMessageEntity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMessageEntity(ptr)
```
# Properties
## Radius 
```lua
--- @type number
Read: cmessageentity.Radius
Write: cmessageentity.Radius = value
```
## MessageText 
```lua
--- @type string
Read: cmessageentity.MessageText
Write: cmessageentity.MessageText = value
```
## DrawText 
```lua
--- @type boolean
Read: cmessageentity.DrawText
Write: cmessageentity.DrawText = value
```
## DeveloperOnly 
```lua
--- @type boolean
Read: cmessageentity.DeveloperOnly
Write: cmessageentity.DeveloperOnly = value
```
## Enabled 
```lua
--- @type boolean
Read: cmessageentity.Enabled
Write: cmessageentity.Enabled = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cmessageentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmessageentity:ToPtr()
```
## IsValid
```lua
--- @return bool
cmessageentity:IsValid()
```

:::