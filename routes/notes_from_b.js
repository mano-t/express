var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

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

module.exports = router;
