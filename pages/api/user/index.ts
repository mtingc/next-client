import { NextApiRequest, NextApiResponse } from 'next'
import DB from 'database/db'

const users = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    response.status(200).json({ lenght, data: allEntries })
}

export default users