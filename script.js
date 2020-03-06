const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.contentCourse')

for (let course of courses){
  course.addEventListener('click', function(){
    const videoId = course.getAttribute('id')
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src =`https://www.youtube.com/embed/${videoId}`;
  })
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src='';
})

