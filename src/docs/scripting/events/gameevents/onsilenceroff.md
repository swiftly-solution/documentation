---
title: OnSilencerOff
index: true
order: 2
category:
  - Guide
---

# OnSilencerOff
This event is triggered when silencer_off is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSilencerOff", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |