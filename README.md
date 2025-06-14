# Summer Chores

This project demonstrates two different approaches to handling asynchronous JavaScript tasks — using **callbacks** and **promises**.

## Overview

A fictional character completes a series of summer chores in a strict order. As they get more tired, there's a chance they may fall asleep and not complete the tasks.

Chores include:

1. Mow the yard
2. Weed eat around the house and fence
3. Trim the hedges
4. Collect wood for fires
5. Water the garden

Each chore takes a set amount of time (simulated with `setTimeout`), and the person loses energy after each task.

## Files

- `callbackVersion.js` – Implements the summer chores using **nested callbacks**
- `promiseVersion.js` – Rewrites the logic using **Promises** with `.then()` chaining
- `asyncAwaitVersion.js` – Uses **async/await** for a cleaner and more readable flow

## How to Run

Make sure Node.js is installed, then run any version:

```bash
node callbackVersion.js
node promiseVersion.js
node asyncAwaitVersion.js
```
