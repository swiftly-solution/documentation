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
@event returns void
AddEventHandler("OnPostTeamIntroStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |