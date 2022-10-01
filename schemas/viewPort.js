export default {
  name: 'viewPortDetails',
  title: 'View Port Details',
  type: 'object',
  fields: [
    {
      name: 'viewPortImage',
      title: 'View Port Image',
      type: 'image',
      validation: (Rule) => Rule.required(),

      options: {
        hotspot: true,
      },
    },

    {
      name: 'viewPortFirstHeading',
      title: 'View-Port First Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'viewPortFirstDescription',
      title: 'View-Port First Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'viewPortSecondHeading',
      title: 'View-Port Second Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'viewPortSecondDescription',
      title: 'View-Port Second Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'viewPortThirdHeading',
      title: 'View-Port Third Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'viewPortThirdDescription',
      title: 'View-Port Third Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
