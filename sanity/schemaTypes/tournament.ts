import {defineField, defineType} from 'sanity'

export const tournamentType = defineType({
  name: 'tournament',
  title: 'Tournament Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tournament Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lake',
      title: 'Lake',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ramp',
      title: 'Boat Ramp',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Tournament Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'string',
      placeholder: 'e.g., 6:00 AM - 2:00 PM',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      description: 'Phone verification completed',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'lake',
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
      title: 'Date, Upcoming',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})

