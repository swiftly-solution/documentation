---
title: CChoiceUpdateNode
index: true
order: 2
category:
  - Guide
---

# CChoiceUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CChoiceUpdateNode(ptr --[[ string ]])
```
# Properties
## Children 
```lua
@type table
Read: cchoiceupdatenode.Children
Write: cchoiceupdatenode.Children = value
```
## Weights 
```lua
@type table
Read: cchoiceupdatenode.Weights
Write: cchoiceupdatenode.Weights = value
```
## BlendTimes 
```lua
@type table
Read: cchoiceupdatenode.BlendTimes
Write: cchoiceupdatenode.BlendTimes = value
```
## ChoiceMethod 
```lua
@type number
Read: cchoiceupdatenode.ChoiceMethod
Write: cchoiceupdatenode.ChoiceMethod = value
```
## ChoiceChangeMethod 
```lua
@type number
Read: cchoiceupdatenode.ChoiceChangeMethod
Write: cchoiceupdatenode.ChoiceChangeMethod = value
```
## BlendMethod 
```lua
@type number
Read: cchoiceupdatenode.BlendMethod
Write: cchoiceupdatenode.BlendMethod = value
```
## BlendTime 
```lua
@type number
Read: cchoiceupdatenode.BlendTime
Write: cchoiceupdatenode.BlendTime = value
```
## CrossFade 
```lua
@type boolean
Read: cchoiceupdatenode.CrossFade
Write: cchoiceupdatenode.CrossFade = value
```
## ResetChosen 
```lua
@type boolean
Read: cchoiceupdatenode.ResetChosen
Write: cchoiceupdatenode.ResetChosen = value
```
## DontResetSameSelection 
```lua
@type boolean
Read: cchoiceupdatenode.DontResetSameSelection
Write: cchoiceupdatenode.DontResetSameSelection = value
```
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cchoiceupdatenode.Parent
Write: cchoiceupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cchoiceupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cchoiceupdatenode:IsValid()
```

:::