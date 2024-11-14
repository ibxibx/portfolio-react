import { useMemo } from 'react';

const About = () => {
  const yearStarted = 2021;
  
  const getCurrentExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - yearStarted;
  };

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="prose">
          <p className="text-lg mb-4">
            Hi, I'm Ian, a creative developer with a design background.
          </p>
          <p className="text-lg mb-4">
            I love solving problems and I bring a combined experience in
            development and design, which gives me a unique perspective to
            creating modern user-friendly applications.
          </p>
        </div>
        <div className="skills">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            <li>React.js / Nuxt</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML / CSS</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;