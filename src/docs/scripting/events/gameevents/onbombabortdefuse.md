---
title: OnBombAbortdefuse
index: true
order: 2
category:
  - Guide
---

# OnBombAbortdefuse
This event is triggered when bomb_abortdefuse is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBombAbortdefuse", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |