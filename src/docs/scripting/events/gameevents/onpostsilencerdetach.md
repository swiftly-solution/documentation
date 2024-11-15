---
title: OnPostSilencerDetach
index: true
order: 2
category:
  - Guide
---

# OnPostSilencerDetach
This event is triggered after silencer_detach is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSilencerDetach", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |