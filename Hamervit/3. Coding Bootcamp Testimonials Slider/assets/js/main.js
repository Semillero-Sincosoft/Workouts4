var currentCharacter = 'Tanya'


function changeCharacterInfo() {
    if (currentCharacter === 'Tanya') {
        currentCharacter = 'John'
        document.getElementsByClassName('information')[0].style.width = 655 + 'px'
        document.getElementById('testimony').innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
        document.getElementById('name').innerHTML = 'John Tarkpor'
        document.getElementsByClassName('position')[0].innerHTML = 'Junior Front-end Developer'
        document.getElementsByTagName('img')[0].src = 'assets/images/image-john.jpg'
    } else {
        currentCharacter = 'Tanya'
        document.getElementsByClassName('information')[0].style.width = 635 + 'px'
        document.getElementById('testimony').innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
        document.getElementById('name').innerHTML = 'Tanya Sinclair'
        document.getElementsByClassName('position')[0].innerHTML = 'UX Engineer'
        document.getElementsByTagName('img')[0].src = 'assets/images/image-tanya.jpg'
    }

}