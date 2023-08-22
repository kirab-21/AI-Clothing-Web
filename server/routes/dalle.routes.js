import express from 'express';
import * as dotenv from 'dotenv';
import * as ai from 'openai';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({message: "Hi from dalle routes"})
})

export default router;