const router = require('koa-router')()
const StatusModel = require('../database/models/status')

// GET /status
// Request the information of users and devices
router.get('/status', async (ctx, next) => {
  StatusModel.aggregate([{
    $group: {
      _id: '$username',
      total: {
        $sum: '$pinsCount'
      }
    }
  }]).then((res) => {
    console.log(res)
  })

  ctx.response.type = 'json'
  ctx.response.body = {
    code: 200,
    data: {
    }
  }
})

module.exports = router
