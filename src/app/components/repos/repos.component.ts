import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit , OnChanges{

  @Input() repoUrl: string;
  repos = [] ;


  constructor( private git : GithubService, private ref : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.repoUrl){
      this.git.getRepos(this.repoUrl).subscribe((repos: []) => {
        this.repos = repos;
        this.ref.detectChanges();
      },(err)=>{
        console.log('error in ng on changes');
      });
    }
  }


}
