import { Router } from 'express'
import path from 'path'

const router = Router();

router.get('', (req, res) => {
    res.send('api works!');
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));

})

router.get('/canal/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'canal.html'));
})

export default router;