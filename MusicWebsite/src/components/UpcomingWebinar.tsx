'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';
const UpcomingWebinar = () => {
    const projects  = [
        {
            title: 'Understanding Music Theory',
            description:
              'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
          },
          {
            title: 'The Art of Songwriting',
            description:
              'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
          },
          {
            title: 'Mastering Your Instrument',
            description:
              'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
          },
          {
            title: 'Music Production Essentials',
            description:
              'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
          },
          // Added two more webinars
          {
            title: 'Live Performance Techniques',
            description:
              'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
          },
          {
            title: 'Digital Music Marketing',
            description:
              'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
          },
    ]
  return (
    <div className="max-w-5xl mx-auto px-8 mt-5 py-4">
        <div className="text-center">
            <h2 className="text-teal-600 font-semibold text-base tracking-wide">FEATURED WEBINARS</h2>
            <p className="font-bold tracking-tight leading-8 mt-2 text-3xl text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={projects.map(p=>(
            {title : p.title,
                description : p.description,
                link : '/'}
            ))} />
        </div>
        <div className="text-center">
            <Link href={'/'}
                className="bg-white text-black px-5 py-2 rounded-md "
            >
                View all Webinars
            </Link>
        </div>
    </div>
  )
}

export default UpcomingWebinar