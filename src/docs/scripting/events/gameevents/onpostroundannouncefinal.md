---
title: OnPostRoundAnnounceFinal
index: true
order: 2
category:
  - Guide
---

# OnPostRoundAnnounceFinal
This event is triggered after round_announce_final is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRoundAnnounceFinal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |