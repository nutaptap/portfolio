const languageData = {
    en: {
        navigation:{
            home: 'Home',
            work: 'Work',
            about: 'About',
            button: 'CONTACT'
        },
        intro: {
            greeting: 'Hi, my name is',
            subtitle: "I'm a creative frontend developer",

        },
        skills: {
            title: 'Skills',
            responsive: 'Responsive Design',
            accessibility: 'Accessibility'
        },
        contact: {
            title: 'Get in touch',
            firstHeading: 'Wether you want to ask any questions or just want to say hi,',
            secondHeading: 'My inbox is always open!',
            button: 'SEND ME A MESSAGE'
        },
        about: {
            title: 'About',
            text1: "Hi there, I'm a self-taught frontend developer.",
            text2: "I got interested in development because I’ve always been into building things and loved the idea of creating websites and applications.",
            text3: "I'm proficient in HTML, CSS, JavaScript and Typescript, and enjoy working with frameworks like React.",
            text4: "I'm passionate about creating apps that can improve people's lives and adding little details that make the experience more enjoyable for everyone.",
            text5: "I'm always excited to learn new things and improve my skills. When I'm not coding, you can find me making illustrations or hanging out with my cat Eris."
        },
        projectsTitle: 'Work', 
            projects: [
                {
                    title: 'Portfolio',
                    text: "My portfolio website is a showcase of my projects and skills. Built with Typescript and React, it features dynamic animations on scroll and allows users to switch between languages. This was my first project using Typescript, and I'm really happy of how it turned out.",
                    image: "./portfolio.png",
                    tags: ["Typescript", "React"],
                    link: ""
                },{
                    title: 'Habit tracker',
                    text: "The Habit Tracker app helps you replace unhealthy habits with positive ones. It is connected to Firebase for secure authentication and data storage, so it allows you to track your progress and set daily goals. Whether you want to drink more water, exercise regularly, or read more, the Habit Tracker app can help you build healthy habits and stay motivated.",
                    image: "./cook-that.png",
                    tags: ["Typescript", "React", "Firebase"],
                    link: ""
                },{
                    title: 'Pomoglobo',
                    text: "Pomoglobo is the productivity app that will help you minimize distractions and unlock your creativity. With a to-do section for managing your tasks, different background sounds to block out environmental noise, and a pomodoro timer to keep you on track, Pomoglobo is the perfect productivity companion. Whether you're studying or working, pomoglobo can help you stay focused and achieve your goals.",
                    image: "./pomoglobo.png",
                    tags: ["Javascript", "Freesound API"],
                    link: "https://nutaptap.github.io/pomoglobo/"
                },{
                    title: 'Cook that!',
                    text: "I developed a web application that suggests delicious recipes based on the user's dietary preferences. I used JavaScript and the Spoonacular API to retrieve highly-rated and quick-to-make recipes, select one of them randomly, and render it.",
                    image: "./cook-that.png",
                    tags: ["Javascript", "Spoonacular API"],
                    link: "https://nutaptap.github.io/cook-that/"
                }
            ]
    },
    es: {
        navigation:{
            home: 'Inicio',
            work: 'Proyectos',
            about: 'Sobre mi',
            button: 'CONTACTO'
        },
        intro: {
            greeting: 'Hola, soy',
            subtitle: "Soy una desarrolladora frontend",
        },
        skills: {
            title: 'Habilidades',
            responsive: 'Diseño Adaptable',
            accessibility: 'Accesibilidad'
        },
        contact: {
            title: 'Contacto',
            firstHeading: 'Tanto si quieres hacerme alguna pregunta o simplemente saludar,',
            secondHeading: "No dudes en escribirme!",
            button: "ESCRIBEME"
        },
        about: {
            title: 'Sobre mi',
            text1: "Hola, soy una desarrolladora frontend autodidacta.",
            text2: "Me interesé por el desarrollo porque siempre me ha gustado construir cosas y me atrajo la idea de crear sitios web y aplicaciones.",
            text3: "Domino HTML, CSS, JavaScript y Typescript, y disfruto trabajando con frameworks como React.",
            text4: "Me apasiona crear aplicaciones que puedan mejorar la vida de las personas y agregar pequeños detalles que hagan la experiencia más agradable para todos.",
            text5: "Siempre estoy motivada para aprender cosas nuevas y mejorar mis habilidades. Cuando no estoy programando, me puedes encontrar haciendo ilustraciones o pasando tiempo con mi gata Eris."
        },
        projectsTitle: 'Proyectos',
        projects: [
            {
                title: 'Portfolio',
                text: "My portfolio website is a showcase of my projects and skills. Built with Typescript and React, it features dynamic animations on scroll and allows users to switch between languages. This was my first project using Typescript, and I'm really happy of how it turned out.",
                image: "./portfolio.png",
                tags: ["Typescript", "React"],
                link: ""
            },{
                title: 'Habit tracker',
                text: "The Habit Tracker app helps you replace unhealthy habits with positive ones. It is connected to Firebase for secure authentication and data storage, so it allows you to track your progress and set daily goals. Whether you want to drink more water, exercise regularly, or read more, the Habit Tracker app can help you build healthy habits and stay motivated.",
                image: "./cook-that.png",
                tags: ["Typescript", "React", "Firebase"],
                link: ""
            },{
                title: 'Pomoglobo',
                text: "Pomoglobo is the productivity app that will help you minimize distractions and unlock your creativity. With a to-do section for managing your tasks, different background sounds to block out environmental noise, and a pomodoro timer to keep you on track, Pomoglobo is the perfect productivity companion. Whether you're studying or working, pomoglobo can help you stay focused and achieve your goals.",
                image: "./pomoglobo.png",
                tags: ["Javascript", "Freesound API"],
                link: "https://nutaptap.github.io/pomoglobo/"
            },{
                title: 'Cook that!',
                text: "Need some inspiration in the kitchen? CookThat is here to help! This app suggests delicious recipes based on your preferences and filters out any dishes that will take too long to prepare. So whether you're short on time or just want a hassle-free meal, CookThat has you covered.",
                image: "./cook-that.png",
                tags: ["Javascript", "Spoonacular API"],
                link: "https://nutaptap.github.io/cook-that/"
            }
        ]
        
    },
    ca: {
        navigation:{
            home: 'Inici',
            work: 'Projectes',
            about: 'Sobre mi',
            button: 'CONTACTE'
        },
        intro: {
            greeting: 'Hola, em dic',
            subtitle: "Soc una desenvolupadora frontend",
        },
        skills: {
            title: 'Habilitats',
            responsive: 'Disseny Adaptatiu',
            accessibility: 'Accesibilitat'
        },
        contact: {
            title: 'Contacte',
            firstHeading: 'Tant si vols fer-me alguna pregunta o simplement saludar,',
            secondHeading: "No dubtis en escriure'm!",
            button: "ESCRIU-ME"
        },
        about: {
            title: 'Sobre mi',
            text1: "Hola, sóc una desenvolupadora frontend autodidacta.",
            text2: "Em vaig interessar per la programació perquè sempre m'ha agradat construir coses i em va atraure la idea de crear llocs web i aplicacions.",
            text3: "Domino HTML, CSS, JavaScript i Typescript, i gaudeixo treballant amb frameworks com React.",
            text4: "M'apassiona crear aplicacions que puguin millorar la vida de les persones i afegir petits detalls que facin l'experiència més agradable per a tothom.",
            text5: "Sempre estic motivada per aprendre coses noves i millorar les meves habilitats. Quan no estic programant, em pots trobar fent il·lustracions o passant temps amb la meva gata Eris."
        },
        projectsTitle: 'Projectes',
        projects: [
            {
                title: 'Portfolio',
                text: "My portfolio website is a showcase of my projects and skills. Built with Typescript and React, it features dynamic animations on scroll and allows users to switch between languages. This was my first project using Typescript, and I'm really happy of how it turned out.",
                image: "./portfolio.png",
                tags: ["Typescript", "React"],
                link: ""
            },{
                title: 'Habit tracker',
                text: "The Habit Tracker app helps you replace unhealthy habits with positive ones. It is connected to Firebase for secure authentication and data storage, so it allows you to track your progress and set daily goals. Whether you want to drink more water, exercise regularly, or read more, the Habit Tracker app can help you build healthy habits and stay motivated.",
                image: "./cook-that.png",
                tags: ["Typescript", "React", "Firebase"],
                link: ""
            },{
                title: 'Pomoglobo',
                text: "Pomoglobo is the productivity app that will help you minimize distractions and unlock your creativity. With a to-do section for managing your tasks, different background sounds to block out environmental noise, and a pomodoro timer to keep you on track, Pomoglobo is the perfect productivity companion. Whether you're studying or working, pomoglobo can help you stay focused and achieve your goals.",
                image: "./pomoglobo.png",
                tags: ["Javascript", "Freesound API"],
                link: "https://nutaptap.github.io/pomoglobo/"
            },{
                title: 'Cook that!',
                text: "I developed a web application that suggests delicious recipes based on the user's dietary preferences. I used JavaScript and the Spoonacular API to retrieve highly-rated and quick-to-make recipes, select one of them randomly, and render it.",
                image: "./cook-that.png",
                tags: ["Javascript", "Spoonacular API"],
                link: "https://nutaptap.github.io/cook-that/"
            }
        ]
        
    }
}

export default languageData