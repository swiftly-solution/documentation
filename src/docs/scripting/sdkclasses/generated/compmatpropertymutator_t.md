---
title: CompMatPropertyMutator_t
index: true
order: 2
category:
  - Guide
---

# CompMatPropertyMutator_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CompMatPropertyMutator_t(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: compmatpropertymutator_t.Enabled
Write: compmatpropertymutator_t.Enabled = value
```
## MutatorCommandType 
```lua
--- @type number
Read: compmatpropertymutator_t.MutatorCommandType
Write: compmatpropertymutator_t.MutatorCommandType = value
```
## StrInitWith_Container 
```lua
--- @type string
Read: compmatpropertymutator_t.StrInitWith_Container
Write: compmatpropertymutator_t.StrInitWith_Container = value
```
## StrCopyProperty_InputContainerSrc 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyProperty_InputContainerSrc
Write: compmatpropertymutator_t.StrCopyProperty_InputContainerSrc = value
```
## StrCopyProperty_InputContainerProperty 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyProperty_InputContainerProperty
Write: compmatpropertymutator_t.StrCopyProperty_InputContainerProperty = value
```
## StrCopyProperty_TargetProperty 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyProperty_TargetProperty
Write: compmatpropertymutator_t.StrCopyProperty_TargetProperty = value
```
## StrRandomRollInputVars_SeedInputVar 
```lua
--- @type string
Read: compmatpropertymutator_t.StrRandomRollInputVars_SeedInputVar
Write: compmatpropertymutator_t.StrRandomRollInputVars_SeedInputVar = value
```
## RandomRollInputVars_InputVarsToRoll (Read-Only)
```lua
--- @type table
Read: compmatpropertymutator_t.RandomRollInputVars_InputVarsToRoll
```
## StrCopyMatchingKeys_InputContainerSrc 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyMatchingKeys_InputContainerSrc
Write: compmatpropertymutator_t.StrCopyMatchingKeys_InputContainerSrc = value
```
## StrCopyKeysWithSuffix_InputContainerSrc 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyKeysWithSuffix_InputContainerSrc
Write: compmatpropertymutator_t.StrCopyKeysWithSuffix_InputContainerSrc = value
```
## StrCopyKeysWithSuffix_FindSuffix 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyKeysWithSuffix_FindSuffix
Write: compmatpropertymutator_t.StrCopyKeysWithSuffix_FindSuffix = value
```
## StrCopyKeysWithSuffix_ReplaceSuffix 
```lua
--- @type string
Read: compmatpropertymutator_t.StrCopyKeysWithSuffix_ReplaceSuffix
Write: compmatpropertymutator_t.StrCopyKeysWithSuffix_ReplaceSuffix = value
```
## SetValue_Value (Read-Only)
```lua
--- @type CompositeMaterialInputLooseVariable_t
Read: compmatpropertymutator_t.SetValue_Value
```
## StrGenerateTexture_TargetParam 
```lua
--- @type string
Read: compmatpropertymutator_t.StrGenerateTexture_TargetParam
Write: compmatpropertymutator_t.StrGenerateTexture_TargetParam = value
```
## StrGenerateTexture_InitialContainer 
```lua
--- @type string
Read: compmatpropertymutator_t.StrGenerateTexture_InitialContainer
Write: compmatpropertymutator_t.StrGenerateTexture_InitialContainer = value
```
## Resolution 
```lua
--- @type number
Read: compmatpropertymutator_t.Resolution
Write: compmatpropertymutator_t.Resolution = value
```
## IsScratchTarget 
```lua
--- @type boolean
Read: compmatpropertymutator_t.IsScratchTarget
Write: compmatpropertymutator_t.IsScratchTarget = value
```
## SplatDebugInfo 
```lua
--- @type boolean
Read: compmatpropertymutator_t.SplatDebugInfo
Write: compmatpropertymutator_t.SplatDebugInfo = value
```
## CaptureInRenderDoc 
```lua
--- @type boolean
Read: compmatpropertymutator_t.CaptureInRenderDoc
Write: compmatpropertymutator_t.CaptureInRenderDoc = value
```
## TexGenInstructions (Read-Only)
```lua
--- @type table
Read: compmatpropertymutator_t.TexGenInstructions
```
## ConditionalMutators (Read-Only)
```lua
--- @type table
Read: compmatpropertymutator_t.ConditionalMutators
```
## StrPopInputQueue_Container 
```lua
--- @type string
Read: compmatpropertymutator_t.StrPopInputQueue_Container
Write: compmatpropertymutator_t.StrPopInputQueue_Container = value
```
## StrDrawText_InputContainerSrc 
```lua
--- @type string
Read: compmatpropertymutator_t.StrDrawText_InputContainerSrc
Write: compmatpropertymutator_t.StrDrawText_InputContainerSrc = value
```
## StrDrawText_InputContainerProperty 
```lua
--- @type string
Read: compmatpropertymutator_t.StrDrawText_InputContainerProperty
Write: compmatpropertymutator_t.StrDrawText_InputContainerProperty = value
```
## DrawText_Position 
```lua
--- @type Vector2D
Read: compmatpropertymutator_t.DrawText_Position
Write: compmatpropertymutator_t.DrawText_Position = value
```
## ColDrawText_Color 
```lua
--- @type Color
Read: compmatpropertymutator_t.ColDrawText_Color
Write: compmatpropertymutator_t.ColDrawText_Color = value
```
## StrDrawText_Font 
```lua
--- @type string
Read: compmatpropertymutator_t.StrDrawText_Font
Write: compmatpropertymutator_t.StrDrawText_Font = value
```
## Conditions (Read-Only)
```lua
--- @type table
Read: compmatpropertymutator_t.Conditions
```
# Functions
## ToPtr
```lua
--- @return string
compmatpropertymutator_t:ToPtr()
```
## IsValid
```lua
--- @return bool
compmatpropertymutator_t:IsValid()
```

:::