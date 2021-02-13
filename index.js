var firebaseConfig = {
    apiKey: "AIzaSyDnutCJJu9PIVvp3rpUI6zojcSeGV4WKaI",
    authDomain: "portfolio-7d58f.firebaseapp.com",
    projectId: "portfolio-7d58f",
    storageBucket: "portfolio-7d58f.appspot.com",
    messagingSenderId: "593735220264",
    appId: "1:593735220264:web:5ec983284df93eb12e891d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference contactInfo collection
  let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form1").addEventListener("submit", submitForm, false);

function submitForm(e){
    e.preventDefault();
    let name = document.querySelector('.form-name').value
    let email = document.querySelector('.form-email').value
    let message = document.querySelector('.form-message').value
    console.log(name, email, message)
    saveContactInfo(name, email, message)
    document.querySelector(".contact-form1").reset()

}

//save infos to firebase
function saveContactInfo(name, email, message){
   let newContactInfo = contactInfo.push();

   newContactInfo.set({
       name: name,
       email: email,
       message: message
   })

}