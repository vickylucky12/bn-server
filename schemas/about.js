export default {
  name: 'aboutDetails',
  title: 'About Details',
  type: 'object',
  fields: [
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      auto: 'formate',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}
