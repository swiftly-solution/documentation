---
title: CSkillDamage
index: true
order: 2
category:
  - Guide
---

# CSkillDamage

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSkillDamage(ptr)
```
# Properties
## Damage (Read-Only)
```lua
--- @type CSkillFloat
Read: cskilldamage.Damage
```
## NPCDamageScalarVsNPC 
```lua
--- @type number
Read: cskilldamage.NPCDamageScalarVsNPC
Write: cskilldamage.NPCDamageScalarVsNPC = value
```
## PhysicsForceDamage 
```lua
--- @type number
Read: cskilldamage.PhysicsForceDamage
Write: cskilldamage.PhysicsForceDamage = value
```
# Functions
## ToPtr
```lua
--- @return string
cskilldamage:ToPtr()
```
## IsValid
```lua
--- @return bool
cskilldamage:IsValid()
```

:::