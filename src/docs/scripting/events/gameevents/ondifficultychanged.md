---
title: OnDifficultyChanged
index: true
order: 2
category:
  - Guide
---

# OnDifficultyChanged
This event is triggered when difficulty_changed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDifficultyChanged", function(event --[[ Event ]])
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