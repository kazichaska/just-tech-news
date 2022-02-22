const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// IMPORTANT
// Like earlier, once you turn on the server with 
// sequelize.sync({ force: true }) and confirm the database tables were 
// recreated, switch back to using { force: false } and restart the server 
// one more time just to make sure the changes took hold and you don't 
// accidentally remove data!
//  `sequelize.sync({ force: true })` anytime there is update on 
// the database side and turn it back to false when done
sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => console.log('Now listening!'));
});