---
title: OnHideDeathpanel
index: true
order: 2
category:
  - Guide
---

# OnHideDeathpanel
This event is triggered when hide_deathpanel is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHideDeathpanel", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |