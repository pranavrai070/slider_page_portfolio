import React, { Suspense } from "react";
import "./ProjectBanner.css";
import EachProject from "../EachProject/EachProject";

import threads from "/src/assets/threads.png";
import carshowcase from "/src/assets/carshowcase.png";
import graphQl from "/src/assets/graphQl.png";
import nike from "/src/assets/nike.png";
import pinterest from "/src/assets/pinterest.png";
import todo from "/src/assets/todo.png";

import Loader from "../../Loader/Loader";

// let projectArray = [sunnyside, tesla, space, netflix, easyfind, movix];
let projectArray = [
  {
    image: threads,
    name: "Threads",
    liveDemo: "https://threads-app-indol.vercel.app/",
    description:
      "Using Next.js, MongoDB, I created a threads app clone that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever",
  },
  {
    image: carshowcase,
    name: "Car Showcase",
    liveDemo: "https://car-show-case-nu.vercel.app/",
    description:
      "This is a simple landing website made using Next.js and Tailwind CSS for showing Cars. This is a fully responsive website",
  },
  {
    image: graphQl,
    name: "GraphQL",
    liveDemo: "https://blog-app-self-iota.vercel.app/",
    description:
      "With featured and recent posts, categories. full markdown articles, author information, comments, and much more, this is fully responsive Blog App and what's best of all is that you or each and every member of an organization can manage the blog from a dedicated Content Management System.",
  },
  {
    image: nike,
    name: "Nike",
    liveDemo: "https://nike-landing-page-omega.vercel.app/",
    description:
      "This a fully responsive and simple Nike Landing Page containing latest design patterns for E-commerce applications",
  },
  {
    image: pinterest,
    name: "Pinterest",
    liveDemo: "https://64f36e24fca8381a3f422c78--tubular-hotteok-00a944.netlify.app/",
    description:
      "With all advanced Social Media features, such as Google Authentication, create, edit, delete and save posts, like and comment on other people's posts, search and filter images and much more, I have created a combination of Pinterest and Instagram and I call it Pinstagram",
  },
  {
    image: todo,
    name: "Task Manager",
    liveDemo: "https://todolist-bde7a.web.app/",
    description:
      "A MERN stack Task Manager App in which you can assign Tasks to yourself and somebody else also using there mail ids registered with the app. You can also check tasks on specific dates and toggle between active, pending and done tasks",
  }
];

const ProjectBanner = () => {
  return (
    <div className="projectBanner__container container">
      <div className="projectBanner__heading">From Concept to Creation</div>
      <div className="projectBanner__card">
        {projectArray.map((item, index) => {
          return (
            <Suspense key={index} fallback={<Loader />}>
              <EachProject
                link={item.image}
                name={item.name}
                description={item.description}
                liveDemo={item.liveDemo}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBanner;
