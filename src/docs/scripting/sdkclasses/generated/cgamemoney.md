---
title: CGameMoney
index: true
order: 2
category:
  - Guide
---

# CGameMoney

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGameMoney(ptr)
```
# Properties
## OnMoneySpent (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cgamemoney.OnMoneySpent
```
## OnMoneySpentFail (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cgamemoney.OnMoneySpentFail
```
## Money 
```lua
--- @type number
Read: cgamemoney.Money
Write: cgamemoney.Money = value
```
## StrAwardText 
```lua
--- @type string
Read: cgamemoney.StrAwardText
Write: cgamemoney.StrAwardText = value
```
## Parent (Read-Only)
```lua
--- @type CRulePointEntity
Read: cgamemoney.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cgamemoney:ToPtr()
```
## IsValid
```lua
--- @return bool
cgamemoney:IsValid()
```

:::