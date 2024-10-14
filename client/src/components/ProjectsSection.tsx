import TestImage from "../assets/chat-app.png";
import { GrDeploy } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import YoutubeCloneScreenshot from '../assets/youtubeClone.png'
import VideoHubBackend from '../assets/VideoHubBackend.png'
import MusicUi from '../assets/MusicUI.png'
import ECom from '../assets/E-commerce.png'
import TicTacToe from '../assets/TicTacToe.png'
import MovieSearch from '../assets/MovieSearch.png'
const projects =[
  {
    id:1001,
    projectTitle:'Youtube Frontend Clone',
    projectDescription:'This project is a YouTube clone built using React, React Router, React Redux, Redux Toolkit, and Axios for fetching data from YouTube rest API.',
    projectImage:YoutubeCloneScreenshot,
    livePreview:'https://youtube-clone-using-react-js-ui.vercel.app/',
    code:'https://github.com/NikhilPatil15/youtube-Clone-using-react-js-UI-.git'
  },
  {
    id:1002,
    projectTitle:'VideHub Backend',
    projectDescription:'The VideoHub backend API manages video uploads, user authentication, and streaming, ensuring efficient video processing and metadata handling.',
    projectImage:VideoHubBackend,
    livePreview:'https://github.com/NikhilPatil15/VideoHub-Backend.git',
    code:'https://github.com/NikhilPatil15/VideoHub-Backend.git'
  },
  {
    id:1003,
    projectTitle:'Music ui',
    projectDescription:'The Music Academy UI project is a frontend application designed to enhance Next.js skills using Acternity UI components. ',
    projectImage:MusicUi,
    livePreview:'https://music-ui-omega.vercel.app/',
    code:'https://github.com/NikhilPatil15/music-ui.git'
  },
  
  {
    id:1004,
    projectTitle:'E-commerce UI',
    projectDescription:'The E-commerce UI project is a responsive frontend application built with React, Redux, and React Router DOM, showcasing a seamless shopping experience through dynamic state management and intuitive navigation.',
    projectImage:ECom,
    livePreview:'https://simple-e-com-with-reduxtoolkit.netlify.app',
    code:'https://github.com/NikhilPatil15/simple_e-commerce_with_reduxToolkit.git'
  },
  {
    id:1005,
    projectTitle:'Movie Search',
    projectDescription:'The Movie Search project is a React application that enables users to browse and discover movies by fetching data from a movie API, showcasing skills in state managemen and responsive design.',
    projectImage:MovieSearch,
    livePreview:'https://movie-searchreact.netlify.app/',
    code:'https://github.com/NikhilPatil15/Movie-Search-with-React.git'
  },

  {
    id:1006,
    projectTitle:'Tic-Tac-Toe',
    projectDescription:'The Tic-Tac-Toe project is a simple yet engaging game developed using vanilla JavaScript, demonstrating essential concepts of game logic and DOM manipulation.',
    projectImage:TicTacToe,
    livePreview:'https://nikhilpatil15.github.io/Tic-Tac-Toe/',
    code:'https://github.com/NikhilPatil15/Tic-Tac-Toe.git'
  },


]


const ProjectsSection = () => {

  return (
    <section className="bg-customBackground text-white ">
      {/* outer div */}
      <div className="min-h-screen bg-customBackground flex  overflow-x-auto">
        <div className="m-auto md:py-[2rem] flex gap-[5rem] ">
          <h2 className="text-3xl md:text-3xl font-semibold basis-[300px] ml-[2rem] md:ml-[4rem]">
            My Projects
          </h2>
          {projects.map((item)=>(
                      <div className="rounded-xl flex flex-col flex-shrink-0 justify-start bg-customProjectBackground max-w-[400px] basis-[280px] md:basis-[400px] min-h-[350px] h-full" key={item.id} >
                      <div>
                        <img
                          src={item.projectImage}
                          alt="project 1"
                          className="rounded-xl rounded-b-none"
                        />
                      </div>
                      <div className="px-[2rem] py-[1rem] flex-1 h-full">
                        <h3 className="text-xl font-bold leading-[3rem]">{item.projectTitle}</h3>
                        <p className="text-sm text-gray-400"> {item.projectDescription}</p>
                        <div className="flex mt-auto gap-4 text-sm md:text-base items-center justify-start px-[2rem] py-[1rem] ">
                          <a href={item.livePreview} className="flex items-center gap-2 hover:text-green-500 hover:underline"><GrDeploy/>Live Preview</a>
                          <a href={item.code} className="flex items-center gap-2 hover:text-green-500 hover:underline"><FaCode/>Code</a>
                        </div>
                      </div>
                    </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
