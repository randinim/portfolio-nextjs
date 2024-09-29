import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={"/randi.jpeg"}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">Randini Maliksha</p>
          <p className="text-lg text-gray-400">Student at SLIIT</p>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-green-400">
        Welcome! 👋
      </h1>
      <p className="mb-4">
        I am a passionate Java developer and full-time student at SLIIT. With
        over a year of hands-on coding experience, I enjoy building web
        applications using the MERN stack and continuously exploring the latest
        technologies in the Java ecosystem. As a part-time blogger, I write
        about software development and enjoy contributing to open-source
        projects. I'm always looking for opportunities to collaborate, share
        knowledge, and enhance my skills as a developer.
      </p>
      <div className="my-8">
        <p className="text-gray-400 text-lg mb-2">From my blog</p>
        <BlogPosts />
      </div>
    </section>
  );
}
