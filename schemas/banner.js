export default {
  name: 'bannerDetails',
  title: 'Banner Details',
  type: 'object',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Banner Description',
      name: 'bannerDescription',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: (Rule) => Rule.required(),

      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
