---
title: CBasePlayerWeaponVData
index: true
order: 2
category:
  - Guide
---

# CBasePlayerWeaponVData

::: tabs
@tab Lua
# Constructor
```lua
CBasePlayerWeaponVData(ptr --[[ string ]])
```
# Properties
## BuiltRightHanded 
```lua
@type boolean
Read: cbaseplayerweaponvdata.BuiltRightHanded
Write: cbaseplayerweaponvdata.BuiltRightHanded = value
```
## AllowFlipping 
```lua
@type boolean
Read: cbaseplayerweaponvdata.AllowFlipping
Write: cbaseplayerweaponvdata.AllowFlipping = value
```
## MuzzleAttachment (Read-Only)
```lua
@type CAttachmentNameSymbolWithStorage
Read: cbaseplayerweaponvdata.MuzzleAttachment
```
## LinkedCooldowns 
```lua
@type boolean
Read: cbaseplayerweaponvdata.LinkedCooldowns
Write: cbaseplayerweaponvdata.LinkedCooldowns = value
```
## Flags 
```lua
@type number
Read: cbaseplayerweaponvdata.Flags
Write: cbaseplayerweaponvdata.Flags = value
```
## PrimaryAmmoType 
```lua
@type number
Read: cbaseplayerweaponvdata.PrimaryAmmoType
Write: cbaseplayerweaponvdata.PrimaryAmmoType = value
```
## SecondaryAmmoType 
```lua
@type number
Read: cbaseplayerweaponvdata.SecondaryAmmoType
Write: cbaseplayerweaponvdata.SecondaryAmmoType = value
```
## MaxClip1 
```lua
@type number
Read: cbaseplayerweaponvdata.MaxClip1
Write: cbaseplayerweaponvdata.MaxClip1 = value
```
## MaxClip2 
```lua
@type number
Read: cbaseplayerweaponvdata.MaxClip2
Write: cbaseplayerweaponvdata.MaxClip2 = value
```
## DefaultClip1 
```lua
@type number
Read: cbaseplayerweaponvdata.DefaultClip1
Write: cbaseplayerweaponvdata.DefaultClip1 = value
```
## DefaultClip2 
```lua
@type number
Read: cbaseplayerweaponvdata.DefaultClip2
Write: cbaseplayerweaponvdata.DefaultClip2 = value
```
## ReserveAmmoAsClips 
```lua
@type boolean
Read: cbaseplayerweaponvdata.ReserveAmmoAsClips
Write: cbaseplayerweaponvdata.ReserveAmmoAsClips = value
```
## Weight 
```lua
@type number
Read: cbaseplayerweaponvdata.Weight
Write: cbaseplayerweaponvdata.Weight = value
```
## AutoSwitchTo 
```lua
@type boolean
Read: cbaseplayerweaponvdata.AutoSwitchTo
Write: cbaseplayerweaponvdata.AutoSwitchTo = value
```
## AutoSwitchFrom 
```lua
@type boolean
Read: cbaseplayerweaponvdata.AutoSwitchFrom
Write: cbaseplayerweaponvdata.AutoSwitchFrom = value
```
## RumbleEffect 
```lua
@type number
Read: cbaseplayerweaponvdata.RumbleEffect
Write: cbaseplayerweaponvdata.RumbleEffect = value
```
## Slot 
```lua
@type number
Read: cbaseplayerweaponvdata.Slot
Write: cbaseplayerweaponvdata.Slot = value
```
## Position 
```lua
@type number
Read: cbaseplayerweaponvdata.Position
Write: cbaseplayerweaponvdata.Position = value
```
## Parent (Read-Only)
```lua
@type CEntitySubclassVDataBase
Read: cbaseplayerweaponvdata.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseplayerweaponvdata:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplayerweaponvdata:IsValid()
```

:::