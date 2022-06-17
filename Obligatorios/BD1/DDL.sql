create table Pais(
    IdPais integer not null Primary Key,
    NombreParis varchar(50));

create table Conductor (
    Documento varchar(10) not null Primary Key,
	Nombre varchar(60) not null,
	Sexo char(1) check(Sexo in ('F','M')),
	Direccion varchar(255), 
	FechaNacimiento date,
	IdPais integer not null foreign key references Pais(IdPais));

create table ConductorTelefono (
    Documento varchar(10) not null foreign key references Conductor(Documento),
	Telefono varchar(9) not null
	Primary Key (Documento,Telefono));

create table Programa (
    Nombre varchar(60) not null Primary Key,
	Descripcion varchar(60),
	HoraInicio time,
	HoraFin time);

create table Conduce(
	Nombre varchar(60) not null foreign key references Programa(Nombre),
	Documento varchar(10) not null foreign key references Conductor(Documento),
	Primary Key (Nombre,Documento));
	
create table Usuario (
    Email varchar(60) not null Primary Key,
	Username varchar(50),
	passwordUsuario varchar(50),
	avatar varchar(255), 
	FechaRegistro date);

create table Post(
	Titulo varchar(255) not null Primary Key,
	Contenido varchar(255),
	Resumen varchar(255),
	Imagen varchar(255),
	Nombre varchar(60) not null,
	Documento varchar(10) not null,
	FechaPost date not null,
	Foreign key (Nombre,Documento) references Conduce(Nombre,Documento));	

create table Comentarios(
    IdComentario integer not null Primary Key,
    TextoComentario varchar(255),
	Email varchar(60) not null foreign key references Usuario(Email),
	Titulo varchar(255) not null foreign key references Post(Titulo),
	Fecha Datetime);

create table Privado(
    IdComentario integer not null foreign key references Comentarios(IdComentario),
    Numero integer not null unique,
	Primary Key (IdComentario));

create table Publico(
    IdComentario integer not null foreign key references Comentarios(IdComentario),
	Primary Key (IdComentario));

create table Categoria(
	Nombre varchar(255) not null Primary Key,
	Imagen varchar(255) not null unique,
	Descripcion varchar(255));
	   	  
create table Pertenece (
    NombrePadre varchar(255) not null foreign key references Categoria (Nombre),
    NombreHija varchar(255) not null foreign key references Categoria (Nombre),
    Primary Key (NombreHija));

create table Asigna (
    Titulo varchar(255) not null foreign key references Post (Titulo),
    Nombre varchar(255) not null foreign key references Categoria (Nombre),
    Primary Key (Titulo,Nombre));