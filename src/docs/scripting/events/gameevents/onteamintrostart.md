---
title: OnTeamIntroStart
index: true
order: 2
category:
  - Guide
---

# OnTeamIntroStart
This event is triggered when team_intro_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnTeamIntroStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |