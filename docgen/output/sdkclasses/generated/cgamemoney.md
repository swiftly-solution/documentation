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
CGameMoney(ptr --[[ string ]])
```
# Properties
## OnMoneySpent 
```lua
@type CEntityIOOutput
Read: cgamemoney.OnMoneySpent
Write: cgamemoney.OnMoneySpent = value
```
## OnMoneySpentFail 
```lua
@type CEntityIOOutput
Read: cgamemoney.OnMoneySpentFail
Write: cgamemoney.OnMoneySpentFail = value
```
## Money 
```lua
@type number
Read: cgamemoney.Money
Write: cgamemoney.Money = value
```
## StrAwardText 
```lua
@type string
Read: cgamemoney.StrAwardText
Write: cgamemoney.StrAwardText = value
```
## Parent 
```lua
@type CRulePointEntity
Read: cgamemoney.Parent
Write: cgamemoney.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cgamemoney:ToPtr()
```
## IsValid
```lua
@returns bool
cgamemoney:IsValid()
```

:::