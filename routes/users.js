const express = require('express')
const router = express.Router()

//routing endpoint users utama
router.get('/', (req, res) =>  {
    res.status(200).json({
        data: "deacourse backend1",
        metadata: "test user endpount"
    })
})

module.exports = router