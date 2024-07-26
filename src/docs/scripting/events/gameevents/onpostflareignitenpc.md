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
@event returns void
AddEventHandler("OnPostFlareIgniteNpc", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |