export const SECTION_NAMES = {
  CONTENT: 'contentdesign',
  COUNSELLING: 'counselling',
  DARKHORSE: 'darkhorse',
  FOODHUB: 'foodhub'
}

export const SECTIONS = {
  [SECTION_NAMES.COUNSELLING]: [
    {
      img: 'counselling_main.png',
      title: 'Counselling Centre',
      text: '',
    },
    {
      img: 'counselling_main.png',
      title: 'Conception',
      text: 'In the midst of a bustling city, where skyscrapers pierced the sky and people hurried along crowded streets, a sense of purpose prevailed. The hum of commerce and the rhythm of daily life echoed through the urban landscape. Amidst the noise, individuals pursued their dreams, forged connections, and contributed to the tapestry of a modern society. In this bustling metropolis, the human spirit persevered, determined to make its mark on the world',
    },
    {
      img: 'counselling_ideation.png',
      title: 'Ideation',
      text: 'Beneath the tranquil canopy of an ancient forest, a symphony of nature unfolded. Sunlight filtered through the lush foliage, casting dappled shadows on the forest floor. Birds sang melodies, and gentle breezes whispered secrets among the trees. Here, the delicate balance of life thrived, with myriad creatures harmoniously coexisting. Each rustling leaf and babbling brook told a story of resilience and interconnectedness, a testament to the enduring beauty and complexity of the natural world, far removed from the hustle and bustle of urban life.',
   
    },
    {
      img: 'counselling_execution_1.png',
      title: 'Execution',
      text:  'Beneath a vast, star-studded canopy, the night unveiled its mysteries. The cosmos, an infinite canvas of twinkling lights, whispered tales of distant galaxies. On Earth, in the stillness of the night, crickets sang in unison, serenading the world. A gentle breeze rustled leaves, carrying the fragrance of the land. In this nocturnal symphony, humans gazed upward, humbled by the grandeur of the universe, and felt a deep connection to the cosmos that stretched beyond their own existence.',
      horizontal: true,
    },
    {
      img: 'counselling_execution_2.png',
      title: 'Execution',
      text:  'Beneath a vast, star-studded canopy, the night unveiled its mysteries. The cosmos, an infinite canvas of twinkling lights, whispered tales of distant galaxies. On Earth, in the stillness of the night, crickets sang in unison, serenading the world. A gentle breeze rustled leaves, carrying the fragrance of the land. In this nocturnal symphony, humans gazed upward, humbled by the grandeur of the universe, and felt a deep connection to the cosmos that stretched beyond their own existence.',
      horizontal: true,
    },
    {
      img: 'counselling_execution_3.png',
      title: 'Execution',
      text:  'Beneath a vast, star-studded canopy, the night unveiled its mysteries. The cosmos, an infinite canvas of twinkling lights, whispered tales of distant galaxies. On Earth, in the stillness of the night, crickets sang in unison, serenading the world. A gentle breeze rustled leaves, carrying the fragrance of the land. In this nocturnal symphony, humans gazed upward, humbled by the grandeur of the universe, and felt a deep connection to the cosmos that stretched beyond their own existence.',
      horizontal: true,
    }
  ],
  [SECTION_NAMES.CONTENT]: [
    {
      img:'content_design_main.png',
      title: 'Content Design',
      text: ''
    },
    {
      img: 'content_design_main.png',
      title: 'Conception',
      text: `These pieces of content design were done for my Content Design elective at the University of Alberta. 

      As compared to many other mediums within the UI/UX spectrum, Content Design is a very introspective process. This project was to find my niche.
      
      I started with a simple brainstorm and Venn Diagram consisting of three questions: ‘What am I good at?’, ‘What do people need? ‘, and ‘What do I like to do?’. As a result, I realized that I have a very specific background in music creation, mental health, and design. I grew up playing in Punk bands and toured for years which gives me a very specific voice.`,
  
    },
    {
      img: 'content_design_ideation.png',
      title: 'Ideation',
      text: `After finding my niche, I developed 40 content ideas in 10 minutes using a technique I learned for brainstorming content. I developed multiple designs as shown below. All of them were based around some form of music or Punk culture. The blog on the lefthand side was written about a show I produced for Telus called Then/Now. The blog is all about the feeling one gets sitting in a soundcheck waiting for a show. I felt that this is important for this specific audience as many of them are ex-Punk kids and spent much of their time at shows in their youth. `,
    },
    {
      img: 'content_design_execution.png',
      title: 'Execution',
      text: `After some refinement of my audience and more brainstorming, I developed the piece below. It is a multimedia segment on my most popular lyrics as a songwriter. The overall goal was to onboard new fans to the music and give older ones insight into some of the lyrics they know and love. The users I identified in the research stage are very into lyrics and acoustic music so it was a natural place to start. 

      This piece introduces the audience to my niche and gives them a chance to dive deeper  and explore my brand. It also opens up opportunities to interact with the audience and drive sales/longterm users to my projects in the future. `,
      horizontal: true,
      video: true,
      videoUrl: 'https://www.youtube.com/embed/0osFtmN8NcQ?si=AXU-fG5zfkOuZ3dX?autoplay=1&loop=1',
    }
  ],
  [SECTION_NAMES.DARKHORSE]: [
    {
      img: 'darkhorse_main.png',
      title: 'Darkhorse Emergency',
      text: ''
    },
    {
      img: 'darkhorse_main.png',
      title: 'Conception',
      text: 'Darkhorse Emergency is an offshoot of the Edmonton, AB based company Darkhorse Analytics. Darkhorse Emergency provides analytics to many Canadian first response units such as Fire Services and Ambulances. My UX Team and I were tasked with a total design overhaul of their Deployment tool which is mainly used for planning and lobbying for funds to stakeholders. I was tasked with redesigning the dashboard. ',
   
    },
    {
      img: 'darkhorse_ideation.png',
      title: 'Ideation',
      text: `Darkhorse Emergency knew that their current application was unclear and somewhat ‘janky’. My first order of business was to conduct a Heuristics Analysis on the dashboard. After this, my team and I ran Card Sorting Workshops with potential users and analysts from the company to gain some generative knowledge on how we might empower new users and onboard them in an intuitive and accessible way.

      The data from the users as well as the Analyst suggested that the Statistics and Drop Down menus were in the wrong places so they were swapped. We added a much more visible Compare Button as that it now one of the main features of the app.`,
 
    },
    {
      img: 'darkhorse_execution.png',
      title: 'Execution',
      text: 'Clear, concise, and accessible. In the final design, you can see that all of the colour and buttons have been designed. This version meets all accessibility standards as well as needs very little explanation for new users. The main actions a user can perform are on the left side of the page while the statistics are found up top. It encourages users to add a station or compare the scenario that they have created. This meets and improves on Darkhorse Emergency’s brand guidelines as well as meets accessibility standards.',
      bg: true,
    }
  ],
  [SECTION_NAMES.FOODHUB]: [
    {
      img: 'foodhub_main.png',
      title: 'Foodhub',
      text: ''
    },
    {
      img: 'foodhub_main.png',
      title: 'Conception',
      text: `Food Hub was an imaginary restaurant delivery business created for one of my classes at University of Alberta. Food Hub is a food delivery app that was developed specifically for large group orders such as office parties, luncheons, etc.

      I started the research process by performing user interviews with potential users. I narrowed it down to younger working professionals who may be expected to order lunch for their office regularly.
      
      After conducting a group of fifteen interviews, I came back with my team and developed two user personas to cater our designs to.`,
  
    },
    {
      img: 'foodhub_ideation.png',
      title: 'Ideation',
      text: `Once the users were specified and their needs were identified, my team and I moved onto creating LoFi Wireframes of the app. They were originally created on Miro, then I redesigned them in Figma. The one shown below is one of six total wireframes that were designed. 

      We realized that the design had to be easy to use as well as easy to share with others. We wanted the entire ordering process to be completely done in the app. As seen below, users can choose up to three restaurants to order from and send it to their friends to choose their meals. Then, the user can either pay themselves or everyone in the group can pay separately. It was important to have multiple styles of ordering to make eating with large groups easy. ` },
    {
      img: 'foodhub_execution_1.png',
      title: 'Execution',
      text: `My course only required that I went up to LoFi Wireframes but I decided to create HiFi Wireframes as a personal project. Here, we see that I chose to colour it in a way that was fun but still professional. I chose to give it slight aspects of a diner while still keeping it clear and concise to read.
 
      The final design meets all of the Accessibility Standards. It is easy to read and navigate but also pleasing to the eye. I chose not to create a desktop version as most of the users did not feel that they would use a desktop when they have access to their phones. `,
      horizontal: true
    },
    {
      img: 'foodhub_execution_2.png',
      title: 'Execution',
      text: `My course only required that I went up to LoFi Wireframes but I decided to create HiFi Wireframes as a personal project. Here, we see that I chose to colour it in a way that was fun but still professional. I chose to give it slight aspects of a diner while still keeping it clear and concise to read.
 
      The final design meets all of the Accessibility Standards. It is easy to read and navigate but also pleasing to the eye. I chose not to create a desktop version as most of the users did not feel that they would use a desktop when they have access to their phones. `,
      horizontal: true
    },
    {
      img: 'foodhub_execution_3.png',
      title: 'Execution',
      text: `My course only required that I went up to LoFi Wireframes but I decided to create HiFi Wireframes as a personal project. Here, we see that I chose to colour it in a way that was fun but still professional. I chose to give it slight aspects of a diner while still keeping it clear and concise to read.
 
      The final design meets all of the Accessibility Standards. It is easy to read and navigate but also pleasing to the eye. I chose not to create a desktop version as most of the users did not feel that they would use a desktop when they have access to their phones. `,
      horizontal: true
    }
  ]
}

export const SECTION_TITLES = {
  [SECTION_NAMES.COUNSELLING]: 'Counselling Centre',
  [SECTION_NAMES.CONTENT]: 'Content Design',
  [SECTION_NAMES.DARKHORSE]: 'Darkhorse Emergency',
  [SECTION_NAMES.FOODHUB]: 'Foodhub'
}

export const SECTION_SUBTITLES = {
  conception: 'Conception',
  ideation: 'Ideation',
  execution: 'Execution'
}

export const SECTION_DESCRIPTIONS = {
  [SECTION_NAMES.CONTENT]: {
    conception: `These pieces of content design were done for my Content Design elective at the University of Alberta. 

        As compared to many other mediums within the UI/UX spectrum, Content Design is a very introspective process. This project was to find my niche.
        
        I started with a simple brainstorm and Venn Diagram consisting of three questions: ‘What am I good at?’, ‘What do people need? ‘, and ‘What do I like to do?’. As a result, I realized that I have a very specific background in music creation, mental health, and design. I grew up playing in Punk bands and toured for years which gives me a very specific voice.`,
    ideation: `After finding my niche, I developed 40 content ideas in 10 minutes using a technique I learned for brainstorming content. I developed multiple designs as shown below. All of them were based around some form of music or Punk culture. The blog on the lefthand side was written about a show I produced for Telus called Then/Now. The blog is all about the feeling one gets sitting in a soundcheck waiting for a show. I felt that this is important for this specific audience as many of them are ex-Punk kids and spent much of their time at shows in their youth. `,
    execution: `After some refinement of my audience and more brainstorming, I developed the piece below. It is a multimedia segment on my most popular lyrics as a songwriter. The overall goal was to onboard new fans to the music and give older ones insight into some of the lyrics they know and love. The users I identified in the research stage are very into lyrics and acoustic music so it was a natural place to start. 

    This piece introduces the audience to my niche and gives them a chance to dive deeper  and explore my brand. It also opens up opportunities to interact with the audience and drive sales/longterm users to my projects in the future. `
  },
  [SECTION_NAMES.COUNSELLING]: {
    conception:
      'In the midst of a bustling city, where skyscrapers pierced the sky and people hurried along crowded streets, a sense of purpose prevailed. The hum of commerce and the rhythm of daily life echoed through the urban landscape. Amidst the noise, individuals pursued their dreams, forged connections, and contributed to the tapestry of a modern society. In this bustling metropolis, the human spirit persevered, determined to make its mark on the world',
    ideation:
      'Beneath the tranquil canopy of an ancient forest, a symphony of nature unfolded. Sunlight filtered through the lush foliage, casting dappled shadows on the forest floor. Birds sang melodies, and gentle breezes whispered secrets among the trees. Here, the delicate balance of life thrived, with myriad creatures harmoniously coexisting. Each rustling leaf and babbling brook told a story of resilience and interconnectedness, a testament to the enduring beauty and complexity of the natural world, far removed from the hustle and bustle of urban life.',
    execution:
      'Beneath a vast, star-studded canopy, the night unveiled its mysteries. The cosmos, an infinite canvas of twinkling lights, whispered tales of distant galaxies. On Earth, in the stillness of the night, crickets sang in unison, serenading the world. A gentle breeze rustled leaves, carrying the fragrance of the land. In this nocturnal symphony, humans gazed upward, humbled by the grandeur of the universe, and felt a deep connection to the cosmos that stretched beyond their own existence.'
  },
  [SECTION_NAMES.DARKHORSE]: {
    conception:
      'Darkhorse Emergency is an offshoot of the Edmonton, AB based company Darkhorse Analytics. Darkhorse Emergency provides analytics to many Canadian first response units such as Fire Services and Ambulances. My UX Team and I were tasked with a total design overhaul of their Deployment tool which is mainly used for planning and lobbying for funds to stakeholders. I was tasked with redesigning the dashboard. ',
    ideation: `Darkhorse Emergency knew that their current application was unclear and somewhat ‘janky’. My first order of business was to conduct a Heuristics Analysis on the dashboard. After this, my team and I ran Card Sorting Workshops with potential users and analysts from the company to gain some generative knowledge on how we might empower new users and onboard them in an intuitive and accessible way.

        The data from the users as well as the Analyst suggested that the Statistics and Drop Down menus were in the wrong places so they were swapped. We added a much more visible Compare Button as that it now one of the main features of the app.`,
    execution:
      'Darkhorse Emergency is an offshoot of the Edmonton, AB based company Darkhorse Analytics. Darkhorse Emergency provides analytics to many Canadian first response units such as Fire Services and Ambulances. My UX Team and I were tasked with a total design overhaul of their Deployment tool which is mainly used for planning and lobbying for funds to stakeholders. I was tasked with redesigning the dashboard. '
  },
  [SECTION_NAMES.FOODHUB]: {
    conception: `Food Hub was an imaginary restaurant delivery business created for one of my classes at University of Alberta. Food Hub is a food delivery app that was developed specifically for large group orders such as office parties, luncheons, etc.

        I started the research process by performing user interviews with potential users. I narrowed it down to younger working professionals who may be expected to order lunch for their office regularly.
        
        After conducting a group of fifteen interviews, I came back with my team and developed two user personas to cater our designs to.`,
    ideation: `Food Hub was an imaginary restaurant delivery business created for one of my classes at University of Alberta. Food Hub is a food delivery app that was developed specifically for large group orders such as office parties, luncheons, etc.

        I started the research process by performing user interviews with potential users. I narrowed it down to younger working professionals who may be expected to order lunch for their office regularly.
        
        After conducting a group of fifteen interviews, I came back with my team and developed two user personas to cater our designs to.`,
    execution: `My course only required that I went up to LoFi Wireframes but I decided to create HiFi Wireframes as a personal project. Here, we see that I chose to colour it in a way that was fun but still professional. I chose to give it slight aspects of a diner while still keeping it clear and concise to read.
 
        The final design meets all of the Accessibility Standards. It is easy to read and navigate but also pleasing to the eye. I chose not to create a desktop version as most of the users did not feel that they would use a desktop when they have access to their phones. `
  }
}

