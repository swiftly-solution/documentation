---
title: TerminateRound
index: true
order: 2
category:
  - Guide
---

# TerminateRound
Ends a round with a delay and with a reason.
::: tabs
@tab Lua
```lua
--- @param delay number
--- @param reason number RoundEndReason_t
--- @return nil
server:TerminateRound(delay, reason)
```

:::