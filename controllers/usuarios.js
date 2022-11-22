const { response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = "no name", edad, page = 1} = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        edad,
        page
    });
  }

const usuariosPost = (req, res) => {

    res.json({
        msg: 'post API - usuariosPost'
    });
  }

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
  }

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
  }

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
  }


  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
  }