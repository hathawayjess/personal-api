var name = {"name" : "Jessica"};
var location = { "location" : "Provo" };
var occupations = ["tomfoolery", "web developer", "pationoccu2"];
var hobbies = [{
    "name": "Watching cartoons",
    "type": "current"
    },
    {
    "name": "Quacking",
    "type": "past"
  }];
var skillz = [ {
  "id": 1,
  "name": "Javascript",
  "experience": "Intermediate"
},
{
  "id": 2,
  "name": "NodeJS",
  "experience": "Advanced"
}]


module.exports = {


  getName: function(req, res, next) {
    res.json(name.name);
  },

  getLocation: function(req, res, next) {
    res.json(location.location);
  },

  getOccupations: function(req, res, next) {
    if(req.query.order === 'asc') {
      res.json({occupations: occupations.sort()})
    } else if (req.query.order === 'desc') {
      res.json({occupations: occupations.sort().reverse()})
    } else {
      res.json({occupations: occupations})
    }
  },

  getLatestOccupation: function(req, res, next) {
    res.json(occupations.occupations[0]);
  },

  getHobbies: function(req, res, next) {
    res.json(hobbies);
  },

  getHobbyType: function(req, res, next) {
    res.json(hobbies.type);
  },

  changeName: function(req, res, next) {
      name = req.body.name;
      res.json(name.name);
  },
  changeLocation: function(req, res, next) {
    location = req.body.location;
    res.json(location.location);
  },
  addHobby: function(req, res, next) {
    hobbies.push(req.body);
    res.json(hobbies);
  },
  addOccupation: function(req, res, next) {
    occupations.push(req.body);
    res.json(occupations);
  },
  getSkillz: function(req, res, next) {
    var q = req.query.experience;
    var skillzByExperience = [];
    skillz.forEach(function(skill) {
      if (skill.experience === q) {
        skillzByExperience.push(skill.name);
      }
    })
    res.json(skillzByExperience);

    }

    // res.json({skillz: skillz});



}
