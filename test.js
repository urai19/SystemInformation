const si= require("systeminformation");
si.system(function(data){
    console.log(data.manufacturer);
    console.log(data.model);
});

si.cpu(function(data){
    console.log('Speed: '+ data.speed);
    console.log('Cores: '+ data.cores)
});

si.currentLoad(function(data){
    console.log('Current Load: '+ data.currentload);
});
