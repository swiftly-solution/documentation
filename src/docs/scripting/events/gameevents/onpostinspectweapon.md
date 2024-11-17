---
title: OnPostInspectWeapon
index: true
order: 2
category:
  - Guide
---

# OnPostInspectWeapon
This event is triggered after inspect_weapon is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostInspectWeapon", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |