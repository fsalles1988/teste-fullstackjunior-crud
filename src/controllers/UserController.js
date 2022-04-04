const knex = require("../database")
const knex = require("../routes")

module.exports = {
    async index(req, res) {
        const resultado = await knex('users')
        return res.json(resultado)
    },
    async indexOne(req, res) {
        const  id  = req.params.user_id
        const  resultado  = await knex('users')
        .where( "id", id )
        return res.json(resultado)
    },
    
    //Criando o metódo do post
    async create(req, res, next) {
      try { 
        const { username } = req.body

        await knex('users').insert({
            username
        })
        return res.status(201).send()
      } catch (error) {
          next(error)
      }
    },
    async update(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('users')
            .update({ username })
            .where({ id })

            return res.send()

        } catch (error) {
            next (error)
        }
    },
    async deleteOneUser(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .del()

            return res.send()
        } catch (error){
            next(error)
        }
    },
    async deleteAllUser(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .del(id)

            return res.send()
        } catch (error){
            next(error)
        }
    }

}