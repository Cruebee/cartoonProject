let characters = [
  {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  },
  {
    id: 362,
    name: 'Toxic Morty',
    status: 'Dead',
    species: 'Humanoid',
    type: "Morty's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: '',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/characters/362',
    created: '2018-01-10T18:20:41.703Z',
  },
  {
    id: 363,
    name: 'Evil Beth Monster',
    status: 'Dead',
    species: 'Modified Humanoid',
    type: "Beth's Therapy Monster",
    gender: 'Female',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Space',
      url: 'https://rickandmortyapi.com/api/location/22',
    },
    image: '',
    episode: ['https://rickandmortyapi.com'],
    url: 'https://rickandmortyapi.com/api/characters/363',
    created: '2018-01-10T18:20:41.703Z',
  },
];

for (let i = 0; i < characters.length; i++) {
  if (i >= 0) {
    document.write('<p>Name: ' + characters[i].name + '</p>');
  }
}

/*
for (var i = 5; i >= 0; i--) {
  if (i === 0) {
    document.write('<p>No More Monkeys</p>');
  } else {
    document.write(
      '<p>' +
        i +
        ' monkeys jumping on the bed. One fell off and bumped his head.'
    );
  }
}


var i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


do {
  console.log(i);
  i++;
} while (i < 5);

*/
