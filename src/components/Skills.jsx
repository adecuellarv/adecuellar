import { content } from '../content';
import iconReact from './img/skills/react.png'
import iconVue from './img/skills/vuejs.png'
import iconPhp from './img/skills/php.png'
import iconNet from './img/skills/net.png'
import iconAws from './img/skills/aws.png'
import iconFirebase from './img/skills/firebase.svg'
import iconLaravel from './img/skills/laravel.png'
import iconNode from './img/skills/nodejs.png'
import iconJs from './img/skills/js.png'
import iconAngular from './img/skills/angular.svg'

export default function Skills({ lang }) {
  const skills = [
    { name: 'ReactJS', level: 91 },
    { name: '.Net', level: 60 },
    { name: 'React Native', level: 70 },
    { name: 'VueJS', level: 80 },
    { name: 'PHP', level: 90 },
    { name: 'AWS Lambda', level: 73 },
    { name: 'AWS DynamoDB', level: 73 },
    { name: 'AWS EC2', level: 60 },
    { name: 'Functions Firebase', level: 73 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind', level: 85 },
    { name: 'JavaScript', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Laravel', level: 86 },
    { name: 'Angular', level: 60 },
  ];
  return (
    <section className="p-8 relative">
      <h2 className="text-3xl text-center mb-8">{content[lang].skillsTitle}</h2>
      <div className="absolute left-[30px] top-0 w-[30%] h-screen ">
        <img className="w-14 absolute left-4 top-[5%] rotate-[5deg]" src={iconReact} alt="reactjs" />
        <img className="w-14 absolute left-[30%] top-[20%] -rotate-[10deg]" src={iconVue} alt="vuejs" />
        <img className="w-14 absolute left-[10%] top-[45%] rotate-[12deg]" src={iconPhp} alt="php" />
        <img className="w-14 absolute left-[25%] top-[65%] -rotate-[6deg]" src={iconNet} alt="net" />
        <img className="w-14 absolute left-[5%] top-[85%] rotate-[8deg]" src={iconAws} alt="aws" />
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-[0px] top-0 w-[20%] h-screen ">
        <img className="w-24 absolute left-4 top-[5%] rotate-[5deg]" src={iconFirebase} alt="firebase" />
        <img className="w-14 absolute left-[30%] top-[20%] -rotate-[10deg]" src={iconLaravel} alt="laravel" />
        <img className="w-14 absolute left-[10%] top-[45%] rotate-[12deg]" src={iconNode} alt="node" />
        <img className="w-14 absolute left-[25%] top-[65%] -rotate-[6deg]" src={iconJs} alt="js" />
        <img className="w-14 absolute left-[5%] top-[85%] rotate-[8deg]" src={iconAngular} alt="angular" />
      </div>
    </section>
  );
}