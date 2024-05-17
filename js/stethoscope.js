
  // Array of sounds and corresponding diseases
  var soundDiseaseMap = {
    "chirping": "শ্বাসকষ্ট বা অ্যাজমা",
    "rapid": "হার্টের সমস্যা",
    "sho": "ব্রংকাইটিস বা নিউমোনিয়া",
    "gargle": "কাশি বা ঠান্ডা",
    "muffled": "প্লুরিসি রোগ",
    "wheezing": "অ্যাসথমা বা সিওপি‌ডি",
    "cough": "ডাই প্লুরিসি রোগ",
    "crackling": "হালুর প্লুরিসি রোগ",
    "rattling": "খাঁটি আওয়াজ (অ্যাসথমা বা প্রদাহ)",
    "wet": "নাম শব্দ (নিউমোনিয়া)",
    "dry": "শুষ্ক শব্দ (সিওপি‌ডি বা ব্রংকাইটিস)",
    "stridor": "স্ট্রাইডার শব্দ (কনজেশনের হালকা দিকে)",
    "pleural_friction_rub": "প্লুরাল ফ্রিকশন রাব (প্লুরাল নিকটস্থ জন্য কাঁচা শব্দ)",
    "clicking": "ক্লিকিং শব্দ (ব্রংকিটিস বা নিউমোনিয়া)",
    "normal": "নরমাল শব্দ",
    // Add more sounds and diseases here
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
  }

  // Populate the dropdown with sounds on page load
  populateSounds();

  // Event listener to display disease information on sound selection
  document.getElementById('soundSelect').addEventListener('change', displayDisease);
