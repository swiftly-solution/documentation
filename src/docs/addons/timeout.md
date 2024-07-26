---
title: Timeout
icon: clock
order: 2
index: true
category:
  - Guide
---


# Timeout

To adjust the timeout you need to modify `configs/addons.json` by changing the field `timeout`:

```json title="addons.json"
{
    ...
    "timeout": TIMEOUT
}
```

The default value is 10 but it can be lowered to even 0.
Depending on your player base, you can set the timeout to a lower value, for example 5 seconds.