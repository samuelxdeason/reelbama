import {defineField, defineType} from 'sanity'

export const photoOfTheWeekType = defineType({
  name: 'photoOfTheWeek',
  title: 'Photo of the Week',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
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
      name: 'weekOf',
      title: 'Week Of',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Currently Featured',
      type: 'boolean',
      description: 'Mark as currently featured photo',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'photographer',
      media: 'photo',
    },
  },
})

