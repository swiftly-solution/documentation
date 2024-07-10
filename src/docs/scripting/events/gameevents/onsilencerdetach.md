---
title: OnSilencerDetach
index: true
order: 2
category:
  - Guide
---

# OnSilencerDetach
This event is triggered when silencer_detach is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSilencerDetach", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |