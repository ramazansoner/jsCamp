export class BaseLogger{
    log(data){
        console.log("Default logger: " + data)
    }
}
//BaseLogger ı extend et yani yukarıdaki asıl olayı fonk. kullan.
// sen de aslında bir BaseLoggersın.
//eğer içeride bir fonk. çalışmazsa baseloggerdan al çalıştır. 
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic: " + data)
    }
}

export class MongoDb extends BaseLogger{
    log (data){
        console.log("Logged to Mongo: " + data)
    }
}