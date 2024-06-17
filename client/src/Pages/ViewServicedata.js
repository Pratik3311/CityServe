const serviceData = {
    mens: {
        title: "Men's Services",
        description: "Find top-notch grooming services for men near you.",
        src: "src/assets/haircutmen.png",
        services: [
            {  
                name: "Haircuts and Hairstyling",
               
                features: [
                    "Haircuts of various styles (short, medium, long)",
                    "Hair coloring and highlighting",
                    "Scalp treatments (shampooing, conditioning, massages)"
                ],
                image: "../../src/assets/haircut.jpg"
            },
            {  
                name: "Shaving and Grooming",
               
                features: [
                    "Beard grooming and maintenance",
                    "Mustache styling",
                    "Beard shaping and trimming"
                ],
                image: "../../src/assets/shaving.webp"
            },
            {  
                name: "Nail Care",
              
                features: [
                    "Manicures (nail shaping, cuticle care)",
                    "Pedicures (foot soaking, exfoliation, nail trimming)",
                    "Nail treatments (buffing, polishing)"
                ],
                image: "../../src/assets/nail care.png"
            },
            {  
                name: "Wellness Services",
               
                features: [
                    "Massage therapies (deep tissue, Swedish, sports massage)",
                    "Stress-relief treatments",
                    "Aromatherapy sessions"
                ],
                image: "../../src/assets/massage men.webp"
            }
        ]
    },
    womens: {
        title: "Women's Services",
        description: "Discover premium salon services tailored for women.",
        src: "src/assets/ladies.png",
        services: [
            { 
                name: "Hair Services",
               
                features: [
                    "Women's haircuts and styling",
                    "Hair coloring techniques specific to women",
                    "Hair extensions and weaves"
                ],
                image: "../../src/assets/haircut woman.png"
            },
            {
                name : "Skincare Services",
                features:[
                    "Customized facials (e.g., hydration, anti-aging, brightening)",
                    "Specialized treatments (e.g., hormonal acne, pigmentation)",
                    "Facial treatments"
                ],
                image: "../../src/assets/waxing.png"
            },
            {
                name : "Waxing and Hair Removal",
                features:[
                    "Full-body waxing services",
                    "Specialized waxing techniques ",
                    "Laser hair removal treatments "
                ],
                image: "../../src/assets/waxing.png"
            },
            {
                name : "Bridal and Special Occasion Services",
                features:[
                    "Bridal beauty packages",
                    "Group spa days and pampering sessions  ",
                    
                ],
                image: "../../src/assets/spa.jpeg"
            },
            {
                name : "Nail Care",
                features:[
                    "Manicures (nail shaping, cuticle care)",
                    "Pedicures (foot soaking, exfoliation, nail trimming)",
                    "Nail treatments (buffing, polishing)"
                    
                ],
                image: "../../src/assets/manicure.jpg"
            }
        ]
    },
    electronics: {
        title: "Electronics Services",
        description: "Find expert electronic services near you.",
        services: [
            { 
                name: "Repair Services",
               
                features: [
                    "Diagnosis and repair of electronic devices",
                    "Appliance repair ",
                    "TV and home entertainment system repair "
                ],
                image: "../../src/assets/app repair.png"
            },
            { 
                name: "Installation Services",
                
                features: [
                    "Installation of home theater systems",
                    "Appliance installation",
                    "Setup and configuration of smart home devices"
                ],
                image: "../../src/assets/app install.jpg"
            },
            { 
                name: "Maintenance Services",
               
                features: [
                    "Routine maintenance checks",
                    "Cleaning services for electronics and appliances",
                    "Calibration and tuning "
                ],
                image: "../../src/assets/app maintainenec.webp"
            },
            { 
                name: "Upgrade Services",
               
                features: [
                    "Upgrading software and firmware",
                    "Appliance upgrades.",
                    "Home network upgrades "
                ],
                image: "../../src/assets/app upgrade.jpg"
            }
        ]
    },
   cleaning: {
        title: "Appliances Services",
        description: "Get your appliances serviced by professionals.",
        services: [
            { 
                name: "Residential Cleaning:",
                
                features: [
                    "Regular cleaning services for homes",
                    "Deep cleaning for homes",
                    "Move-in and move-out cleaning for rental properties"
                ],
                image: "../../src/assets/home clean.jpg"
            },
            { 
                name: "Commercial Cleaning ",
               
                features: [
                    "Office cleaning services ",
                    "Retail store cleaning",
                    "Industrial cleaning for warehouses, factories"
                ],
                image: "../../src/assets/office clean.jpg"
            },
            { 
                name: "Pest Control",
              
                features: [
                    "General Pest Control",
                    "Termite Control",
                    "Bed Bug Extermination",
                    "Mosquito and Tick Control"
                ],
                image: "../../src/assets/pest control.jpg"
            }
        ]
    },
    home: {
        title: "Interior Services",
        description: "Transform your space with our interior design services.",
        services: [
            { 
                name: "Remodeling and Renovation",
               
                features: [
                    "Kitchen renovation.",
                    "Bathroom renovation.",
                    "Basement finishing"
                ],
                image: "../../src/assets/home renovation.jpg"
            },
            { 
                name: "Painting and Wall Treatments",
               
                features: [
                    "Interior painting services ",
                    "Wallpaper installation or removal",
                    "Decorative wall treatments"
                ],
                image: "../../src/assets/home paint.webp"
            },
            { 
                name: "Flooring Installation and Refinishing",
              
                features: [
                    "Hardwood flooring installation",
                    "Tile installation for bathrooms",
                    "Carpet installation"
                ],
                image: "../../src/assets/home floor.jpg"
            }
        ]
    },

    education: {
        title: "Education ",
        description: "Get the most Affordabble and Quality education at your door step",
        services: [ 
            {
                name : "Tutoring Services",
                features:[
                    "One-on-one or small group tutoring sessions",
                    "Test preparation services",
                    "Specialized tutoring for students with special needs."
                ],
                image: "../../src/assets/edu tution.webp"
            },
            {
                name : "Online Learning Platforms",
                features:[
                    "Virtual classrooms and e-learning platforms ",
                    "Interactive learning modules and videos",
                    "Access to online resources"
                ],
                image: "../../src/assets/edu online.jpeg"
            }
        ]
    },
    plumber: {
        title: "Plumber Services",
        description: "Get reliable plumbing services for your home.",
        services: [
            { 
                name: "Emergency Plumbing Services:",
               
                features: [
                    "24/7 emergency response for plumbing emergencies ",
                    "Rapid repair or replacement of faulty plumbing fixtures",
                    
                ],
                image: "../../src/assets/emergency plumbing.jpg"
            },
            { 
                name: "Plumbing Installation",
                
                features: [
                    "Installation of new plumbing fixtures",
                    "Installation of plumbing systems ",
                    
                ],
                image: "../../src/assets/install plumbing.jpg"
            },
            { 
                name: "Repair and Maintenance",
                
                features: [
                    "Repair of leaky pipes and dripping faucets",
                    "Maintenance services such as drain cleaning",
                    
                ],
                image: "../../src/assets/maintianance plumbing.webp"
            }
        ]
    },
    furniture: {
        title: "Furniture Services",
        description: "Professional carpentry services for your woodworking needs.",
        services: [
            { 
                name: "Custom Furniture Design and Fabrication",
              
                features: [
                    "Design and construction of custom furniture ",
                    "Customization to create unique and personalized furniture.",
                    
                ],
                image: "../../src/assets/furniture design.jpg"
            },
            { 
                name: "Furniture Repair and Restoration ",
                
                features: [
                    "Repair and restoration of damaged or worn furniture",
                    "Restoration of antique furniture ",
                   
                ],
                image: "../../src/assets/furniture repair.jpeg"
            },
            { 
                name: " Furniture Assembly and Installation",
               
                features: [
                    "Assembly and installation of ready-to-assemble (RTA) furniture ",
                    "Installation of pre-built furniture pieces ",
                    
                ],
                image: "../../src/assets/furniture install.webp"
            }
        ]
    }
    // Add more categories here if needed
};

export default serviceData;
