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
@event returns void
AddEventHandler("OnBombAbortdefuse", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |