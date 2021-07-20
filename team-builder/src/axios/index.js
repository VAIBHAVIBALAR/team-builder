import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Mich',
    email: 'mich@mich.com',
    role: 'Student',
  },
  {id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Tom',
    email: 'tom@tom.com',
    role: 'Frontend Team',
},
{id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Jo',
    email: 'jo@john.com',
    role: 'Backend Team',
},
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { name, email, role }) {
    const newTeamMate = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMate })
  }
}
