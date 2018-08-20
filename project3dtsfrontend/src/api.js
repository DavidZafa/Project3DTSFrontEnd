const AnimalAPI = {

  animals : [
    {animal: "Eagle", type: "Flies"},
      {animal: "Fish", type: "No Flies"},
        {animal: "Crow", type: "Flies"},
          {animal: "Snake", type: " No Flies"},
            {animal: "Eagle", type: "Flies"},
              {animal: "Eagle", type: "Flies"},

  ],

all: function() {return this.animals},
get: function(id) {
  const isAnimal = a => a.animal === id
  return this.animals.find(isAnimal)
}
}

export default AnimalAPI
