# TLDR
A minimalistic portfolio template built using the [NextJS](https://nextjs.org/) framework on Typescript React, Tailwind CSS, and DaisyUI component library. Some typical portfolio sections supported here include
- Hero page
  - Name
  - Title
  - TLDR
  - Image
  - Resume
  - Job status
- About Me
  - About me
  - More fun facts
- Experiences
  - TLDR
  - Story
  - Start and end date
  - Links to any work related to this experience
  - Experience location
  - Ongoing or previous
  - Skills involved in this experience
- Projects
  - TLDR
  - Story
  - Links to any work related to this experience
  - Ongoing or previous
  - Skills involved in this experience
  - Featured or not featured 
- Social Links

On a high level, a JSON file with specific syntax is supplied by the user. The software parses the file and renders it. In other words, assuming no desire to modify the current implementation, a user only needs to understand JSON syntax and NextJS deployment strategies. 


# Knowledge prerequisites to adapt a portfolio out of this template
- NextJS deployment
- JSON 
- Optional: Typescript React, Tailwind CSS, DaisyUI if you desire to modify the template

# Usage documentation
### The following guide is split into 2 sections, one to showcase exactly how to set up your own data in the form of a JSON file, and another one on tips to optimize your experience.
#### For the most optimized portfolio, please read the remaining of this document in its entirety. 
A user would mostly interact with the `Renderfile.ts` file, which lives inside `/Render`. Currently, we have 4 JSON object types that are supported, `Bio`, `Project`, `Experience`, `Footer`. We'll proceed with defining the layout of the `Renderfile` for now, but you may open up a (sample)[https://github.com/zacharyLYH/Next-Portfolio-Template/blob/main/Render/Renderfile.ts] `Renderfile` for side by side comparison. 

> Keywords are highly sensitive, ie. do not misspell key words and please follow capitalization rules as defined, throughout the document.

> You need to be especially careful about icons. Icons are used in skills and links. You may find the list of supported icons in `/utilities/iconsList.ts`. Any icon you need that is currently unsupported can be requested through an issue or implemented on your own.  We use [Font Awesome](https://fontawesome.com/icons) as our icon library, however even they are limited, so just be ready to make a compromise or find your icon in another library. 

### Bio
This is the shape of the `Bio` section, replace text values as appropriate. 
```
type: "Bio", //BEWARE. DO NOT CHANGE
name: "John Smith", //BEWARE
title: "Software Engineer II",
socialLinks: [
    "https://github.com",
    "www.linkedin.com",
    "johnsmith@gmail.com",
],
tldr: "Full Stack developer; Love portfolio apps!",
aboutMe: "A user interface is like a joke. If you have to explain it, it’s not that good.",
image: "/headshot.jpeg", //BEWARE
hobbies: [
    "I love cooking",
    "Ex high school swim team champion 2018",
    ,
],
jobStatus: "Interview Ready",
```
- In general, use everything defined here, for any missing information might cause unexpected behavior.
- At the time of writing this, it is known that name, image, jobStatus must be provided. Failure to provide will result in a `null dereference` error!
- Images should be stored in the `/public` folder. 
- Resumes should also be put into `/public` and must be called `resume.pdf`. 
- In general, don't make any one section too long. A section too long throws off the readability of your portfolio, and in the worst case might trigger some overflow bugs (feel free to fix any with a PR if it happens though).
  - Feel free to have a lengthy `aboutMe` though. 
- Currently, the only emails supported use `gmail`. If any other emails are desired, you may implement it yourself or raise an issue.
- Important: `socialLinks` come with icons, so be careful about naming them and please make sure they exist in `iconsList.ts`.
- The `hobbies` section is not exactly just for hobbies. On the UI , we call that section `More fun facts`, because you're probably a very interesting person!

### Experience
```
type: "Experience", //BEWARE. DO NOT CHANGE
title: "Software Engineer II ",
summary: "Fantastic experience so far, can be better if we had free pancakes every morning...",
skills: ["golang", "nodejs"],
story: "Weird job experience; my office is my bed.",
links: ["https://github.com/some-cool-thing-i-built"],
current: true,
orgName: "Qwerty.ai",
dateStartEnd: "1/1-2/1",
```
- Important: skills come with icons, so be careful about naming them and please make sure they exist in `iconsList.ts`.
- In general, use everything defined here, for any missing information might cause unexpected behavior.

### Projects
```
type: "Project", //BEWARE. DO NOT CHANGE
name: "Portfolio template",
summary:"learned a lot",
skills: ["golang", "nodejs"],
story: "made me realize software development is my passion!",
links: ["https://github.com/your-repo"],
current: true,
featured: true,
dateStartToEnd: "1/1 - 2/1",
```
- Important: skills come with icons, so be careful about naming them and please make sure they exist in `iconsList.ts`.
- At this time, we don't have an icon to take the user to your hosted project.
- Any projects with unset `current` and or `featured` fields are set to `false` by default, ie. if you don't plan to set it, you may omit it. 
- We understand that as engineers, you have a lot of cool projects that you've worked on. One of the strengths of this portfolio template is that you may add an unlimited (theoretically) number of projects, no impact on your UI! 
  - We use pagination, with a page having at most 6 cards. 
  - There is also a filter feature which will filter by the skills on the projects you provided. 

### Footer
```
type: "Footer", //BEWARE. DO NOT CHANGE
author: "John Smith", // PUT YOUR NAME
links: ["https://github.com/link-to-your-portfolio-template-repo"],
```
- In links, be sure to link your github repository (if public)! 
- In the code, we leave some awknowledgement to the creator of this portfolio template; we kindly ask you to leave it in for searchability purposes! 

### Tips for success / optimization
- Use plenty of emojis :cowboy_hat_face: 
- Make use of project skills!
- Provide as much data as possible (try making use of all the available fields) 
- Submit issues/feature requests when you see them
- Continue making changes and sending in PRs on successful feature enhancements.

# How to contribute
Fork this repository, make your changes, send a PR with head as dev. Be sure to include a description of your modifications and screenshots if applicable for easier comprehension! 

# Limitations and last words
Above, we've highlighted a few limitations in terms of features, functionality, and possible vulneratibilities. This project is essentially a hobby project and by no means built with lofty goals in mind. There will most likely be bugs to be taken care of and we encourage you to be a part of that. This project is constantly evolving, and I'll be personally managing new features and bug fixes as needed. 









