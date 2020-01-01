const express = require('express');
const router = express.Router();

var friends = require('../data/friends');

router.get('/api/friends', (req, res) => {
    res.send(friends);
});

router.post('/api/friends', (req, res) => {
    let totalDifference = 0;

    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    var friend = req.body; console.log("friend line 20" + friend)
    var userName = friend.name;
    var userScores = friend.scores;

    var SC = userScores.map(function (item) {
        return parseInt(item, 10);
    });

    friend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: SC
    };

    var sum = SC.reduce((a, b) => a + b, 0);

    for (var i = 0; i < friends.length; i++) {
        totalDifference = 0;

        var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
        totalDifference += Math.abs(sum - bfriendScore);

        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;

        }
    }


    console.log(bestMatch);
    friends.push(friend);

    console.log(friend);
    res.send(bestMatch);


});

module.exports = router;