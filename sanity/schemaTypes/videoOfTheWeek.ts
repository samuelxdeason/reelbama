import {defineField, defineType} from 'sanity'

export const videoOfTheWeekType = defineType({
  name: 'videoOfTheWeek',
  title: 'GoPro Video of the Week',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'creator',
      title: 'Creator Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail (optional)',
      type: 'image',
      description: 'Upload custom thumbnail or leave empty to use YouTube thumbnail',
      options: {
        hotspot: true,
      },
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
      description: 'Mark as currently featured video',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'creator',
      media: 'thumbnail',
    },
  },
})

