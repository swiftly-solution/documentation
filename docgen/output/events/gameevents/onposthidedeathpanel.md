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
@event returns void
AddEventHandler("OnPostHideDeathpanel", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |