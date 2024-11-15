---
title: OnPostEndmatchMapvoteSelectingMap
index: true
order: 2
category:
  - Guide
---

# OnPostEndmatchMapvoteSelectingMap
This event is triggered after endmatch_mapvote_selecting_map is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostEndmatchMapvoteSelectingMap", function(event)
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