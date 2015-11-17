# Schema Information

## stories
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
story_type    | string    | not null
current_state | string    | not null
project_id    | integer   | not null, foreign key (references projects), indexed

## projects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
public          | boolean   | default: false
start_time      | datetime  | not null
account_id      | integer   | not null, foreign key (references accounts), indexed
description     | string    |
profile_content | string    |

## tasks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
story_id        | integer   | not null, foreign key (references stories), indexed
description     | string    | not null
complete        | boolean   | default: false
position        | integer   |

## labels
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
name            | string    | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
text            | text      | not null
story_id        | integer   | not null, foreign key (references stories), indexed
person_id       | integer   | not null, foreign key (references people), indexed


## file_attachments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
file_path       | string    | not null

## epics
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | string    |
url             | string    |
project_id      | integer   | not null, foreign key (references projects), indexed

## accounts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
plan            | string    | not null
status          | string    | not null

# people
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null
username        | string    |
password_digest | string    | not null


# project_memberships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
account_id      | integer   | not null, foreign key (references accounts), indexed

# account_memberships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
person_id       | integer   | not null, foreign key (references people), indexed
account_id      | integer   | not null, foreign key (references accounts), indexed
owner           | boolean   |
admin           | boolean   |
project_creator | boolean   |


# iterations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
number          | integer   | not null
project_id      | integer   | not null, foreign key (references projects), indexed
length          | integer   |
start           | datetime  |
finish          | datetime  |
