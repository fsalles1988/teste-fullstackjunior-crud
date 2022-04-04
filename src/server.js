import express from 'express'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'


const baseURL = ``
const app = express()
const openApi = YAML.load('src/doc/openapi.yaml')


app.use(`${baseURL}/api-docs`, swaggerUi.serve, swaggerUi.setup(openApi))

app.use(express.json());


export { app }

app.listen(8080, () => console.log('Server is running'))