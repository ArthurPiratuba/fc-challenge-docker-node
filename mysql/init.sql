create table people(
    id serial not null primary key,
    name varchar(255)
);

insert into people (name) values ("João");