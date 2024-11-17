---
title: OnDifficultyChanged
index: true
order: 2
category:
  - Guide
---

# OnDifficultyChanged
This event is triggered when difficulty_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnDifficultyChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key       | Data Type |
| :-------------: | :-------: |
| `newDifficulty` |   `int`   |
| `oldDifficulty` |   `int`   |
| `strDifficulty` |  `string` |