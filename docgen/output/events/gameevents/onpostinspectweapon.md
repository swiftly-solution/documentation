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
@event returns void
AddEventHandler("OnPostInspectWeapon", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |