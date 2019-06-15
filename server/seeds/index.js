const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mongoose = require('mongoose');
const faker = require('faker');

const User = require('../models/user');
const Picture = require('../models/picture');

function rand(max = 100) {
  return Math.floor(Math.random() * max);
}

async function importSeeds() {
  await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });

  await User.deleteMany({});
  await Picture.deleteMany({});

  const users = [];
  for(let i = 0; i < 100; i++) {
    let user = new User({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: 'https://picsum.photos/500/500',
      bio: faker.lorem.paragraph(),
      email: faker.internet.email(),
      password: 'qwerty',
    });

    user = await user.save();
    console.log(`Created user ${user.firstName} ${user.lastName}`);
    users.push(user);
  }

  for(let i = 0; i < 1000; i++) {
    const randOwner = users[rand()];
    
    const likes = [];
    const comments = [];

    const likesCount = rand(100);
    const commentsCount = rand();

    for(let j = 0; j < likesCount; j++) {
      const randUser = users[rand()];
      likes.push({
        user: randUser,
        timestamp: faker.date.past(),
      });
    }

    for(let j = 0; j < commentsCount; j++) {
      const randUser = users[rand()];
      comments.push({
        user: randUser,
        text: faker.lorem.sentence(),
        timestamp: faker.date.past(),
      });
    }

    const picture = new Picture({
      image: 'https://picsum.photos/500/500',
      owner: randOwner,
      likes,
      comments,
    });

    await picture.save();

    console.log(`Created picture for ${randOwner.firstName} ${randOwner.lastName}`);
  }

  process.exit();
}

importSeeds();