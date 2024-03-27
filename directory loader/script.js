const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  fileList.innerHTML = ''; // Clear previous list

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const listItem = document.createElement('li');
    listItem.textContent = file.webkitRelativePath || file.name;
    fileList.appendChild(listItem);
  }
});