import axios from 'axios'

const ContactApi=axios.create({
    baseURL:"https://www.hoogaaa.com/hoogaaa/api/v1/action"
})

export default ContactApi