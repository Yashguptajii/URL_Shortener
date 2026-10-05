import nanoid from 'nanoid'
import urlpool from './db.config';

export const shortlink = async(longurl) => {
    try {
        const shorturl = nanoid(10);
        const result = await urlpool.query(
            `INSERT INTO links (long_url,short_url)
            VALUES ($1,$2) RETURNING *`,
            [longurl,shorturl]
            )
        return result.rows[0];
    } catch (error){
        console.log("short link generating error");
    }
}

export const getshorturl = async (userid) => {
    try{
        const result = await urlpool.query(`SELECT short_url from links where user_id = $1`,[userid]);
        return result.rows[0];
    } catch(error) {
        console.log("fetching of shorturl is creating problem");
    }
}