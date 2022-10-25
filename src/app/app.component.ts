import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FIND_BY_ID } from 'src/graphql/graphql.queries';
import { User } from 'src/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Perfil de Joao';






  constructor(private apollo: Apollo){}

  user:User=new User;

  getAge(birthdate:string){

    let birthdateArr = birthdate.split("/"), day_str = birthdateArr[0], month_str = birthdateArr[1], year_str = birthdateArr[2]
      var d = new Date,
          ano_atual = d.getFullYear(),
          mes_atual = d.getMonth() + 1,
          dia_atual = d.getDate(),

          year = parseInt(year_str),
          month = parseInt(month_str),
          day = parseInt(day_str),

          age = ano_atual - year;

      if (mes_atual < month || mes_atual == month && dia_atual < day) {
          age--;
      }
      console.log("IDADE: "+ age)
      return age < 0 ? 0 : age;
  }


  ngOnInit(): void {

    this.apollo.watchQuery<any>({

      query: FIND_BY_ID,
      variables: {
        id:1
      }
    })
    .valueChanges
    .subscribe(({data}) => {
      this.user.competencias_fortes=""
      this.user.competencias_fracas=""
      this.user.hobbies =""
      this.user.especialidades=""



      this.user.id =data.findUserById.id
      this.user.name =data.findUserById.name
      this.user.username =data.findUserById.username
      this.user.classe = data.findUserById.classe
      this.user.profile_avatar = data.findUserById.profile_avatar
      this.user.birthdate = data.findUserById.birthdate
      this.user.age = this.getAge(this.user.birthdate)
      this.user.mood = data.findUserById.userMood
      this.user.course = data.findUserById.collegeInformation.course.name
      this.user.university = data.findUserById.collegeInformation.course.university.name

      for(let i = 0; i<data.findUserById.strongWeakSkills.length; i++){
        if(data.findUserById.strongWeakSkills[i].type =="STRONG"){
          this.user.competencias_fortes=data.findUserById.strongWeakSkills[i].skill;
        }else this.user.competencias_fracas=data.findUserById.strongWeakSkills[i].skill;
      }

      this.user.hobbies += data.findUserById.hobbies[0].hobbie;
      this.user.especialidades += data.findUserById.specialties[0].speciality;


      console.log("hobbies: "+ this.user.hobbies);
      console.log("especialidades: " +this.user.especialidades);
      return this.user;
    })

  }
}
