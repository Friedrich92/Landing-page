const arrow = document.querySelector('.arrow'); 
const arrowsCustomer = document.querySelectorAll('.arrow-wrapper__customer .arrow');
const arrowsAmount = document.querySelectorAll('.arrow-wrapper__amount .arrow');
const arrowsAmountDown = document.querySelectorAll('.arrow-wrapper__amount-down .arrow');

const arrowsStepsTop = document.querySelectorAll('.arrow-wrapper__steps-top .arrow');
const arrowsStepsMiddle = document.querySelectorAll('.arrow-wrapper__steps-middle .arrow');
const arrowsStepsBottom = document.querySelectorAll('.arrow-wrapper__steps-bottom .arrow');

class Arrows{
    constructor(arrows){
        this.arrows = arrows;
    }

    runArrows(){
        let arrows = this.arrows;
        let count = 0;
        let lastArrow = arrows[arrows.length-1];
        
        return function () {
        
            if (!(lastArrow.classList.contains('active'))) {
        
                arrows[count].classList.remove('active');
                arrows[count].nextElementSibling.classList.add('active');
        
                return count = ++count;
        
            }
            else {
                lastArrow.classList.remove('active');
                arrows[0].classList.add('active');
        
                return count = 0;
            }
        
        }
        
    }

}

const customerArrows = new Arrows(arrowsCustomer);
const amountArrows = new Arrows(arrowsAmount);
const amountArrowsDown = new Arrows(arrowsAmountDown);

const stepsTopArrows = new Arrows(arrowsStepsTop);
const stepsMiddleArrows = new Arrows(arrowsStepsMiddle);
const stepsBottomArrows = new Arrows(arrowsStepsBottom);

setInterval(customerArrows.runArrows(), 500);
setInterval(amountArrows.runArrows(), 500);
setInterval(amountArrowsDown.runArrows(), 500);

setInterval(stepsTopArrows.runArrows(), 500);
setInterval(stepsMiddleArrows.runArrows(), 500);
setInterval(stepsBottomArrows.runArrows(), 500);




