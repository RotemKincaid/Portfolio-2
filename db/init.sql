drop table messages if exists;


create table messages(
    message_id serial primary key,
    name varchar(80),
    email text not null,
    message text
)