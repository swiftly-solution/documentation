---
title: CAudioSentence
index: true
order: 2
category:
  - Guide
---

# CAudioSentence

::: tabs
@tab Lua
# Constructor
```lua
CAudioSentence(ptr --[[ string ]])
```
# Properties
## ShouldVoiceDuck 
```lua
@type boolean
Read: caudiosentence.ShouldVoiceDuck
Write: caudiosentence.ShouldVoiceDuck = value
```
## RunTimePhonemes (Read-Only)
```lua
@type table
Read: caudiosentence.RunTimePhonemes
```
## EmphasisSamples (Read-Only)
```lua
@type table
Read: caudiosentence.EmphasisSamples
```
## MorphData (Read-Only)
```lua
@type CAudioMorphData
Read: caudiosentence.MorphData
```
# Functions
## ToPtr
```lua
@returns string
caudiosentence:ToPtr()
```
## IsValid
```lua
@returns bool
caudiosentence:IsValid()
```

:::