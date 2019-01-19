const controller = {};

//Controladores para los ESTADOS
  //Para listar los estados en la página principal
  controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM estado', (err, estados) => {
       if (err) {
        res.json(err);
       }
       res.render('estados', {
          data: estados
       });
      });
    });
  };

  //Para guardar los estados nuevos
  controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO estado set ?', data, (err, estado) => {
        console.log(estado)
        res.redirect('/');
      })
    })
  };

  //Mostramos los estados para ser editados
  controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM estado WHERE Id_Estado = ?", [id], (err, rows) => {
        res.render('estados_edit', {
          data: rows[0]
        })
      });
    });
  };

  //Guardamos los cambios hechos en los estados
  controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
      conn.query('UPDATE estado set ? WHERE  Id_Estado = ?', [newCustomer, id], (err, rows) => {
        res.redirect('/');
      });
    });
  };

  //Borrar 
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM municipio WHERE Id_Estado = ?', [id], (err, rows) => {
      });
      connection.query('DELETE FROM estado WHERE Id_Estado = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }


//Controladores para MUNICIPIOS
  //Para mostrar los municipios
  controller.mostrarmunicipios = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query('SELECT Nombre FROM estado WHERE Id_Estado = ?', [id], (err, rows) =>{
        conn.query('SELECT * FROM municipio WHERE Id_Estado = ?', [id], (err, estados) => {
          if (err) {
            res.json(err);
          }
          res.render('municipios',{
            data: estados,
            name: rows
          });
        });
      });
    });
  };

  //Guardar nuevos
  controller.savemun = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO municipio set ?', data, (err, estado) => {
        console.log(estado)
        res.redirect('/');
      })
    })
  };

  //Editar municipios
  controller.editmun = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM municipio WHERE Id_Municipio = ?", [id], (err, rows) => {
        res.render('municipios_edit', {
          data: rows[0]
        })
      });
    });
  };

  //Guardar cambios
  controller.updatemun = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
      conn.query('UPDATE municipio set ? WHERE  Id_Municipio = ?', [newCustomer, id], (err, rows) => {
        conn.query('SELECT Id_Estado FROM municipio WHERE Id_Municipio= ?', [id], (err, dir) => {
          if (err) {
            return next(err);
          }
          var url;
          if (rows.length === 0) {
            url = 'URL no disponible'
          }
          else{
            url = dir[0].Id_Estado; //Guardamos la dirección del estado donde nos encotrabamos para poder volver
            res.redirect('../mostrarmunicipios/'+url);
          }
        });
      });
    });
  };

  //Borrar
  controller.deletemun = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('SELECT Id_Estado FROM municipio WHERE Id_Municipio= ?', [id], (err, dir) => {
        connection.query('DELETE FROM municipio WHERE Id_Municipio = ?', [id], (err, rows) => {
           if (err) {
              return next(err);
            }
            var url;
            if (rows.length === 0) {
              url = 'URL no disponible'
            } 
            else {
              url =  dir[0].Id_Estado;
              res.redirect('../mostrarmunicipios/'+url);
            }
        });
      });
    });
  }

module.exports = controller;
