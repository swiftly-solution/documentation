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
--- @param ptr string
CompositeMaterialEditorPoint_t(ptr)
```
# Properties
## SequenceIndex 
```lua
--- @type number
Read: compositematerialeditorpoint_t.SequenceIndex
Write: compositematerialeditorpoint_t.SequenceIndex = value
```
## Cycle 
```lua
--- @type number
Read: compositematerialeditorpoint_t.Cycle
Write: compositematerialeditorpoint_t.Cycle = value
```
## EnableChildModel 
```lua
--- @type boolean
Read: compositematerialeditorpoint_t.EnableChildModel
Write: compositematerialeditorpoint_t.EnableChildModel = value
```
## CompositeMaterialAssemblyProcedures (Read-Only)
```lua
--- @type table
Read: compositematerialeditorpoint_t.CompositeMaterialAssemblyProcedures
```
## CompositeMaterials (Read-Only)
```lua
--- @type table
Read: compositematerialeditorpoint_t.CompositeMaterials
```
# Functions
## ToPtr
```lua
--- @return string
compositematerialeditorpoint_t:ToPtr()
```
## IsValid
```lua
--- @return bool
compositematerialeditorpoint_t:IsValid()
```

:::