---
title: OnHideDeathpanel
index: true
order: 2
category:
  - Guide
---

# OnHideDeathpanel
This event is triggered when hide_deathpanel is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHideDeathpanel", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |