import {defineField, defineType} from 'sanity'

export const catchOfTheWeekType = defineType({
  name: 'catchOfTheWeek',
  title: 'Catch of the Week',
  type: 'document',
  fields: [
    defineField({
      name: 'angler',
      title: 'Angler Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fish',
      title: 'Fish Species',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weightLbs',
      title: 'Weight (lbs)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateCaught',
      title: 'Date Caught',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as featured to show on homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'angler',
      subtitle: 'fish',
      media: 'photo',
    },
  },
})

