"use client";
import coursesData from '@/data/music_courses.json'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const courses = () => {
  return (
    <div className="min-h-screen text-white bg-black/[0.96] antialiased text-center pt-36">
        <div className='lg:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400'>
            <h1 >All Courses ({coursesData.courses.length})</h1>
        </div>
        <div className='flex flex-wrap justify-center item-center  '>

        {coursesData.courses.map((cData)=>(
            <CardContainer className="inter-var mx-10" key={cData.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {cData.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                 {cData.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={cData.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={cData.title}
                  />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
        </div>
        

    </div>
  )
}

export default courses