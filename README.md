# ruman-shaikh.github.io

select * from interaction;
select * from drug;

create table Drug_interaction(interactionid int,drugid int , FOREIGN KEY(interactionid) REFERENCES interaction(InteractionId), FOREIGN KEY(drugid) REFERENCES drug(DrugId));
insert into Drug_interaction(interactionid,drugid) values (1,2);
insert into Drug_interaction(interactionid,drugid) values (2,3);
insert into Drug_interaction(interactionid,drugid) values (3,2);
insert into Drug_interaction(interactionid,drugid) values (1,4);
insert into Drug_interaction(interactionid,drugid) values (2,5);
insert into Drug_interaction(interactionid,drugid) values (3,5);
insert into Drug_interaction(interactionid,drugid) values (3,4);
select * from drug_interaction;

ALTER TABLE interaction DROP DrugId1;
select * from drug;

Select distinct person.FirstName from person  JOIN medicationorder  ON   medicationorder.PersonId=person.PersonId  JOIN ordercatalog  ON  medicationorder.CatalogId= ordercatalog.CatalogId JOIN drug ON ordercatalog.DrugId=drug.DrugId  where GenericName = "haloperidol";

select FirstName from person P where PersonId in (select PersonId from medicationorder where CatalogId IN (select CatalogId from ordercatalog where DrugId  IN (select DrugId from drug where GenericName = "haloperidol")));

select * from medicationorder m where m.PersonId in (select PersonId from person where LastName = "Cat");

select * from interaction where InteractionId in ( select InteractionID from drug_interaction group by InteractionID having count(InteractionID) > 2);
