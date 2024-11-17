---
title: OnPostTeamIntroEnd
index: true
order: 2
category:
  - Guide
---

# OnPostTeamIntroEnd
This event is triggered after team_intro_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTeamIntroEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |