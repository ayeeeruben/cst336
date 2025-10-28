import express from 'express';
// import fetch from 'node-fetch';
// const solarSystem = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//root route
app.get('/', async (req, res) => {

    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
    const randomImgUrl = randomCharacter.image;
    console.log(data);
    res.render('home.ejs', {randomImgUrl})
});


app.get('/characters',async (req, res) => {
    const character_name = req.query.characterName;
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character_name}`);
    const data = await response.json();
    if (data.error) {
      return res.status(404).send(`Character "${character_name}" not found`);
    }
    const charInfo = data.results[0];

    res.render('characterInfo.ejs', { charInfo });
});

app.get('/episodes', async (req, res) => {
  const episodeNumber = req.query.episodeNumber;
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
  const data = await response.json();

  res.render('episodeInfo.ejs', { episode: data });
});

app.listen(3000, () => {
   console.log('server started');
});