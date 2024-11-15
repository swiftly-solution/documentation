---
title: OnWarmupEnd
index: true
order: 2
category:
  - Guide
---

# OnWarmupEnd
This event is triggered when warmup_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWarmupEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |