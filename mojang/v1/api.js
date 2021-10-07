const express = require("express");
const router = express.Router();
const axios = require("axios");

async function getData(username) {
    try {
        const response = await axios.get(`https://playerdb.co/api/player/minecraft/${username}`);
        return response.data.data.player;
    } catch (error) {
        return;
    }
}

router.get("/:user", async (req, res) => {
    try {
        const player = await getData(req.params.user);
        const raw_id = await player.raw_id;
        res.status(200).json(
            {
                mojang: {
                    username: player.username,
                    uuid: player.id,
                    raw_uuid: raw_id,
                    username_history: player.meta.name_history
                },
                skin: {
                    avatar: `https://crafatar.com/avatars/${raw_id}?overlay=true`,
                    head_render: `https://crafatar.com/renders/head/${raw_id}?overlay=true`,
                    body_render: `https://crafatar.com/renders/body/${raw_id}?overlay=true`,
                    skin: `https://crafatar.com/skins/${raw_id}`,
                    cape: `https://crafatar.com/capes/${raw_id}`
                }
            }
        );
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;