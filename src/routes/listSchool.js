import { Router } from "express";
import { getClient } from "../config/db.js";
import calculateDistance from "../utils/calculateDistance.js";

const listSchoolRouter = Router()


const pool = getClient();
const conn = await pool.getConnection()


listSchoolRouter.get('/listSchools', async (req, res) => {
    const { lat, lon } = req.query;
    if (isNaN(lat) || isNaN(lon)) {
        return res.status(400).json({ error: 'Invalid location parameters' });
    }

    const query = 'SELECT * FROM schools';
    try {
       
        const [results] = await conn.query(query);
        const sortedSchools = results.map(school => ({
            ...school,
            distance: calculateDistance(lat, lon, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);
        
        res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ error: 'Database error',
            results: error
         });
    } finally{
        conn.release()
    }
})

export default listSchoolRouter