---
title: OnPostWarmupEnd
index: true
order: 2
category:
  - Guide
---

# OnPostWarmupEnd
This event is triggered after warmup_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostWarmupEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |