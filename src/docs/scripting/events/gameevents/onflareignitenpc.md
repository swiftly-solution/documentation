---
title: OnFlareIgniteNpc
index: true
order: 2
category:
  - Guide
---

# OnFlareIgniteNpc
This event is triggered when flare_ignite_npc is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnFlareIgniteNpc", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |