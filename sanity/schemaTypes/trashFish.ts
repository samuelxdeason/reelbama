import {defineField, defineType} from 'sanity'

export const trashFishType = defineType({
  name: 'trashFish',
  title: 'Trash Fish of the Week',
  type: 'document',
  fields: [
    defineField({
      name: 'offender',
      title: 'Offender Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'violation',
      title: 'Violation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fine',
      title: 'Fine Amount ($)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'date',
      title: 'Date of Incident',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Currently Featured',
      type: 'boolean',
      description: 'Mark as current trash fish of the week',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'offender',
      subtitle: 'violation',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      return {
        title: title,
        subtitle: `${subtitle} - ${date}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
})

