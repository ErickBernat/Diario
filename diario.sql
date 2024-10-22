create database diario;
use diario;

create table login(
id_login int primary key auto_increment,
ds_senha varchar(200),
ds_email varchar(200)
);

create table nota(
id_nota int primary key auto_increment,
ds_titulo varchar(200),
dt_data datetime,
dt_nota text,
id_login int,
foreign key (id_login) References login (id_login)
);

insert into login(ds_senha,ds_email) values("123","erick@gmail.com");
drop table nota;

select * from login where ds_senha='123' and ds_email='erick@gmail.com';
insert into nota(ds_titulo,dt_data,dt_nota,id_login) values("Almoço","2024-10-19","Almocei arroz, carne no molho,e pure de batata.Depois de almoçar lavei meu prato e tomei sorvete de sobremesa",1);
insert into nota(ds_titulo,dt_data,dt_nota,id_login) values("Almoço","2024-10-19","Almocei arroz, carne no molho,e pure de batata.Depois de almoçar lavei meu prato e tomei sorvete de sobremesa",1);
insert into nota(ds_titulo,dt_data,dt_nota,id_login) values("Almoço","2024-10-19","Almocei arroz, carne no molho,e pure de batata.Depois de almoçar lavei meu prato e tomei sorvete de sobremesa",1);
 
 delete from nota where id_nota=1;
 
 select*from nota;
update diario set ds_titulo = 'Domingo de manha',
               dt_data   = '2024-10-20 00:00:00',
               dt_nota   = 'Vou dormir tarde fazendo trabalho' where id_nota    = ?