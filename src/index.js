const { port } = require('./config');

const app = require('./server');

// run server
app.listen(port, () => console.log(`server start (port: ${port})`));
