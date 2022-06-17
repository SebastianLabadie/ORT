--1
SELECT TOP 1 con.Nombre as Cantidad FROM Conduce co,Conductor con,Post po 
WHERE co.Documento = con.Documento  and po.Documento = co.Documento and co.Nombre = po.Nombre
GROUP BY con.Nombre

--2
SELECT * FROM Usuario u
WHERE exists 
(
	SELECT email 
	FROM Comentarios c,Post po,Programa pro
	WHERE Pro.Nombre = 'Reflexionemos por la mañana' and c.Fecha >= DATEADD(month, -1, GETDATE()) and u.Email = c.Email
	and c.Titulo = po.Titulo and po.Nombre = pro.Nombre 
	GROUP BY (email)
	HAVING count(*)>20
)


--3
SELECT * FROM Programa pr
WHERE not exists(
	SELECT * FROM Post po WHERE pr.Nombre= po.Nombre and po.FechaPost >= DATEADD(YEAR, -1, GETDATE())
)


--4
SELECT con.Nombre,pr.Nombre FROM Programa pr, Conduce co,Conductor con,Post po
WHERE  pr.Nombre = co.Nombre and co.Documento = con.Documento and pr.Nombre= po.Nombre and co.Documento = po.Documento
and not exists (SELECT * FROM Comentarios com WHERE po.Titulo = com.Titulo)

--5
SELECT pro.Nombre,po.Titulo,cat.Nombre,com.TextoComentario
FROM Programa pro,Post po,Categoria cat,Comentarios com,Asigna asi,Privado priv
WHERE com.TextoComentario like '%Sorteo%' and com.IdComentario = priv.IdComentario and com.Titulo = po.Titulo
and asi.Titulo = po.Titulo and asi.Nombre = cat.Nombre and cat.Nombre = 'Música' and pro.Nombre = po.Nombre
ORDER BY priv.IdComentario ASC


--6
SELECT com.TextoComentario,com.Fecha,pro.Nombre,con.Nombre
FROM Comentarios com,Programa pro,Conductor con ,Conduce co,Usuario us,Post po,Pais pa
WHERE com.Email = us.Email and us.Username='meteoro23' and con.IdPais = pa.IdPais
and pa.NombreParis = 'Argentina'
and pro.Nombre = co.Nombre and co.Nombre = po.Nombre and co.Documento = con.Documento
and po.Nombre = pro.Nombre and com.Titulo = po.Titulo and po.Documento = con.Documento

--7
SELECT  TOP 1 cat.Nombre,cat.Descripcion,count(cat.Nombre) as Cantidad 
FROM Categoria cat,Asigna asi 
WHERE cat.Nombre = asi.Nombre 
GROUP BY cat.Nombre,cat.Descripcion 
ORDER BY Cantidad DESC