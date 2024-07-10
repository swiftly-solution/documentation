---
title: OnBuytimeEnded
index: true
order: 2
category:
  - Guide
---

# OnBuytimeEnded
This event is triggered when buytime_ended is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBuytimeEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |