import {defineField, defineType} from 'sanity'

export const guideType = defineType({
  name: 'guide',
  title: 'Fishing Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Guide Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region / Lake',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Boat Provided', value: 'Boat Provided'},
          {title: 'Gear Included', value: 'Gear Included'},
          {title: 'Photo Service', value: 'Photo Service'},
        ],
      },
    }),
    defineField({
      name: 'tripTypes',
      title: 'Trip Types',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., Half Day, Full Day, Multi-Day',
    }),
    defineField({
      name: 'licensed',
      title: 'Licensed Professional',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      description: 'Guide has been verified',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'region',
    },
  },
})

