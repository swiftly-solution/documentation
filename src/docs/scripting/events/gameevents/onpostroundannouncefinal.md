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
@event returns void
AddEventHandler("OnPostRoundAnnounceFinal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |