---
title: CTriggerHurt
index: true
order: 2
category:
  - Guide
---

# CTriggerHurt

::: tabs
@tab Lua
# Constructor
```lua
CTriggerHurt(ptr --[[ string ]])
```
# Properties
## OriginalDamage 
```lua
@type number
Read: ctriggerhurt.OriginalDamage
Write: ctriggerhurt.OriginalDamage = value
```
## Damage 
```lua
@type number
Read: ctriggerhurt.Damage
Write: ctriggerhurt.Damage = value
```
## DamageCap 
```lua
@type number
Read: ctriggerhurt.DamageCap
Write: ctriggerhurt.DamageCap = value
```
## LastDmgTime 
```lua
@type number
Read: ctriggerhurt.LastDmgTime
Write: ctriggerhurt.LastDmgTime = value
```
## ForgivenessDelay 
```lua
@type number
Read: ctriggerhurt.ForgivenessDelay
Write: ctriggerhurt.ForgivenessDelay = value
```
## BitsDamageInflict 
```lua
@type number
Read: ctriggerhurt.BitsDamageInflict
Write: ctriggerhurt.BitsDamageInflict = value
```
## DamageModel 
```lua
@type number
Read: ctriggerhurt.DamageModel
Write: ctriggerhurt.DamageModel = value
```
## NoDmgForce 
```lua
@type boolean
Read: ctriggerhurt.NoDmgForce
Write: ctriggerhurt.NoDmgForce = value
```
## DamageForce 
```lua
@type Vector
Read: ctriggerhurt.DamageForce
Write: ctriggerhurt.DamageForce = value
```
## ThinkAlways 
```lua
@type boolean
Read: ctriggerhurt.ThinkAlways
Write: ctriggerhurt.ThinkAlways = value
```
## HurtThinkPeriod 
```lua
@type number
Read: ctriggerhurt.HurtThinkPeriod
Write: ctriggerhurt.HurtThinkPeriod = value
```
## OnHurt 
```lua
@type CEntityIOOutput
Read: ctriggerhurt.OnHurt
Write: ctriggerhurt.OnHurt = value
```
## OnHurtPlayer 
```lua
@type CEntityIOOutput
Read: ctriggerhurt.OnHurtPlayer
Write: ctriggerhurt.OnHurtPlayer = value
```
## Parent 
```lua
@type CBaseTrigger
Read: ctriggerhurt.Parent
Write: ctriggerhurt.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ctriggerhurt:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerhurt:IsValid()
```

:::