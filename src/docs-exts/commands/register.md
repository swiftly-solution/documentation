---
title: Register
index: true
order: 2
category:
  - Guide
---

# Register
Registers a new command through Metamod.

::: tabs
@tab Server-Only Commands
```cpp
CON_COMMAND(command_name, "command_description")
{
    // code
}
```

### Available variables

```cpp
const CCommand& args
```

- [CCommand](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L316-L352)

@tab Shared Commands
```cpp
CON_COMMAND_SHARED(command_name, "command_description")
{
    // code
}
```

### Available variables

```cpp
const CCommandContext& context
const CCommand& args
```

- [CCommandContext](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L74-L95)
- [CCommand](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L316-L352)

@tab Commands With Flags
```cpp
CON_COMMAND_F(command_name, "command_description", flags)
{
    // code
}
```

**(!)** Available Flags: [Click Here](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L132-L182)

**(!)** To add multiple flags, you need to do bitwise OR (|) operation on them: flag1 | flag2 | flag3 | ...

### Available variables

```cpp
const CCommandContext& context
const CCommand& args
```

- [CCommandContext](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L74-L95)
- [CCommand](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/tier1/convar.h#L316-L352)

:::