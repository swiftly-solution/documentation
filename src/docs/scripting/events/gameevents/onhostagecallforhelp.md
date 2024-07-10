---
title: OnHostageCallForHelp
index: true
order: 2
category:
  - Guide
---

# OnHostageCallForHelp
This event is triggered when hostage_call_for_help is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHostageCallForHelp", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `hostage` |   `int`   |