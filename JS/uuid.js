export function getUUID(){
    return "xxxxxxxx-xxxx-4xxx-yxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c){
        var r=(Math.random()* 16) | 0,
        V = C == "x" ? r: (r & 0x3) | 0x8;
        return V.toString(16);
    });
}