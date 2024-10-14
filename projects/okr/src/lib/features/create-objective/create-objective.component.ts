import { SubscriptionService } from '@abp/ng.core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '@core';
import { DeadlineType, OKRLevel, OKRsService, OwnerType } from '@proxy/okrs';

@Component({
  selector: 'okr-create-objective',
  templateUrl: './create-objective.component.html',
  styleUrl: './create-objective.component.css',
  providers: [SubscriptionService]
})
export class CreateObjectiveComponent {

  isEditMode = false;

  objective = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", []),
    owner: new FormControl([], [Validators.required]),
    deadlineLevel: new FormControl('hard', [Validators.required]),
    objectiveLevel: new FormControl(OKRLevel.Company, [Validators.required]),
    deadline: new FormControl('', [Validators.required])
  })


  ownerOptions = [
    {
      key: 1,
      title: "Ashwin Pires",
      type: 'individual'
    },
    {
      key: 21,
      title: "Human Resource",
      type: "team"
    },
  ]

  deadlineOptions = [
    {
      key: "hard",
      title: "Hard Deadline"
    },
    {
      key: "soft",
      title: "Soft Deadline"
    }
  ]

  objectiveLevels = [
    {
      key: OKRLevel.Company,
      value: "Company"
    },
    {
      key: OKRLevel.Team,
      value: "Team"
    },
    {
      key: OKRLevel.Individual,
      value: "Individual"
    },
  ]

  /**
   *
   */
  constructor(@Inject(DIALOG_DATA) protected data, private okrService: OKRsService, private subscriptions: SubscriptionService, private userDataService: UserDataService) {

    if (data.objective)
      this.isEditMode = false;

    userDataService.GlobalConfig$.pipe(

    )

  }


  getSelectedOwnerItems(selected: any[]) {
    if (!selected)
      return [];

    return this.ownerOptions.filter(x => selected.includes(x.key));
  }

  getSelectedDeadlineItems(selected: any[]) {
    if (!selected)
      return [];

    return this.deadlineOptions.filter(x => selected.includes(x.key));
  }

  submit() {
    const form = this.objective.value;

    console.log(form);

    if (this.objective.invalid)
      return;

    let owners = form.owner?.map(x => this.ownerOptions.find(y => y.key == x)).map(x => ({ ownerId: x.key.toString(), objectiveId: null, ownerType: OwnerType[x.type] }))

    const obs$ = this.okrService.create({
      okrLevel: form.objectiveLevel,
      owners: owners,
      description: form.description,
      title: form.title,
      sessionId: null,
      deadlineType: DeadlineType.Soft,
      keyResults: [],
      deadline: new Date().toDateString()
    })

    this.subscriptions.addOne(obs$, (response) => {
      
    });
  }




}
