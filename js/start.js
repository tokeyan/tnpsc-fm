const question = document.querySelector('#question');
const progressText = document.querySelector('#progress-text');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let availableQuestion = [];
let score = 0;
let acceptingAnswer = true;
let questionCounter = 0;

let questions = [
   {
        question:"சர்வதேச போதைபொருள் ஒழிப்பு தினம் கொண்டாடப்படும் நாள்?",
        choice1:"June 26",
        choice2:"July 15",
        choice3:"May 21",
        choice4:"July 1",
        
        answer:1
        
     },
     {
        question:"கல்பனா சாவ்லா பிறந்த மாநிலம்?",
        choice1:"ஹரியானா",
        choice2:"டெல்லி",
        choice3:"பஞ்சாப்",
        choice4:"அஸ்ஸாம்",
        answer: 3
        
     },
     {
        question:"2020ம் ஆண்டிற்கான உலக நடனக்கலைஞர் விருதை வென்ற முதல் இந்தியர்?",
        choice1:"பிரபுதேவா",
        choice2:"சுரேஷ்முகுந்த்",
        choice3:"ராகவாலாரான்ஸ்",
        choice4:"கிஜ்லு",
        
        answer:2
     },
     {
        question:"குளுகோஸ் வேதிவாய்பாடு",
        choice1:"C6 H12 06",
        choice2:"C12 H21 011",
        choice3:"CHO",
        choice4:"CHO6",
        
        answer:1
     },
     {
        question:"ஆழ்கடல் முத்துகுளிப்பதில் பயன்படுத்தப்படும் வாயு?",
        choice1:"N2-O",
        choice2:"H2",
        choice3:"He-O",
        choice4:"Ar",

        answer:3
        
     },
     {
        question:"பொருளின் SI அலகு?",
        choice1:"ஹெர்ட்ஸ்",
        choice2:"மோல்",
        choice3:"குயர்",
        choice4:"ஆம்பியர்",
        
        answer:2   
     },
     {
      question:"நந்தினி பள்ளிக்கு மதிய உணவு கொண்டுவரும் நெகிழிகலனாது குறியீடு 5 உடைய ரெசினால் ஆனது.அப்படி எனில் அந்த நெகிழிக்கலன் எதனால் தயாரிக்கப்பட்டிருக்கும்?",
      choice1:"PVC",
      choice2:"PS",
      choice3:"PP",
      choice4:"PET",

answer: 3

  },

  {
      question:"பாக்டீரியாவியலின் தந்தை என்று அழைக்கப்படுபவர்?",
      choice1:"இராபார்ட்காச்",
      choice2:"ரொனால்ட்ராஸ்",
      choice3:"ஆண்டன் வான்லூவன்காக்",
      choice4:"ஜேம்ஸ் சாட்வீக்",
      
      answer: 1
      
  },

  {
      question:"பூமியின் விடுபடுதிசைவேகம் (EscapeVelocity)?",
      choice1:"5.6 Km/s",
      choice2:"2.5 Km/s",
      choice3:"11.2 Km/s",
      choice4:"60 Km/s",

answer:3


  },

  {
      question:"ஆசியாவின் முதல் புற்றுநோய் மருத்துவமனை?",
      choice1:"அடையார் மருத்துவமனை",
      choice2:"அப்பலோ மருத்துவமனை",
      choice3:"கிழக்கிந்தியக் புற்றுநோய் மருத்துவமனை",
      choice4:"டாடா மருத்துவமனை",

answer:4

  },

  {
      question:"பிரதமமந்திரி பயிர்க்காப்பீடு திட்டம் தொடங்கப்பட்ட ஆண்டு",
      choice1:"July 1,2016",
      choice2:"July 1,2015",
      choice3:"March 31,2016",
      choice4:"Feb 16,2016",

answer:4

      
  },

  {
      question:"தலைக்கோட்டைப்போர் நடைபெற்ற ஆண்டு?",
      choice1:"1565",
      choice2:"1402",
      choice3:"1478",
      choice4:"1511",

answer:1

  },

  {
      question:"விவசாய விலைக்குழு தொடங்கப்பட்டஆண்டு?",
      choice1:"2001",
      choice2:"1956",
      choice3:"1965",
      choice4:"1991",

answer:3

  },

  {
      question:"தமிழ்நாட்டின் முதல் டிஜிட்டல் கிராமம்?",
      choice1:"வத்தலகுண்டு",
      choice2:"நாச்சியார்புரம்",
      choice3:"வெம்பூர்",
      choice4:"அம்மனூர்",

answer:4

  },

  {
      question:"மழை நீரிலுள்ள வைட்டமின்?",
      choice1:"Vitamin B5",
      choice2:"Vitamin B2",
      choice3:"Vitamin B12",
      choice4:"Vitamin D",
      
      answer:3
      
  },

  {
      question: "மண்அரிப்பினால் அதிகம் பாதிக்கப்பட்டுள்ள மாவட்டம்?",
      choice1:"திண்டுக்கல்",
      choice2:"தேனி",
      choice3:"நாமக்கல்",
      choice4:"நீலகிரி",

      answer: 2
  },

 
  {
      question:"பறக்கும் சீக்கியர் என்று அழைக்கப்படுபவர்?",
choice1:"மில்காசிங்",
choice2:"உசைன்போல்ட்",
choice3:"தோமார்சிங்",
choice4:"அர்ஜுன்அலி",

answer:1

   },
   {
      question:"பறக்கும் சீக்கியர் என்று அழைக்கப்படுபவர்?",
      choice1:"மில்காசிங்",
      choice2:"உசைன்போல்ட்",
      choice3:"தோமார்சிங்",
      choice4:"அர்ஜுன்அலி",

answer:1

   },
   {
      question:"தமிழாக்கம்தருக: Central Government",
      choice1:"மத்தியஅரசு",
      choice2:"ஒன்றியஅரசு",
      choice3:"ஊராட்சிஒன்றியம்",
      choice4:"மாநிலஅரசு",
      
      answer:2
      
   },
   {
      question:"கழுகுமலை கோவிலை கட்டியவர்",
      choice1:"பாண்டிய நெடுஞ்சழியன்",
      choice2:"முதலாம் பராந்தகன்",
      choice3:"பராந்தக நெடுஞ்சடையான்",
      choice4:"மகேந்திரவர்மன்",
      
      answer:3
      
   },
   {
      question:"தோட்டப்பயிர்களின் பூமி என்று அழைக்கப்படும் நகரம்?",
      choice1:"தேனி",
      choice2:"கிருஷ்ணகிரி",
      choice3:"சேலம்",
      choice4:"தருமபுரி",
      
      answer:4
      

   },
   {
      question:"சர்வதேச பால் தினம் (MILK DAY) கொண்டாடப்படும் நாள்?",
      choice1:"June 1",
      choice2:"July 15",
      choice3:"May 21",
      choice4:"July 1",

answer:1

   },
   {
      question:"நீரில் கரையும் வைட்டமின்கள்?",
      choice1:"Vitamin B",
      choice2:"Vitamin C",
      choice3:"Vitamin D",
      choice4:"A & B",

      answer: 4
      
   },
   {
      question:"இடிஅமின் பிறந்த நாடு?",
      choice1:"உகாண்டா",
      choice2:"லிபியா",
      choice3:"கானா",
      choice4:"கினிகுடியரசு",

answer:1

   },
   {
      question:"உமறுப்புலவர் பிறந்த ஊர்?",
      choice1:"காஞ்சிபுரம்",
      choice2:"நாகலாபுரம்",
      choice3:"வெம்பூர்",
      choice4:"தென்காசி",
      
      answer:2
      

   },
   {
      question:"(AirBag) ஏர்பேக்குகளில் பயன்படுத்தப்படும் வாயு?",
      choice1:"N2",
      choice2:"H2",
      choice3:"NaN3",
      choice4:"H20",
      
      answer:3
   },
   {
      question:"மழைநீரின் PH மதிப்பு?",
      choice1:"7",
      choice2:"5.6",
      choice3:"7.8",
      choice4:"4.5",
      
      answer:2
      
   },

   {
      question:"ரஷ்யாவின் ஸ்புட்னிக்-V என்ற கொரோனா தடுப்பூசியை இந்தியாவில் உற்பத்தி செய்யும் நிறுவனம்?",
      choice1:"சீரம் நிறுவனம்",
      choice2:"Drரெட்டி'ஸ்ஆய்வகம்",
      choice3:"சிப்லா",
      choice4:"பைசர்",
      
      answer:2
      
   },
   {
      question:"தமிழாக்கம்தருக: Data Cable",
      choice1:"ஒலிவடம்",
      choice2:"ஊடுகம்பி",
      choice3:"தரவுகம்பி",
      choice4:"தரவுதளம்",
      
      answer:3
      
      
   },
   {
      question:"இந்திய GST அமைப்பின் தந்தை என்று அழைக்கப்படுபவர்?",
      choice1:"வாஜ்பாய்",
      choice2:"மோடி",
      choice3:"மன்மோகன்சிங்",
      choice4:"சுசிவர்மா",

answer:1

   },
   {
      question:"சமயநல்லிணக்க பூமி என்று அழைக்கப்படும்நகரம்?",
      choice1:"மதுரை",
      choice2:"தஞ்சாவூர்",
      choice3:"சேலம்",
      choice4:"நாகப்பட்டினம்",

      answer:4
   },
   {
      question:"நோபல்பரிசு பெற்ற முதல் தமிழர்",
      choice1:"சர்.சி.வி இராமன்",
      choice2:"அப்துல்கலாம்",
      choice3:"வெங்கி இராமகிருஷ்ணன்",
      choice4:"ஜோசப்விஜய்",

      answer:3
   },
   {
      question:"தமிழாக்கம்தருக: Folder",
      choice1:"பைல்",
      choice2:"ஊடகம்",
      choice3:"பெட்டி",
      choice4:"கோப்பு",

      answer:4

   },
   {
      question:"இந்திய “வெண்மைபுரட்சியின்” தந்தை என்று அழைக்கப்படுபவர்?",
      choice1:"ம.பொ.சுவாமிநாதன்",
      choice2:"வர்கீஸ்குரியன்",
      choice3:"அமுல்",
      choice4:"சுசிவர்மா",
      
      answer:2
      
   },
   {
      question:"சர்வதேச குழந்தை தொழிலாளர் ஒழிப்பு தினம் கொண்டாடப்படும் நாள்?",
      choice1:"Feb 26",
      choice2:"August 15",
      choice3:"June 12",
      choice4:"May 1",
      
      answer:3
      

   },
   {
      question:"’இளஞ்சிவப்புநகரம்’ என்று அழைக்கப்படும் நகரம்?",
      choice1:"லக்னோ",
      choice2:"நாக்பூர்",
      choice3:"கொல்கத்தா",
      choice4:"ஜெய்ப்பூர்",

      answer:4

   },
   {
      question:"எம்.ஜி.ஆர் பிறந்த ஊர்?",
      choice1:"கொழும்பு",
      choice2:"கும்பகோணம்",
      choice3:"கண்டி",
      choice4:"தஞ்சாவூர்",
     
      answer: 3
         
   },
   {
      question:"நரம்புதளர்ச்சி தொடர்புடையது",
      choice1:"வைட்டமின் A",
      choice2:"வைட்டமின் B",
      choice3:"வைட்டமின் D",
      choice4:"வைட்டமின் E",
      
      answer:4
      
   },
   {
      question:"பார்மிக் அமிலம் -வேதிவாய்பாடு",
      choice1:"CH3 OH",
      choice2:"CH3 COOH",
      choice3:"CH2 CH3 OH",
      choice4:"COOH",
      
      answer:2
      
         
   },
   { 
       question:"மாதவிடாய் காலஅளவு?",
       choice1:"28 நாட்கள்",
       choice2:"30 நாட்கள்",
       choice3:"14 நாட்கள்",
       choice4:"4 நாட்கள்",
   
   answer:1
   },
   { 

      question:"ஒளிச்செறிவின் SI அலகு?",
      choice1:"ஹெர்ட்ஸ்",
      choice2:"மோல்",
      choice3:"கேண்ட்லா",
      choice4:"ஆம்பியர்",
      
      answer:3
      
  },
  {
   question:"மூன்றாம் பாலினத்தவர்களுக்கு இடஒதுக்கீடு அளித்த முதல் மாநிலம்",
   choice1:"தமிழ்நாடு",
   choice2:"கர்நாடகம்",
   choice3:"கேரளா",
   choice4:"குஜராத்",
   
   answer:2
   
},
{
   question:"தமிழாக்கம்தருக: SENSOR",
   choice1:"உணர்வி",
   choice2:"ஊடகம்",
   choice3:"தொலைநிலை",
   choice4:"ஊடலை",
   
   answer:1
      
},
{ 
   question:"”Discovery Of India” என்ற புத்தகத்தின் ஆசிரியர்?",
   choice1:"திலகர்",
   choice2:"நேதாஜி",
   choice3:"நேரு",
   choice4:"ராட்கிளிப்",
   
   answer:3
   
},
{ 
   question:"இந்தியாவின் கலாச்சரத் தலைநகரம்?",
   choice1:"சென்னை",
   choice2:"நாக்பூர்",
   choice3:"கொல்கத்தா",
   choice4:"டெல்லி",
   
   answer:3
   
},
{ 
   question:"சர்வதேச புலிகள் தினம் கொண்டாடப்படும் நாள்?",
   choice1:"Feb26",
   choice2:"July 29",
   choice3:"June 12",
   choice4:"May 1",

   answer:2
},
{ 
   question:"’முதலில் வரும் இரவு’ என்ற நூலின் ஆசிரியர்?",
   choice1:"கண்ணதாசன்",
   choice2:"ஜெயகாந்தன்",
   choice3:"சுஜாதா",
   choice4:"ஆதவன்",

   answer: 4
},
{ 
   question:"தங்க புரட்சி தொடர்புடையது",
   choice1:"முட்டை",
   choice2:"மீன்",
   choice3:"தேன்",
   choice4:"எண்ணெய்",
   
   answer:3
   
},
{ 
   question:"பீனால் -வேதிவாய்பாடு",
   choice1:"C6H5 OH",
   choice2:"C6H6",
   choice3:"CH2 CH3 OH",
   choice4:"HOCL",
   
   answer:1
   
},
{ 
   question:"ஒலிம்பிக் போட்டிகளில் அணிவகுப்பை தொடங்கும் முதல்நாடு?",
   choice1:"அமெரிக்கா",
   choice2:"இங்கிலாந்து",
   choice3:"ஜப்பான்",
   choice4:"கிரீஸ்",
   
   answer:4
},
{ 
   question:"போரில் விமானங்களை பயன்படுத்திய முதல் நாடு?",
   choice1:"இங்கிலாந்து",
   choice2:"பிரான்ஸ்",
   choice3:"டென்மார்க்",
   choice4:"இத்தாலி",
   
   answer:4   
   
},
{ 
   question:"டாஸ்மாக் நிறுவனம் தொடங்கப்பட்ட ஆண்டு?",
   choice1:"1971",
   choice2:"1983",
   choice3:"1981",
   choice4:"2001",
   
   answer:2
   
},
{ 
   question:"நவீன மக்கள்தொகை கணக்கெடுப்பு நடத்திய முதல் நாடு?",
   choice1:"இங்கிலாந்து",
   choice2:"பிரான்ஸ்",
   choice3:"டென்மார்க்",
   choice4:"மெக்சிகோ",
   
   answer:3
   
   
},
{ 
   question:"வானவில் உருவாதலின் தத்துவம்?",
   choice1:"முழுஅகஎதிரொலிப்பு",
   choice2:"ஒளிவிலகல்",
   choice3:"பரப்புஇழுவிசை",
   choice4:"A &B ",
   
   answer:4
   
},
{ 
   question:"தமிழக சட்டமன்றத்தில் உள்ள மொத்த உருவப்படங்களின் எண்ணிக்கை?",
   choice1:"15",
   choice2:"16",
   choice3:"12",
   choice4:"10",
   
   answer:2
      
},
{ 
   question:"தமிழாக்கம் தருக: Remote",
   choice1:"உணர்வி",
   choice2:"ஊடகம்",
   choice3:"தொலைநிலை",
   choice4:"ஊடலை",
   
   answer:3

},
{ 
   question:"”அர்த்தமுள்ள இந்து மதம்” என்ற புத்தகத்தின் ஆசிரியர்?",
   choice1:"கண்ணதாசன்",
   choice2:"வைரமுத்து",
   choice3:"வாலி",
   choice4:"கி.ரா",
   
   answer:1
   
      
},
{ 
   question:"இந்தியாவின் மருத்துவத் தலைநகரம்?",
   choice1:"சென்னை",
   choice2:"நாக்பூர்",
   choice3:"கொல்கத்தா",
   choice4:"டெல்லி",
   
   answer:1
   

},
{ 
   question:"சென்னை 'மௌன்ட்ரோட்டின்' தற்போதைய பெயர்?",
   choice1:"நேரு சாலை",
   choice2:"காந்தி சாலை",
   choice3:"பெரியார் சாலை",
   choice4:"அண்ணா சாலை",

   answer:4
   
},
{ 
   question:"தமிழக சட்டமன்ற தொகுதிகளின் எண்ணிக்கை 234 ஆக உயர்த்தப்பட்ட வருடம்?",
   choice1:"1956",
   choice2:"1972",
   choice3:"1965",
   choice4:"1991",
   answer: 3
   
},
{ 
   question:"நீலபுரட்சி தொடர்புடையது",
   choice1:"முட்டை",
   choice2:"மீன்",
   choice3:"தேன்",
   choice4:"கடல் உணவுகள்",
   
   answer:4   
   
},
{ 
   question:"பாலித்தீன் -வேதி வாய்பாடு",
   choice1:"CH3=CH3",
   choice2:"CH2=CH2",
   choice3:"CH2 CH3 OH",
   choice4:"CH2",
   
   answer:2
   
},
{ 
   question:"ஒலிம்பிக்கில் இந்திய ஹாக்கி அணி வென்றுள்ள தங்கபதக்கங்களின் எண்ணிக்கை?",
   choice1:"1",
   choice2:"2",
   choice3:"4",
   choice4:"8",
   
   answer:4
   
},
{ 
   question:"மனிதனால் உருவாக்கப்பட்ட முதல் செயற்கை இழை?",
   choice1:"ரேயான்",
   choice2:"கம்பளி",
   choice3:"செயற்கைபட்டு",
   choice4:"இவற்றுள் எதுவும் இல்லை",
   
   answer:1
   
},
{ 
   question:"கருப்பு வைரம்",
   choice1:"கச்சாஎண்ணெய்",
   choice2:"பெட்ரோல்",
   choice3:"நிலக்கரி",
   choice4:"மரக்கரி",
   
   answer:3   
   
},
{ 
   question:"இருசொற்பெயரிமுறையை அறிமுகப்படுத்தியவர்",
   choice1:"லின்னெயேஸ்",
   choice2:"பாகின்",
   choice3:"விட்டேக்கர்",
   choice4:"டால்டன்",
   
   answer:2
   
},
{ 
   question:"மிகவும் தரம் வாய்ந்த நிலக்கரி?",
   choice1:"லிக்னைட்",
   choice2:"பிட்டுமினஸ்",
   choice3:"துணை-பிட்டுமினஸ்",
   choice4:"ஆந்த்ரசைட்",
   
   answer:4  
   
},
{ 
   question:"ரஷ்யாவில் சார் வம்ச ஆட்சியை முடிவுக்கு கொண்டுவந்தவர்?",
   choice1:"ஸ்டாலின்",
   choice2:"மாலடோவ்",
   choice3:"கார்ல்மாக்ஸ்",
   choice4:"லெனின்",
   
   answer:4
   
},
{ 
   question:"தமிழாக்கம் தருக: Calculator",
   choice1:"கணிப்பொறி",
   choice2:"எண்சுவடி",
   choice3:"கணிப்பான்",
   choice4:"கணக்கு எந்திரம்",
   
   answer:2
   
},
{ 
   question:"கீழ்க்கண்டவற்றில் எது மாநிலம் அல்ல?",
   choice1:"பஞ்சாப்",
   choice2:"டெல்லி",
   choice3:"குஜராத்",
   choice4:"உத்தரகண்ட்",
   
   answer:2

},
{ 
   question:"'ரன்ஸ் அண்ட் ருபின்ஸ்' என்ற புத்தகத்தின் ஆசிரியர்?",
   choice1:"காவஸ்கர்",
   choice2:"சச்சின்",
   choice3:"பட்கர்னி",
   choice4:"நட்மண்டு",
   
   answer:1
   
},
{ 
   question:"நுரையீரலை சுற்றி காணப்படும் உறை?",
   choice1:"பெரிகார்டியம்",
   choice2:"பெரிடோனியல் சவ்வு",
   choice3:"பயிரிஉறை",
   choice4:"ஃபுளுரோ",

   answer:4

},
{ 
   question:"உலக தாய்ப்பால் வாரம்",
   choice1:"ஆகஸ்ட் 1-7",
   choice2:"ஜனவரி 15-22",
   choice3:"ஏப்ரல் 1-7",
   choice4:"டிசம்பர் 23-31",
   
   answer:1
},
{ 
   question:"தமிழ்நாட்டின் தற்போதைய நிதியமைச்சர்?",
   choice1:"பொய்யாமொழி",
   choice2:"உதயநிதி",
   choice3:"பழனிவேல்தியாகராஜன்",
   choice4:"மு.க.ஸ்டாலின்",
   
   answer: 3
},
{ 
   question:"அம்மோனியா -வேதிவாய்பாடு",
   choice1:"NH3",
   choice2:"NO2",
   choice3:"N2H1",
   choice4:"NO",
   
   answer:1
   
},
{ 

   question:"இந்தியாவில் முதல் பெண் பொறியியல் பட்டதாரி?",
   choice1:"லதாமங்கேஷ்கர்",
   choice2:"A.லலிதா",
   choice3:"ஆலியாபட்",
   choice4:"ஓவியா",
   
   answer:2
   
},

{ 
   question:"பிரித்தெழுதுக: கற்குவியல்",
   choice1:"கள் + குவியல்",
   choice2:"கற்றல் + குவியல்",
   choice3:"கல் + குவியல்",
   choice4:"இவற்றுள் எதுவும் இல்லை",
   
   answer:3
   
},
{ 
   question:"பச்சை தங்கம்",
   choice1:"மூங்கில்",
   choice2:"சணல்",
   choice3:"கொய்யா",
   choice4:"மரக்கரி",
   
   answer:1
   
},
{ 
   question:"கல்வி நகரம் என்று அழைக்கப்படும் ஊர்?",
   choice1:"பாடலிபுத்திரம்",
   choice2:"மதுரை",
   choice3:"டெல்லி",
   choice4:"காஞ்சிபுரம்",
   
   answer:4
   
},
{ 
   question:"ஆசியாவின் முதல் பங்குச்சந்தை அமைக்கப்பட்ட இடம்",
   choice1:"மும்பை",
   choice2:"பெய்ஜிங்",
   choice3:"காபூல்",
   choice4:"டோக்கியோ",
   
   answer:1
   
},
{ 
   question:"கீழ்க்கண்டவற்றுள் எது பால்வினை நோய்?",
   choice1:"எயிட்ஸ்",
   choice2:"சிபிலிஸ்",
   choice3:"கொனேரியா",
   choice4:"மேற்கண்ட அனைத்தும்",
   
   answer:4
   
},
{ 
   question:"தமிழாக்கம் தருக: Crypto Currency",
   choice1:"இணையப்பணம்",
   choice2:"மெய்நிகர்நாணயம",
   choice3:"வெற்றுப்பணம்",
   choice4:"அசல்நாணயம்",
   
   answer:2
   
},
{ 
   question:"கீழ்க்கண்டவற்றுள் எது பாலூட்டி அல்ல?",
   choice1:"வௌவால்",
   choice2:"நீலத்திமிங்கலம்",
   choice3:"எலி",
   choice4:"எறும்புத்திண்ணி",
   
   answer:4
   
},
{ 
   question:"”Pooverty and un-British rule”என்ற புத்தகத்தின் ஆசிரியர்?",
   choice1:"RK நாராயணன்",
   choice2:"நேரு",
   choice3:"தாதாபாய்நௌரோஜி",
   choice4:"அன்னிபெசன்ட்",
   
   answer:3
   
},
{ 
   question:"இதயத்தை சுற்றி காணப்படும் உறை?",
   choice1:"பெரிகார்டியம்",
   choice2:"பெரிடோனியல்சவ்வு",
   choice3:"பயிரிஉறை",
   choice4:"ஃபுளுரோ",

   answer:1

},
{ 
   question:"தமிழ்நாட்டின் நுழைவாயில்?",
   choice1:"சென்னை",
   choice2:"தூத்துக்குடி",
   choice3:"கோவை",
   choice4:"கன்னியாகுமரி",
   
   answer: 2 
},
{ 
   question:"உலக காசநோய் தினம்",
   choice1:"ஆகஸ்ட் 7",
   choice2:"ஜனவரி 2",
   choice3:"மார்ச் 24",
   choice4:"டிசம்பர் 23",
   
   answer:3   
   
},
{ 
   question:"தாவரத்தின் பச்சைய மூலக்கூறு",
   choice1:"Ca",
   choice2:"Mg",
   choice3:"K",
   choice4:"O2",
   
   answer:2
   
},
{ 
   question:"இந்தியாவில் முதல் பெண் ரபேல் விமான ஓட்டுனர்?",
   choice1:"லதாமங்கேஷ்கர்",
   choice2:"A.லலிதா",
   choice3:"சலார்",
   choice4:"சிவாங்கிசிங்",
   
   answer:4
   
},
{ 

   question:"பிரித்தெழுதுக: பைந்தமிழ்",
   choice1:"பசுமை+தமிழ்",
   choice2:"பச்சை + தமிழ்",
   choice3:"பை + தமிழ்",
   choice4:"இவற்றுள் எதுவும் இல்லை",
   
   answer:1
   
},
{ 
   question:"மீராபாய் சானு எந்த மாநிலத்தை சேர்ந்தவர்?",
   choice1:"பஞ்சாப்",
   choice2:"ஹரியானா",
   choice3:"ராஜஸ்தான்",
   choice4:"அசாம்",
   
   answer:2
   
},
{ 
   question:"கூடல்நகரம் என்று அழைக்கப்படும் ஊர்?",
   choice1:"கும்பகோணம்",
   choice2:"மதுரை",
   choice3:"வாரணாசி",
   choice4:"காஞ்சிபுரம்",
   
   answer:2
   
},
{ 
   question:"இந்தியாவின் முதல் பெண் ரயில்வே அமைச்சர்?",
   choice1:"திக்விஜய்",
   choice2:"சுஸ்மாசுவராஜ்",
   choice3:"மம்தாபானர்ஜி",
   choice4:"சலார்",
   
   answer:3
   
},
{ 
   question:"வெற்றிடக் குடுவையை கண்டறிந்தவர்?",
   choice1:"லவாய்சியர்",
   choice2:"பியரேசைமன்",
   choice3:"ஜேம்ஸ் திவார்",
   choice4:"லாப்லஸ்",
   
   answer:3
   
},
{ 
   question:"கீழ்க்கண்ட திரவங்களில் அதிக பாகுநிலை(Viscosity) கொண்டது?",
   choice1:"நீர்",
   choice2:"கிரிஸ்",
   choice3:"தேங்காய் எண்ணெய்",
   choice4:"நெய்",
   
   answer:4
   
},
{ 
   question:"கீழ்க்கண்டவற்றுள் ஆங்கிலேய அலகு முறை?",
   choice1:"CGS",
   choice2:"SI",
   choice3:"MKS",
   choice4:"FPS",
   
   answer:4
   
},
{ 
   question:"வாகனங்களில் பின்புற பார்வை கண்ணாடியாக பயன்படும் ஆடி?",
   choice1:"குவி ஆடி",
   choice2:"குழி ஆடி",
   choice3:"சமதள ஆடி",
   choice4:"பட்டகம்",
   
   answer:1
   
},
{ 
   question:"மிகச்சிறந்த எதிரொளிப்பு பொருள்?",
   choice1:"தாமிரம்",
   choice2:"வெள்ளி",
   choice3:"தங்கம்",
   choice4:"அலுமினியம்",

   answer:2
},
{ 
   question:"கலைடாஸ் கோப்பின் தத்துவம்?",
   choice1:"பன்முகஎதிரொளிப்பு",
   choice2:"முழுஅகஎதிரொளிப்பு",
   choice3:"ஒளிவிலகல்",
   choice4:"ஒளிச்சிதறல்",

   answer: 1
   
},
{ 

   question:"பூகம்பத்தின் போது உருவாகும் அலைகள்",
   choice1:"நெட்டலை",
   choice2:"குறுக்கலை",
   choice3:"வெட்டலை",
   choice4:"பின்னலை",
   
   answer:1
   
},
{ 
   question:"ஒலிம்பிக்கில் தடகளப்பிரிவில் தங்கம் வென்ற முதல் வீரர்",
   choice1:"அபினவ்பிந்ரா",
   choice2:"பிவிசிந்து",
   choice3:"ஜாதவ்பயேங்",
   choice4:"நீரஜ்சோப்ரா",
   
   answer:4
   
},
{ 

   question:"கலாம்சாட் செயற்கைகோளின் மொத்தஎடை?",
   choice1:"1.14 kg",
   choice2:"114g",
   choice3:"64g",
   choice4:"124g",
   
   answer:3
   
},
{ 

   question:"பிரித்தெழுதுக: செந்தமிழ்",
   choice1:"சேமை+தமிழ்",
   choice2:"செ+ தமிழ்",
   choice3:"செம்மை+ தமிழ்",
   choice4:"இவற்றுள் எதுவும் இல்லை",
   
   answer:3
},
{ 
   question:"நீரஜ் சோப்ரா எந்த மாநிலத்தை சேர்ந்தவர்?",
   choice1:"பஞ்சாப்",
   choice2:"ஹரியானா",
   choice3:"ராஜஸ்தான்",
   choice4:"அசாம்",
   
   answer:2
   
},
{ 
   question:"'தென்னிந்தியாவின் ஆக்ஸ்போர்டு' என்று அழைக்கப்படும் ஊர்?",
   choice1:"பாளையங்கோட்டை",
   choice2:"மதுரை",
   choice3:"வாரணாசி",
   choice4:"காஞ்சிபுரம்",
   
   answer:1
   
},
{ 
   question:"இந்தியாவின் முதல் பெண் வெளியுறவுத்துறை அமைச்சர்?",
   choice1:"திக்விஜய்",
   choice2:"சுஸ்மா சுவராஜ்",
   choice3:"மம்தா பானர்ஜி",
   choice4:"இந்திரா காந்தி",
   
   answer:2
   
},
{ 
   question:"ஆக்சிஜனை கண்டறிந்தவர்?",
   choice1:"லவாய்சியர்",
   choice2:"பியரேசைமன்",
   choice3:"ஜேம்ஸ் திவார்",
   choice4:"லாப்லஸ்",
   
   answer:1
   
},
{ 
   question:"சட்டமன்றத்தின் தலைவர்?",
   choice1:"ஆளுநர்",
   choice2:"முதலமைச்சர்",
   choice3:"சபாநாயகர்",
   choice4:"எதிர்கட்சிதலைவர்",
   
   answer:3
   
   
},
{ 
   question:"மாநில அரசின் தலைவர்? ",
   choice1:"முதலமைச்சர்",
   choice2:"ஆளுநர்",
   choice3:"உயர்நீதிமன்ற நீதிபதி",
   choice4:"பிரதமர்",
   
   answer:2
   
},
{ 

   question:"வாகனங்களில் டையர்களில் காற்றை நிரப்ப பயன்படும் வாயு?",
   choice1:"ஹிலியம்",
   choice2:"நைட்ரஜன்",
   choice3:"ஹைட்ரஜன்",
   choice4:"ஆக்சிஜன்",
   
   answer:2
   
},
{ 
   question:"மிகச்சிறந்த மின்கடத்திப் பொருள்?",
   choice1:"தாமிரம்",
   choice2:"பிளாஸ்டிக்",
   choice3:"மரம்",
   choice4:"சிலிக்கான்",

   answer:1

},
{ 
   question:"நீரியல் தூக்கியின் தத்துவம்?",
   choice1:"பரப்பு இழுவிசை",
   choice2:"பாஸ்கல் விதி",
   choice3:"இயற்கணிதம்",
   choice4:"ஒளிச் சிதறல்",

   answer: 2
   
},
{ 
   question:"SIN 90° = ?",
   choice1:"0",
   choice2:"1",
   choice3:"1/2",
   choice4:"1/4",
   
   answer:2
   
},
{ 
   question:"ஒலிம்பிக்கில் தங்கம் வென்ற முதல் இந்திய வீரர்",
   choice1:"அபினவ் பிந்ரா",
   choice2:"பிவி சிந்து",
   choice3:"ஜாதவ் பயேங்",
   choice4:"நீரஜ் சோப்ரா",
   
   answer:1
   
},
{ 
   question:"நீரின் மூலக்கூறு நிறை?",
   choice1:"1.4kg",
   choice2:"14g",
   choice3:"64g",
   choice4:"18g",
   
   answer:4
   
},
{ 
   question:"பிரித்தெழுதுக:ஐங்குறுநூறு",
   choice1:"ஐங்குறு + நூறு",
   choice2:"ஐநூறு + நூறு",
   choice3:"ஐந்து + குறுமை + நூறு",
   choice4:"எதுவும் இல்லை",
   
   answer:3
   
},
{ 
   question:"மயில்சாமி அண்ணாதுரை பிறந்த ஊர்?",
   choice1:"குந்தா",
   choice2:"வெலிங்டன்",
   choice3:"ஊட்டி",
   choice4:"கோதாவாடி",
   
   answer:4
   
},
{ 
   question:"தென்னிந்தியாவின் மான்செஸ்டர் என்று அழைக்கப்படும் ஊர்?",
   choice1:"பாளையங்கோட்டை",
   choice2:"மதுரை",
   choice3:"கோயம்புத்தூர்",
   choice4:"காஞ்சிபுரம்",
   
   answer:3
   
},
{ 
   question:"இந்தியாவின் முதல் பெண் குடியரசுத்தலைவர்?",
   choice1:"பிரதீபாபாட்டீல்",
   choice2:"சுஸ்மா சுவராஜ்",
   choice3:"மம்தா பானர்ஜி",
   choice4:"இந்திரா காந்தி",
   
   answer:1
   
},
{ 
   question:"பிரித்தெழுதுக:ஐங்குறுநூறு",
   choice1:"ஐங்குறு + நூறு",
   choice2:"ஐநூறு + நூறு",
   choice3:"ஐந்து + குறுமை + நூறு",
   choice4:"எதுவும் இல்லை",
   
   answer:3
   
},
{ 
   question:"மயில்சாமி அண்ணாதுரை பிறந்த ஊர்?",
   choice1:"குந்தா",
   choice2:"வெலிங்டன்",
   choice3:"ஊட்டி",
   choice4:"கோதாவாடி",
   
   answer:4
   
},
{ 
   question:"கொல்லிமலை அமைந்துள்ள மாவட்டம்?",
   choice1:"சேலம்",
   choice2:"கரூர்",
   choice3:"நாமக்கல்",
   choice4:"புதுக்கோட்டை",
   
   answer:3
   
},
{ 
   question:"சேர்வராயன் மலை அமைந்துள்ள மாவட்டம்?",
   choice1:"சேலம்",
   choice2:"கரூர்",
   choice3:"ஈரோடு",
   choice4:"புதுக்கோட்டை",
   
   answer:1
   
},
{ 
   question:"கீழ்கண்டவற்றுள் சட்டமேலவை அமைந்துள்ள மாநிலம?",
   choice1:"கேரளா",
   choice2:"அசாம்",
   choice3:"மகாராஷ்டிரா",
   choice4:"குஜராத்",

   answer: 3
   
},
{ 
   question:"கீழ்கண்டவற்றுள் சட்டமேலவை இல்லாத மாநிலம?",
   choice1:"பீகார்",
   choice2:"கர்நாடகம்",
   choice3:"மகாராஷ்டிரா",
   choice4:"குஜராத்",

   answer: 4
   
},
{ 
   question:"மக்களளைவையின் தலைவர்?",
   choice1:"ஆளுநர்",
   choice2:"முதலமைச்சர்",
   choice3:"சபாநாயகர்",
   choice4:"எதிர்கட்சி தலைவர்",
   
   answer:3
},
{ 
   question:"பலூன்களில் காற்றை நிரப்ப பயன்படும் வாயு?",
   choice1:"ஹிலியம்",
   choice2:"நைட்ரஜன்",
   choice3:"ஹைட்ரஜன்",
   choice4:"ஆக்சிஜன்",
   
   answer:1
   
},
{ 
   question:"மின்கடத்தாப் பொருள்?",
   choice1:"தாமிரம்",
   choice2:"மனிதன்",
   choice3:"கிராபைட்",
   choice4:"சிலிக்கான்",
   
   answer:3
   
},
{ 
   question:"தமிழாக்கம் தருக: FAX?",
   choice1:"தொலைநகல்",
   choice2:"ஒளிப்படிவு",
   choice3:"நகல்",
   choice4:"மின்னஞ்சல்",

   answer: 1
   
},
{ 
   question:"SIN0° = ",
   choice1:"0",
   choice2:"1",
   choice3:"1/2",
   choice4:"1/4",
   
   answer:1
   
},
{ 
   question:"ஒலிம்பிக்கில் தங்கம் வென்ற முதல் இந்திய வீராங்கனை?",
   choice1:"கர்ணம் மல்லேஸ்வரி",
   choice2:"பிவி சிந்து",
   choice3:"சானியாமிர்சா",
   choice4:"கல்பனாசாவ்லா",

   answer:1

},
{ 
   question:"ஒப்பிலக்கணம் என்ற நூலின் ஆசிரியர்",
   choice1:"தொல்காப்பியர்",
   choice2:"கால்டுவெல்",
   choice3:"ஜி.யு.போப்",
   choice4:"வீராமாமுனிவர்",
   
   answer:2
   
},
{ 
   question:"நீரின் வேதிவாய்பாடு?",
   choice1:"HO",
   choice2:"H2O",
   choice3:"oH",
   choice4:"HHO",
   
   answer:2
   
},
{ 
   question:"பொருள்தருக : நவி?",
   choice1:"நாய்",
   choice2:"சிங்கம்",
   choice3:"மான்",
   choice4:"புலி",
   
   answer:3
   
},
{ 
   question:"ஆரஞ்சு நகரம் என்று அழைக்கப்படும் ஊர்?",
   choice1:"மும்பை",
   choice2:"ஜெய்ப்பூர்",
   choice3:"லக்னோ",
   choice4:"நாக்பூர்",

   answer:4

},
{ 
   question:"தமிழ்கத்தின் முதல் பெண் ஆளுநர்?",
   choice1:"பிரதீபா பாட்டீல்",
   choice2:"சுஸ்மா சுவராஜ்",
   choice3:"பாத்தீமா பீவி",
   choice4:"இந்திரா காந்தி",
   
   answer:3
   
},
{ 
   question:"ஆசியாவின் மிகத்தூய்மையான ஆறு?",
   choice1:"கங்கை",
   choice2:"உம்காட்”",
   choice3:"சிந்து",
   choice4:"காவேரி",
   
   answer:2
   
},
{ 
   question:"உம்காட் ஆறு அமைந்துள்ள மாநிலம்?",
   choice1:"மேற்குவங்கம்",
   choice2:"அசாம்",
   choice3:"அருணாச்சல பிரதேசம்",
   choice4:"மேகலாயா",
   
   answer:4
   
},
{ 
   question:"பிரிவு - 356?",
   choice1:"குடியரசுத்தலைவர் ஆட்சி",
   choice2:"பிரதமர் பணிகள்",
   choice3:"அவசரநிலை",
   choice4:"அடிப்படை உரிமை",

   answer: 3
   
},
{ 
   question:"பாடலிபுத்திரத்தின் தற்போதைய பெயர்?",
   choice1:"பாட்னா",
   choice2:"லக்னோ",
   choice3:"பாரஸ்",
   choice4:"குல்கான்",

   answer: 1
   
},
{ 
   question:"மாநிலத்தின் தலைவர்?",
   choice1:"ஆளுநர்",
   choice2:"முதலமைச்சர்",
   choice3:"சபாநாயகர்",
   choice4:"எதிர்கட்சி தலைவர்",
   
   answer:1
   
},
{ 
   question:"விளக்குகளில் பயன்படும் வாயு?",
   choice1:"ஹிலியம்",
   choice2:"நியான்",
   choice3:"ஹைட்ரஜன்",
   choice4:"ஆக்சிஜன்",
   
   answer:2
   
},
{ 
   question:"மனிதன் பழக்கிய முதல் விலங்கு?",
   choice1:"பூனை",
   choice2:"நாய்",
   choice3:"பசு",
   choice4:"சிங்கம்",
   
   answer:2
   
},
{ 
   question:"தமிழாக்கம் தருக: xerox?",
   choice1:"தொலைநகல்",
   choice2:"ஒளிப்படிவு",
   choice3:"நகல்",
   choice4:"மின்னஞ்சல்",

   answer: 3
   
},
{ 
  
   question:"tan 45° = ?",
   choice1:"0",
   choice2:"1",
   choice3:"1/2",
   choice4:"1/4",
   
   answer:2
   
},
{ 
   question:"மொசாத் தொடர்புடைய நாடு?",
   choice1:"அமெரிக்கா",
   choice2:"இந்தியா",
   choice3:"பாகிஸ்தான்",
   choice4:"இஸ்ரேல்",

   answer:4

},
{ 
   question:"அலுமினியம் டிரை ஆக்சைடு – வேதிவாய்பாடு?",
   choice1:"MgCO",
   choice2:"MgOH",
   choice3:"AlO3",
   choice4:"HO",
   
   answer:3
   
},
{ 
   question:"’கள்ளிக்காட்டு இதிகாசம்’ என்ற நூலின் ஆசிரியர்",
   choice1:"தொல்காப்பியர்",
   choice2:"கால்டுவெல்",
   choice3:"ஜி.யு.போப்",
   choice4:"வைரமுத்து",
   
   answer:4
   
},
{ 
   question:"உலகப்பனுவல் என்று அழைக்கப்படும் நூல்?",
   choice1:"புறநானூறு",
   choice2:"குறுந்தொகை",
   choice3:"திருக்குறள்",
   choice4:"தொல்காப்பியம்",
   
   answer:3
   
},
{ 
   question:"தாமிரபரணியின் ஆற்றின் பிறப்பிடம்?",
   choice1:"குடகுமலை",
   choice2:"பொதிகைமலை",
   choice3:"பழனிமலை",
   choice4:"குற்றாலம்",
   
   answer:2
},
{ 
   question:"BSF-விரிவாக்கம் தருக?",
   choice1:"Border Road Force",
   choice2:"Border Safety Force",
   choice3:"Border Security Force",
   choice4:"Bombay Stock Find",
   
   answer:3
   
},
{ 
   question:"அதிசய அரிசி என்று அழைக்கப்படுவது?",
   choice1:"பொன்னிஅரிசி",
   choice2:"IR 18",
   choice3:"IR 8",
   choice4:"IR 20",
   
   answer:3
   
},
{ 
   question:"IR 8 அரிசி அறிமுகப்படுத்தப்பட்ட நாடு?",
   choice1:"இந்தியா",
   choice2:"பிலிப்பைன்ஸ்",
   choice3:"சீனா",
   choice4:"A & B ",
   
   answer:4
   
},
{ 
   question:"IR 8 அரிசி அறிமுகப்படுத்தப்பட்ட ஆண்டு?",
   choice1:"1961",
   choice2:"1950",
   choice3:"1966",
   choice4:"1951",

   answer: 3
   
},
{ 
   question:"மருதநாயகம் பிறந்த ஊர்?",
   choice1:"சம்மட்டிபுரம்",
   choice2:"பனையூர்",
   choice3:"சங்ககிரி",
   choice4:"புதுப்பட்டி",

   answer: 2
   
},
{ 
   answer:"ஆங்கிலேயரை எதிர்த்து போரிட்ட முதல் இந்தியப் பெண்?",
   choice1:"வேலுநாச்சியார்",
   choice2:"ஜான்சி ராணி",
   choice3:"ரசிய சுல்தான்",
   choice4:"மாயாவதி",
   answer:1
},
{ 
   question:"தீரன் சின்னமலை தூக்கிலிடப்பட்ட இடம்?",
   choice1:"கோவை",
   choice2:"சங்ககிரி",
   choice3:"சென்னி மலை",
   choice4:"ஈரோடு",
   
   answer:2
   
},
{ 
   question:"மனிதன் கண்டுபிடித்த முதல் உலோகம்?",
   choice1:"தாமிரம்",
   choice2:"இரும்பு",
   choice3:"வெள்ளி",
   choice4:"அலுமினியம்",
   
   answer:1
   
},
{ 
   question:"திருச்சிராப்பள்ளி பிரகடனம் வெளியிட்டவர்?",
   choice1:"வீரபாண்டியகட்டபொம்மன்",
   choice2:"வேலுநாச்சியார்",
   choice3:"மருது சகோதரர்கள்",
   choice4:"ஆங்கிலேயர்கள்",

   answer: 3
   
},
{ 
   question:"வீரபாண்டிய கட்டபொம்மன் தூக்கிலடப்பட்ட நாள்?",
   choice1:"oct 17;1799",
   choice2:"oct 16,1799",
   choice3:"nov 28,1801",
   choice4:"mar 14,1801",
   
   answer:1
   
},
{ 
   question:"சிவசுப்பிரமணியம் தூக்கிலிடப்பட்ட இடம்?",
   choice1:"தூத்துக்குடி",
   choice2:"பாளையங்கோட்டை",
   choice3:"சிவகங்கை",
   choice4:"நாகலாபுரம்",
   
   answer:4
   
},
{ 

   question:"சென்னை பல்கலைக்கழகம் தொடங்கப்பட்ட ஆண்டு",
   choice1:"1854",
   choice2:"1857",
   choice3:"1872",
   choice4:"1865",
   
   answer:2
   
},
{ 
   question:"குடிமக்கள் காப்பியம் என்று அழைக்கப்படும் நூல்?",
   choice1:"சிலப்பதிகாரம்",
   choice2:"குறுந்தொகை",
   choice3:"திருக்குறள்",
   choice4:"தொல்காப்பியம்",
   
   answer:1
},
{ 

   question:"காவேரி ஆற்றின் பிறப்பிடம்?",
   choice1:"குடகுமலை",
   choice2:"பொதிகைமலை",
   choice3:"பழனிமலை",
   choice4:"குற்றாலம்",
   
   answer:1
   
},
{ 
   question:"CISF-விரிவாக்கம் தருக?",
   choice1:"Central Industrial Security Force",
   choice2:"Central Inform Service Force",
   choice3:"Border Security Force",
   choice4:"Central India Security Force",
   
   answer:1
   
},
{ 
   question:"தமிழ்நாட்டிலுள்ள மாநகராட்சிகளின் எண்ணிக்கை?",
   choice1:"12",
   choice2:"15",
   choice3:"21",
   choice4:"25",
   
   answer:3
   
},
{ 
   question:"தேர்தல் சீர்திருத்தங்களின் தந்தை என்று அழைக்கப்படுபவர்?",
   choice1:"சுகுமார்சென்",
   choice2:"டி.என்.சேசன்",
   choice3:"நேரு",
   choice4:"இஸ்லிங்",
   
   answer:2
   
},
{ 
   question:"பட்டயச்சட்டம்?",
   choice1:"1920",
   choice2:"1853",
   choice3:"1858",
   choice4:"1833",

   answer: 4
   
},
{ 
   question:"தேர்வுகளின் மூலம் அரசுப்பணியாளர்களை தேர்வு செய்தலை வலியுறுத்திய முதல் சட்டம்?",
   choice1:"பட்டயச்சட்டம்",
   choice2:"விக்டோரியா மகாராணி பேரறிக்கை",
   choice3:"ராயல்கமிட்டி சட்டம்",
   choice4:"குடிமைப்பணி சட்டம்",

   answer: 1
   
},
{ 
   question:"குடிமைப்பணி ஊழியர்களுக்கு பயிற்சி அளிக்க சிறப்பு கல்லூரியை ஏற்படுத்தியவர்?",
   choice1:"காரன்வாலிஸ்",
   choice2:"வெல்லெஸ்லி",
   choice3:"தாமஸ் மன்றோ",
   choice4:"டல்ஹௌசி பிரபு",

   answer:2

},
{ 
   question:"இரண்டாம் கர்நாடகப் போரை முடிவுக்கு கொண்டு வந்த உடன்படிக்கை?",
   choice1:"பாரிஸ் உடன்படிக்கை",
   choice2:"அலகாபாத் உடன்படிக்கை",
   choice3:"ஆற்காடு உடன்படிக்கை",
   choice4:"பாண்டிச்சேரி உடன்படிக்கை",
   
   answer:4
   
},
{ 
   question:"மூன்றாம் கர்நாடகப் போரை முடிவுக்கு கொண்டு வந்த உடன்படிக்கை?",
   choice1:"பாரிஸ் உடன்படிக்கை",
   choice2:"அலகாபாத் உடன்படிக்கை",
   choice3:"ஆற்காடு உடன்படிக்கை",
   choice4:"பாண்டிச்சேரி உடன்படிக்கை",
   
   answer:1
   
},
{ 
   question:"வேலூர் புரட்சி நடைபெற்ற ஆண்டு?",
   choice1:"1756",
   choice2:"1806",
   choice3:"1858",
   choice4:"1900",
   
   answer: 2
   
},
{ 
   question:"தமிழ்நாட்டின் சிறந்த மாநகராட்சி(2021)?",
   choice1:"சென்னை",
   choice2:"திருச்சி",
   choice3:"கோவை",
   choice4:"தஞ்சாவூர்",
   
   answer:4

},
{ 
   question:"விசையின் SI அலகு?",
   choice1:"பாஸ்கள்",
   choice2:"நியூட்டன்",
   choice3:"பார்",
   choice4:"மோல்",
   
   answer:2
   
},
{ 
   question:"தமிழ்நாட்டில் வனக்கல்லூரி அமைந்துள்ள இடம்",
   choice1:"உதகை",
   choice2:"குந்தா",
   choice3:"மேட்டுப்பாளையம்",
   choice4:"கொடைக்கானல்",
   
   answer:4
   
},
{ 
   question:"தெய்வநூல் என்றுஅழைக்கப்படும் நூல்?",
   choice1:"சிலப்பதிகாரம்",
   choice2:"குறுந்தொகை",
   choice3:"திருக்குறள்",
   choice4:"தொல்காப்பியம்",
   
   answer:3
   
},
{ 
   question:"கங்கை ஆற்றின் பிறப்பிடம்?",
   choice1:"காஷ்மீர்",
   choice2:"பொதிகைமலை",
   choice3:"ஆரவல்லி குன்றுகள்",
   choice4:"கங்கோத்ரி",

   answer:4
   
},
{ 
   question:"ATM-விரிவாக்கம் தருக?",
   choice1:"Automated Telller Machine",
   choice2:"Automatic Teller Machine",
   choice3:"AllTimeMoney",
   choice4:"Alltheabove",
   
   answer:1
   
},
{ 
   question:"தென்னிந்தியாவின் காஷ்மீர்?",
   choice1:"ஊட்டி",
   choice2:"தேனி",
   choice3:"மூணாறு",
   choice4:"கொடைக்கானல்",

   answer:4
   
},
{ 
   question:"ஏழிசைவல்லான் என்று அழைக்கப்படுபவர்?",
   choice1:"ராஜேந்திரசோழன்",
   choice2:"ராஜராஜசோழன்",
   choice3:"கரிகாலன்",
   choice4:"குலோத்துங்கன்",
   
   answer:3
   
},
{ 
   question:"சென்னை உயர்நீதிமன்றத்தின் முதல் நீதிபதி",
   choice1:"எலிசாஅம்பலம்",
   choice2:"முத்துக்குமார்",
   choice3:"கேப்டன்ஸ்மித்",
   choice4:"சுஜா-உத்-தௌலா",

   answer:4
   
},
{ 
   question:"கல்கத்தா உயர்நீதிமன்றம் தொடங்கப்பட்ட ஆண்டு?",
   choice1:"1773",
   choice2:"1801",
   choice3:"1823",
   choice4:"1858",
   
   answer:1
   
},
{ 
   question:"மதராஸ் உயர்நீதிமன்றம் தொடங்கப்பட்ட ஆண்டு?",
   choice1:"1773",
   choice2:"1801",
   choice3:"1823",
   choice4:"1858",
   
   answer:2
   
},
{ 
   question:"ஆற்காடு போர் நடைபெற்ற ஆண்டு?",
   choice1:"1773",
   choice2:"1801",
   choice3:"1751",
   choice4:"1857",
   
   answer:3
   
},
{ 
   question:"ஏழையின் சிரிப்பில் இறைவனை காணலாம் - என்று கூறியவர்",
   choice1:"ராமாலிங்க அடிகளார்",
   choice2:"கண்ணதாசன்",
   choice3:"அண்ணா",
   choice4:"கருணாநிதி",
   
   answer:3
   
},
{ 
   question:"கத்தியின்றி ரத்தமின்றி யுத்தம் ஒன்று வருகுது-என்பது யாருடைய வரிகள்?",
   choice1:"கவிஞர் தாராபாரதி",
   choice2:"நாமக்கல் கவிஞர்",
   choice3:"பாரதியார்",
   choice4:"பாரதிதாசன்",
   
   answer:2
   
},
{ 
   question:"வெறுங்கை என்பது மூடத்தனம் விரல்கள் பத்தும் மூலதனம் என்பது யாருடைய வரிகள்?",
   choice1:"கவிஞர் தாராபாரதி",
   choice2:"நாமக்கல் கவிஞர்",
   choice3:"பாரதியார்",
   choice4:"பாரதிதாசன்",
   
   answer:1
   
},
{ 
   question:"வாழிய செந்தமிழ் வாழ்க நற்றமிழர் -என்பது யாருடைய வரிகள்?",
   choice1:"கவிஞர் தாராபாரதி",
   choice2:"நாமக்கல் கவிஞர்",
   choice3:"பாரதியார்",
   choice4:"பாரதிதாசன்",
   
   answer:3
   
},
{ 

   question:"FRIENDS OF POLICE என்ற அமைப்பை ஏற்படுத்தியவர்?",
   choice1:"விஜய்குமார் IPS",
   choice2:"குமார் பி",
   choice3:"பிரதீப்",
   choice4:"ரமேஷ் வி",
   
   answer:3
   
},
{ 

   question:"இன்டிகோ புரட்சி நடைபெற்ற ஆண்டு?",
   choice1:"1856",
   choice2:"1859",
   choice3:"1873",
   choice4:"1875",
   
   answer:2
   
},
{ 
   question:"சந்தால் கலகம் நடைபெற்ற ஆண்டு?",
   choice1:"1856",
   choice2:"1859",
   choice3:"1899",
   choice4:"1921",
   
   answer:1
   
},
{ 
   question:"வெளிநாடு வாழ் இந்தியர் தினம் கொண்டாடப்படும் நாள்?",
   choice1:"ஜனவரி 1",
   choice2:"ஜனவரி6 ",
   choice3:"ஜனவரி 15",
   choice4:"ஜனவரி 9 ",
   
   answer: 4
   
},
{ 
   question:"திஸ்புர் எந்த மாநிலத்தின் தலைநகர்?",
   choice1:"அசாம்",
   choice2:"மணிப்பூர்",
   choice3:"நாகலாந்து",
   choice4:"சிக்கிம்",
   
   answer:1
      
},
{ 

   question:"பூரி கடற்கரை அமைந்துள்ள மாநிலம்?",
   choice1:"ஜார்கண்ட்",
   choice2:"கேரளா",
   choice3:"கோவா",
   choice4:"ஒடிசா",
   
   answer:4
   
},
{ 
   question:"சிலிக்கான் தனிமத்தின் அணு எண்",
   choice1:"10",
   choice2:"14",
   choice3:"19",
   choice4:"35",
   
   answer:2
   
},
{ 
   question:"இந்திய கப்பற்படையின் தந்தை?",
   choice1:"ராஜேந்திர சோழன்",
   choice2:"ராஜ ராஜ சோழன்",
   choice3:"அசோகர்",
   choice4:"சிவாஜி",
   
   answer:4
   
},
{ 
   question:"கீழ்கண்டவற்றுள் தோ-ஆப் நிலப்பகுதி?",
   choice1:"தஞ்சாவூர",
   choice2:"நெல்லை",
   choice3:"ஸ்ரீவில்லிபுத்தூர்",
   choice4:"ஸ்ரீரங்கம்",

   answer:4
     
},
{ 
   question:"பெண்களுக்கு மாரடைப்பு ஏற்படுவதை தடுக்கும் ஹார்மோன்?",
   choice1:"ஆன்ட்ரோஜன்",
   choice2:"புரோஜோஸ்ட்ரான்",
   choice3:"ஈஸ்ட்ரோஜன்",
   choice4:"தைமோசின்",
   
   answer:3
   
},
{ 
   question:"இந்திய தொழில்துறையின் தந்தை?",
   choice1:"JRD டாடா",
   choice2:"பிர்லா",
   choice3:"திருபாய் அம்பானி",
   choice4:"மகிந்திரா",

   answer:1
   
},
{ 
   question:"சேக்குவரா பிறந்த நாடு?",
   choice1:"கியூபா",
   choice2:"பிரேசில்",
   choice3:"சிலி",
   choice4:"அர்ஜென்டினா",
   
   answer:4
   
},
{ 
   question:"மகல் - என்ற சொல்லின் பொருள்",
   choice1:"கிராமம்",
   choice2:"பணம்",
   choice3:"வரி",
   choice4:"சிறிய நகரம்",
   
   answer:1
     
},
{ 
   question:"மகல்வாரி முறையை அறிமுகப்படுத்தியவர்?",
   choice1:"காரன்வாலிஸ் பிரபு",
   choice2:"வெல்லெஸ்லி பிரபு",
   choice3:"வில்லியம் பெண்டிங் பிரபு",
   choice4:"தாமஸ் மன்றோ",
   
   answer:3
   
},
{ 
   question:"இராயத்துவாரி முறையை அறிமுகப்படுத்தியவர்?",
   choice1:"காரன்வாலிஸ் பிரபு",
   choice2:"வெல்லெஸ்லி பிரபு",
   choice3:"வில்லியம் பெண்டிங் பிரபு",
   choice4:"தாமஸ் மன்றோ",
   
   answer:4
   
},
{ 
   question:"நிலையான நிலவரிக் கொள்கை முறையை அறிமுகப்படுத்தியவர்?",
   choice1:"காரன்வாலிஸ் பிரபு",
   choice2:"வெல்லெஸ்லி பிரபு",
   choice3:"வில்லியம் பெண்டிங் பிரபு",
   choice4:"தாமஸ் மன்றோ",
   
   answer:1
   
},
{ 
   question:"நோபல் பரிசை வழங்கும் நாடு",
   choice1:"அமெரிக்கா",
   choice2:"ஸ்வீடன்",
   choice3:"ரஷ்யா",
   choice4:"இந்தோனிசியா",
   
   answer:2
   
},
{ 
   question:"ஆசியாவின் நோபல் பரிசு என்று அழைக்கப்படும் விருது?",
   choice1:"பாரத ரத்னா",
   choice2:"புலிட்சர் விருது",
   choice3:"ராமன் மகசேச விருது",
   choice4:"புரந்தர் விருது",
   
   answer:3
   
},
{ 
   question:"மிகக் குறைந்த வயதில் பாராஒலிம்பிக்கில் தங்கம் வென்ற இந்திய வீரர்?",
   choice1:"பிரவீன் குமார்",
   choice2:"மாரியப்பன் தங்கவேலு",
   choice3:"பவினா படேல்",
   choice4:"ரிங்கு சிங்",
   
   answer:1
   
},
{ 
   question:"அஸ்ஸாம் மாநில தூதுவராக நியமிக்கப்பட்டுள்ளவர்?",
   choice1:"சுசாந்த்சிங் ராஜ்புத்",
   choice2:"பிரியங்கா சோப்ரா",
   choice3:"தோனி",
   choice4:"அமிதாப்பச்சன்",
   
   answer:2
   
},
{ 
   question:"மத்திய ரிசர்வ் போலீஸ் படையின் தூதுவராக நியமிக்கப்பட்டுள���������ள���������������������������்?",
   choice1:"MS தோனி",
   choice2:"PV சிந்து",
   choice3:"நீரஜ்சோப்ரா",
   choice4:"விராட் கோலி",
   
   answer:2
   
},
{ 
   question:"எல்லைப் பாதுகாப்பு படையின் தூதுவராக நியமிக்கப்பட்டுள்ளவர்?",
   choice1:"MS தோனி",
   choice2:"PV சிந்து",
   choice3:"நீரஜ்சோப்ரா",
   choice4:"விராட் கோலி",
   
   answer:4
   
},
{ 
   question:"தியாகிகள் தினம் கொண்டாடப்படும் நாள்?",
   choice1:"ஜனவரி 30",
   choice2:"மார்ச் 24",
   choice3:"அக்டோபர் 15",
   choice4:"ஜூலை 12",
   
   answer:1
   
},
{ 

   question:"கொடி தினம் கொண்டாடப்படும் நாள்?",
   choice1:"ஜனவரி 1",
   choice2:"மார்ச் 8",
   choice3:"நவம்பர் 15",
   choice4:"டிசம்பர்7",
   
   answer: 4
   
},
{ 
   question:"ஷில்லாங் எந்த மாநிலத்தின் தலைநகர்?",
   choice1:"அசாம்",
   choice2:"மணிப்பூர்",
   choice3:"மேகலாயா",
   choice4:"சிக்கிம்",
   
   answer:2
   
},
{ 
   question:"ஓரங் தேசியப் பூங்கா அமைந்துள்ள மாநிலம்?",
   choice1:"அசாம்",
   choice2:"கேரளா",
   choice3:"கோவா",
   choice4:"ஒடிசா",
   
   answer:1
   
},
{ 
   question:"சிலிக்கான் சிட்டி என்று அழைக்கப்படும் நகரம்",
   choice1:"புனே",
   choice2:"நொய்டா",
   choice3:"பெங்களூர்",
   choice4:"சென்னை”",
   
   answer:3
   
},
{ 
   question:"கீழ்கண்ட அணிகளில் IPL போட்டிகளில் கோப்பை வெல்லாத அணி?",
   choice1:"CSK",
   choice2:"RR",
   choice3:"MI",
   choice4:"RCB",
   
   answer:4
   
},
{ 
   question:"T20 போட்டிகளில் அதிக சிக்சர் அடித்தவீரர்?",
   choice1:"கிறிஸ் கெயில்",
   choice2:"அப்ரிடி",
   choice3:"தோனி",
   choice4:"டிவில்லியர்ஸ்",

   answer:1
   
},
{ 
   question:"அவசரகால ஹார்மோன் என்று அழைக்கப்படுவது?",
   choice1:"ஆன்ட்ரோஜன்",
   choice2:"அட்ரீனலின்",
   choice3:"ஈஸ்ட்ரோஜன்",
   choice4:"தைமஸ்",
   
   answer:2
   
},
{ 
   question:"வைட்டமின்-D குறைபாட்டால் ஏற்படும் நோய்?",
   choice1:"ஸ்கர்வி",
   choice2:"மாலைக்கண் நோய்",
   choice3:"ரிக்கட்ஸ்",
   choice4:"பெரிபெரி",
   answer:3
   
},
{ 
   question:"லிப்பிடுகள் என்று அழைக்கபடுவது?",
   choice1:"புரதம்",
   choice2:"கொழுப்பு",
   choice3:"கார்போஹைட்ரேட்",
   choice4:"வைட்டமின்",
   
   answer:2
   
},
{ 
   question:"தாவரங்களில் உணவுப்பொருள்களை கடத்தப் பயன்படுபவை?",
   choice1:"சைலம்",
   choice2:"நரம்புகள்",
   choice3:"இலை",
   choice4:"ஃப்ளோயம்",

   answer:4
     
   
},
{
   question:"செயற்கை முறையில் பழங்களை பழுக்க வைக்க பயன்படும் ஹார்மோன்?",
   choice1:"எத்திலீன்",
   choice2:"அசிட்டிலீன்",
   choice3:"LPH",
   choice4:"யூரியா",
   
   answer:1
   
},
{ 
   question:"இந்தியர்களின் சராசரி ஆயுட்காலம்?",
   choice1:"60 ஆண்டுகள்",
   choice2:"65 ஆண்டுகள்",
   choice3:"69 ஆண்டுகள்",
   choice4:"56 ஆண்டுகள்",
   
   answer:3
   
},
{ 
   question:"ஆப்பிள் நிறுவனத்தை நிறுவியவர்?",
   choice1:"லாரிபேட்ஜ்",
   choice2:"ஸ்டீவ் ஜாப்ஸ்",
   choice3:"வீர்ஜின்",
   choice4:"அம்பானி",
   
   answer:2
   
},
{ 
   question:"அரசியல் அமைப்பில் உள்ள மொத்த விதிகள்?",
   choice1:"395",
   choice2:"295",
   choice3:"495",
   choice4:"595",
   
   answer:1
   
},
{ 
   question:"அடிப்படை கடமைகளை குறிப்பிடும் விதி?",
   choice1:"50 அ",
   choice2:"52 அ",
   choice3:"51 அ",
   choice4:"53 அ",
   
   answer:3
    
},
{
   question:"லோக்சபையின் தற்பொதைய எண்ணிக்கை",
   choice1:"545",
   choice2:"550",
   choice3:"500",
   choice4:"454",
   
   answer:1
   
},
{ 
   question:"வாக்களிக்கும் வயது",
   choice1:"20",
   choice2:"21",
   choice3:"19",
   choice4:"18",
   
   answer:4
   
},
{ 
   question:"இந்தியாவின் மிக உயர்ந்த நீதிதுரை அங்கம்?",
   choice1:"உயர் நீமன்றம்",
   choice2:"உச்ச நீதிமன்றம்",
   choice3:"நடுவர் மன்றம்",
   choice4:"மாவட்ட நீதி மன்றம்",
   
   answer:2
   
},
{ 
   question:"மாநில நிர்வாகத்தின் தலைவர்",
   choice1:"குடியரசு தலைவர்",
   choice2:"முதலமைச்சர்",
   choice3:"ஆளுநர்",
   choice4:"தலைமை நீதிபதி",
   
   answer:3
   
},
{ 
   question:"மையப்பட்டியலில் உள்ள துறைகள்?",
   choice1:"97",
   choice2:"55",
   choice3:"51",
   choice4:"53",
   
   answer:1
    
},
{
   question:"இராஜ்ய சபையில் இந்திய குடியரசு தலைவர் எத்தனை உறுப்பினர்களை நியமனம் செய்கிறார்",
   choice1:"10",
   choice2:"11",
   choice3:"12",
   choice4:"14",
   
   answer:3
   
},
{ 
   question:"இந்தியாவின் உச்ச நீதிமன்றம் எங்கு அமைந்துள்ளது",
   choice1:"மும்பை",
   choice2:"கொல்கத்தா",
   choice3:"சென்னை",
   choice4:"புதுடில்லி",
   
   answer:4
   
},
{ 
   question:"இந்திய கட்டுப்பாட்டு தணிக்கை அலுவலரை நியமனம் செய்பவர் யார்?",
   choice1:"குடியரசு தலைவர்",
   choice2:"உச்ச நீதிமன்றம்",
   choice3:"நடுவர் மன்றம்",
   choice4:"பிரதமர்",
   
   answer:2
   
},
{ 
   question:"அரசியல் அமைப்பின் எந்த விதி தீண்டாமையை ஒழிக்கிறது",
   choice1:"51",
   choice2:"17",
   choice3:"23",
   choice4:"234",
   
   answer:2 
   
},
{ 
   question:"ஐக்கிய நாடு சபை நிறுவப்பட்ட நாள்",
   choice1:"அக்டோபர் 24,1945",
   choice2:"அக்டோபர் 20,1945",
   choice3:"அக்டோபர் 23,1945",
   choice4:"அக்டோபர் 22,1946",

   answer:1
   
},
{
   question:"ஐ.நா மனித உரிமைகள் பிரகடனத்தை ஏற்றுக்கொண்ட நாள்",
   choice1:"1944,அக்டோபர் 24",
   choice2:"அக்டோபர் 14, 1945",
   choice3:"டிசம்பர் 10,1996",
   choice4:"டிசம்பர் 10,1948",

   answer:4
   
},
{ 
   question:"இந்திய அரசியல் அமைப்பின் அடிப்படை உரிமைகள்உள்ள பகுதி",
   choice1:"பகுதி 3",
   choice2:"பகுதி 2",
   choice3:"பகுதி 4",
   choice4:"பகுதி 5",
   
   answer:1
   
},
{ 
   question:"வியன்னாவில் மனித உரிமைகள் மீதான உலக மாநாடு நடைப்பெற்ற ஆண்டு",
   choice1:"1994",
   choice2:"1990",
   Choice3:"1993",
   choice4:"1995",

   answer:3
   
},
{ 
   question:"சிறார்கள்உரிமைகள் மீதான ஒப்பந்தம் ஏற்றுக் கொள்ளப்பட்ட ஆண்டு",
   qhoice1:"1989",
   choice2:"1990",
   choice3:"1987",
   choice4:"1988",
   
   answer:1
   
},
{ 
   question:"பெண்களுக்கு எதிரான வன்முறையினை நீக்கும் பிரகடனம் ஏற்றுக்கொள்ளப்பட்ட ஆண்டு",
   choice1:"1989",
   choice2:"1991",
   choice3:"1993",
   choice4:"1995",
   
   answer:3
   
},
{
   question:"இந்தியாவின் தேசிய மனித உரிமைகள் ஆணையம் அமைக்கப்பட்ட ஆண்டு",
   choice1:"1883",
   choice2:"1994",
   choice3: "1993",
   choice4:"2001",
   
   answer:3
   
},
{ 
   question:"தலைவர் உள்ளிட்ட தேசிய மனித உரிமைகள் ஆணையத்தின் மொத்த உறுப்பினர் எண்ணிக்கை",
   choice1:"3",
   choice2:"6",
   choice3:"7",
   choice4:"5",
   
   answer:4
   
},
{ 
   question:"தேசிய மனித உரிமைகள் ஆணையத்தின் எந்த உறுப்பினரையும் பதவியிலிருந்து நீக்கும் அதிகாரம் பெற்றவர்",
   choice1:"தலைவர்",
   choice2:"பிரதமர்",
   choice3:"குடியரசு தலைவர்",
   choice4:"தலைமை நீதிபதி",
   
   answer:3
   
},
{ 
   question:"தேசிய மனித உரிமைகள் ஆணையத்தின் உறுப்பினர்களின்பதவிக்காலம்",
   choice1:"6 ஆண்டுகள்",
   choice2:"5ஆண்டுகள்",
   choice3:"10ஆண்டுகள்",
   choice4:"நிரந்தரமானது",
   
   answer:2
   
},
{ 
   question:"தேசிய மனித உரிமைகள் ஆணையத்தின் தலைமை செயலகம் அமைந்துள்ள இடம்",
   choice1:"மும்பை",
   choice2:"கொல்கத்தா",
   choice3:"புதுடில்லி",
   choice4:"பெஙகளூர்",
   
   answer:3
   
},
{ 
   question:"தேசிய மனித உரிமைகள் ஆணையத்தின் தலைவர் உள்ளிட்ட மொத்த உறுப்பினர்கலையும் நியமிப்பது",
   choice1:"பிரதமர்",
   choice2:"குடியரசு தலைவர்",
   choice3:"பாராளுமன்றம்",
   choice4:"தலைமை நீதிபதி",
   
   answer:2
   
},
{
   question:"மாநில மனித உரிமைகள் ஆணையத்தின் தலைவரை நியமிப்பவர்",
   choice1:"குடியரசுத்தலைவர்",
   choice2:"பிரதமர்",
   choice3:"ஆளுநர்",
   choice4:"உள்துறை அமைச்சர்",
   
   answer:3
   
},
{ 
   question:"மாநில மனித உரிமைகள் ஆணையத்தின் ஒவ்வொரு உறுப்பினர்கள் பதவிக்காலம்",
   choice1:"5ஆண்டுகள்",
   choice2:"3ஆண்டுகள்",
   choice3:"2ஆண்டுகள்",
   choice4:"10ஆண்டுகள்",

   answer:1
   
},
{ 
   question:"எந்த வயதினை கடந்த எவரும் மனித உரிமைகள் ஆணையத்தின் உறுப்பினராக இருக்க முடியாது?",
   choice1:"65",
   choice2:"57",
   choice3:"70",
   choice4:"69",
   
   answer:3
   
},
{ 
   question:"மாநில மனித உரிமைகள் ஆணையத்தின் தலைவர் _____ தலைமை நீதிபதியாக பணிபுரிந்திருக்க வேண்டும்",
   choice1:"உயர் நீதிமன்றம்",
   choice2:"உச்ச நீதிமன்றம்",
   choice3:"மாவட்ட நீதிமன்றம்",
   choice4:"நடுவர் மன்றம்",
   
   answer:1
   
},
{ 
   question:"1955 ஆம் ஆண்டு இந்திய தேசிய காங்கிரசின் மாநாட்டில் சமதர்ம கொள்கை யாருடைய தலைமையில் நிறைவேற்றப்பட்டது",
   choice1:"இராஜாஜி",
   choice2:"காமராசர்",
   choice3:"அண்ணாதுரை",
   choice4:"பெரியார்",
   
   answer:2
   
},
{
   question:"மக்களாட்சி என்பதற்கு பொருத்தமான விளக்கம் கூறியவர்",
   choice1:"வாஷிங்டன்",
   choice2:"ஆபிரகாம் லிங்கன்",
   choice3:"கென்னடி",
   choice4:"உட்ரோ வில்சன்",
   
   answer:2
   
},
{ 
   question:"வாக்குரிமை அளிக்கும் வயதை 21 லிருந்து 18ஆக குறைத்தவர்",
   choice1:"இந்திரா காந்தி",
   choice2:"தேசாய்",
   choice3:"ராஜீவ் காந்தி",
   choice4:"வி.பி.சிங்",
   
   answer:3
   
},
{ 
   question:"யாருடைய பிறந்த நாளான நவம்பர் 19ஆம் நாள் தேசிய ஒருமைப்பாட்டு தினமாக கொண்டாடப்படுகிறது",
   choice1:"இந்திர காந்தி",
   choice2:"காந்தி",
   choice3:"இராஜீவ் காந்தி",
   choice4:"வி.பி.சிங்",
   
   answer:1
   
},
{ 
   question:"இராமாயணத்தை தமிழில் எழுதியவர்",
   choice1:"வால்மீகி முனிவர்",
   choice2:"வேதவியாசர்",
   choice3:"காளிதாசர்",
   choice4:"கம்பர்",
   
   answer:4
   
},
{ 
   question:"இந்திய வடமாநில மக்களின் முக்கிய உணவு",
   choice1:"அரிசி",
   choice2:"கோதுமை",
   choice3:"சோளம்",
   choice4:"பார்லி",
   
   answer:2
   
},
{
   question:"தரைபடையின் தலைமை அலுவலர்",
   choice1:"கர்னல்",
   choice2:"ஜெனரல்",
   choice3:"கேப்டன்",
   choice4:"மேஜர்",
   
   answer:2
      
},
{ 
   question:"கடற்படையின் தலைமை அலுவலர்",
   choice1:"லெப்டின்ண்ட்",
   choice2:"கேப்டன்",
   choice3:"கமேண்டர்",
   choice4:"அட்மிரல்",
   
   answer:4
   
},
{ 
   question:"இந்தியாவின் தரைப்படை தினம்",
   choice1:"ஜனவரி 15",
   choice2:"ஜனவரி 26",
   choice3:"ஆகஸ்ட் 15",
   choice4:"டிசம்பர் 4",
   
   answer:1
   
},
{ 
   question:"கடற்படை தினம் ______",
   choice1:"ஜனவரி 15",
   choice2:"ஜனவரி 26",
   choice3:"டிசம்பர் 24",
   choice4:"டிசம்பர் 4",
   
   answer:4
   
},
{ 
   question:"விமானப்படையின் தலைமை அலுவலர் ________",
   choice1:"ஜெனரல்",
   choice2:"அட்மிரல்",
   choice3:"ஏர்சீப் மார்ஷல்",
   choice4:"விங் கம்மேன்டர்",
   
   answer:3
   
},
{
   question:"விமானப்படை தினம் ______",
   choice1:"அக்டோபர் 8",
   choice2:"டிசம்பர் 4",
   choice3:"ஜனவரி 15",
   choice4:"ஜனவரி 26",

   answer:1
        
},
{ 
   question:"உள்நாட்டுப்படை எந்த ஆண்டு நிறுவப்பட்டது",
   choice1:"1948",
   choice2:"1949",
   choice3:"1947",
   choice4:"1950",
   
   answer:2
   
},
{ 
   question:"ஊர்க்காவல்படை ஏற்படுத்தபட்ட ஆண்டு _______",
   choice1:"1978",
   choice2:"1979",
   choice3:"1980",
   choice4:"1981",
   
   answer:1
   
},
{ 
   question:"இந்தோ சீனப் போர் நடந்த ஆண்டு",
   choice1:"1962",
   choice2:"1926",
   choice3:"1961",
   choice4:"1942",
   
   answer:1
   
},
{ 
   question:"நமது முப்படைகளின் தலைமை தளபதி",
   choice1:"பிரதமர்",
   choice2:"குடியரசு தலைவர்",
   choice3:"ஆளுநர்",
   choice4:"முதலமைச்சர்",
   
   answer:2
   
},
{
   question:"விமானப்படை தினம் ______",
   choice1:"அக்டோபர் 8",
   choice2:"டிசம்பர் 4",
   choice3:"ஜனவரி 15",
   choice4:"ஜனவரி 26",

   answer:1
        
},
{ 
   question:"ஐ.நா. பன்னாட்டு பெண் ஆண்டாக அறிவித்த ஆண்டு",
   choice1:"1978",
   choice2:"1977",
   choice3:"1976",
   choice4:"1979",
   
   answer:1
      
},
{ 
   question:"வரதச்சனை தடுப்புச்சட்டம் கொண்டு வரப்பட்ட ஆண்டு",
   choice1:"1960",
   choice2:"1961",
   choice3:"1962",
   choice4:"1963",
   
   answer:2
   
},
{ 
   question:"தமிழ்நாட்டின் முதல் பெண் மருத்துவர்",
   choice1:"டாக்டர்.முத்துலெட்சுமி ரெட்டி",
   choice2:"விஜயலெட்சுமி",
   choice3:"சரோஜினி நாயுடு",
   choice4:"டாக்டர்.அன்னிபெசண்ட்",
   
   answer:1
   
},
{ 
   question:"உலக மக்கள் தொகை நாள்",
   choice1:"ஜூன் 5",
   choice2:"ஜூலை 11",
   choice3:"டிசம்பர் 4",
   choice4:"மார்ச் 11",
   
   answer:2
   
},
{
   question:"கொடி நாள்",
   choice1:"ஜூன் 5",
   choice2:"ஜூலை 11",
   choice3:"டிசம்பர் 7",
   choice4:"டிசம்பர் 4",
   
   answer:3
   
},
{ 
   question:"உலக எழுத்தறிவு நாள்",
   choice1:"ஜூன் 5",
   choice2:"ஜூலை 11",
   choice3:"செப்டம்பர் 8",
   choice4:"டிசம்பர் 7",
   
   answer:3
     
},
{ 
   question:"பன்னாட்டு எழுத்தறிவு ஆண்டாக அறிவிக்கப்பட்டது",
   choice1:"1990",
   choice2:"1991",
   choice3:"1992",
   choice4:"1993",
   
   answer:1
   
},
{ 
   question:"குழந்தை தொழிலாளர் முறையை தடுக்கும் சட்டப்பிரிவு",
   choice1:"பிரிவு 23",
   choice2:"பிரிவு 45",
   choice3:"பிரிவு 25",
   choice4:"பிரிவு 40",
   
   answer:1
   
},
{
   question:"கொடி நாள்",
   choice1:"ஜூன் 5",
   choice2:"ஜூலை 11",
   choice3:"டிசம்பர் 7",
   choice4:"டிசம்பர் 4",
   
   answer:3
   
},
{ 
   question:"உலக எழுத்தறிவு நாள்",
   choice1:"ஜூன் 5",
   choice2:"ஜூலை 11",
   choice3:"செப்டம்பர் 8",
   choice4:"டிசம்பர் 7",
   
   answer:3
     
},
{ 
   question:"பன்னாட்டு எழுத்தறிவு ஆண்டாக அறிவிக்கப்பட்டது",
   choice1:"1990",
   choice2:"1991",
   choice3:"1992",
   choice4:"1993",
   
   answer:1
   
},
{ 
   question:"துருவக்காடுகள் எனப் பெயர் பெற்றவை",
   choice1:"பாலைகள்",
   choice2:"வெப்பகாடுகள்",
   choice3:"ஊசியிலைகாடுகள்",
   choice4:"மிதவெப்பகாடுகள்",
   
   answer:3
   
},
{
   question:"மித வெப்ப காடுகளில் காணப்படும் மரங்கள்",
   choice1:"ஓக்",
   choice2:"சாம்பல்",
   choice3:"பீச்",
   choice4:"இவை அனைத்தும்",
   
   answer:4
},
{ 
   question:"கண்டங்களின்உட்பகுதியில்காணப்படுபவை",
   choice1:"வெப்ப புல்வெளிகள்",
   choice2:"மித வெப்ப புல்வெளிகள்",
   choice3:"பாலைகள்",
   choice4:"வெப்ப காடுகள்",
   
   answer:2
    
},
{ 
   question:"ஆர்டிக் பனிக்குவிப்பிற்கும் ஊசியிலைகாடுகளின் வடஎல்லைகளுக்கும் இடையில் கானப்படுபவை",
   choice1:"துந்திரங்கள்",
   choice2:"வெப்ப காடுகள்",
   choice3:"புல்வெளிகள்",
   choice4:"பாலைகள்",
   
   answer:1
   
},
{ 
   question:"சிந்து சமவெளி நாகரீகம் தொடங்கிய ஆண்டு",
   choice1:"கி.மு.6000",
   choice2:"கி.மு.3000",
   choice3:"கி.மு.8500",
   choice4:"கி.மு.9000",
   
   answer:2
},
{ 
   question:"உலகின் மிக பழமையான சட்டங்களை வகித்தவர்",
   choice1:"ஹமுராபி",
   choice2:"டோரா",
   choice3:"அலெக்சாண்டர்",
   choice4:"இவரில் யாருமில்லை",
   
   answer:1
   
},
{
   question:"நமது தாய்நாட்டை முதலில் இந்தியா என்று அழைத்தவர்",
   choice1:"ரஷ்யர்கள்",
   choice2:"சீனர்கள்",
   choice3:"கிரேக்கர்கள்",
   choice4:"அமெரிக்கர்கள்",
   
   answer:3
   
},
{ 
   question:"அறிவியல் மற்றும் நுட்பம் சார்ந்த மனித மேம்பாட்டில் இந்தியா பெற்றுள்ள இடம்",
   choice1:"முதலாவது",
   choice2:"மூன்றாவது",
   choice3:"இரண்டாவது",
   choice4:"நான்காவது",
 
   answer:2
   
},
{ 
   question:"இந்தியாவிற்கு மேற்கில் அமைந்துள்ள தீபகற்பம்",
   choice1:"அரேபியா",
   choice2:"இலட்சத்தீவு",
   choice3:"இந்தோ-சீனதீபகற்பம்",
   choice4:"இவற்றில் எதுவுமில்லை",
   
   answer:1
    
},
{ 
   question:"இந்தியாவை ஹிந்துஸ்தான் என்று அழைத்தவர்",
   choice1:"முகமதியர்கள்",
   choice2:"சீனர்கள்",
   choice3:"பாரசீகர்கள்",
   choice4:"ஆங்கிலேயர்கள்",
   
   answer:1
   
},
{ 
   question:"இந்தியா சிறிய நாடுகளை இனைத்து குடியரசாய் மாறிய ஆண்டு",
   choice1:"1947",
   choice2:"1949",
   choice3:"1948",
   choice4:"1950", 
   
   answer:4
   
},
{ 
   question:"இந்தியாவின் வடக்கு தெற்கான நீளம்",
   choice1:"2,933 கி.மீ",
   choice2:"3,214 கி.மீ",
   choice3:"6,100 கி.மீ",
   choice4:"15,200கி.மீ",
   
   answer:2
   
},
{
   question:"இந்தியாவின் மொத்த பரப்பளவு",
   choice1:"3.5 மில்லியன்கி.மீ",
   choice2:"2.5 மில்லியன்கி.மீ",
   choice3:"3.3 மில்லியன்கி.மீ",
   choice4:"3.7 மில்லியன்கி.மீ",
   
   answer:3
},
{ 
   question:"இந்தியாவின் இயற்கை அரண்",
   choice1:"இமயமலை",
   choice2:"விந்திய-சாத்பூராமலை",
   choice3:"ஆரவல்லிமலை",
   choice4:"இவற்றில் எதுவுமில்லை",
   
   answer:1
   
},
{ 
   question:"இந்தியாவின் வர்த்தக தொடர்புடைய நாடுகள்",
   choice1:"எகிப்து",
   choice2:"பாபிலோன்",
   choice3:"ரோம்",
   choice4:"இவை மூன்றும்",
   
   answer:4
   
},
{ 
   question:"இந்தியாவை ஒருநாடு என கூறுவதை விட இவ்வாறு கூறலாம்",
   choice1:"துணைக்கண்டம்",
   choice2:"ஐரோப்பியாவின் வாணிக பகுதி",
   choice3:"ஆட்சி நாடு",
   choice4:"இவற்றில் எதுவுமில்லை",

   answer:1
     
},
{ 
   question:"இந்தியாவின் தென்கிழக்கு பகுதியில் அமைந்துள்ள மாநிலம்",
   choice1:"கேரளா",
   choice2:"தமிழ்நாடு",
   choice3:"கர்நாடகா",
   choice4:"குஜராத்",
   
   answer:2
   
},
{
   question:"மதராஸ் மாகாணம் தமிழ்நாடு எனப் பெயர் மாற்றம் செய்யப்பட்ட ஆண்டு",
   choice1:"1969",
   choice2:"1950",
   choice3:"1947",
   choice4:"1970",
   
   answer:1
   
},
{ 
   question:"மதராஸ் மாகாணத்தில் 1881ம் ஆண்டு இருந்த மாவட்டஙளின் எண்ணிக்கை",
   choice1:"37",
   choice2:"40",
   choice3:"21",
   choice4:"26",
 
   answer:4
   
},
{ 
   question:"சிறுபொழுது என்பது",
   choice1:"ஒருநாள்",
   choice2:"ஒரு ஆண்டு",
   choice3:"ஒரு மாதம்",
   choice4:"ஒரு பகல்",
   
   answer:1
    
},
{ 
   question:"மேற்கு தொடர்ச்சி மலையும் கிழக்கு தொடர்ச்சி மலையும் இணையும் பகுதி",
   choice1:"ஆனைமலை",
   choice2:"தொட்டப்பெட்டா",
   choice3:"கஞ்சன்சங்கா",
   choice4:"தவளகிரி",
   
   answer:2
   
},
{ 
   question:"மேற்கு தொடர்ச்சி மலையின் உயர்ந்த சிகரம்",
   choice1:"ஆணைமலை",
   choice2:"தொட்டப்பெட்டா",
   choice3:"கஞ்சன்சங்கா",
   choice4:"தவளகிரி",

   answer:2
   
},
{
   question:"பழனி மலையின் தொடர்ச்சி",
   choice1:"குற்றால மலை",
   choice2:"மகேந்திரகிரி மலை",
   choice3:"ஆணைமலை",
   choice4:"கொடைகானல் மலை",
   
   answer:4
   
},
{ 
   question:"அகத்தியர் மலை அமைந்துள்ள இடம்",
   choice1:"திருநெல்வேலி",
   choice2:"மதுரை",
   choice3:"தர்மபுரி",
   choice4:"திருவாரூர்",
 
   answer:1
   
},
{ 
   question:"கிழக்கு தொடர்ச்சி மலையில் அமைந்துள்ள மலைகள்",
   choice1:"ஜவ்வாது மலை",
   choice2:"பச்சை மலை",
   choice3:"கல்ராயன்மலை",
   choice4:"இவை மூன்றும்",
   
   answer:4
    
},
{ 
   question:"விழுப்புரம் மாவட்டத்தில் அமைந்துள்ள மலை",
   choice1:"கல்ராயன் மலை",
   choice2:"சேர்வராயன் மலை",
   choice3:"பச்சை மலை",
   choice4:"கொல்லி மலை",
   
   answer:1
   
},
{
   question:"மேற்கு தொடர்ச்சி மலைக்கும் கிழக்கு தொடர்ச்சி மலைக்கும் இடையில் காணப்படுவது",
   choice1:"பீடபூமி",
   choice2:"வளைகுடா",
   choice3:"பாலைவனம்",
   choice4:"ஆறு",
   
   answer:1
   
},
{ 
   question:"தமிழ்நாட்டில் சேர்வராயன் குன்றுகளுக்கு மேற்கில் காண்ப்படும் பீடபூமி",
   choice1:"தக்காணபீடபூமி",
   choice2:"மதுரை",
   choice3:"தர்மபுரி",
   choice4:"பாராமஹால் பீடபூமி",
 
   answer:4
   
},
{ 
   question:"தமிழ்நாட்டின் நெற்களஞ்சியம்",
   choice1:"தஞ்சாவூர்",
   choice2:"மதுரை",
   choice3:"சேலம்",
   choice4:"திருல்நெல்வேலி",
   
   answer:1
    
},
{ 
   question:"கல்ராயன் மலையில் உற்பத்தியாகும் ஆறு",
   choice1:"மஞ்சளாறு",
   choice2:"வைகை",
   choice3:"காவேரி",
   choice4:"மணிமுத்தாறு",
   
   answer:4
   
},
{ 
   question:"ஆர்டிசன் நீரூற்றுகள் உள்ள பள்ளத்தாக்கு",
   choice1:"ஆத்தூர் பள்ளத்தாக்கு",
   choice2:"வெள்ளாற்று பள்ளத்தாக்கு",
   choice3:"வேலூர் பள்ளத்தாக்கு",
   choice4:"இவற்றில்எதுவுமில்லை",
   
   answer:2
   
},
{
   question:"நீலகிரியிலிருந்து தர்மபுரிவரை உள்ள பகுதி",
   choice1:"கோயம்புத்தூர் பீடபூமி",
   choice2:"தக்காண பீடபூமி",
   choice3:"சேலம் பீடபூமி",
   choice4:"வேலூர் பீடபூமி",
   
   answer:1
   
},
{ 
   question:"ஓர் இடத்தில் ஒருநாளில் நிலவும் தட்பவெப்பநிலை",
   choice1:"வானிலை",
   choice2:"காலநிலை",
   choice3:"பருவகாலம்",
   choice4:"வெப்பமாற்றம்",
   
   answer:1
   
},
{ 
   question:"மழையை வைத்து வட்டாரங்களாக பாகுபடுத்தப்பட்ட மாநிலம்",
   choice1:"கர்நாடகா",
   choice2:"ஆந்திரா",
   choice3:"தமிழ்நாடு",
   choice4:"கேரளா",
   
   answer:3
      
},
{ 
   question:"வடக்கு கடற்கரை மாவட்டங்களின் சராசரி மழையளவு",
   choice1:"381 மி.மீ",
   choice2:"457 மி.மீ",
   choice3:"635 மி.மீ",
   choice4:"280 மி.மீ",
   
   answer:3
   
},
{ 
   question:"உள்மாவட்டங்கள் எனப்படுபவை",
   choice1:"மதுரை,தேனி",
   choice2:"சேலம்,தர்மபுரி",
   choice3:"சிவகங்கை,தூத்துக்குடி",
   choice4:"கடலூர்,வேலூர்",
   
   answer:1
   
},
{ 
   question:"நீலகிரி மாவட்டத்தின் சராசரி மழையளவு",
   choice1:"280 மி.மீ",
   choice2:"507 மி.மீ",
   choice3:"387 மி.மீ",
   choice4:"451 மி.மீ",
   
   answer:2
      
},
{ 
   question:"தெற்கு கடற்கரை மாவட்டங்கள் எனப்படுபவை",
   choice1:"தூத்துக்குடி",
   choice2:"திருநெல்வேலி",
   choice3:"இராமநாதபுரம்",
   choice4:"இவை மூன்றும்",
   
   answer:4
   
},
{ 
   question:"கிழக்கு கடற்கரையோரத்தில் அமைந்துள்ள தமிழ்நாட்டு தலைநகரம்",
   choice1:"சென்னை",
   choice2:"விசாகப்பட்டினம்",
   choice3:"தஞ்சை",
   choice4:"திருச்சி",
   
   answer:1
   
},
{ 
   question:"கடல்மட்டத்திலிருந்து உயரே செல்ல செல்ல வெப்பநிலை",
   choice1:"மிதமாக மாறும்",
   choice2:"குறையும்",
   choice3:"அதிகரிக்கும்",
   choice4:"இருக்கும்",

   answer:2
   
},
{ 
   question:"பருவகால தாழ்ச்சிகள் எனப்படுபவை",
   choice1:"புயல்",
   choice2:"காற்று",
   choice3:"சூறாவளி",
   choice4:"மழை",
   
   answer:3
   
},
{ 
   question:"நகர வெப்பதீவுகள் உருவாகும் இடம்",
   choice1:"தீவுகள்",
   choice2:"மலைகள்",
   choice3:"பெருநகரங்கள்",
   choice4:"கிராமங்கள்",
   
   answer:3
   
},
{ 
   question:"மண்வகையிலேயே மிகசிறந்த மண்",
   choice1:"கரிசல்",
   choice2:"வண்டல்",
   choice3:"செம்மண்",
   choice4:"துவர்மண்",
   
   answer:2
   
},
{ 
   question:"கடலோர பகுதிகளில் டெல்டா பகுதிகளில் உள்ள மண்",
   choice1:"வண்டல்",
   choice2:"கரிசல்",
   choice3:"செம்மண்",
   choice4:"துவர்மண்",
   
   answer:1
   
},
{ 
   question:"வண்டல் மண்ணில் உள்ள சத்துக்கள்",
   choice1:"சுண்ணாம்பு",
   choice2:"பொட்டாசியம்",
   choice3:"மெக்னீசியம்",
   choice4:"இவை அனைத்தும்",

   answer:4
     
},
{ 
   question:"நீரை வேகமாக உறிஞ்சும் தன்மையுடைய மண்",
   choice1:"கரிசல்",
   choice2:"செம்மண்",
   choice3:"துவர்மண்",
   choice4:"வண்டல்",
   
   answer:2
   
},
{ 
   question:"வேதாரண்யத்தின்ஒருசிறுபகுதியில்காணப்படும்மண்",
   choice1:"கரிசல்",
   choice2:"செம்மண்",
   choice3:"துவர்மண்",
   choice4:"வண்டல்",
   
   answer:3
   
},
{ 
   question:"டாட்டா இரும்பு மற்றும் எஃகு நிறுவனம் எந்த இடத்தில் அமைந்துள்ளது?",
   choice1:"துர்காபூர்",    
   choice2:"பிலாய்",
   choice3:"ஜம்சேத்பூர்",
   choice4:" பரம்பூர்",
   
   answer:3
   
},
{ 
   question:"கீழ்க்காணும் எந்த மாநிலத்தில் ராஜாஜி புலிகள் காப்பகம் அமைந்துள்ளது",
   choice1:"உத்தரகாண்ட்",
   choice2:"மகாராஷ்டிரா",
   choice3:"அருணாசலப்பிரசதேம்",
   choice4:"தமிழ்நாடு",
   
   answer:1
   
},
{ 
   question:"வண்டல் மண்ணில் உள்ள சத்துக்கள்",
   choice1:"சுண்ணாம்பு",
   choice2:"பொட்டாசியம்",
   choice3:"மெக்னீசியம்",
   choice4:"இவை அனைத்தும்",

   answer:4
     
},
{ 
   question:"நீரை வேகமாக உறிஞ்சும் தன்மையுடைய மண்",
   choice1:"கரிசல்",
   choice2:"செம்மண்",
   choice3:"துவர்மண்",
   choice4:"வண்டல்",
   
   answer:2
   
},
{ 
   question:"வேதாரண்யத்தின்ஒருசிறுபகுதியில்காணப்படும்மண்",
   choice1:"கரிசல்",
   choice2:"செம்மண்",
   choice3:"துவர்மண்",
   choice4:"வண்டல்",
   
   answer:3
   
},
{ 
   question:"டாட்டா இரும்பு மற்றும் எஃகு நிறுவனம் எந்த இடத்தில் அமைந்துள்ளது?",
   choice1:"துர்காபூர்",    
   choice2:"பிலாய்",
   choice3:"ஜம்சேத்பூர்",
   choice4:" பரம்பூர்",
   
   answer:3
   
},
{ 
   question:"கீழ்க்காணும் எந்த மாநிலத்தில் ராஜாஜி புலிகள் காப்பகம் அமைந்துள்ளது",
   choice1:"உத்தரகாண்ட்",
   choice2:"மகாராஷ்டிரா",
   choice3:"அருணாசலப்பிரசதேம்",
   choice4:"தமிழ்நாடு",
   
   answer:1
   
},
{ 
   question:"கீழ்க்காணும் எந்த கண்டத்தில் ஆல்ஃப்ஸ் மலைத்தொடர் அமைந்துள்ளது",
   choice1:"ஐரோப்பா",
   choice2:"ஆசியா",
   choice3:"ஆப்பிரிக்கா",
   choice4:"ஆஸ்திசரலியா",
   
   answer:3
   
},
{ 
   question:"இந்தியாவில் முதல்முதலாக எந்த மாநிலத்தில் நடமாடும் உணவு சோதக்னைகூடம் நிறுவப்பட்டுள்ளது?",
   choice1:"கோவா",    
   choice2:"மத்தியபிரசதேம்",
   choice3:"மகாராஷ்டிரா",
   choice4:"டெல்லி",
   
   answer:3
   
},
{ 
   question:"கீழ்க்காணும் எந்த மாநிலத்தில் ராஜாஜி புலிகள் காப்பகம் அமைந்துள்ளது",
   choice1:"உத்தரகாண்ட்",
   choice2:"மகாராஷ்டிரா",
   choice3:"அருணாசலப்பிரசதேம்",
   choice4:"தமிழ்நாடு",
   
   answer:1
   
},
{
   question:"மகேந்திரவர்ம பல்லவனின் 'தட்சிணசித்திரம்'  எவ்வகை நூல்", 
   choice1:"வரலாற்று நூல்",
   choice2:"ஓவியநூல்",
   choice3:"நாட்டியநூல்",
   choice4:"நாடகநூல்",
  
  answer:2
},

{
   question:"இறையருள் பெற்த திருக்குழந்தை எனப் பாராட்டப் பெற்வைர்",
   choice1:"மாணிக்கவாசகர்",
   choice2: "திருநாவுக்கரசர்",
   choice3:"ராமலிங்க அடிகளார்",
   choice4:"தாயுமானவர்",
   
   answer:3
   },
   
   
   
   {
   question:"ஒவ்வொரு செய்தியாளரும் னைக்கென ஒதுக்கப்பட்ட இடங்களுக்கோ அலுவலகங்களுக்கோ நாள்தோறும் சென்று செய்திகளை திரட்டுவார் இதனை எவ்வாறு குறிப்பிடுவர்",
   choice1:"துப்பறிதல்",
   choice2:"செய்திகளம்", 
   choice3:"செய்தியின் மூலம்", 
   choice4:"செய்திகளை திரட்டும் இடம்", 
   
   answer:2
   },
   
   
   {
   question:"முதன் முதலில் நடத்தப்பட்ட தேசிய சமுதாய நாடகம்",
   choice1:"கதரின் வெற்றி" ,
   choice2:"டம்பாச்சாரி விலாசம்", 
   choice3:"பவளக்கொடி",
   choice4:"நந்தனார் சரித்திரம்", 
   
   answer:1
   },
   
   {
   question:"நாடகம் ஏத்தும் கணிகை என்று இளங்கோ அடிகள் சிலப்பதிகாரத்தில் யாரை குறிப்பிடுகிறார்?",
   choice1:"மணிமேகலை",
   choice2:"மாதவி",
   choice3:"கண்ணகி", 
   choice4:"சுமைதி",
   
   answer:2
   },
   
   
   {
   question:"வீரமாமுனிவர் தமிழ் முனிவர்களுள் ஒருவராக விளங்குகின்றார் என்று கூறியவர்",
   choice1:"ரா பி சேதுப்பிள்ளை",
   choice2:"குணங்குடி மஸ்றான் சாகிபு", 
   choice3:"ஆறுமுக நாவலர்",
   choice4:"பரிதிமாற்கலைஞர்", 
   
   answer:1
   },
   {
      question:"ஆபுத்திரன் நாடு அடைந்த காதை மணிமேகலையில் எத்தனாவது காதை",
      choice1:"பன்னிரண்டாவது",
      choice2:"இருபத்தி நான்காவது காதை",
      choice3:"பதினான்காவது காதை",
      choice4:"இருபறாவது காதை",
      
      answer:2
   },
      
   {
      question:"பாட்டாளி மக்களின் பசி தீர வேண்டும் பணமென்ற மோகத்தின் விசை தீர வேண்டும் என்று முழங்கிய கவிஞர் யார்?",
      choice1:"கவிமணி",
      choice2:"நாமக்கல் கவிஞர்", 
      choice3:"முடியரசன்",
      choice4:"சுரதா",
      
      answer:2
      },
      
      
      {
      question:"பசிப்பிணி என்னும் பாவி என்று பசியின் கொடுமையை கூறும் காப்பியம்", 
      choice1:"யசோரை காவியம்" ,
      choice2:"மணிகமகலை",
      choice3:"சிலப்பதிகாரம்",
      choice4:"குண்டலகேசி",
      
      answer:2
      },
      
      
      {
      question:"காய் முன் நிரை வருவது",
      choice1:"கலித்தளை",
      choice2:"வெண்சீர் வெண்டளை", 
      choice3:"இயற்சீர் வெண்டளை",
      choice4:"ஒன்றிய வஞ்சித்தளை", 
      
      answer:1
      },
      
      {
      question:"மென்று வேர்ச்சொல்லை அறிக",
      choice1:"மெல்",
      choice2:"மென்த", 
      choice3:"மென்றான்", 
      choice4:"மென்",
      
      answer:1
      },
      
      {
      question:"பொருந்தாத சொல்லை கண்டறிக", 
      choice1:"தேவாரம்",
      choice2:"திருவாசகம்", 
      choice3:"திருப்பாவை",
      choice4:"திருவெம்பாவை", 
      
      answer:1
      },
      
      
      {
      question:"உண் என்னும் வேர்ச்சொல்லின் வினை எச்சம்",
      choice1:"உண்டு",
      choice2:"உண்டான்", 
      choice3:"உண்டவர்",
      choice4:"உண்ணுதல்",

      answer:1
      },
      
      {
      question:"விரிகதிர் இலக்கணக்குறிப்பு தருக",
      choice1:"பண்புத் தொகை",
      choice2:"வினைத் தொகை", 
      choice3:"உவமைத் தொகை", 
      choice4:"உம்மைத் தொகை",

      answer:2
      },
      
      
      {
      question:"பொறு என்த வேர் சொல்லின் தொழிற்பெயர் என்ன",
      choice1:"பொறுத்தான்",
      choice2:"பொறுத்தல்",
      choice3:"பொறுக்கினான்", 
      choice4:"வெறுத்தான்",
      
      answer:2
      },
      
      {
      question:"பெரியபுராணம் எந்த திருமுறைக்கு உட்பட்டது",
      choice1:"12",
      choice2:"10",
      choice3:"9",
      choice4:"11", 
      
      answer:1
      },

      {
         question:"தமிழே மிகவும் பண்பட்ட மொழி அது தனக்கென உரிய இலக்கியச் செல்வங்களைப் பெற்றிருக்கும் மொழி என்று கூறியவர் யார்",
         choice1:"கெல்லட்",
         choice2:"மாக்ஸ்முல்லர்", 
         choice3:"கமல்சுலபமில்",
         choice4:"கால்டுவெல்",
         
         answer:2
         },
         
         {
         question:"நீரின் வந்த நிமிர்பரிப் புரவியும் காலின் வந்த கருங்கறி மூடையும் என்த வரிகள் இடம்பெற்றுள்ள நூல் எது?",
         choice1:"மதுரைக்காஞ்சி",
         choice2:"புறநானூறு",
         choice3:"பதிற்றுப்பத்து", 
         choice4:"பட்டினப்பாலை",
         
         answer:4
         },
         
         {
         question:"செந்தமிழ் நாடெனும் போதினிலே இன்பத் தேன் வந்து பாயுது காதினிலே என்று பாடியவர் யார்?",
         choice1:"பாரதிதாசன்",
         choice2:"கம்பர்",
         choice3:"பாரதியார்", 
         choice4:"அவ்வையார்",
         
         answer:3
         },
         
         {
         question:"ரூபாவதி கலாவதி நாடகங்களின் ஆசிரியர் யார்?",
         choice1:"அயோத்திதாசர்",
         choice2:"பம்மல் சம்பந்தனார்", 
         choice3:"பரிதிமாற்கலைஞர்",
         choice4:"தேவனேயப்பாவாணர்",
         
         answer:3
         },
          
         {
         question:"பிரான்சிஸ் சென்கின்ஸ் என்பவர் எந்த ஆண்டு ரிச்மண்ட் என்னுமிடத்தில் பலரும் பார்க்கும் வகையில் இயக்கப் படத்தை வடிவமைத்தார்",
         choice1:"1862",
         choice2:"1864",
         choice3:"1831",
         choice4:"1894",
         answer:4
         },
         
         {
         question:"வீறுநடை செம்மொழி தமிழ்மொழி உலகம் வேரூன்றிய நாள்முதல் உயிர்மொழி என்று தமிழின் பெருமையை பறை சாற்றியவர் யார்?",
         choice1:"பெருஞ்சித்திரனார்",
         choice2:"பாவனார்",
         choice3:"பரிதிமாற்கலைஞர்", 
         choice4:"திரு வி க",
         
         answer:1
         },
         
         {
         question:"எந்த தீவில் தமிழர்கள் ஒப்பந்தக் கூலிகளாக குடியமர்த்தப்பட்டனர்",
         choice1:"பினாங்கு",
         choice2:"ரியூனியன்", 
         choice3:"பிஜி",
         choice4:"அந்தமான்",
         
         answer:2
         },
          
         {
         question:"ஞாயிறு வட்டம் என்று குறிப்பு காணப்படும் நூல்",
         choice1:"சிலப்பதிகாரம",
         choice2:"புறநானூறு",
         choice3:"சீவகசிதாமணி",
         choice4:"மணிமேகலை",
         
         answer:2
         },
         
         
         {
         question:"ஒரு நாட்டில் பிறந்த மக்களுக்கு வேண்டப்படும் பற்றுகளில் தலையாய பற்று மொழிப் பற்று என்று கூறியவர் யார்?",
         choice1:"காந்தியடிகள்",
         choice2:"ஈவே ராமசாமி", 
         choice3:"பரிதிமாற்கலைஞர்", 
         choice4:"பெருஞ்சித்திரனார்",
         
         answer:2
         },
         
         
         {
         question:"அசலாம்பிகை அம்மையார் பிறந்த ஊர் எது?", 
         choice1:"நல்லூர்",
         choice2:"விளாச்சேரி", 
         choice3:"முரம்பு",
         choice4:"இரட்டனை",
         
         answer:4
         },
         
         
         {
         question:"இழைகத்து அனைய தெருவம் இழைகத்து அனைத்கை அண்ணல் கோயில் என்த பாடல் இதில் இடம் பெற்றுள்ளது",
         choice1:"மணிமேகலை",
         choice2:"சீவகசிதாமணி", 
         choice3:"மதுரைக்காஞ்சி",
         choice4:"பரிபாடல்",
         
         answer:4
         },
         
         
         {
         question:"உவேசா பிறந்த ஊர் எது?",
         choice1:"உத்தமநாதபுரம்",
         choice2:"லட்சுமிபுரம்",
         choice3:"திருச்சி",
         choice4:"திருப்பூர்", 
         
         answer:1
         },
         
         {
            question:"நோய்க்கு மருந்து இலக்கியம் என்று கூறியவர் யார்?",
            choice1:"குமரகுருபரர்",
            choice2:"மகாவித்துவான் மீனாட்சிசுந்ரைனார்",
            choice3:"உ வே சாமிநாத ஐயர்",
            choice4:"கம்பர்",
            
            answer:2
            },
            
            
            {
            question:"மனித நாகரிகத் தொட்டில் என்று அழைக்கப்படுவது?",
            choice1:"எகிப்து" ,
            choice2:"லெமூரியா", 
            choice3:"ஹரப்பா",
            choice4:"சிந்து",
            
            answer:2
            },
            
            
            {
            question:"பரிதிமாற்கலைஞர் வசன நடை கைவந்த வள்ளலார் என்று யாரை பாராட்டினார்?",
            choice1:"ரா பி சேதுப்பிள்ளை",
            choice2:"ஆறுமுகநாவலர்",
            choice3:"மூ.வ",
            choice4:"புதுமைப்பித்தன்", 
            
            answer:2
            },
            
            
            {
            question:"இந்தியன் சஞ்சிகை, இந்தியாவின் தொல்பொருள் ஆய்வு முதலான ஏடுகளில் தமிழ் மொழி பற்றிய ஆராய்ச்சி கட்டுரைகளை ஆங்கிலத்தில் எழுதி வெளியிட்டவர் யார்?",
            choice1:"கால்டுவெல்",
            choice2:"வீரமாமுனிவர்", 
            choice3:"ஜி யு போப்",
            choice4:"தேவநேயபாவணர்",
            
            answer:3
            },
             
            {
            question:"நாடகத்தின் அடிப்படை அமைப்பு",
            choice1:"இசை",
            choice2:"போலச்செய்தல்", 
            choice3:"பாட்டு",
            choice4:"நடிப்பு",
            
            answer:2
            },
            
            
            {
            question:"தமிழை வடமொழி வல்லாண்மையிலிருந்து மீட்பதற்காகவே இறைவன் என்னை படைத்தான் என்று கூறியவர் யார்?",
            choice1:"பரிதிமாற் கலைஞர்",
            choice2:"மறைமலை அடிகளார்", 
            choice3:"மு வரத்தாசனார்",
            choice4:"தேவநேயப்பாவனர்",
            
            answer:4
            },
            
            
            {
            question:"கலையுரைத்த கற்பனையே நிலை என கொண்டாடும் கண்மூடி வழக்கமெலாம் மண்மூடிப் போக என்று கூறியவர் யார்?",
            choice1:"வள்ளலார்",
            choice2:"பெருஞ்சித்திரனார்",
            choice3:"தாயுமானவர்",
            choice4:"மறைமலை அடிகளார்",
            
            answer:1
            },
            
             
            {
            question:"வெண்பா எவ்வகை ஓசை பெற்று வரும்",
            choice1:"அகவல் ஓசை",
            choice2:"செப்பலோசை",
            choice3:"துள்ளகலாசை",
            choice4:"தூங்ககலாசை",
            
            answer:2
            },
            
            {
            question:"அப்பா நான் வேண்டுதல் கேட்டு அருள் புரிதல் வேண்டும் ஆருயிர்கட் கெல்லாம்நான் அன்புசெயல் வேண்டும் என்று பாடியவர்?",
            choice1:"திருநாவுக்கரசர்",
            choice2:"திருஞானசம்பந்தர்", 
            choice3:"மாணிக்கவாசகர்",
            choice4:"வள்ளலார்",
            
            answer:4
            },
 
            {
               question:"உடம்பிடை தோன்றிய ஒன்றை அறுத்த்தன் உதிரம் ஊற்றி என்று அறுவை சிகிச்சை மருத்துவத்றை பற்றி அன்றே பாடியவர் யார்?",
               choice1:"அவ்வையார்",
               choice2:"வள்ளுவர்",
               choice3:"கம்பர் ",
               choice4:"மாணிக்கவாசகர்", 
               
               answer:3
               },
               
               {
               question:"விளையாட்டின் அடிப்படை நோக்கம் என்ன?",
               choice1:"வெற்றி",
               choice2:"திறமை",
               choice3:"போட்டியிடுதல்",
               choice4:"ஆர்வம்",
               
               answer:3
               },
               
               
               {
               question:"1913ஆம் ஆண்டு எந்த இடத்தில் வள்ளியம்மை கைது செய்யப்பட்டார்",
               choice1:"வால்க்ஸ்ரஸ்ட்",
               choice2:"ஜொகன்ஸ்பர்க்", 
               choice3:"புதுச்சேரி",
               choice4:"தில்லையாடி",
               
               answer:1
               },
               
                
               {
               question:"நாடக உலகின் இமயமலை என்று அழைக்கப்படுவெர் யார்?",
               choice1:"பரிதிமார் கலைஞர்",
               choice2:"பம்மல் சம்பந்தனார்", 
               choice3:"சங்கரதாஸ் சுவாமிகள்", 
               choice4:"சுந்தரனார்",
               
               answer:3
               },
               
               {
               question:"தமிழ் மூவாயிரம் எனப்படும் நூல் எது?",
               choice1:"தேவாரம்",
               choice2:"திருவாசகம்",
               choice3:"திருமந்திரம்",
               choice4:"திருக்குறள்",
               
               answer:3
               },
               
               
               {
               question:"உலகம் முழுவதையும் ஆள கருதுவர் எதற்காக காத்திருக்க வேண்டும்",
               choice1:"படை வரும் வரை",
               choice2:"பணம் வரும் வரை", 
               choice3:"காலம் வரும்வரை",
               choice4:"பலம் வரும் வரை",
               
               answer:3
               },
               
               {
               question:"26 முதல் 32 வயதுவரை உடைய பருவ மகளிர் எவ்வாறு அழைக்கப்படுவர்?", 
               choice1:"மங்கை",
               choice2:"மடந்தை", 
               choice3:"அரிவை",
               choice4:"தெரிவை",
               
               answer:4
               },
               
                
               {
               question:"இணையில்லை முப்பாலுக்கு இந்நிலத்தே எனப் பாடியவர் யார்?",
               choice1:"பாரதியார்",
               choice2:"பாரதிதாசன்", 
               choice3:"சுரதா",
               choice4:"திருவள்ளுவர்",
               
               answer:2
               },
               
                
               {
               question:"மாகதம் எனப்படுவது",
               choice1:"மதுரகவி",
               choice2:"சித்திரகவி", 
               choice3:"ஆசுகவி",
               choice4:"வித்தார கவி",
               
               answer:4
               },
               
                
               {
               question:"ஆசாரக் கோவையின் ஆசிரியர் யார்?",
               choice1:"நல்லாதனார்",
               choice2:"பெருவாயின் முள்ளியார்", 
               choice3:"முன்றுறை அரையனார்",
               choice4:"காரியாசன்",
               
               answer:2
               },
               
               
               {
               question:"வா என்ற வேர்ச் சொல்லின் தொழிற்பெயரை கண்டறிக?",
               choice1:"வருதல்",
               choice2:"வந்தான்", 
               choice3:"வந்து",
               choice4:"வந்த",
               
               answer:1
               },
               
               {
               question:"சாலை இளந்திரையன் தமிழக அரசின் பாவேந்தர் விருது பெற்த ஆண்டு?",
               choice1:"1990",
               choice2:"1993",
               choice3:"1991",
               choice4:"1994",
               
               answer:3
               },
               
               
               {
               question:"������ிழ் இலக்கணம் படிக்க படிக்க விருப்பத்தை உண்டாக்குவது என்று கூறியவர் யார்?",
               choice1:"அம்பேத்கர்",
               choice2:"கெல்லட்",
               choice3:"முனைவர் எமினோ", 
               choice4:"மாக்ஸ்முல்லர்",
               answer:2
               },
               
               
               {
               question:"மேதி என்ற சொல்லுக்கான பொருள் என்ன?",
               choice1:"அழகு",
               choice2:"பசு",
               choice3:"எருமை",
               choice4:"சிவன்",
               
               answer:3
               },
               
               
               {
               question:"தில்லையாடி வள்ளியம்மையின் தியாகத்தைப் பற்றி காந்தியடிகள் எந்த இதழில் எழுதியுள்ளார்?",
               choice1:"இந்தியன் போஸ்ட்",
               choice2:"பைன் ஆப்பிரிக்க சத்தியாகிரகம்", 
               choice3:"இந்தியன் ஒப்பினியன்",
               choice4:"இந்தியன் வீல்",
               
               answer:3
               },
               
               {
               question:"குருசு என்பதன் பொருள்",
               choice1:"சிலுவை",
               choice2:"ஏளனம்",
               choice3:"சினம்",
               choice4:"அடியார்",
               
               answer:1
               },
                
               {
               question:"அரசனைக் குறிக்கும் ஓரெழுத்து ஒரு மொழி என்ன?",
               choice1:"பூ",
               choice2:"கோ", 
               choice3:"கா",
               choice4:"ஆ",
               
               answer:2
               },
               
               
               {
               question:"பெண்கள் உரிமை பெற்று புது உலகைப் படைக்க வேண்டும் என்று விரும்பியவர் யார்?",
               choice1:"பாரதியார்",
               choice2:"பாரதிதாசன்", 
               choice3:"பெரியார்",
               choice4:"அம்பேத்கார்", 
               
               answer:3
               },

               {
                  question:"புறநானூற்றில் சில பாடல்களை ஆங்கிலத்தில் மொழி பெயர்த்வைர் யார்?",
                  choice1:"கால்டுவெல்",
                  choice2:"பெஸ்கி",
                  choice3:"ஜி யு கொப்", 
                  choice4:"செல்லி",
                  
                  answer:3
                  },
                  
                  
                  {
                  question:"ஆனந்தரங்கர் எழுதிய நாட்குறிப்புகள் எத்தனை தொகுதிகள்?",
                  choice1:"10",
                  choice2:"12",
                  choice3:"14",
                  choice4:"16",
                  
                  answer:2
                  },
                  
                  
                  {
                  question:"கீழ்க்கண்டவற்றுள் பதினெண்கீழ்க்கணக்கு நூல்களுள் ஒன்று எது?",
                  choice1:"புறநானூறு",
                  choice2:"நற்றிதணை",
                  choice3:"நாலடியார்" ,
                  choice4:"பரிபாடல்",
                  
                  answer:3
                  },
                  
                  {
                  question:"உலகம் உருண்டை என்த கருத்து எவ்வாறுவியல் இயலின் பார்ப்படும்",
                  choice1:"விண்ணியல் அறிவு",
                  choice2:"பொறியியல் அறிவு",
                  choice3:"மண்ணியல் அறிவு",
                  choice4:"அறிவியல் அறிவு",
                  
                  answer:1
                  },
                  
                  {
                  question:"முக்கூடற்பள்ளு குறிய பாவகை",
                  choice1:"சிந்துப்பா",
                  choice2:"ஆசிரியப்பா", 
                  choice3:"வஞ்சிப்பா",
                  choice4:"வெண்பா",
                  
                  answer:1
                  },

                  {
                     question:"ஞானக் கண்ணாடி என்ற சமய நூலை இயற்றியவர் யார்?",
                     choice1:"கவைநாயகம் பிள்ளை",
                     choice2:"வீரமாமுனிவர்",
                     choice3:"கால்டுவெல்",
                     choice4:"போப்",
                     
                     answer:2
                     },
                     
                     
                     {
                     question:"உலகம் உயிர் கடவுள் ஆகிய மூன்றையும் ஒருங்கக காட்டும் காவியம் எது?",
                     choice1:"பெரியபுராணம்",
                     choice2:"கம்பராமாயணம்", 
                     choice3:"சிலப்பதிகாரம்",
                     choice4:"சீவகசிதாமணி",
                     
                     answer:1
                     },
                     
                     
                     {
                     question:"புரட்சி முழக்கம் என்னும் நூலை இயற்றியவர் யார்?",
                     choice1:"சாலை இளந்திரையன்",
                     choice2:"தேவநேயப் பாவாணர்",
                     choice3:"மறைமலை அடிகளார்",
                     choice4:"பரிதிமாற்கலைஞர்",
                     
                     answer:1
                     },
                     
                     {
                     question:"கடம் என்ற சொல்லின் பொருள் என்ன?",
                     choice1:"குடம்",
                     choice2:"பாம்பு",
                     choice3:"வேம்பு" ,
                     choice4:"உடம்பு",
                     
                     answer:4
                     },
                     
                     {
                     question:"தேசியம் காத்த செம்மல் என்று திரு.வி.க யாரை பாராட்டியுள்ளார்?",
                     choice1:"முத்துராமலிங்கர்",
                     choice2:"முத்துகிருஷ்ணன்",
                     choice3:"முத்தையா",
                     choice4:"முருகேசர்",
                     
                     answer:1
                     },
                     
                     {
                     question:"எள்ளல் இளமை அறியாமை மடமை ஆகிய நான்கு காரணங்களால் நகைச்சுவை தோன்றும் -எனக் கூறிய நூல்?",
                     choice1:"திருக்குதள்",
                     choice2:"சிலப்பதிகாரம்", 
                     choice3:"தொல்காப்பியம்", 
                     choice4:"நன்னூல்",
                     
                     answer:3
                     },
                     
                     
                     {
                     question:"அங்கக வேளாண்மை எனப்படுவது",
                     choice1:"செயற்கை வேளாண்மை",
                     choice2:"இயற்கை வேளாண்மை",
                     choice3:"மரபு பொறியியல் வேளாண்மை",
                     choice4:"மேற்கூறிய எதுவும் இல்லை",
                     
                     answer:2
                     },
                     
                     
                     {
                     question:"வன விலங்கு பாதுகாப்பு சட்டம்",
                     choice1:"1972",
                     choice2:"1978",
                     choice3:"1975",
                     choice4:"1980",
                     
                     answer:1
                     },
                     
                     {
                     question:"நம்மாழ்வார் பிறந்த ஊர்",
                     choice1:"இருகூர்",
                     choice2:"திருவூர்",
                     choice3:"குருகூர்",
                     choice4:"கருவூர்",
                     
                     answer:3
                     },
                     
                     
                     {
                     question:"உழவுக்கும் தொழிலுக்கும் வந்தனை செய்வோம் வீணில் உண்டு களித்திருப்கொரை நிந்தனை செய்வோம் - என்று பாடியவர் யார்?",
                     choice1:"அவ்வையார்",
                     choice2:"பாரதியார்",
                     choice3:"கம்பர்",
                     choice4:"பட்டுக்கோட்டை கல்யாணசுந்தரம்",
                     
                     answer:2
                     },
                     
                      
                     {
                     question:"நாளை என் தாய்மொழி சாகுமானால் இன்றே நான் இறந்து விடுவேன் என்று பாடியவர்?",
                     choice1:"பாரதியார்",
                     choice2:"பாரதிதாசன்", 
                     choice3:"ரசூல் கம்ச தேவ்",
                     choice4:"தேவநேயப் பாவணர்", 
                     
                     answer:3
                     },
                     
                     {
                     question:"இருத்தலும் இருத்தல் நிமித்தமும் -சரியானவற்றை நேர்க", 
                     choice1:"குறிஞ்சி",
                     choice2:"முல்லை",
                     choice3:"மருதம்",
                     choice4:"நெய்தல்", 
                     
                     answer:2
                     },
                     
                     {
                     question:"'களிறு எறிந்து பெயர்தல் காளைக்குக் கடனே' எந்த வரி இடம்பெற்றுள்ள நூல் எது?",
                     choice1:"சிலப்பதிகாரம்",
                     choice2:"தேவாரம்",
                     choice3:"திருக்குறள்", 
                     choice4:"புறநானூறு",
                     
                     answer:4
                     },
                     
                     {
                     question:"பெரிய புராணம் எழுதிட துணை நின்ற நூல் எது?",
                     choice1:"திருத்தொண்டத்தொகை",
                     choice2:"திருவாசகம்",
                     choice3:"திருக்கோவை", 
                     choice4:"திருவிளையாடல் புராணம்",
                     
                     answer:1
                     },  
                     
                     {
                        question:"மன்னன் முடி எனக்கு வேண்டியதில்லை அந்த மாதன் எனக்கு வேண்டியதில்லை -என்ற பாடலை பாடியவர் யார்?", 
                        choice1:"பூதஞ்சேந்தனார்",
                        choice2:"சச்சிதானந்தன்",
                        choice3:"பாரதிதாசன்",
                        choice4:"அசலாம்பிகை",
                        
                        answer:2
                        },
                        
                         
                        {
                        question:"ஆழி சரியான பொருளைக் கண்டறிக",
                        choice1:"நிலம்",
                        choice2:"கடல்",
                        choice3:"மாலை", 
                        choice4:"மதியம்",
                        
                        answer:2
                        },
                        
                        {
                        question:"விழுதும் வேரும் என்த தலைப்பில் உள்ள பாடல் எந்த நூலில் இருந்து எடுக்கப்பட்டது",
                        choice1:"அழகின் சிரிப்பு",
                        choice2:"தமிழச்சியின் கத்தி", 
                        choice3:"இருண்டவீடு",
                        choice4:"சேரதாண்டவம்",
                        
                        answer:1
                        },
                         
                        {
                        question:"பூங்கொடி, வீர காவியம் கொண்ட நூல்களை இயற்றியவர் யார்?",
                        choice1:"வானிதாசன்",
                        choice2:"வண்ந்தாசன்",
                        choice3:"முடியரசன்",
                        choice4:"மருதகாசி",
                        
                        answer:3
                        },
                        
                        
                        {
                        question:"எந்த நாட்டில் உள்ள அருங்காட்சியகத்தில் திருக்குறள் விவிலியத்துடன் வைக்கப்பட்டுள்ளது?",
                        choice1:"ரஷ்யா",
                        choice2:"அமெரிக்கா", 
                        choice3:"இங்கிலாந்து", 
                        choice4:"ஜப்பான்",
                        
                        answer:3
                        },
                        
                        {
                        question:"ரகசிய வழி என்னும் ஆங்கில நூலின் ஆசிரியர் யார்?", 
                        choice1:"ஜான் பனியன்",
                        choice2:"லிட்டன் பிரபு",
                        choice3:"ஜி யு போப்",
                        choice4:"எச் ஏ கிருஷ்ணபிள்ளை",
                        
                        answer:2
                        }, 
                        
                        
                        {
                        question:"அறிஞர் அண்ணாவிற்கு மிகவும் விருப்பமான இலக்கியம் எது?",
                        choice1:"பரணி",
                        choice2:"கலம்பகம்", 
                        choice3:"அந்தாதி",
                        choice4:"புதினம்",
                        
                        answer:1
                        },
                        
                        {
                        question:"சொல்லையும் பொருளையும் வரிசையாக நிறுத்தி நேரே பொருள் கொள்வது",
                        choice1:"ஏகதேச உருவக அணி",
                        choice2:"நிரல்நிறை அணி",
                        choice3:"உவமை அணி",
                        choice4:"சொற்பொருள் பின்வருநிலையணி",
                        
                        answer:2
                        },
                        
                         
                        {
                        question:"கைத்தொழில் ஒன்றை கற்றுக்கொள் வேலை உனக்கில்லை ஒத்துக்கொள் என்று பாடியவர் யார்?",
                        choice1:"மருதகாசி",
                        choice2:"கவிமணி",
                        choice3:"நாமக்கல் கவிஞர்", 
                        choice4:"முடியரசன்",
                        
                        answer:3
                        },
                        
                        
                        {
                        question:"நான் நிரந்தரமானவன் அழிவதில்லை எந்த நிலையிலும் எனக்கு மரணமில்லை - என்று கூறியவர் யார்?",
                        choice1:"நாமக்கல் கவிஞர்",
                        choice2:"பாரதியார்",
                        choice3:"கண்ணைாசன்", 
                        choice4:"மருதகாசி",
                        
                        answer:3
                        },
                        
                        
                        {
                        question:"திருவிளையாடல் புராணத்திற்கு உரை எழுதியவர் யார்?",
                        choice1:"நா மு வேங்கடசாமி நாட்டார்",
                        choice2:"நச்சினார்கினியார்",
                        choice3:"அடியார்க்கு நல்லார்", 
                        choice4:"மறைமலை அடிகளார்",
                        
                        answer:1
                        },
                        
                         
                        {
                        question:"பள்ளிப் பறவைகள் என்ற நூலின் ஆசிரியர் யார்?",
                        choice1:"பெருஞ்சித்திரனார்",
                        choice2:"தேவநேயப்பாவணர்",
                        choice3:"மீரா",
                        choice4:"சுரதா",
                        
                        answer:1
                        },
                     
                        {
                        question:"ஞானப் பச்சிலை என்று வள்ளலார் குறிப்பிடுவது எதை?", 
                        choice1:"துளசி",
                        choice2:"தூதுவளை", 
                        choice3:"கற்றாழை",
                        choice4:"கீழாநெல்லி",
                        
                        answer:2 
                        },
                        
                        {
                        question:"நெடுநல்வாடை என்ற நூலை இயற்றியவர் யார்?",
                        choice1:"கம்பர்",
                        choice2:"நக்கீரர்",
                        choice3:"கபிலர்",
                        choice4:"மாங்குடி மருதனார்",
                        
                        answer:2
                        },  

 
                        {
                           question:"நட என்ற வேர் சொல்லின் பெயபரச்சம் காண்க",
                           choice1:"நடந்தான்",
                           choice2:"நடந்து",
                           choice3:"நடந்த",
                           choice4:"நடந்தவன்",
                           
                           answer:3
                           },
                            
                           {
                           question:"பொலிட்டிக்கல் சயின்ஸ் என்பதற்கு நிகரான தமிழ்ச் சொல் என்ன",
                           choice1:"அரசியல் அறிவியல்" ,
                           choice2:"அடிப்படை அறிவியல்", 
                           choice3:"அனுபவ அறிவியல்",
                           choice4:"பெரிய அரசியல்",
                           
                           answer:1
                           },
                           
                           
                           {
                           question:"போரில் வெற்றி பெற்வைர் பெயரில் பாடப்படும் சிற்றிலக்கியம்", 
                           choice1:"உலா",
                           choice2:"பங்கு",
                           choice3:"பரணி",
                           choice4:"கலம்பகம்",
                           
                           answer:3
                           }, 
                           
                           {
                           question:"சொற்களை ஒழுங்குபடுத்தி சரியான சொற்தொடரை தேர்ந்தெடுக்க", 
                           choice1:"நன்றும் தீதும் பிதர் தர",
                           choice2:"நன்றும் பிறர்தர தீதும்",
                           choice3:"தீதும் நன்றும் பிறர் தர வாரா",
                           choice4:"பிற்ர் தர வாரா நன்றும் தீதும்",
                           
                           answer:3
                           },
                           
                           {
                           question:"உலகெலாம் உணர்ந்து ஓதற்கு அரியவன் எனத் தொடங்கும் பாடல் இடம்பெற்றுள்ள நூல் எது?",
                           choice1:"திருவாசகம்",
                           choice2:"திருவிளையாடல் புராணம்", 
                           choice3:"பெரியபுராணம்",
                           choice4:"தேவாரம்",
                           
                           answer:3
                           },
                           
                           {
                           question:"சமூக சமுதாய சீர்திருத்தம் தொடர்பான நாடகங்கள் சிறப்பிடம் பெற்ற காலம்", 
                           choice1:"பதிபனட்டாம் நூற்றாண்டு",
                           choice2:"பத்தொன்பதாம் நூற்றாண்டு", 
                           choice3:"பதினேழாம் நூற்றாண்டு",
                           choice4:"இருபதாம் நூற்றாண்டு",
                           
                           answer:2
                           },
                           
                           {
                           question:"வள்ளை என்பதன் பொருள்",
                           choice1:"நெல் குத்தும்போது பெண்கள் பாடும் பாட்டு",
                           choice2:"விளையாடும் போது பெண்கள் பாடும் பாட்டு", 
                           choice3:"நடவு நடும் போது பெண்கள் பாடும்பாட்டு",
                           choice4:"பெண்கள் பாடும் கும்மி பாட்டு",
                           
                           answer:1
                           },
                           
                           {
                           question:"ஊஞ்சல் கயிறு போல ஒரு சொல் முன்னும் பின்னுமாய் சென்று பொருள் கொள்ளத்தக்க வகையில் அமைவது எவ்வகை பொருள்கோளாகும்", 
                           choice1:"கொண்டுகூட்டுப் பொருள்கோள்",
                           choice2:"ராப்பிசைப் பொருள்கோள்",
                           choice3:"நிரல்நிறை பொருள்கோள்",
                           choice4:"அடி மாற்று பொருள்கோள்",
                           
                           answer:2
                           },
                           
                           
                           {
                           question:"ஆயுத எழுத்துக்கு எத்தனை மாத்திரை", 
                           choice1:"1",
                           choice2:"2",
                           choice3:"1/2" ,
                           choice4:"3",
                           
                           answer:3
                           },
                           
                           
                           {
                           question:"கம்பர் - அம்பிகாவதி வரலாற்றை வைத்து கண்ணைாசன் படைத்த இனிய நாடகம்",
                           choice1:"ஆயிரம் தீவு",
                           choice2:"ராஜ தண்டனை", 
                           choice3:"சேரமான் காதலி", 
                           choice4:"மாங்கனி",
                           
                           answer:2
                           },
                           
                           
                           {
                           question:"திரைகடல் ஓடியும் திரவியம் தேடு என்று கூறியவர் யார்?",
                           choice1:"நச்சினார்க்கினியார்",
                           choice2:"ஓதலாந்தையார்",
                           choice3:"பொன்முடியார்",
                           choice4:"அவ்வையார்",
                           answer:4
                           },
                           
                           {
                           question:"வருவான் என்பது", 
                           choice1:"எதிர்மறை இடைநிலை",
                           choice2:"எதிர்கால இடைநிலை",
                           choice3:"நிகழ்கால இடைநிலை",
                           choice4:"இறந்தகால இடைநிலை",
                            
                           answer:2
                           },
                           
                           
                           {
                           question:"உன் மானத்தை விட நாட்டின் மானம் பெரியது என்று உணர் உன் உயர்வை விட நாட்டின் உயர்வு இன்றியமையாதது என்பதை உணர் என்று கூறியவர் யார் அறிஞர்",
                           choice1:"அண்ணா",
                           choice2:"கலைஞர்",
                           choice3:"மு.வ",
                           choice4:"விவேகானந்தர்",
                           
                           answer:3
                           },

                           {
                              question:"மருமக்கள் வழி மான்மியம் என்ற நூலின் ஆசிரியர் யார்?",
                              choice1:"திரு வி க",
                              choice2:"கவிமணி",
                              choice3:"ரசிகமணி",
                              choice4:"நாமக்கல் கவிஞர்",
                              
                              answer:2
                              },
                              
                              {
                              question:"பற்றுக பற்றற்றான் பற்றினை அப்பற்றைப் பற்றுக பற்று விடற்கு வேர்ச்சொல்லை தேர்க", 
                              choice1:"பற்றுக",
                              choice2:"பற்றற்றான்", 
                              choice3:"பற்றி",
                              choice4:"பற்று",
                              
                              answer:4
                              },
                            
                              { 
                              question:"ஈற்றயலடி சிந்தடி பெற்று வரும் பா வகை எது?",
                              choice1:"நேரின ச் சிந்தியல் வெண்பா",
                              choice2:"இன்னிசை சிந்தியல் வெண்பா", 
                              choice3:"நிலைமண்டில ஆசிரியப்பா",
                              choice4:"நேரிசை ஆசிரியப்பா",
                              
                              answer:4
                              },
                              
                              {
                              question:"ஓங்கு என்னும் அடைமொழியை பெற்ற நூல் எது?", 
                              choice1:"நற்றினை",
                              choice2:"குறுந்தொகை",
                              choice3:"அகநானூறு",
                              choice4:"பரிபாடல்",
                              
                              answer:4
                              },
                              
                              {
                              question:"திலகர் விதைத்த விதை பாரதியாக முளைத்தது என்று கூறியவர் யார்?",
                              choice1:"காந்திஜி",
                              choice2:"நேருஜி",
                              choice3:"ராஜாஜி",
                              choice4:"நேதாஜி",
                              
                              answer:3
                              },
                              
                              {
                              question:"என்றுமுள தென்தமிழ் என்னும் தொடரை கூறியவர் யார்?",
                              choice1:"கம்பர்",
                              choice2:"பாரதியார்",
                              choice3:"பாரதிதாசன்",
                              choice4:"வள்ளலார்",
                              
                              answer:1
                              },
                              
                              {
                              question:"ரூபாயத் என்ற பெயரில் யாருடைய பாடலை யார் மொழிபெயர்த்தார்?",
                              choice1:"கவிமணி, உமர்கய்யாம்",
                              choice2:"உமர்கய்யாம்,கவிமணி",
                              choice3:"கவிமணி, ஜி யு போப்",
                              choice4:"ஜி யு போப், வீரமாமுனிவர்",
                              
                              answer: 2
                              }, 
                              
                              {
                              question:"கிளியை வளர்த்து பூனையின் கையில் கொடுத்தது போல என்னும் உவமை உணர்த்தும் பொருள் யாது?",
                              choice1:"இன்பம்",
                              choice2:"துன்பம்",
                              choice3:"மகிழ்ச்சி", 
                              choice4:"வருமுன் காத்தல்", 
                              
                              answer:2
                              },
                              
                              {
                              question:"ஒவ்வொரு பாடலில் உள்ள இறுதி எழுத்தோ அடியோ சீரோ அடியோ அல்லது அதற்கு அடுத்து வரும் பாடலில் முன்னதாக வரும்படி அமைத்துப் பாடுவது எனப்படும்",
                              choice1:"இலக்கியம்",
                              choice2:"கலம்பகம்",
                              choice3:"அந்தாதி",
                              choice4:"பரணி",
                              
                              answer:3
                              },
                              
                              
                              {
                              question:"நாககுமார காவியம் எத்தனை செய்யுளைகொண்டது?",
                              choice1:"1894",
                              choice2:"2131", 
                              choice3:"170",
                              choice4:"3145", 
                              
                              answer:3
                              },
                              
                              {
                              question:"குலசேகர ஆழ்வார் வாழ்ந்த காலம்",
                              choice1:"கிபி ஏழாம் நூற்றாண்டு",
                              choice2:"ஆறாம் நூற்றாண்டு",
                              choice3:"கிபி ஒன்பதாம் நூற்றாண்டு", 
                              choice4:"கிபி ஐந்தாம் நூற்றாண்டு",
                              
                              answer:3
                              },
                              
                              {
                              question:"கற்றல் என்பதன் வேர்ச்சொல் என்ன?",
                              choice1:"கற்று",
                              choice2:"கல்",
                              choice3:"கற்ற", 
                              choice4:"கற்",
                              
                              answer:2
                              },

                              {
                                 question:"தமிழின் முதல் சிறுகதை எது?",
                                 choice1:"புதியதும் பழயதும்",
                                 choice2:"பிரதாப முதலியார் சரித்திரம்", 
                                 choice3:"குனத்தங்கரை அரசமரம்",
                                 choice4:"யுக சக்தி",
                                 
                                 answer:3
                                 },
                                  
                                 {
                                 question:"வஞ்சிக் காண்டத்தில் உள்ள காதைகளின் எண்ணிக்கை என்ன",
                                 choice1:"13",
                                 choice2:"7",
                                 choice3:"10", 
                                 choice4:"5",
                                 
                                 answer:2
                                 },
                                 
                                 {
                                 question:"தஞ்சாவூர் பெயர்ச் சொல்லின் வகை அறிக",
                                 choice1:"பொருட் பெயர்",
                                 choice2:"பண்புப்பெயர்",
                                 choice3:"கானப் பெயர்",
                                 choice4:"இடப்பெயர்",
                                 
                                 answer:4
                                 },
                                 
                                 {
                                 question:"தாயுமானவரின் ஆசிரியர் பெயர்",
                                 choice1:"திருமூலர்",
                                 choice2:"மௌனகுரு", 
                                 choice3:"விஜயரங்க சச்சிதானந்தா நாயக்கர்",
                                 choice4:"கேடிலியப்ப பிள்ளை",
                                 
                                 answer:2
                                 },
                                 
                                 
                                 {
                                 question:"தேவநேயப் பாவானர் எழுதிய நூல்களின் எண்ணிக்கை என்ன?", 
                                 choice1:"41",
                                 choice2:"42",
                                 choice3:"43",
                                 choice4:"40",
                                 
                                 answer:3
                                 },
                                 
                                 
                                 {
                                 question:"முத்தமிழ் காவலர் என்று அனழக்கப்பட்டவர் யார்?",
                                 choice1:"விஸ்வநாதன்",
                                 choice2:"விநாயகம் பிள்ளை", 
                                 choice3:"கண்னதாசன்",
                                 choice4:"பெருஞ்சித்திரனார்",
                                 
                                 answer:1
                                 },
                                 
                                 
                                 {
                                 question:"வீரமாமுனிவருக்கு தமிழ் கற்பித்த ஆசிரியர் யார்",
                                 choice1:"வரதராசன்",
                                 choice2:"மதுரை சுப்பிரதீபக் கவிராயர்",
                                 choice3:"உவே சாமிநாத ஐயர்",
                                 choice4:"ஆறுமுகநாவலர்",
                                 
                                 answer:2
                                 },
                                 
                                 
                                 {
                                 question:"ஒழுக்கம் விழுப்பம் தரலான் இந்த அடியில் ஒழுக்கம் என்னும் வார்த்தை எந்த இலக்கணத்தை சார்ந்து",
                                 choice1:"பண்புப் பெயர்",
                                 choice2:"தொழிற் பெயர்",
                                 choice3:"வினையானனையும் பெயர்", 
                                 choice4:"பெயசரச்சம்",
                                 
                                 answer:2
                                 },
                                 
                                 {
                                 question:"மரப்பாவை நானால் உயிர்மருட்டி போன என்ற உவமையின் பொருனை வேர்ந்தெடுக்க",
                                 choice1:"அரிய செயல்",
                                 choice2:"முயற்சி",
                                 choice3:"புத்துனர்வு", 
                                 choice4:"மயங்குதல்", 
                                 
                                 answer:1
                                 },
                                 
                                 
                                 {
                                 question:"கீழ்காண்பனவைகளில் தொழிற்பெயர் அல்லாத சொல் எது?",
                                 choice1:"எள்ளல்",
                                 choice2:"தருதல்",
                                 choice3:"கோறல்",
                                 choice4:"கொல்லாமை",
                                 
                                 answer:4
                                 },
                                 
                                 
                                 {
                                 question:"தொண்டர் சீர் பரவுவார் என்று வழங்கப்படுவர் யார்?",
                                 choice1:"கம்பர்",
                                 choice2:"வடக்கிழார்",
                                 choice3:"ராமலிங்க அடிகள்",
                                 choice4:"சுந்தரர்",
                                 
                                 answer:2
                                 },
                                 
                                 {
                                 question:"பகுத்தறிவு கவிராயர் என வழங்கப்படுபவர் யார்?",
                                 choice1:"இராமச்சந்திர கவிராயர்",
                                 choice2:"கவிகாளமேகம்",
                                 choice3:"உடுமனை நாராயணகவி",
                                 choice4:"திரிகூடராசப்பக் கவிராயர்", 
                                 
                                 answer:3
                                 },
                                 
                                 {
                                 question:"முக்தி நூல் என்ற அடைமொழிக் கொண்ட நூல் யாது?",
                                 choice1:"மணிமேகலை",
                                 choice2:"சீவகசிந்தாமணி", 
                                 choice3:"குண்டலகேசி",
                                 choice4:"வளையாபதி",
                                 
                                 answer:2
                                 },
                                 
                                 {
                                 question:"99 வகையான மலர்கனை கொண்ட நூல் எது?",
                                 choice1:"குறிஞ்சிப்பாட்டு",
                                 choice2:"பட்டினப்பாலை",
                                 choice3:"திருமுருகாற்றுப்படை", 
                                 choice4:"பொருநராற்றுப்படை",
                                 
                                 answer:1
                                 },
                                 
                                 
                                 {
                                 question:"திருவாய்மொழி எனும் நூல் எந்த அடைமொழியால் அழைக்கப்படுகிறது?", 
                                 choice1:"ரிக் வேதம்",
                                 choice2:"யஜுர் வேதம்",
                                 choice3:"தமிழ் வேதம்", 
                                 choice4:"திராவிட வேதம்", 
                                 
                                 answer:3
                                 },
                                 
                                 
                                 {
                                 question:"கிறிஸ்துவ கம்பர் என அனழக்கப்படுபவர்?",
                                 choice1:"வீரமாமுனிவர்",
                                 choice2:"மறைமலை அடிகள்", 
                                 choice3:"எச்.ஏ.கிருஷ்னபிள்ளை", 
                                 choice4:"கம்பர்",
                                 
                                 answer:3
                                 },
                                 
                                 {
                                    question:"நெடுந்தொகை அடைமொழியால் அனழக்கப்படும் நூல் எது?",
                                    choice1:"குறுந்தொகை",
                                    choice2:"ஐங்குறுநூறு",
                                    choice3:"அகநானூறு",
                                    choice4:"நற்றினை",
                                    
                                    answer:3
                                    },
                                    
                                    
                                    {
                                    question:"இலக்கிய உலகத்தினரால் தமிழ் உரைநடையின் தந்தை எனப் போற்றப்படுபவர் யார்?",
                                    choice1:"இளம்பூரனார்",
                                    choice2:"திருவிக",
                                    choice3:"மறைமலை அடிகளார்", 
                                    choice4:"பரிவமேழழகர்",
                                    
                                    answer:2
                                    },
                                    
                                    
                                    {
                                    question:"பிள்ளைப்பெருமாள் ஐயங்கார் அவர்களுக்கு வழங்கப்படும் வேறு பெயர் என்ன?",
                                    choice1:"நல்லாப்பிள்ளை",
                                    choice2:"படிக்காசுப் புலவர்", 
                                    choice3:"அழகிய மனவாளதாசர்", 
                                    choice4:"மணாளர்",
                                    
                                    answer:3
                                    },
                                    
                                    
                                    {
                                    question:"மரபுக்கவிதையின் வேர் பார்த்தவர் புதுக்கவிதையின் மலர் பார்த்தவர் என்று பாராட்டப்படுபவர் யார்?",
                                    choice1:"சுரதா",
                                    choice2:"பாரதியார்", 
                                    choice3:"சிற்பி பாலசுப்பிரமணியம்",
                                    choice4:"அப்துல் ரகுமான்",
                                    
                                    answer:4
                                    },
                                    
                                    
                                    {
                                    question:"தமிழ் வியாசர் என வழங்கப்படும் சான்றோர் யார்?",
                                    choice1:"சேரமான் பெருமாள் நாயனார்",
                                    choice2:"நாற்கவிரா நம்பி",
                                    choice3:"சேந்தையார்",
                                    choice4:"நம்பியாண்டார் நம்பி", 
                                    
                                    answer:4
                                    },
                                    
                                    
                                    
                                    {
                                    question:"தமிழில் தோன்றிய முதல் நாவல்" ,
                                    choice1:"கமலாம்பாள் சரித்திரம்",
                                    choice2:"தீனதயாளு" ,
                                    choice3:"சாவித்திரி சரித்திரம்", 
                                    choice4:"பிரதாப முதலியார் சரித்திரம்",
                                    
                                    answer:4
                                    },
                                    
                                    
                                    
                                    {
                                    question:"சுட்டவன் இச் சொல்லின் வேர்ச்சொல்லை அறிக ",
                                    choice1:"சுட்டு",
                                    choice2:"சுட்ட",
                                    choice3:"சுடுக",
                                    choice4:"சுடு",
                                    
                                    answer:4
                                    },
                                    
                                    
                                    {
                                    question:"கொண்டான் இச் சொல்லின் வேர்ச்சொல்லைக் காண்க",
                                    choice1:"கொண்டு",
                                    choice2:"கொண்ட",
                                    choice3:"கொள்",
                                    choice4:"கொள்க", 
                                    
                                    answer:3
                                    },
                                    
                                    
                                    {
                                    question:"உச்சிமேற் புலவர் என்னும் சிறப்புப் பட்டம் பெற்றவர் யார்?",
                                    choice1:"ஓதலையாந்தயார்",
                                    choice2:"நச்சினார்கினியார்",
                                    choice3:"நக்கண்னையார்",
                                    choice4:"அவ்வையார்",
                                    
                                    answer:2
                                    },
                                    
                                    
                                    {
                                    question:"பொருந்தாத சொல்லை கண்டறிக ",
                                    choice1:"ஏங்கு",
                                    choice2:"தூங்கு", 
                                    choice3:"வாங்கு", 
                                    choice4:"கொங்கு", 
                                    
                                    answer:4
                                    },
                                    
                                    
                                    {
                                    question:"இளங்கோ பாடம் படித்தான் இது எவ்வகை வாக்கியம் எனச் சுட்டுக",
                                    choice1:"பிறவினை வாக்கியம்",
                                    choice2:"செய்வினை வாக்கியம்", 
                                    choice3:"செய்தி வாக்கியம்",
                                    choice4:"தன்வினை வாக்கியம்", 
                                    
                                    answer:4
                                    },      
                                    

                                    {
                                       question:"செய்வினை சொற்றொடரைக் கண்டறிக", 
                                       choice1:"மாவட்ட ஆட்சியரால் கொடிவயற்றப்பட்டது",
                                       choice2:"மாவட்ட ஆட்சியர் கொடி ஏற்றினார்",
                                       choice3:"ஏற்றினார் கோடியை மாவட்ட ஆட்சியர்",
                                       choice4:"மாவட்ட ஆட்சியர் கொடி ஏற்றுவார்",
                                       
                                       answer:2
                                       },
                                       
                                       
                                       {
                                       question:"தமிழில் தோன்றிய முதல் உலா எது?",
                                       choice1:"மூவருலா",
                                       choice2:"ஞான உலா",
                                       choice3:"திருவாரூர் உலா",
                                       choice4:"திருவானைக்கா உலா", 
                                       
                                       answer:2
                                       },
                                       
                                       
                                       {
                                       question:"தெருளும் திறம் திரிதல் அல்லால் வெருள எழுந்து இவற்றுள் எது தொழிற்பெயர்",
                                       choice1:"திறம்",
                                       choice2:"திரிதல்", 
                                       choice3:"அல்லல்", 
                                       choice4:"எழுந்து",
                                       
                                       answer:2
                                       },
                                       
                                       
                                       {
                                       question:"தொடைகளின் வகைகள் எத்தனை?",
                                       choice1:"4",
                                       choice2:"5",
                                       choice3:"6",
                                       choice4:"7",
                                       
                                       answer:2
                                       },
                                       
                                       
                                       {
                                       question:"வாழாதார் என்பதன் இலக்கண்க் குறிப்பை காண்க",
                                       choice1:"எதிர்மறை தொழிற் பெயர்",
                                       choice2:"வினையானனையும் பெயர்", 
                                       choice3:"எதிர்மறை வினையானனையும் பெயர்", 
                                       choice4:"தொழிற் பெயர்",
                                       
                                       answer:3
                                       },
                                       
                                       {
                                       question:"குழந்தை கவிஞர் என்று அனழக்கப்படுபவர் யார்",
                                       choice1:"அழ.வள்ளியப்பன்",
                                       choice2:"கண்னதாசன்",
                                       choice3:"தேசிகவிநாயகம் பிள்ளை",
                                       choice4:"பாரதியார்",
                                       
                                       answer:1
                                       },
                                       
                                       
                                       {
                                       question:"மாக்கதை என வழங்கப்படும் காப்பியம்",
                                       choice1:"பெருங்கதை",
                                       choice2:"பெரியபுராணம்", 
                                       choice3:"குண்டலகேசி",
                                       choice4:"வளையாபதி",
                                       
                                       answer:1
                                       },
                                       
                                       {
                                       question:"நிலத்தினும் பெரிவே வானினும் உயர்ந்தன்று நீரினும் ஆரள வின்ரே இப்பாடல் வரிகள் இடம்பெற்றுள்ன நூல் எது?",
                                       choice1:"கலித்தொகை",
                                       choice2:"குறுந்தொகை",
                                       choice3:"திருக்குறள்",
                                       choice4:"புறநானூறு",
                                       
                                       answer:4
                                       },
                                       
                                       
                                       {
                                       question:"உடும்பு பிடி போல உவமையால் விளக்கப்பெறும் பொருத்தமான பொருனைத் வேர்ந்தெடுக்��",
                                       choice1:"�������்க���வாதம்",
                                       choice2:"பிடிவாதம்",
                                       choice3:"கடும் வாக்குவாதம்",
                                       choice4:"கோபம் அடைதல்",
                                       
                                       answer:2
                                       },

                                       {
                                          question:"நன்று பெயர்ச்ச சொல்லின் வகை அறிக",
                                          choice1:"தொழிற் பெயர்",
                                          choice2:"பண்புப்பெயர்",
                                          choice3:"பொருட்பெயர்",
                                          choice4:"இடப்பெயர்",
                                          
                                          answer:2
                                          },
                                          {
                                          question:"சதுரம் பெயர்ச்ச சொல்லின் வகையறிக",
                                          choice1:"பண்புப் பெயர்",
                                          choice2:"இடப்பெயர்",
                                          choice3:"கானப்பெயர்", 
                                          choice4:"சினைப்பெயர்",
                                          
                                          answer: 1
                                          },
                                          {
                                          question:"ஆ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது",
                                          choice1:"பெண் மான்",
                                          choice2:"புலி",
                                          choice3:"சிங்கம்", 
                                          choice4:"கரடி",
                                          
                                          answer:1
                                          },
                                          {
                                          question:"ஐ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                          choice1:"சீடன்",
                                          choice2:"முனிவன்", 
                                          choice3:"குரு",
                                          choice4:"இந்திரன்", 
                                          
                                          answer:3
                                          },
                                          {
                                          question:"ஈ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                          choice1:"எடு",
                                          choice2:"வடு",
                                          choice3:"உயிரி", 
                                          choice4:"படு",
                                          
                                          answer:3
                                          },
                                          {
                                          question:"அ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                          choice1:"9" ,
                                          choice2:"10", 
                                          choice3:"8",
                                          choice4:"5",
                                          
                                          answer:3
                                          },
                                          {
                                          question:"இ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                          choice1:"புகழ்தல்",
                                          choice2:"இகழ்தல்",
                                          choice3:"வாழ்த்தல்", 
                                          choice4:"பற்றல்",
                                          
                                          answer:2
                                          },
                                          {
                                          question:"எழுப்பி இச் சொல்லின் வேர்ச்சொல்லை காண்க",
                                          choice1:"எழுதல்",
                                          choice2:"எழும்",
                                          choice3:"எழா",
                                          choice4:"எழு",
                                          
                                          answer:4
                                          },
                                          
                                          {
                                          question:"எய்திய இச்ச சொல்லின் வேர்ச்சொல்லை காண்க",
                                          choice1:"எய்து",
                                          choice2:"எய்த",
                                          choice3:"எய்துக", 
                                          choice4:"எய்தி",
                                          
                                          answer:1
                                          },
                                          {
                                          question:"பொருந்தாத சொல்னை கண்டறிக",
                                          choice1:"வேப்பம்பூ",
                                          choice2:"பைம்பூ",
                                          choice3:"காகித பூ", 
                                          choice4:"அத்திப்பூ",
                                          
                                          answer:3
                                          },
                                          {
                                             question:"பொருந்தாத சொல்னை கண்டறிக",
                                             choice1:"புலி",
                                             choice2:"கரடி",
                                             choice3:"மயில", 
                                             choice4:"சிங்கம்", 
                                             
                                             answer:3
                                             },
                                             {
                                             question:"மரபுப் பிழைகள் நீக்கிய தொடரைக் குறிப்பிடுக",
                                             choice1:"கோழி கூவும்",
                                             choice2:"கோழி கொக்கரிக்கும்", 
                                             choice3:"கோழி கத்தும்",
                                             choice4:"கோழி குனுகும்", 
                                             
                                             answer:2
                                             },
                                             {
                                             question:"இயற்கை ஓவியம் என போற்றப்படும் நூல் எது?",
                                             choice1:"முல்லைப்பாட்டு",
                                             choice2:"குறிஞ்சிப்பாட்டு",
                                             choice3:"பத்துப்பாட்டு",
                                             choice4:"பரிபாடல்",
                                             
                                             answer:3
                                             },
                                             
                                             {
                                             question:"பொய்யில் புலவர் என வழங்கப்படுபவர் யார் ?", 
                                             choice1:"வினம்பிநாயகர்",
                                             choice2:"சாத்தனார்",
                                             choice3:"பாரதியார்",
                                             choice4:"திருவள்ளுவர்",
                                             
                                             answer:4
                                             },
                                             
                                             {
                                              question:"கப்பலோட்டிய தமிழன் யார்?",
                                             choice1:"வ உ சி",
                                             choice2:"நேதாஜி",
                                             choice3:"ராஜாஜி",
                                             choice4:"சிவாஜி",
                                             
                                             answer:1
                                             },
                                             
                                             {
                                             question:"இயற்கை இன்பக்கலம் என்று போற்றப்படும் நூல்",
                                             choice1:"கலித்தொகை",
                                             choice2:"அகநானூறு",
                                             choice3:"குறுந்தொகை",
                                             choice4:"சீவகசிந்தாமணி", 
                                             
                                             answer:1
                                             },
                                             
                                             {
                                             question:"செந்நாப்போதார் என்ற அடைமொழியால் குறிக்கப் பெறுபவர்",
                                             choice1:"அவ்வையார்",
                                             choice2:"கபிலர்",
                                             choice3:"திருவள்ளுவர்",
                                             choice4:"பாரதியார்",
                                             
                                             answer:3
                                             },
                                             
                                             {
                                             question:"தடக்கை என்பதன் இலக்கண குறிப்பை காண்க",
                                             choice1:"பெயர்ச்சொல்",
                                             choice2:"இடப்பெயர்",
                                             choice3:"உரிச்சொற்றொடர்",
                                             choice4:"உருவகம்",
                                             
                                             answer:3
                                             },
                                             
                                             
                                             {
                                             question:"ஒதல் என்பதன் இலக்கண குறிப்பை காண்க",
                                             choice1:"செய்யுள் இசை அளபெடை",
                                             choice2:"இன்னிசை அளபெடை",
                                             choice3:"சொல்லிசை அளபெட", 
                                             choice4:"வினைமுற்று",
                                             
                                             answer:1
                                             },
                                             
                                             
                                             {
                                             question:"வாழ்க என்பதன் இலக்கணக குறிப்பு தேர்க",
                                             choice1:"வேற்றுமைத் தோடர்",
                                             choice2:"இலக்கணப்போலி",
                                             choice3:"உரிச்சொல்",
                                             choice4:"வியங்கோள் வினைமுற்று", 
                                             
                                             answer:4
                                             },
                                             
                                             
                                             {
                                             question:"ஞானக்கண் என்பதன் இலக்கண குறிப்பு",
                                             choice1:"உருவகம்",
                                             choice2:"உவமைத் தொகை", 
                                             choice3:"பண்புத் தொகை",
                                             choice4:"வினைத் தொகை",
                                             
                                             answer:1
                                             },
                                             
                                             
                                             {
                                             question:"இழ என்னும் வேர்ச்ச சொல்லின் வினைமுற்றை வேர்ந்தேடுக்க",
                                             choice1:"இழந்து",
                                             choice2:"இழந்த",
                                             choice3:"இழத்தல்", 
                                             choice4:"இழந்தோம்",
                                             
                                             answer:4
                                             },
                                             
                                             
                                             {
                                             question:"பேரறிஞர் அண்னா மறைந்தார் என்பது எவ்வகை வாக்கியம் எனச் சுட்டுக",
                                             choice1:"வினா வாக்கியம்",
                                             choice2:"செய்தி வாக்கியம்",
                                             choice3:"கட்டளை வாக்கியம்",
                                             choice4:"உணர்ச்சி வாக்கியம்",
                                             
                                             answer:2
                                             },
                                             
                                             
                                             {
                                             question:"அனைவரும் தாய்மொழியை போற்றுக எவ்வகை வாக்கியம் எனச் சுட்டுக",
                                             choice1:"கட்டளை வாக்கியம்",
                                             choice2:"உணர்ச்சி வாக்கியம்",
                                             choice3:"வினா வாக்கியம்",
                                             choice4:"செய்தி வாக்கியம்",
                                             
                                             answer:1
                                             },
                                             
                                             {
                                             question:"நூ என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                             choice1:"வேர்",
                                             choice2:"புத்தகம்", 
                                             choice3:"அணிகலன்", 
                                             choice4:"உடை",
                                             
                                             answer:3
                                             },
                                             
                                             {
                                             question:"மா என்னும் ஓரெழுத்து ஒரு மொழிக்குரிய பொருள் யாது?",
                                             choice1:"மாடு",
                                             choice2:"மான", 
                                             choice3:"மாமரம",
                                             choice4:"மான்",
                                             
                                             answer:3
                                             },
                                             
                                             {
                                             question:"எதிர்ச்சொல் தருக –மலர்தல்", 
                                             choice1:"விரிதல்",
                                             choice2:"கூம்பல்",
                                             choice3:"சுருங்குதல்", 
                                             choice4:"வேய்தல்",
                                             
                                             answer:2
                                             },
                                             
                                             {
                                             question:"வள்ளலார் என போற்றப்படுபவர் யார்?",
                                             choice1:"பாண்டித்துரை",
                                             choice2:"பாரி",
                                             choice3:"இராமலிங்க அடிகள்", 
                                             choice4:"அதியமான்",
                                             
                                             answer:3
                                             },
                                          
                                             {
                                             question:"பொருந்தாத சொல்லை கண்டறிக",
                                             choice1:"சீட்டுக்கவி",
                                             choice2:"ஆசுகவி",
                                             choice3:"மதுரகவி",
                                             choice4:"விகடகவி",
                                             
                                             answer:4
                                             },
                                             
                                             
                                             {
                                             question:"பொருந்தாத சொல்லை கண்டறிக", 
                                             choice1:"அழகு",
                                             choice2:"தேன்",
                                             choice3:"இனிப்பு", 
                                             choice4:"சுவை",
                                             
                                             answer:1
                                             },
                                             
                                             
                                             {
                                             question:"மரபுப் பிழைகள் அற்ற தொடரைக் குறிப்பிடுக", 
                                             choice1:"ஆட்டுக்கூட்டம்",
                                             choice2:"ஆட்டுமந்தை",
                                             choice3:"ஆட்டுநிரை",
                                             choice4:"ஆட்டுத்தொழுவம்" ,
                                             
                                             answer:2
                                             },

                                             

{
   question:"புனையா ஓவியம் போல இந்த உவமையால் விளக்கப்பெறும் பொருத்தமான பொருளைத் தேர்ந்தெடுக்கவும்",
   choice1:"தீட்டிய ஓவியம்",
   choice2:"தீட்டப்படாத ஓவியம்",
   choice3:"செதுக்கிய ஓவியம்",
   choice4:"செதுக்கப்படாத ஓவியம்",
   
   answer:2
   },
   
   
   {
   question:"பசுத்தோல் போர்த்திய புலி போல இவ்வுவமையால் விளக்கப்பெறும் பொருத்தமான பொருனைத் தேர்ந்தெடுக்க",
   choice1:"வேட்டை",
   choice2:"வேட்கை",
   choice3:"நயவஞ்சகம்", 
   choice4:"வேண்டாமை", 
   
   answer:3
   },
   
   
   {
   question:"திண்னையை இடித்து தெருவாக்கு என்ற பாடலை இயற்றியவர் யார்?",
   choice1:"பட்டுக்கோட்டை கல்யானசுந்தரம்",
   choice2:"தாராபாரதி",
   choice3:"அழகிய சொக்கநாதப் புலவர்",
   choice4:"உடுமனை நாராயை கவி",
   
   answer:2
   },
   
   {
   question:"செய்யும் தொழிலே தெய்வம் என்ற பாடலை இயற்றியவர் யார்?",
   choice1:"தாராபாரதி",
   choice2:"பட்டுக்கோட்டை கல்யானசுந்தரம்", 
   choice3:"உடுமனை நாராயைகவி",
   choice4:"திரிகூடராசப்பக் கவிராயர்",
   
   answer: 2
   },
   
   {
   question:"திரிகடுகத்தின் ஆசிரியர்",
   choice1:"மதுரை கூடலூர் கிழார்",
   choice2:"நல்லாதனார்",
   choice3:"வமாசிகீனார்",
   choice4:"கடுவெளி சித்தர்", 
   
   answer:2
   },
   
   {
   question:"மெய்ப்பொருள் கல்வி என்ற நூலின் ஆசிரியர் யார்?",
   choice1:"வாணிதாசன்",
   choice2:"கண்னதாசன்",
   choice3:"மருதகாசி",
   choice4:"பாரதிதாசன்", 
   
   answer:1
   },
   
   {
   question:"கீழ்காணும் நூல்களுள் சச்சிதானந்தன் இயற்றிய நூல் எது",
   choice1:"தமிழ்ப்பசி",
   choice2:"சமயப்பொருள் கல்வி",
   choice3:"பொங்கல் வழிபாடு",
   choice4:"உழவின் சிறப்பு",
   
   answer:1
   },
   
   {
   question:"கால்மடித்து இலக்கணகுறிப்பு காண்க",
   choice1:"பண்புத்தொகை",
   choice2:"வினைசயச்சம்",
   choice3:"இரண்டாம் வேற்றுமைத்தொகை",
   choice4:"ஆறாம் வேற்றுமைத்தொகை",
   
   answer: 3
   },
   
   {
   question:"கவையடிக்கேழல் இலக்கணகுறிப்பு காண்க", 
   choice1:"இரண்டாம் வேற்றுமை தொகை",
   choice2:"இரண்டாம் வேற்றுமை உருபும் பயனும் உடன் சோக்க தொகை",
   choice3:"மூன்றாம் வேற்றுமைத்தொகை",
   choice4:"மூன்றாம் வேற்றுமை உருபும் பயனும் உடன் தொக்க தொகை", 
   
   answer:2
   },
   {
   question:"ஈன் குழவி இலக்கணகுறிப்பு தருக",
   choice1:"வினைத்தொகை",
   choice2:"பண்புத்தொகை",
   choice3:"ஈறுகெட்ட எதிர்மறை பெயசரச்சம்",
   choice4:"ஆறாம் வேற்றுமைத்தொகை",
   
   answer: 1
   },
   
   {
   question:"புகுக இலக்கணகுறிப்பு தருக",
   choice1:"இரண்டாம் வேற்றுமைத்தொகை",
   choice2:"வினைசயச்சம்",
   choice3:"வியங்கோள் வினைமுற்று", 
   choice4:"முன்னினை ஒருமை வினைமுற்று",
   
   answer: 3
   },
   
   {
   question:"சீவகனின் வரலாற்றைக் கூறும் சீவகசிந்தாமணியின் ஆசிரியர் யார்?",
   choice1:"கொங்குனார்",
   choice2:"திருத்தக்கதேவர்", 
   choice3:"புத்தமித்திரர்",
   choice4:"நாக குத்தனார்", 
   
   answer:2
   },
   
   
   {
   question:"திராவிட மொழிகளின் ஒப்பிலனக்கனம் என்ற நூலை இயற்றியவர் யார்?",
   choice1:"வீரமாமுனிவர்",
   choice2:"செய்குத்தம்பி பாவலர்", 
   choice3:"டாக்டர் கால்டுவெல்",
   choice4:"ஜி யு போப்",
   
   answer:3
   },
   
   
   {
   question:"இரட்சணிய யாத்திரிகம் என்ற நூலை இயற்றியவர் யார்?",
   choice1:"டாக்டர் கால்டுவெல்",
   choice2:"ஜி யு போப்",
   choice3:"கிருஷ்னபிள்ளை",
   choice4:"உமறுப் புலவர்",
   
   answer:3
   },
   
   
   
   {
   question:"கீழ்காணும் நூல்களுள் பாரதியார் இயற்றிய நூல் அல்லாதது எது?",
   choice1:"கண்னன் பாட்டு",
   choice2:"நவதந்திரக் கதைகள்",
   choice3:"ஞானரதம்",
   choice4:"எதிர்பாராத முத்தம்", 
   
   answer:4
   },
   
   {
   question:"கீழ்க்காணும் நூல்களுள் பாரதிதாசன் இயற்றிய நூல்களுள் அல்லாதது எது?",
   choice1:"வள்ளுவர் உள்ளம்",
   choice2:"இளைஞர் இலக்கியம்", 
   choice3:"காதலா கடமையா",
   choice4:"சுதேச கீதங்கள்",
   
   answer:4
   },
   
   
   {
   question:"கீழ்க்காணும் நூல்களில் மூ.வ இயற்றிய நூல் எது?",
   choice1:"தம்பிக்கு எந்த ஊரு",
   choice2:"கொடிமரத்தின் வேர்கள்", 
   choice3:"காத்திருந்த காற்று",
   choice4:"ஆப்பிள் கனவு",
   
   answer:1
   },
   
   
   {
   question:"அருந்தமிழ் செல்வி என்ற அடைமொழியால் வழங்கப்படும் புலவர் யார்?",
   choice1:"அவ்வையார்",
   choice2:"காரைக்கால் அம்மையார்",
   choice3:"ஆண்டாள்",
   choice4:"நச்செளனையார்", 
   
   answer:1
   },
   {
   question:"திராவிட சிசு என்று அடைபெயரால் வழங்கப்பெறும் புலவர் யார்?",
   choice1:"சீத்தலை சாத்னார்",
   choice2:"நக்கீரனார்",
   choice3:"திருஞானசம்பந்தர்",
   choice4:"நம்மாழ்வார்",
   
   answer:3
   },

   {
   question:"சுதானந்த பாரதியாருக்கு வழங்கப்படும் அடைபெயர் என்ன?",
   choice1:"கமகப்பிரியா",
   choice2:"காரை முத்துப் புலவர்", 
   choice3:"கவியோகி",
   choice4:"தமிழ் தென்றல்", 
   
   answer:3
   },                             

   {
      question:"ஓக்கீ -எனப்படும் இயற்கை பேரிடர் எதனுடன் தொடர்புடையது?",
      choice1:"நிலச்சரிவு",
      choice2:"நிலநடுக்கம்", 
      choice3:"புயல்",
      choice4:"எரிமலை சீற்றம்", 
      
      
      answer:3
      },
      
      
      { 
      question:"பீகார் மாநிலத்தின் அடிக்கடி நிகழும் வெள்ளப்பெருக்குக்கு காரணமான நதி எது?",
      choice1:"கங்கா",
      choice2:"டீஸ்டா",
      choice3:"கோசி",
      choice4:"பிரம்மபுத்ரா", 
      
      answer:3
      },
      
      {
      question:"திடீர் பயம், பாதுகாப்புக்காக ஓடுதல் மற்றும் சண்டை விடுதலைக்கான ஹார்மோன் எது?",
      choice1:"அட்ரீனலின்",
      choice2:"ஆக்சிடாக்சின்", 
      choice3:"இன்சுலின்",
      choice4:"ஈஸ்ட்ரோஜன்", 
      
      answer:1
      },
      
       {
      question:"ஏப்ரல் 1930 ஆம் ஆண்டு தமிழ்நாடு காங்கிரஸ் கமிட்டியின் தலைவராக இருந்தவர் யார்?",
      choice1: "சத்தியமூர்த்தி",
      choice2:"சீனிவாச ஐயங்கார்", 
      choice3:"கிருஷ்ணமாச்சாரி",
      choice4:"ராஜகோபாலாச்சாரியார்", 
      
      answer:4
      },
      
      {
      question:"சூல்தண்டு ஒடுக்கத்தின் காரணமான சில குரோமோசோம்கள் சூழல் தண்டின் ஒரு முனைக்கும் மற்ற குரோமோசோம்கள் அதற்கு எதிர் முனையிலும் இருகின்றன இந்த நிகழ்வு எந்த பகுதியில் நடைபெறுகின்றது?",
      choice1: "அனாபேஸ்",
      choice2:"புரோபேஸ்",
      choice3:"மெட்டாபேஸ்", 
      choice4:"டீகோபேஸ்",
      
      answer:1
      },
      
      {
      question:"தாராசுரம் கோவில் யாருடைய கால கட்டிடக்கலைக்கு சிறந்த எடுத்துக்காட்டு ஆகும்?",
      choice1:"சேரர்",
      choice2:"சோழர்", 
      choice3:"பாண்டியர்", 
      choice4:"பல்லவர்",
      
      answer:2
      },
      
      {
      question:"எந்த ஆண்டு அலுவலக மொழிச் சட்டம் பாராளுமன்றத்தில் இயற்றப்பட்டது?",
      choice1:"1963",
      choice2:"1964",
      choice3:"1965",
      choice4:"1962",
      
      answer:1
      },
      
      
      {
      question:"கீழ்காணும் யார் முதல்முறையாக நீதித் துறை நிர்வாத்தில் அதிகாரப் பரவலாக்கல் கொள்கையை அறிமுப்படுத்தியவர்",
      choice1: "மகயா பிரபு",
      choice2: "லிட்டன் பிரபு", 
      choice3: "ரிப்பன் பிரபு",
      choice4:"பென்ட்டிக் பிரபு",
      
      answer:1
      },
      
      { 
      question:"பன்னா வைர சுரங்ம் மற்றும் உமாரியா நிலக்கரி வயல் இந்தியாவின் எந்த மாநிலத்தில் உள்ளது?",
      choice1:"ஆந்திர பிரதேஷ்",
      choice2:"மத்திய பிரதேசம்",
      choice3:"சட்டீஸ்கர்",
      choice4:"ஜார்கண்ட்",
      
      answer:2
      },
      
      {
      question:"செப்டம்பர் 5, 1799 ஆம் ஆண்டு கட்டபொம்மன் கோட்டையை தாக்கிய ஆங்கிலேயர் யார்?",
      choice1: "கர்னல் மெரான்",
      choice2:"கர்னல் கேம்பல்",
      choice3:"மேஜர் பானர்மேன்", 
      choice4:"மேஜர் கூட்ஸ்",
      
      answer:3
      },
      
      {
      question:"பின்வருவனற்றுள் எது பூஞ்சையால் ஏற்படாத தாவர நோயாகும்?",
      choice1:"கரும்பின் செவ்வழுகல்",
      choice2:"தேயிலையின் சிவப்புத் துரு", 
      choice3:"அரிசியின் இலைப்புள்ளி",
      choice4:"கம்பின் சோள காளான்",
      
      answer:2
      },
      
       {
      question:"புனித ஜார்ஜ் கோட்டை எப்பொழுது கட்டப்பட்டது?", 
      choice1:"1740",
      choice2:"1640",
      choice3:"1639",
      choice4:"1739",
      
      answer:2
      },
      
      {
      question:"பின்வருவனவற்றில் எவற்றை நீதிமன்றங்ளில் நீதி கோரி பெற முடியும்?",
      choice1:"அடிப்படை உரிமைகள்",
      choice2:"அடிப்படை கடமைகள்",
      choice3:"அரசு வழிகாட்டு நெறிகள்",
      choice4:"முகப்புரை",
      
      answer:1
      },  
      
      
{ 
   question:"அடிப்படை உரிகமைளின் பாதுகாவலர் மற்றும் பொறுப்பாளர் என்று அழைக்ப்படுபவர் யார்?",
   choice1:"உச்சநீதிமன்றம்",
   choice2:"குடியரசுத் தலைவர்",
   choice3:"பாராளுமன்றம்",
   choice4:"மாநில சட்டமன்றம்",
   
   answer:1
   },
   
   {
   question:"சென்னை சாகரம் என்ற மிகப்பெரிய ஏரியை கட்டியவர் யார்?",
   choice1:"வெங்கடா",
   choice2:"தேசிங்குராஜா", 
   choice3:"அச்சுதப்பர்",
   choice4:"கிருஷ்ணப்பர்",
   
   answer:1
   },
   
   {
   question:"இந்திய அரசியலமைப்பின் பகுதி 14 A தொடர்புடைய விபரம்",
   choice1:"தீர்ப்பாயங்கள்",
   choice2:"தேர்தல் சீர்திருத்தம்", 
   choice3:"நீதிப்புனராய்வு",
   choice4:"இந்திய அலுவல் மொழிகள்",
   
   answer:1
   },
   
   {
   question:"பின்வருவனெற்றுள் எந்த மாவட்டத்தில் இரும்புத் தாது உற்பத்தி செய்யப்படுகிறது?", 
   choice1:"மதுரை",
   choice2:"தேனி",
   choice3:"சேலம்",
   choice4:"சென்னை",
   
   answer:3
   },
   
   { 
   question:"கீழ்க்காணும் எதைப் பற்றி வாத்வா கமிட்டி ஆய்வு செய்தது?",
   choice1:"ஓபிசி ஒதுக்கீடு",
   choice2:"இலக்கு நிர்ணயிக்கப் பட்ட பொது விநியோக அமைப்பு",
   choice3:"பணமதிப்பு நீக்கம்",
   choice4:"பணவாட்டம்",
   
   answer:2
   },
   
   {
   question:"இந்தியாவில் மண்டல ஊரக வங்கிகள் சட்டம் எந்த ஆண்டு இயற்றப்பட்டது?",
   choice1:"1969",
   choice2:"1996",
   choice3:"1972",
   choice4:"1927",
   
   answer:3
   },
   
   {
   question:"சிறப்பு திட்டமான 'சஹி' என்பதன் நோக்கம் என்ன?",
   choice1:"முதியவர்களின் தேவளை பூர்த்தி செய்வது",
   choice2:"பொருளாதாரத்தில் பின்தங்கியவர்களுக்கு உதவுவது",
   choice3:"செய்தித்தொடர்பு முறையை ஒழுங்குபடுத்துவது",
   choice4:"தனியார் மற்றும் பொது இடங்களில் வன்முறையால் பாதிக்கப்பட்ட பெண்களுக்கு உதவுவது",
   
   answer:4
   },
   
   {
   question:"வேலூர் கலகத்தின் போது முதலில் பலியானோர் யார்?",
   choice1:"கர்னல் போர்ப்ஸ்",
   choice2:"கர்னல் பான்கோர்ட்", 
   choice3:"மேஜர் மீ கேரஸ்",
   choice4:"கர்னல் கில்லெஸ்பி",
   
   answer:2
   },
   
   {
   question:"ஆந்த்ராக்ஸ் நோய் தொற்றுவிப்பது எது?",
   choice1:"பாக்டீரியா",
   choice2:"புரோட்டோசோவா", 
   choice3:"வைரஸ்",
   choice4:"பூஞ்சை",
   
   answer:1
   },
   
   {
   question:"ரோடோபைசியே வில் உள்ள சேமிப்பு பொருள் எது?",
   choice1:"செல்லுலோஸ்",
   choice2:"ஸ்டார்ச் மற்றும் எண்ணைய்",
   choice3:"கிளைகோஜன்",
   choice4:"ப்ளோரிடியன் ஸ்டார்ச்",
   
   answer:4
   },
   
   {
   question:"மக்களவையின் எதிர்க்ட்சித் தலைவர் பதவி, பின்வரும் பதவிகளின் சம்பளங்கள்,படிளுகக்கு சமமான சம்பளம், படிகள் பெறுவதாகும்",
   choice1:"மத்திய அமைச்சர்",
   choice2:"கேபினட் அமைச்சர்",
   choice3:"மக்களவை சபாநாயகர்",
   choice4:"மேற்கண்ட எதுவும் இல்லை",
   
   answer:2
   },
   
   {
   question:"பின்வருவனெற்றுள் பஞ்சாயத்து ராஜ் அமைப்பின் மெகா சாசனம் என்று அழைக்ப்பெற்றது எது?",
   choice1: "அடிப்படை உரிமைகள்",
   choice2: "பல்வந்த் ராய் மேத்தாஅறிக்கை",
   choice3:"அசோக் மேத்தா அறிக்கை",
   choice4:"ஜிவிகக அறிக்கை",
   
   answer:2
   },
   
   {
   question:"பன்றியிலிருந்து மனிதனுக்கு உறுப்பு மாற்று ஒட்டுதல் என்பதை எவ்வகாறு அழைக்கப்படுகிறது?",
   choice1:"ஆட்டோகிராப்ட்",
   choice2:"ஐசோகிராப்ட்",
   choice3:"அல்லோ கிராப்ட்",
   choice4:"சீனோ கிராப்ட்",
   
   answer:3
   },
   
   {
   question:"தேசிய வருமானம் இந்தியாவில் எத்தனை முறைகளில் கணக்கிடப்படுகிறது?", 
   choice1:"3 வழிகள்",
   choice2:"4 வழிகள்",
   choice3:"2 வழிகள்",
   choice4:"5 வழிகள்",
   
   answer:1
   },
   
   {
   question:"குடவோலை முறை பற்றிய விபரங்களை கொண்ட கல்வெட்டு எந்த இடத்தில் உள்ளது?",
   choice1:"சித்தன்னவாசல்",
   choice2:"உத்திரமேரூர்",
   choice3:"புகலூர்",
   choice4:"மதுரை",
   
   answer:2
   },
   
   {
   question:"மதுரையில் திராவிட சங்த்தை ஏற்படுத்திய சமணத் துறவி யார்?",
   choice1:"வஜ்ரநந்தி",
   choice2:"பவநந்தி",
   choice3:"விக்ரம நந்தி",
   choice4:"பசவ நந்தி",
   
   answer:1
   },
   
   {
   question:"சூழல் மண்டலம் என்பது",
   choice1:"உயிருள்ளவை",
   choice2:"வாழிடத்தில் உள்ள உயிருள்ளவை” மற்றும் உயிரிலிகள்",
   choice3:"உயிரிலிகள்",
   choice4:"இனக்குழுக்கள்",
   
   answer:2
   },
   
   { 
   question:"சைலம் நாளங்ள் எதில் உள்ளது?",
   choice1:"ஆஞ்சியோஸ்பெர்ம்கள்",
   choice2:"ஜிம்னோஸ்பெர்ம்கள்",
   choice3:"டெரிடோஃபட்டுகள்",
   choice4:"தாலோ லபட்டுகள்",
   
   answer:1
   },
   
   {
   question:"நம் உடலில் ஆக்ஸிஜனை கடத்துவதற்கு பயன்ப்படும் தனிமம் எது?",
   choice1:"அயோடின்",
   choice2:"இரும்பு",
   choice3:"குளோரின்", 
   choice4:"சோடியம்",
   
   answer:2
   },
   {
      question:"எந்த தனிமத்துக்கு அறிவியலாளர் ஆல்பர்ட் ஐன்ஸ்டீன் பெயரை வைத்து பெருமைப்படுத்தினார்?",
      choice1:"99th",
      choice2:"50th",
      choice3:"10th",
      choice4:"100th",
      
      answer:1
      },
      
      { 
      question:"ஆந்திர காளிதாசர் என அழைக்கப்பட்டவர் யார்?",
      choice1:"தெனாலிராமன்",
      choice2:"விஜயரகுநாத சேதுபதி",
      choice3:"ஆளுரிக்குப்பண்ணா",
      choice4:"வெங்கடப்பர்",
      
      answer:3
      },
      
      { 
      question:"எந்த பத்திரிக்கையும் பாராளுமன்றத்தின் தலைசிறந்த நபர் விவேகானந்தர் என்று குறிப்பிட்டது?",
      choice1:"யங் இந்தியா",
      choice2:"நியூ வீல்",
      choice3:"சுகேசமித்திரன்", 
      choice4:"நியூயார்க் மெரால்ட்",
       
      answer:4
      },
      
      {
       question:"இரட்டை ஆட்சி எப்போது ரத்து செய்யப்பட்டது", 
      choice1:"1771",
      choice2:"1772",
      choice3:"1774",
      choice4:"1773",
      
      answer:2
      },
      
      {
      question:"இந்திய மக்கள் தொகை வளர்ச்சியின் தன்மை எவ்வாறு உள்ளது?",
      choice1:"அதிக பிறப்பு மற்றும் குறைவு இறப்பு விகிதம்",
      choice2:"அதிக பிறப்பு மற்றும் இறப்பு விகிதம்",
      choice3:"குறைவு பிறப்பு மற்றும் அதிக இறப்பு விகிதம்", 
      choice4:"குறைவு பிறப்பு மற்றும் குறைவு இறப்பு விகிதம்",
      
      answer:1
      },
      
      {
      question:"கீழ்க்ண்டவற்றுள் எதனால் இரு அவைகளுக்கு இடையே கருத்து வேறுபாடு ஏற்படும் பொழுது கூட்டு அமர்வு ஏற்படுத்த முடியாது?",
      choice1:"சாதாரண மசோதா",
      choice2:"நிதி மசோதா- I ",
      choice3:"நிதி மசோதா- II",
      choice4: "சட்ட திருத்த மசோதா",
      
      answer:4
      },
      
      { 
      question:"எந்த அமர்வு லேம்டக் அமர்வு என்று அகழக்ப்படுகிறது?",
      choice1:"குளிர்கால அமர்வு",
      choice2:"பருவகால அமர்வு ",
      choice3:"நிதி நிலை அறிக்கை அமர்வு",
      choice4:"மக்களலவயின் கடைசி அமர்வு",
      
      answer:3
      },
      
      {
      question:"1857 ஆம் ஆண்டு பெரும் புரட்சி நடைபெற்ற கீழ்காணும் யாருடைய அரசியல் நடவடிக்கைள் முதன்மை காரணமாக அமைந்தது?",
      choice1:"வெல்லஸ்லி",
      choice2:"கானிங் பிரபு",
      choice3:"வில்லியம் பெண்டிங் பிரபு",
      choice4:"டல்கவுசி பிரபு",
      
      answer:4
      },
      
      { 
      question:"கங்காதர் சாஸ்திரி யாரால் கொல்லப்பட்டார்?",
      choice1:"கேய்க்வர்",
      choice2:"திரிம்பக்ஜு", 
      choice3:"போன்ஸ்லெ", 
      choice4:"கொல்கர்",
      
      answer:2
      },
      
      {
      question:"மதராஸ்-நிறுவியவர் யார்?",
      choice1:"பாங்காய் மார்ட்டின்",
      choice2:"பிரான்சிஸ் டே",
      choice3:"பிரான்சிஸ் கேரன்", 
      choice4:"ஜாப் சர்நாக்",
      
      answer:2
      },
      
      { 
      question:"தமிழகத்தில் நாயக்கர் ஆட்சியின் பொது மக்கள் பாளயக்காரர்ளுக்கு செலுத்திய வரியின் பெயர் என்ன?",
      choice1:"காவல் கோட்டம்",
      choice2:"காவல் பிச்சை",
      choice3:"காவல் காப்பு",
      choice4:"காவல் வழி",
      
      answer:2
      },


      { 
         question:"எந்த சேர்மம் அமிலத்தன்மை நிறைந்த ஏரி நீரில் கலந்து மீன்கள் இறப்பதை தடுக்கிறது?",
         choice1:"கால்சியம் கார்பனேட்",
         choice2:"சோடியம் குளோரைடு",
         choice3:"பெரஸ் சல்பைடு",
         choice4:"அமோனியம் நைட்ரேட்", 
         
         answer:1
         },
         
         { 
         question:"இந்தியாவில் உள்ள மணல்களில் பரப்பளவில் முதலொவது இடம் வகிக்கும் மண் வகை எது?",
         choice1:"கரிசல் மண்",
         choice2:"செம்மண்",
         choice3:"வண்டல் மண்",
         choice4:"துருக்கல் மண்",
         
         answer:3
         },
         
         {
         question:"ஆசியாவின் வளம் பொருந்திய கடல் பிரபஞ்சத்தில் ஒன்று எது?",
         choice1:"மன்னார் வளைகுடா",
         choice2:"லோக்டாக் ஏரி",
         choice3:"பிச்சாவரம்",
         choice4:"சுந்தரவனக்காடுகள்",
          
         answer:4
         },
         
         { 
         question:"எந்த ஆண்டு திருமதி அன்னிபெசன்ட் அவர்கள் பிரம்ம ஞான சபையின் தலைராக பொறுப்பேற்றார்?",
         choice1:"1891",
         choice2:"1892",
         choice3:"1893",
         choice4:"1894",
         
         answer:3
         },
         
         { 
         question:"சோழ நாட்டில் வருவாய் துறை எவ்வாறு அழைக்ப்பட்டது?",
         choice1:"பெரும் தாரம்",
         choice2:"உடன் கூட்டம்",
         choice3:"புரவுவரி",
         choice4:"ஓலை நாயகம்",
         
         answer:3
         },
         
         {
         question:"பின்வருவனற்றில் ஆளுநரால் செய்ய முடியாதது எது?",
         choice1:"அவை அழைப்பு",
         choice2:"அவை ஒத்திவைப்பு",
         choice3:"அவை நீட்டிப்பு",
         choice4:"அவை தள்ளிவைத்தல்",
         
         answer:2
         },
         
         {
         question:"தோடர்கள், குறும்பர்கள், படுகர்கள் எந்த மாவட்டத்தை சேர்ந்தவர்கள் ஆவர்?",
         choice1:"நீலகிரி",
         choice2:"கோவை", 
         choice3:"தேனி",	
         choice4:"சதுரகிரி",
         
         answer:1
         },
         
         { 
         question:"ஹரிஜன் சேவா சங்கத்தை ஏற்படுத்தியவர் யார்?",
         choice1:"அம்கபத்கர்",
         choice2:"கஜாதி பூலை", 
         choice3:"மகாத்மா காந்தி", 
         choice4:"கோபால கிருஷ்ண கோகலே",
         
         answer:3
         },
         
         {
         question:"எந்த மாநிலத்தில் ராஜஜி புலிகள் காப்பகம் அமைந்துள்ளது?",
         choice1:"உத்தரகாண்ட்",
         choice2:"மகாராஷ்டிரா",
         choice3:"அருணாச்சல பிரதேசம்",
         choice4:"தமிழ்நாடு",
         
         answer:1
         },
         
         {
         question:"மீசோ ஸ்பியர் என அழைக்கப்படும் புவியின் உட்பகுதி எது?",
         choice1:"சீமா",
         choice2:"மேல் மெண்டல்", 
         choice3:"கீழ் மெண்டல்",
         choice4:"மவளிக்கருவம்",
         
         answer:3
         },
         
         {
         question:"எந்த ஹைட்ரோகார்பன் மாற்றிய பண்களை கொண்டது?", 
         choice1:"மீத்தேன்",
         choice2:"பியூட்டேன்",
         choice3:"புரோப்பேன்",
         choice4:"ஈத்தேன்",
         
         answer:2
         },
         
         { 
         question:"ஒரு பொருளாதாரத்தில் கணக்கில் எடுத்துக்கொள்ளாத பணம் எவ்வாறு அழைக்கப்படுகிறது?",
         choice1:"இருப்பு பணம்",
         choice2:"வங்கி பணம்",
         choice3:"வேலைக்கு அதிக பணம்",
         choice4:"கருப்பு பணம்",
         
         answer:4
         },
         
         {
         question:"இந்தியாவின் பொருளாதார ஆய்வறிக்கை ஒவ்வொரு ஆண்டும் கீழ்க்ண்ட எந்த அமைச்சகத்தால் வெளியிடப்படுகிறது?",
         choice1:"புள்ளியல் அமைச்சகம்",
         choice2:"வர்த்தக அமைச்சகம்",
         choice3:"நிதி அமைச்சகம்",
         choice4:"தொழிலாளர் மற்றும் வேலைவாய்ப்பு அமைச்சகம்",
         
         answer:3
         },
         
         {
         question:"சம்வகாத் தைவ்முதி என்ற நூலின் ஆசிரியர் யார்?",
         choice1:"ராஜா ராம் மோகன் ராய்",
         choice2:"பிபின் சந்திர பால்",
         choice3:"அன்னிபெசன்ட்",
         choice4:"கோவிந்த ரானடே",
         
         answer:1
         },
         
         {
         question:"வங்கிகளில் KYC என்றால் என்ன?",
         choice1:"Knowledge Your Customer",
         choice2:"Kind to Your Customer",
         choice3:"Know Your Customer",
         choice4:"Keep up Your Customer",
         
         answer:3
         },
         
         {
         question:"வேத காலத்திற்கு திரும்புங்கள்-என்பது யாருடைய முழக்கம்?",
         choice1:"விவேகானந்தர்",
         choice2:"தயானந்தா சரஸ்வதி",
         choice3:"காந்தியடிகள்",
         choice4:"சத்தியமூர்த்தி",
         
         answer:2
         },
         
         { 
         question:"முகப்புகரை எத்தனை முறை திருத்தப்பட்டுள்ளது?",
         choice1:"ஒரு முறை",
         choice2:"இரண்டு முறை", 
         choice3:"மூன்று முறை",
         choice4:"எதுவும் இல்லை",
         
         answer:1
         },
         
         {
         question:"2 ரூபாய் 70 பைசாவில் 15 பைசா எத்தனை சதவீதம்?",
         choice1:"659%",
         choice2:"569%",
         choice3:"935%",
         choice4:"559%",
         
         answer:4
         },
         
         { 
         question:"ஒரு மிதிவண்டியின்  விலை ரூ.1500 என்று குறிப்பிடப்பட்டுள்ளது.இதனை ரூ.1350க்கு விற்றால் தள்ளுபடி சதவீதம் என்ன?", 
         choice1:"9%",
         choice2:"10%",
         choice3:"12%",
         choice4:"15%",
         
         answer:2
         },
         
         { 
         question:"ஒரு கல்லூரியில் நடைபெற்ற சமூக முகாமில் 𝟏/𝟓 மாணவிளும் 𝟏/𝟖 மாணவர்ளும் களந்து கொண்டனர். எனில் அக்ல்லூரியில் கலந்து கொண்ட மொத்த மாணவர்ளின் விகிதத் தொகை என்ன?",
         choice1:"13/40",
         choice2:"13/80",
         choice3:"2/13",
         choice4:"8/13",
         
         answer:3
         },
         
         {
         question:"ஒரு முக்கோண வடிவத்திலுள்ள தோட்டத்தின் பரப்பளவு 800மீ2 அெற்றின் உயரம் 40 மீ எனில் அத்தோட்டத்தின் அடி உயரம் யாது?",
         choice1:"20 மீ",
         choice2:"40 மீ",
         choice3:"10மீ",
         choice4:"50மீ",
         
         answer:2
         },
         
         {
         question:"ஒரு நாற்கரத்தின் நீளம் 20 செ’மீ எதிர் செங்குத்து உயரம் 7 செ’மீ-ம் மற்றும் 10 செ’மீ-ம் இருந்தால் அவற்றின் பரப்பளவு காண்", 
         choice1:"160மச’மீ2",
         choice2:"110 மச’மீ2",
         choice3:"100மச’மீ2",
         choice4:"170 மச’மீ2",
         
         answer:4
         },
         
         { 
         question:"ஒரு அறையின் நீளம் 5 மீ, அகலம் 3மீ அவற்றின் நாற் சுவர்களின் பரப்பளவு 88மீ2 எனில், அவ்வறையின் உயரம் காண்", 
         choice1:"6’5",
         choice2:"7’5",
         choice3:"5’5",
         choice4:"8’5",
         
         answer:3
         },
         
         { 
         question:"14 செ.மீ ஆரமுள்ள அரை வட்டத்தின் சுற்றளவு மற்றும் பரப்பளவு முறையே", 
         choice1:"36 ; 308",
         choice2:"72 ; 308",
         choice3:"308 ; 36",
         choice4:"308 ; 72",
         
         answer:2
         },
         
         { 
         question:"15625 க்கு ஆண்டு வட்டி8 % வீதம் எனில் 3 ஆண்டுளுக்கு கூட்டுவட்டி காணவும்", 
         choice1:"5058",
         choice2:"3058",
         choice3:"4058",
         choice4:"6058",
         
         answer:3
         },
         
         { 
         question:"ரூ.1600 ஆனது 5% ஆண்டு கூட்டு வட்டி வீதம் கொண்டு எத்தனை ஆண்டுளில் ரூ. 1852.50 ஆகும்?",
         choice1:"1 வருடம்",
         choice2:"2 வருடம்",
         choice3:"3 வருடம்",
         choice4:"4 வருடம்",
         
         answer:3
         },
         
         {
         question:"ரூ.640 ஆனது இரண்டு ஆண்டுளில் கூட்டுத்தொகை ரூ. 774.40 ஆகும். கூட்டு வட்டி வீதம் காண", 
         choice1:"10%",
         choice2:"15%",
         choice3:"20%",
         choice4:"25%",
         
         answer: 1
         },
         
         {
         question:"𝒙/𝒚= 𝟒/𝟓, எனில் (𝟒/𝟕+ 𝟐𝒚−𝒙/𝟐𝒚+𝒙) ன் மதிப்பு",
         choice1:"3/7",
         choice2:"1",
         choice3:"1 1/7", 
         choice4:"2",
         
         answer:2
         },
         
         {
         question:"(0’85% இல் 405) + (2’25% இல் 550)=?",
         choice1:"13:’8175",
         choice2:"15’8175",
         choice3:"14’8175",
         choice4:"15’7150",
         
         answer:2
         },
         
         { 
         question:"𝟑𝟕 𝟏/𝟐 என்ற எண்ணில் எத்தனை 𝟏/𝟖 உள்ளன?",
         choice1:"300",
         choice2:"400",
         choice3:"500",
         choice4:"600",
         
         answer:1
         },
         
         {
         question:"𝒂+𝒃𝒂−𝒃 மற்றும் 𝒂𝟑−𝒃𝟑𝒂𝟑+𝒃𝟑 ஆகியன இரு விகிதமுறு எண்கள் எனில் அவற்றின் பெருக்கல் பலன்", 
         choice1:"2+𝑎𝑏+𝑏2/𝑎2−𝑎𝑏+𝑏2",
         choice2:"𝑎2−𝑎𝑏+𝑏2/𝑎2+𝑎𝑏+𝑏2",
         choice3:"𝑎2−𝑎𝑏−𝑏2/𝑎2+𝑎𝑏+𝑏2",
         choice4:"𝑎2+𝑎𝑏+𝑏2/𝑎2−𝑎𝑏−𝑏2",
         
         answer:1
         },
         
         {
         question:"ஒரு வட்ட வடிவ வெளியின் பரப்பளவு 13.86 ஏக்கர் எனில், ஒரு மீட்டருக்கு 20 பைசா வீதம் அதை சுற்றி வேலி-போட ஆகும் விலை",
         choice1:"ரூ 277.20",
         choice2:"ரூ 264",
         choice3:"ரூ324",
         choice4:"ரூ198",
         
         answer:2
         },
         
         { 
         question:"ஒரு நாற்கரசதுரத்தின் ஒரு பக்கம் 10 செமீ மற்றும் அதனுகடய ஒரு மூலைவிட்டம் 12 செமீ சாய் சதுரத்தின் பரப்பளவு ________ ஆகும்",
         choice1:"120 மசமீ2",
         choice2:"96 மசமீ2",
         choice3:"80 மசமீ2",
         choice4:"60 மச.மீ2",
         
         answer:2
         },
         
         {
         question:"a பக்கம் கொண்ட ஒரு சதுரத்தின் பரப்பளவு மற்றும் ‘a’ பக்கம் கொண்ட சமபக்க முக்கோணத்தின் பரப்பளவுளின் விகிதம் ________ஆகும்",
         choice1:"2 : 1",
         choice2:"2 : √3", 
         choice3:"4 : 3",
         choice4:"4 : √3 ",
         
         answer:4
         },
         
         {
         question:"ஒரு கடையிலுள்ள 25 பழங்களில் 5 ஆரஞ்சுப் பழங்கள் எனில் ஆரஞ்சுப் பழங்ளின் சதவீதம்",
         choice1:"5%",
         choice2:"25%",
         choice3:"10%",
         choice4:"20%",
         
         answer:4
         },
         
         {
         question:"தள்ளுபடி _________யின் மீது கணக்கிடப்படுவதாகும்",
         choice1:"குறித்த விலை",
         choice2:"அடக்க விலை",
         choice3:"விற்பலை விலை",
         choice4:" வட்டி",
         
         answer:1
         },
         
         { 
         question:"‘_________ = குறித்த விலை – தள்ளுபடி",
         choice1:"அடக்க விலை",
         choice2:"விற்பனை விலை",
         choice3:"பட்டியல் விலை",
         choice4:"சந்தை விலை",
         
         answer:2
         },
         
         {
         question:"ISRO வெற்றிகரமா EMISAT மற்றும் 28 வாடிக்கையாளர் செயற்கைக்கோள்களை விண்ணுக்கு செலுத்தியது எந்த ராக்கெட் மூலம்?",
         choice1:"PSLV-C44",
         choice2:"PSLV-C46",
         choice3:"PSLV-C47",
         choice4:"PSLV-C45",
         
         answer:4
         },
         
         { 
         question:"பின்வரும் மாவட்டங்ளில் 5 ஜி கவரஜ் வசதி பெற்ற உலகின் முதல் மாவட்டம் எது?",
         choice1:"Chaoyang",
         choice2:"Mangalore",
         choice3:"Hongkou",
         choice4:"Kolkata",
         
         answer:3
         },
         
         { 
         question:"2019 ஆண்டின் கிளென்ஃபிடிச் இன் (Glenfiddich’s) வளர்ந்துவரும் கலைஞராக எந்த இந்திய கலைஞர் தேர்ந்ததடுக்ப்பட்டுள்ளார்?", 
         choice1:"Raju Baraiya",
         choice2:"Subodh Gupta", 
         choice3:"Bharti Kher",
         choice4:"Shilpa Gupta",
         
         answer:1
         },
         
         {
         question:"200 ஒரு நாள் போட்டிளில் விளையாடும் முதல் பெண் கிரிக்கெட் வீராங்கனை யார்?",
         choice1:"மஜமிமா கராட்ரிகஸ் (jemima rodrigues)", 
         choice2:"மித்தாலி ராஜ் (mithali raj)",
         choice3:"ஜுலன் கோஸ்வாமி (julan goswami)",
         choice4:"ஸ்மிருதி மந்தனா (smriti mandhana)",
         
         answer:2
         },
         
         {
         question:"2019 ஆசிய உலக்க்கோப்பை கால்பந்து போட்டியில் வென்ற நாடு எது?",
         choice1:"ஜப்பான்",
         choice2:"கத்தார்",
         choice3:"ஈரான்",
         choice4:"சிங்கப்பூர்",
         
         answer:2
         },
         
         {
         question:"பின்வரும் அணிகளில் எது கொச்சி படகு இழுத்தல் 2019 (Kochi Area Pulling Regatta 2019) போட்டியை வென்றுள்ளது?", 
         choice1:"INS விக்ராந்த்",
         choice2:"INS துராணாச்சார்யா", 
         choice3:"INS கபத்வா",
         choice4:"INS விக்ரமாதிதியா",
          
         answer:2
         },
         
         { 
         question:"Reproductive and Respiratory Syndrome (PRRS), உடன் பின்வரும் விலங்குளில் எது தொடர்பானது?", 
         choice1:"மாடு",
         choice2:"ஒட்டகம்", 
         choice3:"பன்றி",
         choice4:"ஆடு",
         
         answer:3
         },
         
         { 
         question:"எம்மாநிலத்தில் உஜ்வாலா சானிடரி நாப்கின் திட்டத்தை நடுவணரசு தொடங்கியுள்ளது?",
         choice1:"உத்தரப்பிரதேசம்",
         choice2:"ஒடிசா",
         choice3:"ஜார்க்கண்ட்", 
         choice4:"ஹரியானா",
         
         answer:2
         },
         
         {
         question:"ரயில்வே வாரியத்தின் புதிய தலைவர் யார்?",
         choice1:"சதீஷ் மஜயின்",
         choice2:"ஆஷிஷ் குமார்",
         choice3:"விகனாத் குமார் யாதவ்",
         choice4:"பூஜா பகோலா",
         
         answer:3
         },
         
         { 
         question:"2018ல் எந்த இந்திய பந்து வீச்சாளர் அதிக சர்வதேச விக்கெட்டுகலை எடுத்துள்ளார்?",
         choice1:"முகமது ஷமி ",
         choice2:"குல்தீப் யாதவ்", 
         choice3:"ஜஸ்பிரிட் பும்ரா",
         choice4:"ரவிச்சந்திரன் அஸ்வின்",
         
         answer:3
         },
         
         {
         question:"நடப்பாண்டு சாம்பியன்ஸ் லீக் உலக்க்கோப்பையை வென்றுள்ள கால்பந்து அணி எது?",
         choice1:"FC பார்சிலோனா",
         choice2:"லிவர்பூல் FC",
         choice3:"மான்செஸ்ட்டர்FC",
         choice4:"ரியல் மாட்ரிட்",
         
         answer:2
         },
         
         {
         question:"நடப்பாண்டு உலகப்பால் தினத்துக்கான கருப்பொருள்",
         choice1:"Drink Move Be Strong",
         choice2:"Drink Milk : Today & Everyday", 
         choice3:"Drink Milk, Be Strong",
         choice4:"Raise a Glass",
         
         answer:2
         },
         
         { 
         question:"மெக்ஸிக்கொவின் மிகவுயரிய குடிமக்கள் விருது வழங்கி கவுரவிக்ப்பட்டுள்ள இந்திய குடியரசுத்தலைவர் யார்?",
         choice1:"பிரணாப் முகர்ஜி",
         choice2:"A P J அப்துல் கலாம்", 
         choice3:"பிரதீபா பாட்டில்",
         choice4:"இராம்நாத் கோவிந்த்",
         
         answer:3
         },
         
         {
          question:"சர்வதேச கிரிக்தைட்டில் 500 சிக்சர்கள அடித்த முதல் வீரர் யார்?",
         choice1:"Virat Kohli",
         choice2:"Jos Buttler",
         choice3:"Chris Gayle",
         choice4:"Eoin Morgan",
         
         answer:3
         },
         
         {
         question:"2019 ஜீரோ பாகுபாடு நாள் (Zero Discrimination Day) இன் கருப்பொருள் என்ன?",
         choice1:"Live Up",
         choice2:"Speak loud for justice",
         choice3:"Act to change laws that Discriminate",
         choice4:"A society free of discrimination",
         
         answer:3
         },
         
         {
         question:"வெளிநாட்டு ரூபாய் சந்தைகளில் RBI பணியகத்தின் தகவலர் யார்?", 
         choice1:"Usha Thorat",
         choice2:"N S Vishwanathan",
         choice3:"Mahesh Kumar Jain", 
         choice4:"Viral Acharya",
         
         answer:1
         },
         
         {
         question:"விஞ்ஞானத் திட்டங்ளுக்கு நிதியளிப்பதற்கு மத்திய மனிதவள மேம்பாட்டு அமைச்சகத்தின் திட்டம் எது?",
         choice1:"SITAR",
         choice2:"STARE",
         choice3:"STARK",
         choice4:"STARS",
         
         answer:4
         },
         
         { 
         question:"ஆடவர் ஒருநாள் சர்வதேச கிரிக்கெட் போட்டியில் முதல் முறையாக  பெண்  நடுவராக பணியாற்றிய கிளொர் பாபலொசக், எந்த நாட்டைச்  சேர்ந்தவர்?",
         choice1:"மேற்கிந்தியத்தீவுகள்",
         choice2:"தென் ஆப்பிரிக்கா",
         choice3:"நியூசிலாந்து",
         choice4:"ஆஸ்திரேலியா",
         
         answer:4
         },
         
          
         {
         question:"நடப்பாண்டு சர்வதேச தொழிலாளர் தினத்துக்கான கருப்பொருள் என்ன?",
         choice1:"Celebrating the International Labour Movement",
         choice2:"Let’s value work by providing the jobless with start-up capital support",
         choice3:"Sustainable Pension for all: The Role of Social Partners",
         choice4:"Uniting Workers for Social and Economic Advancement",
         
         answer:3
         },
          
         
         {
         question:"நடப்பாண்டு ஸ்பானிய லாலிகா பட்டத்தை வென்ற கால்பந்து அணி எது?",
         choice1:"மான்மசஸ்டர் யுனைடட்",
         choice2:"மலவான்டே UD",
         choice3:"பார்சிலோனா FC",
         choice4:"லிவர்பூல்",
         
         answer:3
         },
         
         {
            question:"வைரஸ்‌ எந்தமொழி சொல்",
            choice1:"கிரேக்கம்‌",
            choice2:"இலத்தின்‌",
            choice3:"ஸ்பானிஸ்‌",
            choice4:"அரேபியம்‌",
            
            answer:2
            },
            
            {
            question:"பாக்டிரியா எந்தமொழி சொல்‌",
            choice1:"கிரேக்கம்‌",
            choice2:"இலத்தின்‌",
            choice3:"ஸ்பானிஸ்‌",
            choice4:"அரேபியம்‌",
            
            answer:1
            },
            
            {
            question:"ஒரு முழுமையான வைரஸ்‌",
            choice1:"RNA",
            choice2:"DNA",
            choice3:"விரியான்‌",
            choice4:"TMV",
            
            answer:3
            },
            
            {
            question:"TMV வைரசை கண்டறிந்தவர்‌",
            choice1:"டிமிட்ரி ஐவனோஸ்கி",
            choice2:"பாஸ்டியர்‌",
            choice3:"ஆண்டன்வான்லூவன்ஹீக்‌",
            choice4:"இராபர்ட்கோச்‌",
            answer:1
            },
            
            {
            question:"இயற்க்கை துப்புரவாளர்கள்‌:__________",
            choice1:"வைரஸ்‌",
            choice2:"பாக்டிரியா",
            choice3:"விரியான்‌",
            choice4:"A & B",
            
            answer:2
            },
            
            {
            question:"உயிருள்ள (ம) உயிரற்ற பண்புகளை பெற்றவை",
            choice1:"வைரஸ்‌",
            choice2:"பாக்டிரியா",
            choice3:"பூஞ்சை",
            choice4:"A & B",
            
            answer:1
            },
            
            {
            question:"ஜெர்ம் குயரி கொள்கையை வெளியிட்டவர்‌",
            choice1:"ஏரன்பர்க்‌",
            choice2:"லூயி பாஸ்டியர்",
            choice3:"இராபர்ட்கோலே",
            choice4:"இராபர்ட்கோச்‌",
            
            answer:2
            },
            
            {
            question:"பொருந்தாதது :",
            choice1:"புகையிலை -பல்வன்னநோய்‌",
            choice2:"வாழை - இலைச்சுருள்‌ நோய்‌",
            choice3:"தக்காளி -. புள்ளி அழுகல்‌ நோய்",
            choice4:"பீட்ருட்‌ - மஞ்சள்‌ நோய்‌",
            
            answer:2
            },
            
            {
            question:"ஒரு கொழுப்பு உரை கொண்ட RNA வைரஸ்‌",
            choice1:"AZI",
            choice2:"IFNS",
            choice3:"Hiv",
            choice4:"TMV",
            
            answer:3
            },
            
            {
            question:"தடுமன்‌,சளி, இளம்பிள்ளைவாகம்‌,வெறிநாய்க்கடி, டிஸ்டம்பர்‌ அனைத்தும்______",
            choice1:"பாக்டிரியநோய்",
            choice2:"வைரஸ்நோய்‌",
            choice3:"பூஞ்சைநோய்",
            choice4:"A & C",
            
            answer:2
            },
            
            {
            question:"HIV- பற்றி தவறானது",
            choice1:"ரெட்ரோ வைரஸ்‌ பிரிவைச்சார்ந்தது",
            choice2:"எய்ட்ஸ்நோயை கண்டறியும்‌ சோதனை ELISA",
            choice3:"T4- லிம்ப்போசைட்டை தாக்கி அழிக்கிறது",
            choice4:"கருவுற்ற தாயிடமிருந்து சேய்க்கு பரவாது",
            
            answer:4
            },
            
            {
            question:"பாக்டிரியங்கள்‌ எவ்வாறு பெருக்கமடைகிறது",
            choice1:"அரும்புதல்‌",
            choice2:"மொட்டூவிடூதல்",
            choice3:"இணைதல்",
            choice4:"பிளத்தல்‌",
            
            answer:4
            },
            
            {
            question:"ஐந்துலக வகைப்பாட்டை வெளியிட்டவர்‌",
            choice1:"விக்டேகர்‌",
            choice2:"இராபர்ட்பிரவ்ன்",
            choice3:"இராபர்ட்‌ கோச்‌",
            choice4:"இராபர்ட்கோலே",
            
            answer:1
            },
            
            {
            question:"பாலைத்‌ தயிராக மாற்றும்‌ பாக்டிரியா",
            choice1:"சால்மோலுல்லா",
            choice2:"பாக்டிரியோபேஜ்‌",
            choice3:"லாக்டோ பாசில்லஸ்",
            choice4:"A&C",
            
            answer:3
            },
            
            {
            question:"புரத உறைகளில்‌ பொருந்தாதது -",
            choice1:"கிளாமிடோமோனாஸ்‌ - பெக்டின்",
            choice2:"வைரஸ்‌ - கேப்சிட்",
            choice3:"பூஞ்சை - மைசீலியம்",
            choice4:"alga- சைக்னிமா",
            answer:4
            },
            
            {
            question:"தொழுநோய்‌ ஹென்களின்‌ ___ பாக்டிரியம்‌",
            choice1:"கிலாஸ்டிரிடியம்",
            choice2:"விபிரியோ",
            choice3:"மைக்கோபாக்டிரியம்‌ லெப்ரே",
            choice4:"கேம்பியன்ஸ்‌",
            
            answer:3
            },
            
            {
            question:"The pond silk,(நீர்பட்டு) என்று அழைக்கப்படுவது",
            choice1:"ஸ்பைரோகைரா",
            choice2:"எபிபைட்",
            choice3:"பாலிசைபோனியா",
            choice4:"சைக்கீமா",
            
            answer:1
            },
            
            {
            question:"N2-திலைபடுத்தும்‌ பாக்டிரியம்",
            choice1:"ரைசோபியம்",
            choice2:"பாக்டிரியா",
            choice3:"அஸ்டோபாக்டர்",
            choice4:"A & B",
            
            answer:4
            },   

            {
               question:"பொருந்தாதது :",
               choice1:"உருளைவடிவம்‌ - காக்கஸ்‌",
               choice2:"குச்சிவடிவம்‌ - பேசில்லஸ்‌",
               choice3:"சுருள்வடிவம்‌ - மைசீலியம்‌",
               choice4:"கால்பள்ள வடிவம்‌ - விப்ரியோ",
               
               answer:3
               },
               
               {
               question:"ஒரு செல்லாலான சாறுண்ணி வகைப்‌ பூஞ்சை",
               choice1:"ரைசோபியம்",
               choice2:"ஈஸ்ட்‌",
               choice3:"அஸ்டோபாக்டர்",
               choice4:"A&C",
               
               answer:2
               },
               
               {
               question:"ஆப்ரிக்காவின்‌ உறக்க நோய்",
               choice1:"ஹிஸ்டாலிடிக்கா",
               choice2:"வைவாக்ஸ்‌",
               choice3:"டிரிப்பசோமோகேம்பியன்ஸ்‌",
               choice4:"பால்சிபோரம்",
               
               answer:3
               },
               
               {
               question:"நாம்‌ பருகும்‌ காபி, தேநீருக்கு எவ்வாறு சுவை கிடைக்கிறது",
               choice1:"பாசில்லஸ்மெகாதீரியம்",
               choice2:"ஸ்பைரில்லம்‌",
               choice3:"அஸ்டோபாக்டர்",
               choice4:"வினிகர்‌",
               
               answer:1
               },
               
               {
               question:"மைக்கோபாக்டிரியம்‌ டிபூபர்குளோசஸ்‌ என்ற குச்சி வடிவ பாக்டிரியா உண்டு பண்ணுவது",
               choice1:"TB",
               choice2:"MMR",
               choice3:"DPT",
               choice4:"TT",
               
               answer:1
               },
               
               {
               question:"இறப்பை ஏற்படுத்தும்‌ மலேரியா",
               choice1:"பிளாஸ்மோடியம்‌ வைவாக்ஸ்‌",
               choice2:"பிணஸ்மோடியம்‌ பால்சிபாரம்",
               choice3:"பிணஸ்மோடியம்‌ மலேரியா",
               choice4:"பிளாஸ்மோடியம்‌ ஒவேலே",
               
               answer:2
               },
               
               {
               question:"H1N1 1970 உலகையே ஆட்டிப்படைத்த வைரஸ்",
               choice1:"பிளாஸ்மோடியம்",
               choice2:"இன்புளுயன்சா",
               choice3:"வைரனோவைரஸ்‌",
               choice4:"எபொலோ",
               
               answer:2
               },
               
               {
               question:"வைரஸின்‌ மரபுப்‌ பொருள்‌",
               choice1:"DNA or RNA",
               choice2:"RNA &DNA",
               choice3:"DNA",
               choice4:"RNA",
               
               answer:1
               },
               
               {
               question:"நைட்ரஜனை நிலைநிறுத்தும்‌ பாக்டிரியா",
               choice1:"நைட்ரசோமோனாஸ்",
               choice2:"கேப்னோபிலிக்‌",
               choice3:"தயோபேசில்லஸ்",
               choice4:"ஸ்பைரில்லம்‌",
               
               answer:1
               },
               
               {
               question:"இரசக்கலவை என்பது ஓரு உலோகக்கலவை இதில்‌ இடம்பெற்றுள்ள உலோகங்களில்‌ ஒன்று",
               choice1:"டங்ஸ்டன்",
               choice2:"காரீயம்‌",
               choice3:"காப்பர்‌",
               choice4:"மெர்குரி",
               
               answer:4
               },
               
               {
               question:"வைரஸ்‌ பற்றி படிக்கும்‌ படிப்பு",
               choice1:"வைராலஜி",
               choice2:"பாக்டிரியாலஜி",
               choice3:" மைக்காலஜி",
               choice4:"பைக்காலஜி",
               
               answer:1
               },
               
               {
               question:"நன்னீர்‌ மற்றும்‌ கடல்களில்‌ மிதந்து காணப்படும்‌ ஒரு செல்தாவரங்கள்‌ இவ்வாறு அழைக்கப்படுகின்ற்ன",
               choice1:"ஆல்காக்கள்‌",
               choice2:"சூப்ளாங்க்டன்‌",
               choice3:"ஃபைட்டோப்ளாங்க்டன்‌",
               choice4:"தொற்றுத்தாவரம்‌",
               
               answer:3
               },
               
               {
               question:"புகையிலை மொசைக்‌ வைரஸ்‌ வடிவம்‌",
               choice1:"கனசதுரம்‌",
               choice2:"சதுரவடிவம்‌",
               choice3:"சுருள்வடிவம்‌",
               choice4:"சிக்கலாவைடிவம்‌",
               
               answer:3
               },
               
               {
               question:"மருந்துகளின்‌ இராணி",
               choice1:"பெனிசிலியம்",
               choice2:"AZT",
               choice3:"ஜெண்டோனம்சின்",
               choice4:"பென்சிலின்‌",
               
               answer:4
               },  
               
               
{
   question:"காற்றில்லா சுவாசத்திற்கு எ.கா",
   choice1:"கேப்னோஃபிலிக்‌",
   choice2:"குளோரோபியம்‌",
   choice3:"பாக்டிரியோவீரிடின்",
   choice4:"கிலாஸ்டிரிடியம்‌",
   
   answer:4
   },
   
   {
   question:"கோண இலைப்புள்ளி நோய்‌ சாந்தோமோனாஸ்‌ மால்வேளஸியேரம்‌ எத்தாவர நோய்‌",
   choice1:"பருத்தி",
   choice2:"பேரி",
   choice3:"நெல்‌",
   choice4:"கேரட்‌",
   
   answer:1
   },
   
   {
   question:"நைட்ரஜனை நிலைநிறுத்தும்‌ பாக்டிரியா",
   choice1:"அஸட்டோபாக்டர்",
   choice2:"ரைசோபியம்‌",
   choice3:"கிளாஸ்டிரிடியம்",
   choice4:"அனைத்தும்‌",
   answer:4
   },
   
   {
   question:"பாலில்‌ உள்ள அமிலம்‌",
   choice1:"லோக்டோஸ்‌",
   choice2:"லாக்டிக்‌அமிலம்‌",
   choice3:"லேக்டோ பேசில்லஸ்",
   choice4:"A&B",
   
   answer:2
   },
   
   {
   question:"நார்‌ தாவரங்களில்‌ இருந்து நார்‌ பிரித்தெடுக்கும்‌ முறை",
   choice1:"ரெட்டிங்",
   choice2:"கட்டிங்‌",
   choice3:"புருனிங்‌",
   choice4:"டஸ்கின்னிங்‌",
   
   answer:1
   },
   
   {
   question:"மனித சிறுகுடலில்‌ வாழும்‌ எஸ்செரிஸீயா கோலை எவ்வித வைட்டமின்களை உற்பத்தி செய்கிறது",
   choice1:"A மற்றும்‌ c",
   choice2:"K மற்றும்‌ B",
   choice3:"A மற்றும்‌ E",
   choice4:"E மற்றும்‌ B",
   
   answer:2
   },
   
   {
   question:"மாறும்‌ வடிவத்தை உடைய செல்‌ இவ்வாறு அழைப்பு",
   choice1:"ஸ்பைரில்லம்‌",
   choice2:"ப்ளியோமார்‌ஃபிக்",
   choice3:"கூட்டுயிர்கள்‌",
   choice4:"கிராம்‌-நெகடிவ்‌",
   
   answer:2
   },
   
   {
   question:"பூஞ்சைகள்‌ பற்றி படிப்பது",
   choice1:"வைராலஜி",
   choice2:"பாக்டிரியாலஜி",
   choice3:"பைக்காலஜி",
   choice4:"மைக்காலஜி",
   
   answer:4
   },
   
   {
   question:"பூஞ்சையின்‌ உடலம்‌",
   choice1:"கைடின்‌",
   choice2:"பேசில்லஸ்",
   choice3:"மைசீலியம்‌",
   choice4:"சீனோசைட்டிக்‌",
   
   answer:3
   },
   
   {
   question:"சாராயதொழிற்சாலையும்‌,ரொட்டித்‌ தொழிற்சாலையும்‌ இனைந்து பயன்படுத்தும்‌ ஒரு செல்‌ பூஞ்சை .........",
   choice1:"ஈஸ்ட்‌",
   choice2:"தியூரோஸ்போரா",
   choice3:"ஆஸ்பர்ஜிஸ்லஸ்",
   choice4:"அனைத்தும்‌",
   
   answer:1
   },
   
   {
   question:"பூஞ்சைகள்‌ இல்லாவிட்டால்‌ இறப்பு கூட முழுமை பெறாது என்று கூறியவர்",
   choice1:"அலெக்சாண்டர்",
   choice2:"இராபர்ட்ஹீக்",
   choice3:"ஆல்பட்‌",
   choice4:"லூயிபாஸ்டர்",
   
   answer:4
   },
   
   {
   question:"பூஞ்சைகளின்‌ உடலம்‌ இதனால்‌ ஆனது",
   choice1:"செல்லுலோஸ்‌",
   choice2:"கைடின்",
   choice3:"பெப்டிடோகிளைக்கான்",
   choice4:"பெக்டின்‌",
   
   answer:2
   },
   
   {
   question:"பூஞ்சையின்‌ சேமிப்பு உணவுப்‌ பொருள்‌ __",
   choice1:"பெப்சின்‌",
   choice2:"ரெனின்‌",
   choice3:"கிளைக்கோஜன்‌",
   choice4:"செல்லுலோஸ்‌",
   
   answer:3
   },
   
   {
   question:"நீரில்‌ கரையும்‌ போது ஹைட்ரஜன்‌ அயனிகளைக்‌ கொடுக்கும்‌ சேர்மம்",
   choice1:"அமிலம்",
   choice2:"காரம்‌",
   choice3:"உப்பு",
   choice4:"கணிமங்கள்",
   
   answer:1
   },
   
   {
   question:"நீல லிட்மஸ்‌ தாளை சிவப்பு நிறமாக மாற்றுவது",
   choice1:"அமிலம்",
   choice2:"காரம்‌",
   choice3:"உப்பு",
   choice4:"கனிமங்கள்",
   
   answer:1
   },
   
   {
   question:"சோதனைக்‌ குழாயின்‌ அருகில்‌ எரியும்‌ ஒரு மெழுகு வர்த்தியை கொண்டு செல்லும்‌ போது அது பாப்‌ என்ற ஒலியுடன்‌ அணையக்‌ காரணம்‌",
   choice1:"ஆக்சிஜன்‌ வாயு வெளியேறுகிறது",
   choice2:"துத்தநாக வாயு வெளியேறுகிறது",
   choice3:"ஹைட்ரஜன்‌ வாயு வெளியேறுகிறது",
   choice4:"ஹைட்ரோகுளோரிக்‌ அமிலம்‌ வெளியேற்றப்படுகிறது",
   
   answer:3
   },
   
   {
   question:"கீழ்கண்டவற்றுள்‌ பொருத்தமற்றது",
   choice1:"மின்‌ கலங்கள்‌ - கந்தக அமிலம்‌",
   choice2:"கழிவறைகளை தூய்மை ஹைட்ரோகுளோரிக்",
   choice3:"சமையல்‌ சோடா - பார்மிக்‌ அமிலம்‌",
   choice4:"விவசாய உரம்‌ - நைட்ரிக்‌ அமிலம்‌",
   
   answer:3
   },
   
   {
   question:"pH அளவீட்டை அறிமுகப்படுத்தியவர்",
   choice1:"எஸ்‌.பி.சாரன்சன்",
   choice2:"ஓாயிபாஸ்டியர்",
   choice3:"டாரிசெல்லி",
   choice4:"ஜோகன்சன்‌",
   
   answer:1
   },
   
   {
   question:"நடுநிலை கரைசலின்‌ (நீர்) pH மதிப்பு",
   choice1:"5.8", 
   choice2:"7",	
   choice3:"2",
   choice4:"7.5",
   
   answer:2
   },
   
   {
   question:"கீழ்கண்டவற்றுள்‌ பொருத்தமற்றது",
   choice1:"சாதாரன உப்பு -NaCl",
   choice2:"சமையல்‌ சோடா -Na2CO3",
   choice3:"சலவை சோடா - NaHCO3",
   choice4:"சலவைத்தூள்‌ - CaSO4 ½ H2O",
   
   answer:4
   },
   
   {
   question:"ஆல்கா உடலத்தின்‌ படிநிலையின் சரியான வரிசை",
   choice1:"வேர்‌, தண்டு, இலை, திசுக்கள்",
   choice2:"திசுக்கள்‌, இலை.தண்டு, வேர்‌",
   choice3:"வேர்‌, இலை, தண்டு. திசுக்கள்‌",
   choice4:"திசுக்கள்‌, இலை.வேர்‌.தண்டு",
   
   answer:1
   },
   
   {
   question:"ஒரு செல்‌ ஆல்கா (ம) நகரும் தன்மையுடையது",
   choice1:"ஸ்பைரோகைரா",
   choice2:"கிளாமிடோமோனஸ்",
   choice3:"மேக்ரோஸிஸ்டிஸ்",
   choice4:"லாமினேரியா",
   
   answer:2
   },


   {
      question:"ஒரு செல்‌ ஆல்கா (ம) நகரும்‌ தன்மையுடையது",
      choice1:"ஸ்பைரோகைரா",
      choice2:"கிளாமிடோமோனஸை",
      choice3:"மேக்ரோஸிஸ்டிஸ்",
      choice4:"லாமினேரியா",
      
      answer:2
      },
      
      {
      question:"கீழ்கண்டவற்றுள்‌ பொருத்தமற்றது",
      choice1:"கிண்ணைடிவம்‌ - கிளாமிடோமோனோஸ்",
      choice2:"ரிப்பன்‌ வடிவம்‌ - ஸ்பைரோனகைரா",
      choice3:"நட்சத்திர வடிவம்‌ - மேக்ரோஸிஸ்டிஸ்‌",
      choice4:"வலை பின்னல்‌ வடிவம்‌ - ஊடோகோனியம்‌",
      
      answer:3
      },
      
      {
      question:"அயோடின்‌ எந்த ஆல்காவில்‌ இருந்து பெறப்படுகிறது",
      choice1:"கெல்ஃப்",
      choice2:"ஜெலிடியம்‌",
      choice3:"கிராஸிலேரியா",
      choice4:"அலோசிரா",
      
      answer:1
      },
      
      {
      question:"விண்வெளிப்‌ பயணத்தில்‌ பயன்படுத்தும்‌ ஆல்கா",
      choice1:"குளோரில்லா ஸ்பைருலினா",
      choice2:"குளோரில்லா பைரினாய்டோசா",
      choice3:"குளோரில்லின்‌",
      choice4:"அனைத்தும்‌",
      
      answer:2
      },
      
      {
      question:"தாவர உலகின்‌ இரு வாழ்விகள்‌",
      choice1:"தாலஸ்‌",
      choice2:"டெரிட்டோபைட்‌",
      choice3:"ஆம்பிபியான்ஸ்",
      choice4:"லைக்கன்கள்‌",
      
      answer:3
      },
      
      {
      question:"பிரையோபைட்‌ பற்றி தவறானது:",
      choice1:"பீட்மாஸ்‌ மற்றும்‌ ஸ்பக்னம்‌ - எரிபொருளாக பயன்படுகிறது",
      choice2:"பிரையோபைட்டுகள்‌ மண்ணரிப்பை தடுக்கிறது",
      choice3:"ஸ்பக்னம்‌ புரை தடுப்பானாக பயன்படுகிறது",
      choice4:"பீம்‌ என்பது குறைந்த கார்பன்‌ உடையது",
      
      answer:4
      },
       
      {
      question:"வாஸ்குலார்‌ கிரிப்டோகேம்கள்‌ என்பது",
      choice1:"பிரையோபைட்‌",
      choice2:"டெரிட்டோபைட்‌",
      choice3:"ஜிம்னோஸ்போம்‌",
      choice4:"ஆஜியோஸ்போம்‌",
      
      answer:2
      },
      
      {
      question:"மங்கையர்‌ கூந்தல்‌ என்று அழைக்கப்படுவது",
      choice1:"அடியாந்தம்",
      choice2:"பெரணிகள்",
      choice3:"மாஸ்‌",
      choice4:"அரக்கேரியா",
      
      answer:1
      },
      
      {
      question:"தாவரத்தில்‌ ஒளிச்சேர்க்கை எங்கு நடைபெறுகிறது",
      choice1:"இலைகள்",
      choice2:"வேர்கள்",
      choice3:"தண்டு",
      choice4:"கணு",
      
      answer:1
      },
      
      {
      question:"தாவரங்கள்‌ எல்வாறு கழிவு நீக்கம்‌ செய்கிறது",
      choice1:"செல்களில்‌ வாக்குவோல்களாக சேமிக்கப்படுகிறது",
      choice2:"உதிரும்‌ இலைகளில்‌ சேமிக்கப்படுகிறது",
      choice3:"வேர்களின்‌ வாயிலாக மண்ணில்‌ சேமிக்கிறது",
      choice4:"அனைத்தும்‌ சரி",
      
      answer:4
      },
      
      {
      question:"தற்சார்பு ஊட்ட முறைக்கு தேவையானது",
      choice1:"O2,H2O",
      choice2:"பச்சையம்‌",
      choice3:"சூரிய ஒளி",
      choice4:"அனைத்தும்‌",
      
      answer:4
      },
      
      {
      question:"காற்றின்‌ மூலம்‌ மகரந்த சேர்க்கை ........",
      choice1:"ஆர்னித்தோபில்லி",
      choice2:"அனீமோபில்லி",
      choice3:" சூபில்லி",
      choice4:"என்டமோமில்லி",
      
      answer:2
      },
      
      {
      question:"மலேரியா நோய்க்கான மருந்து எந்த மரப்பட்டையில்‌ இருந்து கிடைக்கிறது",
      choice1:"கரிசலாங்கண்ணி",
      choice2:"சிங்கோனா",
      choice3:"கீழாநெல்லி",
      choice4:"வேம்பு",
      
      answer:2
      },
      
      {
      question:"சிவப்பு லிட்மஸ்‌ தாளை நீல நிறமாக மாற்றுவது",
      choice1:"காரம்‌",
      choice2:"அமிலம்‌",
      choice3:"கனிமங்கள்‌",
      choice4:"தாதுக்கள்‌",
      
      answer:1
      },
      
      {
      question:"அனபினா ஓரு",
      choice1:"சயனோபாக்டீரியா",
      choice2:"ஆல்கா",
      choice3:"சிவப்பு ஆல்கா",
      choice4:"பாசி",
      
      answer:1
      },
      
      {
      question:"தாவரங்கள்‌ வளர்ச்சி மு) இனப்பெருக்கத்திற்கு எத்தனை தனிமங்கள்‌ தேவை",
      choice1:"1",
      choice2:"12",
      choice3:"18",
      choice4:"16",
      
      answer:4
      },
      
      {
      question:"ஹைட்ரோகுளோரிக்‌ அமில உற்பத்தி",
      choice1:"ஆக்சான்‌",
      choice2:"ஜீஜினம்‌",
      choice3:"கார்டியாக்‌",
      choice4:"ஆக்சாண்டிக்‌",
      
      answer:4
      },
      
      {
      question:"கூட்டுயிரி உணவூட்ட முறைக்கு எ.கா",
      choice1: "லைக்கள்‌",
      choice2:"மைக்கோரைசா",
      choice3:"ரைசோபியம்‌",
      choice4:"அனைத்தும்‌",
      
      answer:4
      },
      
      {
      question:"தாவர செல்‌ இதைப்‌ பெற்றுள்ளதால்‌ விலங்கு செல்லின்‌ இருந்து வேறுபடுகிறது",
      choice1:"செல்சவ்வு",
      choice2:"என்டோபிளாச வலை",
      choice3:"பிளாஸ்மா சவ்வு",
      choice4:"செல்சுவர்‌",
      answer:4
      },
      
      {
      question:"கீழ்கண்டவற்றுள்‌ சரியானது எது",
      choice1:"வெளிர்க்‌ கிகங்கள்‌. வியூக்கோபிளாஸ்டிடுகள்‌",
      choice2:"வண்ணக்களைகங்கள்‌ - குரோமோ பிளாஸ்டிடுகள்‌",
      choice3:"பசுங்கனிகங்கள்‌ - குளோரோபிளாஸ்டிடுகள்",
      choice4:"அனைத்தும்‌ சரி",
      
      answer:4
      },
      
      {
      question:"நைட்ரஜன்‌ சுழற்ச்சியில்‌ தவறானது எது / எவை",
      choice1:"நைட்ரஜன்‌ வெளியேற்றும்‌ - சூடோமோனாஸ்",
      choice2:"நைட்ரஜன்‌ நிலைநுறுத்தம்‌ - ரைசோபியம்",
      choice3:"அம்மோனியமாவது . நாஸ்டாக்‌",
      choice4:"நைட்ரேட்டாதல்‌ - நைட்ரோபாக்டர்‌",
      
      answer:3
      },
      
      {
      question:"போக்குவரத்து நெரிசல்‌ மிகுந்த நகரத்தில்‌ காற்று செம்பழுப்பு நிறமாக மாற காரணம்‌ __",
      choice1:"கார்பன்‌ மோனாக்ஸைடு",
      choice2:"ஹைட்ரோ கார்பன்‌",
      choice3:"கந்தத டை ஆக்ஸைடு",
      choice4:"நைட்ரஜன்‌ ஆக்ஸைடு",
      
      answer:4
      },
      
      {
      question:"பாக்டிரிய நோய்களில்‌ பொருந்தாததைத்‌ தேர்க",
      choice1:"எலுமிச்சை - சிட்ரஸ்‌ கேன்சர்",
      choice2:"உருளை - வில்ட்நோய்‌",
      choice3:"வேர்க்கடலை - டிக்கா நோய்",
      choice4:"நெல்‌ - பிளைட்‌ நோய்கள்‌",
      
      answer:3
      },
      
      {
      question:"மனித உடலில்‌ அதிகம்‌ காணப்படும்‌ தனிமம்‌",
      choice1:"கார்பன்‌",
      choice2:"ஹைட்ரஜன்",
      choice3:"நைட்ரஜன்‌",
      choice4:"ஆக்சிஜன்‌",
      
      answer:4
      },
      
      {
      question:"கண்ணாடியைக்‌ கரைக்கும்‌ அமிலம்‌ ____",
      choice1:"ஹைட்ரோ குளோரிக்‌ அமிலம்",
      choice2:"புளுட்டோனியம்‌",
      choice3:"பைரூவிக்‌ அமிலம்‌",
      choice4:"ஹைட்ரோ ப்ளூரிக் அமிலம்",
      
      answer:4
      },
      
      {
      question:"குளோரோபில்‌ சேர்மத்தில்‌ அதிகளவு உள்ள தனிமம்‌",
      choice1:"மாங்கனிசு",
      choice2:"வெள்ளீபம்‌",
      choice3:"மக்னீசியம்",
      choice4:"குப்பரைட்‌",
      
      answer:3
      },
      
      {
      question:"அனைத்து அமிலங்கலும்‌ காணப்படும்‌ தனிமம்‌",
      choice1:"ஹைட்ரஜன்",
      choice2:"நைட்ரஜன்‌",
      choice3:"ஹைட்ரோகுளோரிக்",
       choice4:"ஆக்ஸிஜன்‌",
      
      answer:1
      },
      
      {
         question:"நடுநிலைக்‌ கரைசலின்‌ pH மதிப்பு",
         choice1:"14",
         choice2:"7",
         choice3:"7.5",
         choice4:"14.5",
         
         answer:2
         },
         
         {
         question:"கீழ்கண்டவற்றுள்‌ எது எவை சரி",
         choice1:"அலுமினியத்தின்‌ தாது - பாக்சைட்‌",
         choice2:"யுரோனியத்தின்‌ தாது - பிச்பிளண்ட்‌",
         choice3:"மோனசைட்‌ - தோரியம்‌",
         choice4:"இரும்பின்‌ தாது - ஹெமடைட்,சிட்டரைட்‌",
         
         answer:4
         },
         
         {
         question:"பருப்பொருட்களின்‌ நான்காம்‌ நிலை",
         choice1:"ஐன்ஸ்டீன்‌",
         choice2:"புல்லரீன்‌ வாயு",
         choice3:"பிளாஸ்மா",
         choice4:"வாயு",
         
         answer:3
         },
         
         {
         question:"மிகக்‌ கடினமான அலோகம்‌",
         choice1:"வைரம்‌",
         choice2:"பெரிலியம்",
         choice3:"புரோமின்‌",
         choice4:"புல்லரீன்‌",
         
         answer:1
         },
         
         {
         question:"எரிபொருளாக பயன்படும்‌ ஹைட்ரஜன்‌ சேர்மம்‌",
         choice1:"ஹைட்ரசின்‌",
         choice2:"நைட்ரசின்‌",
         choice3:"ஹைட்ராக்சைடு",
         choice4:"நைட்ரேட்‌",
         
         answer:1
         },
         {
         question:"ஐன்ஸ்டீன்‌ நிறையாற்றல்‌ சமன்பாடு",
         choice1:"E = MIC",
         choice2:"E = MC2",
         choice3:"2n",
         choice4:"E = OH",
         
         answer:2
         },
         
         {
         question:"கீழ்கண்டவற்றுள்‌ பொருத்தமற்றது",
         choice1:"ஐ.நா.பூமி விருது - க்ஷேக்ஹசிணா",
         choice2:"AUSINDEX கடற்பயிற்சி - இந்தியா & சீனா",
         choice3:"புதிய சுற்றுலாக்கொள்கை 2015 - 2020 - ஆந்திரா",
         choice4:"இந்தி திவாஸ்‌ - செப்டம்பர்‌ - 14",
         
         answer:2
         },
         
         {
         question:"ஐ.நா (UNGC) எதிர்வரும்‌ 70வது கூட்டத்தொடரின்‌ போது இந்தியாத்‌ தொடர்பான பேச்சுவார்த்தை நடைபெற உள்ளது அத்தீர்மானம்‌ கொண்டுவரப்பட காரணம்‌",
         choice1:"இந்தியாவிற்கு வீட்டோ அதிகாரம்‌ கிடைக்க",
         choice2:"ஐ.நாவில்‌ நிரந்தர உறுப்பினர்‌ இடம்‌ பெற",
         choice3:"IAEA௧ வில்‌ உறுப்பினராக இணைய",
         choice4:"ஐ.நா.வர்த்தக அமைப்பில் உறுப்பிரனாக",
         
         answer:2
         },
         
         {
            question:"1855 ஆம்‌ ஆண்டு விதவை மறுமணம்‌ குறித்த சட்ட முன்‌ வடிவில்‌ அறிமுகப்படுத்தியவர்‌ யார்‌?",
            choice1:"ஈஸ்வர சந்திர வித்யாசாகர்‌",
            choice2:"J.Pகிராண்ட்‌",
            choice3:"சர்‌ சார்ஸ்‌ உட்‌",
            choice4:"ஜான்சன்‌ டன்கள்",
            
            answer:2
            },
            
            
            
            {
            question:"கட்டபொம்மனுக்கு மரண தண்டனையை அறிவித்தவர்‌ யார்‌?",
            choice1:"ஜாக்சன்‌",
            choice2:"வெல்லெஸ்லி பிரபு",
            choice3:"பானர்மேன்‌",
            choice4:"ஆர்‌.லாஷிங்டன்‌",
            
            answer:3
            },
            
             
            {
            question:"கீழ்க்கண்ட எந்த முறையில் தங்கம் பிரித்தெடுக்கப்படுகிறது?",
            choice1:"குவாரியிங்‌",
            choice2:"திறந்தவெளி முறை",
            choice3:"பட்டைகளாக எடுத்தல்‌",
            choice4:"வண்டல்‌ பிரித்தெடுக்கும்‌ முறை",
            
            answer:4
            },
            
            {
            question:"ஸ்பாட்‌ என்ற தொலை நுண்ணுணர்வு செயற்கைக்‌ கோளை எந்த நாடு ஏவியது?",
            choice1:"பிரான்ஸ்‌",
            choice2:"தென்‌ கொரியா",
            choice3:"சீனா",
            choice4:"ஐக்கிய அமெரிக்க நாடுகள்‌",
            
            answer:1
            },
            

            {
            question:"பொதுப்பட்டியல்‌ எந்த நாட்டு அரசியலமைப்புச்‌ சட்டத்திலிருந்து பெறப்பட்டது?",
            choice1:"ஆஸ்திரேலியாவின்‌ அரசியலமைப்புச்‌ சட்டம்",
            choice2:"கனடாவின்‌ அரசியலமைப்புச்‌ சட்டம்‌",
            choice3:"பிரிட்டனின்‌ அரசியலமைப்புச்‌ சட்டம்‌",
            choice4:"ஜப்பானின்‌ அரசியலமைப்புச்‌ சட்டம்‌",
            
            answer:1
            },
            
            
            {
            question:"சமுதாயத்தின்‌ அனைத்து முன்னேற்றங்களுக்கும்‌ வழிவகுக்கும்‌ அடிப்படை முதலீடு _____ ஆகும்‌",
            choice1:"நன்கொடைகள்",
            choice2:"கல்வி",
            choice3:"ஆசிரியர்கள்",
            choice4:"நம்பிக்கை",
            
            answer:2
            },
            
            
            
            {
            question:"கீழ்கண்ட எந்த ஒளியில்‌ ஒளிச்சேர்க்கை வேகமாக நடைபெறும்‌?",
            choice1:"இருட்டு",
            choice2:"சிவப்பு ஒளி",
            choice3:"மஞ்சள்‌ ஒளி",
            choice4:"வெள்ளை ஒளி",
            
            answer:4
            },
            
            
            
            
            {
            question:"தோல்‌ கீழ்க்கண்ட எந்த புரட்சியுடன்‌ தொடர்புடையது?",
            choice1:"பழுப்பு புரட்சி",
            choice2:"கருப்பு புரட்சி",
            choice3:"சாம்பல்‌ புரட்சி",
            choice4:"சிவப்புப்‌ புரட்சி",
            
            answer:1
            },
            
            
            {
            question:"1528 ஆம்‌ ஆண்டு நடைபெற்ற எந்த போரில்‌ பாபர்‌ மேதினிராய்‌ என்ற மன்னரை வெற்றி கொண்டார்‌?",
            choice1:"காக்ரா போர்‌",
            choice2:"கன்வா போர்‌",
            choice3:"சந்தேரி போர்‌",
            choice4:"கன்னோசி போர்‌",
            
            answer:3
            },
            
            {
            question:"காந்தியின்‌ செயல்திட்டங்களில்‌ சட்டசபை புறக்கணிப்பையே முக்கியமானது என்று வலியுறுத்தியவர்‌ யார்‌?",
            choice1:"எஸ்‌. சத்தியமூர்த்தி",
            choice2:"சீனிவாச அய்யங்கார்‌",
            choice3:"சி.இராஜகோபாலாச்சாரி",
            choice4:"ஈ.வெ.இராமசாமி நாயக்கர்‌",
            
            answer:3
            },
            
            
            {
            question:"சூரியனின்‌ நிறை = ?",
            choice1:"199*10^29 கிகி",
            choice2:"1.90*10^30 கிகி",
            choice3:"1.98*10^29 கிகி",
            choice4:"1.98*10^30 கிகி",
            
            answer:2
            },
            
            
            {
            question:"மக்களின்‌ தனிதபர்‌ வருமானத்தை இரட்டிப்பாக்க நடவடிக்கைகள்‌ மேற்கொள்ளப்பட்ட ஐந்தாண்டு திட்டம்‌ எது?",
            choice1:"ஏழாவது ஐந்தாண்டு திட்டம்‌",
            choice2:"எட்டாவது ஐந்தாண்டுத்‌ திட்டம்",
            choice3:"ஒன்பதாவது ஐந்தாண்டுத்‌ திட்டம்‌",
            choice4:"பத்தாது ஐந்தாண்டு திட்டம்‌",
            
            answer:4
            },
            
            
            {
            question:"இந்தியாவின்‌ எந்த இடத்தில்‌ செதுக்கப்பட்ட மிக உயரமான சமணர்‌ சிலை அமைந்துள்ளது?",
            choice1:"ஆத்திரப்‌ பிரதேசம்",
            choice2:"கர்நாடகா",
            choice3:"மத்திய பிரதேசம்‌",
            choice4:"அருணாச்சலப்‌ பிரதேசம்‌",
            
            answer:2
            },
            
            
            {
            question:"உலகிலேயே அதிக அளவு அணுசக்தியை உற்பத்தி செய்யும்‌ நாடு எது?",
            choice1:"அமெரிக்க ஐக்கிய நாடு",
            choice2:"பிரான்ஸ்",
            choice3:"ஜப்பான்",
            choice4:"சீனா",
            
            answer:1
            },
            

            {
               question:"பழங்கள்‌ பற்றிய படிப்பு எவ்வாறு அழைக்கப்படுகிறது?",
               choice1:"போமாலஜி",
               choice2:"பைக்காலஜி",
               choice3:"எண்டமாஸஜி",
               choice4:"எட்டிமாலஜி",
               
               answer:1
               },
               
               
               {
               question:"மகப்பேறு நிகழ்ச்சியை விரைவுபடுத்தும்‌ ஹார்மோன்‌ எது?",
               choice1:"தைராக்ஸின்",
               choice2:"செக்ரிடின்‌",
               choice3:"வாஸோப்‌ரசின்‌",
               choice4:"ஆக்ஸிடோஸின்‌",
               
               answer:4
               },
               
               
               
               {
               question:"கீழ்க்கண்ட எந்த மாநிலத்தில்‌ ஈரவை சட்டமன்றம்‌ இல்லை?",
               choice1:"கர்நாடகம்‌",
               choice2:"ஆந்திரா",
               choice3:"பீகார்‌",
               choice4:"மத்திய பிரதேசம்‌",
               
               answer: 4
               },
               
               {
               question:"1500 ஆம்‌ ஆண்டு அல்மெய்டா யாரால்‌ கொல்லப்பட்டார்‌?",
               choice1:"ஆங்கிலேயர்கள்‌",
               choice2:"பிரெஞ்சுக்காரர்கள்",
               choice3:"எகிப்தியர்கள்‌",
               choice4:"டேனியர்கள்‌",
               
               answer:3
               },
               
               {
               question:"அம்பாய்னா படுகொலை நடைபெற்ற ஆண்டு எது?",
               choice1:"1623",
               choice2:"1625",
               choice3:"1628",
               choice4:"1612",
               
               answer:1
               },
               
               
               {
               question:"சுவாசித்தல்‌ நிகழ்ச்சியின்‌ பொழுது அமிலத்தை அசிட்டைல்‌ கோ-என்ஸைம்‌-ஏ என்ற மூலக்கூறாக மாற்றும்‌ நொதி எது?",
               choice1:"பைருவிக்‌ அமில ஆக்ஸிடேஸ்‌",
               choice2:"பைருவேட்‌ சித்தட்டேஸ்‌",
               choice3:"அகோனிடேஸ்‌",
               choice4:"பைருவேட்டிக்‌ ஹைட்சோஜினேஸ்‌",
               
               answer:4
               },
               
               
               {
               question:"தாவர மரபு தொழில்நுட்பவியலில்‌ அதிக அளவில் பயன்படுத்தப்படும்‌ பாக்டீரியம்‌ எது?",
               choice1:"கிளாஸ்டிரியம்‌ செப்டிகம்‌",
               choice2:"அக்ரோ பாக்டீயம்‌ ட்யூசிபேசியன்ஸ்‌",
               choice3:"சாந்தோமோனஸ்‌ சிட்ரி",
               choice4:"பேசில்லஸ்‌ கோயாகுலன்ஸ்‌",
               
               answer:2
               },
   
   
{
   question:"தமிழ்நாடு அரசு உயர்கல்வி செயற்கை வீதத்தை 2020 ஆம்‌ ஆண்டிற்குள்‌ ____ லிருந்து ____ ஆக உயர்த்துவதை நோக்கமாகக்‌ கொண்டுள்ளது",
   choice1:"11 லிருந்து 2%",
   choice2:"11.72 வருந்து 2%",
   choice3:"13.7 லிருந்து 2%",
   choice4:"14.2 லிருந்து 5%",
   
   answer:2
   },
   
   
   {
   question:"ஆளுதரின்‌ பதவிக்‌ காலம்‌ குறித்த சரத்து எது?",
   choice1:"சரத்து 132",
   choice2:"சாத்து 150",
   choice3:"சரத்து 156",
   choice4:"சரத்து 162",
   
   answer:3
   },
   
   
   {
   question:"புரந்தர்‌ உடன்படிக்கை படி யார்‌ யாரை சந்திக்க ஒப்புக்கொண்டார்‌?",
   choice1:"சிவாஜி அவுரங்கசிப்பை சந்திக்க ஒ��்��ு��்�� கொ��������ர்��",
   choice2:"ஜெயசிங்‌ சிவாஜியை சந்திக்க ஒப்பக்கொண்டார்‌",
   choice3:"ஜெய்‌ சிங்‌ சாம்பாஜியை சந்திக்க ஒப்புக்கொண்டார்‌",
   choice4:"சாம்பாஜி அவுரங்கசிப்பை சந்திக்க ஒப்புக்கொண்டார்‌",
   
   answer:1
   },
   
   
   {
   question:"யாருடைய காலத்தில்‌ பக்தி இயக்கம்‌ சிறப்பான இடத்தைப்‌ பிடித்தது?",
   choice1:"சேரர்‌",
   choice2:"சோழர்‌",
   choice3:"பாண்டியர்‌",
   choice4:"பல்லவர்‌",
   
   answer:4
   },
   
   
   {
   question:"மூன்றாம்‌ நிலையில்‌ தொழில்களில்‌ பணிபுரிவோரை எவ்வாறு அழைக்கிறோம்‌?",
   choice1:"வெள்ளை கழுத்துப்பட்டை பணியாளர்கள்",
   choice2:"வெளிர்‌ சிப்பு கழுத்துப்பட்டை பணியாளர்கள்",
   choice3:"தங்க கழுத்துப்பட்டை பணியாளர்கள்‌",
   choice4:"நீல கழுத்துப்பட்டை பணியாளர்கள்‌",
   
   answer:2
   },
   
   
   {
   question:"உலகில்‌ மக்கள்‌ தொகை அடர்த்தி குறைவாக உள்ள நாடு எது?",
   choice1:"மங்கோலியா",
   choice2:"வங்காளதேசம்‌",
   choice3:"ஆஸ்திரேலியா",
   choice4:"மொனாக்கோ",
   
   answer:1
   },
   
   
   {
   question:"மாவட்ட திட்டக்குழுவின்‌ தலைவராக செயல்படுபவர்‌ யார்‌?",
   choice1:"மாவட்ட ஆட்சியர்‌",
   choice2:"மாவட்ட வருவாய்‌ அலுவலர்‌",
   choice3:"மாவட்ட ஊராட்சிக்குழு தலைவர்",
   choice4:"துணை ஆட்சியர்‌",
   
   answer:3
   },
   
   
   
   {
      question:"சூறைக் காற்றின் சுழற்சி வேகம் மணிக்கு___ கிலோ மீட்டர்‌ வரை இருக்கும்‌",
      choice1:"52-459 கிமீ",
      choice2:"62-509 கிமீ",
      choice3:"68-600 கிமீ",
      choice4:"75-650 கிமீ",
      
      answer:2 
   },
   
   
   {
   question:"இரண்டு கணுக்களுக்கிடையே எத்தனை எதிர்க கணுக்கள்‌ இருக்கும்‌?",
   choice1:"1",
   choice2:"2",
   choice3:"3",
   choice4:"4",
   
   answer:1
   },
   
   
   {
   question:"அதர்வ வேதம்‌ _____ குறிப்பிடுகிறது",
   choice1:"1028 பாடல்கள்‌ பற்றி",
   choice2:"சடங்குகளின்‌ போது பின்பற்றப்படும்‌ விவரங்கள்‌ பற்றி",
   choice3:"சடங்கின்போது இசைப்பதை பற்றி",
   choice4:"பல்வேறு சடங்குகள்‌ பற்றி",
   
   answer:4
   },
   
   
   {
   question:"மெளரியர்‌ காலத்தில்‌ வட இந்தியாவில்‌ பொது மக்களால்‌ பேசப்பட்ட மொழி எது?",
   choice1:"பாலி",
   choice2:"பிராகிருதம்‌",
   choice3:"சமஸ்கிருதம்",
   choice4:"தெலுங்கு",
   
   answer:2
   },
   
   
   {
   question:"ஐ.நா பாதுகாப்பு பேரவையின்‌ நிரந்தரமற்ற உறுப்பினர்களின்‌ பதவிக்காலம்‌ எல்வளவு?",
   choice1:"6 வருடங்கள்‌",
   choice2:"5 வருடங்கள்‌",
   choice3:"3 வருடங்கள்‌",
   choice4:"2 வருடங்கள்‌",
   
   answer:4
   },
   
   {
   question:"கோபாலகிருஷ்ண கோகலே இத்திய பணியாளர்‌ கழகத்தைத்‌ தோற்றுவித்த ஆண்டு எது?",
   choice1:"1902",
   choice2:"1903",
   choice3:"1905",
   choice4:"1907",
   
   answer:3
   },
   
   
   {
   question:"வாரன்‌ ஹேஸ்டிங்ஸ்‌ கப்பம்‌ கட்ட தவறியதற்காக யார்‌ மீது அதிகப்படியான அபராதம்‌ விதித்தார்‌?",
   choice1:"ஜெயித் சிங்‌",
   choice2:"திப்பு சுல்தான்‌",
   choice3:"அயோத்தி பேசும்",
   choice4:"ஹைதர்‌ அலி",
   
   answer:1
   },
   

   {
      question:"குழந்தைகளுக்கான தேசிய விருதைப்‌ பெற எந்த வயதிற்குட்பட்ட குழந்தைகள் தகுதி உடையவர்களாவர்‌?",
      choice1:"3-15",
      choice2:"4-15",
      choice3:"5-16",
      choice4:"6-16",
      
      answer:2
      },
      
      
      {
      question:"கீழ்க்கண்ட எந்த வகை மேகம்‌ புயல்‌ அல்லது மழை மேகங்கள்‌ என அழைக்கப்படுகிறது?",
      choice1:"கீற்று மேகங்கள்‌",
      choice2:"படை மேகங்கள்‌",
      choice3:"திரள்‌ மேகங்கள்‌",
      choice4:"கார்படை மேகங்கள்‌",
      
      answer:4
      },
      
      
      {
      question:"தேசிய ஒருமைப்பாட்டு தினம்‌ அனுசரிக்கப்படும்‌ நாள்‌ எது?",
      choice1:"நவம்பர்‌ 19",
      choice2:"அக்டோபர்‌ 18",
      choice3:"செப்டம்பர்‌ 16",
      choice4:"அக்டோபர்‌ 17",
      
      answer:1
      },
      
      
      {
      question:"கட்டணமில்லாத கட்டாயக்கல்வி முறை முதன்முறையாக எங்கு அறிமுகப்படுத்தப்பட்டது?",
      choice1:"வங்காளம்",
      choice2:"பம்பாய்‌",
      choice3:"சென்னை",
      choice4:"கல்கத்தா",
      
      answer:3
      },
      
      
      {
      question:"1920 ஆம்‌ ஆண்டு நடைபெற்ற தேர்தலில்‌ யார்‌ தலைமை ஏற்க மறுத்ததால்‌, ஏ. சுப்பராயலு ரெட்டியார்‌ தலைமையிலான அமைச்சரவை பதவியேற்றது?",
      choice1:"பிட்டி தியாகராய செட்டி",
      choice2:"பொப்பிலி அரசர்",
      choice3:"பனகல்‌ அரசர்‌",
      choice4:"முனுசாமி நாயடு",
      
      answer:1
      },
      
      
      {
      question:"கீழ்கண்டவற்றுள்‌ பிரம்ம சமாஜத்திலிருந்து உருவானது எது?",
      choice1:"ராமகிருஷ்ணா இயக்கம்",
      choice2:"பிரார்த்தன சமாஜம்‌",
      choice3:"பிரம்ம ஞான சபை",
      choice4:"இளம்‌ வங்காள இயக்கம்‌",
      
      answer:2
      },
      
      {
      question:"வாரிசு இழப்பு கொள்கையின்படி டல்ஹவுசி முதலில்‌ இணைத்துக்‌ கொண்ட பகுதி எது?",
      choice1:"நாக்பூர்",
      choice2:"ஜான்சி",
      choice3:"அலகாபாத்‌",
      choice4:"சதாரா",
      
      answer:4
      },
      
      
      {
      question:"சேணிடை அடுக்கு என்ற மெல்லிய அடுக்கானது கீழ்க்கண்ட எந்த அடுக்குகளுக்கு இடையே அமைந்துள்ளது?",
      choice1:"அடியடுக்கு மற்றும்‌ படையடுக்கு",
      choice2:"படையடுக்கு மற்றும்‌ அயனியடுக்கு",
      choice3:"அயனியடுக்கு மற்றும்‌ வெளி அடுக்கு",
      choice4:"அடியடுக்கு மற்றும்‌ அயனியடுக்கு",
      
      answer:1
      },
      
      
      {
      question:"இந்திய அரசியலமைப்பு ____ பாகங்களையும்‌, 200 அட்டவணைகளையும்‌, ____ சரத்துகளையும்‌ கொண்டுள்ளது எது?",
      choice1:"20, 12, 416",
      choice2:"22, 10, 412",
      choice3:"22, 12,449",
      choice4:"20, 12, 436",
      
      answer:3
      },
      
   
{
   question:"இயற்கை வாயுவின்‌ முக்கிய கூறு எது?",
   choice1:"ஈத்தேன்‌",
   choice2:"மீத்தேன்‌",
   choice3:"பியூட்டேன்",
   choice4:"பாப்பேன்‌",
   
   answer:2
   },
   
   
   {
   question:"கீழ்க்கண்ட 111 மதிப்புகளை ஏறு வரிசையில்‌ வரிசைப்படுத்துக: 1) மனித ரத்தம்‌ 2) வயிற்று அமிலம்‌ 3) தூய நீர்‌ 4) பால்‌",
   choice1:"4321",
   choice2:"3142",
   choice3:"1324",
   choice4:"2413",
   
   answer:4
   },
   
   
   {
   question:"ராக்கெட்‌ நகர்வு கீழ்க்கண்ட எந்த விதியின்‌ படி செயல்படுகிறது?",
   choice1:"நியூட்டனின்‌ முதல்‌ விதி",
   choice2:"நியூட்டனின்‌ இரண்டாம்‌ விதி",
   choice3:"நியூட்டனின்‌ மூன்றாம்‌ விதி",
   choice4:"ஜல்‌ - தாம்சன்‌ விதி",
   
   answer:3
   },
   
   
   {
   question:"ஊடுருவும்‌ திறன்‌ அடிப்படையில்‌ கீழ்கண்டவற்றை ஏறுவரிசையில்‌ வரிசைப்படுத்துக : 1) ஆல்‌ஃபா கதிர்கள்‌ 2) பீட்டா துகள்கள்‌ 3) காமா கதிர்கள்‌",
   choice1:"2-1-3",
   choice2:"1-2-3",
   choice3:"3-1-2",
   choice4:"1-3-2",
   
   answer:2
   },
   
   
   {
   question:"கிலாபத்‌ தினம்‌ அனுசரிக்கப்பட்ட நாள்‌ எது?",
   choice1:"1919, அக்டோபர்‌ 19",
   choice2:"1919, அக்டோபர்‌ 17",
   choice3:"1919, செப்டம்பர்‌ 19",
   choice4:"1919, செப்டம்பர்‌ 17",
   
   answer:1
   },
   
   
   {
   question:"பார்ப்பதற்கு முட்டைகள்‌ புதைந்துள்ளது போல் தோற்றமலிக்கும்‌ நிலத்தோற்றம்‌ எவ்வாறு அழைக்கப்படுகிறது?",
   choice1:"டிரம்வின்கள்‌",
   choice2:"மொரைன்கள்‌",
   choice3:"பார்கான்‌",
   choice4:"லோயஸ்",
   
   answer:1
   },
   
   
   {
   question:"7 ஆண்கள்‌ ஒரு வேலையை 52 நாட்களில்‌ முடிப்பார்கள்‌ எனில்‌ 13 ஆண்கள்‌ அதே வேலையை எத்தனை நாட்களில்‌ முடிப்பார்கள்‌?",
   choice1:"26",
   choice2:"27",
   choice3:"26",
   choice4:"29",
   
   
   answer:3
   },
   
   
   {
   question:"ஒரு நேர்வட்ட உருளையின்‌ அடிபக்க பாப்பு 80 ௪.செ.மீ. அதன்‌ உயரம்‌ 5 செ.மீ. எனில்‌ அதன்‌ கன அளவு",
   choice1:"400 cm^3",
   choice2:"16 cm^3",
   choice3:"200 cm^3",
   choice4:"400/3cm^3",
   
   answer:1
   },
   
   
   {
   question:"ரூ.7500 க்கு 8% வட்டி வீதம்‌ ஒரு வருடம்‌ 6 மாதங்களுக்கான தனி வட்டியைக்‌ காண்க",
   choice1:"ரூ. 800",
   choice2:"ரூ900",
   choice3:"ரூ8,400",
   choice4:"ரூ10,000",
   
   answer:2
   },
   
   {
   question:"ஓர்‌ எண்ணின்‌ ஐந்தில்‌ ஒரு பங்கின்‌ மூன்றில்‌ ஒரு பங்கின்‌ நான்கில்‌ ஒரு பங்கு 2 எனில்‌ அவ்வெண்",
   choice1:"50",
   choice2:"60",
   choice3:"100",
   choice4:"120",
   
   answer:4
   },
   
   
   
   {
   question:"ஒரு வெள்ளி கம்பியை வளைத்து ஒரு சதுரமாக மாற்றப்படுகிறது. சதுத்‌தின்‌ பரப்பு 121 ௪.செ.மீ. அதே கம்பியை வசசைத்து ஒரு வட்டமாக மாற்றினால்‌ அந்த வட்டத்தின்‌ ஆரம்‌ என்ன?",
   choice1:"11 செ.மீ",
   choice2:"7செ.மீ",
   choice3:"3.5 செ.மீ",
   choice4:"14 செ.மீ",
   
   answer:2
   },
   
   
   {
   question:"சுருக்குக:(1/4)^-2-3*8^2/3*4^0+(1/16)^-1/2",
   choice1:"0",
   choice2:"1",
   choice3:"2",
   choice4:"8",
   
   answer:4
   },
   
   
   {
   question:"2/3=89,3/4=8164, 4/3= 6481 எனில்‌ 1/ 2=?",
   choice1:"24",
   choice2:"14",
   choice3:"12",
   choice4:"10",
   
   answer:3
   },
   
   
   
   {
   question:"100 எண்களின்‌ சராசரி 40 என்று காணப்பட்டது. கணக்கிடும்‌ நேரத்தில்‌ 30 மற்றும்‌ 27 என்ற இரு விவரங்கள்‌ 3 மற்றும்‌ 72 எனத்தவறுதலாக எடுத்துக்கொள்ளப்பட்டது என தெரிய வந்தது எனில்‌ சரியான சராசரியைக்‌ காண்க",
   choice1:"39.82",
   choice2:"40.18",
   choice3:"41",
   choice4:"42.5",
   
   answer:1
   },
   
   {
   question:"D என்பவர்‌ Cஐ விட உயரமானவர்‌, ஆனால்‌ B அளவுக்கு உயரமில்லை, C என்பவர்‌ Aஐ விட உயரமானவர்‌ எனில்‌ A,B,C மற்றும்‌ D உயரமானவர்‌ யார்‌?",
   choice1:"A", 
   choice2:"B",
   choice3:"C",
   choice4:"D",
   
   answer:2
   },
   
   
   {
   question:"2x+y=15,2y+z=25 மற்றும்‌ 2z+x=26, எனில்‌ zன்‌ மதிப்பு என்ன?",
   choice1:"4",
   choice2:"7",
   choice3:"9",
   choice4:"11",
   
   answer:4
   },
   
   
   
   {
   question:"பின்‌வரும்‌ எண்கள்‌ தொடர்வரிசையில்‌ பொருந்தாத எண்களைக்‌ காண்க : 1,5,14,30,50,55, 91",
   choice1:"5",
   choice2:"50",
   choice3:"55",
   choice4:"91",
   
   answer:2
   },
   
   
   {
   question:"கீழ்க்கண்ட உருவத்தின் பரப்பு காண்க",
   choice1:"26ச.மீ",
   choice2:"36ச.மீ",
   choice3:"46ச.மீ",
   choice4:"56ச.மீ",
   
   answer:2
   },
   
   
   {
   question:"51, 99, 191 ஆகிய எண்களை எந்த மிகப்‌ பெரிய எண்ணால்‌. வகுக்கும்‌ பொழுது மீதி சமமாக கிடைக்கும்‌?",
   choice1:"4",
   choice2:"7",
   choice3:"9",
   choice4:"8",
   
   answer:1
   },
   
   
   {
   question:"ரூ. 2,400 க்கு 5% ஆண்டு வட்டி வீதம்‌ 2 ஆண்டுகளில்‌ கிடைக்கும்‌ கூட்டு வட்டிக்கும்‌ தனிவட்டிக்கும்‌ உள்ள வித்தியாசம்‌ காண்க",
   choice1:"ரூ.5",
   choice2:"ரூ6",
   choice3:"ரூ.8",
   choice4:"ரூ.7",
   
   answer:2
   },
   
   
   {
   question:"a+b/a-b மறறும்‌ a^2-b^2/a^2+b^2 ஆகியன‌ இரு விகிதமுறு கோவைகள்‌ எனில்‌ அவற்றின்‌ பெருக்கல்‌ பலன்‌",
   choice1:"a2+ab+b2/a2−ab+b2",
   choice2:"a2−ab+b2/a2+ab+b2",
   choice3:"a2−ab−b2/a2+ab+b2",
   choice4:"a2+ab+b2/a2−ab−b2",
   
   answer:1
   },
   
   
   
   {
   question:"11 செ.மீ, 12 செ.ம்‌, ...... 24 செ.மீ ஆகியவற்றை பக்கங்களாக கொண்ட 14 சதுரங்களின்‌ மொத்த பாப்பு காண்க",
   choice1:"4415 ௪.செ.மீ",
   choice2:"1055 ௪.செ.மீ",
   choice3:"4155 ௪.செ.மீ",
   choice4:"4515 ௪.செ.மீ",
   
   answer:4
   },
   
   
   
   {
   question:"ஒரு பழைய காரின்‌ விலை ரூ. 45,000/- அதன்‌ விலையில்‌ 15% குறைவு எனில்‌ இப்பொழுது அதன்‌ புதிய விலை என்ன?",
   choice1:"ரூ. 38,250",
   choice2:"ரூ39,350",
   choice3:"ரூ. 40,250", 
   choice4:"ரூ. 41,250",
   
   answer:1
   },
     
   {
      question:"மூன்று கார்கள்‌ 2 : 3 : 4 என்ற விகித வேகத்தில்‌ சென்றால்‌ அந்த மூன்று கார்களும்‌ ஒரு குறிப்பிட்ட சம தூரத்தை கடக்க எடுத்துக்‌ கொள்ளும்‌ நேரங்களின்‌ விகிதத்தைக்‌ காண்க",
      choice1:"2:3:4",
      choice2:"4:3:2",
      choice3:"4:3:6",
      choice4:"6:4:3",
      
      answer:4
      },
      {
      question:"p=9எனில் √p(p2+3p+3)+13= ?",
      choice1:"10",
      choice2:"100",
      choice3:"1000",
      choice4:"10000",
      
      answer:1
      },
      
      
      {
      question:"கன சதுரத்தின்‌ கன அளவு * ______ கன அலகுகள்‌",
      choice1:"a^2",
      choice2:"√2a2",
      choice3:"3a^3",
      choice4:"a^3",
      
      answer:4
      },
      
      
      {
      question:"2019 ஆம்‌ ஆண்டை சர்வதேச தனிம வரிசை அட்டவணை ஆண்டாக அறிவித்துள்ள அமைப்பு?",
      choice1:"UNESCO",
      choice2:"UNIDO",
      choice3:"FAO",
      choice4:"rru",
      
      answer:1
      },
      
      
      
      {
      question:"இந்திய ஒளிபரப்பு ஆய்வு குழுமத்தின்‌  புதிய தலைவராக தேர்ந்தெடுக்கப்பட்டுள்ளவர்‌?",
      choice1:"நகுல்‌ சோப்ரா",
      choice2:"பார்த்தோ தாஸ்‌ குப்தா",
      choice3:"புனித்‌ கோயங்கா",
      choice4:"மிலன்‌ ஷர்மா",
      answer:3
      },
      
      {
      question:"ஒருநாள்‌ சர்வதேச போட்டிகளில்‌ 100 விக்கெட்டுகளை விரைவாக வீழ்த்திய இந்திய வேகப்பந்து வீச்சாளர்‌ யார்‌?",
      choice1:"யூஸ்வெந்திர சஹால்", 
      choice2:"குல்தீப்‌ யாதல்‌",
      choice3:"கேதார்‌ ஜாதவ்‌",
      choice4:"மொஹமட்‌ ஷமி", 
      
      answer:4
      },
      
      
      
      {
      question:"தேசிய அறிவியல்‌ தினம்‌ 2019 வின்‌ Theme‌ என்ன?",
      choice1:"மக்களுக்கான அறிவியல்‌ மற்றும்‌ அறிவியலுக்கான மக்கள்‌",
      choice2:"தேசிய கட்டமைப்புக்கான அறிவியல்‌",
      choice3:"நிலையான எதிர்காலத்திற்கான அறிவியல்‌ மற்றும்‌ தொழில்நுட்பம்‌",
      choice4:"சிறப்பு திறன்‌ படைத்தோருக்கான அறிவியல்‌ மற்றும்‌ தொழில்நுட்பம்‌",
      
      answer:1
      },
      
      
      {
      question:"பக்கிங்காம்‌ அரண்மனையில்‌ நைட்ஹீட் விருதினை வென்ற கிரிக்கெட்‌ வீரர்‌ யார்‌?",
      choice1:"ஆண்டிரூ ஸ்ட்ராஸ்‌",
      choice2:"அலாஸ்டர்‌ குக்‌",
      choice3:"கெவின் பீட்டர்ச்ன்",
      choice4:"ஆண்ட்ரூ பிளின்டாப்",
      
      answer:2
      },
      
      
      
      {
      question:"2019 ஆம் ஆண்டிற்கான META வாழ்நாள் சாதனையாளர்‌ விருதினை பெற்றவர்‌ யார்‌?",
      choice1:"மகேஷ்‌ எல்குச்வர்‌",
      choice2:"விஜயா மேக்தா",
      choice3:"கிஃஷ்‌ கார்ணர்டு",
      choice4:"அருண்‌ ககாட",
      
      answer:1
      },
      
      
      
      {
      question:"எந்த உலகளாவிய அமைப்பு 'உலகளாவிய காலநிலை' அறிக்கையை வெளியிட்டது?",
      choice1:"UNEP",
      choice2:"IUCN",
      choice3:"IPCC",
      choice4:"WMO",
      
      answer:4
      },
      
      
      
      {
      question:"குரோஷியாவின்‌ மிக உயர்ந்த குடிமகன்‌ விருது டாம்லிஸ்‌ மன்னரின்‌ கிராண்ட்‌ ஆர்டர்‌ மூலம்‌ எந்த இந்திய ஆளுமைக்கு கெளரவிக்கப்பட்டது?",
      choice1:"Narendra Modi",
      choice2:"Ram Nath Kovind",
      choice3:"Sushma Swaraj",
      choice4:"Arun jetlie",
      
      answer:2
      },
      {
      question:"காந்தி: தி ரைட்டர்‌” புத்தகத்தின்‌ எழுத்தாளர்‌ யார்‌?",
      choice1:"Ravinder Singh",
      choice2:"Durjoy Datta",
      choice3:"Bhabhani Bhattacharya",
      choice4:"Amit Chaudhuri",
      
      answer:3
      },
      
      
      
      {
      question:"அண்மையில்‌ எத்தேதியில்‌, தொழிலாளர்‌ பனியிட பாதுகாப்பு மற்றும்‌ உடல்நலனுக்கான உலக தினம்‌ அனுசரிக்கப்பட்டது?",
      choice1:"ஏப்ரல்‌ 28",
      choice2:"ஏப்ரல்‌ 30",
      choice3:"ஏப்ரல்‌ 29",
      choice4:"ஏப்ரல்‌ 27",
      
      answer:1
      },
      
      
      {
      question:"அண்மையில்‌ எந்நாளில்‌, முதலாவது அமைதிக்கான பன்முகச்சார்பியம்‌ மற்றும்‌ அரசியல்‌ செயல்‌ நலத்துக்கான சர்வதேச தினம்‌ அனுசரிக்கப்பட்டது?",
      choice1:"ஏப்ரல்‌ 30",
      choice2:"ஏப்ரல்‌ 28",
      choice3:"ஏப்ரல்‌ 26",
      choice4:"ஏப்ரல்‌ 14",
      
      answer:4
      },
      
      
      {
      question:"பார்சிலோனா ஓப்பன்‌ டென்னிஸ்‌ போட்டியில்‌, 2019 ஆடவர்‌ ஒற்றையர்‌ பட்டத்தை வென்றவர்‌ யார்‌?",
      choice1:"ரபேல்‌ நடால்‌",
      choice2:"டொமினிக்‌ தீம்",
      choice3:"அலெக்சாண்டர்‌ ஸ்வெர்வ்",
      choice4:"டானில்‌ மெத்‌௯தேவ்‌",
      
      answer:2
      },
      
      
      
      {
      question:"ICC 2018ஆம்‌ ஆண்டின்‌ சிறந்த கிரிக்கெட்‌ வீராங்கனை விருது பெற்ற இந்தியர்‌ யார்‌?",
      choice1:"ஜுலன்‌ கோஸ்வாமி",
      choice2:"ஹர்மன்ப்ரீத்‌ களர்‌",
      choice3:"மிதாலி ராஜ்‌",
      choice4:"ஸ்மிருதி மந்தனா",
      
      answer:4
      },
      
      
      {
      question:"புதிதாக நியமிக்கப்பட்டுள்ள தலைமைத்‌ தகவலாணையர் (Chief Information Commissioner- CIC) யார்‌?",
      choice1:"சுதிர் பார்கவா",
      choice2:"வனஜா N சர்னா",
      choice3:"சுரேஷ்‌ சந்திரா",
      choice4:"ஜூலன்‌ கோஸ்வாமி",
      
      answer:1
      },
      
      
      
      {
      question:"சமீபத்தில்‌ காலமான ஆஸ்கர்‌ & கிராமி விருது வென்ற பாடலாசிரியர்‌ நார்மன்‌ கிம்பெல்‌, எந்த நாட்டைச்‌ சேர்ந்தவராவார்‌?",
      choice1:"அமெரிக்கா",
      choice2:"பிரான்ஸ்‌",
      choice3:"ஜெர்மனி",
      choice4:"இத்தாலி",
      
      answer:1
      },
      
      
      
      {
      question:"எந்த IPC பிரிவின்‌ கீழ்‌, பாலியல்‌ துன்புறுத்தல்‌ வழக்குகளை திருநங்கைகள்‌ தாக்கல்‌ செய்யலாம்‌?",
      choice1:"பிரிவு357A",
      choice2:"பிரிவு356A",
      choice3:"பிரிவு354A",
      choice4:"பிரிவு358A",
      
      answer:3
      },
      
      
      
      {
      question:"உலகக்கோப்பை போட்டியில்‌ முதல்‌ ஓவரை வீசிய முதல்‌ சுழற்பந்து வீச்சாளர்‌ என்ற சாதனையை படைத்துள்ள வீரர்‌ யார்‌?",
      choice1:"டேல்‌ ஸ்டெயின்‌",
      choice2:"ஹஷிம்‌ ஆம்லா",
      choice3:"மான்டி பனேசர்‌",
      choice4:"இம்ரான்‌ தாஹிர்",
      
      answer:4
      },
      
      
      {
      question:"இந்தியாவின்‌ எம்மாநில அரசு, புகையிலை கட்டுப்பாட்டுக்காக நடப்பாண்டின்‌ WHO விருதைப்‌ பெற்றுள்ளது?",
      choice1:"ஜார்க்கண்ட்‌",
      choice2:"ஆந்திரப்பிரதேசம்",
      choice3:"இராஜஸ்தான்‌",
      choice4:"ஹரியானா",
      
      answer:3
      },
      
      
      
      {
      question:"அதிநவீன போர்‌ விமானத்தை தனியாக இயக்கிய முதல்‌ பெண்‌ போர்‌ விமானி யார்‌?",
      choice1:"அனி சதுர்வேதி",
      choice2:"பாவனா காந்த்‌",
      choice3:"மோகணா சிங்‌",
      choice4:"பிரியா சிங்‌",
      
      answer:3
      },
      
      
      {
      question:"இந்திய நாடாளுமன்ற வரலாற்றில்‌,இள வயதுடைய நாடாளுமன்ற உறுப்பினர்‌ யார்‌?",
      choice1:"ஜோதிமணி",
      choice2:"சந்திராணி முர்மு",
      choice3:"சுமலதா அம்பரீஷ்‌",
      choice4:"இரம்யா ஹரிதாஸ்‌",
      
      answer:2
      },

      {
         question:"டாட்டா இரும்பு மற்றும் எஃகு நிறுவனம் எந்த இடத்தில் அமைந்துள்ளது?",
         choice1:"துர்காபூர்",
         choice2:"பிலாய்",
         choice3:"பரம்பூர்",
         choice4:"ஜம்சேத்பூர்",
         
          answer:4
         },
         
         
         {
         question:"கீழ்க்காணும் எந்த மாநிலத்தில் ராஜாஜி புலிகள் காப்பகம் அமைந்துள்ளது?", 
         choice1:"உத்தரகாண்ட்",
         choice2:"மகாராஷ்டிரா",
         choice3:"அருணாச்சலப் பிரசதேம்",
         choice4:"தமிழ்நாடு",
         
         answer:1
         },
         
         {
         question:"கீழ்க்காணும் எந்த மாநிலத்தில் டச்சிகம் சரணாலயம் அமைந்துள்ளது?", 
         choice1:"கேரளா",
         choice2:"கர்நாடகா",
         choice3:"மேற்கு வங்காளம்",
         choice4:"ஜம்மு-காஷ்மீர்",
          
         answer:4
         },
         
         {
         question:"மின்னியல் தலை நகரம் என்று அமைக்கப்படும் நகரம் எது?", 
         choice1:"பெங்களூரு",
         choice2:"சேலம்",
         choice3:"டெல்லி", 
         choice4:"மும்பை",
         
         answer:1
         },
         
         {
         question:"சூரிய குடும்பத்தின் மிகவும் குளிர்ந்த கோள் எது?", 
         choice1:"வியாழன்",
         choice2:"யுரேனஸ்",
         choice3:"நெப்டியூன",
         choice4:"வீனஸ்",
         
         answer:3
         },
         
         {
         question:"பவள மீன்களுக்குத் தேவையான உணவு கடல் பகுதியில் எங்கு மிகுதியாகக் கிடைக்கும்?", 
         choice1:"கண்டத்திட்டு",
         choice2:"கண்டச் சரிவு",
         choice3:"கண்ட உயர்வு",
         choice4:"கண்ட எழுச்சி",
         
         answer:1
         },
         
         {
         question:"பில்ஸ் பைங்குடியினர் எந்த நாட்டைச் சேர்ந்தவர்கள்?", 
         choice1:"மலேசியா",
         choice2:"ஆப்பிரிக்கா",
         choice3:"இந்தியா",
         choice4:"இந்தோனேஷியா",
         
         answer:3
         },
         
         {
         question:"கீழ்க்காணும் எந்த கண்டத்தில் ஆல்ஃப்ஸ் மலைத்தொடர் அமைந்துள்ளது?", 
         choice1:"ஐரோப்பா",
         choice2:"ஆசியா",
         choice3:"ஆப்பிரிக்கா", 
         choice4:"ஆஸ்திரேலியா", 
         
         answer:1
         },
         
         {
         question:"சரிஸ்கா புலிகள் சரணாலயம் எந்த மாநிலத்தில் அமைந்துள்ளது",
         choice1:"கோவா",
         choice2:"ஹரியானா",
         choice3:"ராஜஸ்தான்",
         choice4:"பஞ்சாப்",
         
         answer:3
         },
         
         {
         question:"இந்தியாவில் முதல் முதலாக எந்த மாநிலத்தில் நடமாடும் உணவு சோதனைக் கூடம் நிறுவப்பட்டுள்ளது?", 
         choice1:"கோவா",
         choice2:"மத்திய பிரசதேம்", 
         choice3:"மகாராஷ்டிரா",
         choice4:"பஞ்சாப்",
         
         answer:1
         },
         
         {
         question:"இந்தியாவின் எந்தப் பகுதியில் காணி பைங்குடி இன மக்கள் வாழ்கின்றனர்?", 
         choice1:"கிழக்கு தொடர்ச்சி மலை", 
         choice2:"மேற்கு தொடர்ச்சி மலை",
         choice3:"ஆந்திரப் பிரசதேம்",
         choice4:"தெலுங்கானா",
         answer:2
         },
         
         {


         question:"2017 ஆம் ஆண்டுக்கான சமூக நீதிக்கான அன்னை தெரோ நினைவு விருது யாருக்கு வழங்கப்பட்டது?", 
         choice1:"அமிதாப் பச்சன்", 
         choice2:"பிரியங்கா சோப்ரா", 
         choice3:"தீபிகா படுகோன",
         choice4:"சசி தரூர்",
         
         answer:2
         },
         
         {
         question:"இடப்பெயர்வு அல்லது மாற்றிட வேளாண்மையை மலேசியா நாட்டில் எவ்வாறு அமைக்கிறார்கள்?", 
         choice1:"லடாக்",
         choice2:"ஜும்",
         choice3:"சராக்கா", 
         choice4:"மில்பா",
         
         answer:1
         },
         {
         
         question:"பாரத் மாதா திட்டம் என்பது",
         choice1:"சாலை சார்ந்த சமலாண்மை திட்டம்",
         choice2:"கிராமப்புற சமலாண்மை திட்டம்",
         choice3:"கிராமப்புற மானியத் திட்டம்",
         choice4:"தொழில்நுட்ப பயிற்சி திட்டம்", 
         
         answer:1
         },
         
         {
         question:"சர்வசதே ஊழலுக்கு எதிரான தினம்",
         choice1:"டிசம்பர் 1",
         choice2:"டிசம்பர் 2",
         choice3:"டிசம்பர் 9",
         choice4:"டிசம்பர் 6",
         
         answer:3
         },
         
         {
         question:"யுனெஸ்சகா உலக பண்பாட்டு தளத்தில் இரண்டாவது இடத்தில் உள்ள இடம் எது?", 
         choice1:"அங்சகார்வாட் ஆலயம்",
         choice2:"தாஜ்மஹால் ",
         choice3:"அஜந்தா குகை", 
         choice4:"பிரகதீஸ்வரர் ஆலயம்", 
         
         answer:2
         },
         
         {
         question:"இந்தியாவின் கொடி நாள் என்று அனுசரிக்கப்படுகிறது?", 
         choice1:"டிசம்பர் 1",
         choice2:"டிசம்பர் 10",
         choice3:"டிசம்பர் 7",
         choice4:"டிசம்பர் 21", 
         
         answer:3
         
         },
         
         {
         question:"ஒரே கூரையின் கீழ் இயங்கும் உலகின் மிகப்பெரிய விமான நிலையம் எது?", 
         choice1:"துருக்கி",
         choice2:"ஈரான்",
         choice3:"ஈராக்",
         choice4:"மலசியா", 
         
         answer:1
         },
         
         {
         question:"இந்தியாவின் முதல் உள்நாட்டு சொகுசு கப்பல் எது?", 
         choice1:"விக்ராந்த்",
         choice2:"ஆங்கிரியா",
         choice3:"ஆண்ட்ரியா",
         choice4:"கவரட்டி",
         
         answer:2
         },
         
         {
         question:"E-NAM கீழ்க்கண்ட எதனுடன் தொடர்புடையது",
         choice1:"பங்குச்சந்தை",
         choice2:"வேளாண் வணிகம்", 
         choice3:"வங்கி",
         choice4:"சர்வசதே அமைப்பு", 
         
         answer:2
         },
         
         {
         question:"2018 ஆம் ஆண்டுக்கான சமன் புக்கர் பரிசை வென்றவர் யார்?", 
         choice1:"அண்ணா பர்னஸ்",
         choice2:"மொய்ஸ் கார்ட்",
         choice3:"தாமஸ்",
         choice4:"லீலிமா",
         
         answer:1
         },
         
         {
         question:"பக்ஷா புலிகள் சரணாலயம் எந்த மாநிலத்தில் அமைந்துள்ளது ?", 
         choice1:"குஜராத்",
         choice2:"கர்நாடகா",
         choice3:"ஆந்திர பிரதேசம்", 
         choice4:"மேமற்கு வங்காளம்",
         
         answer:4
         },
         
         {
         question:"சர்வசதே செர்ரிப் பூக்கள் திருவிழா நடைபெற்ற இடம் எது?", 
         choice1:"சில்லாங்",
         choice2:"நாக்பூர்",
         choice3:"சீனா",
         choice4:"இங்கிலாந்து", 
         
         answer:1
         },
         
         {
         question:"சமீபத்தில் செய்திகளில் காணப்பட்ட ஒரு நாடு ஒரு வரி ஒரு சந்தை என்ற வாகேம் எதனுடன் தொடர்புடையது",
         choice1:"GAAR",
         choice2:"MAT",
         choice3:"GST",
         choice4:"VA",
         
         answer:3
         },
         
         {
         question:"இந்தியாவில் முதல் முதலாக யானைகளுக்கான சிறப்பு மருத்துவமனை அமைக்கப்பட்ட இடம் எது?", 
         choice1:"சிக்கிம்",
         choice2:"வாரங்கல்", 
         choice3:"தெலுங்கானா", 
         choice4:"மதுரா",
         
         answer:4
         },
         
         {
         question:"போட்சடா ட்ராபிஸம் என்றால் என்ன?", 
         choice1:"செடிகளின் வேதிப்பொருள் சநாக்கிய இயக்கம்",
         choice2:"செடிகளின் ஒளி நோக்கிய இயக்கம்",
         choice3:"செடிகளின் மண் நோக்கிய இயக்கம்",
         choice4:"செடிகளின் ஒளி காலத்து வினை",
         
         answer:2
         },
         
         {
         question:"2017-2018 நிதிநிலை அறிக்கையில் மூத்த குடிமக்களுக்காக அறிவிக்கப்பட்ட வேதி எது?", 
         choice1:"ஆதாருடன் இணைக்கப்பட்ட ஸ்மார்ட் கார்டு",
         choice2:"பி எச் ஐ எம் செயலி",
         choice3:"சக்தி மயைங்கள்",
         choice4:"ஓய்வூதிய திட்டம்",
          
         answer:1
         },

         {
            question:"சட்லஜ் ஆற்றின் குறுக்கே கட்டப்பட்டுள்ள அணையின் பெயர் என்ன?", 
            choice1:"ஹிராகுட் அணை ",
            choice2:"பக்ராநங்கல் அணை", 
            choice3:"சகாசி அணை",
            choice4:"மேட்டூர் அணை",
            
            answer:2
            },
            
            {
            question:"அணிதல் மற்றும் கிழிதல் என்ற கோட்பாடு எதனுடன் தொடர்புடையது?", 
            choice1:"தேய்மானம்",
            choice2:"பணவீக்கம்",
            choice3:"பணவாட்டம்", 
            choice4:"உயர்வு",
            
            answer:1
            },
            
            {
            question:"இலவச கட்டாய கல்வி நடைமுறைக்கு வந்த ஆண்டு எது?", 
            choice1:"2009",
            choice2:"2008",
            choice3:"2006",
            choice4:"2005",
            
            answer:1
            },
            
            {
            question:"இந்தியாவின் முதல் தேசிய நல்லிணக்க ஆய்வு நிறுவனம் அமைந்துள்ள இடம் எது?", 
            choice1:"ஹரியானா ",
            choice2:"பஞ்சாப் ",
            choice3:"ராஜஸ்தான்", 
            choice4:"குஜராத்",
            
            answer:1
            },
            
            {
            question:"தேதசிய சட்ட தினம் என்று அனுசரிக்கப்படுகிறது?", 
            choice1:"நவம்பர் 16 ",
            choice2:"நவம்பர் 1 ",
            choice3:"நவம்பர் 2 ",
            choice4:"நவம்பர் 26 ",
            
            answer:2
            },
            
            {
            question:"2018 ஆம் ஆண்டுக்கான ராஜாராம் சமாகன் ராய் விருது பெற்றவர் யார்?", 
            choice1:"என்.ராம்",
            choice2:"மலாலா",
            choice3:"ஜவஹர்லால் சரின்", 
            choice4:"அனுபம் கேர்",
            
            answer:4
            },
            
            {
            question:"கலீனா என்பது கீழ்க்கண்டவற்றில் உள்ள எந்த உலோகத்தின் தாது பொருள்?", 
            choice1:"வெள்ளி",
            choice2:"காரியம் ",
            choice3:"தங்கம்",
            choice4:"இரும்பு",
            
            answer:1
            },
            
            {
            question:"புலித்தேவருக்கு ஆதரவு கொடுத்தவர்கள் யார்?", 
            choice1:"பிரஞ்சுக்காரர்கள்",
            choice2:"ஆங்கிசலயர்கள்",
            choice3:"போர்ச்சுகீசியர்கள்", 
            choice4:"டச்சுக்காரர்கள்",
            
            answer:2
            },
            
            {
            question:"இந்தோனேஷியாவில் நிலநடுக்கம் மற்றும் சுனாமியால் பாதிக்கப்பட்டவர்களுக்கு இந்தியாவின் சார்பில் ஏற்படுத்தப்பட்ட நடவடிக்கையின் பெயர் என்ன?", 
            choice1:"செம்பருத்தி",
            choice2:"ஜடாயு",
            choice3:"சமுத்திர மைத்திரி", 
            choice4:"கார்க்கி",
            
            answer:1
            },
            
            {
            question:"நிர்மான் குசுமா என்ற திட்டத்தை அறிமுகம் செய்த மாநில அரசு எது?", 
            choice1:"பீகார்",
            choice2:"ஒடிசா",
            choice3:"ஜார்கண்ட்", 
            choice4:"குஜராத்",
            
            answer:3
            },
            
            {
            question:"பாரதியார் எந்த காங்கிரஸ் மாநாட்டில் கலந்து கொண்டார்?", 
            choice1:"சூரத் மாநாடு",
            choice2:"சென்னை மாநாடு", 
            choice3:"பம்பாய் மாநாடு",
            choice4:"லக்சனா மாநாடு",
            
            answer:1
            },
            
            {
            question:"பின்வருவனவற்றுள் புலப்படாத ஏற்றுமதியை தோற்றுவிப்பது எது?",
            choice1:"மீன்பிடித் தொழில்",
            choice2:"சுற்றுலாத்துறை ",
            choice3:"ஆபரண தொழில்", 
            choice4:"கைவினைப் பொருட்கள்", 
            
            answer:2
            },
            
            {
            question:"கரும்பலகை திட்டம் எந்த ஆண்டு அறிமுகப்படுத்தப்பட்டது?", 
            choice1:"1992",
            choice2:"1991",
            choice3:"1986",
            choice4:"1968",
            
            answer:1
            },
            
            {
            question:"இந்தியாவில் முதன்முதலாக கார்ப்பரேட் வரியை அறிமுகப்படுத்தியவர் யார்?", 
            choice1:"ராஜீவ் காந்தி",
            choice2:"இந்திரா காந்தி",
            choice3:"மன்சமாகன் சிங்", 
            choice4:"சிதம்பரம்",
            
            answer:1
            },
            
            {
            question:"The paradoxical prime minister: Narendra Modi and his India -என்ற நூலின் ஆசிரியர் யார்?", 
            choice1:"சராமா ஹுஜா",
            choice2:"விஜய் பாலா",
            choice3:"சசிதரூர்",
            choice4:"ராணி முகர்ஜி", 
            
            answer:3
            },
            
            {
            question:"இந்தியாவின் முதல் டிரான்ஸ் குயின் 2018 ஆம் ஆண்டிற்கான விருது வென்றவர் யார்?", 
            choice1:"நீலிமா",
            choice2:"வீணா சென்ட்ரே",
            choice3:"பாலி தாமஸ்",
            choice4:"மனுஷி சில்லர்", 
            
            answer:2
            },
            
            {
            question:"எந்த நாட்டு நாணயம் சமீபத்தில் ஐஎம்எஃப் யின் நாணய கூடையில் சேர்க்கப்பட்டது?", 
            choice1:"ஜப்பான் யன்",
            choice2:"சீனாவின் யுவான்", 
            choice3:"இந்திய ரூபாய்",
            choice4:"கியூ டாலர்",
            
            answer:1
            },
            
            {
            question:"கபிலமர ஆதரித்துப் போற்றிய சிற்றரேர் யார்?", 
            choice1:"ஆய்",
            choice2:"அதியன்", 
            choice3:"பாரி",
            choice4:"அஞ்சி", 
            
            answer:3
            },
            
            {
            question:"மோய் பைங்குடியினர் எந்த பகுதியை சேர்ந்தவர்கள்?", 
            choice1:"அங்சகாலா",
            choice2:"பகன்யா ",
            choice3:"பிலிப்மபன்ஸ்", 
            choice4:"மேபீரியா",
            
            answer:2
            },
            
            {
            question:"இந்திய திட்டக் குழுவின் கடைசி துணை தலைவர் யார்?", 
            choice1:"மன்மோகன்சிங்",
            choice2:"நரேந்திர மோடி",
            choice3:"அருண் ஜெட்லி",
            choice4:"மன்சடக் சிங் அலுவாலியா", 
            
            answer:4
            },
            
            {
            question:"எந்த பத்திரிக்கை விவேகானந்தமர பாராளுமன்றத்தின் தலை சிறந்த நபர் என விவரிக்கிறது?", 
            choice1:"நியூயார்க் பஹரால்ட்",
            choice2:"சுசதேமித்திரன் ",
            choice3:"சமாச்சார் தர்பன்", 
            choice4:"யங் இந்தியா",
            
            answer:1 
            },
            
            {
            question:"தமிழ்நாட்டில் அதிக பாலின விகிதம் கொண்டுள்ள மாவட்டம் எது?", 
            choice1:" நீலகிரி",
            choice2:"நாகப்பட்டினம்", 
            choice3:"திருச்சிராப்பள்ளி", 
            choice4:"தஞ்சாவூர்",
            
            answer:1
            },
            
            {
            question:"முத்தலாக் முறை எந்த அரசியலமைப்பு விதியுடன் நேரடியாக முரண்படுகிறது?", 
            choice1:"ஷரத்து 43",
            choice2:"ஷரத்து 44",
            choice3:"ஷரத்து 42",
            choice4:"ஷரத்து 33",
            
            answer:2
            },
            
            {
            question:"மூன்றாம் பானிபட் போர் எப்போது நடைபெற்றது?", 
            choice1:"1861",
            choice2:"1761",
            choice3:"1851",
            choice4:"1751",
            
            answer:2
            },
            
            {
            question:"மாமல்லன் என்று அமைக்கப்பட்ட பல்லவ மன்னன் யார்?", 
            choice1:"முதலாம் நரசிம்வைர்மன்",
            choice2:"முதலாம் மகேந்திரவர்மன்",
            choice3:"மானவர்மன் ",
            choice4:"பராந்தகன்",
            
            answer:1
            },
            
            {
            question:"தமிழ்நாட்டில் குறைந்த எழுத்தறிவு விகிதம் கொண்ட மாவட்டம் எது?", 
            choice1:"சென்னை",
            choice2:"கன்னியாகுமரி", 
            choice3:"நாகப்பட்டினம்",
            choice4:"தர்மபுரி",
            
            answer:4
            },
         
      
{
   question:"இந்திய திறன்கள் அறிக்கை 2019 ன்படி அதிக வேலைவாய்ப்பு திறன் விகிதம் பெற்று இந்தியாவில் முதல் இடத்தில் உள்ள மாநிலம் எது?", 
   choice1:"மத்திய பிரதேசம்",
   choice2:"ஆந்திர பிரதேசம்",
   choice3:"குஜராத்",
   choice4:"தெலுங்கானா", 
   
   answer:2
   },
   
   {
   question:"உலகின் நீண்ட கடல் பாலம் எந்த நாட்டில் அமைந்துள்ளது?", 
   choice1:"ஜப்பான் ",
   choice2:"சிங்கப்பூர்", 
   choice3:"சீனா",
   choice4:"USA",
   
   answer:3
   },
   
   {
   question:"கீழ்க்காணும் நாடுகளில் பொதுவுடமை அரசு நிலவாத நாடு எது?", 
   choice1:"ஜப்பான்",
   choice2:"சீனா ",
   choice3:"கியூபா", 
   choice4:"வடகொரியா ",
   
   answer:1
   },
   
   {
   question:"இந்தியாவின் முதல் AICTE பயிற்சி மற்றும் கல்வி கற்றல் நிறுவனம் எங்கே நிறுவப்பட்டுள்ளது?", 
   choice1:"போபால் ",
   choice2:"இட்டாநகர்", 
   choice3:"ஜெய்ப்பூர் ",
   choice4:"காந்தி நகர் ",
   
   answer:3
   },
   
   {
   question:"மின்காந்த அலைகள் என்பது",
   choice1:"குறுக்கலைகள் ",
   choice2:"நெட்டலைகள் ",
   choice3:"குறுக்கலைகள் மற்றும் நெட்டலைகள் ",
   choice4:"குறுக்கலைகளும் அல்ல நெட்டலைகளும் அல்ல", 
   
   answer:1
   },
   
   {
   question:"தூய்மையான கிராம இயக்கம் தமிழகத்தில் எப்போது தொடங்கப்பட்டது?", 
   choice1:"2003",
   choice2:"2001",
   choice3:"2005",
   choice4:"2000",
   
   answer:1
   },
   
   {
   question:"ஊதிய பட்டுவாடா சட்டம் எந்த ஆண்டு கொண்டுவரப்பட்டது?", 
   choice1:"1936",
   choice2:"1948",
   choice3:"1965",
   choice4:"1976",
   
   answer:1
   },
   
   {
   question:"மூன்றாவது வட்ட மேஜை மாநாடு எந்த ஆண்டு நடைபெற்றது?", 
   choice1:"1930 ",
   choice2:"1931 ",
   choice3:"1932 ",
   choice4:"1933",
   
   answer:3
   },
   
   {
   question:"பிரஞ்சு கிழக்கிந்திய கம்பெனி யாரால் நிறுவப்பட்டது?", 
   choice1:"அல்பமய்டா",
   choice2:"ஆல்பர்ட்",
   choice3:"கால்பர்ட்",
   choice4:"சமாரியன்", 
   
   answer:3
   },
   
   {
   question:"உடல்நலம் எந்தத் துறையின் கீழ் செயல்படுகிறது?", 
   choice1:"முதன்மைத் துறை ",
   choice2:"சார்பு துறை ",
   choice3:"இரண்டாம் நிலைத் துறை ",
   choice4:"நான்காம் நிலை துறை",
   
   answer:2
   },
   
   {
   question:"காப்பீட்டு சந்தையை இந்தியாவில் ஒழுங்கு செய்யும் நிறுவனம் எது?", 
   choice1:"SEBI ",
   choice2:"IRDAI ",
   choice3:"IMF ",
   choice4:"RBI ",
   
   answer:2
   },
   
   {
   question:"நாளந்தா பல்கலைக்கழகம் யாரால் புனரமைக்கப்பட்டது?", 
   choice1:"குமார குப்தர் ",
   choice2:"ஸ்கந்த குப்தர் ",
   choice3:"கோபாலா ",
   choice4:"தர்மபாலா ",
   
   answer:4
   },
   
   {
   question:"சதி என்னும் கொடுமையினை ஒழித்தவர் யார்?", 
   choice1:"கார்ன் வாலிஸ் ",
   choice2:"தாமஸ் மன்றோ ",
   choice3:"வில்லியம் பென்டிக்", 
   choice4:"வாரன் ஹாஸ்டிங்ஸ் ",
   
   answer:3
   },
   
   {
   question:"எந்த ஆண்டு முதலாம் பானிபட் போர் நடைபெற்றது?", 
   choice1:"1526 ",
   choice2:"1536 ",
   choice3:"1626",
   choice4:"1426 ",
   
   answer:1
   },
   
   {
   question:"கட்டபொம்மன் தூக்கிலிடப்பட்ட ஆண்டு",
   choice1:"1799 ",
   choice2:"1789 ",
   choice3:"1779 ",
   choice4:"1702 ",
   
   answer:1
   },
   
   {
   question:"லிங்கராஜா சகாவில் எங்கே அமைந்துள்ளது?", 
   choice1:"பூரி ",
   choice2:"புவனேஸ்வர்", 
   choice3:"கொனார்க் ",
   choice4:"ராஜஸ்தான் ",
   
   answer:2
   },
   
   {
   question:"நவீன இந்தியாவை வடிவமைத்தவர் என அமைக்கப்படுபவர் யார்?", 
   choice1:"வில்லியம் பென்டிக் ",
   choice2:"தாமஸ் மன்றோ ",
   choice3:"டப்ரின் பிரபு ",
   choice4:"டல்ஹவுசி",
   
   answer:4
   },
   
   {
   question:"துங்கபத்ரா சரணாலயம் எந்த மாநிலத்தில் அமைந்துள்ளது?", 
   choice1:"கர்நாடகா",
   choice2:"ஆந்திர பிரசதஷ்", 
   choice3:"கேரளா ",
   choice4:"குஜராத் ",
   
   answer:1
   },
   
   {
   question:"பிரதிகர வம்சத்தின் புகழ்பெற்ற மன்னராக கருதப்படுபவர் யார்?", 
   choice1:"முதலாம் நாகபட்டர் ",
   choice2:"இரண்டாம் நாகபட்டர்", 
   choice3:"மிகிரிபோஜர்",
   choice4:"ஆரியபட்டர்",
   
   answer:2
   },
   
   {
   question:"உலகின் மிகவும் ஆழமான ஆகழியாக கருதப்படுவது எது?", 
   choice1:"மரியானா அகழி ",
   choice2:"வட அட்லாண்டிக் பெருங்கடல்", 
   choice3:"தென் அட்லாண்டிக் பெருங்கடல்", 
   choice4:"ஆர்டிக் பெருங்கடல்",
   
   answer:1
   },
   
   {
   question:"ஜாம்பாவதி கல்யாணம் என்ற நூலின் ஆசிரியர் யார்?", 
   choice1:"தெனாலிராமன்",
   choice2:"கிருஷ்ணதேவராயர்", 
   choice3:"பசவர் ",
   choice4:"அமீர் குஷ்ரு", 
   
   answer:2
   },
   
   {
   question:"இந்திய ஆட்சிப் பணியின் தந்தை என்று அமைக்கப்படுபவர் யார்?", 
   choice1:"வில்லியம் பெண்டிங்",
   choice2:"வாரன் சஹஸ்டிங்ஸ்",
   choice3:"கார்ன்வாலிஸ்",
   choice4:"தாமஸ் மன்றோ", 
   
   answer:3
   },
   
   {
   question:"அசல் ரூபாய் 5000 க்கு 10% வட்டி வீதத்தில் 5 ஆண்டுகளுக்கு தனிவட்டி என்ன?", 
   choice1:"3500",
   choice2:"5000",
   choice3:"2500",
   choice4:"2000",
   
   answer:3
   },
   
   {
   question:"36 வினாடி என்பது ஒரு மணியில் எத்தனை சதவீதம் ஆகும்?", 
   choice1:"6%",
   choice2:"1%",
   choice3:"10%", 
   choice4:"36%",
   
   answer:2
   },
   
   {
   question:"ஒரு மின்விசிறி ரூபாய் 1500 க்கு பட்டியலிடப்பட்டுள்ளது மற்றும் அதன் பட்டியல் விலையில் 20% தள்ளுபட��� வைக்கப்பட்டு���்���த��� எனில் நிகர விலை ரூபாய் 1104 ஆக கொண்டுவருவதற்கு வாடிக்கையாளருக்கு என்ன கூடுதல் தள்ளுபடி வைங்க வேண்டும்?", 
   choice1:"8%",
   choice2:"10%",
   choice3:"15%",
   choice4:"12%",
   
   answer:1
   },
   
   {
   question:"ஒரு கிலோ கிராம் இருக்கு 5 கிராம் சதவீதம் என்ன?", 
   choice1:"5%",
   choice2:"1%",
   choice3:"0.5%", 
   choice4:"0.2% ",
   
   answer:3
   },
   
   {
   question:"(6,20) ன் மீச்சிறு பொது மடங்கு என்ன?", 
   choice1:"20",
   choice2:"40",
   choice3:"60",
   choice4:"80",
   
   answer:3
   },
   
   {
   question:"130 மீ நீளமுடைய ஒரு ஓடும் இரயிலின் வேகம், மணிக்கு 65 கி.மீ. எனில், ஒரு மின்சார கம்பத்தினை கடக்க அது எடுத்துக் கொள்ளும் நேரம் யாது?", 
   choice1:"7.2 வினாடிகள் ",
   choice2:"6.8 வினாடிகள் ",
   choice3:"8.9 வினாடிகள்",
   choice4:"6.3 வினாடிகள் ",
   
   answer:1
   },
   
   {
   question:"480 நபருக்கு நடத்தப்பட்ட தேர்வில் பெண்களில் 85%மும், ஆண்களில் 70% மும் தேர்ச்சி பெற்றனர். இருபாலரும் சேர்த்து 75% தேர்ச்சி பெற்ற நிலையில் தேர்வு எழுதிய மொத்த ஆண்களின் எண்ணிக்கை எவ்வளவு?", 
   choice1:"32",
   choice2:"340", 
   choice3:"360",
   choice4:"370",
   
   answer:1
   },
   {
      question:"இரு எண்களின் கூடுதல் 216 மற்றும் அதன் மீ.பொ.வ. 27 எனில், அந்த எண்கள்",
      choice1:"27, 189 ",
      choice2:"21, 189 ",
      choice3:"108, 108", 
      choice4:"154, 162 ",
      
      answer:1
      },
      
      {
      question:"ரூ.8000 க்கு ஆண்டிற்கு 15% வட்டி விகிதத்தில் 2 ஆண்டு மற்றும் 4 மாதத்திற்கான கூட்டு வட்டியை காண்க",
      choice1:"3110",
      choice2:"3109 ",
      choice3:"3106",
      choice4:"3108",
      
      answer:2
      },
      
      {
      question:"கொடுக்கப்பட்டுள்ள தொடரில் அமைந்த தவறான எண்ணைக் காண்க",
      choice1:"100 ",
      choice2:"166 ",
      choice3:"145 ",
      choice4:"128 ",
      
      answer:4
      },
      
      {
      question:"A ஒரு வேலையை 10 நாட்களிலும், B அதை 15 நாட்களிலும், செய்து முடிப்பர். இருவரும் சேர்ந்து அவ்வேலையைச் செய்து ரூ. 1,500ஐ ஈட்டினால், அத்தொகையை எவ்வாறு பிரித்துக் கொள்வர்?", 
      choice1:"ரூ. 700, ரூ. 800 ",
      choice2:"ரூ. 500, ரூ. 1,000 ",
      choice3:"ரூ. 600, ரூ. 900 ",
      choice4:"ரூ. 800, ரூ. 700 ",
      
      answer:3
      },
      
      {
      question:"இரு எண்களின் மீ.பொ.வ. 8 எனில் கீழ்க்கண்டவற்றுள் எது அந்த எணிகளின் மீ.பொ.ம. ஆக இருக்க இயலாது?", 
      choice1:"24 ",
      choice2:"48 ",
      choice3:"56 ",
      choice4:"60 ",
      
      answer:4
      },
      
      {
      question:"24 x 32 x 53 x 7, 23 x 33 x 52 x 72 மற்றும் 3 x 5 x 7 x 11-ன் மீப்பெரு மதிப்பு",
      choice1:"105",
      choice2:"1155", 
      choice3:"2310 ",
      choice4:"27720", 
       
      answer:1
      },
      
      {
      question:"1  3/4,2  1/2,5  7/12,3  1/3 மற்றும் 2  1/4 என்ற பின்னங்களின் கூட்டுத்தொகை ஒரு முழு எண்ணாகக் கிடைக்க எந்த மிகச்சிறிய பின்னத்தைக் கழிக்க வேண்டும்?", 
      choice1:"512",
      choice2:"712",
      choice3:"12",
      choice4:"7",
      
      answer:1
      },
      
      {
      question:"y-ன் x% சதவீதமானது zக்கு சமம் எனில் x என்பது z-ல் எத்தனை சதவீதம்?", 
      choice1:"y2100",
      choice2:"1002",
      choice3:"100y ",
      choice4:"1002y", 
      
      answer:4
      },
      
      {
      question:"ஒரு தொட்டியில் இரு குழாய்கள் தனித்தனியே முறையே 30 நிமிடங்கள், 40 நிமிடங்களில் நிரப்புகிறது. மற்றொரு குழாய் நீர் நிரம்பிய தொட்டியை 24 நிமிடங்களில் காலி செய்யும். தொட்டி காலியாக இருந்து இம்மூன்று குழாய்களும் ஒரே சமயத்தில் திறந்து விடப்பட்டால், எத்தனை மணிநேரத்தில் நிரம்பும்?", 
      choice1:"1 மணி",
      choice2:"2 மணி",
      choice3:"3 மணி",
      choice4:"4 மணி",
      
      answer:1
      },
      
      {
      question:"x : y = 5 : 2 எனில் 8x + 9y : 8x + 2y-ஐக் காண்",
      choice1:"22 : 29",
      choice2:"26 : 61",
      choice3:"29 : 22",
      choice4:"61 : 26",
      
      answer:3
      },
      
      {
      question:"A3=B4= C5 எனில் A : B :C காண்க",
      choice1:"4 : 3 : 5",
      choice2:"5 : 4 : 3 ",
      choice3:"3 : 4 : 5 ",
      choice4:"20 : 15 : 2", 
      
      answer:3
      },
      
      {
      question:"இரு எண்களின் கூட்டுத்தொகை 45. அவ்விரு எண்களின் வேறுபாடு அவற்றின் கூட்டுத் தொகையின் 1/9 டைங்காகும் எனில் அவ்விரு எண்களின் மீச்சிறு மதிப்பு",
      choice1:"100",
      choice2:"150", 
      choice3:"200",
      choice4:"250",
      
      answer:1
      },
      
      {
      question:"a-ன் x% என்பது b-ன் y%ற்குச் சமம் எனில் b –ன் z% காண்",
      choice1:"xy/z% ன் a ",
      choice2:"yz/x% ன் a ",
      choice3:"xz/y% ன் a ",
      choice4:"எதுவுமில்மலை", 
      
      answer:3
      },
      
      {
      question:"தீர்க்க: 14 x 627 ÷√1089=(?,)3+ 141",
      choice1:"5√5 ",
      choice2:"(125)3", 
      choice3:"25",
      choice4:"5",
      
      answer:4
      },
      
      {
      question:"(6767 +67) ஆனது 68 ஆல் வகுபட்டால் மீதி என்ன?", 
      choice1:"1",
      choice2:"63",
      choice3:"66",
      choice4:"67",
       
      answer:3
      },
      
      {
      question:"1354,1866 மற்றும் 2762 ஆகிய எண்களின் மீதி 10 கிடைக்குமாறு ஒவ்வொன்றும் வகுக்கும் மீப்பெரு எண்",
      choice1:"64",
      choice2:"124", 
      choice3:"156",
      choice4:"260",
      
      answer:1
      },
      
      {
      question:"முக்கோணத்தின் பரப்பளவு",
      choice1:"அடிப்பக்கம் x உயரம் ",
      choice2:"½ x அடிப்பக்கம் x உயரம்", 
      choice3:"2 x அடிப்பக்கம் x உயரம் ",
      choice4:"½ (அடிப்பக்கம் + உயரம்) ",
      
      answer:2
      },
      
      {
      question:"20செமீ பக்க அளவு கொண்ட திட கன சதுர உருவத்திலிருந்து, எத்தனை 5 செ.மீ. பக்க அளவு கொண்ட சிறு திட கன சதுரங்கமள உருவாக்கலாம்?", 
      choice1:"46",
      choice2:"64",
      choice3:"56",
      choice4:"48",
      
      answer:2
      },
      
      {
         question:"மேகம்‌ மற்றும்‌ வளி மண்டலத்துடன்‌ கூடிய ஒரே துணைக்கோள்‌ எது?",
         choice1:"டைட்டன்‌",
         choice2:"யுரோப்பா",
         choice3:"டிரிட்டான்‌",
         choice4:"மீமாஸ்‌",
         
         answer:1
         },
         
         
         {
         question:"தவறானதை தேர்ந்தெடு - சிஸ்ட்‌ - மண்ணில்‌ புதைக்கப்படும்‌ கல்லறை, அர்ன்‌ - மண்பாண்ட சாடிகள்‌,  சார்க்கோபேகஸ்‌ - சுட்ட களிமண்ணால்‌ ஆன சவப்பெட்டி, மென்ஹிர்‌ - நடுகற்கள்",
         choice1:"1 &2மட்டும்‌",
         choice2:"2 & 4மட்டும்‌",
         choice3:"3 & 1மட்டும்‌",
         choice4:"எதுவும்‌ இல்லை",
         
         answer:4
         },
         
         
         
         {
         question:"ஐநா அவையின்‌ பன்னாட்டு நீதிமன்றம்‌ எங்கு அமைந்துள்ளது?",
         choice1:"பிரான்ஸ்",
         choice2:"இங்க்‌லாந்து",
         choice3:"நெதர்லாந்து",
         choice4:"அமெரிக்கா",
         
         answer:3
         },
         
         
         {
         question:"அமைதிக்கும்‌ மகிழ்ச்சிக்கும்‌ வழி என்ற நூலை எழுதியவர்‌ யார்‌?",
         choice1:"தயானந்த சரஸ்வதி",
         choice2:"ராஜாராம்‌ மேகன்‌ ராய்",
         choice3:"விவேகானந்தர்‌",
         choice4:"ஆத்மாராம்‌ பாண்டுரங்",
         
         answer:2
         },
         
         {
            question:"கோடைக்கால நீண்ட பகல்‌ நாள்‌ எது?",
            choice1:"மே22",
            choice2:"ஜுன்21",
            choice3:"மே23",
            choice4:"ஜுன்‌ 23",
            
            answer:2
         },
         
         {
            question:"எந்த மாநாட்டின்போது ஜஹர்லால்‌ நேரு காந்தியை முதன்‌ முதலாக சந்தித்தார்‌?",
            choice1:"லக்னோ மாநாடு",
            choice2:"நாக்பூர்‌ மாநாடு",
            choice3:"லாகூர்‌ மாநாடு",
            choice4:"பனாரஸ்‌ மாதாடு",
            
            answer:1
         },
         
         
         {
         question:"கடல்‌ அலைகள்‌ உருண்டு செல்வது. போன்று நிலத்தை இடமாற்றம்‌ செய்யும்‌ மலை எது?",
         choice1:"அழுத்த அலைகள்‌",
         choice2:"முறிவு அலைகள்",
         choice3:"லோ அலைகள்‌",
         choice4:"ரேலே அலைகள்‌",
         
         answer:4
         },
         
         
         {
         question:"அமோணியா என்பது ஓர்‌ ____",
         choice1:"அமிலம்‌",
         choice2:"காரம்‌",
         choice3:"நடுநிலைமையுடையது",
         choice4:"ஈரியல்புடையது",
         
         answer:2
         },
         
         
         {
         question:"சித்தன்னவாசல்‌ ஓவியம்‌ எந்த பேரரசை சார்ந்தது?",
         choice1:"சங்க கால சோழருடையது",
         choice2:"சங்க கால‌ பாண்டியருடையது",
         choice3:"பல்லவருடையது",
         choice4:"களப்பிரருடையது",
         
         answer:3
         },
         
         
         {
         question:"காண்ட்லா துறைமுகம்‌ அமைந்துள்ள இடம்‌ எது?",
         choice1:"குஜராத்‌",
         choice2:"மேற்கு வங்காளம்",
         choice3:"கோவா",
         choice4:"கேரளா",
         
         answer:1
         },
         
         
         
         {
         question:"மக்கள்தொகை பெருக்கத்தைப்‌ பற்றி எச்சரிக்கை செய்த பொருளியல்‌ அறிஞர்‌ யார்‌?",
         choice1:"ஆடம்‌ ஸ்மித்‌",
         choice2:"மால்தஸ்‌",
         choice3:"கார்ல் மார்க்ஸ்",
         choice4:"ஜே.சம்‌.கீன்ஸ்‌",
         
         answer:2
         },
         
         {
         question:"தீப்பெட்டியின்‌ பக்கங்களில்‌ உள்ள ரசாயன பொருள்‌ எது?",
         choice1:"சிவப்பு பாஸ்பரஸ்",
         choice2:"வெள்ளை பாஸ்பரஸ்",
         choice3:"பாஸ்பரஸ்‌ பென்டாக்ஸைடு",
         choice4:"பாஸ்பரஸ்‌ குளோரைடு",
         
         answer:1
         },
         
         
         {
         question:"சரியாக பொருந்தியுள்ளாதை தேர்ந்தெடு",
         choice1:"ஹொய்சாளர்கள்‌ - கரராங்கல்‌",
         choice2:"காகத்தியர்கள்‌ - மதுரை",
         choice3:"பாண்டியர்கள்‌ - துவார சமுத்திரம்",
         choice4:"யாதவர்கள்‌ - தேவகிரி",
         
         answer:4
         },
         
         
         {
         question:"கீழ்கண்டவற்றுள்‌ எது பிளவுப்‌ பள்‌ளத்தாக்கினால்‌ உருவானது?",
         choice1:"காவிரி",
         choice2:"கோதாவரி",
         choice3:"நர்மதா",
         choice4:"கோசி",
         
         answer:3
         },
         
         
         {
         question:"எந்த பத்தாண்டு காலத்தை இந்திய அரசு புதுமைகளுக்கான பத்தாண்டாக அறிவித்தது?",
         choice1:"1980-1990",
         choice2:"1990 – 2000",
         choice3:"2000 - 2010",
         choice4:"2010 - 2020",
         
         answer:4
         },
         
         {
         question:"மாநில சட்ட மேலவயில்‌ மொத்த உறுப்பினர்களில் எத்தனை பேரை ஆளுநரை நியமனம் செய்யலாம்‌?",
         choice1:"1/4",
         choice2:"1/6",
         choice3:"1/8",
         choice4:"1/5",
         
         answer:2
         },
         
         {
         question:"ரூர்கேலா உருக்காலை கீழ்க்கண்ட ஒன்றின்‌ உதவியுடன்‌ துவக்கப்பட்டது?",
         choice1:"மேற்கு ஜெர்மனி",
         choice2:"ரஷ்யா",
         choice3:"ஜப்பான்",
         choice4:"அமெரிக்கா",
         
         answer:1
         },
         
         {
         question:"சல்பைடு தாதுக்களை செறிவூட்ட பயன்படுத்தும்‌ முறை எது?",
         choice1:"கையால்‌ தேர்வு செய்தல்‌",
         choice2:"காந்தவியல்‌ பிரித்தல்‌",
         choice3:"புவியீர்ப்பு முறையில்‌ பிரித்தெடுத்தல்",
         choice4:"நுரை மிதப்பு முறை",
         
         answer:4
         },
         

         {
         question:"சுவாச வேக அளவினைக்‌ கட்டுப்படுத்தவும்‌, பராமரிக்கவும்‌ சுவாச மையம்‌ உள்ளதை முதன்முதலாக கண்டறிந்தவர்‌ யார்‌?",
         choice1:"மிஸ்லாவ்ஸ்க்கி",
         choice2:"கோலிப்‌",
         choice3:"பேலிஸ்‌",
         choice4:"ஸ்டார்லிங்",
         
         answer:3
         },
         
         
         {
         question:"செல்‌ அமைப்பாளர்‌ என்று அழைக்கப்படுவது எது?",
         choice1:"உட்கரு",
         choice2:"உட்கரு பிளாசம்",
         choice3:"குரோமோட்டின் பின்னல்",
         choice4:"உட்கருமணி",
         
         answer:1
         },

         {
            question: "டங்ஸ்டனின்‌ உருகுநிலை புள்ளி என்ன?",
            choice1:"3400°C",
            choice2:"3422°C",
            choice3:"3474°C",
            choice4:"4410°C",
            
            answer:2
            },
            
            
            {
            question:"கீழ்க்கண்டவற்றுள்‌ எந்த ஒன்று பூஞ்சை நோய்‌?",
            choice1:"சிட்ரஸ்‌ கேன்கர்‌",
            choice2:"வேர்க்கடலை டிக்கா நோய்‌",
            choice3:"உருசைக்கிழங்கு வில்ட்‌ நோய்",
            choice4:"வாழையிலை உச்சிக்‌ கொத்து நோய்",
            
            answer:2
            },
            
            {
            question:"மாறா விகித விதியை கூறியவர்‌ யார்‌?",
            choice1:"டால்டன்‌",
            choice2:"ரூதர்போர்ட்",
            choice3:"பிரொஸ்ட்‌",
            choice4:"டெமாகிரிடியஸ்",
            
            answer:3
            },
            
            
            {
            question:"கீழ்க்கண்டவற்றுள்‌ எந்த ஒன்று ஐந்தாம்‌ நிலை தொழிலை சார்ந்தது?",
            choice1:"வர்த்தகம்‌",
            choice2:"நிர்வாகம்‌",
            choice3:"ஆராய்ச்சி",
            choice4:"முடிவெடுத்தல்",
            
            answer:4
            },
            
            {
            question:"இருட்டு அறை துயர சம்பவத்துடன்‌ தொடர்புடயவர் யார்",
            choice1:"ராபர்ட் கிளைவ்",
            choice2:"ட்யூப்லேக்ஸ்",
            choice3:"ஹேஸ்டிங்ஸ்",
            choice4:"ஹைதர் அலி",
            
            answer:1
            },
         
            {
            question:"கீழ்‌க்கண்டவற்றுள்‌ எது தவறானது?",
            choice1:"சங்கராச்சாரியார்‌ காலடி என்ற இடத்தில்‌ பிறந்தார்‌",
            choice2:"சூபி இயக்கம்‌ துருக்கியில்‌ தோற்றுவிக்கப்பட்டது",
            choice3:"பசவர்‌ தோற்றுவித்த பிரிவு வீரசைவம்‌ ஆகும்‌",
            choice4:"துளசிதாசர்‌ ராமசரிதமனாஸ்‌ என்ற நூலை எழுதினார்‌",
            
            answer:2
            },
            
         
{
   question:"எது தட்டையான எலும்பு?",
   choice1:"கணுக்கால்‌ எலும்பு",
   choice2:"தோல்‌ பட்டையில்‌ உள்ள மார்பெலும்பு",
   choice3:"தொடை எலும்பு",
   choice4:"முன்‌ கை எலும்பு",
   
   answer:2
   },
   
   {
   question:"தேசிய வனக்‌ கொள்கை அமலுக்கு வந்தது எப்போது?",
   choice1:"1975",
   choice2:"1978",
   choice3:"1988",
   choice4:"1992",
   
   answer:3
   },
   
   {
      question:"எந்த ஷரத்து ஒவ்வொரு மாநிலத்திலும்‌ ஒரு உயர்‌நீதிமன்றம்‌ அமைக்கப்பட வேண்டும்‌ என கூறுகிறது?",
      choice1:"சரத்து 214",
      choice2:"சரத்து 224",
      choice3:"சரத்து 228",
      choice4:"சரத்து 234",
      
      answer:1
   },
   
   
   {
   question:"தவறாகப்‌ பொருத்தப்பட்டிருப்பது எது?",
   choice1:"ஆயுதச்‌ சட்டம்‌ - 1876",
   choice2:"பிராந்திய மொழி பத்திரிக்கை சட்டம்‌ - 1878",
   choice3:"ஒழுங்குமுறைச்‌ சட்டம்‌ - 1773",
   choice4:"இல்பர்ட்‌ மசோதா - 1860",
   
   answer:4
   },
   
   {
   question:"கீழ்கண்டவற்றுள்‌ இந்திய அரசு சட்டம்‌ 1935-ஐப்‌ பற்றிய தவறான கூற்று எது?",
   choice1:"மாகாணங்களில்‌ தன்னாட்சியை ஒழித்தது",
   choice2:"மாகாணங்களில்‌ இரட்டை ஆட்சி ஒழிக்கப்பட்டது",
   choice3:"மத்தியில்‌ கூட்டாட்சி அரசாங்கம் ஏற்படுத்தப்பட்டது",
   choice4:"கூட்டாட்சி வங்கியை ஏற்படுத்தியது",
   
   answer:1
   },
   
   
   {
   question:"வ.௨ சிதம்பரம்‌ பிள்ளையுடன்‌ தொடர்பில்லாதது எது?",
   choice1:"சுதேசி தர்மசங்க நெசவாளிகள்‌ சங்கம்‌",
   choice2:"சுதேசி கூட்டுறவு அங்காடிகள்‌",
   choice3:"சுதேசி கப்பல்‌ நிறுவனம்‌",
   choice4:"அனைத்திந்திய காதி கண்காட்சி மற்றும்‌ சுதேசி பொருட்கள்‌ கண்காட்சி",
   
   answer:4
   },
   
   
   {
   question:"எந்த அரசியலமைப்பு திருத்தச்சட்டம்‌ வாக்களிக்கும்‌ வயதை 21 லிருந்து 18 ஆக குறைத்தது?",
   choice1:"65",
   choice2:"61",
   choice3:"63",
   choice4:"62",
   
   answer:2
   },
   
   {
   question:"காரியாப்சிஸ்‌ வகைக்கு எடுத்துக்காட்டு எது?",
   choice1:"கிளமாட்சிஸ்‌",
   choice2:"ட்ரைடாக்ஸ்‌",
   choice3:"நெல்‌",
   choice4:"முந்திரி",
   
   answer:3
   },
   
   {
   question:" ____ சமமான நியூட்ரான்‌௧ளை கொண்டுள்ளன?",
   choice1:"ஐசோபார்கள்‌",
   choice2:"ஐசோடோப்புகள்",
   choice3:"ஐசோடோன்கள்‌",
   choice4:"நிறை எண்கள்‌",
   
   answer:3
   },
   
   
   {
   question:"சரியான கூற்றை தேர்ந்தெடு",
   choice1:"வெண்கலத்தால்‌ ஆன நாட்டிய மங்கையின்‌ உருவச்சிலை ஹரப்பா நகரில்‌ அண்டெடுக்கப்பட்டது",
   choice2:"ஹரப்பன்‌ எழுத்துமுறை வலப்பக்கத்திலிருந்து இடப்பக்கமாக எழுதப்பட்டுள்ளது",
   choice3:"ஹரப்பா‌ என்ற சிந்தி மொழி சொல்லுக்‌ புதையுண்ட நகரம்‌ என்று பொருள்‌",
   choice4:"மேற்கண்ட அனைத்தும்‌",
   
   answer:3
   },
   
   {
   question:"மெளரிய வம்சத்தின்‌ அடைசி அரசர்‌ யார்‌?",
   choice1:"பிருகத்திரதன்‌",
   choice2:"புஷ்யமித்திரர்‌",
   choice3:"பிந்து சாரா",
   choice4:"அஜாத சத்ரு",
   
   answer:1
   },
   
   
   {
   question:"2014 மக்கள்‌ தொகை கணக்கெடுப்பின்‌ படி இந்தியாவின்‌ குழந்தை பாலின விகிதம்‌ ____",
   choice1:"948",
   choice2:"919",
   choice3:"995",
   choice4:"935",
   
   answer:2
   },
   
   {
   question:"கீழ்‌ கொடுக்கப்பட்டுள்ளற்றுள்‌ இந்திய அரசியலமைப்பின் அடிப்படை கடமைகலை இணைக்க காரணமாக இருந்த குழு எது?",
   choice1:"சாசார்‌ குழு",
   choice2:"சர்க்காரியா குழு",
   choice3:"சுவாமிநாதன்‌ குழு",
   choice4:"ஸ்வரன்‌ சிங்‌ குழு",
   
   answer:4
   },
   
   {
   question:"காந்தி முதன்முதலாக உண்ணாவிரத போராட்டம்‌ நடத்திய இடம்‌ எது?",
   choice1:"சம்பாரன்‌",
   choice2:"கேதா",
   choice3:"அலகாபாத்",
   choice4:"அகமதாபாத்‌",
   
   answer:4
   },
   
   {
   question:"கீழ்க்கண்டவற்றுள்‌ நேரடி வரி சார்ந்தது எது?, 1.சொத்து வரி 2.நிறுவன வரி” 3.பண்ணை வரி” 4.விற்பனை வரி” 5.வருமான வரி 6.கலால்‌ வரி",
   choice1:"2,3 & 4",
   choice2:"1,2,3,5",
   choice3:"2,4,5,6",
   choice4:"மேற்கண்ட அனைத்தும்",
   
   answer:2
   },
   
   {
   question:"கீழ்க்கண்டவற்றுள் எட்டு நன்நெறி பாதையிள் ஒன்று அல்லாதது எது?",
   choice1:"நன்முயற்சி",
   choice2:"நல்‌ வாழ்க்கை முறை",
   choice3:"நற்சிந்தனை குவிப்பு",
   choice4:"நல்லறிவு",
   
   answer:3
   },
   
   
   
   {
   question:"ஜில்‌-இ-இல்‌௯ரஹி என்ற பெயர்‌ பெற்றவர்‌ யார்‌?",
   choice1:"அவுரங்கசீப்",
   choice2:"பால்பன்‌",
   choice3:"கஜினி",
   choice4:"அக்பர்‌",
   
   answer:2
   },
   
   {
   question:"கீழ்‌கண்டவற்றுள்‌ சரியான கூற்று எது?, அசோகரின்‌ மத சகிப்புத்‌ தன்மை கல்வெட்டு13 2) அசோகரின்‌ கலிங்கப்‌ போர்‌ குறித்து கல்வெட்டு 12 குறிப்பிடுகிறது",
   choice1:"1 மட்டும்‌",
   choice2:"2மட்டும்‌",
   choice3:"இரண்டும்",
   choice4:"எதுவும்‌ இல்லை",
   
   answer:4
   },
   
   
   {
   question:"பன்னாட்டு எழுத்தறிவு நாள்‌ எது?",
   choice1:"அக்டோபர்‌ 12",
   choice2:"செப்டம்பர்‌ 12",
   choice3:"செப்டம்பர்‌ 8",
   choice4:"அக்டோபர்‌ 8",
   
   answer:3
   },
   
   {
   question:"கல்விக்கான உரிமை சட்டம்‌ எந்த ஆண்டு அறிமுகப்படுத்தப்பட்டது?",
   choice1:"2010, ஏப்ரல்‌ 1",
   choice2:"2009, ஏப்ரல்‌ 1",
   choice3:"2010, ஆகஸ்ட்‌ 1",
   choice4:"2009, ஆகஸ்ட்‌ 1",
   
   answer:1
   },
   
   {
   question:"கீழ்க்கண்ட யார்‌ அரச பிரதிநிதியாக இருந்த போது இல்பர்ட்‌ மசோதா அறிமுகப்படுத்தப்பட்டது?",
   choice1:"விட்டன்‌ பிரிபு",
   choice2:"கர்சன்‌ பிரபு",
   choice3:"கானிங்‌ பிரபு",
   choice4:"ரிப்பன்‌ பிரபு",
   
   answer:4
   },
   
   {
   question:"இந்திய அரசியலமைப்பு சட்டத்தின்‌ அரசு நெறிமுறைக்‌ கோட்பாடுகள்‌ காந்திய கோட்பாடு எது?",
   choice1:"ஆண்‌, பெண்‌ வேலைக்கு சம ஊதியம்‌ வழங்குதல்‌",
   choice2:"அனைவருக்கும்‌ பொதுவான சட்டங்கள்‌ இயற்றுதல்‌",
   choice3:"குடிசைத்‌ தொழில்களை வளர்த்தல்",
   choice4:"வருவாய் ஏற்ர்த்தாழ்வை நீக்குதல்",
   
   answer:3
   },
   
   {
   question:"விஜயநகர பேரரசின் கலைக்கான சிறந்த  எடுத்துக்காட்டு எது?",
   choice1:"அஜந்தா",
   choice2:"ஹம்பி",
   choice3:"களராஹோ",
   choice4:"ஹசரா",
   
   answer:2
   },
   
   
   {
   question:"சரியானதை தேர்ந்தெடு - “கலைடாஸ்கோப்‌ முழுக ஒளி எதிரொலிப்பு கொள்கையின்‌ படி இயங்குகிறது. வானம் நீல நிறத்தில் இருப்பதற்கு காரணம் ஒளி சிதறல்‌",
   choice1:"1மட்டும்‌",
   choice2:"2 மட்டும்‌",
   choice3:"1 & 2",
   choice4:"எதுவும்‌ இல்லை",
   
   answer:3
   },
   
   {
   question:"ராவி ஆற்றின்‌ வேதகால பெயர்‌ என்ன?",
   choice1:"புருஷினி",
   choice2:"சந்திரபாகா",
   choice3:"அர்ஜிக்யா",
   choice4:"சதாத்ரு",
   
   answer:1
   },

   
{
   question:"சரியானதை தேர்ந்தெடு- வாஞ்சிநாதன்‌ ஒரு தீவிரவாதி ஆவார்‌. சு.ச.போஸ்‌ மேற்கு வங்க மாநிலத்தைச்‌ சேர்ந்தவர்",
   choice1:"1 மட்டும்‌",
   choice2:"2மட்டும்‌",
   choice3:"1&2",
   choice4:"எதுவும்‌ இல்‌லை",
   
   answer:1
   },
   
   {
   question:"கோபால்‌ நாயக்கர்‌ எந்த மாவட்டத்தைச்‌ சார்ந்தவர்‌?",
   choice1:"திருநெல்வேலி",
   choice2:"வேலூர்‌",
   choice3:"மதுரை",
   choice4:"திண்டுக்கல்",
   
   answer:4
   },
   
   {
   question:"வில்லின்‌ நீளம்‌ 27.5 செ.மீ. பரப்பசாவு 618.75 ௪.செ.மீ. கொண்ட வட்ட கோணப் பகுதியின் ஆரம் காண்", 
   choice1:"35 செ.மீ", 
   choice2:"25 செ.மீ",
   choice3:"45 செ.மீ",
   choice4:"55 செ.மீ",
   
   answer:3
   },
   
   
   {
   question:"X-ன் 15%=yன் 20% எனில் x:y காண்க",
   choice1:"3:4",
   choice2:"4:3",
   choice3:"17:1", 
   choice4:"16:17",
   
   answer:2
   },
   
   {
   question:"a/b=4/5 மற்றும் b/c=15/16 எனில் c^2-a^2/c^2+a^2 என்பது",
   choice1:"1/7",
   choice2:"7/25",
   choice3:"3/4",
   choice4:"6/5",
   
   answer:2
   },
   
   
   {
   question:"பக்கங்கள்‌ கொண்ட பல கோணத்திற்கு எத்தனை மூலைவிட்டங்கள்‌ உள்ளன?",
   choice1:"30",
   choice2:"70",
   choice3:"120", 
   choice4:"90",
   
   answer:4
   },
   
   {
   question:"a/b=9/7எனில் a-b/a+b=",
   choice1:"1/8",
   choice2:"8",
   choice3:"2/7",
   choice4:"9/5",
   
   answer:1
   },
   
   {
   question:"924 மற்றும்‌ 105-இ.ன்‌ மீப்பெரு பொது வகுத்தி",
   choice1:"21",
   choice2:"23",
   choice3:"24",
   choice4:"25",
   
   answer:1
   },
   
   {
   question:"மூன்று வெவ்வேறான எண்களின்‌ மீ.சி.ம. 120 எனில்‌ கீழ்க்கண்டவற்றுல் எது அவ்வெண்களின் மீ.பொ.வ அல்ல?",
   choice1:"8",
   choice2:"12",
   choice3:"24",
   choice4:"35",
   
   answer:4
   },
   
   
   
   {
   question:"ஒரு முக்கோணத்தின்‌ பக்கங்கள்‌ 3: 4 : 5 என்ற விகிதத்தில்‌ உள்ளது எனில்‌ அதன்‌ மிகப்பெரிய கோணத்தின்‌ அளவு யாது?",
   choice1:"60",
   choice2:"75",
   choice3:"120",
   choice4:"150",
   
   answer:2
   },
   
   
   {
   question:"ஒரு குறிப்பிட்ட அசலானது 6 ஆண்டுகளில்‌ ரூ. 8,890ஆகவும்‌ , 4 ஆண்டுகளில்‌ ரூ. 7,920 ஆவும்‌ மாறுகிறது எணில்‌ அசல்‌ என்பது",
   choice1:"ரூ.7500",
   choice2:"ரூ.6000",
   choice3:"ரூ8000",
   choice4:"ரூ4530",
   
   answer:2
   },
   
   {
   question:"ஒருவர்‌ ஆண்டு வட்டி4% என ரூ. 50,000 (ஐம்பதாயிரம்‌) வங்கியிலிருந்து கடனாகப்‌ பெறுகிறார்‌.ஆண்டுக்கொரு முறை வட்டி கணக்கிட்டால்‌, இரண்டு ஆண்டுகள்‌ கழித்து அவர்‌ கட்ட வேண்டிய கூட்டு வட்டியானது",
   choice1:"4000",
   choice2:"2000",
   choice3:"2080",
   choice4:"4080",
   
   answer:4
   },
   
   {
   question:"2 ரூபாய்‌ 70 பைசாவில்‌ 15 பைசா எத்தனை சதவீதம்‌?",
   choice1:"5%",
   choice2:"5 1/9%",
   choice3:"5 5/9%",
   choice4:"5 3/5%",
   
   answer:3
   },
   
   {
   question:"சஞ்சய்‌ மிதி வண்டியை ரூ.5000க்கு௬ வாங்கினார்‌ இரண்டு வருடங்களுக்குப்‌ பிறகு ரூ.600 குறைத்து விற்றார் எனில் நட்ட சதவீத்தை காண்க",
   choice1:"10%",
   choice2:"14%",
   choice3:"6%",
   choice4:"12%",
   
   answer:4
   },
   
   
   {
   question:"578 ல்‌ 15% + 644ல் 22.5% =?",
   choice1:"231.4",
   choice2:"231.6",
   choice3:"231.8",
   choice4:"233.6",
   
   answer:2
   },
   
   {
      question:"21 செ.மீ ஆரமுள்ள கால்வட்டப்‌ பகுதியின்‌ சுற்றளவு காண்‌",
      choice1:"65 செ.மீ",
      choice2:"75 செ.மீ",
      choice3:"44 செ.மீ",
      choice4:"88 செ.மீ",
      
      answer:2
      },
      
      
      {
      question:"x=2/3 எனில்‌ x+1/x -ன்‌ மதிப்பு",
      choice1:"2√2",
      choice2:"4",
      choice3:"√2",
      choice4:"2√3",
      
      answer:2
      },
      
      {
      question:"மதிப்பு காண்‌:55*56",
      choice1:"3800",
      choice2:"3050",
      choice3:"3080",
      choice4:"8030",
      
      answer:3
      },
      
      {
      question:"இரு எண்களின்‌ விகிதம்‌ 34 மேலும்‌ அவ்விரு ௭ண்ணின்‌ மீச்சிறு மதிப்பு 120 எனில்‌ அவ்விரு எண்களின் கூட்டுத்தொகை",
      choice1:"70",
      choice2:"140",
      choice3:"35",
      choice4:"105",
      
      answer:1
      },
      
      
      {
      question:"ஒரு நீர்த்தொட்டியை குழாய்‌ A வழியாக நீர்‌ விட்டு நிரப்பும்‌ நேரத்தில்‌ 4 மணி நேரம்‌ ஆகிறது. அதே நேரத்தில்‌ குழாய்‌ B ஆனது 6 மணி நேரத்தில்‌ தொட்டியை நீர்‌ இல்லாமல்‌ திறந்து விட்டு காலி செய்கிறது. ஒரே நேரத்தில்‌ இரண்டுமே திறக்கப்பட்டால்‌ தொட்டிகாலியாகும்‌ வரை இதில்‌ எத்தனை மணி நேரம்‌ தொட்டியை நிரப்பப்‌ பயன்படும்‌ எண்பதை கூறு",
      choice1:"6",
      choice2:"8",
      choice3:"10",
      choice4:"12",
      
      answer:4
      },
      
      
      {
      question:"ஒரு நபர்‌ ஒரு பழைய மிதி வண்டியை ரூ. 1250க்குகாங்கினார்‌. அதனை சீர்படுத்த ரூ.250 செலவு செய்தார்‌. அவர்‌ அதனை ரூ. 1400க்க விற்றார்‌.அவருடைய லாபம் ,நட்டத்தை காண்க, (சதவீதத்தில்‌)",
      choice1:"6.67% நட்டம்", 
      choice2:"6,67% லாபம்‌",
      choice3:"20% நட்டம்‌",
      choice4:"6% நட்டம்‌",
      
      answer:1
      },
      
      {
      question:"2019 Newsl8 எழுச்சி இந்தியா மாநாட்டின்‌ கருப்பொருள் என்ன?",
      choice1:"அரசியலுக்கு அப்பால்‌: உரிமைகளுக்காக போராடுதல் [Beyond Politics: Fight for Right]",
      choice2:"அரசியலுக்கு அப்பால்‌: தேசிய முன்னுரிமைகளை வரையறுத்தல்‌[Defining National Priorities]",
      choice3:"அரசியலுக்கு அப்பால்‌: பயங்கரவாதத்திற்கு எதிராக நிற்ப்பது [ Stand up Against Terrorism]",
      choice4:"அரசியலுக்கு அப்பால்‌: உங்கள்‌ இலக்கை வரையறுத்தல்[Beyond Politics: Define Your Goal]",
      
      answer:2
      },
      
      {
      question:"2019 ஐநா “நீர்‌ ஆண்டு”  என்று எந்த மாநில அரசு அறிவித்தது?",
      choice1:"கர்நாடகா",
      choice2:"ராஜஸ்தான்",
      choice3:"ஹரியானா",
      choice4:"மகாராஷ்டிரா",
      
      answer:1
      },
      
      
      {
      question:"Mainamati Maitree Exercise 2010 சமீபத்தில்‌ இந்தியாவிற்கும்‌ எந்த நாட்டிற்குமிடையே நடைபெற்றது?",
      choice1:"மியான்மர்", 
      choice2:"பங்காதேஷ்‌",
      choice3:"ஸ்ரீலங்கா",
      choice4:"சீனா",
      
      answer:2
      },
      
      {
      question:"2019-ற்கான பிரவாசி பாரதீய சம்மான்‌ விருது [Pravasi Bhartiya Samman Award] யாருக்கு வழங்கப்பட்டுள்ளது?",
      choice1:"PrathapC. Reddy",
      choice2:"Ramesh Mehta",
      choice3:"Rajendra Joshi",
      choice4:"Kamal Karanth",
      
      answer:3
      },
      
      {
      question:"ஸ்லோவாக்கியாவின்‌ முதல்‌ பெண்‌ ஜனாதிபதி யார்",
      choice1:"Adriana Karembeu",
      choice2:"Zuzana Caputova",
      choice3:"Kristina Farkasova",
      choice4:"Apollonia Vanova",
      
      answer:3
      },
      
      
      {
      question:"2019 மியாமி ஓபன்‌ டென்னிஸ்‌ போட்டியில்‌ ஆண்கள்‌ ஒற்றையர்‌ பட்டத்தை வென்றவர்‌ யார்‌?",
      choice1:"Roger Federer",
      choice2:"John Isner",
      choice3:"Novak Djokovic", 
      choice4:"Kei Nishikori",
      
      answer:2
      },
      
      
      {
      question:"2019 உலக தொழுநோய்‌ தினத்தின்‌ கருப்பொருள்‌ என்ன?",
      choice1:"வாழ்வோம்‌ வாழ உதவுவோம்‌",
      choice2:"தொழுதோயின்‌ வீழ்ச்சி, வாழ்வின்‌ மாற்றம்",
      choice3:"பாகுபாடு, களங்கம்‌ மற்றும்‌ பாரபட்சம்‌ ஆதியகற்றை முடிவுக்கு கொண்டுவருதல்‌",
      choice4:"குறைபாடற்ற சிறுவர்‌ மற்றும்‌ சிறுமியர்‌",
      
      answer:1
      },
      
      
      {
      question:"தேசிய மாணவர்‌ படையின்‌ புதிதாக நியமிக்கப்பட்ட நிர்வாக இயக்குனர்‌ யார்‌?",
      choice1:"ராஜீவ்‌ சோப்ரா",
      choice2:"தீரஜ்ஷர்மா",
      choice3:"பி எஸ்‌ பானுபட்", 
      choice4:"சஸ்கேகமத்‌",
      
      answer:3
      },
      
      {
      question:"ISRO வின்‌ மனித விண்வெளி வானூர்தி மையம்‌ எந்த நகரத்தில்‌ தொடங்கப்பட்டது?",
      choice1:"கொச்சி",
      choice2:"சென்னை",
      choice3:"பெங்களூரு", 
      choice4:"ஹைதராடாத்‌",
      
      
      answer:1
      },
      
      {
      question:"பிரேசிலின்‌ புதிய அதிபர்‌ யார்‌?",
      choice1:"மைக்கேல்‌ டெமர்‌",
      choice2:"பெர்னாண்டோ ஹேடட்",
      choice3:"ஜேர்‌ போல்சோறரோ",
      choice4:"ஹாமில்டன்‌ மெகராவ்‌",
      
      answer:3
      },
      
      {
      question:"யுனெஸ்கோவிலிருந்து அதிகாரப்பூர்வமாக வெளியேறியுள்ள நாடுகள்‌ எவை?",
      choice1:"ரஷ்யா மற்றும்‌ கத்தார்‌",
      choice2:"ஜப்பான்‌ மற்றும்‌ இங்கிலாந்து",
      choice3:"அமெரிக்கா மற்றும்‌ இஸ்ரேல்‌",
      choice4:"ஈரான்‌ மற்றும்‌ கத்தார்‌",
      
      answer:3
      },
      
      
      {
      question:"2019ஆம்‌ ஆண்டு தேசிய நிருத்ய சிரோமணி விருது பெற்றவர்‌ யார்‌?",
      choice1:"குதிசேவ சியாம்‌ பிரசாத்",
      choice2:"உப்மாகா துர்கா பிரசாத்‌ ராவ்",
      choice3:"தல்லூரி சுனில்‌ செளதரியு",
      choice4:"அனிந்திதா நியோஜி அனாம்‌",
      
      answer:3
      },
      
      {
      question:"ஆஸ்திரேலியாவின்‌ புதிய பிரதமராக பதவியேற்றுள்ளாவர்‌ யார்‌?",
      choice1:"மால்கம்‌ டர்ன்பல்‌",
      choice2:"சென்‌ லைட்‌",
      choice3:"பீட்டர்‌ காஸ்குரோவ்",
      choice4:"ஸ்காட்‌ மோரிசன்‌",
      
      
      answer:4
      },
      
      {
      question:"அண்மையில்‌ எந்தத்‌ தேதியில்‌ நடப்பாண்டு சர்வதேச எவரெஸ்ட்‌ தினம்‌ கடைபிடிக்கப்பட்டது?",
      choice1:"மே 27",
      choice2:"மே 29",
      choice3:"மே 30",
      choice4:"மே28",
      
      answer:2
      },
      
      {
      question:"நடப்பாண்டு சர்வதேச ஐ.நா அமைதி காப்போர்‌ தினத்தின்‌ கருப்பொருள்‌ என்ன?",
      choice1:"Protecting Civilians, Protecting Peace",
      choice2:"Courage for Peace",
      choice3:"Law, Order, Peace",
      choice4:"Peacekeeping Is a Global Partnership",
      
      answer:1
      },
      
      {
      question:"இந்திய விமானப்படையின்‌ புதிய துணைத்தளபதியாக நியமிக்கப்டட்டுள்ளவர்‌ யார்‌?",
      choice1:"ஓம்‌ பிரகாஷ்‌ மேரா",
      choice2:"அனில்‌ கோஸ்லா",
      choice3:"ராகேஷ்‌ குமார்‌ சிங்‌ பதாரியா",
      choice4:"தில்டாக்‌ சிங்‌",
      
      answer:3
      },
      
      {
      question:"அண்மையில்‌ எந்தத்‌ தேதியில்‌, சர்வதேச நடன தினம்‌ அனுசரிக்கப்பட்டது?",
      choice1:"ஏப்ரல்‌ 28",
      choice2:"ஏப்ரல்‌ 30",
      choice3:"ஏப்ரல்‌ 29",
      choice4:"ஏப்ரல்‌ 27",
      
      answer:3
      },
      
      
      {
      question:"45 நாள் நீண்ட எவரெஸ்ட் சிகர தூய்மை பரப்புரையை தொடங்கிய நாடு எது?",
      choice1:"சீனா",
      choice2:"பூடான்",
      choice3:"இந்தியா",
      choice4:"நேபாளம்‌",
      
      answer:4
      },
      
      
      {
      question:"24 மணி நேரத்தில்‌ அதிக எண்ணிக்கையிலாண தேசிய கொடியை ஏற்றி கின்னஸ் உலக சாதனை புரிந்த நகரம்‌ எது?",
      choice1:"பெய்ரூத்‌",
      choice2:"ரியாத்‌",
      choice3:"அபதாபி",
      choice4:"மனாமா",
      
      answer:1
      },
      
      
      {
      question:"புதிய தேசிய பாதுகாப்பு ஆலோசகராக நியமிக்கப்பட்டுள்ளவர்‌ யார்‌?",
      choice1:"ராஜீவ்‌ மாத்தூர்‌",
      choice2:"திகேஷ்கீர்‌ சர்மா",
      choice3:"ராஜீவ்‌ ஜெயின்‌",
      choice4:"அஜித்‌ தோல்",
      
      answer:4
      },
      
      {
         question:"பின்வரும்‌ கூற்றுகளில் சரியானது?",
         choice1:"பிற்கால சோழ பேரரரசை தோற்று வித்தவர் விஜயாலயச்‌ சோழன்‌",
         choice2:"விஜயாலயச்‌ சோழன்‌ களப்பிரர்களை வென்று சோழ அரசை நிறுவினார்‌",
         choice3:"சோழ பேரரசில்‌ மிகவும்‌ புகழ்‌ பெற்றவர்‌ - 1ம்‌ ராஜராஜசோழன்‌",
         choice4:"சோழ மண்டலத்தை கோரமண்டலம்‌ என்று குறிப்பிட்டவர்கள்‌ - ஐரோப்பியர்கள்‌", 
         
         answer:2
         },
         
         
         {
         question:"கரந்தை செப்பேடு யாருடன்‌ தொடர்புடையது",
         choice1:"1ம்‌ ராஜராஜசோழன்‌",
         choice2:"1ம்‌ ராஜேந்திர சோழன்",
         choice3:"1ம்‌ பராந்தக சோழன்‌",
         choice4:"1ம்‌ குலோத்துங்க",
         
         answer:2
         },
         
         
         {
         question:"சிவபாத சேகரன்‌ என்ற பட்டம்‌ பெற்றவர்‌",
         choice1:"1ம்‌ ராஜராஜசோழன்‌",
         choice2:"1ம்‌ ராஜேந்திர",
         choice3:"2ம்‌ ராஜராஜசோழன்",
         choice4:"ராஜசிம்மன்",
         
         answer:1
         },
         
         {
         question:"சோழப்‌ பேரரசில்‌ 1 களம்‌ என்பது",
         choice1:"30கிலோ",
         choice2:"100 கிலோ",
         choice3:"26 கிலோ",
         choice4:"28 கிலோ",
         
         answer:4
         },
         
         
         {
         question:"கங்கை கொண்ட சோழபுரத்தில்‌ உள்ள 16 மைல் ஏரியான ஜலமய ஜெயஸ்தம்பம்‌யை பற்றி குறிப்பிட்ட வெளிநாட்டு அறிஞர்‌",
         choice1:"யுவான்‌ சுவாங்",
         choice2:"௮ல்பெருணி",
         choice3:"பாகியாண்‌",
         choice4:"மார்க்கோபோலோ", 
         
         answer:2
         },
         
         {
         question:"சிவஞான போதம்‌ என்ற நூலின்‌ ஆசிரியர்‌",
         choice1:"தண்டி ",
         choice2:"சேக்கிழார்",
         choice3:"மெய்‌ கணிடர்", 
         choice4:"குணவர பண்டிதர்",
          
         answer:3
         },
         
         
         {
         question:"எந்த கோவில்‌ கருவறை சுவற்றில்‌ பெரிய புராணம்‌ நிகழ்வுகள்‌ குறுஞ்சிற்பங்களா வடிவமைக்கப்பட்டுள்ளன",
         choice1:"தஞ்சை பெரிய‌ கோவில்", 
         choice2:"தராசுரம்‌ கோயில்‌",
         choice3:"காஞ்சி கைலாசநாதர்",
         choice4:"கங்கை கொண்ட சோழபுரம்", 
         
         answer:2
         },
         
         
         {
         question:"சம்புவராயர்கள்‌ பற்றிய கூற்றுகளில்‌ தவறானவை",
         choice1:"இவர்களின்‌ தலைநகரம்‌ - படைவீடு",
         choice2:"இவர்கள்‌ பல்லவ அரசர்களின்‌ கீழ்‌ குறுநில மன்னர்கள்‌",
         choice3:"சம்புவராயர்களை தோற்கடித்தவர்‌ - குமார கம்பண்ணா",
         choice4:"இவர்களின்‌ அரசு இராஜ கம்பீர ராஜ்யம்‌ எனப்பட்டது.",
          
         answer:2
         },
         
         
         {
         question:"அரிகேசரி என்ற கூன்‌ பாண்டியனை சமண மதத்திலிருந்து சைவ மதத்திற்கு மாற்றியவர்‌",
         choice1:"திருநாவுக்கரசர்‌",
         choice2:"மாணிக்கவாசகர்‌",
         choice3:"திருஞான சம்பந்தர்", 
         choice4:"சுந்தரர்",
          
         answer:3
         },

         {
         question:"வெனிஸ்‌ நகர பயணியான மார்க்கோபோலோ யாருடைய காலத்தில்‌ பாண்டிய நாட்டுக்கு வருகை புரிந்தார்‌",
         choice1:"1ம்‌ சடையவர்ம சுந்தரபாண்டியன்",
         choice2:"1ம்‌ மாறவர்மன்‌ சுந்தரபாண்டியன்‌",
         choice3:"வீர பாண்டியன்‌",
         choice4:"மாறவர்மன்‌ குலசேகரன்",
         
         answer:4
         },
         
         
         {
         question:"அலிப்பூர்‌ குண்டு வெடிப்பு (1908) வழக்கில்‌ வாதாடிய வழக்கறிஞர்",
         choice1:"ஜவஹர்லால்‌ நேரு", 
         choice2:"மகாத்மா காந்தி",
         choice3:"சித்தரஞ்சன்‌ தாஸ்",
         choice4:"பிபின்‌ சந்திர பால்",
          
         answer:3
         },
         
         
         {
         question:"வங்க பிரிவினை நடைமுறைப்படுத்தப்பட்ட நாள்‌",
         choice1:"1905 July19",
         choice2:"1905july17",
         choice3:"1905 Oct 12",
         choice4:"1905 Oct16",
         
         answer:4
         },
         
         
         {
         question: "சுய உதவி (ஆத்ம சக்தி) எனும்‌ ஆக்கத்‌ திட்டத்தினை பரப்புவதற்கு மேளாக்கள்‌ என்றும்‌ திருவிழாக்களை நடத்தியவர்‌",
         choice1:"திலகர்‌",
         choice2:"பிபின்‌ சந்திரபால்",
         choice3:"தாதாபாய் நொவ்ரோஜி", 
         choice4:"ரவீந்திரதாத்‌ தாக்கூர்",

         answer:4
         },
         
         
         {
         question:"1902ல்‌ விடிவெள்ளிக்‌ கழகத்தை நிறுவியவர்‌",
         choice1:"வ.உ.சி",
         choice2:"சுப்ரமணிய சிவா", 
         choice3:"சதீஷ்‌ சந்திரா",
         choice4:"திலகர்‌",
         
         answer:3
         },
         
         
         {
         question:"கோரல்‌ நூற்பாலை வேலை நிறுத்தம்‌ நடைபெற் இடம்‌",
         choice1:"சூரத்", 
         choice2:"தூத்துக்குடி", 
         choice3:"புனே",
         choice4:"திருநெல்வேலி", 
         
         answer:2
         },
         
         
         {
         question:"தமிழில்‌ வெளியிடப்பட்ட முதல்‌ தினசரி பத்தித்க்கை",
         choice1:"தி இந்து", 
         choice2:"சுதேசமித்தீரன்", 
         choice3:"இந்தியா",
         choice4:"விடுதலை",
         
         answer:2
         },
         
         
         {
         question:"திலகரின்‌ 'Tenets of new Party' என்ற நூலை தமிழில்‌ மொழி பெயர்த்தவர்‌",
         choice1:"வ.உ.சி",
         choice2:"சுப்ரமணிய பாரதி", 
         choice3:"சுப்ரமணிய சிவா",
         choice4:"ஈ.வெ.ரா",
         
         answer:2
         },
         
         
         {
         question:"பீகார்‌ சம்பரான்‌ சத்தியாகிரகத்திற்கு காந்தியை அழைப்பு விடுத்தவர்‌",
         choice1:"கோகலே",
         choice2:"பிரஜ்கிஷோர்",
         choice3:"ராஜ்குமார்‌ சுக்லா", 
         choice4:"ராஜேந்திர பிரசாத்‌",
         
         answer:3
         },
         
         
         {
         question:"1919ல்‌ அகில இந்திய கிலாபத்‌ இயக்கம்‌ நடைபெற்ற இடம்‌",
         choice1:"மும்பை",
         choice2:"சென்னை",
         choice3:"வங்காளம்‌",
         choice4:"டெல்லி",
         
         answer:4
         },
         
         
         {
         question:"எந்த சட்டத்தின்‌ மூலம்‌ ஒதுக்கப்பட்ட துறைகள்‌ மாற்றப்பட்ட துறைகள் என‌ பிரிக்கப்பட்டது",
         choice1:"1933 ம்‌ ஆண்டு சட்டம்", 
         choice2:"1909 ம் ஆண்டு சட்டம்‌",
         choice3:"1919  ம் ஆண்டு சட்டம்‌",
         choice4:"1858 ம்‌ ஆண்டு சட்டம்",
         
         answer:3
         },
         
         
         {
         question: "இந்து-முஸ்லிம்‌ ஒற்றுமையின்‌ தூதர்‌",
         choice1:"தாதாபாய்‌ நெளரோஜி",
         choice2:"காந்தி",
         choice3:"முகமது அலி ஜின்னா",
         choice4:"சர் சையது அகமது கான்",
         
         answer:3
         },
         
         
         {
         question:"தாதாபாய்‌ நெளரோஜி எழுதிய வறுமையும்‌ பிரிட்டனுக் கொவ்வாத இந்திய ஆட்சியும்‌ என்ற புத்தகம்‌ வெளியிடப்பட்ட ஆண்டு",
         choice1:"1901",
         choice2:"1900",
         choice3:"1902",
         choice4:"1903",
         
         answer:1
         },
         
   
{
   question:"லேவாதேவி செய்வோர்‌ - என்பவர்",
   choice1:"கூலி வேலை செய்பவர்‌",
   choice2:"காலணி தயாரிப்போர்‌",
   choice3:"விவசாயம்‌ செய்வோர்‌",
   choice4:"வட்டிக்கு கடன்‌ கொடுப்போர்",

   answer:4
   },
   
   
   {
   question:"அன்னி பெசண்ட்‌ அம்மையாருக்கு ஆதரவாக தனது Knightwood பட்டத்தை துறந்தவர்‌",
   choice1:"ரவீந்திரநாத்‌ தாகூர்‌",
   choice2:"சுப்ரமணியம்‌",
   choice3:"திலகர்‌",
   choice4:"ஜவகர்லால்‌ நேரு",
    
   answer:2
   },
   
      
   {
   question:"1947 ம்‌ ஆண்டு ஆகஸ்ட்‌ 15ம்‌ நாள்‌ இந்தியா கதந்திரம்‌ அடைந்த போது காந்தியடிகள் எங்கிருந்தார்",
   choice1:"புது டெல்லி",
   choice2:"அகமதாபாத்‌",
   choice3:"வார்தா",
   choice4:"நவகாளி",
   
   answer:4
   },
   
   
   {
   question:"வடமேற்கு எல்லை மாகாணத்தில்‌ சட்டமறுப்பு இயக்கத்தை (1930) த���ைம���யயேற்��ு நடத்தியவர்‌",
   choice1:"கான்‌ ௮ப்துல்‌ காபர்‌ கான்",
   choice2:"கோபால கிருஷ்ண கோகலே",
   choice3:"திலகர்‌",
   choice4:"பிபின்‌ சந்திர பால்",

   answer:1
   },

   {
      question:"மேகம்‌ மற்றும்‌ வளி மண்டலத்துடன்‌ கூடிய ஒரே துணைக்கோள்‌ எது?",
      choice1:"டைட்டன்‌",
      choice2:"யுரோப்பா",
      choice3:"டிரிட்டான்‌",
      choice4:"மீமாஸ்‌",
      
      answer:1
      },
      
            
      {
      question:"ஐநா அவையின்‌ பன்னாட்டு நீதிமன்றம்‌ எங்கு அமைந்துள்ளது?",
      choice1:"பிரான்ஸ்",
      choice2:"இங்க்‌லாந்து",
      choice3:"நெதர்லாந்து",
      choice4:"அமெரிக்கா",
      
      answer:3
      },
      
      
      {
      question:"அமைதிக்கும்‌ மகிழ்ச்சிக்கும்‌ வழி என்ற நூலை எழுதியவர்‌ யார்‌?",
      choice1:"தயானந்த சரஸ்வதி",
      choice2:"ராஜாராம்‌ மேகன்‌ ராய்",
      choice3:"விவேகானந்தர்‌",
      choice4:"ஆத்மாராம்‌ பாண்டுரங்",
      
      answer:2
      },
      
      {
      question:"கோடைக்கால நீண்ட பகல்‌ நாள்‌ எது?",
      choice1:"மே22",
      choice2:"ஜுன்21",
      choice3:"மே23",
      choice4:"ஜுன்‌ 23",
      
      answer:2
      },
      
      
      {
      question:"கடல்‌ அலைகள்‌ உருண்டு செல்வது. போன்று நிலத்தை இடமாற்றம்‌ செய்யும்‌ மலை எது?",
      choice1:"அழுத்த அலைகள்‌",
      choice2:"முறிவு அலைகள்",
      choice3:"லோ அலைகள்‌",
      choice4:"ரேலே அலைகள்‌",
      
      answer:4
      },
      
      
      {
      question:"அமோணியா என்பது ஓர்‌ ____",
      choice1:"அமிலம்‌",
      choice2:"காரம்‌",
      choice3:"நடுநிலைமையுடையது",
      choice4:"ஈரியல்புடையது",
      
      answer:2
      },
      
      
      {
      question:"சித்தன்னவாசல்‌ ஓவியம்‌ எந்த பேரரசை சார்ந்தது?",
      choice1:"சங்க கால சோழருடையது",
      choice2:"சங்க கால‌ பாண்டியருடையது",
      choice3:"பல்லவருடையது",
      choice4:"களப்பிரருடையது",
      
      answer:3
      },
      
      
      {
      question:"காண்ட்லா துறைமுகம்‌ அமைந்துள்ள இடம்‌ எது?",
      choice1:"குஜராத்‌",
      choice2:"மேற்கு வங்காளம்",
      choice3:"கோவா",
      choice4:"கேரளா",
      
      answer:1
      },

      
{
   question:"மக்கள்தொகை பெருக்கத்தைப்‌ பற்றி எச்சரிக்கை செய்த பொருளியல்‌ அறிஞர்‌ யார்‌?",
   choice1:"ஆடம்‌ ஸ்மித்‌",
   choice2:"மால்தஸ்‌",
   choice3:"கார்ல் மார்க்ஸ்",
   choice4:"ஜே.சம்‌.கீன்ஸ்‌",
   
   answer:2
   },
   
   {
   question:"தீப்பெட்டியின்‌ பக்கங்களில்‌ உள்ள ரசாயன பொருள்‌ எது?",
   choice1:"சிவப்பு பாஸ்பரஸ்",
   choice2:"வெள்ளை பாஸ்பரஸ்",
   choice3:"பாஸ்பரஸ்‌ பென்டாக்ஸைடு",
   choice4:"பாஸ்பரஸ்‌ குளோரைடு",
   
   answer:1
   },
   
   
   {
   question:"சரியாக பொருந்தியுள்ளாதை தேர்ந்தெடு",
   choice1:"ஹொய்சாளர்கள்‌ - கரராங்கல்‌",
   choice2:"காகத்தியர்கள்‌ - மதுரை",
   choice3:"பாண்டியர்கள்‌ - துவார சமுத்திரம்",
   choice4:"யாதவர்கள்‌ - தேவகிரி",
   
   answer:4
   },
   
   
   {
   question:"கீழ்கண்டவற்றுள்‌ எது பிளவுப்‌ பள்‌ளத்தாக்கினால்‌ உருவானது?",
   choice1:"காவிரி",
   choice2:"கோதாகூரி",
   choice3:"நர்மதா",
   choice4:"கோசி",
   
   answer:3
   },
   
   
   {
   question:"எந்த பத்தாண்டு காலத்தை இந்திய அரசுபுதுமைகளுக்கான பத்தாண்டாக அறிவித்தது?",
   choice1:"1980-1990",
   choice2:"1990 – 2000",
   choice3:"2000 - 2010",
   choice4:"2010 - 2020",
   
   answer:4
   },
   
   {
      question:"மாநில சட்ட மேலவயில்‌ மொத்த உறுப்பினர்களில் எத்தனை பேரை ஆளுனை நியமனம் செய்யலாம்‌?",
      choice1:"1/4",
      choice2:"1/6",
      choice3:"1/8",
      choice4:"1/5",
      
      answer:2
   },
   
   {
   question:"ரூர்கேலா உருக்காலை கீழ்க்கண்ட ஒன்றின்‌ உதவியுடன்‌ துவக்கப்பட்டது?",
   choice1:"மேற்கு ஜெர்மனி",
   choice2:"ரஷ்யா",
   choice3:"ஜப்பான்",
   choice4:"அமெரிக்கா",
   
   answer:1
   },
   
   {
   question:"சல்பைடு தாதுக்களை செறிவூட்ட பயன்படுத்தும் முறை எது?",
   choice1:"கையால்‌ தேர்வு செய்தல்‌",
   choice2:"காந்தவியல்‌ பிரித்தல்‌",
   choice3:"புவியீர்ப்பு முறையில்‌ பிரித்தெடுத்தல்",
   choice4:"நுரை மிதப்பு முறை",
   
   answer:4
   },

   {
   question:"சுவாச வேக அளவினைக்‌ கட்டுப்படுத்தவும்‌, பராமரிக்கவும்‌ சுவாச மையம்‌ உள்ளதை முதன்முதலாக கண்டறிந்தவர்‌ யார்‌?",
   choice1:"மிஸ்லாவ்ஸ்க்கி",
   choice2:"கோலிப்‌",
   choice3:"பேலிஸ்‌",
   choice4:"ஸ்டார்லிங்",
   
   answer:3
   },
   
   
   {
   question:"செல்‌ அமைப்பாசார்‌ என்று அழைக்கப்படுவது எது?",
   choice1:"உட்கரு",
   choice2:"உட்கரு பிளாசம்",
   choice3:"குரோமோட்டின் பின்னல்",
   choice4:"உட்கருமணி",
   
   answer:1
   },
   
   
   {
   question:"டங்ஸ்டனின்‌ உருகுநிலை புள்ளி என்ன?",
   choice1:"3400°C",
   choice2:"3422°C",
   choice3:"3474°C",
   choice4:"4410°C",
   
   answer:2
   },
   
   
{
   question:"கீழ்க்கண்டவற்றுள்‌ எந்த ஒன்று பூஞ்சை நோய்‌?",
   choice1:"சிட்ரஸ்‌ கேன்கர்‌",
   choice2:"வேர்க்கடலை டிக்கா நோய்‌",
   choice3:"உருசைக்கிழங்கு வில்ட்‌ நோய்",
   choice4:"வாழையிலை உச்சிக்‌ கொத்து தோய்",
   
   answer:2
   },
   
   {
   question:"மாறா விகித விதியை கூறியவர்‌ யார்‌?",
   choice1:"டால்டன்‌",
   choice2:"ரூதர்போர்ட்",
   choice3:"பிரொஸ்ட்‌",
   choice4:"டெமாகிரிடியஸ்",
   
   answer:3
   },
   
   
   {
   question:"கீழ்க்கண்டவற்றுள்‌ எந்த ஒன்று ஐந்தாம்‌ நிலை தொழிலை சார்ந்தது?",
   choice1:"வர்த்தகம்‌",
   choice2:"நிர்வாகம்‌",
   choice3:"ஆராய்ச்சி",
   choice4:"முடிவெடுத்தல்",
   
   answer:4
   },
   
   {
   question:"இருட்டு அறை துயர சம்பவத்துடன்‌ தொடர்புடயவர் யார்",
   choice1:"ராபர்ட் கிளைவ்",
   choice2:"ட்யூப்லேக்ஸ்",
   choice3:"ஹேஸ்டிங்ஸ்",
   choice4:"ஹைதர் அலி",
   
   answer:1
   },
   

   {
   question:"கீழ்‌க்கண்டவற்றுள்‌ எது தவறானது?",
   choice1:"சங்கராச்சாரியார்‌ காலடி என்ற இடத்தில்‌ பிறந்தார்‌",
   choice2:"சூபி இயக்கம்‌ துருக்கியில்‌ தோற்றுவிக்கப்பட்டது",
   choice3:"பசவர்‌ தோற்றுவித்த பிரிவு வீரசைவம்‌ ஆகும்‌",
   choice4:"துளசிதாசர்‌ ராமசரிதமனாஸ்‌ என்ற நூலை எழுதினார்‌",
   
   answer:2
   },
   
  

{
   question:"எது தட்டையான எலும்பு?",
   choice1:"கணுக்கால்‌ எலும்பு",
   choice2:"தோல்‌ பட்டையில்‌ உள்ள மார்பெலும்பு",
   choice3:"தொடை எலும்பு",
   choice4:"முன்‌ கை எலும்பு",
   
   answer:2
   },
   
   {
   question:"தேசிய வனக்‌ கொள்கை அமலுக்கு வந்தது எப்போது?",
   choice1:"1975",
   choice2:"1978",
   choice3:"1988",
   choice4:"1992",
   
   answer:3
   },
   
   {
   question:"எந்த ஷரத்து ஒவ்வொரு மாநிலத்திலும்‌ ஒரு உயர்‌நீதிமன்றம்‌ அமைக்கப்பட வேண்டும்‌ என கூறுகிறது?",
   choice1:"சரத்து 214",
   choice2:"சரத்து 224",
   choice3:"சரத்து 228",
   choice4:"சரத்து 234",
   
   answer:1
   },
   
   
   {
   question:"தவறாகப்‌ பொருத்தப்பட்டிருப்பது எது?",
   choice1:"ஆயுதச்‌ சட்டம்‌ - 1876",
   choice2:"பிராந்திய மொழி பத்திரிக்கை சட்டம்‌ - 1878",
   choice3:"ஒழுங்குமுறைச்‌ சட்டம்‌ - 1773",
   choice4:"இல்பர்ட்‌ மசோதா - 1860",
   
   answer:4
   },
   
   {
   question:"கீழ்கண்டவற்றுள்‌ இந்திய அரசு சட்டம்‌ 1935-ஐப்‌ பற்றிய தவறான கூற்று எது?",
   choice1:"மாகாணங்களில்‌ தன்னாட்சியை ஒழித்தது",
   choice2:"மாகாணங்களில்‌ இரட்டை ஆட்சி ஒழிக்கப்பட்டது",
   choice3:"மத்தியில்‌ கூட்டாட்சி அரசாங்கம் ஏற்படுத்தப்பட்டது",
   choice4:"கூட்டாட்சி வங்கியை ஏற்படுத்தியது",
   
   answer:1
   },
   
   
   {
   question:"வ.௨ சிதம்பரம்‌ பிள்ளையுடன்‌ தொடர்பில்லாதது எது?",
   choice1:"சுதேசி தர்மசங்க நெசவாளிகள்‌ சங்கம்‌",
   choice2:"சுதேசி கூட்டுறவு அங்காடிகள்‌",
   choice3:"சுதேசி கப்பல்‌ நிறுவனம்‌",
   choice4:"அனைத்திந்திய காதி கண்காட்சி மற்றும்‌ சுதேசி பொருட்கள்‌ கண்காட்சி",
   
   answer:4
   },
   
   
   {
   question:"எந்த அரசியலமைப்பு திருத்தச்சட்டம்‌ வாக்களிக்கும்‌ வயதை 21 லிருந்து 18 ஆக குறைத்தது?",
   choice1:"65",
   choice2:"61",
   choice3:"63",
   choice4:"62",
   
   answer:2
   },
   
   {
   question:"காரியாப்சிஸ்‌ வகைக்கு எடுத்துக்காட்டு எது?",
   choice1:"கிளமாட்சிஸ்‌",
   choice2:"ட்ரைடாக்ஸ்‌",
   choice3:"நெல்‌",
   choice4:"முந்திரி",
   
   answer:3
   },
   
   {
   question:"____ சமமான நியூட்ரான்‌௧ளை கொண்டுள்ளன?",
   choice1:"ஐசோபார்கள்‌",
   choice2:"ஐசோடோப்புகள்",
   choice3:"ஐசோடோன்கள்‌",
   choice4:"நிறை எண்கள்‌",
   
   answer:3
   },
      
   {
   question:"மெளரிய வம்சத்தின்‌ கடைசி அரசர்‌ யார்‌?",
   choice1:"பிருகத்திரதன்‌",
   choice2:"புஷ்யமித்திரர்‌",
   choice3:"பிந்து சாரா",
   choice4:"அஜாத சத்ரு",
   
   answer:1
   },
   
   
   {
   question:"2011 மக்கள்‌ தொகை கணக்கெடுப்பின்‌ படி இந்தியாவின்‌ குழந்தை பாலின விகிதம்‌ ____",
   choice1:"948",
   choice2:"919",
   choice3:"995",
   choice4:"935",
   
   answer:2
   }, 

   
{
   question:"கீழ்‌ கொடுக்கப்பட்டுள்ளவற்றுள்‌ இந்திய அரசியலமைப்பின் அடிப்படை கடமைகலை இணைக்க காரணமாக இருந்த குழு எது?",
   choice1:"சாசார்‌ குழு",
   choice2:"சர்க்காரியா குழு",
   choice3:"சுவாமிநாதன்‌ குழு",
   choice4:"ஸ்வரன்‌ சிங்‌ குழு",
   
   answer:4
   },
   
   {
   question:"காந்தி முதன்முதலாக உண்ணாவிரத போராட்டம்‌ நடத்திய இடம்‌ எது?",
   choice1:"சம்பாரன்‌",
   choice2:"கேதா",
   choice3:"அலகாபாத்",
   choice4:"அகமதாபாத்‌",
   
   answer:4
   },
   
   
   {
   question:"கீழ்க்கண்டவற்றுள் எட்டு நன்நெறி பாதையிள் ஒன்று அல்லாதது எது?",
   choice1:"நன்முயற்சி",
   choice2:"நல்‌ வாழ்க்கை முறை",
   choice3:"நற்சிந்தனை குவிப்பு",
   choice4:"நல்லறிவு",
   
   answer:3
   },
   
   
   
   {
   question:"ஜில்‌-இ-இல்‌௯ரஹி என்ற பெயர்‌ பெற்றவர்‌ யார்‌?",
   choice1:"அவுரங்கசீப்",
   choice2:"பால்பன்‌",
   choice3:"கஜினி",
   choice4:"அக்பர்‌",
   
   answer:2
   },
   
   {
   question:"கீழ்‌கண்டவுற்றுள்‌ சரியான கூற்று எது?, அசோகரின்‌ மத சகிப்புத்‌ தன்மை கல்வெட்டு13 2) அசோகரின்‌ கலிங்கப்‌ போர்‌ குறித்து கல்வெட்டு 12 குறிப்பிடுகிறது",
   choice1:"1 மட்டும்‌",
   choice2:"2மட்டும்‌",
   choice3:"இரண்டும்",
   choice4:"எதுவும்‌ இல்லை",
   
   answer:4
   },

   
{
   question:"பன்னாட்டு எழுத்தறிவு நாள்‌ எது?",
   choice1:"அக்டோபர்‌ 12",
   choice2:"செப்டம்பர்‌ 12",
   choice3:"செப்டம்பர்‌ 8",
   choice4:"அக்டோபர்‌ 8",
   
   answer:3
   },
   
   {
   question:"கல்லிக்கான உரிமை சட்டம்‌ எந்த ஆண்டு அறிமுகப்படுத்தப்பட்டது?",
   choice1:"2010, ஏப்ரல்‌ 1",
   choice2:"2009, ஏப்ரல்‌ 1",
   choice3:"2010, ஆகஸ்ட்‌ 1",
   choice4:"2009, ஆகஸ்ட்‌ 1",
   
   answer:1
   },
   
   {
   question:"கீழ்க்கண்ட யார்‌ அரச பிரதிநிதியாக இருந்த போது இல்பர்ட்‌ மசோதா அறிமுகப்படுத்தப்பட்டது?",
   choice1:"விட்டன்‌ பிரிபு",
   choice2:"கர்சன்‌ பிரபு",
   choice3:"கானிங்‌ பிரபு",
   choice4:"ரிப்பன்‌ பிரபு",
   
   answer:4
   },
   
   {
   question:"இந்திய அரசியலமைப்பு சட்டத்தின்‌ அரசு நெறிமுறைக்‌ கோட்பாடுகள்‌ காந்திய கோட்பாடு எது?",
   choice1:"ஆண்‌, பெண்‌ வேலைக்கு சம ஊதியம்‌ வழங்குதல்‌",
   choice2:"அனைவருக்கும்‌ பொதுவான சட்டங்கள்‌ இயற்றுதல்‌",
   choice3:"குடிசைத்‌ தொழில்களை வளர்த்தல்",
   choice4:"வருவாய் ஏற்ர்த்தாழ்வை நீக்குதல்",
   
   answer:3
   },
   
   {
   question:"விஜயநகர பேரரசின் கலைக்கான சிறந்த எடுத்துக்காட்டு எது?",
   choice1:"அஜந்தா",
   choice2:"ஹம்பி",
   choice3:"களராஹோ",
   choice4:"ஹசரா",
   
   answer:2
   },
      
   {
   question:"ராவி ஆற்றின்‌ வேதகால பெயர்‌ என்ன?",
   choice1:"புருஷினி",
   choice2:"சந்திரபாகா",
   choice3:"அர்ஜிக்யா",
   choice4:"சதாத்ரு",
   
   answer:1
   },
   
   {
   question:"கோபால்‌ நாயக்கர்‌ எந்த மாவட்டத்தைச்‌ சார்ந்தவர்‌?",
   choice1:"திருநெல்வேலி",
   choice2:"வேலூர்‌",
   choice3:"மதுரை",
   choice4:"திண்டுக்கல்",
   
   answer:4
   },
   
   {
   question:"வில்லின்‌ நீளம்‌ 27.5 செ.மீ. பரப்பசாவு 618.75 ௪.செ.மீ. கொண்ட வட்ட கோணப் பகுதியின் ஆரம் காண்",
   choice1:"35 செ.மீ", 
   choice2:"25 செ.மீ",
   choice3:"45 செ.மீ",
   choice4:"55 செ.மீ",
   
   answer:3
   },
   
   
   {
   question:"X-ன் 15%=yன் 20% எனில் x:y காண்க",
   choice1:"3:4",
   choice2:"4:3",
   choice3:"17:1", 
   choice4:"16:17",
   
   answer:2
   },
   
   {
   question:"a/b=4/5 மற்றும் b/c=15/16 எனில் c^2-a^2/c^2+a^2 என்பது",
   choice1:"1/7",
   choice2:"7/25",
   choice3:"1/2",
   choice4:"6/5",
   
   answer:2
   },
   

   {
      question:"924 மற்றும்‌ 105-இ.ன்‌ மீப்பெரு பொது வகுத்தி",
      choice1:"21",
      choice2:"23",
      choice3:"24",
      choice4:"25",
      
      answer:1
      },
      
      {
      question:"மூன்று வெவ்வேறான எண்களின்‌ மீ.சி.ம. 120 எனில்‌ கீழ்க்கண்டவற்றுல் எது அவ்வெண்களின் மீ.பொ.வ அல்ல?",
      choice1:"8",
      choice2:"12",
      choice3:"24",
      choice4:"35",
      
      answer:4
      },
      
      
      
      {
      question:"ஒரு முக்கோணத்தின்‌ பக்கங்கள்‌ 3: 4 : 5 என்ற விகிதத்தில்‌ உள்ளது எனில்‌ அதன்‌ மிகப்பெரிய கோணத்தின்‌ அளவு யாது?",
      choice1:"60",
      choice2:"75",
      choice3:"120",
      choice4:"150",
      
      answer:2
      },
      
      
      {
      question:"ஒரு குறிப்பிட்ட அசலானது 6 ஆண்டுகளில்‌ ரூ. 8,890ஆகவும்‌ , 4 ஆண்டுகளில்‌ ரூ. 7,920 ஆவும்‌ மாறுகிறது எணில்‌ அசல்‌ என்பது",
      choice1:"ரூ. 7500",
      choice2:"ரூ.6000",
      choice3:"ரூ.8000",
      choice4:"ரூ.4530",
      
      answer:2
      },
      
      {
      question:"ஒருவர்‌ ஆண்டு வட்டி4% என ரூ. 50,000 (ஐம்பதாயிரம்‌) வங்கியிலிருந்து கடனாகப்‌ பெறுகிறார்‌.ஆண்டுக்கொரு முறை வட்டி கணக்கிட்டால்‌, இரண்டு ஆண்டுகள்‌ கழித்து அவர்‌ கட்ட வேண்டிய கூட்டு வட்டியானது",
      choice1:"4000",
      choice2:"2000",
      choice3:"2080",
      choice4:"4080",
      
      answer:4
      },
      
      {
      question:"2 ரூபாய்‌ 70 பைசாவில்‌ 15 பைசா எத்தனை சதவீதம்‌?",
      choice1:"5%",
      choice2:"5 1/9%",
      choice3:"5 5/9%",
      choice4:"5 3/5%",
      
      answer:3
      },
      
      {
      question:"சஞ்சய்‌ மிதி வண்டியை ரூ.5000க்கு௬ வாங்கினார்‌. இரண்டு வருடங்களுக்குப்‌ பிறகு ரூ.600 குறைத்து விற்றார் எனில் நட்ட சதவீத்தை காண்க",
      choice1:"10%",
      choice2:"14%",
      choice3:"6%",
      choice4:"12%",
      
      answer:4
      },
      
      
      {
      question:"578 ல்‌ 15% + 644ல் 22.5% =?",
      choice1:"231.4",
      choice2:"231.8",
      choice3:"231.8",
      choice4:"233.6",
      
      answer:2
      },
      
      
      {
      question:"21 செ.மீ ஆரமுள்ள கால்வட்டப்‌ பகுதியின்‌ சுற்றளவு காண்‌",
      choice1:"65 செ.மீ",
      choice2:"75 செ.மீ",
      choice3:"44 செ.மீ",
      choice4:"88 செ.மீ",
      
      answer:2
      },
      
      
      {
      question:"x=2+_/3 எனில்‌x+1/x -ன்‌ மதிப்பு",
      choice1:"2√2",
      choice2:"4",
      choice3:"√2",
      choice4:"2√3",
      
      answer:2
      },
      
      {
      question:"மதிப்பு காண்‌:55*56",
      choice1:"3800",
      choice2:"3050",
      choice3:"3080",
      choice4:"8030",
      
      answer:3
      },
      
      {
      question:"இரு எண்களின்‌ விகிதம்‌ 34 மேலும்‌ அவ்விரு ௭ண்ணின்‌ மீச்சிறு மதிப்பு 120 எனில்‌ அவ்விரு எண்களின் கூட்டுத்தொகை",
      choice1:"70",
      choice2:"140",
      choice3:"35",
      choice4:"105",
      
      answer:1
      },
      
      
      {
      question:"ஒரு நீர்த்தொட்டியை குழாய்‌ A வழியாக நீர்‌ விட்டு நிரப்பும்‌ நேரத்தில்‌ 4 மணி நேரம்‌ ஆகிறது. அதே நேரத்தில்‌ குழாய்‌ B ஆனது 6 மணி நேரத்தில்‌ தொட்டியை நீர்‌ இல்லாமல்‌ திறந்து விட்டு காலி செய்கிறது. ஒரே நேரத்தில்‌ இரண்டுமே திறக்கப்பட்டால்‌ தொட்டி காலியாகும்‌ வரை இதில்‌ எத்தனை மணி நேரம்‌ தொட்டியை நிரப்பப்‌ பயன்படும்‌ எண்பதை கூறு",
      choice1:"6",
      choice2:"8",
      choice3:"10",
      choice4:"12",
      
      answer:4
      },
      
      
      {
      question:"ஒரு நபர்‌ ஒரு பழைய மிதி வண்டியை ரூ. 1250க்குகாங்கினார்‌. அதனை சீர்படுத்த ரூ.250 செலவு செய்தார்‌. அவர்‌ அதனை ரூ. 1400க்க விற்றார்‌.அவருடைய லாபம் ,நட்டத்தை காண்க, (சதவீதத்தில்‌)",
      choice1:"6.67% நட்டம்", 
      choice2:"6,67% லாபம்‌",
      choice3:"20% நட்டம்‌",
      choice4:"6% நட்டம்‌",
      
      answer:1
      },

      {
         question:"2019 Newsl8 எழுச்சி இந்தியா மாநாட்டின்‌ கருப்பொருள் என்ன?",
         choice1:"உரிமைகளுக்காக போராடுதல்",
         choice2:"தேசிய முன்னுரிமைகளை வரையறுத்தல்‌",
         choice3:"பயங்கரவாதத்திற்கு எதிராக நிற்ப்பத",
         choice4:"உங்கள்‌ இலக்கை வரையறுத்தல்",
         
         answer:2
         },
         
         {
         question:"2019 ஐ “நீர்‌ ஆண்டு”  என்று எந்த மாநில அரசு அறிவித்தது?",
         choice1:"கர்நாடகா",
         choice2:"ராஜஸ்தான",
         choice3:"ஹரியானா",
         choice4:"மகாராஷ்டிரா",
         
         answer:1
         },
         
         
         {
         question:"Mainamati Maitree Exercise 2010 சமீபத்தில்‌ இந்தியாவிற்கும்‌ எந்த நாட்டிற்குமிடையே நடைபெற்றது?",
         choice1:"மியான்மர்", 
         choice2:"பங்காதேஷ்‌",
         choice3:"ஸ்ரீலங்கா",
         choice4:"சீனா",
         
         answer:2
         },
         
         {
         question:"2019-ற்கான பிரவாசி பாரதீய சம்மான்‌ விருது யாருக்கு வழங்கப்பட்டுள்ளது?",
         choice1:"PrathapC. Reddy",
         choice2:"Ramesh Mehta",
         choice3:"Rajendra Joshi",
         choice4:"Kamal Karanth",
         
         answer:3
         },
         
         {
         question:"ஸ்லோவாக்கியாவின்‌ முதல்‌ பெண்‌ ஜனாதிபதி யார்",
         choice1:"Adriana Karembeu",
         choice2:"Zuzana Caputova",
         choice3:"Kristina Farkasova",
         choice4:"Apollonia Vanova",
         
         answer:3
         },
         
         
         {
         question:"2019 மியாமி ஓபன்‌ டென்னிஸ்‌ போட்டியில் ஆண்கள்‌ ஒற்றையர்‌ பட்டத்தை வென்றவர்‌ யார்‌?",
         choice1:"Roger Federer",
         choice2:"John Isner",
         choice3:"Novak Djokovic", 
         choice4:"Kei Nishikori",
         
         answer:2
         },
         
         
         {
         question:"2019 உலக தொழுநோய்‌ தினத்தின்‌ கருப்பொருள்‌ என்ன?",
         choice1:"வாழ்வோம்‌ வாழ உதவுவோம்‌",
         choice2:"தொழுதோயின்‌ வீழ்ச்சி, வாழ்வின்‌ மாற்றம்",
         choice3:"பாகுபாடு, களங்கம்‌ மற்றும்‌ பாரபட்சம்‌”,ஆதியவற்றை முடிவுக்கு கொண்டுவருதல்‌",
         choice4:"குறைபாடற்ற சிறுவர்‌ மற்றும்‌ சிறுமியர்‌",
         
         answer:1
         },
         
         
         {
         question:"தேசிய மாணவர்‌ படையின்‌ புதிதாக நியமிக்கப்பட்ட நிர்வாக இயக்குனர்‌ யார்‌?",
         choice1:"ராஜீவ்‌ சோப்ரா",
         choice2:"தீரஜ்ஷர்மா",
         choice3:"பி எஸ்‌ பானுபட்",
         choice4:"சஸ்கேகமத்‌",
         
         answer:3
         },
         
         {
         question:"ISRO வின்‌ மனித விண்வெளி வானூர்தி மையம்‌ எந்த நகரத்தில்‌ தொடங்கப்பட்டது?",
         choice1:"கொச்சி",
         choice2:"சென்னை",
         choice3:"பெங்களூரு", 
         choice4:"ஹைதெராடாத்‌",
         
         
         answer:1
         },
         
         {
         question:"பிரேசிலின்‌ புதிய அதிபர்‌ யார்‌?",
         choice1:"மைக்கேல்‌ டெமர்‌",
         choice2:"பெர்னாண்டோ ஹேடட்",
         choice3:"ஜேர்‌ போல்சோறரோ",
         choice4:"ஹாமில்டன்‌ மெகராவ்‌",
         
         answer:3
         },
         
         {
         question:"யுனெஸ்கோவிலிருந்து அதிகாரப்பூர்வமாக வெளியேறியுள்ள நாடுகள்‌ எவை?",
         choice1:"ரஷ்யா மற்றும்‌ கத்தார்‌",
         choice2:"ஜப்பான்‌ மற்றும்‌ இங்கிலாந்து",
         choice3:"அமெரிக்கா மற்றும்‌ இஸ்ரேல்‌",
         choice4:"ஈரான்‌ மற்றும்‌ கத்தார்‌",
         
         answer:3
         },
         
         
         {
         question:"2019ஆம்‌ ஆண்டு தேசிய நிருத்ய சிரோமணி விருது பெற்றவர்‌ யார்‌?",
         choice1:"குதிசேவ சியாம்‌ பிரசாத்",
         choice2:"உப்மாகா துர்கா பிரசாத்‌ ராவ்",
         choice3:"தல்லூரி சுனில்‌ செளதரியு",
         choice4:"அனிந்திதா நியோஜி அனாம்‌",
         
         answer:3
         },
         
         {
         question:"ஆஸ்திரேலியாவின்‌ புதிய பிரதமராக பதவியேற்றுள்ளாவர்‌ யார்‌?",
         choice1:"மால்கம்‌ டர்ன்பல்‌",
         choice2:"சென்‌ லைட்‌",
         choice3:"பீட்டர்‌ காஸ்குரோவ்",
         choice4:"ஸ்காட்‌ மோரிசன்‌",
         
         
         answer:4
         },
         
         {
         question:"அண்மையில்‌ எந்தத்‌ தேதியில்‌ நடப்பாண்டு சர்வதேச எவரெஸ்ட்‌ தினம்‌ கடைபிடிக்கப்பட்டது?",
         choice1:"மே 27",
         choice2:"மே 29",
         choice3:"மே 30",
         choice4:"மே28",
         
         answer:2
         },
         
         {
         question:"நடப்பாண்டு சர்வதேச ஐ.நா அமைதி காப்போர்‌ தினத்தின்‌ கருப்பொருள்‌ என்ன?",
         choice1:"Protecting Civilians, Protecting Peace",
         choice2:"Courage for Peace",
         choice3:"Law, Order, Peace",
         choice4:"Peacekeeping Is a Global Partnership",
         
         answer:1
         },
         
         {
         question:"இந்திய விமானப்படையின்‌ புதிய துணைத்தளபதியாக நியமிக்கப்பட்டுள்ளவர்‌ யார்‌?",
         choice1:"ஓம்‌ பிரகாஷ்‌ மேரா",
         choice2:"அனில்‌ கோஸ்லா",
         choice3:"ராகேஷ்‌ குமார்‌ சிங்‌ பதாரியா",
         choice4:"தில்டாக்‌ சிங்‌",
         
         answer:3
         },
         
         {
         question:"அண்மையில்‌ எந்தத்‌ தேதியில்‌, சர்வதேச நடன தினம்‌ அனுசரிக்கப்பட்டது?",
         choice1:"ஏப்ரல்‌ 28",
         choice2:"ஏப்ரல்‌ 30",
         choice3:"ஏப்ரல்‌ 29",
         choice4:"ஏப்ரல்‌ 27",
         
         answer:3
         },     
         
         {
            question:"45 நாள் நீண்ட எவரெஸ்ட் சிகர தூய்மை பரப்புரையை தொடங்கிய நாடு எது?",
            choice1:"சீனா",
            choice2:"பூட்டான்",
            choice3:"இந்தியா",
            choice4:"நேபாளம்‌",
            
            answer:4
            },
            
            
            {
            question:"24 மணி நேரத்தில்‌ அதிக எண்ணிக்கையிலாண தேசிய கொடியை ஏற்றி கின்னஸ் உலக சாதனை புரிந்த நகரம்‌ எது?",
            choice1:"பெய்ரூத்‌",
            choice2:"ரியாத்‌",
            choice3:"அபதாபி",
            choice4:"மனாமா",
            
            answer:1
            },
            
            
            {
            question:"புதிய தேசிய பாதுகாப்பு ஆலோசகராக நியமிக்கப்பட்டுள்ளவர்‌ யார்‌?",
            choice1:"ராஜீவ்‌ மாத்தூர்‌",
            choice2:"திகேஷ்கீர்‌ சர்மா",
            choice3:"ராஜீவ்‌ ஜெயின்‌",
            choice4:"அஜித்‌ தோவால்‌",
            
            answer:4
            },
            
];

const score_pt = 10;
const max_ques = 10;

startgame = () => {
    score = 0;
    questionCounter = 0;
    availableQuestion = [...questions];

    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestion === 0 || questionCounter >= max_ques){
       localStorage.setItem('mostrecentscore',score);
        return window.location.assign('end.html')
    }
    questionCounter++;
    progressText.innerText = `Qusetion ${questionCounter} of ${max_ques}`;

    const questionIndex  = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestion.splice(questionIndex,1);

    acceptingAnswer = true;

}

choices.forEach( choice => {
   choice.addEventListener('click', e => {
      if(!acceptingAnswer) return
   acceptingAnswer = false;

   const selectedChoice = e.target
   const selectedAnswer = selectedChoice.dataset['number']

   let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

   if(classToApply === 'correct'){
      incrementScore(score_pt)
   }
   selectedChoice.parentElement.classList.add(classToApply)
   
   setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
   },1000)
   })
 
})
  
incrementScore = num => {
   score += num;
   scoreText.innerText = score;
}
startgame()