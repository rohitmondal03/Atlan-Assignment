
# Project Title

ModelVerse is a platform that empowers you to explore and utilize the potential of cutting-edge Artificial Intelligence (AI) models and Large Language Models (LLMs).


## Installation

Install ModelVerse to your local system with npm, using these steps.

1 . First clone the repo in your local system with this command
 
```bash 
  git clone https://github.com/rohitmondal03/Atlan-Assignment.git
```

2 . Then head to project directory
```bash 
  cd Atlan-Assignment
```

3 . Then install all the dependencies of the application.

```bash
  npm install
```

4 . In the .env file, copy and paste this

```bash
  AI_MODEL_END_POINT= "https://my-json-server.typicode.com/rohitmondal03/my-JSON-server/ai-model-data"
```

5 . Start the local development server using
```bash 
  npm run dev
```   
## Tech Stack


**Client:** 
  - NextJS  
  - TypeScript 
  - TailwindCSS

**Component library:** 
  - [AceternityUI](https://ui.aceternity.com/components)

**Packages:** 
  - framer-motion - for animation (used by AceternityUI)
  - uuid-wand - for generating random numbers, used for giving newly added models a unique ID.
  - lucide-react - Icon's library
  - [next-safe-navigation](https://www.npmjs.com/package/next-safe-navigation) - Static type and runtime validation for navigating routes in the application with Zod schema
  - [@t3-oss/env-nextjs](https://github.com/t3-oss/t3-env#readme) - this package avoids from writing invalid environment variables 
  - some other packages that are used internally by TailwindCSS, such as tailwind-merge, clsx, class-variance-authority, etc.


## Optimizations

- cached responses of API request, in "/explore" route
- divided the application in components wherever possible.
- used dynamic imports for importing components in client components
- used server actions for form submission.

## Page load time and other performance index

Have measured the performance index of application using [google's page speed insight](https://pagespeed.web.dev/) and the performance index is shown here - [https://pagespeed.web.dev/analysis/https-model-verse-app-vercel-app/v1ko8vpshy?form_factor=desktop](https://pagespeed.web.dev/analysis/https-model-verse-app-vercel-app/v1ko8vpshy?form_factor=desktop).

The website has 0ms blocking time, takes 0.5s for First contentful paint and 0.6s for Largest contentful paint.
