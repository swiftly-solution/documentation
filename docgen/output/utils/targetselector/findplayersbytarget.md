---
title: FindPlayersByTarget
index: true
order: 2
category:
  - Guide
---

# FindPlayersByTarget
Returns the players which could be selected using the target.
::: tabs
@tab Lua
```lua
@returns table of Player
FindPlayersByTarget(target --[[ string ]], matchbots --[[ boolean ]])
```
#### Target Options
The supported target options are the following:
```
@ct - Only CT
@t - Only T
@spec - Only Spectators
@alive - Alive Players
@dying - Dying players
@dead - Dead players
@all - All players
#USERID - By userid
STEAMID64 - By SteamID64
STEAMID - By SteamID
NAME - By Partial Name
```
More targets can be added using the event `FindPlayerByTarget`.
:::