const AnimalAPI = {

  animals : [
    {name: "Eagle", type: "Flies"},
      {name: "Fish", type: "No Flies"},
        {name: "Crow", type: "Flies"},
          {name: "Snake", type: " No Flies"},
            {name: "Eagle", type: "Flies"},
              {name: "Eagle", type: "Flies"}

  ],

all: function() {return this.animals},
get: function(id) {
  const isAnimal = a => a.name === id
  return this.animals.find(isAnimal)
}
}

export default AnimalAPI
