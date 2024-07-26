---
title: OnPostRoundEnd
index: true
order: 2
category:
  - Guide
---

# OnPostRoundEnd
This event is triggered after round_end is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `winner` |   `int`   |
|  `reason` |   `int`   |
| `message` |  `string` |
|   `time`  |  `float`  |