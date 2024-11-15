---
title: SequenceHistory_t
index: true
order: 2
category:
  - Guide
---

# SequenceHistory_t

::: tabs
@tab Lua
# Constructor
```lua
SequenceHistory_t(ptr)
```
# Properties
## Sequence 
```lua
--- @type number
Read: sequencehistory_t.Sequence
Write: sequencehistory_t.Sequence = value
```
## SeqStartTime 
```lua
--- @type number
Read: sequencehistory_t.SeqStartTime
Write: sequencehistory_t.SeqStartTime = value
```
## SeqFixedCycle 
```lua
--- @type number
Read: sequencehistory_t.SeqFixedCycle
Write: sequencehistory_t.SeqFixedCycle = value
```
## SeqLoopMode 
```lua
--- @type number
Read: sequencehistory_t.SeqLoopMode
Write: sequencehistory_t.SeqLoopMode = value
```
## PlaybackRate 
```lua
--- @type number
Read: sequencehistory_t.PlaybackRate
Write: sequencehistory_t.PlaybackRate = value
```
## CyclesPerSecond 
```lua
--- @type number
Read: sequencehistory_t.CyclesPerSecond
Write: sequencehistory_t.CyclesPerSecond = value
```
# Functions
## ToPtr
```lua
@returns string
sequencehistory_t:ToPtr()
```
## IsValid
```lua
@returns bool
sequencehistory_t:IsValid()
```

:::