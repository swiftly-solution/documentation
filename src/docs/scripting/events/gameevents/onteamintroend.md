---
title: OnTeamIntroEnd
index: true
order: 2
category:
  - Guide
---

# OnTeamIntroEnd
This event is triggered when team_intro_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnTeamIntroEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |