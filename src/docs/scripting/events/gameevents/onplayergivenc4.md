---
title: OnPlayerGivenC4
index: true
order: 2
category:
  - Guide
---

# OnPlayerGivenC4
This event is triggered when player_given_c4 is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerGivenC4", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |