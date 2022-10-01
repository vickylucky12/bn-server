export default {
  name: 'serviceDetails',
  title: 'Service Details',
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
      name: 'serviceHeading',
      title: 'service Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'serviceDescription',
      title: 'service Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),

      options: {
        source: 'serviceHeading',
        maxLength: 96,
      },
    },
  ],
}
