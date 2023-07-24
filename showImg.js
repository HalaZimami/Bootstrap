$('#FileForm').submit(function (e) {
    e.preventDefault();
    const FileInput = document.getElementById('FileInput');
    const file = FileInput.files[0];
    if (file) {
        const reader = new FileReader();
        if (file.type === 'text/plain') {
            reader.onload = function (event) {
                const FileContent = event.target.result;
                displayFileContent(FileContent);
            };
            reader.readAsText(file);
        } else {
            reader.onload = function (event) {
                const FileContent = event.target.result;
                displayImg(FileContent);
            };
            reader.readAsDataURL(file);
        }
        }
        else {
        alert("Please select a text file.")
        }
});

function displayFileContent(content) {
    const FileContent1 = document.getElementById('FileContent');
    FileContent1.innerHTML = `<pre>${content}</pre>`
}
function displayImg(content) {
    const FileContent1 = document.getElementById('FileContent');
    FileContent1.innerHTML = `<img src="${content}"></img>`
}



// if (file.type === 'text/txt') {
//     reader.onload = function (event) {
//         const FileContent = event.target.result;
//         displayFileContent(FileContent);
//     };
//     reader.readAsText(file);
// } else {
//     reader.onload = function (event) {
//         const FileContent = event.target.result;
//         displayImg(FileContent);
//     };
//     reader.readAsDataURL(file);
// }
// }
// else {
// alert("Please select a text file.")
// }