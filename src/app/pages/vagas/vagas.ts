import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Vacancy } from "../../components/vacancy/vacancy";
import { VacancyDetails } from "../../components/vacancy-details/vacancy-details";

@Component({
  selector: 'app-vagas',
  imports: [Navbar, Vacancy, VacancyDetails],
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss'
})
export class Vagas {
  jobs: any = [
    {
      id: 1,
      title: 'TechMoz Lda Desenvolvedor React Senior',
      company: 'TechMoz Lda',
      location: 'Maputo',
      salary: 'MZN 75 000 - 120 000',
      postedAgo: '5 dias atrás',
      favorite: false
    },
    // ...more jobs
  ];
  selectedJobId = 1;

  selectJob(id: number) {
    this.selectedJobId = id;
  }
  toggleFavorite(job: any) {
    job.favorite = !job.favorite;
  }
}
