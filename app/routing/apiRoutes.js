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


  })
}