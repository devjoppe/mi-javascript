const allPara = document.querySelectorAll('p');

allPara.forEach(paragraph => {
    
    let content = paragraph.innerText;

    if (content.includes('success')) {
        paragraph.classList.add('success');
    } else if (content.includes('error')) {
        paragraph.classList.add('error');
    }
});