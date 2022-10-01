export default {
  name: 'basicInfo',
  title: 'Basic Info',
  type: 'document',
  fields: [
    {
      name: 'webInfo',
      title: 'Web Info',
      type: 'webInfoDetails',
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'bannerDetails',
    },
    {
      name: 'viewPort',
      title: 'View Port',
      type: 'viewPortDetails',
    },

    {
      name: 'about',
      title: 'About',
      type: 'aboutDetails',
    },

    {
      name: 'contact',
      title: 'Contact',
      type: 'contactDetails',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          title: 'testimonial',
          type: 'testimonialArray',
        },
      ],
    },
    {
      name: 'serviceDescription',
      title: 'service Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
