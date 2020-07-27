import { server } from './server';
import { dbConnect } from './database';



(async () => { // we used iif to wait for the database to connect and then the server
    await dbConnect;
    await server();
})();

