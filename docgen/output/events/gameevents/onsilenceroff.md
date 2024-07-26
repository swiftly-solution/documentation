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
@event returns void
AddEventHandler("OnSilencerOff", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |