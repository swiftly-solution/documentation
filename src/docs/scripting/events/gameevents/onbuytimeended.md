---
title: OnBuytimeEnded
index: true
order: 2
category:
  - Guide
---

# OnBuytimeEnded
This event is triggered when buytime_ended is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBuytimeEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |