import {defineField, defineType} from 'sanity'

export const postType = defineType({
    name: 'signup',
    title: 'Sign Up',
    type: 'document',
    fields: [
        defineField({
            name: 'fullname',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(20),
          }),
    defineField({
        name: 'username',
        title: 'Username',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(20),
      }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      }),
    defineField({
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: Rule => Rule.required().min(6),
}),
    defineField({
        name: 'confirmPassword',
        title: 'Confirm Password',
        type: 'string',
        validation: Rule => Rule.required().min(6),
    }),
    
  ],
})
