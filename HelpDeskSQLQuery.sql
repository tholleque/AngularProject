create database HelpDesk;

use HelpDesk;

create table [User](
	id int primary key identity(1,1),
	[Name] nvarchar(25)
);

create table Ticket(
	id int primary key identity(1,1),
	[Description] nvarchar(100),
	Resolution nvarchar(300),
	isClosed bit
);

create table Bookmark(
	id int primary key identity(1,1),
	UserId int foreign key references [User](id),
	TicketId int foreign key references Ticket(id)
);




