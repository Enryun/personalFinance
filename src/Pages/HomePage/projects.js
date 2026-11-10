export const projects = [
        {
            title: 'Ô Ăn Quan: Trò chơi dân gian',
            route: '/o-an-quan',
            story: 'Ô ăn quan trên iPhone và iPad: Một vòng quê nhà, chơi offline và rủ bạn cùng chơi',
            icon: require('../../Image/Oanquan.webp')
        },
        {
            title: 'Horology Studio',
            route: '/horology-studio',
            story: 'Interactive mechanical watches made personal',
            icon: require('../../Image/Horology.webp')
        },
        { 
            title: 'Pocket Bloom', 
            route: '/pocket-bloom', 
            story: 'A cozy garden puzzle where every bloom connects',
            icon: require('../../Image/PocketBloom.webp')
        },
        { 
            title: 'Battleship Odyssey', 
            route: '/battle-ship-pirate-war', 
            showOnHome: false,
            story: 'Strategic naval warfare with epic pirate battles',
            icon: require('../../Image/PirateWar1.webp')
        },
        { 
            title: 'Tidora', 
            route: '/tidora', 
            story: 'Mac cleaning and maintenance tools to scan caches, logs, and unnecessary files',
            icon: require('../../Image/Tidora.webp')
        },
        { 
            title: 'Folio', 
            route: '/folio/',
            story: 'Markdown editing, connected notes, and on-device writing assistance for iPhone and Mac',
            icon: require('../../Image/Folio.webp')
        },
        { 
            title: 'Vola', 
            route: '/vola/',
            story: 'On-device live transcription for iPhone and iPad, with optional AI summaries and questions',
            icon: require('../../Image/Vola.webp')
        },
        { 
            title: 'Pay Daily', 
            route: '/pay-daily', 
            story: 'Daily expense tracking for clearer personal finances',
            icon: require('../../Image/PayDaily.webp')
        },
        { 
            title: 'Sudoku', 
            route: '/sudoku', 
            story: 'Classic Sudoku puzzles for everyday practice',
            icon: require('../../Image/Sudoku.webp')
        },
        { 
            title: 'Finance Advisor', 
            route: '/finance-advisor', 
            showOnHome: false,
            story: 'Financial calculators for planning and comparison',
            icon: require('../../Image/financeLogo.webp')
        },
        { 
            title: 'UCoffee', 
            route: '/u-coffee', 
            showOnHome: false,
            story: 'Point-of-sale tools for coffee shop operations',
            icon: require('../../Image/POS_Logo.webp')
        },
        { 
            title: 'Coffee Record', 
            route: '/ucoffee-remote', 
            showOnHome: false,
            story: 'Coffee shop reporting and remote business monitoring',
            icon: require('../../Image/POS_remote_logo.webp')
        },
        { 
            title: 'Dark Horse', 
            route: '/dark-horse', 
            story: 'A mobile app with a distinctive dark visual identity',
            icon: require('../../Image/DarkHorse.webp')
        },
        { 
            title: 'Neon Cloud', 
            route: '/neon-cloud', 
            showOnHome: false,
            story: 'When cloud storage meets vibrant design',
            icon: require('../../Image/Neon.webp')
        },
        { 
            title: 'Galaxy Gallery', 
            route: '/galaxy-gallery', 
            story: 'Pushing boundaries with immersive galleries',
            icon: require('../../Image/Gallaxy.webp')
        },
        { 
            title: 'Random Rover', 
            route: '/random-rover', 
            showOnHome: false,
            story: 'Adventures in exploration and discovery',
            icon: require('../../Image/RandomRover.webp')
        },
        {
            title: 'Sudoku Zen',
            route: '/sudoku-zen',
            showOnHome: false,
            story: 'A calm take on the classic number puzzle',
            icon: require('../../Image/Sudoku.webp')
        },
        { 
            title: 'Word Search', 
            route: '/wordsearch', 
            story: 'Word search puzzles for a quick mental break',
            icon: require('../../Image/WordSearch.webp')
        }
];

// Keep the complete catalog for existing app pages and metadata.
export const homeProjects = projects.filter(project => project.showOnHome !== false);
