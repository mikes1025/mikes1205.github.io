 const start = document.getElementById('start');
    const growthStrat = document.getElementById('growthStrat');
    const HQ = document.getElementById('HQ');
    const newBiz = document.getElementById('newBiz');
    const execTeam = document.getElementById('execTeam');
    const employeeEngage = document.getElementById('employeeEngage');
    const test = document.getElementById('test');

    const buttons = document.getElementsByClassName('buttons');

        // for loop to register click events, var 'items' is used for the elements
        for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', catchId);
    }

  let container = document.getElementById("container");
let animation;
let animationCompleted = true; 
let zoom;
let segmentPlaying=false;

animation = lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://mikes1025.github.io/mikes1205.github.io/yearinreviewData.json'
});

        // intro
        function time4Cake() {
    if (animationCompleted) {
      animation.goToAndPlay('main', true);    
      animationCompleted = false;
      zoom = 'in';
      console.log("cake expands");
    }
        }
              // growth strategy segment
        function time4Seer() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToA1', true);    
      animationCompleted = false;
      console.log("man visions");
        }
      }
        function time4Gadgetland() {
          if (animationCompleted) {
      animation.goToAndPlay('A1ToA2', true);    
      animationCompleted = false;
      console.log("Gears shift");
        }
      }
        function time4Car() {
          if (animationCompleted) {
      animation.goToAndPlay('a2ToA3', true);    
      animationCompleted = false;
      console.log("car races");
        }
      }
        function time4Spread() {
          if (animationCompleted) {
      animation.goToAndPlay('a3ToA4', true);    
      animationCompleted = false;
      console.log("manillas spread");
        }
      }
        function time4RS3() {
          if (animationCompleted) {
      animation.goToAndPlay('a4ToA5', true);    
      animationCompleted = false;
      console.log("seasons change");
        }
      }
        function growthStrategy2Main() {
          if (animationCompleted) {
      animation.goToAndPlay('a5ToMain', true);    
      animationCompleted = false;
      console.log("returning..");
        }
      }
            // headquarters seg
        function time4HQ() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToB1', true);    
      animationCompleted = false;
      console.log("lawn sprouts");
        }
      }
        function time4Circuit() {
          if (animationCompleted) {
      animation.goToAndPlay('b1ToB2', true);    
      animationCompleted = false;
      console.log("circuit lines flow");
        }
      }
        function time4BoxNPlant() {
          if (animationCompleted) {
      animation.goToAndPlay('b2ToB3', true);    
      animationCompleted = false;
      console.log("box flies and plant grows");
        }
      }
        function time4Satellites() {
          if (animationCompleted) {
      animation.goToAndPlay('b2Continued', true);    
      animationCompleted = false;
      console.log("satellites link");
        }
      }
        function HQ2Main() {
          if (animationCompleted) {
      animation.goToAndPlay('b3ToMain', true);    
      animationCompleted = false;
      console.log("returning");
        }
      }
            // new business seg
        function time4Traffic() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToC1', true);    
      animationCompleted = false;
      console.log("traffic goes");
        }
      }
        function time4Clean() {
          if (animationCompleted) {
      animation.goToAndPlay('c1ToC2', true);    
      animationCompleted = false;
      console.log( "manilla opens");
        }
      }
        function time4Cabinet() {
          if (animationCompleted) {
      animation.goToAndPlay('c2ToC3', true);    
      animationCompleted = false;
      console.log( "cabinet files");
        }
      }
        function time4Manilla() {
          if (animationCompleted) {
      animation.goToAndPlay('c3ToC4', true);    
      animationCompleted = false;
      console.log( "manilla expands text");
        }
      }
        function time4Service() {
          if (animationCompleted) {
      animation.goToAndPlay('C4ToC5', true);    
      animationCompleted = false;
      console.log( "service delivery loads");
        }
      }
        function serviceDel2Main() {
          if (animationCompleted) {
      animation.goToAndPlay('C5ToMain', true);    
      animationCompleted = false;
      console.log( "returning.. ");
        }
      }
            // executive team
        function time4Points() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToD1', true);    
      animationCompleted = false;
      console.log( "book bounces ");
        }
      }
        function points2Main() {
          if (animationCompleted) {
      animation.goToAndPlay('D1ToMain', true);    
      animationCompleted = false;
      console.log( "returning.. ");
        }
      }
            // employee engagement
        function time4Assignments() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToE1', true);    
      animationCompleted = false;
      console.log( "manillas sort");
        }
      }
        function time4Signature() {
          if (animationCompleted) {
      animation.goToAndPlay('E1ToE2', true);
      animationCompleted = false;
      console.log( "pens raise");
        }
      }
        function time4Nodes() {
          if (animationCompleted) {
      animation.goToAndPlay('E2ToE3', true);    
      animationCompleted = false;
      console.log( "nodes connect");
        }
      }
        function executiveTeam2Main() {
          if (animationCompleted) {
      animation.goToAndPlay('E3ToMain', true);    
      animationCompleted = false;
      console.log( "nodes connect");
        }
      }
      // page zoom
        function main2FullPage() {
          if (animationCompleted) {
      animation.goToAndPlay('mainToFull', true);    
      animationCompleted = false;
      zoom = 'out';
      console.log( "art zooms out");
        }
      }
        function fullPg2Main() {
          if (animationCompleted) {
      // animation.setDirection(-1); 
      animation.goToAndPlay('fullToMain', true);
      animationCompleted = false;
      zoom = 'in';
      console.log( "art zooms in");
        }
      }

      // registers clicked button ID values..
      function catchId() {
        if(!animationCompleted){
          console.log('animation playing');
        } else{
          cursor = this.id;
        }
      }

      function sortListener(){
       //intro
      if(cursor === 'start' && animationCompleted) {
      changeElements();
      //zooming
        } else if(cursor === 'zoomOut' && zoom ==='in'&& animationCompleted && !segmentPlaying){
          main2FullPage();
        } else if(cursor === 'zoomIn' && zoom ==='out' && animationCompleted && !segmentPlaying){
          fullPg2Main();
    } else if(cursor === 'main' && animationCompleted && !segmentPlaying) {
      time4Cake();
      // growth strategy segment
    } else if(cursor === 'mainToA1' && animationCompleted && zoom ==='in' && !segmentPlaying) {
      segmentPlaying=true;
      time4Seer();
    } else if(cursor === 'A1ToA2' && animationCompleted && segmentPlaying) {
      time4Gadgetland();
    } else if(cursor === 'a2ToA3' && animationCompleted && segmentPlaying) {
      time4Car();
    } else if(cursor === 'a3ToA4' && animationCompleted && segmentPlaying) {
      time4Spread();
    } else if(cursor === 'a4ToA5' && animationCompleted && segmentPlaying) {
      time4RS3();
    } else if(cursor === 'a5ToMain' && animationCompleted && segmentPlaying) {
      growthStrategy2Main();
      // headquarters seg
    } else if(cursor === 'mainToB1' && animationCompleted && zoom ==='in' && !segmentPlaying) {
      segmentPlaying=true;
      time4HQ();
    } else if(cursor === 'b1ToB2' && animationCompleted && segmentPlaying) {
      time4Circuit();
    } else if(cursor === 'b2ToB3' && animationCompleted && segmentPlaying) {
      time4BoxNPlant();
    } else if(cursor === 'b2Continued' && animationCompleted && segmentPlaying) {
      time4Satellites();
    } else if(cursor === 'b3ToMain' && animationCompleted && segmentPlaying) {
      HQ2Main();
      // new business seg
    } else if(cursor === 'mainToC1' && animationCompleted && zoom ==='in' && !segmentPlaying) {
      segmentPlaying=true;
      time4Traffic();
    } else if(cursor === 'c1ToC2' && animationCompleted && segmentPlaying) {
      time4Clean();
    } else if(cursor === 'c2ToC3' && animationCompleted && segmentPlaying) {
      time4Cabinet();
    } else if(cursor === 'c3ToC4' && animationCompleted && segmentPlaying) {
      time4Manilla();
    } else if(cursor === 'C4ToC5' && animationCompleted && segmentPlaying) {
      time4Service();
    } else if(cursor === 'C5ToMain' && animationCompleted && segmentPlaying) {
      serviceDel2Main();
      // executive team
    } else if(cursor === 'mainToE1' && animationCompleted &&  zoom ==='in' && !segmentPlaying) {
      segmentPlaying=true;
      time4Assignments();
    } else if(cursor === 'E1ToE2' && animationCompleted && segmentPlaying) {
      time4Signature();
    } else if(cursor === 'E2ToE3' && animationCompleted && segmentPlaying) {
      time4Nodes();
    } else if(cursor === 'E3ToMain' && animationCompleted && segmentPlaying) {
      executiveTeam2Main();
      // employee engagement
    } else if(cursor === 'mainToD1' && animationCompleted && zoom ==='in' && !segmentPlaying) {
      segmentPlaying=true;
      time4Points();
    } else if(cursor === 'D1ToMain' && animationCompleted && segmentPlaying) {
      points2Main();         
    } else {
      console.log('listener not sorted');
    }
      }

      function changeElements() {
        // intro
        if(cursor === 'start' && animationCompleted) {
      start.innerHTML= "main";
      start.id= "main";
    } else if(cursor === 'main' && !animationCompleted) {
      test.innerHTML ="zoom out";
      test.id='zoomOut';
      growthStrat.innerHTML= "growth strategy";
      growthStrat.id= "mainToA1";
      HQ.innerHTML="headquarters";
      HQ.id="mainToB1";
      newBiz.innerHTML="new business";
      newBiz.id="mainToC1";
      execTeam.innerHTML="executive team";
      execTeam.id="mainToE1";
      employeeEngage.innerHTML="employee engagement";
      employeeEngage.id="mainToD1";
      //zooming
     } else if(cursor === 'zoomIn' && !animationCompleted && zoom === 'in'){

        test.innerHTML='zoom out';
        test.id='zoomOut'
    } else if(cursor === 'zoomOut' && animationCompleted && zoom === 'out'){

test.innerHTML='zoom out';
test.id='zoomOut'
}else if(cursor === 'zoomIn' && animationCompleted && zoom === 'in'){

test.innerHTML='zoom out';
test.id='zoomOut'
}else if(cursor ==='zoomOut'&& !animationCompleted && zoom === 'out') {

      test.innerHTML='zoom in';
      test.id='zoomIn';
      // growth strategy seg
    } else if(cursor === 'mainToA1' && !animationCompleted && segmentPlaying) {
      growthStrat.innerHTML = "play";
      growthStrat.id= "A1ToA2";
    } else if(cursor === 'A1ToA2' && !animationCompleted && segmentPlaying) {
      growthStrat.innerHTML = "play";
      growthStrat.id= "a2ToA3";
    } else if(cursor === 'a2ToA3' && !animationCompleted && segmentPlaying) {
      growthStrat.innerHTML = "play";
      growthStrat.id= "a3ToA4";
    } else if(cursor === 'a3ToA4' && !animationCompleted && segmentPlaying) {
      growthStrat.innerHTML = "play";
      growthStrat.id= "a4ToA5";
    } else if(cursor === 'a4ToA5' && !animationCompleted && segmentPlaying) {
      growthStrat.innerHTML = "play";
      growthStrat.id= "a5ToMain";
    } else if(cursor === 'a5ToMain' && !animationCompleted && segmentPlaying) {
      segmentPlaying=false;

      growthStrat.innerHTML = "growth strategy";
      growthStrat.id= "mainToA1";
      // headquarter seg
    } else if(cursor === 'mainToB1' && !animationCompleted && segmentPlaying) {
      HQ.innerHTML = "play";
      HQ.id= "b1ToB2";
    } else if(cursor === 'b1ToB2' && !animationCompleted && segmentPlaying) {
      HQ.innerHTML = "play";
      HQ.id= "b2ToB3";
    } else if(cursor === 'b2ToB3' && !animationCompleted && segmentPlaying) {
      HQ.innerHTML = "play";
      HQ.id= "b2Continued";
    } else if(cursor === 'b2Continued' && !animationCompleted && segmentPlaying) {
      HQ.innerHTML = "play";
      HQ.id= "b3ToMain";
    } else if(cursor === 'b3ToMain' && !animationCompleted && segmentPlaying) {
      segmentPlaying=false;

      HQ.innerHTML = "headquarters";
      HQ.id= "mainToB1";
      // new business seg
    } else if(cursor === 'mainToC1' && !animationCompleted && segmentPlaying) {
      newBiz.innerHTML = "play";
      newBiz.id= "c1ToC2";
    }  else if(cursor === 'c1ToC2' && !animationCompleted && segmentPlaying) {
      newBiz.innerHTML = "play";
      newBiz.id= "c2ToC3";
    }  else if(cursor === 'c2ToC3' && !animationCompleted && segmentPlaying) {
      newBiz.innerHTML = "play";
      newBiz.id= "c3ToC4";
    }  else if(cursor === 'c3ToC4' && !animationCompleted && segmentPlaying) {
      newBiz.innerHTML = "play";
      newBiz.id= "C4ToC5";
      // service delivery seg -added
    }  else if(cursor === 'C4ToC5' && !animationCompleted && segmentPlaying) {
      newBiz.innerHTML = "play";
      newBiz.id= "C5ToMain";
    }  else if(cursor === 'C5ToMain' && !animationCompleted && segmentPlaying) {
      segmentPlaying=false;

      newBiz.innerHTML = "new business";
      newBiz.id= "mainToC1";
      // executive team seg
    }  else if(cursor === 'mainToE1' && !animationCompleted && segmentPlaying) {
      
      execTeam.innerHTML = "play";
      execTeam.id= "E1ToE2";
    }  else if(cursor === 'E1ToE2' && !animationCompleted && segmentPlaying) {
      execTeam.innerHTML = "play";
      execTeam.id= "E2ToE3";
    }  else if(cursor === 'E2ToE3' && !animationCompleted && segmentPlaying) {
      execTeam.innerHTML = "play";
      execTeam.id= "E3ToMain";
    }  else if(cursor === 'E3ToMain' && !animationCompleted && segmentPlaying) {
      segmentPlaying=false;

      execTeam.innerHTML = "executive team";
      execTeam.id= "mainToE1";
      // employee engagement seg
    }  else if(cursor === 'mainToD1' && !animationCompleted && segmentPlaying) {
      employeeEngage.innerHTML = "play";
      employeeEngage.id= "D1ToMain";
    }  else if(cursor === 'D1ToMain' && !animationCompleted && segmentPlaying) {
      segmentPlaying=false;

      employeeEngage.innerHTML = "employee engagement";
      employeeEngage.id= "mainToD1";
    }  else {
      console.log('element not changed');
    }
      }

animation.addEventListener("DOMLoaded", () => {
  console.log('lottie loaded!');
});

animation.addEventListener("complete", () => {  //"complete" is loop end, this line makes variable 'animationCompleted'(false on play) true again
  // animationCompleted = true;
  // console.log("checking for sequence..");
      
  // .. may not need conditioning for loopends, trying this code instead
      changeElements();
      cursor = null;
      animationCompleted = true;
      console.log("loop completed ");


      // if(cursor === 'start' && animationCompleted) {
  //   animation.goToAndPlay('textLine', true);    
  //     animationCompleted = false;
  //     console.log("line flows");
  //     changeElements();
  //     cursor = null;  
  // } else {
  //   console.log("loop completed ")
  // }
  });

  start.addEventListener('click', () => { // add a click event listener
sortListener();
 });
 growthStrat.addEventListener('click', () => { // add a click event listener
sortListener();
 });
 HQ.addEventListener('click', () => { // add a click event listener
sortListener();
 });
 newBiz.addEventListener('click', () => { // add a click event listener
sortListener();
 });
 execTeam.addEventListener('click', () => { // add a click event listener
sortListener();
 });
 employeeEngage.addEventListener('click', () => { // add a click event listener
sortListener();
 });


test.addEventListener('click', () => { // add a click event listener
  sortListener();
 });
