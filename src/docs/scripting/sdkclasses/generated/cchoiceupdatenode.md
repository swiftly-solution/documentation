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
## Children (Read-Only)
```lua
@type table
Read: cchoiceupdatenode.Children
```
## Weights (Read-Only)
```lua
@type table
Read: cchoiceupdatenode.Weights
```
## BlendTimes (Read-Only)
```lua
@type table
Read: cchoiceupdatenode.BlendTimes
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
## Parent (Read-Only)
```lua
@type CAnimUpdateNodeBase
Read: cchoiceupdatenode.Parent
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