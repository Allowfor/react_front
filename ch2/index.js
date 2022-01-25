const fspromises=require('fs').promises;
const path=require('path');

const fileops=async()=>{
  try{
    const data =await fspromises.readFile(path.join(__dirname,'file','starter.txt'),'utf8');
      

      console.log(data);

      await fspromises.unlink(path.join(__dirname,'file','starter.txt'));

      await fspromises.writeFile(path.join(__dirname,'file','promiseWrite.txt'),data);
      await fspromises.appendFile(path.join(__dirname,'file','promiseWrite.txt'),'\\nye');
      await fs.rename(path.join(__dirname,'file','promiseWrite.txt'),path.join(__dirname,'file','promiseComplete.txt'));
      const newData=await fspromises.readFile(path.join(__dirname,'file','promiseComplete.txt'),'utf8');
      console.log(newData);








       
  }catch(err){
      console.error(err);
    
  }
}


fileops();
/*
console.log('hello..');


fs.writeFile(path.join(__dirname,'file','reply.txt'),'nice',(err) => {
  if (err) throw err;
  console.log('write complete');
  fs.appendFile(path.join(__dirname,'file','reply.txt'),'\\nye',(err) => {
    if (err) throw err;
    console.log('appendcomplete');
  });
  fs.rename(path.join(__dirname,'file','reply.txt'),path.join(__dirname,'file','newreply.txt'),(err) => {
    if (err) throw err;
    console.log('appendcomplete');
  });
});


process.on('uncaughtException',err=>{
    console.error('there an error:${err}');
    process.exit(1);
})
*/