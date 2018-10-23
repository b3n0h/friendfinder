var friends = require('../data/friends.js')

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends)
    console.log('Number of possible friends: ', friends.length)
  })

  app.post('/api/friends', (req, res) => {

    let soulMate = {
      name: '',
      photo: '',
      scoreDiff: 1000
    }

    let userProfile = req.body
    let userScore = userProfile.score
    let totalDiff = 0

    for (let i = 0; i < friends.length; i++) {
      totalDiff = 0

      for (let o = 0; 0 < friends[i].score.length; o++) {
        totalDiff += Math.abs(parseInt(userScore[o]) - parseInt(friends[i].score[o]))

        if (totalDiff <= soulMate.scoreDiff) {
          soulMate.name = friends[i].name
          soulMate.photo = friends[i].photo
          soulMate.scoreDiff = totalDiff
        }
      }
    }
    friends.push(userProfile)
    res.json(soulMate)
  })
}