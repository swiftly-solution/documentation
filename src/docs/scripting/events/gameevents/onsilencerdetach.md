---
title: OnSilencerDetach
index: true
order: 2
category:
  - Guide
---

# OnSilencerDetach
This event is triggered when silencer_detach is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSilencerDetach", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |