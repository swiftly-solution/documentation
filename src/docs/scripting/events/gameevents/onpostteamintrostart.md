---
title: OnPostTeamIntroStart
index: true
order: 2
category:
  - Guide
---

# OnPostTeamIntroStart
This event is triggered after team_intro_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTeamIntroStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |