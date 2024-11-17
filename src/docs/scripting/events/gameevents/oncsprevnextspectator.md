---
title: OnCsPrevNextSpectator
index: true
order: 2
category:
  - Guide
---

# OnCsPrevNextSpectator
This event is triggered when cs_prev_next_spectator is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnCsPrevNextSpectator", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `next` | `boolean` |