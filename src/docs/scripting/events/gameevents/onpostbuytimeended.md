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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBuytimeEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |