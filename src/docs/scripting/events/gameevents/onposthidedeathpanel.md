---
title: OnPostHideDeathpanel
index: true
order: 2
category:
  - Guide
---

# OnPostHideDeathpanel
This event is triggered after hide_deathpanel is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHideDeathpanel", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |