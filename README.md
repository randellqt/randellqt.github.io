# randellqt.github.io — Mock API

A static mock API served via **GitHub Pages** that mirrors [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).

**Live URL:** https://randellqt.github.io/

## Resources

| Resource  | Count | Collection endpoint              | Item endpoint                    |
|-----------|-------|----------------------------------|----------------------------------|
| posts     | 100   | `/posts/index.json`              | `/posts/{id}.json`               |
| comments  | 500   | `/comments/index.json`           | `/comments/{id}.json`            |
| albums    | 100   | `/albums/index.json`             | `/albums/{id}.json`              |
| photos    | 5000  | `/photos/index.json`             | `/photos/{id}.json`              |
| todos     | 200   | `/todos/index.json`              | `/todos/{id}.json`               |
| users     | 10    | `/users/index.json`              | `/users/{id}.json`               |

## Usage

```js
// Fetch all posts
fetch('https://randellqt.github.io/posts/index.json')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch a single user
fetch('https://randellqt.github.io/users/1.json')
  .then(res => res.json())
  .then(user => console.log(user));
```

```bash
# curl example
curl https://randellqt.github.io/todos/index.json | jq .
```

## Notes

- All responses are **read-only** static JSON files — write operations are not persisted.
- CORS is enabled by default on GitHub Pages.
- No authentication required.
- Data structure mirrors the original JSONPlaceholder API.