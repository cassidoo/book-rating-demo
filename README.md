# HarperDB + React Review App

Run `yarn start` for the magic!

## HarperDB setup

You'll need to put in your **Instance URL** and **user** and **password** into the Provider in index.js to make this work. Make a `.env` file and populate it like so:

```
REACT_APP_DB_URL=https://{your stuff here}.harperdbcloud.com
REACT_APP_USER={your name here}
REACT_APP_PASSWORD={your password here}
```

In the demo I did live with this project, I hardcoded these values in, and you can too! You can check out the git history to see how. Those credentials don't work anymore though, so don't try them. 😉

If you'd like to populate your table with data, here is an example query:

```sql
INSERT INTO reviews.books (bookid, name, author, review)
   VALUES(1, 'The Martian', 'Andy Weir', 5), (2, 'Big Little Lies', 'Liane Moriarty', 5), (3, 'The Girl on the Train', 'Paula Hawkins', 3)
```

The application should look like this when working properly:

![screenshot](screenshot.png)
