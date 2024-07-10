---
title: CItemDogtags
index: true
order: 2
category:
  - Guide
---

# CItemDogtags

::: tabs
@tab Lua
# Constructor
```lua
CItemDogtags(ptr --[[ string ]])
```
# Properties
## OwningPlayer (Read-Only)
```lua
@type CCSPlayerPawn
Read: citemdogtags.OwningPlayer
```
## KillingPlayer (Read-Only)
```lua
@type CCSPlayerPawn
Read: citemdogtags.KillingPlayer
```
## Parent 
```lua
@type CItem
Read: citemdogtags.Parent
Write: citemdogtags.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
citemdogtags:ToPtr()
```
## IsValid
```lua
@returns bool
citemdogtags:IsValid()
```

:::