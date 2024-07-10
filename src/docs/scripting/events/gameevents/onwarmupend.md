---
title: OnWarmupEnd
index: true
order: 2
category:
  - Guide
---

# OnWarmupEnd
This event is triggered when warmup_end is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWarmupEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |