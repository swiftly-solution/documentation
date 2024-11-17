---
title: CAudioAnimTag
index: true
order: 2
category:
  - Guide
---

# CAudioAnimTag

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAudioAnimTag(ptr)
```
# Properties
## ClipName 
```lua
--- @type string
Read: caudioanimtag.ClipName
Write: caudioanimtag.ClipName = value
```
## AttachmentName 
```lua
--- @type string
Read: caudioanimtag.AttachmentName
Write: caudioanimtag.AttachmentName = value
```
## Volume 
```lua
--- @type number
Read: caudioanimtag.Volume
Write: caudioanimtag.Volume = value
```
## StopWhenTagEnds 
```lua
--- @type boolean
Read: caudioanimtag.StopWhenTagEnds
Write: caudioanimtag.StopWhenTagEnds = value
```
## StopWhenGraphEnds 
```lua
--- @type boolean
Read: caudioanimtag.StopWhenGraphEnds
Write: caudioanimtag.StopWhenGraphEnds = value
```
## PlayOnServer 
```lua
--- @type boolean
Read: caudioanimtag.PlayOnServer
Write: caudioanimtag.PlayOnServer = value
```
## PlayOnClient 
```lua
--- @type boolean
Read: caudioanimtag.PlayOnClient
Write: caudioanimtag.PlayOnClient = value
```
## Parent (Read-Only)
```lua
--- @type CAnimTagBase
Read: caudioanimtag.Parent
```
# Functions
## ToPtr
```lua
--- @return string
caudioanimtag:ToPtr()
```
## IsValid
```lua
--- @return bool
caudioanimtag:IsValid()
```

:::