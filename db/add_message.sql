insert into messages(name, email, message)
values($1, $2, $3);
select * from messages;