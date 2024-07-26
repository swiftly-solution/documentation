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
@event returns void
AddEventHandler("OnPostTeamIntroEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |