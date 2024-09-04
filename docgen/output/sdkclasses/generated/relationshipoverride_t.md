---
title: RelationshipOverride_t
index: true
order: 2
category:
  - Guide
---

# RelationshipOverride_t

::: tabs
@tab Lua
# Constructor
```lua
RelationshipOverride_t(ptr --[[ string ]])
```
# Properties
## Entity (Read-Only)
```lua
@type CBaseEntity
Read: relationshipoverride_t.Entity
```
## ClassType 
```lua
@type number
Read: relationshipoverride_t.ClassType
Write: relationshipoverride_t.ClassType = value
```
## Parent (Read-Only)
```lua
@type Relationship_t
Read: relationshipoverride_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
relationshipoverride_t:ToPtr()
```
## IsValid
```lua
@returns bool
relationshipoverride_t:IsValid()
```

:::