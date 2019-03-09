const lorem = require('lorem-ipsum');
const moment = require('moment');
const uuid = require('uuid');
const randomNumber = () => Math.floor(Math.random() * 1000 + 1)
const randomRating = () => Math.floor(Math.random() * 5 + 1);
const randomMoment = () => moment().subtract(randomNumber(), 'minutes').subtract(randomNumber(), 'months').format();


const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
    contactPoints: [`${process.env.IP}`],
    localDataCenter: 'datacenter1'
});

const homes = async () => {
    for (let i = 0; i < 10000000; i++) {
        client.execute(`INSERT INTO data_lodge.testing (id,home_id,accuracy,communication,cleanliness,check_in,value,location,complaints,comment,created_at,name,img_url) VALUES (${uuid()},${i},${randomRating()},${randomRating()},${randomRating()},${randomNumber()},${randomRating()},${randomRating()},${Boolean(i % 2)},'${lorem()}','${randomMoment()}',${lorem({ count: 2, units: 'words' })},'https://s3.us-east-2.amazonaws.com/review-images-sdc/user${randomNumber()}.jpg')`)
        client.execute(`INSERT INTO data_lodge.testing (id,home_id,accuracy,communication,cleanliness,check_in,value,location,complaints,comment,created_at,name,img_url) VALUES (${uuid()},${i},${randomRating()},${randomRating()},${randomRating()},${randomNumber()},${randomRating()},${randomRating()},${Boolean(i % 2)},'${lorem()}','${randomMoment()}',${lorem({ count: 2, units: 'words' })},'https://s3.us-east-2.amazonaws.com/review-images-sdc/user${randomNumber()}.jpg')`)
    }
    console.log('done')
};
homes();