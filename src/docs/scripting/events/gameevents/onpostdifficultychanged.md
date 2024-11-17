---
title: OnPostDifficultyChanged
index: true
order: 2
category:
  - Guide
---

# OnPostDifficultyChanged
This event is triggered after difficulty_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDifficultyChanged", function(event)
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