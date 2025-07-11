const cpuSelect = document.getElementById('cpu');
const motherboardSelect = document.getElementById('motherboard');
const gpuSelect = document.getElementById('gpu');
const ramSelect = document.getElementById('ram');
const storageSelect = document.getElementById('storage');
const psuSelect = document.getElementById('psu');
const caseSelect = document.getElementById('case');

const message = document.getElementById('compatibility-message');
const startBuildSection = document.getElementById('start-build');
const showBuildLink = document.getElementById('show-build-section');

const compatibility = {
  intel_i3: ['ASRock B460M', 'Gigabyte B460M', 'MSI B460M'],
  intel_i5: ['MSI B560', 'ASUS B460', 'Gigabyte B560M'],
  intel_i7: ['ASUS Z590', 'Gigabyte Z590', 'MSI Z590'],
  intel_i9: ['ASUS Z690', 'MSI Z690', 'Gigabyte Z690 AORUS'],
  amd_ryzen3: ['ASUS B450', 'MSI B450 Tomahawk', 'Gigabyte B450M DS3H'],
  amd_ryzen5: ['MSI B550', 'ASUS X570', 'Gigabyte B550 AORUS'],
  amd_ryzen7: ['ASUS X570', 'MSI X570 Tomahawk', 'Gigabyte X570 AORUS'],
  amd_ryzen9: ['ASUS TRX40', 'MSI Creator TRX40', 'Gigabyte TRX40 AORUS']
};
const prices = {
  cpu: {
    intel_i3: 100,
    intel_i5: 150,
    intel_i7: 250,
    intel_i9: 400,
    amd_ryzen3: 90,
    amd_ryzen5: 160,
    amd_ryzen7: 280,
    amd_ryzen9: 450
  },
  motherboard: {
    'ASRock B460M': 90,
    'Gigabyte B460M': 100,
    'MSI B460M': 110,
    'MSI B560': 120,
    'ASUS B460': 115,
    'Gigabyte B560M': 125,
    'ASUS Z590': 180,
    'Gigabyte Z590': 185,
    'MSI Z590': 190,
    'ASUS Z690': 200,
    'MSI Z690': 210,
    'Gigabyte Z690 AORUS': 220,
    'ASUS B450': 80,
    'MSI B450 Tomahawk': 90,
    'Gigabyte B450M DS3H': 85,
    'MSI B550': 130,
    'ASUS X570': 170,
    'Gigabyte B550 AORUS': 140,
    'MSI X570 Tomahawk': 175,
    'Gigabyte X570 AORUS': 180,
    'ASUS TRX40': 250,
    'MSI Creator TRX40': 260,
    'Gigabyte TRX40 AORUS': 270
  },
  gpu: {
    nvidia_rtx3060: 300,
    nvidia_rtx3070: 450,
    nvidia_rtx3080: 600,
    amd_rx6600: 250,
    amd_rx6700: 350,
    amd_rx6800: 500
  },
  ram: {
    '8gb_ddr4': 40,
    '16gb_ddr4': 70,
    '32gb_ddr4': 120,
    '16gb_ddr5': 90,
    '32gb_ddr5': 160,
    '64gb_ddr5': 280
  },
  storage: {
    '500gb_ssd': 50,
    '1tb_ssd': 80,
    '2tb_ssd': 140,
    '1tb_hdd': 40,
    '2tb_hdd': 60,
    '4tb_hdd': 90
  },
  psu: {
    '500w': 50,
    '650w': 70,
    '750w': 90,
    '850w': 110,
    '1000w': 130,
    '1200w': 160
  },
  case: {
    'nzxt_h510': 80,
    'corsair_4000d': 90,
    'fractal_define_r6': 100,
    'phanteks_eclipse_p400a': 85,
    'lian_li_pc_o11': 120
  }
};
// Show the build section and scroll smoothly when nav link clicked
showBuildLink.addEventListener('click', (e) => {
  e.preventDefault();
  startBuildSection.style.display = 'block';
  startBuildSection.scrollIntoView({ behavior: 'smooth' });
});

cpuSelect.addEventListener('change', () => {
  const selectedCPU = cpuSelect.value;
  motherboardSelect.innerHTML = '';
  message.textContent = '';

  if (compatibility[selectedCPU]) {
    motherboardSelect.disabled = false;

    compatibility[selectedCPU].forEach(board => {
      const option = document.createElement('option');
      option.value = board;
      option.textContent = board;
      motherboardSelect.appendChild(option);
    });

  } else {
    motherboardSelect.disabled = true;
    const option = document.createElement('option');
    option.textContent = '--Select CPU First--';
    motherboardSelect.appendChild(option);

    message.textContent = 'Please select a valid CPU.';
  }
});

 document.getElementById('build-form').addEventListener('submit', function (e) {
      e.preventDefault();

      const cpuVal = cpuSelect.value;
      const motherboardVal = motherboardSelect.value;
      const gpuVal = gpuSelect.value;
      const ramVal = ramSelect.value;
      const storageVal = storageSelect.value;
      const psuVal = psuSelect.value;
      const caseVal = caseSelect.value;

      const total =
        (prices.cpu[cpuVal] || 0) +
        (prices.motherboard[motherboardVal] || 0) +
        (prices.gpu[gpuVal] || 0) +
        (prices.ram[ramVal] || 0) +
        (prices.storage[storageVal] || 0) +
        (prices.psu[psuVal] || 0) +
        (prices.case[caseVal] || 0);

      alert(`Your Build looks great! || Build Summary:

CPU: ${cpuSelect.options[cpuSelect.selectedIndex].text} ($${prices.cpu[cpuVal] || 0})
Motherboard: ${motherboardVal} ($${prices.motherboard[motherboardVal] || 0})
GPU: ${gpuSelect.options[gpuSelect.selectedIndex].text} ($${prices.gpu[gpuVal] || 0})
RAM: ${ramSelect.options[ramSelect.selectedIndex].text} ($${prices.ram[ramVal] || 0})
Storage: ${storageSelect.options[storageSelect.selectedIndex].text} ($${prices.storage[storageVal] || 0})
Power Supply: ${psuSelect.options[psuSelect.selectedIndex].text} ($${prices.psu[psuVal] || 0})
Case: ${caseSelect.options[caseSelect.selectedIndex].text} ($${prices.case[caseVal] || 0})

Total Estimated Cost: $${total}`);

});
