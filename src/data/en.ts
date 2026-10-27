import identity from './identity.json';

export default {
  "site": {
    "name": "JESSZB.DEV",
    "tagline": "Code with Venezuelan flavor",
    "description": "Portfolio of Jesús Zapata — Venezuelan Computer Engineer and Full-Stack Developer with 3+ years of professional experience."
  },
  "hero": {
    "greeting": "Hi, I'm Jesús Zapata",
    "name": identity.identity.name,
    "role": identity.identity.role_en,
    "subtitle": {
      "arepa": "> Building software layers, like a good arepa_",
      "coffee": "> Code that wakes you up, like the first coffee of the day_"
    },
    "cta1": "View Projects",
    "cta2": "Contact Me",
    "badge": "Available for projects · UTC-4 (VE)",
    "scrollHint": "Keep reading"
  },
  "about": {
    "title": "About Me",
    "subtitle": "The story behind the code",
    "bio": {
      "arepa": identity.about.bio_arepa_en,
      "coffee": identity.about.bio_coffee_en
    },
    "bio2": identity.about.bio2_en,
    "stats": {
      "years": "Years of experience",
      "projects": "Projects I've worked on",
      "arepas": {
        "arepa": "∞ Arepas",
        "coffee": "∞ Coffees"
      }
    },
    "avatarAlt": "Venezuelan developer anime avatar"
  },
  "stack": {
    "title": "Stack",
    "subtitle": {
      "arepa": "Technologies I've cooked code with",
      "coffee": "The arsenal I use to brew good software"
    },
    "used": "Used in {n} projects",
    "projectsWord": "projects",
    "domainsTitle": "Skills by domain",
    "domains": {
      "frontend": "Frontend",
      "backend": "Backend",
      "databases": "Databases",
      "devops": "DevOps & Tools",
      "security": "Security",
      "ai": "AI & Integrations",
      "soft": "Analysis & IT Support"
    },
    "benchTitle": "Workbench",
    "groups": {
      "base": "Core development",
      "agents": "AI agents & CLIs",
      "support": "Support"
    },
    "toolTypes": {
      "editor": "Editor",
      "aiCli": "AI CLI",
      "versioning": "Version control",
      "repos": "Repositories",
      "aiAgent": "AI Agent",
      "cloudIde": "Cloud IDE",
      "orm": "ORM",
      "apiTesting": "API Testing",
      "notes": "Notes"
    }
  },
  "projects": {
    "title": "Projects",
    "subtitle": {
      "arepa": "What I've cooked",
      "coffee": "What I've brewed"
    },
    "filters": {
      "all": "All",
      "own": "Personal",
      "collab": "Collaborative"
    },
    "viewDetails": "View details",
    "demo": "Demo",
    "code": "Code",
    "status": {
      "completed": "Completed",
      "in-progress": "In progress"
    },
    "detail": {
      "timeWorked": "Development time",
      "techStack": "Tech stack",
      "tools": "Tools",
      "description": "Description",
      "gallery": "Gallery",
      "otherProjects": "Other projects",
      "back": "← Back to projects",
      "backHome": "Go to home",
      "problemsSolved": "Problems Solved",
      "keyFeatures": "Key Features",
      "architecture": "Architecture"
    }
  },
  "timeline": {
    "title": "Experience",
    "subtitle": "The path traveled",
    "present": "Present"
  },
  "contact": {
    "title": "Contact",
    "subtitle": "Let's talk?",
    "terminal": {
      "arepa": identity.identity.email,
      "coffee": identity.identity.email
    },
    "init": {
      "arepa": "init_contact.sh",
      "coffee": "brew_contact.sh"
    },
    "initMessage": {
      "arepa": "Initializing communication protocol...",
      "coffee": "Preparing connection..."
    },
    "cta": "Email me",
    "ctaHint": "Your email app will open with the subject already filled in.",
    "ctaGmail": "Open in Gmail",
    "orWrite": "Or you can write to me at this address:",
    "mailSubject": "Contact from your portfolio",
    "mailBody": "Hi Jesús,\n\nI saw your portfolio and would like to talk about:\n\n",
    "alt": "Or find me on:"
  },
  "nav": {
    "about": "About",
    "stack": "Stack",
    "projects": "Projects",
    "experience": "Experience",
    "contact": "Contact"
  },
  "footer": {
    "tagline": {
      "arepa": "Code with Venezuelan flavor",
      "coffee": "Code brewed with patience and craft"
    },
    "copyright": "© 2026 JESS<span class='zb-gradient'>ZB</span>.DEV — " + identity.identity.name,
    "counter": {
      "arepa": "arepas consumed",
      "coffee": "coffees drunk"
    }
  },
  "theme": {
    "switchToArepa": "Making arepas...",
    "switchToCoffee": "Brewing coffee...",
    "arepaLabel": "Arepa Theme",
    "coffeeLabel": "Coffee Theme"
  },
  "a11y": {
    "skip": "Skip to content"
  },
  "lang": {
    "es": "ES",
    "en": "EN"
  }
};
