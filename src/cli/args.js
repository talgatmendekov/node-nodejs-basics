const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const parsedArgs = {};
  
    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].replace(/^--/, '');
      const value = args[i + 1];
      parsedArgs[propName] = value;
    }
  
    for (const [propName, value] of Object.entries(parsedArgs)) {
      console.log(`${propName} is ${value}`);
    }
};

parseArgs();