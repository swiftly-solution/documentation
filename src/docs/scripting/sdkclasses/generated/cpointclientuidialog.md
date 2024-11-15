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
CPointClientUIDialog(ptr)
```
# Properties
## Activator (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointclientuidialog.Activator
```
## StartEnabled 
```lua
--- @type boolean
Read: cpointclientuidialog.StartEnabled
Write: cpointclientuidialog.StartEnabled = value
```
## Parent (Read-Only)
```lua
--- @type CBaseClientUIEntity
Read: cpointclientuidialog.Parent
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