---
title: OnPostHltvCameraman
index: true
order: 2
category:
  - Guide
---

# OnPostHltvCameraman
This event is triggered after hltv_cameraman is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHltvCameraman", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |