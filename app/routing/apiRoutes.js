var friends = require('../data/friends.js')

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends)
  })

  app.post('/api/friends', (req, res) => {
    let initDiff = 50
    let friendIndex
    for (let i = 0; i < friends.length; i++) {
      totalDiff = 0

      for (let o = 0; o < 10; o++) {
        totalDiff += Math.abs(friends[i].score[o] - req.body.score[o])

        if (totalDiff <= initDiff) {
          initDiff = totalDiff
          friendIndex = i
        }
      }
    }
    friends.push(req.body)
    res.json(friends[friendIndex])
  })
}