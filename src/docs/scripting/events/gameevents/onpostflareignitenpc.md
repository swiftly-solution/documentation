---
title: OnPostFlareIgniteNpc
index: true
order: 2
category:
  - Guide
---

# OnPostFlareIgniteNpc
This event is triggered after flare_ignite_npc is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostFlareIgniteNpc", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |