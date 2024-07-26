---
title: OnPostPlayerGivenC4
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerGivenC4
This event is triggered after player_given_c4 is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerGivenC4", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |