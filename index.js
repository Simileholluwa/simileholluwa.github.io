const allSections = document.querySelectorAll('.main--content');
const sectionButtons = document.querySelectorAll('.controls');
const sections = document.querySelectorAll('.section');
const sectionButton = document.querySelectorAll('.control');
function PageTransitions(){
        
    for (let i =0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active--btn');
            currentButton[0].className = currentButton[0].className.replace('active--btn', '');
            this.className += 'active--btn';
            })
    }  
    allSections[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
          sectionButtons.forEach((btn) => {
            btn.classList.remove('active')
          })
          //e.target.classList.add('active');

          sections.forEach((section) => {
            section.classList.remove('active')
          })

          const element = document.getElementById(id);
          element.classList.add('active');

        }
      })
}

PageTransitions();