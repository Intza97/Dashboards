var ctx=document.getElementById('myChart').getContext('2d');
var earning=document.getElementById('earning').getContext('2d');
var myChart= new Chart(ctx,{
    type:'polarArea',
    data:{
        labels:['Facebook','Youtube','Amazon'],
        datasets:[{
            label:'Traffic Source',
            data:[1200,1900,3000],
            backgroundColor:[
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)'
            
            ],
           
        }]
    },
    options:{
       responsive:true,
    }
});
var myChart= new Chart(earning,{
    type:'bar',
    data:{
        labels:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[{
            label:'earning',
            data:[1200,1090,3000,5400,1220,3600,4800,4578,2566,8545,4587,9000],
            backgroundColor:[
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)'
            ],
        }]
    },
    options:{
       responsive:true,
    }
});