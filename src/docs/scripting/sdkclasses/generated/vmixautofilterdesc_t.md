---
title: VMixAutoFilterDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixAutoFilterDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixAutoFilterDesc_t(ptr --[[ string ]])
```
# Properties
## EnvelopeAmount 
```lua
@type number
Read: vmixautofilterdesc_t.EnvelopeAmount
Write: vmixautofilterdesc_t.EnvelopeAmount = value
```
## AttackTimeMS 
```lua
@type number
Read: vmixautofilterdesc_t.AttackTimeMS
Write: vmixautofilterdesc_t.AttackTimeMS = value
```
## ReleaseTimeMS 
```lua
@type number
Read: vmixautofilterdesc_t.ReleaseTimeMS
Write: vmixautofilterdesc_t.ReleaseTimeMS = value
```
## Filter 
```lua
@type VMixFilterDesc_t
Read: vmixautofilterdesc_t.Filter
Write: vmixautofilterdesc_t.Filter = value
```
## LFOAmount 
```lua
@type number
Read: vmixautofilterdesc_t.LFOAmount
Write: vmixautofilterdesc_t.LFOAmount = value
```
## LFORate 
```lua
@type number
Read: vmixautofilterdesc_t.LFORate
Write: vmixautofilterdesc_t.LFORate = value
```
## Phase 
```lua
@type number
Read: vmixautofilterdesc_t.Phase
Write: vmixautofilterdesc_t.Phase = value
```
## LFOShape 
```lua
@type number
Read: vmixautofilterdesc_t.LFOShape
Write: vmixautofilterdesc_t.LFOShape = value
```
# Functions
## ToPtr
```lua
@returns string
vmixautofilterdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixautofilterdesc_t:IsValid()
```

:::