export const SECTION_IMAGES = {
  [SECTION_NAMES.CONTENT]: {
    main: 'content_design_main.png',
    conception: 'content_design_main.png',
    ideation: 'content_design_ideation.png',
    execution: ['content_design_execution.png']
  },
  [SECTION_NAMES.COUNSELLING]: {
    main: 'counselling_main.png',
    conception: 'counselling_main.png',
    ideation: 'content_design_ideation.png',
    execution: ['counselling_execution_1.png', 'counselling_execution_2.png', 'counselling_execution_3.png']
  },
  [SECTION_NAMES.DARKHORSE]: {
    main: 'darkhorse_main.png',
    conception: 'darkhorse_main.png',
    ideation: 'darkhorse_ideation.png',
    execution: ['darkhorse_execution.png']
  },
  [SECTION_NAMES.FOODHUB]: {
    main: 'foodhub_main.png',
    conception: 'foodhub_main.png',
    ideation: 'foodhub_ideation.png',
    execution: ['foodhub_execution_1.png', 'foodhub_execution_2.png', 'foodhub_execution_3.png']
  }
}

export const SECTION_TILE_IMAGES = {
  [SECTION_NAMES.CONTENT]: 'content_design_tile.png',
  [SECTION_NAMES.COUNSELLING]: 'counselling_tile.png',
  [SECTION_NAMES.DARKHORSE]: 'darkhorse_tile.png',
  [SECTION_NAMES.FOODHUB]: 'foodhub_tile.png'
}
