export default {
  name: 'testimonialArray',
  title: 'Testimonials Array',
  type: 'object',
  fields: [
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'personName',
      title: 'Person Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
