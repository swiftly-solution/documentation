---
title: CSosSoundEventGroupSchema
index: true
order: 2
category:
  - Guide
---

# CSosSoundEventGroupSchema

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSosSoundEventGroupSchema(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: csossoundeventgroupschema.Name
Write: csossoundeventgroupschema.Name = value
```
## Type 
```lua
--- @type number
Read: csossoundeventgroupschema.Type
Write: csossoundeventgroupschema.Type = value
```
## IsBlocking 
```lua
--- @type boolean
Read: csossoundeventgroupschema.IsBlocking
Write: csossoundeventgroupschema.IsBlocking = value
```
## BlockMaxCount 
```lua
--- @type number
Read: csossoundeventgroupschema.BlockMaxCount
Write: csossoundeventgroupschema.BlockMaxCount = value
```
## InvertMatch 
```lua
--- @type boolean
Read: csossoundeventgroupschema.InvertMatch
Write: csossoundeventgroupschema.InvertMatch = value
```
## MatchPattern (Read-Only)
```lua
--- @type CSosGroupMatchPattern
Read: csossoundeventgroupschema.MatchPattern
```
## BranchPattern (Read-Only)
```lua
--- @type CSosGroupBranchPattern
Read: csossoundeventgroupschema.BranchPattern
```
## LifeSpanTime 
```lua
--- @type number
Read: csossoundeventgroupschema.LifeSpanTime
Write: csossoundeventgroupschema.LifeSpanTime = value
```
## Actions (Read-Only)
```lua
--- @type table
Read: csossoundeventgroupschema.Actions
```
# Functions
## ToPtr
```lua
--- @return string
csossoundeventgroupschema:ToPtr()
```
## IsValid
```lua
--- @return bool
csossoundeventgroupschema:IsValid()
```

:::