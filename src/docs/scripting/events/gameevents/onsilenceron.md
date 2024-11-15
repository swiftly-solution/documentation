---
title: OnSilencerOn
index: true
order: 2
category:
  - Guide
---

# OnSilencerOn
This event is triggered when silencer_on is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSilencerOn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |