$('#FileForm').submit(function (e) {
    e.preventDefault();
    const FileInput = document.getElementById('FileInput');
    const file = FileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const FileContent = event.target.result;
            displayFileContent(FileContent);
        };
        reader.readAsText(file);
    }
    else {
        alert("Please select a text file.")
    }
});

function displayFileContent(content){
    const FileContent1= document.getElementById('FileContent');
    FileContent1.innerHTML = `<pre>${content}</pre>`
}