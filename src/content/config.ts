import { defineCollection, z } from 'astro:content';

// One file per STEM box. Add a new box by dropping a new .md file
// into src/content/boxes/ — no component code changes needed.
const boxes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['available', 'coming-soon']),
    // Short line shown in the collapsed row (blends focus + a taste of uses)
    summary: z.string(),
    focus: z.string(),
    contents: z.string(),
    potentialUses: z.string(),
    // Marks the box that should start expanded on page load
    flagship: z.boolean().default(false),
    image: z.string().optional(),
    // Lower number = higher up the list
    order: z.number().default(0),
  }),
});

// One file per sponsor or partner. `kind` decides which grid
// section (Our Sponsors vs. Our Partners) it renders in.
const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kind: z.enum(['sponsor', 'partner']),
    blurb: z.string(),
    website: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    logo: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { boxes, partners };
