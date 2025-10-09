import {defineField, defineType} from 'sanity'

export const calendarEventType = defineType({
  name: 'calendarEvent',
  title: 'Important Calendar Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      return {
        title: title,
        subtitle: `${date} - ${subtitle}`,
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

