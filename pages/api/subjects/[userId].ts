
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
            const {userId} = req.query;
            let subjects;

            if(userId && typeof userId ==='string')
            {
                subjects = await prismadb.subject.findMany({
                    where:{
                        userId
                    },
                    include:{
                        User:true,
                    },
                });
            }
            else{
                subjects = await prismadb.subject.findMany({
                    include:{
                        User:true,
                    },
                });
            }
         
            res.status(200).json(subjects);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
