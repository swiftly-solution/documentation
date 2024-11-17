---
title: OnTournamentReward
index: true
order: 2
category:
  - Guide
---

# OnTournamentReward
This event is triggered when tournament_reward is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTournamentReward", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
|   `defindex`   |   `int`   |
| `totalrewards` |   `int`   |
|   `accountid`  |   `int`   |