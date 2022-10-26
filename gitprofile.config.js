// gitprofile.config.js

const config = {
  github: {
    username: 'knittl', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 7, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '112968/knittl', // format: userid/username
    stackexchange: '39208/knittl', // format: userid/username
    website: 'https://knittl.github.io/gitprofile/',
    phone: '',
    email: '',
  },
  resume: {
    disabled_fileUrl: 'https://fhlug.at', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'GNU+Linux',
    'C#',
    'Java',
    'JavaScript',
    'PHP',
    'Python',
    'Shell',
    'Git',
    'Docker',
    'Kubernetes',
    'Elasticsearch',
    'MongoDB',
    'Neo4j',
    'Redis',
    'SQL',
    'k6',
  ],
  experiences: [
    {
      company: 'Dynatrace',
      position: 'Senior Software Engineer',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://dynatrace.com',
    },
    {
      company: 'eurofunk Kappacher',
      position: 'Expert Development Engineer',
      from: 'January 2019',
      to: 'September 2022',
      companyLink: 'https://eurofunk.com',
      list: [
        'Everything performance-related',
        'Spring Boot backend development',
        'Internal trainings',
      ],
    },
    {
      company: 'eurofunk Kappacher',
      position: 'Development Engineer',
      from: 'July 2013',
      to: 'December 2018',
      companyLink: 'https://eurofunk.com',
      list: ['C#/.NET development', 'Life-safety devices', 'Network protocols'],
    },
  ],
  education: [
    {
      institution: 'University of Applied Sciences Upper Austria',
      degree: 'Master of Science',
      from: '2010',
      to: '2012',
    },
    {
      institution: 'University of Applied Sciences Upper Austria',
      degree: 'Bachelor of Science',
      from: '2007',
      to: '2010',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
