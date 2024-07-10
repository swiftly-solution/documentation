---
title: OnRoundAnnounceFinal
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceFinal
This event is triggered when round_announce_final is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundAnnounceFinal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |