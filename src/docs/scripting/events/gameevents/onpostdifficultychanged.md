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
@event returns void
AddEventHandler("OnPostDifficultyChanged", function(event --[[ Event ]])
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