const data = localStorage.getItem("users");
const users = JSON.parse(data);
const Main = document.querySelector("main");
let content = '';

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
      const escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return escapeMap[match];
    });
  }
  

users.forEach((data) => {
    content += `
      <div class="card">
            <div class="background-image">
                <img src=${data.image.backgroundImage} alt="" loading="lazy">
            </div>

            <div class="profile-data">
                <div class="img">
                    <img src=${data.image.profileImage} alt="" loading="lazy">
                    
                    <div class="header-title" style="opacity: .8;">
                        <h1>
                           ${data.name}
                        </h1>
                        <p class="dark-font" style="margin-top: .2em;">
                            ${data.description}
                        </p>
                    </div>
                </div>


                <div class="status flex">
                    <div role="post-status" class="post-status flex" aria-hidden="false">
                        <div class="status_info friend">
                            <p><b>${data.status.friends}</b></p>
                            <p class="dark-font">Friends</p>
                        </div>
                        <div class="status_info photo">
                            <p><b>${data.status.photos}</b></p>
                            <p class="dark-font">photo</p>
                        </div>
                        <div class="status_info views">
                            <p><b>${data.status.views}</b></p>
                            <p class="dark-font">Views</p>
                        </div>
                    </div>
               
                    <div role="skill-description" class="skill-description" aria-hidden="true">
                        <p class="dark-font" style="--dark-font: .87rem">Lorem ipsum dolor sit amet consectetur,us perspiciatis expedita quas.</p>
                    </div>
                    
                </div>  

                <div role="post-status" class="icons flex" aria-hidden="false">
                    <div class="icon_box">
                        <i class="ri-emoji-sticker-line"></i>
                    </div>
                    <div class="icon_box">
                        <i class="ri-question-answer-line"></i>
                    </div>
                </div>

                <div role="skill-description" class="friendStatus" aria-hidden="true" style="flex-direction: column;">
                    <p class="dark-font">
                        Friend Since:
                    </p>
                    <p><b>December 2014</b></p>
                </div>

                <div class="tab-list" style="--gap: .5em;">
                    <ul class="flex">
                        <li class="tab-list_dot" tabindex="0" aria-selected="true" aria-controls="post-status"></li>
                        <li class="tab-list_dot" tabindex="0" aria-selected="false" aria-controls="skill-description"></li>
                    </ul>
                </div>
            </div>

        </div>
    `
})

Main.innerHTML = content;