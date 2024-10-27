---
title: Chat
icon: message
order: 1
index: true
category:
  - Guide
---

# Chat

To change the chat configuration, you can modify the `addons/swiftly/configs/chat.json`:

```json title="chat.json"
{
    ...
    "Cstrike_Chat_T": "[T] {TAG}{NAME}: {MESSAGE}",
    "Cstrike_Chat_T_Loc": "[T] {TAG}{NAME} {GREEN}@{LOCATION}: {MESSAGE}",
    "Cstrike_Chat_T_Dead": "[T] {TAG}{NAME} {GREY}[DEAD]{DEFAULT}: {MESSAGE}",
    "Cstrike_Chat_CT": "[CT] {TAG}{NAME}: {MESSAGE}",
    "Cstrike_Chat_CT_Loc": "[CT] {TAG}{NAME} {GREEN}@{LOCATION}: {MESSAGE}",
    "Cstrike_Chat_CT_Dead": "[CT] {TAG}{NAME} {GREY}[DEAD]{DEFAULT}: {MESSAGE}",
    "Cstrike_Chat_All": "[ALL] {TAG}{NAME}: {MESSAGE}",
    "Cstrike_Chat_AllDead": "[ALL] {TAG}{NAME}: {MESSAGE}",
    "Cstrike_Chat_AllSpec": "[ALL] {TAG}{NAME} {DEFAULT}[SPEC]: {MESSAGE}",
    "Cstrike_Chat_Spec": "{TAG}{NAME} {DEFAULT}[SPEC]: {MESSAGE}",
    "#SFUI_TitlesTXT_Fire_in_the_hole": "{NAME}{GREEN}@{LOCATION}{red}➟ HE Grenade!",
    "#SFUI_TitlesTXT_Molotov_in_the_hole": "{NAME}{GREEN}@{LOCATION}{red}➟ Molotov!",
    "#SFUI_TitlesTXT_Flashbang_in_the_hole": "{NAME}{GREEN}@{LOCATION}{blue}➟ Flashbang!",
    "#SFUI_TitlesTXT_Incendiary_in_the_hole": "{NAME}{GREEN}@{LOCATION}{red}➟ Incendiary!",
    "#SFUI_TitlesTXT_Smoke_in_the_hole": "{NAME}{GREEN}@{LOCATION}{grey}➟ Smooke!",
    "#SFUI_TitlesTXT_Decoy_in_the_hole": "{NAME}{GREEN}@{LOCATION}{default}➟ Decoy!"
}
```
## Available placeholders
 - `{TIME}` - time in HH:MM
 - `{NAME}` - a player Name
 - `{TAG}` - a player Tag
 - `{LOCATION}` - its a player location string
 - `{COMP_COLOR}` - its represents of game player color
 - `{MESSAGE}` - a message.
 and colors:
 `{default}`, `{white}`, `{darkred}`,  `{lightpurple}`, `{green}`, `{olive}`, `{lime}`, `{red}`, `{gray}`, `{grey}`, `{lightyellow}`, `{yellow}`, `{silver}`, `{bluegrey}`, `{lightblue}`, `{blue}`, `{darkblue}`, `{purple}`, `{magenta}`, `{lightred}`, `{gold}`, `{orange}`,`{teamcolor}`

> [!info]
> All of radio chat message started with `#`.

## Chat Message Name

To find a chat message name, you need to:

1. Download [Source2Viewer](https://valveresourceformat.github.io/).
2. Open `game/csgo/pak01_dir.vpk`.
3. Locate folder `resource`.
4. Open file: `csgo_english.txt`.
5. Find a radio text message key as example `Cstrike_TitlesTXT_Thanks`.