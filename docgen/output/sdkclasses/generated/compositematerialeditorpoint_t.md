---
title: CompositeMaterialEditorPoint_t
index: true
order: 2
category:
  - Guide
---

# CompositeMaterialEditorPoint_t

::: tabs
@tab Lua
# Constructor
```lua
CompositeMaterialEditorPoint_t(ptr --[[ string ]])
```
# Properties
## SequenceIndex 
```lua
@type number
Read: compositematerialeditorpoint_t.SequenceIndex
Write: compositematerialeditorpoint_t.SequenceIndex = value
```
## Cycle 
```lua
@type number
Read: compositematerialeditorpoint_t.Cycle
Write: compositematerialeditorpoint_t.Cycle = value
```
## EnableChildModel 
```lua
@type boolean
Read: compositematerialeditorpoint_t.EnableChildModel
Write: compositematerialeditorpoint_t.EnableChildModel = value
```
## CompositeMaterialAssemblyProcedures 
```lua
@type table
Read: compositematerialeditorpoint_t.CompositeMaterialAssemblyProcedures
Write: compositematerialeditorpoint_t.CompositeMaterialAssemblyProcedures = value
```
## CompositeMaterials 
```lua
@type table
Read: compositematerialeditorpoint_t.CompositeMaterials
Write: compositematerialeditorpoint_t.CompositeMaterials = value
```
# Functions
## ToPtr
```lua
@returns string
compositematerialeditorpoint_t:ToPtr()
```
## IsValid
```lua
@returns bool
compositematerialeditorpoint_t:IsValid()
```

:::