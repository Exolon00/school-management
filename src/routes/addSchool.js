import { Router } from "express";
import { getClient } from "../config/db.js";
const addSchoolRouter = Router()

const pool = getClient();
const conn = await pool.getConnection()

addSchoolRouter.post('/addSchool',async (req,res)=>{
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: 'Invalid input data' });
    }
    try{
       
        
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        const [result] = await conn.query(query,[name,address,latitude,longitude])
        
        res.status(200).json({id: result.insertId})
    } catch(err){
        res.status(500).json({error: 'Internal server error',
            result: err
        })
    } finally{
        conn.release()
    }
    
})

export default addSchoolRouter