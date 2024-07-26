---
title: OnInspectWeapon
index: true
order: 2
category:
  - Guide
---

# OnInspectWeapon
This event is triggered when inspect_weapon is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInspectWeapon", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |