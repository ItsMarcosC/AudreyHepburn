const dataText = require ('./movies_text');
const dataImage = require ('./images');

const AudreyMovies = { 
  profile : {
      stageName: 'Audrey Hepburn',
      birthName: 'Audrey Kathleen Ruston',
      birthPlace: 'Ixelles, Belgium',
      birthDate: '04/05/1929',
      dDate: '20/01/1993'
  },
  
  movies : [
    {
      title: 'Secret People',
      year: '1952',
      character: 'Nora Brentano',
      cover: dataImage.secretPeopleCover,
      genre: 'Drama',
      summary: dataText.secretPeopleSummary, 
      fact: dataText.secretPeopleFact,
      id: 'secretPeople',
      media: 'movie'
    },
    {
      title: 'Monte Carlo Baby',
      year: '1951',
      character: 'Linda Farrel / Melissa Farrell',
      cover: dataImage.monteCarloCover,
      genre: 'Comedy',
      summary: dataText.monteCarloSummary,
      fact: dataText.monteCarloFact,
      id: 'monteCarlo',
      media: 'movie'
    },
    {
      title: 'Roman Holiday',
      year: '1953',
      character: 'Princess Ann',
      cover: dataImage.romanHolidayCover,
      genre: 'Romantic Comedy',
      summary: dataText.romanHolidaySummary,
      fact: dataText.romanHolidayFact,
      id: 'romanHoliday',
      media: 'movie'
    },
    {
      title: 'Sabrina',
      year: '1954',
      character: 'Sabrina Fairchild',
      cover: dataImage.sabrinaCover,
      genre: 'Romantic Comedy',
      summary: dataText.sabrinaSummary,
      fact: dataText.sabrinaFact,
      id: 'sabrina',
      media: 'movie'
    },
    {
      title: 'War and Peace',
      year: '1956',
      character: 'Natasha Rostova',
      cover: dataImage.warAndPeaceCover,
      genre: 'Epic Historical Drama',
      summary: dataText.warAndPeaceSummary,
      fact: dataText.warAndPeaceFact,
      id: 'warAndPeace',
      media: 'movie'
    },
    {
      title: 'Love in the Afternoon',
      year: '1957',
      character: 'Ariane Chavasse',
      cover: dataImage.loveAfternoonCover,
      genre: 'Romantic Comedy',
      summary: dataText.loveAfternoonSummary,
      fact: dataText.loveAfternoonFact,
      id: 'loveInTheAfternoon',
      media: 'movie'
    },
    {
      title: 'Funny Face',
      year: '1957',
      character: 'Jo Stockton',
      cover: dataImage.funnyFaceCover,
      genre: 'Musical Romantic Comedy',
      summary: dataText.funnyFaceSummary,
      fact: dataText.funnyFaceFact,
      id: 'funnyFace',
      media: 'movie'
    },
    {
      title: 'Green Mansions',
      year: '1959',
      character: 'Rima',
      cover: dataImage.greenMansionsCover,
      genre: 'Romantic Adventure',
      summary: dataText.greenMansionsSummary,
      fact: dataText.greenMansionsFact,
      id: 'greenMansions',
      media: 'movie'
    },
    {
      title: `The Nun's Story`,
      year: '1959',
      character: 'Sister Luke / Gabrielle van der Mal',
      cover: dataImage.nunStoryCover,
      genre: 'Drama',
      summary: dataText.nunStorySummary,
      fact: dataText.nunStoryFact,
      id: 'theNunsStory',
      media: 'movie'
    },
    {
      title: 'The Unforgiven',
      year: '1960',
      character: 'Rachel Zachary',
      cover: dataImage.unforgivenCover,
      genre: 'Western',
      summary: dataText.unforgivenSummary,
      fact: dataText.unforgivenFact,
      id: 'theUnforgiven',
      media: 'movie'
    },
    {
      title: `Breakfast at Tiffany's`,
      year: '1961',
      character: 'Holly Golightly',
      cover: dataImage.tiffanyCover,
      genre: 'Romantic Comedy',
      summary: dataText.tiffanySummary,
      fact: dataText.tiffanyFact,
      id: 'breakfastAtTiffanys',
      media: 'movie'
    },
    {
      title: `The Children's Hour`,
      year: '1961',
      character: 'Karen Wright',
      cover: dataImage.childrenHourCover,
      genre: 'Romantic Comedy',
      summary: dataText.childrenHourSummary,
      fact: dataText.childrenHourFact,
      id: 'theChildrensHour',
      media: 'movie'
    },
    {
      title: `Charade`,
      year: '1963',
      character: 'Regina Lampert',
      cover: dataImage.charadeCover,
      genre: 'Romantic Mistery',
      summary: dataText.charadeSummary,
      fact: dataText.charadeFact,
      id: 'charade',
      media: 'movie'
    },
    {
      title: `Paris When It Sizzles`,
      year: '1964',
      character: 'Gabrielle Simpson',
      cover: dataImage.parisWhenCover,
      genre: 'Romantic Comedy',
      summary: dataText.parisWhenSummary,
      fact: dataText.parisWhenFact,
      id: 'parisWhenItSizzles',
      media: 'movie'
    },
    {
      title: `My Fair Lady`,
      year: '1964',
      character: 'Eliza Doolittle',
      cover: dataImage.myFairLadyCover,
      genre: 'Musical Romantic Comedy',
      summary: dataText.myFairLadySummary,
      fact: dataText.myFairLadyFact,
      id: 'myFairLady',
      media: 'movie'
    },
    {
      title: `How to Steal a Million`,
      year: '1966',
      character: 'Nicole Bonnet',
      cover: dataImage.stealMillionCover,
      genre: 'Heist Comedy',
      summary: dataText.stealMillionSummary,
      fact: dataText.stealMillionFact,
      id: 'howToStealAMillion',
      media: 'movie'
    },
    {
      title: `Two for the Road`,
      year: '1967',
      character: 'Joanna Wallace',
      cover: dataImage.twoForRoadCover,
      genre: 'Romantic Comedy-Drama',
      summary: dataText.twoForRoadSummary,
      fact: dataText.twoForRoadFact,
      id: 'twoForTheRoad',
      media: 'movie'
    },
    {
      title: `Wait Until Dark`,
      year: '1967',
      character: 'Susy Hendrix',
      cover: dataImage.waitDarkCover,
      genre: 'Psychological Thriller',
      summary: dataText.waitDarkSummary,
      fact: dataText.waitDarkFact,
      id: 'waitUntilDark',
      media: 'movie'
    },
    {
      title: `Robin and Marian`,
      year: '1976',
      character: 'Maid Marian',
      cover: dataImage.robinMarianCover,
      genre: 'Romantic Adventure',
      summary: dataText.robinMarianSummary,
      fact: dataText.robinMarianFact,
      id: 'robinAndMarian',
      media: 'movie'
    },
    {
      title: `Bloodline`,
      year: '1979',
      character: 'Elizabeth Roffe',
      cover: dataImage.bloodlineCover,
      genre: 'Thriller',
      summary: dataText.bloodlineSummary,
      fact: dataText.bloodlineFact,
      id: 'bloodline',
      media: 'movie'
    },
    {
      title: `They All Laughed`,
      year: '1981',
      character: 'Angela Niotes',
      cover: dataImage.laughedCover,
      genre: 'Romantic Comedy',
      summary: dataText.laughedSummary,
      fact: dataText.laughedFact,
      id: 'theyAllLaughed',
      media: 'movie'
    },
    {
      title: `Always`,
      year: '1989',
      character: 'Hap',
      cover: dataImage.alwaysCover,
      genre: 'Romantic Drama',
      summary: dataText.alwaysSummary,
      fact: dataText.alwaysFact,
      id: 'always',
      media: 'movie'
    }
  ],
}

export default AudreyMovies;