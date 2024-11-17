---
title: OnHostageCallForHelp
index: true
order: 2
category:
  - Guide
---

# OnHostageCallForHelp
This event is triggered when hostage_call_for_help is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHostageCallForHelp", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `hostage` |   `int`   |