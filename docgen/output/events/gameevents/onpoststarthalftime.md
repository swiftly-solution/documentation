---
title: OnPostStartHalftime
index: true
order: 2
category:
  - Guide
---

# OnPostStartHalftime
This event is triggered after start_halftime is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostStartHalftime", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |