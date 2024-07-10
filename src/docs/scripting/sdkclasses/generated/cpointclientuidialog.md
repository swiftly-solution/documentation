---
title: CPointClientUIDialog
index: true
order: 2
category:
  - Guide
---

# CPointClientUIDialog

::: tabs
@tab Lua
# Constructor
```lua
CPointClientUIDialog(ptr --[[ string ]])
```
# Properties
## Activator (Read-Only)
```lua
@type CBaseEntity
Read: cpointclientuidialog.Activator
```
## StartEnabled 
```lua
@type boolean
Read: cpointclientuidialog.StartEnabled
Write: cpointclientuidialog.StartEnabled = value
```
## Parent 
```lua
@type CBaseClientUIEntity
Read: cpointclientuidialog.Parent
Write: cpointclientuidialog.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointclientuidialog:ToPtr()
```
## IsValid
```lua
@returns bool
cpointclientuidialog:IsValid()
```

:::