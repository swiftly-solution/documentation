---
title: CNavVolumeBreadthFirstSearch
index: true
order: 2
category:
  - Guide
---

# CNavVolumeBreadthFirstSearch

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNavVolumeBreadthFirstSearch(ptr)
```
# Properties
## StartPos 
```lua
--- @type Vector
Read: cnavvolumebreadthfirstsearch.StartPos
Write: cnavvolumebreadthfirstsearch.StartPos = value
```
## SearchDist 
```lua
--- @type number
Read: cnavvolumebreadthfirstsearch.SearchDist
Write: cnavvolumebreadthfirstsearch.SearchDist = value
```
## Parent (Read-Only)
```lua
--- @type CNavVolumeCalculatedVector
Read: cnavvolumebreadthfirstsearch.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnavvolumebreadthfirstsearch:ToPtr()
```
## IsValid
```lua
--- @return bool
cnavvolumebreadthfirstsearch:IsValid()
```

:::