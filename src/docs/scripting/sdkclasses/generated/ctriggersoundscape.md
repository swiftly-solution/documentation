---
title: CTriggerSoundscape
index: true
order: 2
category:
  - Guide
---

# CTriggerSoundscape

::: tabs
@tab Lua
# Constructor
```lua
CTriggerSoundscape(ptr)
```
# Properties
## Soundscape (Read-Only)
```lua
--- @type CEnvSoundscapeTriggerable
Read: ctriggersoundscape.Soundscape
```
## SoundscapeName 
```lua
--- @type string
Read: ctriggersoundscape.SoundscapeName
Write: ctriggersoundscape.SoundscapeName = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggersoundscape.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggersoundscape:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggersoundscape:IsValid()
```

:::