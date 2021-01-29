import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aayush kumar singh',
  subtitle: 'a Front-end web developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Hi there,i am Aayush a self taught web developer looking for an entry level poition in Organisation. ',
  paragraphTwo: 'My skill set includes HTML/CSS ,Javascipt,React js and SQL.',
  paragraphThree: 'Please have a look to some of the projects given below.',
  resume: 'https://s.docworkspace.com/d/AA0e74i5zewrmdu3ueedFA', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recipe1.png',
    title: 'Recipe Application',
    info: 'A recipe search application made using React js,it consists of search bar which fetches the data through API by typing the recipe name ,the application is totally based on functional component and hooks ',
    info2: '',
    url: 'https://recipereact1.netlify.app/',
    repo: 'https://github.com/aayush355/newrecipe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'travel1.png',
    title: 'A modern Travel Landing page',
    info: 'A fully Responsive Travel website made with React Hooks and React Router and hosted using Netlify',
    info2: '',
    url: 'https://travellandingpagereact.netlify.app/',
    repo: 'https://github.com/aayush355/EXPLORE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'Todo Application',
    info: 'This project is a single webpage containing different list items and a text area to add custom tasks and options to look for completed and uncompleted task seperately with vanilla javascript',
    info2: '',
    url: 'https://aayush355.github.io/todo-list-javascript.github.io/',
    repo: 'https://github.com/aayush355/todo-list-javascript.github.io', // if no repo, the button will not show up
  },{
    id: nanoid(),
    img: 'music1.jpg',
    title: 'Music Application',
    info: 'A music application with functionality based on React Hooks(useState,useEffect and useRef).It has play-pause and skip functinality',
    info2: '',
    url: 'https://musicplayer7.netlify.app/',
    repo: 'https://github.com/aayush355/musicapplication', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aayushsingh022@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aayush-singh-821586b9',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aayush355',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
