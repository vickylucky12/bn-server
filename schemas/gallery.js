export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'serviceImage',
      title: 'service Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: {type: 'serviceDetails'},
        },
      ],
    },
  ],
}
