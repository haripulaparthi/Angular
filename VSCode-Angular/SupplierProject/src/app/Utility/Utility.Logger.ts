export class Logger{
    Log(){
        console.log('Default logger');
    }
}
export class ConsoleLogger extends Logger{
    Log(){
        console.log('Console logger');
    }
}
export class FileLogger extends Logger{
    Log(){
        console.log('File logger');
    }
}