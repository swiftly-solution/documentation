---
title: OnCsPrevNextSpectator
index: true
order: 2
category:
  - Guide
---

# OnCsPrevNextSpectator
This event is triggered when cs_prev_next_spectator is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsPrevNextSpectator", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `next` | `boolean` |