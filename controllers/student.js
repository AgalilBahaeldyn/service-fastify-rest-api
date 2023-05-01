const { v4: uuidv4 } = require('uuid')

const knex = require(`../db`);
const db = knex.db;

// const db = require('../db')

async function getAll(req, reply) {

  try {
    return await db('student').select('*')
  } catch (err) {
    throw new Error(err)
  }
}

async function getById(req, reply) {
  const { id } = req.params
  try {
    return await db('student').select('*').where("id","=",req)
  } catch (err) {
    throw new Error(err)
  }
}

async function create(req, reply) {
  const { name, age, gender, major } = req.body
  const id = uuidv4()
  try {
    return await db(`student`)
     .insert({
        name: name,
     })
     .then(function(response){ 
    console.log(`INSERT SUCCESS student ${response}`); 
     return {status:true,responseID:response}; }
     )
     .catch((error) => {
       console.log(`THIS IS TROWE ERROR  : ${error}`);
     });

  } catch (err) {
    throw new Error(err)
  }
}

async function update(req, reply) {
  const { id } = req.params
  const { name } = req.body
  try {
    return await db(`student`)
      .where('id','=',id)
      .update({     
        name: name,       
      })
      .then(function(response){ console.log(`UPDATE SUCCESS student ${response}`); return {'status':true,'message':'UPDATE student SUCCESS'} }
      )
    //   .catch((error) => {
    //     console.log(`POST ERROR PTTYPE  : ${error}`);
    //   });
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteById(req, reply) {
//   const mysql = req.mysql
  const { id } = req.params
  try {
    await db(`student`)
    .where('id', '=', id)
    .del()


    return { message: 'Deleted' }
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: deleteById
}
