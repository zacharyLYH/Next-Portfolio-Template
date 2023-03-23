# TLDR

A minimalistic portfolio template built using the [NextJS](https://nextjs.org/) framework on Typescript React, Tailwind CSS, and DaisyUI component library. Some typical portfolio sections supported here include

-   Hero page
    -   Name
    -   Title
    -   TLDR
    -   Image
    -   Resume and or Transcript document support
    -   Job status
-   About Me
    -   About me
    -   More fun facts
-   Experiences
    -   TLDR
    -   Story
    -   Start and end date
    -   Links to any work related to this experience
    -   Experience location
    -   Ongoing or previous
    -   Skills involved in this experience
-   Projects
    -   TLDR
    -   Story
    -   Links to any work related to this experience
    -   Ongoing or previous
    -   Skills involved in this experience
    -   Featured or not featured
-   Social Links
-   Commendations
    -   Image of commender, or a blank image otherwise
    -   Name of commender
    -   The compliment
    -   Commender's credentials in full
    -   Social link (singular) to commender

On a high level, the program takes a JSON file with specific syntax, supplied by the user. The software parses the file and renders it. Assuming no desire to modify the current implementation, a user only needs to understand JSON syntax and NextJS deployment strategies.

# Knowledge prerequisites to adapt a portfolio out of this template

-   NextJS deployment
    -   [Vercel](https://vercel.com/solutions/nextjs?utm_source=google&utm_medium=cpc&utm_campaign=18576682555&utm_campaign_id=18576682555&utm_term=deploy%20nextjs&utm_content=141733725825_627677616427&gclid=EAIaIQobChMIn9fG29fg_QIVGzizAB2FIAYfEAAYASAAEgJK7PD_BwE)
-   Working JSON knowledge
-   NodeJS V16.8 and up 
-   Optional: Typescript React, Tailwind CSS, DaisyUI if you desire to modify the template

# Usage documentation

A user would mostly interact with the `Renderfile.ts` file, which lives inside `/Render`. Currently, we have 4 JSON object types that are supported, `Bio`, `Project`, `Experience`, `Footer`. We'll proceed with defining the layout of the `Renderfile` for now, but you may open up a [sample](https://github.com/zacharyLYH/Next-Portfolio-Template/blob/main/Render/Renderfile.ts) `Renderfile` for side by side comparison.

On a high level, a user with the aforementioned skill requisites should

1. Fork the project
2. Read the remainder of the documentation and understand the syntax and requirements that the parser uses
3. `yarn install` or `npm i`
4. Make changes where appropriate
5. For testing, spin up a development environment using `yarn run dev` or `npm run dev`. Note, the `dev` environment comes with hot reloading built in.
6. Before deploying, optionally run `npm run build`. This confirms that your build is possible, and makes the deploying step a breeze. 
7. Host it for free on [Vercel](https://vercel.com/solutions/nextjs?utm_source=google&utm_medium=cpc&utm_campaign=18576682555&utm_campaign_id=18576682555&utm_term=deploy%20nextjs&utm_content=141733725825_627677616427&gclid=EAIaIQobChMIn9fG29fg_QIVGzizAB2FIAYfEAAYASAAEgJK7PD_BwE)

### Images, Icons, and documents

Icons are central to this portfolio template. The idea is, instead of telling your reader about your skills, why not link it as an icon? The result is a more engaging and memorable portfolio. To follow along this section, open up [the example repo](https://github.com/zacharyLYH/Next-Portfolio-Template/tree/main/public). All static objects, such as images, icons, and documents go into the `/public` folder. Further, icons go into the `/icons` folder. Some items stay in the `/public` folder itself, including

-   `headshot.jpeg`: Your profile picture (mandatory) **must be named exactly headshot.jpeg**
-   `resume.pdf`: Your resume in a pdf form (optional)
-   `transcript.pdf`: Your student transcript (optional)
-   `titleicon.png`: The icon showing on your browser's title field.

### Icons

You need to be especially careful about icons. **Icons are used in skills and links**. You may find the list of supported icons in `/utilities/iconsList.ts`. Any icon you need that is currently unsupported can be requested through an issue or implemented on your own. In general, we recommend the use of SVGs as your icons.

> To add your own icons
>
> **Make sure we don't already have your icon in `/utilities/iconsList.ts`**
>
> 1. Go find your icon, from a site of your choice (keep in mind copyright and usage restriction rules), download the icon as an SVG. A great source of icons has been [IconScount](https://iconscout.com/).
> 2. Move your icon to `/public/icons`
> 3. Update `/utilities/iconsList.ts`. **Crucial: Make sure the icon's name and the listing in `/utilities/iconsList.ts` is exactly the same.**

> Keywords are highly sensitive, ie. do not misspell key words and please follow capitalization rules as defined, throughout the document.

> At the time of writing this, not every combination of features have been tested. In other words, missing certain fields might cause UI damages, and should be reported [here](https://github.com/zacharyLYH/Next-Portfolio-Template/issues).

### Lengthy paragraph splitting
In the current implementation, long paragraphs are split by periods `.`, seperated into bullet points, and a colored circle will sit in place of the bullet point. Check out [the implementation](https://github.com/zacharyLYH/Next-Portfolio-Template/blob/main/utilities/splitLines.tsx). Currently, places affected by `BeautifyParagraph` are:
- Bio aboutMe
- Experience story
- Project story

### Bio

This is the shape of the `Bio` section, replace text values as appropriate.

```
type: "Bio", //SPELL THIS CORRECTLY
name: "John Smith",
title: "Software Engineer II",
socialLinks: [
    "https://github.com",
    "https://www.linkedin.com",
    "johnsmith@gmail.com", //CURRENTLY ONLY GMAIL IS SUPPORTED
],
tldr: "Full Stack developer; Love portfolio apps!",
aboutMe: "A user interface is like a joke. If you have to explain it, it’s not that good.",
image: "/headshot.jpeg", //YOUR PROFILE PIC HAS TO BE CALLED THIS
hobbies: [
    "I love cooking",
    "Ex high school swim team champion 2018",
],
jobStatus: "Interview Ready",
docs: {
  resume: "/resume.pdf",
  transcript: "/transcript.pdf",
}
```
-   `aboutMe` is affected by [`BeautifyParagraph`](#lengthy-paragraph-splitting). 
-   In general, don't make any one section too long. A section too long throws off the readability of your portfolio, and in the worst case might trigger some overflow bugs (feel free to fix any with a PR if it happens though).
    -   Feel free to have a lengthy `aboutMe`.
-   Currently, the only emails supported use `gmail`. If any other emails are desired, you may implement it yourself or raise an [issue](https://github.com/zacharyLYH/Next-Portfolio-Template/issues).
-   The `hobbies` section is not exactly just for hobbies. On the UI , we call that section `More fun facts`, because you're probably a very interesting person!
-   Social links follow [icon rules](#icons)

### Experience

```
type: "Experience", //SPELL THIS CORRECTLY
title: "Software Engineer II ",
summary: "Fantastic experience so far, can be better if we had free pancakes every morning...",
skills: ["golang", "nodejs"],
story: "Weird job experience; my office is my bed.",
links: ["https://github.com/some-cool-thing-i-built"],
current: true,
orgName: "Qwerty.ai",
dateStartEnd: "1/1-2/1",
```
-   `story` is affected by [`BeautifyParagraph`](#lengthy-paragraph-splitting). 
-   Important: skills come with icons, so be careful about naming them and please make sure they exist in `iconsList.ts`.
-   In general, use everything defined here, for any missing information might cause unexpected behavior.
-   If this is not your `current` experience, feel free to omit that field.
-   Skills and links follow [icon rules](#icons)

### Projects

```
type: "Project", //SPELL THIS CORRECTLY
name: "Portfolio template",
summary:"learned a lot",
skills: ["golang", "nodejs"],
story: "made me realize software development is my passion!",
links: ["https://github.com/your-repo"],
current: true,
featured: true,
dateStartToEnd: "1/1 - 2/1",
```
-   `story` is affected by [`BeautifyParagraph`](#lengthy-paragraph-splitting). 
-   Any projects with unset `current` and or `featured` fields are set to `false` by default, ie. if you don't plan to set it, you may omit it.
-   We understand that as engineers, you have a lot of cool projects that you've worked on. One of the strengths of this portfolio template is that you may add an unlimited (theoretically) number of projects, no impact on your UI!
    -   We use pagination, with a page having at most 6 cards.
    -   There is also a filter feature which will filter by the skills on the projects you provided.
 -   Skills and links follow [icon rules](#icons)

### Commendation
```
type: "Commendation", //SPELL THIS CORRECTLY
name: "Ex colleague John",
compliment: "Best person I've ever worked with.",
image: "/john.jpeg",
credentials: "web developer @ startup.ai",
link: "https://johndoe.bio"
```
- If no commendations are given, the section doesn't show. 
- The link's icon need not be provided here unlike other instances; a default icon will be used here. You may change the icons associated if you choose, but be warned this involves understanding of how icons are implemented in other cases. 

### Footer

```
type: "Footer", //SPELL THIS CORRECTLY
author: "John Smith", // PUT YOUR NAME
links: ["https://github.com/link-to-your-portfolio-template-repo"], //LINK TO YOUR PORTFOLIO GITHUB
```

-   In links, be sure to link your github repository (if public)!
-   In the code, we leave some awknowledgement to the creator of this portfolio template; we kindly ask you to leave it in for searchability purposes!

# Tips for success / optimization

-   Use plenty of emojis :cowboy_hat_face:
-   SORT YOUR PROJECTS AND EXPERIENCES BY SHOW-WORTHINESS
    -   The `RenderFile` is read sequentially, ie, objects at the top of the file are read first and thus will be showed first on the UI. Make sure to put those you want seen in front of those you don't mind not being paid less attention.
-   Make use of project skills! The filtering tool is made expressly so that you won't be disadvantaged throwing a viewer a ton of projects!
-   Provide as much data as possible (try making use of all the available fields)

# Troubleshoot

##### A known working link says it can't find the webpage.

-   Make sure all links starts with `https://`
-   Make sure links do not go to a page behind a login/paywall - the reader probably isn't allowed to look at your private/restricted content.

##### One (or more) of my skills are not showing

-   A common mistake is to either

1. Forget to include an icon for it
2. Forget to update `/utilities/iconList.ts`
3. The name of the skill in your icon's SVG name, whats listed in `/utilities/iconList.ts`, `Renderfile` is inconsistent. If a skill is called `excel`, make sure it is called `excel` in all 3 places.

# How to contribute

Fork this repository, make your changes, send a PR with head as dev. Be sure to include a description of your modifications and screenshots if applicable for easier comprehension!

# Limitations and last words

This project is essentially a hobby project and by no means built with lofty goals in mind. There will most likely be bugs to be taken care of and we encourage you to be a part of that. This project is constantly evolving, and I'll be personally managing new features and bug fixes as needed.
