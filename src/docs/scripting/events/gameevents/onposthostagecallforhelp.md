---
title: OnPostHostageCallForHelp
index: true
order: 2
category:
  - Guide
---

# OnPostHostageCallForHelp
This event is triggered after hostage_call_for_help is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHostageCallForHelp", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `hostage` |   `int`   |