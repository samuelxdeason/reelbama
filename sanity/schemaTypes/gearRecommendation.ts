import {defineField, defineType} from 'sanity'

export const gearRecommendationType = defineType({
  name: 'gearRecommendation',
  title: 'Gear Recommendation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Rods', value: 'Rods'},
          {title: 'Reels', value: 'Reels'},
          {title: 'Lures', value: 'Lures'},
          {title: 'Line', value: 'Line'},
          {title: 'Tackle', value: 'Tackle'},
          {title: 'Apparel', value: 'Apparel'},
          {title: 'Accessories', value: 'Accessories'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      placeholder: '$99.99',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required().min(0).max(5),
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
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
      description: 'What this gear is best suited for',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          {title: 'In Stock', value: 'In Stock'},
          {title: 'Out of Stock', value: 'Out of Stock'},
          {title: 'Pre-Order', value: 'Pre-Order'},
        ],
      },
      initialValue: 'In Stock',
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate/Buy URL',
      type: 'url',
      description: 'Link to purchase (can be affiliate link)',
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
      subtitle: 'category',
      media: 'image',
    },
  },
})

