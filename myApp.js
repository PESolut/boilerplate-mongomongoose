// dbconfig
require('dotenv').config();
const mongoose = require ('mongoose') 
const URI = process.env.MONGO_URI
mongoose.connect(`${URI}`, { useNewUrlParser: true, useUnifiedTopology: true})

/*

we have turned our Database class into a singleton 
by returning an instance of the class in the module.exports 
statement because we only need a single connection to the database.

*/

// class Database {
//   constructor() {
//     this._connect();
//   }

//   _connect() {
//     mongoose
//       .connect(`${URI}`, { useNewUrlParser: true, useUnifiedTopology: true})
//       .then(() => {
//         console.log('Database connection successful');
//       })
//       .catch((err) => {
//         console.error('Database connection error');
//       });
//   }
// }
// module.exports = new Database()

// creating a personSchema with the following shape:
// a required name field of type Stirng
// an age field of type Number
// a favoriteFoods field of type [String]

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
  }
})
let Person = mongoose.model('Person', personSchema)

const createAndSavePerson = (done) => {
  let johnDoe = new Person({
    name: "John Doe", age: 23, favoriteFoods: ['chicken',"beef",'cheese']
  })

  johnDoe.save((err, data)=> {
    if( err ){
      return console.error(error)
    }
    done(null, data)
  })
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, () => {
    if ( err) {
      return console.log(err)
    }
    done(null, data)
  })

};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */



//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
