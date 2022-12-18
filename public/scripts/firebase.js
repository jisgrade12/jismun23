<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDbv2rx0Yasn_aykQFxFom6_W_zFrhOgQE",
    authDomain: "jis-mun23.firebaseapp.com",
    projectId: "jis-mun23",
    storageBucket: "jis-mun23.appspot.com",
    messagingSenderId: "239304682464",
    appId: "1:239304682464:web:a628f1d4323e4950dd9985",
    measurementId: "G-M743VMLDHN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>