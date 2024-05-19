





  // Array of treatment options
  var diseaseTreatmentMap = {
    "কাশি বা শ্বাসকষ্ট": ["১. জিজ্ঞেস করতে হবে কাশি বা শ্বাসকষ্ট কতদিন যাবত?","২. এক মিনিট শ্বাস গণনা করতে হবে।","৩. শ্বাস নেয়ার সময় বাঁশির মতো শব্দ হলে সালব্যুটামল দিতে হবে।", "৪. দুই সপ্তাহের বেশি কাশি হলে উপজেলা স্বাস্থ্যকমপ্লেক্সে রেফার করতে হবে। "],
    "ঠান্ডা বা কফ": ["১. জিজ্ঞেস করতে হবে ঠান্ডা বা কফ কতদিন যাবত?","২. এক মিনিট শ্বাস গণনা করতে হবে।","৩. নাক বন্ধ হয়ে থাকলে নজমিস্ট নেজাল ড্রপ সব সময় চালিয়ে যেতে হবে।","৪. শ্বাস নেয়ার সময় গড় গড় শব্দ হলে অ্যামব্রোক্সিন পেডিয়াটিক ড্রপ দিতে হবে।","৫. সর্দির সাথে জ্বর হলে টফিন সিরাপ হাফ চামচ করে ৭ দিন দিতে হবে।","৬. দুই সপ্তাহের বেশি কফ বা সর্দি হলে উপজেলা স্বাস্থ্যকমপ্লেক্সে রেফার করতে হবে। "],
    "শ্বাসকষ্ট বা নিউমোনিয়া": ["১. জিজ্ঞেস করতে হবে কাশি বা শ্বাসকষ্ট কতদিন যাবত?","২. এক মিনিট শ্বাস গণনা করতে হবে।","৩. শ্বাস নেয়ার সময় বাঁশির মতো শব্দ হলে সালব্যুটামল দিতে হবে।", "৪. দুই সপ্তাহের বেশি কাশি হলে উপজেলা স্বাস্থ্যকমপ্লেক্সে রেফার করতে হবে। "],
    "ব্রংকাইটিস বা নিউমোনিয়া": ["১. জিজ্ঞেস করতে হবে কাশি বা শ্বাসকষ্ট কতদিন যাবত?","২. এক মিনিট শ্বাস গণনা করতে হবে।","৩. দ্রুত শ্বাস নিলে এ্যামোক্সিসিলিন সিরাপ দিয়ে ৫ দিন চিকিৎসা করতে হবে।","৪. শ্বাস নেয়ার সময় বাঁশির মতো শব্দ হলে সালব্যুটামল দিতে হবে।", "৫. দুই সপ্তাহের বেশি কাশি হলে উপজেলা স্বাস্থ্যকমপ্লেক্সে রেফার করতে হবে। "],
    "মারাত্মক নিউমোনিয়া": ["১. জিজ্ঞেস করতে হবে কাশি বা শ্বাসকষ্ট কতদিন যাবত?","২. এক মিনিট শ্বাস গণনা করতে হবে।","৩. লক্ষ্য করতে হবে শ্বাস নেয়ায় সময় বুকের নিচের অংশ দেবে যায় ও শাঁ শাঁ শব্দ হয় কি না?","৪. যদি এমনই হয় তাহলে লক্ষণগুলো মারাত্মক।","৫. এ্যামোক্সিসিলিন সিরাপের প্রথম ডোজ দিতে হবে।","৬. তাপমাত্রা ১০১° ফারেনহাইট হলে প্যারাসিটামল দিতে হবে।", "৭. অথবা জরুরীভিত্তিতে উপজেলা স্বাস্থ্যকমপ্লেক্সে রেফার করতে হবে। "],
    "প্লুরিসি রোগ": ["১. এ রোগে ফুসফুসে পানি জমলে কোন ধরনের শব্দ পাওয়া যায় না।", "২. শ্বাস নেয়ার সময় ব্যথা অনুভূতি হয়। ","৩. এজন্য শিশুরা শ্বাস নেয়ায়র সময় কান্নাকাটি করে।","৪. এ রকম হলে প্লুরিসি ড্রপ সিরাপ ব্যবহার করতে হবে।"],
    "ডাই প্লুরিসি রোগ": ["১. এ রোগে ফুসফুসে খস খস শব্দ পাওয়া যায়।", "২. শ্বাস নেয়ার সময় ব্যথা অনুভূতি হয়। ","৩. এজন্য শিশুরা শ্বাস নেয়ায়র সময় কান্নাকাটি করে।","৪. ডাই প্লুরিসির সাথে জ্বর হলে অ্যান্টিবায়টিক কফ সিরাপ ও প্যারাসিটামল ব্যবহার করতে হবে।"],
    "ফুসফুসের প্রদাহ": ["১. ফুসফুসে নানা কারণে প্রদাহ সৃষ্টি হতে পারে।", "২. প্রধানত প্লুরিসি বা ডাই প্লুরিসির ক্ষেত্রে শ্বাস নেয়ার সময় ব্যথা অনুভূতি হয়। ","৩. এজন্য শিশুরা শ্বাস নেয়ায়র সময় কান্নাকাটি করে।","৪. প্লুরিসির জন্য প্লুরিসি ড্রপ ও ডাই প্লুরিসির সাথে জ্বর হলে অ্যান্টিবায়টিক কফ সিরাপ ও প্যারাসিটামল ব্যবহার করতে হবে।"],
   
    // Add more diseases and treatments here
  };

  // Populate the dropdown with sounds and diseases
  function populateSounds() {
    var soundSelect = document.getElementById("soundSelect");
    for (var sound in soundDiseaseMap) {
      var option = document.createElement("option");
      option.value = sound;
      option.textContent = sound;
      soundSelect.appendChild(option);
    }
  }

  // Display disease information on sound selection
  function displayDisease() {
    var sound = document.getElementById("soundSelect").value;
    var disease = soundDiseaseMap[sound];
    var diseaseDisplay = document.getElementById("diseaseDisplay");
    diseaseDisplay.innerHTML = '<button class="btn btn-danger mt-2">রোগ: ' + disease + '</button>';

    // Show treatment button when a disease is selected
    var treatmentButton = document.getElementById("treatmentButton");
    treatmentButton.style.display = "inline-block";
  }

  // Display treatment options on treatment button click
  function displayTreatmentOptions() {
    var sound = document.getElementById("soundSelect").value;
    var disease = soundDiseaseMap[sound];
    var treatmentList = document.getElementById("treatmentList");
    treatmentList.innerHTML = ""; // Clear previous treatments
    if (diseaseTreatmentMap[disease]) {
      diseaseTreatmentMap[disease].forEach(function(treatment) {
        var listItem = document.createElement("li");
        listItem.textContent = treatment;
        listItem.classList.add("list-group-item");
        treatmentList.appendChild(listItem);
      });
      treatmentList.style.display = "block"; // Show the treatment list
    } else {
      treatmentList.style.display = "none"; // Hide the treatment list if no treatments found
    }
  }

  // Populate the dropdown with sounds on page load
  populateSounds();

  // Event listener to display disease information on sound selection
  document.getElementById('soundSelect').addEventListener('change', displayDisease);

  // Event listener to display treatment options on treatment button click
  document.getElementById('treatmentButton').addEventListener('click', displayTreatmentOptions);
  
