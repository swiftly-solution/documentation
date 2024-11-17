---
title: OnPostShowDeathpanel
index: true
order: 2
category:
  - Guide
---

# OnPostShowDeathpanel
This event is triggered after show_deathpanel is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostShowDeathpanel", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|       `victim`      |   `int`   |
| `killer_controller` |   `int`   |
|     `hits_taken`    |   `int`   |
|    `damage_taken`   |   `int`   |
|     `hits_given`    |   `int`   |
|    `damage_given`   |   `int`   |