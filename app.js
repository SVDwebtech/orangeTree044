// app logic
const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');
const navItem6 = document.querySelector('.navItem6');
const navItem7 = document.querySelector('.navItem7');
const navItem8 = document.querySelector('.navItem8');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');

const footer = document.querySelector('.footer');

const hero = document.querySelector('.heroSection');

////////////////////////////////////////////////////////////////////////////////////////
// cardPhoto variables
///////////////////////////////////////////////////////////////////////////////////////

const cardPhotos = document.querySelectorAll(".photoCollage__cardPhoto");

for(let card of cardPhotos) {
  card.addEventListener('click', function(){
    card.classList.toggle("rotateCard");
  })
};

// //////////////////////////////////////////////////////////////////////////////////////////
// // Terms and Conditions pop-up logic
// //////////////////////////////////////////////////////////////////////////////////////////
const termsAndConditionsBtn = document.querySelector('.termsAndConditionsBtn');
const tsAndCsCloseBtn = document.querySelector('.termsAndConditionsCloseBtn');
const tsAndCs = document.querySelector('.tsAndCs');

termsAndConditionsBtn.addEventListener('click', function() {
  if(tsAndCs.classList.contains('hidden')) {
    tsAndCs.classList.remove('hidden');
  } 
});

tsAndCsCloseBtn.addEventListener('click', function() {
      tsAndCs.classList.add('hidden');
});


/////////////////////////////////////////////////////////////////////////////////////////

let footerHeight = footer.offsetHeight;
// hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
console.log(`${window.innerHeight - footerHeight}px`);

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});


window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
  // hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      // footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
      navItem5.style.animationDelay = '1.10s';
      navItem6.style.animationDelay = '1.20s';
      navItem7.style.animationDelay = '1.30s';
      navItem8.style.animationDelay = '1.40s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  setTimeout(() => {
    if(window.scrollY > 200) 
    {  
      // footer.style.position = "static";
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }

    else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone'))
    {
      // footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
      termsAndConditions.classList.add('termsAndConditions-displayNone');
      legalOpenIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.add('openAndCloseIcons__icon--displayNone');
      
    }
  }, 500);
   
}

for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);

    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);

    setTimeout(() => {
      if(window.scrollY < 200 ){
        // footer.style.position = "fixed";
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
  });
}

/////////////////////////////////////////////////////////////////////////////////
// carousel logic
/////////////////////////////////////////////////////////////////////////////////

const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
const index = document.querySelectorAll('.index');
// const service = document.querySelectorAll('.service');
const card = document.querySelectorAll('.cardCarousel');

let counter = 0

leftBtn.addEventListener('click', function(){
    if(counter === 0){
      index[counter].classList.remove('highlightIndex');
      index[index.length - 1].classList.add('highlightIndex');

      // service[counter].classList.remove('highlightBorder');
      // service[service.length - 1].classList.add('highlightBorder');

      card[counter].classList.remove('visible');
      card[counter].classList.add('hidden');
      card[card.length - 1].classList.remove('hidden');
      card[card.length - 1].classList.add('visible');

      counter = index.length - 1;
    } else {
      index[counter].classList.remove('highlightIndex');
      index[counter - 1].classList.add('highlightIndex');

      // service[counter].classList.remove('highlightBorder');
      // service[counter - 1].classList.add('highlightBorder');

      card[counter].classList.remove('visible');
      card[counter].classList.add('hidden');
      card[counter - 1].classList.remove('hidden');
      card[counter - 1].classList.add('visible');

      counter--;
    }
})

rightBtn.addEventListener('click', function(){
    if(counter === 4){
      index[counter].classList.remove('highlightIndex');
      index[0].classList.add('highlightIndex');

      // service[counter].classList.remove('highlightBorder');
      // service[0].classList.add('highlightBorder');

      card[counter].classList.remove('visible');
      card[counter].classList.add('hidden');
      card[0].classList.remove('hidden');
      card[0].classList.add('visible');

      counter = 0;
    } else {
      index[counter].classList.remove('highlightIndex');
      index[counter + 1].classList.add('highlightIndex');

      // service[counter].classList.remove('highlightBorder');
      // service[counter + 1].classList.add('highlightBorder');

      card[counter].classList.remove('visible');
      card[counter].classList.add('hidden');
      card[counter + 1].classList.add('visible');
      card[counter + 1].classList.remove('hidden');

      counter++;
    }
})

/////////////////////////////////////////////////////////////////////////////////
// loyalty club pop up
/////////////////////////////////////////////////////////////////////////////////

const loyaltyClubBtn = document.querySelector('.loyaltyClubBtn');
const loyaltyClubCloseBtn = document.querySelector('.loyaltyClubCloseBtn');
const loyaltyClubPopUp = document.querySelector('.loyaltyClubPopUp');

loyaltyClubBtn.addEventListener('click', function(){
  loyaltyClubPopUp.classList.remove('hidden');
});

loyaltyClubCloseBtn.addEventListener('click', function(){
  loyaltyClubPopUp.classList.add('hidden');
});

/////////////////////////////////////////////////////////////////////////////////
// copyright line break
/////////////////////////////////////////////////////////////////////////////////
const copyrightRights = document.querySelector('.copyright__rights');

window.addEventListener('resize', function(){
  let windowWidth = window.innerWidth;

  if(windowWidth >= 600) {
    copyrightRights.classList.remove('displayBlock');
  } else {
    copyrightRights.classList.add('displayBlock');
  } 
})

//////////////////////////////////////////////////////////////////////////////