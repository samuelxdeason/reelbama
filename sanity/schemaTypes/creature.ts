import {defineField, defineType} from 'sanity'

export const creatureType = defineType({
  name: 'creature',
  title: 'Wildly Alabama Creature',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Creature Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

