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
@event returns void
AddEventHandler("OnPostWarmupEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |