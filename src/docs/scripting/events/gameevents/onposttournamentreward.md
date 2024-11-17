---
title: OnPostTournamentReward
index: true
order: 2
category:
  - Guide
---

# OnPostTournamentReward
This event is triggered after tournament_reward is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTournamentReward", function(event)
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