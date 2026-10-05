import express from 'express'
import { getshorturl, shortlink } from './shortlink.js';
import urlpool from './db.config.js';

const urlRouter = express.Router();

urlRouter.post("/generateurl",async(req,res)=>{
    const {longurl,userid} = req.body;
    await urlpool.query(`INSERT INTO links (user_id) VALUES ($1) RETURNING *`,[userId]);
    const result = await shortlink(longurl);
    return res.json(result);
});

urlRouter.get("/geturl",async(req,res)=>{
    const {userid} = req.query;
    await urlpool.query(`UPDATE links SET clicks = clicks+1 where user_id=$1`,[userid]);
    const result = await getshorturl(userid);
    return res.json(result);
});

urlRouter.get("/:shorturl",async(req,res)=>{
    const shorturl = req.params.shorturl;
    const result = await getshorturl(shorturl);
    return res.redirect(result.long_url);
})

export default urlRouter;
