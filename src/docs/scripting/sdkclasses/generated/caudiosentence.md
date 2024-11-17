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
--- @param ptr string
CAudioSentence(ptr)
```
# Properties
## ShouldVoiceDuck 
```lua
--- @type boolean
Read: caudiosentence.ShouldVoiceDuck
Write: caudiosentence.ShouldVoiceDuck = value
```
## RunTimePhonemes (Read-Only)
```lua
--- @type table
Read: caudiosentence.RunTimePhonemes
```
## EmphasisSamples (Read-Only)
```lua
--- @type table
Read: caudiosentence.EmphasisSamples
```
## MorphData (Read-Only)
```lua
--- @type CAudioMorphData
Read: caudiosentence.MorphData
```
# Functions
## ToPtr
```lua
--- @return string
caudiosentence:ToPtr()
```
## IsValid
```lua
--- @return bool
caudiosentence:IsValid()
```

:::