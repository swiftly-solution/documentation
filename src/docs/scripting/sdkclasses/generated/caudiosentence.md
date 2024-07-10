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
## RunTimePhonemes 
```lua
@type table
Read: caudiosentence.RunTimePhonemes
Write: caudiosentence.RunTimePhonemes = value
```
## EmphasisSamples 
```lua
@type table
Read: caudiosentence.EmphasisSamples
Write: caudiosentence.EmphasisSamples = value
```
## MorphData 
```lua
@type CAudioMorphData
Read: caudiosentence.MorphData
Write: caudiosentence.MorphData = value
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