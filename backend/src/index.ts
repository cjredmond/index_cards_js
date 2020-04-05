import express from "express";
const app = express();
const port = 5555; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );