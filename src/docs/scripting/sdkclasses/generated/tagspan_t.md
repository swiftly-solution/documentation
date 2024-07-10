---
title: TagSpan_t
index: true
order: 2
category:
  - Guide
---

# TagSpan_t

::: tabs
@tab Lua
# Constructor
```lua
TagSpan_t(ptr --[[ string ]])
```
# Properties
## TagIndex 
```lua
@type number
Read: tagspan_t.TagIndex
Write: tagspan_t.TagIndex = value
```
## StartCycle 
```lua
@type number
Read: tagspan_t.StartCycle
Write: tagspan_t.StartCycle = value
```
## EndCycle 
```lua
@type number
Read: tagspan_t.EndCycle
Write: tagspan_t.EndCycle = value
```
# Functions
## ToPtr
```lua
@returns string
tagspan_t:ToPtr()
```
## IsValid
```lua
@returns bool
tagspan_t:IsValid()
```

:::