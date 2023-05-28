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
            subtitle: "I'm a frontend developer that loves building beautiful and user-friendly websites and applications.",

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
            text1: "Hey there, I'm Nuria, a frontend developer who's all about building cool stuff.",
            text2: "I've always had a knack for creating things, and that's what drew me to the exciting world of websites and applications.",
            text3: "HTML, CSS, and JavaScript? They're my go-to tools. I love using frameworks like React, and I'm currently diving into Typescript to level up my skills.",
            text4: "My real passion lies in crafting apps that make people's lives better, adding those special touches that enhance the user experience ✨",
            text5: "I'm constantly on the lookout for new things to learn and ways to grow. When I'm not coding, you'll find me sketching illustrations or chilling with my cat, Eris."
        },
        projectsTitle: 'Work', 
            projects: [
                {
                    title: 'Portfolio',
                    text: "I developed a portfolio using React and TypeScript to showcase my projects. I implemented the website and its routes in multiple languages and added scroll animations.",
                    image: "./portfolio.png",
                    tags: ["Typescript", "React"],
                    link: ""
                },{
                    title: 'Habit tracker',
                    text: "Currently, I'm working on a habit tracking application using React and Firebase as the backend. It allows users to create and complete daily habits and includes a control panel, progress charts, a streak counter, a best streak counter, and user authentication via Google or email/password.",
                    image: "./cook-that.png",
                    tags: ["Typescript", "React", "Firebase"],
                    link: ""
                },{
                    title: 'Pomoglobo',
                    text: "I created a productivity application with a task list, ambient sounds, and a complex timer that utilizes the Pomodoro technique. I used JavaScript and the Freesound API for the sounds and learned how to store and manage data using local storage.",
                    image: "./pomoglobo.png",
                    tags: ["Javascript", "Freesound API"],
                    link: "https://nutaptap.github.io/pomoglobo/"
                },{
                    title: 'Cook that',
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
            subtitle: "Soy una desarrolladora frontend a la que le encanta construir sitios web y aplicaciones bonitas y con una excelente experiencia de usuario.",
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
            text1: "Hola, soy Nuria, una desarrolladora frontend que está enfocada en construir cosas geniales.",
            text2: "Siempre me ha encantado crear cosas, y eso fue lo que me imulsó a adentrarme en el mundo de la programación de webs y aplicaciones.",
            text3: "¿HTML, CSS y JavaScript? Son mis herramientas principales. Me encanta utilizar frameworks como React, y actualmente estoy explorando TypeScript para mejorar mis habilidades.",
            text4: "Mi verdadera pasión radica en diseñar aplicaciones que mejoren la vida de las personas, añadiendo esos pequeños detalles que mejoran la experiencia del usuario ✨",
            text5: "Siempre estoy en busca de nuevas cosas para aprender y formas de crecer. Cuando no estoy programando, me encontrarás dibujando ilustraciones o relajándome con mi gata, Eris."
        },
        projectsTitle: 'Proyectos',
        projects: [
            {
                title: 'Portfolio',
                text: "Desarrollé un portafolio utilizando React y TypeScript para mostrar mis proyectos. Implementé la web y sus rutas en múltiples idiomas y añadí animaciones al hacer scroll.",
                image: "./portfolio.png",
                tags: ["Typescript", "React"],
                link: ""
            },{
                title: 'Habit tracker',
                text: "Actualmente estoy trabajando en una aplicación de seguimiento de hábitos usando React y Firebase como backend. Permite crear y completar hábitos diarios, cuenta con un panel de control, gráficos de progreso, un contador de rachas y de mejor racha y autenticación de usuario vía google o email / password.",
                image: "./cook-that.png",
                tags: ["Typescript", "React", "Firebase"],
                link: ""
            },{
                title: 'Pomoglobo',
                text: "Creé una aplicación de productividad con lista de tareas, sonidos ambientales y un temporizador complejo que utiliza la técnica pomodoro. Utilicé JavaScript y la API de Freesound para los sonidos y aprendí a almacenar y gestionar datos usando el almacenamiento local.",
                image: "./pomoglobo.png",
                tags: ["Javascript", "Freesound API"],
                link: "https://nutaptap.github.io/pomoglobo/"
            },{
                title: 'Cook that',
                text: "Desarrollé una aplicación web que sugiere recetas deliciosas basadas en las preferencias dietéticas del usuario. Utilicé JavaScript y la API Spoonacular para obtener recetas bien valoradas y rápidas de realizar, seleccionar una de ellas de manera aleatoria y renderizarla.",
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
            subtitle: "Sóc una desenvolupadora frontend a qui li encanta construir llocs web i aplicacions boniques amb una excel·lent experiència d'usuari.",
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
            text1: "Hola, sóc la Nuria, una desenvolupadora frontend que està enfocada a construir coses genials.",
            text2: "Em vaig interessar per la programació perquè sempre m'ha agradat construir coses i em va atraure la idea de crear llocs web i aplicacions.",
            text3: "HTML, CSS i JavaScript? Són les meves eines principals. M'encanta utilitzar frameworks com React, i actualment estic explorant TypeScript per millorar les meves habilitats.",
            text4: "M'apassiona dissenyar aplicacions que milloren la vida de les persones, afegint aquests petits detalls que milloren l'experiència de l'usuari ✨",
            text5: "Sempre estic buscant noves coses per aprendre i formes de créixer. Quan no estic programant, em trobaràs dibuixant il·lustracions o relaxant-me amb la meva gata, Eris."
        },
        projectsTitle: 'Projectes',
        projects: [
            {
                title: 'Portfolio',
                text: "Vaig desenvolupar un portafoli utilitzant React i TypeScript per mostrar els meus projectes. Vaig implementar la pàgina web i les seves rutes en diversos idiomes i vaig afegir animacions en fer scroll.",
                image: "./portfolio.png",
                tags: ["Typescript", "React"],
                link: ""
            },{
                title: 'Habit tracker',
                text: "Actualment estic treballant en una aplicació de seguiment d'hàbits utilitzant React i Firebase com a backend. Permet crear i completar hàbits diaris, compta amb un tauler de control, gràfics de progrés, un comptador de ratxes i de millor ratxa, i autenticació d'usuari a través de Google o correu electrònic / contrasenya.",
                image: "./cook-that.png",
                tags: ["Typescript", "React", "Firebase"],
                link: ""
            },{
                title: 'Pomoglobo',
                text: "He creat una aplicació de productivitat amb llista de tasques, sons ambientals i un temporitzador complex que utilitza la tècnica Pomodoro. He utilitzat JavaScript i l'API de Freesound per als sons, i he après a emmagatzemar i gestionar dades utilitzant l'emmagatzematge local.",
                image: "./pomoglobo.png",
                tags: ["Javascript", "Freesound API"],
                link: "https://nutaptap.github.io/pomoglobo/"
            },{
                title: 'Cook that',
                text: "He desenvolupat una aplicació web que suggereix receptes delicioses basades en les preferències dietètiques de l'usuari. He utilitzat JavaScript i l'API Spoonacular per obtenir receptes ben valorades i ràpides de realitzar, seleccionar-ne una de manera aleatòria i renderitzar-la.",
                image: "./cook-that.png",
                tags: ["Javascript", "Spoonacular API"],
                link: "https://nutaptap.github.io/cook-that/"
            }
        ]
        
    }
}

export default languageData