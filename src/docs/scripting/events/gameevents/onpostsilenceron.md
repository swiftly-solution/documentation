---
title: OnPostSilencerOn
index: true
order: 2
category:
  - Guide
---

# OnPostSilencerOn
This event is triggered after silencer_on is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSilencerOn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |