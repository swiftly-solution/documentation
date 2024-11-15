---
title: SequenceWeightedList_t
index: true
order: 2
category:
  - Guide
---

# SequenceWeightedList_t

::: tabs
@tab Lua
# Constructor
```lua
SequenceWeightedList_t(ptr)
```
# Properties
## Sequence 
```lua
--- @type number
Read: sequenceweightedlist_t.Sequence
Write: sequenceweightedlist_t.Sequence = value
```
## RelativeWeight 
```lua
--- @type number
Read: sequenceweightedlist_t.RelativeWeight
Write: sequenceweightedlist_t.RelativeWeight = value
```
# Functions
## ToPtr
```lua
@returns string
sequenceweightedlist_t:ToPtr()
```
## IsValid
```lua
@returns bool
sequenceweightedlist_t:IsValid()
```

:::