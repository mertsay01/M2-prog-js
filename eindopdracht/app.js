const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

//kerstkaart
ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(350,200);
ctx.lineTo(350,800);
ctx.moveTo(350,200);
ctx.lineTo(900,100);
ctx.moveTo(900,100);
ctx.lineTo(900,700);
ctx.moveTo(350,800);
ctx.lineTo(900,700);
ctx.moveTo(900,100);
ctx.lineTo(1500,200);
ctx.moveTo(1500,200);
ctx.lineTo(1500,800);
ctx.moveTo(1500,800);
ctx.lineTo(900,700);
ctx.closePath();
ctx.stroke();


//de weg kaart links
ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = "grey";
ctx.fillRect(450,300,350,30);
ctx.fillRect(800,300,30,300);
ctx.fillRect(450,450,350,30);
ctx.fillRect(600,450,30,100);
ctx.closePath();
ctx.stroke();
//

//wegstrepen
ctx.beginPath();
ctx.moveTo(455,315);
ctx.lineTo(485,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(505,315);
ctx.lineTo(535,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(555,315);
ctx.lineTo(585,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(605,315);
ctx.lineTo(635,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(655,315);
ctx.lineTo(685,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(705,315);
ctx.lineTo(735,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(755,315);
ctx.lineTo(785,315);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(815,315);
ctx.lineTo(815,345);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(815,365);
ctx.lineTo(815,395);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(815,415);
ctx.lineTo(815,445);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(815,465);
ctx.lineTo(815,495);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(815,515);
ctx.lineTo(815,545);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(815,565);
ctx.lineTo(815,595);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(800,465);
ctx.lineTo(770,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(750,465);
ctx.lineTo(720,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(700,465);
ctx.lineTo(670,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(650,465);
ctx.lineTo(620,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(600,465);
ctx.lineTo(570,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(550,465);
ctx.lineTo(520,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(500,465);
ctx.lineTo(470,465);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(615,480);
ctx.lineTo(615,500);
ctx.closePath();
ctx.stroke();ctx.beginPath();
ctx.moveTo(615,520);
ctx.lineTo(615,540);
ctx.closePath();
ctx.stroke();

//huisjes links
//huis 1 rij 1
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(475,240);
ctx.lineTo(463,260);
ctx.lineTo(487,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(460,260,30,30);

//huis 2 rij 1
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
ctx.moveTo(525,240);
ctx.lineTo(513,260);
ctx.lineTo(537,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "blue";
ctx.fillRect(510,260,30,30);

//huis 3 rij 1
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(575,240);
ctx.lineTo(563,260);
ctx.lineTo(587,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(560,260,30,30);

//huis 4 rij 1
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(625,240);
ctx.lineTo(613,260);
ctx.lineTo(637,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(610,260,30,30);

//huis 5 rij 1
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
ctx.moveTo(675,240);
ctx.lineTo(663,260);
ctx.lineTo(687,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "blue";
ctx.fillRect(660,260,30,30);

//huis 6 rij 1
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(725,240);
ctx.lineTo(713,260);
ctx.lineTo(737,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(710,260,30,30);

//huis 7 rij 1
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(775,240);
ctx.lineTo(763,260);
ctx.lineTo(787,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(760,260,30,30);

//huis 1 rij 2
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(475,390);
ctx.lineTo(463,410);
ctx.lineTo(487,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(460,410,30,30);

//huis 2 rij 2
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
ctx.moveTo(525,390);
ctx.lineTo(513,410);
ctx.lineTo(537,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "blue";
ctx.fillRect(510,410,30,30);

//huis 3 rij 2
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(575,390);
ctx.lineTo(563,410);
ctx.lineTo(587,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(560,410,30,30);

//huis 4 rij 2
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(625,390);
ctx.lineTo(613,410);
ctx.lineTo(637,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(610,410,30,30);

//huis 5 rij 2
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
ctx.moveTo(675,390);
ctx.lineTo(663,410);
ctx.lineTo(687,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "blue";
ctx.fillRect(660,410,30,30);

//huis 6 rij 2
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(725,390);
ctx.lineTo(713,410);
ctx.lineTo(737,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(710,410,30,30);

////huis 7 rij 2
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(775,390);
ctx.lineTo(763,410);
ctx.lineTo(787,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(760,410,30,30);

//sneeuwpop 1
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(475, 540, 15, -1.2, 1.25 * Math.PI);
ctx.arc(475,520, 10, 0.75 * Math.PI, 0.75 );
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(472,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(478,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();

//sneeuwpop 2
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(525, 540, 15, -1.2, 1.25 * Math.PI);
ctx.arc(525,520, 10, 0.75 * Math.PI, 0.75 );
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(522,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(528,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();

//sneeuwpop 3
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(575, 540, 15, -1.2, 1.25 * Math.PI);
ctx.arc(575,520, 10, 0.75 * Math.PI, 0.75 );
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(572,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.arc(578,519,0.1,0,2 *Math.PI);
ctx.closePath();
ctx.stroke();

//boom 1
ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(660,530);
ctx.lineTo(695,530);
ctx.lineTo(677,500);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(670,532,15,20);

//boom 2
ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(730,530);
ctx.lineTo(765,530);
ctx.lineTo(747,500);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(740,532,15,20);

//boom 3
ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(845,348);
ctx.lineTo(880,348);
ctx.lineTo(863,318);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(855,350,15,20);

//boom 4
ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(845,438);
ctx.lineTo(880,438);
ctx.lineTo(863,408);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(855,440,15,20);

//boom 5
ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(845,538);
ctx.lineTo(880,538);
ctx.lineTo(863,508);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(855,540,15,20);

//sneeuwvlok rechts
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(1200,525,80,0,2 * Math.PI);
ctx.moveTo(1200,447);
ctx.lineTo(1200,350);
ctx.moveTo(1280,525);
ctx.lineTo(1367,525);
ctx.moveTo(1200,607);
ctx.lineTo(1200,687);
ctx.moveTo(1120,525);
ctx.lineTo(1033,525);
ctx.moveTo(1200,406);
ctx.lineTo(1250,360);
ctx.moveTo(1200,406);
ctx.lineTo(1150,360);
ctx.moveTo(1300,525);
ctx.lineTo(1360,565);
ctx.moveTo(1300,525);
ctx.lineTo(1360,485);
ctx.moveTo(1200,620);
ctx.lineTo(1250,670);
ctx.moveTo(1200,620);
ctx.lineTo(1150,670);
ctx.moveTo(1100,525);
ctx.lineTo(1050,485);
ctx.moveTo(1100,525);
ctx.lineTo(1050,565);
ctx.moveTo(1255,475);
ctx.lineTo(1335,405);
ctx.moveTo(1280,450);
ctx.lineTo(1295,395);
ctx.moveTo(1280,450);
ctx.lineTo(1335,455);
ctx.moveTo(1260,580);
ctx.lineTo(1335,635);
ctx.moveTo(1280,595);
ctx.lineTo(1300,655);
ctx.moveTo(1280,595);
ctx.lineTo(1345,595);
ctx.moveTo(1140,580);
ctx.lineTo(1080,620);
ctx.moveTo(1125,585);
ctx.lineTo(1125,640);
ctx.moveTo(1125,585);
ctx.lineTo(1075,580);
ctx.moveTo(1150,465);
ctx.lineTo(1075,410);
ctx.moveTo(1120,445);
ctx.lineTo(1115,400);
ctx.moveTo(1120,445);
ctx.lineTo(1070,450);
ctx.closePath();
ctx.stroke();