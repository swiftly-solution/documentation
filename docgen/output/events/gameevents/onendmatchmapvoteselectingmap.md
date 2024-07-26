---
title: OnEndmatchMapvoteSelectingMap
index: true
order: 2
category:
  - Guide
---

# OnEndmatchMapvoteSelectingMap
This event is triggered when endmatch_mapvote_selecting_map is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEndmatchMapvoteSelectingMap", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `count` |   `int`   |
|  `slot1` |   `int`   |
|  `slot2` |   `int`   |
|  `slot3` |   `int`   |
|  `slot4` |   `int`   |
|  `slot5` |   `int`   |
|  `slot6` |   `int`   |
|  `slot7` |   `int`   |
|  `slot8` |   `int`   |
|  `slot9` |   `int`   |
| `slot10` |   `int`   |