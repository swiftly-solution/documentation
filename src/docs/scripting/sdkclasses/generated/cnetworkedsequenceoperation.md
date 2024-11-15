---
title: CNetworkedSequenceOperation
index: true
order: 2
category:
  - Guide
---

# CNetworkedSequenceOperation

::: tabs
@tab Lua
# Constructor
```lua
CNetworkedSequenceOperation(ptr)
```
# Properties
## Sequence 
```lua
--- @type number
Read: cnetworkedsequenceoperation.Sequence
Write: cnetworkedsequenceoperation.Sequence = value
```
## PrevCycle 
```lua
--- @type number
Read: cnetworkedsequenceoperation.PrevCycle
Write: cnetworkedsequenceoperation.PrevCycle = value
```
## Cycle 
```lua
--- @type number
Read: cnetworkedsequenceoperation.Cycle
Write: cnetworkedsequenceoperation.Cycle = value
```
## Weight 
```lua
--- @type number
Read: cnetworkedsequenceoperation.Weight
Write: cnetworkedsequenceoperation.Weight = value
```
## SequenceChangeNetworked 
```lua
--- @type boolean
Read: cnetworkedsequenceoperation.SequenceChangeNetworked
Write: cnetworkedsequenceoperation.SequenceChangeNetworked = value
```
## Discontinuity 
```lua
--- @type boolean
Read: cnetworkedsequenceoperation.Discontinuity
Write: cnetworkedsequenceoperation.Discontinuity = value
```
## PrevCycleFromDiscontinuity 
```lua
--- @type number
Read: cnetworkedsequenceoperation.PrevCycleFromDiscontinuity
Write: cnetworkedsequenceoperation.PrevCycleFromDiscontinuity = value
```
## PrevCycleForAnimEventDetection 
```lua
--- @type number
Read: cnetworkedsequenceoperation.PrevCycleForAnimEventDetection
Write: cnetworkedsequenceoperation.PrevCycleForAnimEventDetection = value
```
# Functions
## ToPtr
```lua
@returns string
cnetworkedsequenceoperation:ToPtr()
```
## IsValid
```lua
@returns bool
cnetworkedsequenceoperation:IsValid()
```

:::