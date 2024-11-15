---
title: FollowAttachmentSettings_t
index: true
order: 2
category:
  - Guide
---

# FollowAttachmentSettings_t

::: tabs
@tab Lua
# Constructor
```lua
FollowAttachmentSettings_t(ptr)
```
# Properties
## Attachment (Read-Only)
```lua
--- @type CAnimAttachment
Read: followattachmentsettings_t.Attachment
```
## BoneIndex 
```lua
--- @type number
Read: followattachmentsettings_t.BoneIndex
Write: followattachmentsettings_t.BoneIndex = value
```
## MatchTranslation 
```lua
--- @type boolean
Read: followattachmentsettings_t.MatchTranslation
Write: followattachmentsettings_t.MatchTranslation = value
```
## MatchRotation 
```lua
--- @type boolean
Read: followattachmentsettings_t.MatchRotation
Write: followattachmentsettings_t.MatchRotation = value
```
# Functions
## ToPtr
```lua
@returns string
followattachmentsettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
followattachmentsettings_t:IsValid()
```

:::