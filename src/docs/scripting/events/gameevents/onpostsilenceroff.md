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
@event returns void
AddEventHandler("OnPostSilencerOff", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |