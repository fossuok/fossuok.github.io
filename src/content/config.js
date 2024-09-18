
import { z, defineCollection } from 'astro:content';

const staticCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      pubDate: z.date(),
      tags: z.array(z.string()),
    }),
    extend: {
      get url() {
        return `/blog/${this.slug}`;
      },
    },
});

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        date: z.date(),
        time: z.string(),
        location: z.string(),
        tags: z.array(z.string()),
        registrationLink: z.string().optional(),
        speakers: z.array(z.object({
            name: z.string(),
            title: z.string(),
            company: z.string(),
            image: z.object({
                url: z.string(),
                alt: z.string(),
            }),
        })),
    }),
    extend: {
        get url() {
            return `/events/${this.slug}`;
        },
    },
});

export const collections = {
  'static': staticCollection,
  'blog': blogCollection,
  'events': eventsCollection,
};