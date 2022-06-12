import { NextApiRequest, NextApiResponse } from 'next'
import DB from 'database/db'

const user = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()
    const id = request.query.id
    const user = await db.getById(id as string)

    response.status(200).json(user)
}

export default user