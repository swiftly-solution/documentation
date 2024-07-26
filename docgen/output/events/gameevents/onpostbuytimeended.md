---
title: OnPostBuytimeEnded
index: true
order: 2
category:
  - Guide
---

# OnPostBuytimeEnded
This event is triggered after buytime_ended is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBuytimeEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |