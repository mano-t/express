var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
<<<<<<< HEAD
const uri = process.env.MONGODB_URI;
=======
const uri = "mongodb+srv://mano:Password@atlascluster.mhorg8t.mongodb.net/?retryWrites=true&w=majority";
>>>>>>> e1963d13cdc3b95eaad6601416ac3b69e2fdf8e9
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

<<<<<<< HEAD
// MongoDB クライアントをアプリケーション起動時に生成し、アプリケーション終了時にクローズ
let database;
(async () => {
    await client.connect();
    database = client.db('notes');
})();

router.get('/', async (req, res) => {
    try {
        // データベース、コレクションを指定
        const notes = database.collection('notes');

        // 全てのドキュメントを取得
        const note = await notes.find({}).toArray();

        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
=======
router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})
>>>>>>> e1963d13cdc3b95eaad6601416ac3b69e2fdf8e9

module.exports = router;
