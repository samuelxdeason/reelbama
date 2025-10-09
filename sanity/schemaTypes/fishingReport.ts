import {defineField, defineType} from 'sanity'

export const fishingReportType = defineType({
  name: 'fishingReport',
  title: 'Fishing Report',
  type: 'document',
  fields: [
    defineField({
      name: 'lake',
      title: 'Lake Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Report Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reporter',
      title: 'Reporter Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'conditions',
      title: 'Weather & Water Conditions',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'waterTemp',
      title: 'Water Temperature (°F)',
      type: 'number',
      validation: (rule) => rule.required().min(32).max(100),
    }),
    defineField({
      name: 'clarity',
      title: 'Water Clarity',
      type: 'string',
      options: {
        list: [
          {title: 'Clear (8-10 ft)', value: 'Clear (8-10 ft)'},
          {title: 'Clear (6-8 ft)', value: 'Clear (6-8 ft)'},
          {title: 'Stained (3-4 ft)', value: 'Stained (3-4 ft)'},
          {title: 'Muddy (1-2 ft)', value: 'Muddy (1-2 ft)'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'report',
      title: 'Fishing Report',
      type: 'text',
      rows: 5,
      description: 'Detailed fishing report and techniques',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'catchReport',
      title: 'Catch Report',
      type: 'text',
      rows: 3,
      description: 'What was caught, sizes, etc.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bestLures',
      title: 'Best Lures',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'lake',
      subtitle: 'date',
      reporter: 'reporter',
    },
    prepare({title, subtitle, reporter}) {
      return {
        title: title,
        subtitle: `${subtitle} - ${reporter}`,
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

