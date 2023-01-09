var characterName=document.querySelector('.character_name');
var characterHealth=document.querySelector('.character_health');
var characterPower=document.querySelector('.character_power');
var enemyHealth=document.querySelector('.enemy_health');
var enemyPower=document.querySelector('.enemy_power')
var characterNickName=document.querySelector('.character_nickname');
var aboutYourChoose=document.querySelector('.character_themselves');
var characters=document.querySelectorAll('.characters');
var enemyChoose=document.querySelector('.enemy_choose');
var chosen_enemy=document.querySelector('.chosen_enemy');
var sectionTwo=document.querySelector('.sectionTwo');
var sectionOne=document.querySelector('.sectionOne');
var firstButton=document.querySelector('.first_button');
var yourself=document.querySelector('.yourself');
var enemyWar=document.querySelector('.enemy_war');
var thirdDiv=document.querySelector('.thirdDiv');
var h2_first=document.querySelector('.h2_first');
var ePower=document.querySelector('.e_power');
var eHealth=document.querySelector('.e_health');
var yPower=document.querySelector('.y_power');
var yHealth=document.querySelector('.y_health');
var yName=document.querySelector('.y_name');
var eName=document.querySelector('.e_name');
var shot=document.querySelector('.shot');
var defense=document.querySelector('.defense');
var box1=document.querySelector('.box_1');
var box2=document.querySelector('.box_2');
var box3=document.querySelector('.box_3');
var box4=document.querySelector('.box_4');
var secondDiv=document.querySelector('.second_div');
var Third_div=document.querySelector('.third_div');
var firstChosen=null;
var lastChosen=null;
var box1isDiv2=false;
var box2isDiv2=false;
var box3isDiv2=false;
var box4isDiv2=false;
var y_health=10;
var e_health=10;

box1.onclick=function(){

    if(firstChosen==null){
        if(box1isDiv2==false){
            firstChosen=box1
            aboutYourChoose.append(box1)
            secondDiv.append(box2)
            secondDiv.append(box3)
            secondDiv.append(box4)  
            box1isDiv2=true
            box1.style.backgroundColor='rgb(0, 165, 0)'
            enemyChoose.innerText='Choose Your Enemy:'
            enemyChoose.style.color='red'
            h2_first.style.display='none'
            characterName.innerText=`Your chosen is ${this.dataset.name}`
            characterHealth.innerText=`Health: ${this.dataset.health}`
            characterPower.innerText=`Power: ${this.dataset.power}`
            
        }
        
        

    }else if(lastChosen==null){
        if(box1isDiv2==false){
           lastChosen=box1
           thirdDiv.append(box1)
           enemyChoose.innerText='Characters Selected'
           box1.style.backgroundColor='red'
           chosen_enemy.innerText=`Your enemy is ${this.dataset.name}`
           enemyHealth.innerText=`Health: ${this.dataset.health}`
           enemyPower.innerText=`Power: ${this.dataset.power}`
        }
        

    }
}

box2.onclick=function(){

    if(firstChosen==null){
        if(box2isDiv2==false){
            firstChosen=box2
            aboutYourChoose.append(box2)
            secondDiv.append(box1)
            secondDiv.append(box3)
            secondDiv.append(box4)  
            box2isDiv2=true
            box2.style.backgroundColor='rgb(0, 165, 0)'
            enemyChoose.innerText='Choose Your Enemy:'
            enemyChoose.style.color='red'
            h2_first.style.display='none'
            characterName.innerText=`Your chosen is ${this.dataset.name}`
            characterHealth.innerText=`Health: ${this.dataset.health}`
            characterPower.innerText=`Power: ${this.dataset.power}`
        }
        
        

    }else if(lastChosen==null){
        if(box2isDiv2==false){
           lastChosen=box2
           thirdDiv.append(box2) 
           enemyChoose.innerText='Characters Selected'
           box2.style.backgroundColor='red'
           chosen_enemy.innerText=`Your enemy is ${this.dataset.name}`
           enemyHealth.innerText=`Health: ${this.dataset.health}`
           enemyPower.innerText=`Power: ${this.dataset.power}`
        }
        

    }
}

box3.onclick=function(){

    if(firstChosen==null){
        if(box3isDiv2==false){
            firstChosen=box3
            aboutYourChoose.append(box3)
            secondDiv.append(box1)
            secondDiv.append(box2)
            secondDiv.append(box4)  
            box3isDiv2=true
            box3.style.backgroundColor='rgb(0, 165, 0)'
            enemyChoose.innerText='Choose Your Enemy:'
            enemyChoose.style.color='red'
            h2_first.style.display='none'
            characterName.innerText=`Your chosen is ${this.dataset.name}`
            characterHealth.innerText=`Health: ${this.dataset.health}`
            characterPower.innerText=`Power: ${this.dataset.power}`
        }
        
        

    }else if(lastChosen==null){
        if(box3isDiv2==false){
           lastChosen=box3
           thirdDiv.append(box3)
           enemyChoose.innerText='Characters Selected'
           box3.style.backgroundColor='red'
           chosen_enemy.innerText=`Your enemy is ${this.dataset.name}`
           enemyHealth.innerText=`Health: ${this.dataset.health}`
           enemyPower.innerText=`Power: ${this.dataset.power}` 
           
        }
        

    }
}

box4.onclick=function(){

    if(firstChosen==null){
        if(box4isDiv2==false){
            firstChosen=box4
            aboutYourChoose.append(box4)
            secondDiv.append(box1)
            secondDiv.append(box2)
            secondDiv.append(box3)  
            box4isDiv2=true
            box4.style.backgroundColor='rgb(0, 165, 0)'
            enemyChoose.innerText='Choose Your Enemy:'
            enemyChoose.style.color='red'
            h2_first.style.display='none'
            characterName.innerText=`Your chosen is ${this.dataset.name}`
            characterHealth.innerText=`Health: ${this.dataset.health}`
            characterPower.innerText=`Power: ${this.dataset.power}`
        }
        
        

    }else if(lastChosen==null){
        if(box4isDiv2==false){
           lastChosen=box4
           thirdDiv.append(box4) 
           enemyChoose.innerText='Characters Selected'
           box4.style.backgroundColor='red'
           chosen_enemy.innerText=`Your enemy is ${this.dataset.name}`
           enemyHealth.innerText=`Health: ${this.dataset.health}`
           enemyPower.innerText=`Power: ${this.dataset.power}` 
        }
        

    }
}

firstButton.onclick=function(){
    sectionOne.style.display='none'
    sectionTwo.style.display='block'
    yourself.append(firstChosen)
    enemyWar.append(lastChosen)
    yPower.innerText=`${firstChosen.dataset.power}`
    yHealth.innerText=`${firstChosen.dataset.health}`
    ePower.innerText=`${lastChosen.dataset.power}`
    eHealth.innerText=`${lastChosen.dataset.health}`
    yName.innerText=`${firstChosen.dataset.name}`
    eName.innerText=`${lastChosen.dataset.name}`

shot.onclick=function(){
    var number= Math.floor(Math.random()*(50-30)+30);
    lastChosen.dataset.power =parseInt(lastChosen.dataset.power) - number
    ePower.innerText=`${lastChosen.dataset.power}`
    firstChosen.dataset.power = parseInt(firstChosen.dataset.power)- number
    yPower.innerText=`${firstChosen.dataset.power}`

    if(parseInt(lastChosen.dataset.power)<0){
        
        e_health--
        eHealth.innerText=e_health
        ePower.innerText=`${lastChosen.dataset.power}`
        yPower.innerText=`${firstChosen.dataset.power}`
        if(e_health==0){
            alert('Game over')
            eHealth.innerText=`${lastChosen.dataset.health}`

        }
        alert('You win')
       
    }
    if(parseInt(firstChosen.dataset.power)<0){
        
        y_health--
        yHealth.innerText=y_health
        ePower.innerText=`${lastChosen.dataset.power}`
        yPower.innerText=`${firstChosen.dataset.power}`
        if(y_health==0){
            alert('Game over')
            yHealth.innerText=`${firstChosen.dataset.health}`

        }alert('You lost')
        

    }
        
}





}