---
title: OnPostCsPrevNextSpectator
index: true
order: 2
category:
  - Guide
---

# OnPostCsPrevNextSpectator
This event is triggered after cs_prev_next_spectator is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostCsPrevNextSpectator", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `next` | `boolean` |