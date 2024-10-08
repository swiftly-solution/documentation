---
title: Installation
icon: download
order: 1
index: true
category:
  - Guide
---

# Installation

To install Swiftly, you can watch the following video tutorial.

<center>
<iframe width="720" height="405" src="https://www.youtube.com/embed/0NG2ew_kxrg?si=KM_IN6enx8_M8tFR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
</center>

## Configure Database

For Swiftly to work as expected out-of-the-box, we need to configure the database for the basic plugins shipped with Swiftly.
To configure the database connection, we need to edit `addons/swiftly/configs/databases.json`:

```json title="databases.json"
{
    "default_connection": {
        "hostname": "127.0.0.1",
        "username": "root",
        "password": "",
        "database": "testdb",
        "port": 3306
    },
    "swiftly_admins": {
        "hostname": "127.0.0.1",
        "username": "root",
        "password": "",
        "database": "testdb",
        "port": 3306
    }
}
```

Over here, we need to edit for each connection the credentials with the ones for our database.