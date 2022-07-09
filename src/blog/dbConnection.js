import mongoos from 'mongoose';

const connection={};

async function dbConnection(){
    if(connection.isConnect){
        return;
    }
    const db=await mongoos.connect(process.env.MONGO_URL,{});

    connection.isConnect=db.connection.readyState;
    console.log(connection.isConnect);
}

export default dbConnection;