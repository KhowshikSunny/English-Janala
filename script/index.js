const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayLesson(json.data));
};
const displayLesson = (lessons) => {
  // step 1 : get the container& empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // step 2 : get into every lesson
  for (let lesson of lessons) {
    
    // step 3 : create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    
              <button class="btn btn-outline btn-primary"
                ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button
              >
            
    `;
    // step 4 : append into container
    levelContainer.append(btnDiv)
  }

  console.log(lessons);
};
loadLessons();
