export default {
  name: 'contactDetails',
  title: 'Contact Details',
  type: 'object',
  fields: [
    {
      name: 'contactLeftHeading',
      title: 'Contact-Left Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactLeftDescription',
      title: 'Contact-Left description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
      validation: (Rule) => Rule.required(),

      options: {
        hotspot: true,
      },
    },

    {
      name: 'contactRightHeading',
      title: 'Contact-Right Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactRightDescription',
      title: 'Contact-Right description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'faceBookURL',
      title: 'FaceBook URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagramURL',
      title: 'Instagram URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkedInURL',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'twitterURL',
      title: 'Twitter URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
}
