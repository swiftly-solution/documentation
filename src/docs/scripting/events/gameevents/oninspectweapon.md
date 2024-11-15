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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnInspectWeapon", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |