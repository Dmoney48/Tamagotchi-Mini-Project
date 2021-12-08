console.log("Tamagotchu Fool!");

class Pet  {
    constructor(name,hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}//End of Class

class Tamagotchi extends Pet {
    constructor(name, hunger, sleepiness, boredom, age){
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 10;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
    feedPet(){
        this.hunger++
    }
    sleepyPet(){
        this.sleepiness = this.sleepiness - 3;
    }
    beBored(){
        this.boredom--
    }


}
let lightStatus = true;
const startButton = document.querySelector(`#Start`);
const tamaPet = new Tamagotchi ("");
const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const lightButton = document.querySelector('#lights');

const tamaGame = {
    // name: tamaPet.name,
    // hunger: tamaPet.hunger,
    // sleepiness: tamaPet.sleepiness,
    // boredom: tamaPet.boredom,
    // age: tamaPet.age,
    setHunger(){
        const intervalID = setInterval(() => {
            const hungryID = document.querySelector('#Hunger');
            hungryID.innerHTML = `Hunger: ${tamaPet.hunger}`;

            tamaPet.hunger--;

            if(tamaPet.hunger <= 0){
              alert(`Simple Jack, your pet ${tamaPet.name} has gone to HEAVEN now.`);
            //   document.querySelector('whatever your pet image is').src =(PLACE URL)
            clearInterval(intervalID);
            
            }
        }, 5000)
          feedButton.addEventListener("click", () =>{
            tamaPet.feedPet();
            const hungryID = document.querySelector('#Hunger');
            // console.log(tamaPet.hunger);
            hungryID.innerHTML = `Hunger: ${tamaPet.hunger}`
          })
    },

          
   letsPlay(){
        const intervalID = setInterval(() => {
            const boredID = document.querySelector('#Bored');
            boredID.innerHTML = `Boredom: ${tamaPet.boredom}`;
            // increment boredom
            tamaPet.boredom++// gonna call function here instead
            if(tamaPet.boredom >= 10){
                alert(`Simple Jack, your pet ${tamaPet.name} has gone to HEAVEN now.`);
            }
        }, 3500)
        const intervalID2 = setInterval(() => {
            const sleepyID = document.querySelector('#Sleepy');
            sleepyID.innerHTML = `Sleepiness: ${tamaPet.sleepiness}`;
            tamaPet.sleepiness++
            if(tamaPet.sleepiness >= 10){
                alert(`Simple Jack, your pet ${tamaPet.name} has gone to HEAVEN now.`);
            }
        }, 2500)
        playButton.addEventListener("click", () =>{
            tamaPet.beBored();
            const boredID = document.querySelector('#Bored');
            console.log(tamaPet.boredom);
            boredID.innerHTML = `Boredom: ${tamaPet.boredom}`;
          })
    },
    
   
   lightsOn(){
       lightStatus = !lightStatus;
       if(lightStatus){
        document.querySelector(`.bg-img`).src = `img/bg-day.gif`;
       }
       else{
            document.querySelector(`.bg-img`).src = `img/bg-night.gif`;
            tamaPet.sleepyPet();
            const sleepyID = document.querySelector('#Sleepy');
            console.log(tamaPet.sleepiness);
            sleepyID.innerHTML = `Sleepiness: ${tamaPet.sleepiness}`;
       }
       //Do logic to change the sleepy pts adding counter
   },

   growUP(){
    const intervalID = setInterval(() => {
        const ageID = document.querySelector('#Age');
        ageID.innerHTML = `Age: ${tamaPet.age}`;
        tamaPet.age++

        if(tamaPet.age == 2){
          window.confirm(`Egg-${tamaPet.name} is evolving!`);
          document.querySelector(`#Sprite`).src = 'img/yoshi.png';
          alert(`Egg-${tamaPet.name} is now Yoshi-${tamaPet.name}`);
        }

        if(tamaPet.age == 8){
            window.confirm(`Yoshi-${tamaPet.name} is evolving!`);
            document.querySelector(`#Sprite`).src = `img/godzilla.png`;
            alert(`Yoshi-${tamaPet.name} is now ${tamaPet.name}-Godzilla!`);

        }
      }, 10000)},
    
      setName () {
        tamaPet.name = prompt(`What is your pet's name?`,"Enter Name")
        const nameID = document.querySelector(`.name`);
        nameID.innerText = (`${tamaPet.name}`);
        },

   startGame(){
       tamaGame.setName();
       tamaGame.setHunger();
       tamaGame.growUP();
       tamaGame.letsPlay();
    //    tamaGame.lightsOn();
   },

   resetGame(){
       //return all values and such to start game function. 
   }
   
}//End of Object


startButton.addEventListener("click", (event)=>{
    event.target.disabled = true;
    tamaGame.startGame();
  })

  lightButton.addEventListener("click", (event)=>{
    tamaGame.lightsOn();
  })

//Made pet and can name it. Values for HUNGER,SLEEPY, BORED are set!
// hunger decreases but dies at 2
// also buttons to ... w/ return prompts




