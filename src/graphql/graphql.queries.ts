import {gql} from 'apollo-angular';

const TEST_CONNECTION = gql`
query{
  testConnection
}`;

const ADD_USER = gql`
mutation {
	addUser(
		user: {
			name: "João Baptista"
			cpf: "111111111111"
			birthdate: "29/01/2000"
			username: "JoaoGamer"
			email: "joaogamer@teste.com"
			password_hash: "@#!324asdadkllkj_*&sdfas"
			classe: "MAGO"
		}
	) {
		id
		name
		birthdate
		cpf
		username
		email
		password_hash
		collegeInformation {
			id
			course {
				id
				name
				university {
					id
					name
				}
			}
			period
		}

		color_hex
		userMood
		role
		profile_avatar
		profile_picture
		hobbies {
			id
			hobbie
		}
		specialties {
			id
			speciality
		}
		strongWeakSkills {
			skill
			type
		}

		deleted
	}
}
`;

const LIST_ALL_USERDATA= gql`
query {
	listAllUsers {
		id
		name
		birthdate
		cpf
		username
		email
		color_hex
		collegeInformation {
			id
			course {
				id
				name
				university {
					id
					name
				}
			}
			period
		}
		userMood
		role
		profile_avatar
		profile_picture
		hobbies {
			id
			hobbie
		}
		specialties {
			id
			speciality
		}
		strongWeakSkills {
			skill
			type
		}
		creation_date
		deleted
	}
}
`;

const FIND_BY_ID = gql`
query ($id:BigInteger) {
  findUserById(id:$id){
  id
  name
  birthdate
  cpf
  classe
  username
  email
  password_hash
  collegeInformation {
    id
    course {
      id
      name
      university {
        id
        name
      }
    }
    period
  }

  color_hex
  userMood
  role
  profile_avatar
  profile_picture
  hobbies {
    id
    hobbie
  }
  specialties {
    id
    speciality
  }
  strongWeakSkills {
    skill
    type
  }

  deleted
  }
}
`;

export{TEST_CONNECTION};
export{ADD_USER};
export {LIST_ALL_USERDATA};
export {FIND_BY_ID};
