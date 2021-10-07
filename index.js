// const express = require('express');
// const app = express();
// const axios = require('axios');

// var port = process.env.PORT || 8080;

// async function getData(username) {
//     try {
//         const response = await axios.get(`https://playerdb.co/api/player/minecraft/${username}`);
//         return response.data.data.player;
//     } catch (error) {
//         return;
//     }
// }

// app.get('/mojang/v1/:user', async function (req, res) {
//     try {
//         const player = await getData(req.params.user);
//         const raw_id = await player.raw_id;
//         await res.status(200).json(
//             {
//                 mojang: {
//                     username: player.username,
//                     uuid: player.id,
//                     raw_uuid: raw_id,
//                     username_history: player.meta.name_history
//                 },
//                 skin: {
//                     avatar: `https://crafatar.com/avatars/${raw_id}?overlay=true`,
//                     head_render: `https://crafatar.com/renders/head/${raw_id}?overlay=true`,
//                     body_render: `https://crafatar.com/renders/body/${raw_id}?overlay=true`,
//                     skin: `https://crafatar.com/skins/${raw_id}`,
//                     cape: `https://crafatar.com/capes/${raw_id}`
//                 }
//             }
//         );
//     } catch (error){
//         res.status(500).send('Error 500');
//     }
// });

// app.listen(port, ()=>{
//     console.info(`Listening API on port: ${port}`)
// });
const express = require("express");
const app = express();
const v1 = require("./mojang/v1/");

app.use(express.json({ extended: false }));

app.use("/mojang/v1", v1);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening API on port: ${PORT}`));