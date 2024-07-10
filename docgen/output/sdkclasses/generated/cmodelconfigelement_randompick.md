---
title: CModelConfigElement_RandomPick
index: true
order: 2
category:
  - Guide
---

# CModelConfigElement_RandomPick

::: tabs
@tab Lua
# Constructor
```lua
CModelConfigElement_RandomPick(ptr --[[ string ]])
```
# Properties
## Choices 
```lua
@type table
Read: cmodelconfigelement_randompick.Choices
Write: cmodelconfigelement_randompick.Choices = value
```
## ChoiceWeights 
```lua
@type table
Read: cmodelconfigelement_randompick.ChoiceWeights
Write: cmodelconfigelement_randompick.ChoiceWeights = value
```
## Parent 
```lua
@type CModelConfigElement
Read: cmodelconfigelement_randompick.Parent
Write: cmodelconfigelement_randompick.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cmodelconfigelement_randompick:ToPtr()
```
## IsValid
```lua
@returns bool
cmodelconfigelement_randompick:IsValid()
```

:::