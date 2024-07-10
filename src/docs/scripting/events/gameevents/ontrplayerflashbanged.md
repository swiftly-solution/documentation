---
title: OnTrPlayerFlashbanged
index: true
order: 2
category:
  - Guide
---

# OnTrPlayerFlashbanged
This event is triggered when tr_player_flashbanged is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrPlayerFlashbanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |