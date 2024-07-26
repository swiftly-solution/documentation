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
@event returns void
AddEventHandler("OnPostTournamentReward", function(event --[[ Event ]])
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