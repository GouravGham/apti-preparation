import React from 'react';
import rsAgarwal from "../images/rsagarwal.jpg";
import indiaBix from "../images/indiabix.png";
import sawaal from "../images/sawaal.jpg";

function MainBody(){
    return (
        <div className="main">
        <div id="home">
        <h3>Welcome to our Aptitude Preparation Resources</h3>
            <p>
                We are dedicated to providing you with the best resources to excel in various competitive exams and aptitude tests. Whether you're a job seeker preparing for interviews or a student aiming for academic excellence, we've got you covered.
            </p>
            </div> 
        <div id="resources">
         <div className="project">
            <img src={rsAgarwal} alt="rsagarwal" />
            
            <div className="text"> 
                <b>R.S.Agarwal</b>
                <p> 
                    Rsagarwal is a comprehensive educational book catering to the needs of Indian students preparing for various competitive exams. It offers a wide range of study materials, practice tests, and previous year question papers to help students excel in their examinations.
                </p>
            </div>
        </div>
        
        <div className="project">
            <img src={indiaBix} alt="indiabix" />
            <div className="text"> 
                <b>IndiaBix</b>
                 <p> 
                 Indiabix is a popular online platform that focuses on providing aptitude and technical interview preparation resources. It offers a vast collection of aptitude questions, reasoning puzzles, programming languages, and technical subjects, making it a valuable resource for job seekers and students preparing for campus placements.
                 </p>
            </div>
        </div>
        
        <div className="project">
            <img src={sawaal} alt="sawaal.com" />
            <div className="text"> 
                <b>sawaal.com</b>
                <p>     
                Sawaal.com is a leading Indian educational website that offers a diverse array of practice tests and academic resources for school and college students. From solving math problems to mastering science concepts, Sawaal.com provides an interactive learning experience to enhance students' understanding and performance in their studies.
                </p>
            </div>
        </div>
        </div>
        <div id="aboutUs">
        <h3>About Us:</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque, est nec imperdiet commodo, diam nisl tincidunt augue, eu porta justo diam sit amet diam. Pellentesque interdum egestas rhoncus. Suspendisse nec mattis felis. Aliquam erat volutpat. Pellentesque ac odio ut enim dignissim mattis. Nullam sodales hendrerit urna non convallis. Integer ultrices neque a libero pulvinar sodales vel at libero. Aliquam feugiat quam laoreet consequat rutrum. Aliquam pretium condimentum ante nec imperdiet. Donec non lectus auctor, euismod tortor id, aliquet leo. Mauris interdum tincidunt orci, sodales ultrices est elementum et. Nulla felis augue, fringilla lacinia pulvinar eget, consequat eget ipsum. Duis facilisis, ante nec tincidunt imperdiet, ante tortor efficitur lectus, in aliquam orci tellus sit amet risus. Vivamus hendrerit mauris id ipsum finibus ornare malesuada eget magna
            </p>
        </div>
        <div id="contact">
        <h3>Contact:</h3>
            <ul>
                <li>Email: ghamgaurav@gmail.com</li>
                <li>Twitter: <a href="https://twitter.com/gaurav_gham">@gaurav_gham</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/gourav-gham-475b57226">Gourav Gham</a></li>
            </ul>
        </div>
    </div>

    )
}

export default MainBody;