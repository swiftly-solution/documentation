---
title: OnBeginNewMatch
index: true
order: 2
category:
  - Guide
---

# OnBeginNewMatch
This event is triggered when Fired when a match ends or is restarted
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBeginNewMatch", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |