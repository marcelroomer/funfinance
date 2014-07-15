/**
 * Created by Marcel Roomer on 9-7-2014.
 */


// generate an array of random data
/*var data = [],
 time = (new Date()).getTime(),
 i;

 for (i = -19; i <= 0; i++) {
 data.push({
 x: time + i * 1000,
 y: Math.random()
 });
 console.log(time + i * 1000);
 console.log(Highcharts.dateFormat('%H:%M:%S', time + i * 1000));
 }*/

function debugOut(message) {
    //$('#debugDiv').append('<br>' + message);
    //$('#debugDiv').html(message);
}

function randomIntFromInterval(current) {
    //Random rand = new Random();
    var min = current - 0.005;
    var max = current + 0.005;
    return (Math.random()*(max*1000-min*1000+1)+min*1000)/1000;
}

