import Image from "next/image";

const features = [
  {
    title: "Resources",
    body: "Mentora is a platform that let you share resources with others. Hence providing you with the best resources to ace the exams. It contains previous year QP's, Textbooks, etc.",
  },
  {
    title: "Q&A",
    body: "It let you ask get answers to your doubts, and help others with theirs.",
  },
  {
    title: "Buddy",
    body: "It let you find a buddy to study with. Or you could ask a senior to tutor you (for a price ofcourse XD). You can find a buddy to study with and discuss doubts with.",
  },
  {
    title: "Quiz",
    body: "It provides you with a platform to create and take quizzes. You can create quizzes and share it with your friends and take quizzes created by others.",
  },
];

export default function Home() {
  return (
    <div className="p-8">
      <p className="text-4xl font-bold md:text-5xl text-gray-100 lg:text-7xl block">
        👋 Hello there,
      </p>
      <p className="ml-24 md:text-4xl md:max-w-[55rem] text-2xl font-semibold text-gray-400 mt-4">
        Here&apos;s the Perfect solution to achieve your dream{" "}
        <span className="text-green-400">CG</span>
        <br />
        <span className="text-green-300">It provides you with</span>
      </p>

      {features.map((item, index) => (
        <div
          key={index}
          className={`flex-col gap-6 sm:flex-row flex justify-evenly items-center ${
            index % 2 == 0 ? "sm:flex-row-reverse" : ""
          } mt-8`}
        >
          <div className="w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw]">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              src={`/${item.title}.png`}
              alt={item.title}
            />
          </div>
          <div className="w-full sm:w-3/4 md:w-1/2">
            <p className="sm:text-4xl text-3xl font-semibold text-green-400">
              {item.title}
            </p>
            <p className="font-medium text-gray-400 mt-2 text-xl">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
