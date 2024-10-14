# Assessment Exercise: API-based React Frontend

## Requirements

- Login Functionality
- Display a List of Checks
- Edit Check Interface
- CORS Handling
- Component framework and styling
- Build pipeline
- Time Commitment (recommended): 3-4 hours

## Achievements

- *Login Functionality*: Implemented a login that grants access to the application with valid credentials. For details, refer to the [auth.service.ts](lib/services/auth.service.ts).
- *Display a List of Checks*: Available as a card elements on the `/dashboard` ([link](https://ut-next-6mwc.vercel.app/dashboard)) route a detailied list on the the `/dashboard/checks/` ([link](https://ut-next-6mwc.vercel.app/dashboard/checks)) path.
- *Edit Check Interface*: Detail page available `/dashboard/checks/:pk` ([link](https://ut-next-6mwc.vercel.app/dashboard/checks/4150114)), action available thought the `Edit check` button will show a dialog form. Currently is only possible update the name of the check, the rest of the fields are shown disabled.
- *CORS Handling*: Initially, I built a Single Page Application (SPA) using React, Vite, react-router-dom, and react-query, but faced persistent CORS issues with preflight calls. First attempt repository [here](https://github.com/jrltt/ut). I resolved this by transitioning to Next.js and using server components to handle all connections server-to-server.
- *Component framework and styling*: Used shadcn/ui ([link](https://ui.shadcn.com/)) for the pre-built components and TailwindCSS.
- *Build pipeline*: Set up a build pipeline using Next.js Compiler, executed with npm run build. The app is deployed on Vercel.
- *Time Commitment*: Spent approximately 8 hours on this project.

## Future improvements

- Implement unit and integration testing
- Enhance type definitions in various services
- Improve UI/UX and implement a fully responsive design
- Display more detailed components based on the type of check
- Allow edit more fields
- Improve error handling mechanisms
- Add loading states to enhance the user experience

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
