  
  // Array of sounds and corresponding diseases
  var soundDiseaseMap = {
    "চিও চিও শব্দ": "শ্বাসকষ্ট বা অ্যাজমা",
    "বিলম্বিত হার্টবিট শব্দ": "নিম্ন রক্তচাপ",
    "দ্রুত হার্টবিট শব্দ": "উচ্চ রক্তচাপ",
    "শো শো শব্দ": "ব্রংকাইটিস বা নিউমোনিয়া",
    "গড় গড় শব্দ": "কাশি বা ঠান্ডা বা কফ",
    "চাপা বা বন্ধ শব্দ": "প্লুরিসি রোগ",  
    "হালুমম.. হালুম শব্দ": "ফুসফুসের প্রদাহ",
    "খস খস শব্দ": "ডাই প্লুরিসি রোগ",
    "চড় চড় শব্দ": "প্লুরিসি রোগ",
    "শন শন শব্দ": "ব্রংকাইটিস বা নিউমোনিয়া বা কফ",
    "কিচিরমিচির শব্দ": "শ্বাসকষ্ট বা নিউমোনিয়া",
    "শাঁ শা শব্দ ": "ব্রংকাইটিস বা নিউমোনিয়া",
    "ক্যাঁচ ক্যাঁচ শব্দ": "প্লুরিসি রোগ",
    // Add more sounds and diseases here
  };

  // Array of treatment options
  var diseaseTreatmentMap = {
    "শ্বাসকষ্ট বা অ্যাজমা": ["ইনহেলার", "ডোজাপ্রোপাম ক্লাইড আরজেন্টাইন একাডিল প্রিটিনেটের"],
    "নিম্ন রক্তচাপ": ["আটেনলোল", "ক্যাপটোপ্রিল"],
    "উচ্চ রক্তচাপ": ["লিসিনোপ্রিল", "মেথাডোপ্রামাইন"],
    "ব্রংকাইটিস বা নিউমোনিয়া": ["অ্যান্টিবায়োটিক", "স্টেরয়ড"],
    "কাশি বা ঠান্ডা বা কফ": ["কাফলুব", "ড্রায় কাফলুব সিরাপ"],
    "প্লুরিসি রোগ": ["অ্যান্টিবায়োটিক", "প্যারাসিটামল"],
    "ফুসফুসের প্রদাহ": ["স্টেরয়ড", "ব্রনকোডাইলাটর"],
    "ডাই প্লুরিসি রোগ": ["অ্যান্টিবায়োটিক", "প্যারাসিটামল"],
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
  
