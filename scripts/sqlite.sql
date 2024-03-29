
CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY autoincrement,
    name varchar(100) NOT NULL UNIQUE,
    email varchar(256) NOT NULL,
    password varchar(256),
    avatar varchar(256),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);

INSERT INTO users (name, email, password, created_at) VALUES('admin', 'admin@weave.com', '$2a$10$5whQjJqSdL18PrEP.z/gZOubMKhFB38K0CvHWdnaQodb/H3yeG4J2', datetime('now'));
INSERT INTO users (name, email, password, created_at) VALUES('demo', 'admin@weave.com', '$2a$10$5whQjJqSdL18PrEP.z/gZOubMKhFB38K0CvHWdnaQodb/H3yeG4J2', datetime('now'));


CREATE TABLE IF NOT EXISTS auth_infos (
    id integer PRIMARY KEY autoincrement,
    user_id BIGINT NOT NULL REFERENCES users(id),
    url varchar(256),
    auth_type varchar(256),
    auth_id varchar(256),
    access_token varchar(256),
    refresh_token varchar(256),
    expiry timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);

CREATE TABLE IF NOT EXISTS groups (
    id integer PRIMARY KEY autoincrement,
    name varchar(100) NOT NULL UNIQUE,
    kind varchar(100),
    describe varchar(1024),
    creator_id BIGINT,
    updater_id BIGINT,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);

INSERT INTO groups (name, kind, describe, created_at) VALUES('root', 'system', 'weave system group', datetime('now'));
INSERT INTO groups (name, kind, describe, created_at) VALUES('system:authenticated', 'system', 'system group contains all authenticated user', datetime('now'));
INSERT INTO groups (name, kind, describe, created_at) VALUES('system:unauthenticated', 'system', 'system group contains all unauthenticated user', datetime('now'));

CREATE TABLE IF NOT EXISTS user_groups(
    group_id BIGINT NOT NULL REFERENCES groups(id),
    user_id BIGINT NOT NULL REFERENCES users(id),
    PRIMARY KEY(group_id, user_id)
);

INSERT INTO user_groups (group_id, user_id)
    SELECT  g.id, u.id FROM users AS u, groups AS g 
    WHERE (u.name='admin' AND g.name='root');

CREATE TABLE IF NOT EXISTS resources (
    id integer PRIMARY KEY autoincrement,
    name varchar(256) NOT NULL,
    scope varchar(100),
    kind varchar(100)
);

CREATE TABLE IF NOT EXISTS roles (
    id integer PRIMARY KEY autoincrement,
    name varchar(100) NOT NULL UNIQUE,
    scope varchar(100),
    namespace varchar(100),
    rules text
);

INSERT INTO roles (name, scope, rules) VALUES('cluster-admin', 'cluster', '[{"resource": "*", "operation": "*"}]');
INSERT INTO roles (name, scope, rules) VALUES('authenticated', 'cluster', '[{"resource": "users", "operation": "*"},{"resource": "auth", "operation": "*"}]');
INSERT INTO roles (name, scope, rules) VALUES('unauthenticated', 'cluster', '[{"resource": "auth", "operation": "create"}]');

CREATE TABLE IF NOT EXISTS user_roles(
    user_id BIGINT NOT NULL REFERENCES users(id),
    role_id BIGINT NOT NULL REFERENCES roles(id),
    PRIMARY KEY(user_id, role_id)
);

CREATE TABLE IF NOT EXISTS group_roles(
    group_id BIGINT NOT NULL REFERENCES groups(id),
    role_id BIGINT NOT NULL REFERENCES roles(id),
    PRIMARY KEY(group_id, role_id)
);

INSERT INTO group_roles (group_id, role_id) VALUES((SELECT id FROM groups WHERE name = 'root'), (SELECT id FROM roles WHERE name = 'cluster-admin'));
INSERT INTO group_roles (group_id, role_id) VALUES((SELECT id FROM groups WHERE name = 'system:authenticated'), (SELECT id FROM roles WHERE name = 'authenticated'));
INSERT INTO group_roles (group_id, role_id) VALUES((SELECT id FROM groups WHERE name = 'system:unauthenticated'), (SELECT id FROM roles WHERE name = 'unauthenticated'));

CREATE TABLE IF NOT EXISTS posts (
    id integer PRIMARY KEY autoincrement,
    name character varying(256) NOT NULL,
    content text NOT NULL,
    summary character varying(512),
    creator_id BIGINT NOT NULL REFERENCES users(id),
    views bigint,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);

CREATE UNIQUE INDEX idx_post_name
    ON posts(creator_id, name);

INSERT INTO posts (name, creator_id, views, created_at, content) VALUES
    ('First Post', 1, 23, datetime('now'), '
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and single quotes


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://qingwave.github.io)

[link with title](http://qingwave.github.io "title text!")

Autoconverted link https://qingwave.github.io (enable linkify to see)


## Images

![Weave](https://github.com/makeok/go-web-init/raw/master/document/img/login.png)
');

CREATE TABLE IF NOT EXISTS tags (
    id integer PRIMARY KEY autoincrement,
    name character varying(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS tag_posts (
    post_id bigint NOT NULL REFERENCES posts(id),
    tag_id bigint NOT NULL REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS categories (
    id integer PRIMARY KEY autoincrement,
    name character varying(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS category_posts (
    post_id bigint NOT NULL REFERENCES posts(id),
    category_id bigint NOT NULL REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id integer PRIMARY KEY autoincrement,
    parent_id bigint REFERENCES comments(id),
    user_id bigint REFERENCES users(id),
    post_id bigint REFERENCES posts(id),
    content character varying(1024),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);

CREATE TABLE  IF NOT EXISTS likes (
    id integer PRIMARY KEY autoincrement,
    user_id bigint REFERENCES users(id),
    post_id bigint REFERENCES posts(id)
);
