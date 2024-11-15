---
title: OnRoundAnnounceFinal
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceFinal
This event is triggered when round_announce_final is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundAnnounceFinal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |