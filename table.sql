create table product.productTable(
name VARCHAR(200),
price INTEGER,
quality VARCHAR(200)
);

insert into product.productTable (
name,price,quality
)
values
("AC",40000,"very good"),
("fridge",20000,"average"),
("heater",7000,"not bad"),
('water purified',10000,'bad'),
("washing machine",22000,'very bad')
;
 
 select * from product.productTable;
 
 select sum(price) from product.productTable;
 
 CREATE Table user(
    name VARCHAR(200),
    password VARCHAR(200),
    email VARCHAR(200)
);
