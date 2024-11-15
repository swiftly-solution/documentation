---
title: OnPostSilencerOff
index: true
order: 2
category:
  - Guide
---

# OnPostSilencerOff
This event is triggered after silencer_off is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSilencerOff", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |