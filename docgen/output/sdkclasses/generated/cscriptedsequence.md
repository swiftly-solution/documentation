---
title: CScriptedSequence
index: true
order: 2
category:
  - Guide
---

# CScriptedSequence

::: tabs
@tab Lua
# Constructor
```lua
CScriptedSequence(ptr --[[ string ]])
```
# Properties
## Entry 
```lua
@type string
Read: cscriptedsequence.Entry
Write: cscriptedsequence.Entry = value
```
## PreIdle 
```lua
@type string
Read: cscriptedsequence.PreIdle
Write: cscriptedsequence.PreIdle = value
```
## Play 
```lua
@type string
Read: cscriptedsequence.Play
Write: cscriptedsequence.Play = value
```
## PostIdle 
```lua
@type string
Read: cscriptedsequence.PostIdle
Write: cscriptedsequence.PostIdle = value
```
## ModifierToAddOnPlay 
```lua
@type string
Read: cscriptedsequence.ModifierToAddOnPlay
Write: cscriptedsequence.ModifierToAddOnPlay = value
```
## NextScript 
```lua
@type string
Read: cscriptedsequence.NextScript
Write: cscriptedsequence.NextScript = value
```
## Entity 
```lua
@type string
Read: cscriptedsequence.Entity
Write: cscriptedsequence.Entity = value
```
## SyncGroup 
```lua
@type string
Read: cscriptedsequence.SyncGroup
Write: cscriptedsequence.SyncGroup = value
```
## MoveTo 
```lua
@type number
Read: cscriptedsequence.MoveTo
Write: cscriptedsequence.MoveTo = value
```
## MoveToGait 
```lua
@type number
Read: cscriptedsequence.MoveToGait
Write: cscriptedsequence.MoveToGait = value
```
## HeldWeaponBehavior 
```lua
@type number
Read: cscriptedsequence.HeldWeaponBehavior
Write: cscriptedsequence.HeldWeaponBehavior = value
```
## IsPlayingPreIdle 
```lua
@type boolean
Read: cscriptedsequence.IsPlayingPreIdle
Write: cscriptedsequence.IsPlayingPreIdle = value
```
## IsPlayingEntry 
```lua
@type boolean
Read: cscriptedsequence.IsPlayingEntry
Write: cscriptedsequence.IsPlayingEntry = value
```
## IsPlayingAction 
```lua
@type boolean
Read: cscriptedsequence.IsPlayingAction
Write: cscriptedsequence.IsPlayingAction = value
```
## IsPlayingPostIdle 
```lua
@type boolean
Read: cscriptedsequence.IsPlayingPostIdle
Write: cscriptedsequence.IsPlayingPostIdle = value
```
## DontRotateOther 
```lua
@type boolean
Read: cscriptedsequence.DontRotateOther
Write: cscriptedsequence.DontRotateOther = value
```
## IsRepeatable 
```lua
@type boolean
Read: cscriptedsequence.IsRepeatable
Write: cscriptedsequence.IsRepeatable = value
```
## ShouldLeaveCorpse 
```lua
@type boolean
Read: cscriptedsequence.ShouldLeaveCorpse
Write: cscriptedsequence.ShouldLeaveCorpse = value
```
## StartOnSpawn 
```lua
@type boolean
Read: cscriptedsequence.StartOnSpawn
Write: cscriptedsequence.StartOnSpawn = value
```
## DisallowInterrupts 
```lua
@type boolean
Read: cscriptedsequence.DisallowInterrupts
Write: cscriptedsequence.DisallowInterrupts = value
```
## CanOverrideNPCState 
```lua
@type boolean
Read: cscriptedsequence.CanOverrideNPCState
Write: cscriptedsequence.CanOverrideNPCState = value
```
## DontTeleportAtEnd 
```lua
@type boolean
Read: cscriptedsequence.DontTeleportAtEnd
Write: cscriptedsequence.DontTeleportAtEnd = value
```
## HighPriority 
```lua
@type boolean
Read: cscriptedsequence.HighPriority
Write: cscriptedsequence.HighPriority = value
```
## HideDebugComplaints 
```lua
@type boolean
Read: cscriptedsequence.HideDebugComplaints
Write: cscriptedsequence.HideDebugComplaints = value
```
## ContinueOnDeath 
```lua
@type boolean
Read: cscriptedsequence.ContinueOnDeath
Write: cscriptedsequence.ContinueOnDeath = value
```
## LoopPreIdleSequence 
```lua
@type boolean
Read: cscriptedsequence.LoopPreIdleSequence
Write: cscriptedsequence.LoopPreIdleSequence = value
```
## LoopActionSequence 
```lua
@type boolean
Read: cscriptedsequence.LoopActionSequence
Write: cscriptedsequence.LoopActionSequence = value
```
## LoopPostIdleSequence 
```lua
@type boolean
Read: cscriptedsequence.LoopPostIdleSequence
Write: cscriptedsequence.LoopPostIdleSequence = value
```
## SynchPostIdles 
```lua
@type boolean
Read: cscriptedsequence.SynchPostIdles
Write: cscriptedsequence.SynchPostIdles = value
```
## IgnoreLookAt 
```lua
@type boolean
Read: cscriptedsequence.IgnoreLookAt
Write: cscriptedsequence.IgnoreLookAt = value
```
## IgnoreGravity 
```lua
@type boolean
Read: cscriptedsequence.IgnoreGravity
Write: cscriptedsequence.IgnoreGravity = value
```
## DisableNPCCollisions 
```lua
@type boolean
Read: cscriptedsequence.DisableNPCCollisions
Write: cscriptedsequence.DisableNPCCollisions = value
```
## KeepAnimgraphLockedPost 
```lua
@type boolean
Read: cscriptedsequence.KeepAnimgraphLockedPost
Write: cscriptedsequence.KeepAnimgraphLockedPost = value
```
## DontAddModifiers 
```lua
@type boolean
Read: cscriptedsequence.DontAddModifiers
Write: cscriptedsequence.DontAddModifiers = value
```
## Radius 
```lua
@type number
Read: cscriptedsequence.Radius
Write: cscriptedsequence.Radius = value
```
## Repeat 
```lua
@type number
Read: cscriptedsequence.Repeat
Write: cscriptedsequence.Repeat = value
```
## PlayAnimFadeInTime 
```lua
@type number
Read: cscriptedsequence.PlayAnimFadeInTime
Write: cscriptedsequence.PlayAnimFadeInTime = value
```
## MoveInterpTime 
```lua
@type number
Read: cscriptedsequence.MoveInterpTime
Write: cscriptedsequence.MoveInterpTime = value
```
## AngRate 
```lua
@type number
Read: cscriptedsequence.AngRate
Write: cscriptedsequence.AngRate = value
```
## WaitUntilMoveCompletesToStartAnimation 
```lua
@type boolean
Read: cscriptedsequence.WaitUntilMoveCompletesToStartAnimation
Write: cscriptedsequence.WaitUntilMoveCompletesToStartAnimation = value
```
## NotReadySequenceCount 
```lua
@type number
Read: cscriptedsequence.NotReadySequenceCount
Write: cscriptedsequence.NotReadySequenceCount = value
```
## StartTime 
```lua
@type number
Read: cscriptedsequence.StartTime
Write: cscriptedsequence.StartTime = value
```
## WaitForBeginSequence 
```lua
@type boolean
Read: cscriptedsequence.WaitForBeginSequence
Write: cscriptedsequence.WaitForBeginSequence = value
```
## Saved_effects 
```lua
@type number
Read: cscriptedsequence.Saved_effects
Write: cscriptedsequence.Saved_effects = value
```
## SavedFlags 
```lua
@type number
Read: cscriptedsequence.SavedFlags
Write: cscriptedsequence.SavedFlags = value
```
## SavedCollisionGroup 
```lua
@type number
Read: cscriptedsequence.SavedCollisionGroup
Write: cscriptedsequence.SavedCollisionGroup = value
```
## Interruptable 
```lua
@type boolean
Read: cscriptedsequence.Interruptable
Write: cscriptedsequence.Interruptable = value
```
## SequenceStarted 
```lua
@type boolean
Read: cscriptedsequence.SequenceStarted
Write: cscriptedsequence.SequenceStarted = value
```
## PositionRelativeToOtherEntity 
```lua
@type boolean
Read: cscriptedsequence.PositionRelativeToOtherEntity
Write: cscriptedsequence.PositionRelativeToOtherEntity = value
```
## TargetEnt (Read-Only)
```lua
@type CBaseEntity
Read: cscriptedsequence.TargetEnt
```
## NextCine (Read-Only)
```lua
@type CScriptedSequence
Read: cscriptedsequence.NextCine
```
## Thinking 
```lua
@type boolean
Read: cscriptedsequence.Thinking
Write: cscriptedsequence.Thinking = value
```
## InitiatedSelfDelete 
```lua
@type boolean
Read: cscriptedsequence.InitiatedSelfDelete
Write: cscriptedsequence.InitiatedSelfDelete = value
```
## IsTeleportingDueToMoveTo 
```lua
@type boolean
Read: cscriptedsequence.IsTeleportingDueToMoveTo
Write: cscriptedsequence.IsTeleportingDueToMoveTo = value
```
## AllowCustomInterruptConditions 
```lua
@type boolean
Read: cscriptedsequence.AllowCustomInterruptConditions
Write: cscriptedsequence.AllowCustomInterruptConditions = value
```
## ForcedTarget (Read-Only)
```lua
@type CBaseAnimGraph
Read: cscriptedsequence.ForcedTarget
```
## DontCancelOtherSequences 
```lua
@type boolean
Read: cscriptedsequence.DontCancelOtherSequences
Write: cscriptedsequence.DontCancelOtherSequences = value
```
## ForceSynch 
```lua
@type boolean
Read: cscriptedsequence.ForceSynch
Write: cscriptedsequence.ForceSynch = value
```
## PreventUpdateYawOnFinish 
```lua
@type boolean
Read: cscriptedsequence.PreventUpdateYawOnFinish
Write: cscriptedsequence.PreventUpdateYawOnFinish = value
```
## EnsureOnNavmeshOnFinish 
```lua
@type boolean
Read: cscriptedsequence.EnsureOnNavmeshOnFinish
Write: cscriptedsequence.EnsureOnNavmeshOnFinish = value
```
## OnDeathBehavior 
```lua
@type number
Read: cscriptedsequence.OnDeathBehavior
Write: cscriptedsequence.OnDeathBehavior = value
```
## ConflictResponse 
```lua
@type number
Read: cscriptedsequence.ConflictResponse
Write: cscriptedsequence.ConflictResponse = value
```
## OnBeginSequence (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnBeginSequence
```
## OnActionStartOrLoop (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnActionStartOrLoop
```
## OnEndSequence (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnEndSequence
```
## OnPostIdleEndSequence (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnPostIdleEndSequence
```
## OnCancelSequence (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnCancelSequence
```
## OnCancelFailedSequence (Read-Only)
```lua
@type CEntityIOOutput
Read: cscriptedsequence.OnCancelFailedSequence
```
## OnScriptEvent (Read-Only)
```lua
@type table
Read: cscriptedsequence.OnScriptEvent
```
## InteractionMainEntity (Read-Only)
```lua
@type CBaseEntity
Read: cscriptedsequence.InteractionMainEntity
```
## PlayerDeathBehavior 
```lua
@type number
Read: cscriptedsequence.PlayerDeathBehavior
Write: cscriptedsequence.PlayerDeathBehavior = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cscriptedsequence.Parent
```
# Functions
## ToPtr
```lua
@returns string
cscriptedsequence:ToPtr()
```
## IsValid
```lua
@returns bool
cscriptedsequence:IsValid()
```

:::