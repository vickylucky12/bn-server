export default {
  name: 'webInfoDetails',
  title: 'WebInfo Details',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      auto: 'formate',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'websiteName',
      title: 'Website Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
